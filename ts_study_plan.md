# TypeScript Interview Prep - 2 Notebooks
*Building on your JavaScript foundation*

## 📝 Notebook 1: TypeScript Fundamentals
**Focus: Adding types to your existing JS knowledge**

### Topics to Cover:
- **Basic type annotations** - `string`, `number`, `boolean`, `array`
- **Function typing** - parameters and return types
- **Union types** - `string | number`
- **Optional properties** - `property?:`
- **Array typing** - `number[]` vs `Array<number>`

### Practice Examples:
```typescript
// Convert your JS examples to TS by adding types
function processData(items: string[]): number {
  return items.length;
}

const user: { name: string; age?: number } = { name: "John" };
```

---

## 🏗️ Notebook 2: Interfaces & Object Types
**Focus: Structuring data (most commonly tested)**

### Topics to Cover:
- **Interface definitions** - describing object shapes
- **Nested interfaces** - objects within objects
- **Method signatures** - functions as object properties
- **Extending interfaces** - building on existing types
- **Type assertions** - `as` keyword when needed

### Practice Examples:
```typescript
interface User {
  id: number;
  name: string;
  email?: string;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

interface Admin extends User {
  permissions: string[];
  lastLogin: Date;
}
```

---

## 🎯 Study Strategy:

**Time allocation:**
- **80% on Notebook 1** - basic typing is most important
- **20% on Notebook 2** - interfaces for data structures

**Practice approach:**
1. Take examples from your JS notebooks
2. Add TypeScript type annotations
3. Practice explaining the type safety benefits
4. Focus on **reading and explaining** typed code

## 💡 Interview Reality Check:

**Most likely questions:**
- "What does this type annotation mean?"
- "Why would you use TypeScript over JavaScript?"
- "How would you type this function/object?"

**Unlikely to be asked:**
- Complex generics
- Advanced OOP patterns
- TypeScript configuration
- Decorators or meta-programming

## 🔄 Conversion Practice:
Take your best JS examples and convert them to TS - this shows you understand both languages and can work with existing codebases.