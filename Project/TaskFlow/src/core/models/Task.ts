/**
 * INTERVIEW CONCEPT: TypeScript Interfaces, Optional Properties, Union Types
 * 
 * This file demonstrates:
 * - Interface definitions with optional properties (?)
 * - Union types for restricted values
 * - Date handling in TypeScript
 * - Array typing with string[]
 * 
 * Common interview questions this addresses:
 * - "How do you define object structures in TypeScript?"
 * - "What's the difference between optional and required properties?"
 * - "How do you handle enums vs union types?"
 */

// Union types for restricted values - shows type safety
export type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'cancelled';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

/**
 * Main Task interface - demonstrates comprehensive type definitions
 * 
 * TODO: Understand how each property type works:
 * - string: Basic primitive type
 * - string?: Optional property (can be undefined) 
 * - Date: Built-in Date object type
 * - string[]: Array of strings
 * - Union types: Restricted to specific values
 */
export interface Task {
  id: string;                    // Unique identifier - always required
  title: string;                 // Task title - required, user-facing
  description?: string;          // Optional detailed description
  status: TaskStatus;            // Current state - restricted values
  priority: TaskPriority;        // Importance level - restricted values
  dueDate?: Date;               // Optional deadline
  tags: string[];               // Array of category tags
  createdAt: Date;              // Creation timestamp
  updatedAt: Date;              // Last modification timestamp
  assignedTo?: string;          // Optional user ID assignment
}

/**
 * Request interfaces for API-like operations
 * These show how to create specialized types for different operations
 */

/**
 * INTERVIEW CONCEPT: Utility Types - Omit<T, K>
 * 
 * TODO: Understand how Omit works:
 * - Takes Task interface and removes specified properties
 * - Creates new type without id, createdAt, updatedAt
 * - Shows TypeScript's built-in utility types
 */
export interface CreateTaskRequest extends Omit<Task, 'id' | 'createdAt' | 'updatedAt'> {
  // This interface has all Task properties except the omitted ones
  // Shows inheritance + utility type combination
}

/**
 * INTERVIEW CONCEPT: Utility Types - Partial<T>
 * 
 * TODO: Understand how Partial works:
 * - Makes ALL properties optional
 * - Perfect for update operations
 * - Commonly used in PATCH operations
 */
export interface UpdateTaskRequest extends Partial<Omit<Task, 'id' | 'createdAt'>> {
  // All properties optional except id and createdAt
  // updatedAt will be set automatically
}

/**
 * Filter and query interfaces
 * These demonstrate complex type combinations
 */
export interface TaskFilters {
  status?: TaskStatus[];         // Array of statuses to match
  priority?: TaskPriority[];     // Array of priorities to match
  assignedTo?: string;          // Filter by assignee
  tags?: string[];              // Filter by tags (any match)
  dueBefore?: Date;             // Tasks due before this date
  dueAfter?: Date;              // Tasks due after this date
  createdBefore?: Date;         // Tasks created before this date
  createdAfter?: Date;          // Tasks created after this date
}

/**
 * INTERVIEW CONCEPT: Complex Data Structures
 * 
 * TODO: Study this structure to understand:
 * - Nested object types
 * - Array of objects
 * - Combining primitive and complex types
 */
export interface TaskAnalytics {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  inProgressTasks: number;
  overdueTasks: number;
  completionRate: number;       // Percentage
  averageCompletionTime: number; // Days
  tasksByPriority: {
    low: number;
    medium: number;
    high: number;
    urgent: number;
  };
  tasksByMonth: {
    month: string;              // YYYY-MM format
    created: number;
    completed: number;
  }[];
  popularTags: {
    tag: string;
    count: number;
  }[];
}

/**
 * Constants and defaults
 * Shows how to define reusable values with proper typing
 */
export const DEFAULT_TASK_STATUS: TaskStatus = 'pending';
export const DEFAULT_TASK_PRIORITY: TaskPriority = 'medium';

export const TASK_STATUS_OPTIONS: TaskStatus[] = ['pending', 'in-progress', 'completed', 'cancelled'];
export const TASK_PRIORITY_OPTIONS: TaskPriority[] = ['low', 'medium', 'high', 'urgent'];

/**
 * Type guards for runtime type checking
 * INTERVIEW CONCEPT: Type Guards vs Type Assertions
 * 
 * TODO: Implement these type guard functions:
 * - Use 'typeof' and property checks
 * - Return 'value is Type' syntax
 * - Provide runtime type safety
 */
export function isValidTaskStatus(status: string): status is TaskStatus {
  // TODO: Check if status is one of the valid TaskStatus values
  // This demonstrates runtime type checking
  throw new Error('TODO: Implement type guard for TaskStatus');
}

export function isValidTaskPriority(priority: string): priority is TaskPriority {
  // TODO: Check if priority is one of the valid TaskPriority values
  throw new Error('TODO: Implement type guard for TaskPriority');
}

export function isValidTask(obj: any): obj is Task {
  // TODO: Validate that obj has all required Task properties with correct types
  // This is crucial for validating data from external sources
  throw new Error('TODO: Implement comprehensive task validation');
}