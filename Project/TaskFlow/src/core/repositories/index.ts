/**
 * INTERVIEW CONCEPT: Module Organization and Barrel Exports
 * 
 * This file demonstrates:
 * - Barrel export pattern for repositories
 * - Centralized repository access
 * - Clean import statements for consumers
 * 
 * TODO: Study the barrel pattern benefits:
 * - Single import point for all repositories
 * - Easier refactoring and code organization
 * - Cleaner import statements in services
 */

// Export all repository classes
export { BaseRepository } from './BaseRepository';
export { TaskRepository } from './TaskRepository';
export { UserRepository } from './UserRepository';

// TODO: Add more repositories as you create them
// export { ProjectRepository } from './ProjectRepository';
// export { CommentRepository } from './CommentRepository';

/**
 * Repository factory for dependency injection
 * INTERVIEW CONCEPT: Factory Pattern and Dependency Injection
 * 
 * TODO: Study the factory pattern:
 * - Centralized creation of repository instances
 * - Enables easy testing with mock repositories
 * - Supports dependency injection patterns
 * - Can be extended for different storage backends
 */
export class RepositoryFactory {
  private static taskRepository: TaskRepository;
  private static userRepository: UserRepository;

  /**
   * Get TaskRepository instance (singleton pattern)
   * INTERVIEW CONCEPT: Singleton Pattern
   * 
   * TODO: Implement singleton pattern:
   * - Create instance only once
   * - Return same instance on subsequent calls
   * - Useful for maintaining state and performance
   */
  static getTaskRepository(): TaskRepository {
    // TODO: Implement singleton pattern
    // - Check if instance exists
    // - Create if not exists
    // - Return instance
    throw new Error('TODO: Implement TaskRepository singleton');
  }

  /**
   * Get UserRepository instance (singleton pattern)
   */
  static getUserRepository(): UserRepository {
    // TODO: Implement singleton pattern for UserRepository
    throw new Error('TODO: Implement UserRepository singleton');
  }

  /**
   * Reset all repositories (useful for testing)
   * INTERVIEW CONCEPT: Test Utilities
   * 
   * TODO: Implement repository reset:
   * - Clear all repository data
   * - Reset singleton instances
   * - Useful for test isolation
   */
  static resetAll(): void {
    // TODO: Clear all repositories and reset singletons
    // - Set all static instances to undefined
    // - Call clear() on existing instances
    throw new Error('TODO: Implement repository reset');
  }

  /**
   * Initialize repositories with test data
   * INTERVIEW CONCEPT: Test Data Seeding
   * 
   * TODO: Implement test data seeding:
   * - Create sample users and tasks
   * - Useful for development and testing
   * - Demonstrates repository usage
   */
  static async seedTestData(): Promise<void> {
    // TODO: Create sample data for development/testing
    // - Create sample users (regular and admin)
    // - Create sample tasks with various statuses
    // - Show repository method usage
    throw new Error('TODO: Implement test data seeding');
  }
}