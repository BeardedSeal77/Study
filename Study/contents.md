# 📚 Study Folder - Complete Table of Contents

## 📁 Folder Structure
```
Study/
├── JS/                          # JavaScript Interview Prep
│   ├── _topics.txt             # Study plan overview
│   ├── 01_fundamentals.ipynb   # Core JS concepts
│   ├── 02_Data_Manipulation_&_Array_Methods.ipynb
│   ├── 03_Algorithms_&_Logic.ipynb
│   └── 04_Async_&_Advanced_Concepts.ipynb
├── TS/                          # TypeScript Deep Dive
│   ├── 01_TypeScript_Fundamentals.ipynb
│   └── 02_Interfaces_&_Object_Types.ipynb
├── improve.txt                  # Gap analysis and recommendations
└── email.txt                    # EPI-USE Labs interview details
```

---

## 🟨 JavaScript (JS/) - Interview Preparation

### 📋 _topics.txt - Study Strategy Overview
**Purpose:** Master plan for JavaScript interview preparation

**📝 Notebook Structure:**
- **Notebook 1:** Fundamentals (Core language concepts)
- **Notebook 2:** Data Manipulation & Array Methods
- **Notebook 3:** Algorithms & Logic (Most important for interviews)
- **Notebook 4:** Async & Advanced Concepts

**🎯 Study Timeline:** 5-day structured approach with daily focus areas

---

### 📓 01_fundamentals.ipynb - JavaScript Core Concepts
**Focus:** Essential language features and syntax

#### Topics Covered:
- **Variable Declarations**
  - `var`, `let`, `const` differences and scoping behavior
  - Best practices for variable declaration
- **Hoisting Fundamentals**
  - Function declarations vs expressions
  - Variable hoisting patterns
  - Temporal Dead Zone (TDZ) with `let`/`const`
- **Function Types**
  - Arrow functions vs regular functions
  - Syntax differences and `this` context behavior
  - Arguments object availability
- **String Handling**
  - Template literals vs string concatenation
  - Modern string manipulation techniques
  - Multi-line strings and expression embedding
- **Destructuring Assignment**
  - Object and array destructuring patterns
  - Default values and renaming variables
  - Function parameter destructuring
- **Rest & Spread Operators**
  - Rest operator for collecting elements
  - Spread operator for expanding arrays/objects
  - Practical applications and patterns
- **Modern Data Structures**
  - Map, Set, WeakMap, WeakSet
  - When to use each data structure
  - Performance and garbage collection benefits
- **Symbol Primitive Type**
  - Creating unique identifiers
  - Use cases for symbols in modern JavaScript
  - Well-known symbols and meta-programming
- **Truthy/Falsy Values**
  - All 8 falsy values in JavaScript
  - Boolean evaluation in conditionals

#### Key Takeaways:
- Prefer `const` by default, `let` when reassigning
- Function declarations are hoisted, expressions are not
- Arrow functions inherit `this`, regular functions have dynamic `this`
- Only 8 falsy values exist - everything else is truthy

---

### 🔧 02_Data_Manipulation_&_Array_Methods.ipynb
**Focus:** Working efficiently with data structures

#### Topics Covered:
- **Essential Array Methods**
  - `.map()`, `.filter()`, `.reduce()`, `.forEach()`
  - `.find()`, `.findIndex()`, `.some()`, `.every()`
  - `.flatMap()` for transform-then-flatten operations
  - Chaining methods for data transformation pipelines
- **Advanced Array Operations**
  - Complex filtering with multiple conditions
  - Data aggregation and grouping patterns
  - Performance considerations for large datasets
- **Error Handling in Data Operations**
  - Defensive programming with messy data
  - Custom error types and error recovery
  - Safe property access with optional chaining
  - Async error handling patterns
- **Object Manipulation**
  - Property access (dot vs bracket notation)
  - Adding, modifying, and deleting properties
  - `Object.keys()`, `Object.values()`, `Object.entries()`
  - `Object.assign()` for copying/merging
- **Destructuring Assignment**
  - Object destructuring: `const { name, age } = person`
  - Array destructuring: `const [first, second] = array`
  - Nested destructuring patterns
  - Function parameter destructuring
- **Spread Operator**
  - Array spreading: `...array`
  - Object spreading: `...object`
  - Practical use cases for copying and merging
  - Immutable update patterns

#### Practical Applications:
- Transform datasets like pandas operations
- Filter and process large data collections
- Extract specific fields from API responses
- Combine data from multiple sources

---

### 🧠 03_Algorithms_&_Logic.ipynb
**Focus:** Problem-solving patterns and computational thinking

#### Topics Covered:
- **Loop Constructs**
  - `for`, `while`, `for...of`, `for...in`
  - When to use each loop type
- **Conditional Logic**
  - `if/else`, `switch`, ternary operators
  - Complex conditional patterns
- **Data Structures**
  - Arrays, objects, nested structures
  - Choosing appropriate data structures
- **Algorithmic Problems**
  - Sorting algorithms and patterns
  - Searching techniques
  - Counting and frequency problems
- **Code Analysis**
  - Reading and explaining code functionality
  - Identifying edge cases and potential issues

#### Practice Focus:
- Classic interview problems (FizzBuzz, palindromes)
- Data processing scenarios
- Algorithm optimization techniques

---

### ⚡ 04_Async_&_Advanced_Concepts.ipynb
**Focus:** Modern JavaScript features and asynchronous programming

#### Core Async Concepts:
- **Promises**
  - `.then()`, `.catch()` chain patterns
  - `Promise.all()` for concurrent operations
  - Error handling in promise chains
- **Async/Await**
  - Modern syntax for cleaner async code
  - Converting promise chains to async/await
  - Error handling with try/catch
- **Closures**
  - Functions returning functions
  - Lexical scoping and variable capture
  - Practical closure patterns (counters, factories)
- **Callback Functions**
  - Higher-order functions
  - Event handling patterns
  - Callback hell and solutions

#### Advanced Function Concepts:
- **Function Methods**
  - `call()`, `apply()`, and `bind()` for `this` context control
  - When and how to use each method
- **Generator Functions**
  - `yield` keyword and pausable execution
  - Creating custom iterators
  - Use cases for generators
- **Currying**
  - Transforming multi-argument functions
  - Partial application patterns
  - Functional programming techniques

#### Advanced Error Handling:
- **Custom Error Types**
  - Creating specific error classes
  - Error inheritance patterns
- **Retry Logic**
  - Implementing robust retry mechanisms
  - Exponential backoff strategies
- **Result Pattern**
  - Type-safe error handling without exceptions

#### Real-World Applications:
- API call management and error handling
- Event-driven architecture patterns
- Data processing pipelines
- Production-ready error handling strategies

---

## 🔷 TypeScript (TS/) - Deep Dive

### 📘 01_TypeScript_Fundamentals.ipynb
**Focus:** Adding type safety to JavaScript + Advanced TypeScript Features

#### Core Type System:
- **Basic Type Annotations**
  - `string`, `number`, `boolean`, primitive types
  - When to use explicit vs implicit typing
- **Function Typing**
  - Parameter types and return type annotations
  - Optional parameters with `?` syntax
- **Union Types**
  - `string | number` for flexible type definitions
  - Discriminated unions for complex scenarios
- **Array Typing**
  - `number[]` vs `Array<number>` syntax comparison
  - Mixed type arrays with union types

#### Advanced Features:
- **Type Assertions**
  - `value as Type` syntax (preferred over angle brackets)
  - Non-null assertion operator `!`
  - When to use assertions vs type guards
  - Const assertions for literal types
- **Unknown vs Any**
  - Type-safe `unknown` vs unsafe `any`
  - Proper type checking patterns with unknown
  - When to use each type appropriately
  - API response handling with unknown
- **Utility Types**
  - `Partial<T>` - Make all properties optional
  - `Required<T>` - Make all properties required
  - `Pick<T, K>` - Select specific properties
  - `Omit<T, K>` - Exclude specific properties
  - `Record<K, T>` - Create object types with specific keys
- **Conditional Types**
  - `T extends U ? X : Y` syntax
  - Type-level programming patterns
  - Using `infer` for type extraction
  - Recursive conditional types
- **Dynamic Imports**
  - `import()` function for code splitting
  - Conditional module loading
  - Error handling with dynamic imports
  - Route-based lazy loading patterns
- **TypeScript Configuration**
  - `tsconfig.json` comprehensive setup
  - Compiler options and project structure
  - Environment-specific configurations
  - Build tool integration (Webpack, Vite)

#### Best Practices:
- Use type guards instead of assertions when possible
- Prefer `unknown` over `any` for better type safety
- Leverage utility types for flexible type transformations
- Apply conditional types for advanced type logic
- Use dynamic imports for code splitting and performance
- Configure TypeScript properly for different environments
- Prefer explicit types in public APIs

---

### 🏗️ 02_Interfaces_&_Object_Types.ipynb
**Focus:** Object structure definition + Object-Oriented Programming

#### Interface Fundamentals:
- **Basic Interface Definitions**
  - Describing object shapes and contracts
  - Optional properties with `?` syntax
  - Readonly properties for immutability
- **Nested Interfaces**
  - Complex object hierarchies
  - Composing interfaces from smaller pieces
- **Method Signatures**
  - Function types within interfaces
  - Call signatures and hybrid interfaces
- **Interface Inheritance**
  - `extends` keyword for building on existing interfaces
  - Multiple inheritance patterns

#### Advanced OOP Concepts:
- **Abstract Classes**
  - Cannot be instantiated directly
  - Template patterns for derived classes
  - Mixing abstract and concrete methods
  - Relationship to interfaces
- **Access Modifiers**
  - `public` - Accessible everywhere (default)
  - `private` - Only within the class
  - `protected` - Within class and subclasses
  - `readonly` - Cannot be modified after initialization
- **Generic Classes**
  - Type-safe reusable class patterns
  - Generic constraints with `extends`
  - Generic inheritance hierarchies
- **Type Assertions & Guards**
  - Safe type checking at runtime
  - User-defined type guard functions
  - Preference for guards over assertions
- **Decorators (Experimental)**
  - Class, method, property, and parameter decorators
  - Metadata programming patterns
  - Real-world usage in Angular, NestJS
  - Configuration requirements and limitations

#### Design Patterns:
- **Repository Pattern**
  - Abstract base classes with generics
  - Type-safe CRUD operations
- **Factory Pattern**
  - Generic factory implementations
  - Type-safe object creation
- **Encapsulation Principles**
  - Data hiding and controlled access
  - Proper use of access modifiers

#### Interview-Ready Topics:
- Interface vs abstract class differences
- When to use each access modifier
- Generic constraints and type safety
- Inheritance patterns and method overriding

---

## 📋 Supporting Files

### 📄 improve.txt - Gap Analysis
**Purpose:** Identifies areas for interview preparation improvement

#### Key Recommendations:
- **TypeScript Advanced Features**: Decorators, conditional types, utility types
- **Object-Oriented TypeScript**: Abstract classes, access modifiers, generics
- **JavaScript ES6+ Features**: Destructuring, Map/Set, Symbol primitive
- **Function Advanced Concepts**: Binding, generators, currying
- **Error Handling**: Custom error types, retry patterns
- **Interview Skills**: Code explanation, edge case identification

### 📧 email.txt - Interview Context
**EPI-USE Labs South African Graduate Program**
- 30-minute online interview via Teams
- 15 minutes: Interpersonal and theoretical questions
- 15 minutes: JavaScript/TypeScript code snippet interpretation
- Focus on explaining code functionality clearly

---

## 🎯 Interview Preparation Strategy

### Immediate Focus Areas:
1. **Code Explanation Skills** - Practice describing what code does in plain English
2. **TypeScript Fundamentals** - Ensure solid understanding of basic type system
3. **Common Patterns** - Array methods, object manipulation, async operations
4. **Edge Cases** - null/undefined handling, type coercion scenarios

### Study Sequence:
1. **JavaScript Fundamentals** → **Data Manipulation** (Days 1-2)
2. **Algorithms & Logic** (Day 3) - Most critical for interviews
3. **Async & Advanced Concepts** (Day 4)
4. **TypeScript Fundamentals** → **Interfaces & OOP** (Day 5)
5. **Review & Practice Explaining Code** (Final preparation)

### Key Success Factors:
- **Explain every code example aloud** during study
- **Focus on practical understanding** over memorization
- **Practice common patterns** until they become second nature
- **Be ready to discuss trade-offs** and alternative approaches

---

*This study material covers everything needed for JavaScript/TypeScript interviews, with particular strength in the areas most commonly tested by technical recruiters and engineering teams.*