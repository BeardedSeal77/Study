# 🏗️ JavaScript/TypeScript Interview Prep Project - Blueprint Guide

## 📋 Project Overview

**Project Name**: TaskFlow - Personal Task Management System  
**Folder Structure**: `Project/TaskFlow/`  
**Purpose**: Demonstrate key JavaScript/TypeScript concepts through a practical application

## 🎯 Project Scope & Learning Objectives

### **Core Interview Concepts Covered:**
1. **JavaScript Fundamentals**: Variables, functions, hoisting, closures
2. **Data Manipulation**: Array methods, object operations, data transformation
3. **Async Programming**: Promises, async/await, error handling
4. **TypeScript Types**: Interfaces, generics, utility types, type guards
5. **OOP Concepts**: Classes, inheritance, encapsulation, abstract classes
6. **Modern Features**: Destructuring, spread/rest, modules, decorators
7. **Error Handling**: Custom errors, validation, retry patterns
8. **Design Patterns**: Repository, Observer, Factory patterns

### **Additional Interview-Relevant Topics:**
- Event handling and pub/sub patterns
- Data persistence (localStorage simulation)
- API simulation with proper error handling
- Performance considerations (debouncing, caching)
- Testing-friendly architecture

## 🏗️ Project Architecture

```
Project/
└── TaskFlow/
    ├── src/
    │   ├── core/                 # Core business logic
    │   │   ├── models/           # Data models & interfaces
    │   │   ├── services/         # Business services
    │   │   ├── repositories/     # Data access layer
    │   │   └── utils/            # Utility functions
    │   ├── features/             # Feature modules
    │   │   ├── task-management/
    │   │   ├── user-management/
    │   │   └── analytics/
    │   ├── shared/               # Shared utilities
    │   │   ├── events/           # Event system
    │   │   ├── storage/          # Data persistence
    │   │   ├── validation/       # Input validation
    │   │   └── error-handling/   # Error management
    │   └── main.ts               # Application entry point
    ├── tests/                    # Test files structure
    ├── docs/                     # Documentation
    ├── package.json
    ├── tsconfig.json
    └── README.md
```

## 📝 Detailed File Structure & Requirements

### **Core Models (src/core/models/)**

```typescript
// Task.ts - Demonstrate interfaces, optional properties, union types
interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: Date;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  assignedTo?: string;
}

// User.ts - Show inheritance and role-based types
interface BaseUser {
  id: string;
  name: string;
  email: string;
}

interface RegularUser extends BaseUser {
  role: 'user';
  taskLimit: number;
}

interface AdminUser extends BaseUser {
  role: 'admin';
  permissions: Permission[];
}

// Analytics.ts - Demonstrate utility types and complex data structures
```

### **Repository Pattern (src/core/repositories/)**

```typescript
// BaseRepository.ts - Abstract class with generics
abstract class BaseRepository<T extends { id: string }> {
  protected items: Map<string, T> = new Map();
  
  abstract validate(item: T): boolean;
  
  // Common CRUD operations
  add(item: T): Promise<T>;
  update(id: string, updates: Partial<T>): Promise<T>;
  delete(id: string): Promise<boolean>;
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
}

// TaskRepository.ts - Concrete implementation
class TaskRepository extends BaseRepository<Task> {
  // Specific task operations
  findByStatus(status: TaskStatus): Promise<Task[]>;
  findByUser(userId: string): Promise<Task[]>;
  findOverdue(): Promise<Task[]>;
}
```

### **Service Layer (src/core/services/)**

```typescript
// TaskService.ts - Business logic with async/await, error handling
class TaskService {
  constructor(
    private taskRepo: TaskRepository,
    private userRepo: UserRepository,
    private eventBus: EventBus
  ) {}
  
  // Demonstrate async patterns, validation, error handling
  async createTask(taskData: CreateTaskRequest): Promise<Task>;
  async updateTask(id: string, updates: UpdateTaskRequest): Promise<Task>;
  async deleteTask(id: string): Promise<void>;
  async getTaskAnalytics(userId?: string): Promise<TaskAnalytics>;
}

// UserService.ts - User management with authentication patterns
// NotificationService.ts - Observer pattern implementation
```

### **Event System (src/shared/events/)**

```typescript
// EventBus.ts - Pub/Sub pattern, closures, callback functions
class EventBus {
  private listeners: Map<string, Function[]> = new Map();
  
  on(event: string, callback: Function): () => void; // Returns unsubscribe function
  emit(event: string, data?: any): void;
  off(event: string, callback: Function): void;
}

// Events.ts - Event type definitions and constants
```

### **Utility Functions (src/core/utils/)**

```typescript
// ArrayUtils.ts - Array method demonstrations
class ArrayUtils {
  static groupBy<T>(array: T[], keyFn: (item: T) => string): Record<string, T[]>;
  static unique<T>(array: T[]): T[];
  static sortBy<T>(array: T[], keyFn: (item: T) => any): T[];
  static chunk<T>(array: T[], size: number): T[][];
}

// DateUtils.ts - Date manipulation, formatting
// ValidationUtils.ts - Input validation with type guards
```

### **Error Handling (src/shared/error-handling/)**

```typescript
// CustomErrors.ts - Custom error classes
class ValidationError extends Error {
  constructor(public field: string, message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NotFoundError extends Error {
  constructor(resource: string, id: string) {
    super(`${resource} with id ${id} not found`);
    this.name = 'NotFoundError';
  }
}

// ErrorHandler.ts - Centralized error handling
```

### **Storage System (src/shared/storage/)**

```typescript
// StorageManager.ts - localStorage abstraction with type safety
class StorageManager<T> {
  constructor(private key: string) {}
  
  save(data: T): void;
  load(): T | null;
  clear(): void;
  exists(): boolean;
}

// DataPersistence.ts - Simulate database operations
```

## 🎯 Key Interview Concepts Demonstrated

### **JavaScript Fundamentals:**
- [ ] Variable declarations (`const`, `let`, scoping)
- [ ] Function types (arrow vs regular, `this` binding)
- [ ] Closures (event listeners, factory functions)
- [ ] Hoisting (function declarations in utils)
- [ ] Destructuring (parameter destructuring, object spread)

### **Data Manipulation:**
- [ ] Array methods (`.map()`, `.filter()`, `.reduce()` in analytics)
- [ ] Object operations (task updates, user profiles)
- [ ] Data transformation pipelines
- [ ] Sorting and grouping algorithms

### **Async Programming:**
- [ ] Promises and async/await throughout services
- [ ] Error handling with try/catch
- [ ] Concurrent operations (`Promise.all` for batch operations)
- [ ] Retry mechanisms for failed operations

### **TypeScript Features:**
- [ ] Interface definitions and inheritance
- [ ] Generic classes and functions
- [ ] Utility types (`Partial<T>`, `Pick<T>`, `Omit<T>`)
- [ ] Type guards and type assertions
- [ ] Optional chaining and nullish coalescing

### **OOP Concepts:**
- [ ] Abstract classes (BaseRepository)
- [ ] Access modifiers (`private`, `protected`, `public`)
- [ ] Inheritance and method overriding
- [ ] Composition over inheritance

### **Design Patterns:**
- [ ] Repository pattern for data access
- [ ] Observer pattern for events
- [ ] Factory pattern for object creation
- [ ] Singleton pattern for services

## 📋 Implementation Guidelines for Claude Code

### **Blueprint Creation Instructions:**

1. **Create the complete folder structure** as outlined above
2. **Generate all TypeScript files** with:
   - Interface/class declarations
   - Method signatures with proper typing
   - Comprehensive comments explaining what each part should do
   - TODO comments for implementation details
   - Import/export statements

3. **Include configuration files**:
   - `package.json` with necessary dependencies
   - `tsconfig.json` with proper compiler options
   - Basic test file templates

4. **Add documentation**:
   - README.md with project overview
   - Individual feature documentation
   - API documentation templates

### **Code Comment Style:**
```typescript
/**
 * INTERVIEW CONCEPT: [Concept being demonstrated]
 * 
 * TODO: Implement [specific functionality]
 * 
 * This should demonstrate:
 * - [Key learning point 1]
 * - [Key learning point 2]
 * 
 * Common interview questions this addresses:
 * - "How do you handle async operations?"
 * - "Explain TypeScript generics"
 * etc.
 */
```

### **File Template Example:**
```typescript
// src/core/services/TaskService.ts

import { Task, CreateTaskRequest, UpdateTaskRequest } from '../models/Task';
import { TaskRepository } from '../repositories/TaskRepository';
import { ValidationError, NotFoundError } from '../../shared/error-handling/CustomErrors';

/**
 * INTERVIEW CONCEPT: Service Layer Pattern, Async/Await, Error Handling
 * 
 * This service demonstrates:
 * - Dependency injection
 * - Async/await patterns
 * - Custom error handling
 * - Business logic separation
 */
export class TaskService {
  constructor(
    private taskRepository: TaskRepository,
    private eventBus: EventBus
  ) {
    // TODO: Initialize service dependencies
  }

  /**
   * INTERVIEW CONCEPT: Async operations with validation
   * 
   * TODO: Implement task creation with:
   * - Input validation using type guards
   * - Async repository operations
   * - Event emission on success
   * - Custom error throwing for validation failures
   * 
   * Should demonstrate:
   * - async/await syntax
   * - Error handling patterns
   * - Type safety with TypeScript
   */
  async createTask(taskData: CreateTaskRequest): Promise<Task> {
    // TODO: Validate input data
    // TODO: Check user permissions
    // TODO: Save to repository
    // TODO: Emit TaskCreated event
    // TODO: Return created task
    throw new Error('Not implemented');
  }

  /**
   * TODO: Implement additional methods...
   */
}
```

## 🚀 Usage Instructions

1. **Have Claude Code create the blueprint** using this guide
2. **Implement one feature at a time** following the TODOs
3. **Focus on demonstrating the interview concepts** clearly
4. **Add console.log statements** to show data flow
5. **Create simple test cases** to verify functionality

## 📚 Learning Path

### **Phase 1: Core Structure**
- Implement models and interfaces
- Set up repository pattern
- Create basic CRUD operations

### **Phase 2: Business Logic**
- Implement service layer
- Add validation and error handling
- Create event system

### **Phase 3: Advanced Features**
- Add analytics and reporting
- Implement caching and performance optimizations
- Add advanced TypeScript features

### **Phase 4: Integration**
- Connect all components
- Add comprehensive error handling
- Create demo scenarios

---

**This project structure will provide a comprehensive demonstration of JavaScript/TypeScript concepts commonly tested in interviews, while remaining manageable in scope and focused on practical learning outcomes.**