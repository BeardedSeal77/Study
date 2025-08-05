/**
 * INTERVIEW CONCEPT: Interface Inheritance, Discriminated Unions, Role-Based Types
 * 
 * This file demonstrates:
 * - Interface inheritance with 'extends'
 * - Discriminated unions for type safety
 * - Role-based access control patterns
 * - Type narrowing with literal types
 * 
 * Common interview questions this addresses:
 * - "How do you model different user types in TypeScript?"
 * - "What are discriminated unions and why use them?"
 * - "How do you implement role-based access control?"
 */

/**
 * Permission system for role-based access control
 * Shows enum-like behavior with union types
 */
export type Permission = 
  | 'read:tasks'
  | 'write:tasks'
  | 'delete:tasks'
  | 'read:users'
  | 'write:users'
  | 'delete:users'
  | 'read:analytics'
  | 'system:admin';

/**
 * Base user interface - common properties all users share
 * INTERVIEW CONCEPT: Interface as Contract
 * 
 * TODO: Understand the base interface pattern:
 * - Common properties defined once
 * - Extended by specific user types
 * - Ensures consistency across user types
 */
export interface BaseUser {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  lastLoginAt?: Date;           // Optional - might never have logged in
  isActive: boolean;            // Account status
}

/**
 * Regular user with task limitations
 * INTERVIEW CONCEPT: Interface Inheritance
 * 
 * TODO: Study how inheritance works:
 * - 'extends' keyword adds properties to base
 * - Literal type 'user' for discrimination
 * - Role-specific properties
 */
export interface RegularUser extends BaseUser {
  role: 'user';                 // Literal type for discrimination
  taskLimit: number;            // Business rule: limit tasks for regular users
  subscription?: {              // Optional subscription details
    plan: 'free' | 'premium';
    expiresAt?: Date;
  };
}

/**
 * Admin user with enhanced permissions
 * INTERVIEW CONCEPT: Role-Based Access Control
 * 
 * TODO: Compare with RegularUser:
 * - Different literal type for role
 * - Different properties for different capabilities
 * - Permission array for fine-grained control
 */
export interface AdminUser extends BaseUser {
  role: 'admin';                // Literal type for discrimination
  permissions: Permission[];    // Array of specific permissions
  department?: string;          // Optional organizational info
  canAccessAnalytics: boolean;  // Quick permission check
}

/**
 * INTERVIEW CONCEPT: Discriminated Unions
 * 
 * TODO: Understand discriminated unions:
 * - Union of interfaces with common 'role' property
 * - TypeScript can narrow type based on 'role' value
 * - Type-safe access to role-specific properties
 */
export type User = RegularUser | AdminUser;

/**
 * Request types for user operations
 * These show how to create API-friendly interfaces
 */
export interface CreateUserRequest {
  name: string;
  email: string;
  role: 'user' | 'admin';
  taskLimit?: number;           // Only relevant for regular users
  permissions?: Permission[];   // Only relevant for admin users
  department?: string;          // Only relevant for admin users
}

/**
 * INTERVIEW CONCEPT: Utility Types for Updates
 * 
 * TODO: Study the utility type combination:
 * - Partial makes all properties optional
 * - Omit removes properties that shouldn't be updated
 * - Perfect for PATCH operations
 */
export interface UpdateUserRequest extends Partial<Omit<User, 'id' | 'createdAt' | 'role'>> {
  // Can update most properties, but not id, createdAt, or role
  // Role changes require special admin operations
}

/**
 * User authentication and session types
 * INTERVIEW CONCEPT: Authentication Patterns
 */
export interface UserCredentials {
  email: string;
  password: string;             // In real app, this would be hashed
}

export interface UserSession {
  userId: string;
  role: 'user' | 'admin';
  permissions: Permission[];    // Flattened for easy checking
  expiresAt: Date;
  token?: string;               // JWT or similar
}

/**
 * User analytics and reporting
 * INTERVIEW CONCEPT: Complex Data Structures
 */
export interface UserAnalytics {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  usersByRole: {
    users: number;
    admins: number;
  };
  subscriptionBreakdown: {
    free: number;
    premium: number;
  };
  averageTasksPerUser: number;
  topActiveUsers: {
    userId: string;
    name: string;
    taskCount: number;
    completionRate: number;
  }[];
}

/**
 * Default permission sets for different roles
 * INTERVIEW CONCEPT: Constants with Typed Arrays
 * 
 * TODO: Study these permission patterns:
 * - Default permissions for each role
 * - Shows typical RBAC setup
 * - Type-safe permission arrays
 */
export const DEFAULT_USER_PERMISSIONS: Permission[] = [
  'read:tasks',
  'write:tasks'
];

export const DEFAULT_ADMIN_PERMISSIONS: Permission[] = [
  'read:tasks',
  'write:tasks',
  'delete:tasks',
  'read:users',
  'write:users',
  'read:analytics'
];

export const SUPER_ADMIN_PERMISSIONS: Permission[] = [
  ...DEFAULT_ADMIN_PERMISSIONS,
  'delete:users',
  'system:admin'
];

/**
 * Type guards for user discrimination
 * INTERVIEW CONCEPT: Type Guards with Discriminated Unions
 * 
 * TODO: Implement these type guards:
 * - Check the 'role' property to determine type
 * - Enable type-safe access to role-specific properties
 * - Essential for working with discriminated unions
 */
export function isRegularUser(user: User): user is RegularUser {
  // TODO: Check if user.role === 'user'
  // This narrows the type to RegularUser
  throw new Error('TODO: Implement RegularUser type guard');
}

export function isAdminUser(user: User): user is AdminUser {
  // TODO: Check if user.role === 'admin'
  // This narrows the type to AdminUser
  throw new Error('TODO: Implement AdminUser type guard');
}

/**
 * Permission checking utilities
 * INTERVIEW CONCEPT: Business Logic with Type Safety
 * 
 * TODO: Implement permission checking:
 * - Check if user has specific permission
 * - Handle both user types appropriately
 * - Demonstrate type narrowing in practice
 */
export function hasPermission(user: User, permission: Permission): boolean {
  // TODO: Implement permission checking logic
  // - Regular users: check against DEFAULT_USER_PERMISSIONS
  // - Admin users: check against their permissions array
  throw new Error('TODO: Implement permission checking');
}

export function canPerformAction(user: User, action: 'create' | 'read' | 'update' | 'delete', resource: 'tasks' | 'users'): boolean {
  // TODO: Map actions to permissions and check
  // Shows how to build business logic on top of type system
  throw new Error('TODO: Implement action permission checking');
}

/**
 * User validation functions
 * INTERVIEW CONCEPT: Data Validation with TypeScript
 */
export function isValidEmail(email: string): boolean {
  // TODO: Implement email validation
  // Basic regex check for interview demonstration
  throw new Error('TODO: Implement email validation');
}

export function isValidUser(obj: any): obj is User {
  // TODO: Validate complete user object
  // Check all required properties and their types
  throw new Error('TODO: Implement user validation');
}