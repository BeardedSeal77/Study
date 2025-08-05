/**
 * INTERVIEW CONCEPT: Custom Error Classes, Error Handling Patterns, Error Hierarchies
 * 
 * This file demonstrates:
 * - Custom error class inheritance
 * - Error type hierarchies for different domains
 * - Error context and metadata handling
 * - Serializable error objects
 * - Error categorization and handling strategies
 * 
 * Common interview questions this addresses:
 * - "How do you implement custom error classes in TypeScript?"
 * - "Show error handling patterns and best practices"
 * - "How do you structure error hierarchies for applications?"
 * - "Explain error propagation and handling strategies"
 */

/**
 * INTERVIEW CONCEPT: Base Custom Error Class
 * 
 * TODO: Study the base error pattern:
 * - Extends native Error class
 * - Adds custom properties for context
 * - Maintains stack trace
 * - Supports error serialization
 */
export abstract class BaseError extends Error {
  public readonly timestamp: Date;
  public readonly context?: Record<string, any>;
  public readonly code?: string;
  public readonly statusCode?: number;

  constructor(
    message: string,
    options?: {
      code?: string;
      statusCode?: number;
      context?: Record<string, any>;
      cause?: Error;
    }
  ) {
    super(message);
    
    // Set the prototype explicitly for proper instanceof checks
    Object.setPrototypeOf(this, new.target.prototype);
    
    // Set error name to class name
    this.name = this.constructor.name;
    
    // Capture stack trace, excluding constructor call from it
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    
    this.timestamp = new Date();
    this.code = options?.code;
    this.statusCode = options?.statusCode;
    this.context = options?.context;
    
    // Handle error chaining
    if (options?.cause) {
      (this as any).cause = options.cause;
    }
  }

  /**
   * Serialize error for logging or API responses
   * INTERVIEW CONCEPT: Error Serialization
   * 
   * TODO: Implement error serialization:
   * - Convert error to plain object
   * - Include all relevant properties
   * - Handle circular references
   * - Support different detail levels
   */
  toJSON(): Record<string, any> {
    // TODO: Serialize error to JSON
    // - Include message, name, code, timestamp
    // - Include context if present
    // - Handle stack trace (may exclude in production)
    // - Include cause chain if present
    throw new Error('TODO: Implement error serialization');
  }

  /**
   * Check if error is of specific type
   * INTERVIEW CONCEPT: Error Type Checking
   * 
   * TODO: Implement type checking:
   * - Type-safe error checking
   * - Support for error code matching
   * - Handle inheritance hierarchies
   */
  static isType<T extends BaseError>(error: unknown, errorClass: new (...args: any[]) => T): error is T {
    // TODO: Type-safe error checking
    // - Check instanceof relationship
    // - Handle prototype chain correctly
    // - Return type predicate
    throw new Error('TODO: Implement error type checking');
  }
}

/**
 * INTERVIEW CONCEPT: Validation Errors
 * 
 * TODO: Study validation error patterns:
 * - Field-specific error information
 * - Multiple validation failures
 * - User-friendly error messages
 */
export class ValidationError extends BaseError {
  public readonly field?: string;
  public readonly value?: any;
  public readonly rule?: string;

  constructor(
    message: string,
    options?: {
      field?: string;
      value?: any;
      rule?: string;
      code?: string;
      context?: Record<string, any>;
    }
  ) {
    super(message, {
      code: options?.code || 'VALIDATION_ERROR',
      statusCode: 400,
      context: options?.context
    });

    this.field = options?.field;
    this.value = options?.value;
    this.rule = options?.rule;
  }

  /**
   * Create validation error for required field
   * INTERVIEW CONCEPT: Static Factory Methods
   * 
   * TODO: Implement validation error factories:
   * - Common validation scenarios
   * - Consistent error messages
   * - Proper error codes
   */
  static required(field: string): ValidationError {
    // TODO: Create required field error
    // - Standard message format
    // - Include field name
    // - Set appropriate rule
    throw new Error('TODO: Implement required field error');
  }

  static invalid(field: string, value: any, expectedFormat?: string): ValidationError {
    // TODO: Create invalid value error
    // - Include actual value
    // - Describe expected format
    // - Set appropriate rule
    throw new Error('TODO: Implement invalid value error');
  }

  static tooLong(field: string, maxLength: number, actualLength: number): ValidationError {
    // TODO: Create length validation error
    // - Include length limits
    // - Show actual vs expected
    // - Set appropriate rule
    throw new Error('TODO: Implement length validation error');
  }

  static tooShort(field: string, minLength: number, actualLength: number): ValidationError {
    // TODO: Create minimum length error
    // - Include length requirements
    // - Show actual vs expected
    // - Set appropriate rule
    throw new Error('TODO: Implement minimum length error');
  }
}

/**
 * INTERVIEW CONCEPT: Not Found Errors
 * 
 * TODO: Study resource not found patterns:
 * - Resource identification
 * - Search criteria information
 * - Appropriate HTTP status codes
 */
export class NotFoundError extends BaseError {
  public readonly resource?: string;
  public readonly identifier?: string | number;

  constructor(
    message: string,
    options?: {
      resource?: string;
      identifier?: string | number;
      code?: string;
      context?: Record<string, any>;
    }
  ) {
    super(message, {
      code: options?.code || 'NOT_FOUND',
      statusCode: 404,
      context: options?.context
    });

    this.resource = options?.resource;
    this.identifier = options?.identifier;
  }

  /**
   * Factory methods for common not found scenarios
   * INTERVIEW CONCEPT: Domain-Specific Error Factories
   * 
   * TODO: Implement resource-specific factories:
   * - Consistent error messages
   * - Resource type identification
   * - Helpful error context
   */
  static user(userId: string): NotFoundError {
    // TODO: Create user not found error
    // - Standard message format
    // - Include user identifier
    // - Set resource type
    throw new Error('TODO: Implement user not found error');
  }

  static task(taskId: string): NotFoundError {
    // TODO: Create task not found error
    // - Standard message format
    // - Include task identifier
    // - Set resource type
    throw new Error('TODO: Implement task not found error');
  }

  static resource(resourceType: string, identifier: string | number): NotFoundError {
    // TODO: Create generic resource not found error
    // - Generic message format
    // - Include resource type and identifier
    // - Flexible for any resource
    throw new Error('TODO: Implement generic resource not found error');
  }
}

/**
 * INTERVIEW CONCEPT: Authorization Errors
 * 
 * TODO: Study authorization error patterns:
 * - Permission requirements
 * - User context information
 * - Security considerations
 */
export class AuthorizationError extends BaseError {
  public readonly requiredPermission?: string;
  public readonly userRole?: string;
  public readonly action?: string;

  constructor(
    message: string,
    options?: {
      requiredPermission?: string;
      userRole?: string;
      action?: string;
      code?: string;
      context?: Record<string, any>;
    }
  ) {
    super(message, {
      code: options?.code || 'AUTHORIZATION_ERROR',
      statusCode: 403,
      context: options?.context
    });

    this.requiredPermission = options?.requiredPermission;
    this.userRole = options?.userRole;
    this.action = options?.action;
  }

  /**
   * Factory methods for authorization scenarios
   * INTERVIEW CONCEPT: Authorization Error Patterns
   * 
   * TODO: Implement authorization factories:
   * - Permission-based errors
   * - Role-based errors
   * - Action-specific errors
   */
  static insufficientPermissions(requiredPermission: string, userRole?: string): AuthorizationError {
    // TODO: Create insufficient permissions error
    // - Include required permission
    // - Show user's current role
    // - Security-conscious messaging
    throw new Error('TODO: Implement insufficient permissions error');
  }

  static accessDenied(action: string, resource?: string): AuthorizationError {
    // TODO: Create access denied error
    // - Include attempted action
    // - Optionally include resource
    // - Generic access denial message
    throw new Error('TODO: Implement access denied error');
  }
}

/**
 * INTERVIEW CONCEPT: Authentication Errors
 * 
 * TODO: Study authentication error patterns:
 * - Invalid credentials
 * - Expired tokens
 * - Account status issues
 */
export class AuthenticationError extends BaseError {
  public readonly authMethod?: string;
  public readonly reason?: string;

  constructor(
    message: string,
    options?: {
      authMethod?: string;
      reason?: string;
      code?: string;
      context?: Record<string, any>;
    }
  ) {
    super(message, {
      code: options?.code || 'AUTHENTICATION_ERROR',
      statusCode: 401,
      context: options?.context
    });

    this.authMethod = options?.authMethod;
    this.reason = options?.reason;
  }

  /**
   * Factory methods for authentication scenarios
   * INTERVIEW CONCEPT: Authentication Error Types
   * 
   * TODO: Implement authentication factories:
   * - Invalid credentials
   * - Expired sessions
   * - Account issues
   */
  static invalidCredentials(): AuthenticationError {
    // TODO: Create invalid credentials error
    // - Security-conscious message (don't reveal details)
    // - Standard authentication failure
    throw new Error('TODO: Implement invalid credentials error');
  }

  static sessionExpired(): AuthenticationError {
    // TODO: Create session expired error
    // - Clear expiration message
    // - Prompt for re-authentication
    throw new Error('TODO: Implement session expired error');
  }

  static accountLocked(reason?: string): AuthenticationError {
    // TODO: Create account locked error
    // - Include lockout reason if provided
    // - Security-appropriate messaging
    throw new Error('TODO: Implement account locked error');
  }
}

/**
 * INTERVIEW CONCEPT: Business Logic Errors
 * 
 * TODO: Study business rule error patterns:
 * - Domain-specific constraints
 * - Business rule violations
 * - Contextual error information
 */
export class BusinessLogicError extends BaseError {
  public readonly rule?: string;
  public readonly entity?: string;

  constructor(
    message: string,
    options?: {
      rule?: string;
      entity?: string;
      code?: string;
      context?: Record<string, any>;
    }
  ) {
    super(message, {
      code: options?.code || 'BUSINESS_LOGIC_ERROR',
      statusCode: 422,
      context: options?.context
    });

    this.rule = options?.rule;
    this.entity = options?.entity;
  }

  /**
   * Factory methods for business rule violations
   * INTERVIEW CONCEPT: Business Rule Error Patterns
   * 
   * TODO: Implement business rule factories:
   * - Task limit violations
   * - State transition errors
   * - Dependency violations
   */
  static taskLimitExceeded(currentCount: number, limit: number): BusinessLogicError {
    // TODO: Create task limit error
    // - Include current count and limit
    // - Business rule context
    // - Actionable error message
    throw new Error('TODO: Implement task limit error');
  }

  static invalidStateTransition(currentState: string, attemptedState: string): BusinessLogicError {
    // TODO: Create state transition error
    // - Include current and attempted states
    // - Explain valid transitions
    // - State machine context
    throw new Error('TODO: Implement state transition error');
  }

  static dependencyViolation(entity: string, dependency: string): BusinessLogicError {
    // TODO: Create dependency violation error
    // - Include entity and dependency details
    // - Explain dependency requirements
    // - Business context
    throw new Error('TODO: Implement dependency violation error');
  }
}

/**
 * INTERVIEW CONCEPT: External Service Errors
 * 
 * TODO: Study external service error patterns:
 * - Service identification
 * - Retry information
 * - Fallback strategies
 */
export class ExternalServiceError extends BaseError {
  public readonly service?: string;
  public readonly operation?: string;
  public readonly retryable?: boolean;

  constructor(
    message: string,
    options?: {
      service?: string;
      operation?: string;
      retryable?: boolean;
      code?: string;
      statusCode?: number;
      context?: Record<string, any>;
      cause?: Error;
    }
  ) {
    super(message, {
      code: options?.code || 'EXTERNAL_SERVICE_ERROR',
      statusCode: options?.statusCode || 502,
      context: options?.context,
      cause: options?.cause
    });

    this.service = options?.service;
    this.operation = options?.operation;
    this.retryable = options?.retryable ?? true;
  }

  /**
   * Factory methods for external service scenarios
   * INTERVIEW CONCEPT: External Service Error Handling
   * 
   * TODO: Implement service error factories:
   * - Timeout errors
   * - Rate limit errors
   * - Service unavailable errors
   */
  static timeout(service: string, operation: string, timeoutMs: number): ExternalServiceError {
    // TODO: Create timeout error
    // - Include service and operation
    // - Show timeout duration
    // - Mark as retryable
    throw new Error('TODO: Implement timeout error');
  }

  static rateLimit(service: string, retryAfter?: number): ExternalServiceError {
    // TODO: Create rate limit error
    // - Include service name
    // - Show retry after duration
    // - Mark as retryable with delay
    throw new Error('TODO: Implement rate limit error');
  }

  static unavailable(service: string, cause?: Error): ExternalServiceError {
    // TODO: Create service unavailable error
    // - Include service name
    // - Chain original error
    // - Mark as retryable
    throw new Error('TODO: Implement service unavailable error');
  }
}

/**
 * INTERVIEW CONCEPT: Configuration Errors
 * 
 * TODO: Study configuration error patterns:
 * - Missing configuration
 * - Invalid configuration values
 * - Environment-specific issues
 */
export class ConfigurationError extends BaseError {
  public readonly configKey?: string;
  public readonly expectedType?: string;

  constructor(
    message: string,
    options?: {
      configKey?: string;
      expectedType?: string;
      code?: string;
      context?: Record<string, any>;
    }
  ) {
    super(message, {
      code: options?.code || 'CONFIGURATION_ERROR',
      statusCode: 500,
      context: options?.context
    });

    this.configKey = options?.configKey;
    this.expectedType = options?.expectedType;
  }

  /**
   * Factory methods for configuration scenarios
   * INTERVIEW CONCEPT: Configuration Error Handling
   * 
   * TODO: Implement configuration factories:
   * - Missing configuration
   * - Invalid configuration
   * - Type mismatch errors
   */
  static missing(configKey: string): ConfigurationError {
    // TODO: Create missing configuration error
    // - Include configuration key
    // - Helpful resolution message
    // - Environment context
    throw new Error('TODO: Implement missing configuration error');
  }

  static invalid(configKey: string, value: any, expectedType?: string): ConfigurationError {
    // TODO: Create invalid configuration error
    // - Include key and current value
    // - Show expected type/format
    // - Validation context
    throw new Error('TODO: Implement invalid configuration error');
  }
}

/**
 * INTERVIEW CONCEPT: Error Utilities
 * 
 * TODO: Study error utility patterns:
 * - Error classification
 * - Error aggregation
 * - Error recovery strategies
 */
export class ErrorUtils {
  
  /**
   * Check if error is retryable
   * INTERVIEW CONCEPT: Error Recovery Logic
   * 
   * TODO: Implement retry logic:
   * - Classify errors as retryable/non-retryable
   * - Consider error types and status codes
   * - Support custom retry rules
   */
  static isRetryable(error: Error): boolean {
    // TODO: Determine if error is retryable
    // - Check error type and properties
    // - Consider HTTP status codes
    // - Check retryable property if available
    throw new Error('TODO: Implement retry logic');
  }

  /**
   * Extract error chain
   * INTERVIEW CONCEPT: Error Chain Analysis
   * 
   * TODO: Implement error chain extraction:
   * - Follow cause chain to root
   * - Collect all errors in chain
   * - Useful for debugging and logging
   */
  static getErrorChain(error: Error): Error[] {
    // TODO: Extract full error chain
    // - Follow cause property chain
    // - Collect all errors from root to leaf
    // - Handle circular references
    throw new Error('TODO: Implement error chain extraction');
  }

  /**
   * Sanitize error for client response
   * INTERVIEW CONCEPT: Error Sanitization for Security
   * 
   * TODO: Implement error sanitization:
   * - Remove sensitive information
   * - Provide user-friendly messages
   * - Maintain error context for debugging
   */
  static sanitizeForClient(error: Error): Record<string, any> {
    // TODO: Sanitize error for client
    // - Remove stack traces in production
    // - Remove sensitive context data
    // - Provide generic messages for internal errors
    throw new Error('TODO: Implement error sanitization');
  }
}