# 🎯 Graduate Program Interview Preparation Guide

> Specifically designed for **EPI - USE Labs / Advanced** screening interview format

## 📝 Interview Format Analysis

Based on your email:
- **30 minutes total**
- **First 15 minutes**: Interpersonal and theoretical questions
- **Second 15 minutes**: Code snippet interpretation and explanation (JavaScript/TypeScript)

## 🧠 Your Strengths & Focus Areas

✅ **Strong in**: Logic and code reading  
⚠️ **Need practice**: Language syntax and code explanation

## 📚 Part 1: Theoretical Questions (15 minutes)

### Core JavaScript Concepts You Should Know

#### 1. **What is JavaScript?**
"JavaScript is a dynamically typed, interpreted programming language that makes web pages interactive. Unlike compiled languages, JavaScript runs directly in the browser."

#### 2. **JavaScript vs TypeScript**
- **JavaScript**: Dynamic typing, runtime error detection
- **TypeScript**: Static typing, compile-time error detection, superset of JavaScript

#### 3. **Key JavaScript Concepts**
- **Hoisting**: Variable and function declarations are moved to the top of their scope
- **Closures**: Inner functions have access to outer function variables
- **Prototypes**: Objects inherit from other objects
- **Event Loop**: How JavaScript handles asynchronous operations

#### 4. **TypeScript Benefits**
- Type safety catches errors at compile time
- Better IDE support with IntelliSense
- Easier refactoring and maintenance
- Self-documenting code through types

## 🔍 Part 2: Code Interpretation Practice (15 minutes)

### Strategy for Code Interpretation

1. **Read the code carefully**
2. **Identify the main purpose**
3. **Trace through execution step by step**
4. **Explain what each part does**
5. **Mention any potential issues or benefits**

### Common Code Snippet Types You'll See

#### Type 1: Basic Type Annotations
```typescript
// What does this code do?
interface User {
  name: string;
  age: number;
  isActive?: boolean;
}

function createUser(name: string, age: number): User {
  return { name, age, isActive: true };
}
```

**How to explain**:
- "This defines a User interface with required name/age and optional isActive property"
- "The function takes two parameters and returns a User object"
- "The question mark makes isActive optional"

#### Type 2: Array Methods and Logic
```javascript
// What will this output?
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2);
console.log(result);
```

**How to explain**:
- "This filters even numbers (2, 4) then doubles them"
- "Filter keeps elements where n % 2 === 0 is true"
- "Map transforms each element by multiplying by 2"
- "Result: [4, 8]"

#### Type 3: Object Manipulation
```javascript
// What happens here?
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
```

**How to explain**:
- "Uses spread operator to merge two objects"
- "obj2 properties override obj1 when keys match"
- "Result: { a: 1, b: 3, c: 4 }"

#### Type 4: Function Behavior
```typescript
// What's the purpose of this function?
function findUser<T extends { id: number }>(users: T[], id: number): T | undefined {
  return users.find(user => user.id === id);
}
```

**How to explain**:
- "Generic function that works with any object type that has an id property"
- "T extends { id: number } constrains the generic type"
- "Returns the found user or undefined if not found"
- "Type-safe because TypeScript knows the return type"

## 🎯 Practice Questions Based on TaskFlow Project

### Question 1: Interface Understanding
```typescript
// From our User.ts - explain this code
export interface RegularUser extends BaseUser {
  role: 'user';
  taskLimit: number;
  subscription?: {
    plan: 'free' | 'premium';
    expiresAt?: Date;
  };
}
```

**What to explain**:
- Interface inheritance with `extends`
- Literal types ('user', 'free', 'premium')
- Optional properties with `?`
- Nested object types

### Question 2: Generic Classes
```typescript
// From our BaseRepository.ts - what does this do?
export abstract class BaseRepository<T extends BaseEntity> {
  protected items: Map<string, T> = new Map();
  
  async create(item: T): Promise<T> {
    // implementation
  }
}
```

**What to explain**:
- Abstract class (cannot be instantiated directly)
- Generic with constraint `T extends BaseEntity`
- Protected vs private access modifiers
- Map data structure for storage

### Question 3: Array Methods
```typescript
// From our ArrayUtils.ts - what does this accomplish?
static unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}
```

**What to explain**:
- Static method (called on class, not instance)
- Generic function works with any type
- Set removes duplicates
- Spread operator converts Set back to array

### Question 4: Error Handling
```typescript
// From our CustomErrors.ts - explain this pattern
export class ValidationError extends BaseError {
  constructor(message: string, field?: string) {
    super(message);
    this.name = this.constructor.name;
  }
}
```

**What to explain**:
- Class inheritance with `extends`
- Constructor parameter with optional field
- Super call to parent constructor
- Setting error name for debugging

## 🗣️ How to Explain Code Like a Pro

### Step-by-Step Approach:

1. **Start with the big picture**: "This code defines a..."
2. **Break down each part**: "The first line does..., then..."
3. **Explain the logic**: "The purpose is to..."
4. **Mention benefits/concerns**: "This is good because..." or "One potential issue is..."

### Key Phrases to Use:

- "This function takes... and returns..."
- "The type annotation ensures..."
- "This pattern provides type safety by..."
- "The generic allows this to work with..."
- "This interface defines the structure of..."
- "The optional property means..."

## 🔥 Last-Minute Tips

### Before the Interview:
1. **Review the TaskFlow files** - they contain exactly the patterns you'll see
2. **Practice reading code aloud** - explain what each line does
3. **Focus on TypeScript basics**: interfaces, types, generics
4. **Review JavaScript array methods**: map, filter, reduce, find

### During Code Interpretation:
1. **Take your time** - read the entire snippet first
2. **Think out loud** - explain your thought process
3. **Start simple** - explain obvious parts first
4. **Ask questions** if something is unclear
5. **Don't panic** if you don't know something - explain what you do understand

### Common Interview Code Patterns:
- **Type definitions** (interfaces, types)
- **Generic functions** (working with different types)
- **Array manipulations** (filtering, mapping, finding)
- **Object operations** (spreading, destructuring)
- **Class inheritance** (extends, super, abstract)
- **Error handling** (try/catch, custom errors)

## 📖 Quick Reference: TaskFlow Learning Map

**For Type Systems**: Look at `User.ts` and `Task.ts`  
**For Classes**: Look at `BaseRepository.ts` and concrete implementations  
**For Generics**: Look at repository and utility classes  
**For Error Handling**: Look at `CustomErrors.ts`  
**For Utility Functions**: Look at `ArrayUtils.ts`, `StringUtils.ts`  
**For Modern JS**: Look at service classes with async/await

Remember: You don't need to write perfect code, you need to **read and explain** existing code clearly! 🚀