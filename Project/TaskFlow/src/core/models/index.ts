/**
 * INTERVIEW CONCEPT: Module Exports and Barrel Pattern
 * 
 * This file demonstrates:
 * - Barrel exports for clean imports
 * - Re-exporting types and interfaces
 * - Module organization patterns
 * 
 * TODO: Study the barrel pattern:
 * - Centralizes exports from multiple files
 * - Enables clean imports: import { Task, User } from './models'
 * - Reduces import complexity in consuming code
 */

// Re-export all Task-related types
export * from './Task';

// Re-export all User-related types  
export * from './User';

// TODO: Add more model exports as you create them
// export * from './Project';
// export * from './Team';
// export * from './Comment';

/**
 * Common types used across the application
 * INTERVIEW CONCEPT: Shared Types and Utilities
 */

/**
 * Generic ID type - ensures consistency across all entities
 */
export type EntityId = string;

/**
 * Timestamps interface - common pattern for all entities
 * INTERVIEW CONCEPT: Interface Composition
 * 
 * TODO: Understand composition pattern:
 * - Reusable interface for common properties
 * - Can be extended by other interfaces
 * - Ensures consistent timestamp handling
 */
export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Base entity interface - foundation for all data models
 * INTERVIEW CONCEPT: Generic Base Interface
 * 
 * TODO: Study base interface pattern:
 * - Common properties all entities share
 * - Can be extended by specific entity interfaces
 * - Enables generic repository patterns
 */
export interface BaseEntity extends Timestamps {
  id: EntityId;
}

/**
 * Pagination types for list operations
 * INTERVIEW CONCEPT: API Design Patterns
 */
export interface PaginationOptions {
  page: number;           // 1-based page number
  limit: number;          // Items per page
  sortBy?: string;        // Field to sort by
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResult<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

/**
 * Generic response wrapper for API operations
 * INTERVIEW CONCEPT: Generic Response Types
 * 
 * TODO: Study generic response pattern:
 * - Consistent structure for all API responses
 * - Success/error handling built-in
 * - Generic data type for flexibility
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  metadata?: {
    timestamp: Date;
    requestId?: string;
    version?: string;
  };
}

/**
 * Event types for the event system
 * INTERVIEW CONCEPT: Event-Driven Architecture
 * 
 * TODO: Understand event type patterns:
 * - Strongly typed events
 * - Payload interfaces for each event
 * - Enables type-safe event handling
 */
export interface BaseEvent {
  type: string;
  timestamp: Date;
  source: string;         // Which service/component emitted the event
}

export interface TaskEvent extends BaseEvent {
  taskId: string;
  userId: string;
}

export interface UserEvent extends BaseEvent {
  userId: string;
}