/**
 * INTERVIEW CONCEPT: Event-Driven Architecture, Pub/Sub Pattern, Observer Pattern
 * 
 * This file demonstrates:
 * - Event-driven architecture implementation
 * - Publisher/Subscriber pattern
 * - Observer pattern with TypeScript generics
 * - Asynchronous event handling
 * - Event system decoupling
 * 
 * Common interview questions this addresses:
 * - "How do you implement event-driven architecture?"
 * - "Explain the Observer pattern and its benefits"
 * - "How do you handle asynchronous events in TypeScript?"
 * - "What is the pub/sub pattern and when would you use it?"
 */

/**
 * INTERVIEW CONCEPT: Event Type System
 * 
 * TODO: Study the event type definitions:
 * - Generic event interface for type safety
 * - Specific event types for different domain events
 * - Event listener function types
 * - Event data payload structures
 */
export interface BaseEvent {
  type: string;
  timestamp: Date;
  source: string;
  data: any;
}

export interface TaskEvent extends BaseEvent {
  type: 'task:created' | 'task:updated' | 'task:completed' | 'task:deleted' | 'task:assigned';
  data: {
    taskId: string;
    userId: string;
    previousState?: any;
    newState?: any;
  };
}

export interface UserEvent extends BaseEvent {
  type: 'user:created' | 'user:updated' | 'user:login' | 'user:logout' | 'user:deactivated';
  data: {
    userId: string;
    userRole: 'user' | 'admin';
    metadata?: any;
  };
}

export type AppEvent = TaskEvent | UserEvent;

export type EventListener<T extends BaseEvent = AppEvent> = (event: T) => Promise<void> | void;

/**
 * INTERVIEW CONCEPT: Event Bus Implementation
 * 
 * TODO: Study the EventBus pattern:
 * - Central event coordination
 * - Type-safe event subscription
 * - Asynchronous event handling
 * - Error handling in event listeners
 * - Event listener lifecycle management
 */
export class EventBus {
  private listeners: Map<string, EventListener[]> = new Map();
  private eventHistory: BaseEvent[] = [];
  private maxHistorySize: number = 1000;

  /**
   * Subscribe to events of a specific type
   * INTERVIEW CONCEPT: Observer Pattern Subscription
   * 
   * TODO: Implement event subscription:
   * - Add listener to specific event type
   * - Return unsubscribe function
   * - Handle duplicate listeners
   * - Support wildcard event types
   */
  subscribe<T extends BaseEvent>(eventType: string, listener: EventListener<T>): () => void {
    // TODO: Implement event subscription
    
    // Step 1: Get or create listener array for event type
    // - Use Map.get() to find existing listeners
    // - Create new array if none exist
    
    // Step 2: Add listener to array
    // - Check for duplicates (optional)
    // - Push listener to array
    
    // Step 3: Return unsubscribe function
    // - Return function that removes this specific listener
    // - Handle cleanup of empty listener arrays
    
    throw new Error('TODO: Implement subscribe method');
  }

  /**
   * Emit an event to all subscribers
   * INTERVIEW CONCEPT: Event Publishing and Error Handling
   * 
   * TODO: Implement event emission:
   * - Find all listeners for event type
   * - Call each listener asynchronously
   * - Handle listener errors gracefully
   * - Add event to history
   * - Support wildcard listeners
   */
  async emit<T extends BaseEvent>(event: T): Promise<void> {
    // TODO: Implement event emission
    
    // Step 1: Add event to history
    // - Push to eventHistory array
    // - Maintain history size limit
    
    // Step 2: Find listeners for this event type
    // - Get listeners from Map
    // - Also check for wildcard listeners ('*')
    
    // Step 3: Call all listeners
    // - Use Promise.allSettled to handle errors
    // - Call each listener with event data
    // - Log errors but don't throw
    
    // Step 4: Handle listener errors
    // - Log failed listeners
    // - Continue with other listeners
    
    throw new Error('TODO: Implement emit method');
  }

  /**
   * Emit event synchronously (for critical events)
   * INTERVIEW CONCEPT: Synchronous vs Asynchronous Event Handling
   * 
   * TODO: Implement synchronous emission:
   * - Call listeners in sequence
   * - Stop on first error
   * - Use for critical system events
   */
  emitSync<T extends BaseEvent>(event: T): void {
    // TODO: Implement synchronous event emission
    
    // Step 1: Add to history
    
    // Step 2: Get listeners
    
    // Step 3: Call each listener synchronously
    // - Use for...of loop
    // - Throw on first error
    
    throw new Error('TODO: Implement emitSync method');
  }

  /**
   * Remove all listeners for an event type
   * INTERVIEW CONCEPT: Event Cleanup
   * 
   * TODO: Implement listener cleanup:
   * - Remove all listeners for event type
   * - Clean up Map entries
   * - Return count of removed listeners
   */
  unsubscribeAll(eventType: string): number {
    // TODO: Remove all listeners for event type
    
    // Step 1: Get listener count for return value
    
    // Step 2: Remove from Map
    // - Use Map.delete()
    
    // Step 3: Return count of removed listeners
    
    throw new Error('TODO: Implement unsubscribeAll method');
  }

  /**
   * Get event history
   * INTERVIEW CONCEPT: Event Auditing and Debugging
   * 
   * TODO: Implement event history retrieval:
   * - Return copy of event history
   * - Support filtering by event type
   * - Support date range filtering
   */
  getEventHistory(eventType?: string, limit?: number): BaseEvent[] {
    // TODO: Return filtered event history
    
    // Step 1: Start with full history
    
    // Step 2: Filter by event type if provided
    
    // Step 3: Apply limit if provided
    
    // Step 4: Return copy (don't expose internal array)
    
    throw new Error('TODO: Implement getEventHistory method');
  }

  /**
   * Clear event history
   * INTERVIEW CONCEPT: Memory Management
   * 
   * TODO: Implement history cleanup:
   * - Clear event history array
   * - Useful for testing and memory management
   */
  clearHistory(): void {
    // TODO: Clear event history
    // - Reset eventHistory array
    throw new Error('TODO: Implement clearHistory method');
  }

  /**
   * Get listener statistics
   * INTERVIEW CONCEPT: System Monitoring and Debugging
   * 
   * TODO: Implement listener statistics:
   * - Count listeners by event type
   * - Show total listener count
   * - Useful for debugging and monitoring
   */
  getListenerStats(): { eventType: string; listenerCount: number; }[] {
    // TODO: Return listener statistics
    
    // Step 1: Iterate through listeners Map
    
    // Step 2: Count listeners for each event type
    
    // Step 3: Return structured statistics
    
    throw new Error('TODO: Implement getListenerStats method');
  }

  /**
   * Wait for specific event (useful for testing)
   * INTERVIEW CONCEPT: Promise-Based Event Waiting
   * 
   * TODO: Implement event waiting:
   * - Return Promise that resolves when event occurs
   * - Support timeout for Promise rejection
   * - Useful for testing async operations
   */
  waitForEvent<T extends BaseEvent>(eventType: string, timeout: number = 5000): Promise<T> {
    // TODO: Return Promise that resolves when event is emitted
    
    // Step 1: Create Promise
    
    // Step 2: Subscribe to event
    // - Resolve Promise when event occurs
    // - Unsubscribe after first event
    
    // Step 3: Set timeout
    // - Reject Promise if timeout reached
    // - Clean up subscription on timeout
    
    throw new Error('TODO: Implement waitForEvent method');
  }

  /**
   * Batch emit multiple events
   * INTERVIEW CONCEPT: Batch Operations and Performance
   * 
   * TODO: Implement batch event emission:
   * - Emit multiple events efficiently
   * - Handle errors in batch processing
   * - Useful for bulk operations
   */
  async emitBatch(events: BaseEvent[]): Promise<void> {
    // TODO: Emit multiple events in batch
    
    // Step 1: Validate all events
    
    // Step 2: Emit events concurrently
    // - Use Promise.allSettled
    
    // Step 3: Handle batch errors
    // - Log failed events
    // - Continue with successful events
    
    throw new Error('TODO: Implement emitBatch method');
  }

  /**
   * Private helper methods
   * INTERVIEW CONCEPT: Private Helper Methods
   */

  /**
   * Validate event structure
   */
  private validateEvent(event: BaseEvent): boolean {
    // TODO: Validate event has required properties
    // - Check type, timestamp, source exist
    // - Validate data structure
    // - Return boolean indicating validity
    throw new Error('TODO: Implement validateEvent');
  }

  /**
   * Trim event history to max size
   */
  private trimHistory(): void {
    // TODO: Keep history within size limit
    // - Remove oldest events if over limit
    // - Use Array.slice() to trim
    throw new Error('TODO: Implement trimHistory');
  }

  /**
   * Handle listener error
   */
  private handleListenerError(error: Error, eventType: string, listener: EventListener): void {
    // TODO: Handle errors from event listeners
    // - Log error with context
    // - Optionally emit error event
    // - Don't let listener errors crash system
    throw new Error('TODO: Implement handleListenerError');
  }
}