# JavaScript and TypeScript Interview Questions for Graduate Software Engineering Programs

Software engineering graduate programs increasingly emphasize practical coding skills through 15-minute code interpretation exercises that test foundational understanding rather than algorithmic complexity. These exercises, commonly used by enterprise companies like EPI-USE and similar SAP partners, focus on **JavaScript gotchas, TypeScript type system knowledge, and real-world problem-solving patterns** that new developers encounter in professional environments.

## Code reading and explanation exercises

Code reading exercises form the backbone of graduate-level technical assessments, typically following a structured 15-minute format: **5 minutes for problem analysis and solution development, followed by 10 minutes of discussion with the interviewer**. These exercises prioritize communication skills and systematic thinking over perfect solutions.

**Variable hoisting and scope confusion** represents one of the most common code reading challenges. Consider this classic example:

```javascript
var x = 1;
function test() {
    console.log(x);  // What prints here?
    if (false) {
        var x = 2;
    }
}
test();
```

This prints `undefined` rather than `1` because JavaScript hoists the `var x` declaration within the function scope, effectively creating a local variable that shadows the global one. The function is interpreted as having `var x;` at the top, which initializes to `undefined`. **Interviewers use this to assess understanding of JavaScript's execution context and variable lifecycle**.

**Closure and loop interactions** present another frequent challenge:

```javascript
function createFunctions() {
    var result = [];
    for (var i = 0; i < 3; i++) {
        result[i] = function() {
            return i;
        };
    }
    return result;
}
var funcs = createFunctions();
console.log(funcs[0]()); // What does this print?
```

All functions return `3` because they reference the same variable `i` which equals `3` after loop completion. **This tests closure understanding and the difference between `var` and `let` scoping**. The solution involves using `let` instead of `var` or creating an immediate function to capture each iteration's value.

**Execution order and asynchronous behavior** challenges test event loop comprehension:

```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
```

The output sequence is `1, 4, 3, 2` because **synchronous code executes first, followed by microtasks (Promises), then macrotasks (setTimeout)**. This demonstrates understanding of JavaScript's event loop and task queue priorities.

## Common JavaScript gotchas and edge cases

JavaScript's type coercion system creates numerous gotchas that interviewers frequently exploit to test depth of understanding. **Equality comparison tricks** reveal subtle coercion behaviors:

```javascript
false == '0'        // true
0 == false         // true
'' == 0            // true
[] == ''           // true
'1' == true        // true
[] == []           // false (different objects)
```

These examples demonstrate that `==` triggers complex coercion rules, while object comparisons always check reference equality. **Understanding these patterns indicates practical debugging experience and awareness of JavaScript's quirks**.

**String and number coercion** in arithmetic operations follows left-to-right evaluation with context-sensitive behavior:

```javascript
1 + "2" + "2"      // "122"
1 + +"2" + "2"     // "32" (unary + converts "2" to number)
"number" + 15 + 3  // "number153"
15 + 3 + "number"  // "18number"
```

The unary plus operator forces numeric conversion, while addition context determines whether operations are arithmetic or string concatenation. **These questions assess understanding of operator precedence and type conversion rules**.

**NaN behavior** creates counterintuitive results that trip up many developers:

```javascript
NaN === NaN        // false
typeof NaN         // "number"
isNaN("string")    // true
isNaN("")          // false (empty string converts to 0)
```

NaN is the only value in JavaScript that doesn't equal itself, and `isNaN` performs type coercion before checking. **Modern best practice uses `Number.isNaN()` for strict NaN checking**.

**Automatic semicolon insertion (ASI)** creates subtle bugs, particularly with return statements:

```javascript
function increment(num) {
    return
    ++num; // This line never executes
}
increment(3); // Returns undefined
```

JavaScript interprets this as `return;` followed by an unreachable statement. **Understanding ASI helps identify why certain code doesn't behave as expected and reinforces the importance of consistent semicolon usage**.

## TypeScript type system questions

TypeScript interviews for graduate programs focus on practical type system understanding rather than advanced type theory. **Interface versus type declarations** represents a fundamental distinction:

```typescript
// Interface - can be merged and extended
interface User {
    name: string;
}
interface User {
    age: number;  // Merges with above
}

// Type - supports unions and complex operations
type StringOrNumber = string | number;
type UserKeys = keyof User; // "name" | "age"
```

**Interfaces work better for object shapes and API contracts because they support declaration merging, while types excel at complex type operations and unions**. This distinction becomes crucial when designing scalable TypeScript applications.

**Generic type constraints** test understanding of type safety and reusability:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: "John", age: 30 };
const name = getProperty(person, "name"); // Type: string
const invalid = getProperty(person, "invalid"); // TypeScript error
```

This pattern demonstrates **how generics maintain type relationships while providing flexibility**. The `keyof` constraint ensures only valid property names are accepted, preventing runtime errors through compile-time checking.

**Union and intersection types** solve different composition problems:

```typescript
// Union - value can be ONE of the types
type Status = "loading" | "success" | "error";

// Intersection - value must have ALL properties
type User = { name: string };
type Admin = { adminLevel: number };
type AdminUser = User & Admin;  // Must have both name and adminLevel
```

**Discriminated unions** enable type-safe pattern matching:

```typescript
type ApiResponse = 
  | { status: 'success'; data: any }
  | { status: 'error'; message: string }
  | { status: 'loading' };

function handleResponse(response: ApiResponse) {
    switch (response.status) {
        case 'success':
            console.log(response.data); // TypeScript knows data exists
            break;
        case 'error':
            console.log(response.message); // TypeScript knows message exists
            break;
    }
}
```

This pattern **eliminates entire classes of runtime errors by making impossible states unrepresentable in the type system**.

## Array manipulation and data processing challenges

Array method selection and chaining represents core JavaScript competency. **Map, filter, and reduce serve distinct purposes** that graduate-level candidates must understand:

```javascript
const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" }
];

// Transform - use map
const withBonuses = employees.map(emp => ({
    ...emp,
    bonus: emp.salary * 0.1
}));

// Filter - use filter
const itEmployees = employees.filter(emp => emp.department === "IT");

// Aggregate - use reduce
const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
```

**Complex data transformations** often require method chaining:

```javascript
const departmentAverages = employees
    .reduce((acc, emp) => {
        if (!acc[emp.department]) {
            acc[emp.department] = { total: 0, count: 0 };
        }
        acc[emp.department].total += emp.salary;
        acc[emp.department].count++;
        return acc;
    }, {})
    .map(([dept, stats]) => ({
        department: dept,
        average: stats.total / stats.count
    }));
```

This pattern demonstrates **functional programming principles applied to real-world data processing scenarios**.

**Nested array flattening and counting** tests understanding of array manipulation:

```javascript
const nested = [["a", "b"], ["c", "d"], ["d", "e"]];

const letterCounts = nested
    .flat()
    .reduce((counts, letter) => {
        counts[letter] = (counts[letter] || 0) + 1;
        return counts;
    }, {});
// Result: {a: 1, b: 1, c: 1, d: 2, e: 1}
```

The `.flat()` method simplifies nested array processing, while the reduce pattern handles frequency counting. **These operations appear frequently in real applications for data aggregation and reporting**.

## Async/Promise related questions

Asynchronous JavaScript comprehension separates competent developers from beginners. **Sequential versus parallel execution** represents the most common pitfall:

```javascript
// Inefficient - sequential execution (9 seconds total)
async function slow() {
    const a = await getValueA(); // 2 seconds
    const b = await getValueB(); // 4 seconds
    const c = await getValueC(); // 3 seconds
    return a + b + c;
}

// Efficient - parallel execution (4 seconds total)
async function fast() {
    const [a, b, c] = await Promise.all([
        getValueA(),
        getValueB(),
        getValueC()
    ]);
    return a + b + c;
}
```

**Understanding when operations can run in parallel versus when they must be sequential** directly impacts application performance and user experience.

**Async callback patterns in array methods** create subtle bugs:

```javascript
const numbers = [1, 2, 3];

// This doesn't work as expected
const results = numbers.map(async (num) => {
    return await processNumber(num);
});
console.log(results); // [Promise, Promise, Promise]

// Correct approach
const results = await Promise.all(
    numbers.map(async (num) => await processNumber(num))
);
```

Array methods don't automatically handle promises, requiring explicit `Promise.all()` wrapping. **This pattern appears frequently when processing collections asynchronously**.

**Error handling patterns** in async code require specific approaches:

```javascript
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            if (response.ok) return response;
            throw new Error(`HTTP ${response.status}`);
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            // Exponential backoff
            await new Promise(resolve => 
                setTimeout(resolve, Math.pow(2, i) * 1000)
            );
        }
    }
}
```

This demonstrates **sophisticated error handling with retry logic and exponential backoff**, patterns commonly required in production applications.

## Object-oriented programming concepts in TypeScript

TypeScript's class system builds on JavaScript with compile-time type safety. **Access modifiers and inheritance** form the foundation of object-oriented design:

```typescript
abstract class Animal {
    protected name: string;
    private age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    public getAge(): number {
        return this.age;
    }
    
    abstract makeSound(): void;
}

class Dog extends Animal {
    private breed: string;
    
    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }
    
    makeSound(): void {
        console.log(`${this.name} barks!`); // Can access protected member
    }
}
```

**Abstract classes enforce implementation contracts while providing shared functionality**. Protected members enable controlled inheritance hierarchies, while private members ensure proper encapsulation.

**Interface implementation with method overloading** demonstrates polymorphism:

```typescript
interface Drawable {
    draw(): void;
    draw(x: number, y: number): void;
}

class Circle implements Drawable {
    draw(): void;
    draw(x: number, y: number): void;
    draw(x?: number, y?: number): void {
        if (x !== undefined && y !== undefined) {
            console.log(`Drawing at (${x}, ${y})`);
        } else {
            console.log("Drawing at origin");
        }
    }
}
```

**Method overloading provides flexible APIs while maintaining type safety**, essential for library and framework development.

## EPI-USE and enterprise software company examples

EPI-USE, one of the world's largest independent SAP HR/Payroll specialists with over 3,500 employees across 40+ countries, follows a structured graduate program interview process that reflects broader enterprise software company patterns. **Their 12-month milestone-based program emphasizes both technical skills and business consulting capabilities**, requiring candidates who can bridge technology and client requirements.

**EPI-USE's assessment process** includes a one-week take-home technical assessment followed by an in-person presentation at their Pretoria office. This format allows candidates to demonstrate both coding competency and communication skills essential for client-facing technical consulting roles.

**Enterprise software companies typically employ multi-stage processes**: online assessments using platforms like HackerRank or Codility, technical phone screens, multiple coding interviews, and behavioral assessments. **The emphasis shifts from pure algorithmic problem-solving toward practical application development, integration patterns, and scalability considerations**.

**SAP partner companies and enterprise consultancies** focus on questions around business process automation, ERP system integration, and client solution development. Technical questions often center on RESTful API design, database integration patterns, and security considerations for enterprise-scale applications.

**Common enterprise-specific JavaScript/TypeScript questions** include error handling strategies for production systems, memory management for long-running applications, module organization for large codebases, and browser compatibility considerations for corporate environments.

## Typical 15-minute code interpretation exercises

The 15-minute format optimizes for **fundamental understanding over algorithmic complexity**. These exercises typically allocate 5 minutes for problem analysis and initial solution, with 10 minutes for explanation and discussion with the interviewer.

**String manipulation challenges** form a common category:

```javascript
// Move capital letters to front of word
function moveCapitals(str) {
    const capitals = str.split('').filter(char => char === char.toUpperCase());
    const lowercase = str.split('').filter(char => char === char.toLowerCase());
    return capitals.join('') + lowercase.join('');
}
```

**Basic logic problems** test systematic thinking:

```javascript
// Check if string has equal X's and O's (case insensitive)
function xoEqual(str) {
    const lower = str.toLowerCase();
    const x_count = (lower.match(/x/g) || []).length;
    const o_count = (lower.match(/o/g) || []).length;
    return x_count === o_count;
}
```

**Object manipulation exercises** assess practical data handling:

```javascript
// Transform array of objects to create summary statistics
function summarizeStudents(students) {
    return students.map(student => ({
        name: student.name,
        average: student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length,
        passed: student.scores.every(score => score >= 60)
    }));
}
```

**Evaluation criteria** prioritize communication over perfect solutions. **Interviewers assess systematic problem decomposition, clear articulation of thought processes, consideration of edge cases, and adaptability when receiving feedback**. The ability to explain trade-offs and alternative approaches often matters more than finding the optimal solution immediately.

## Graduate/entry-level appropriate difficulty

Graduate program interviews calibrate difficulty to assess **fundamental competency without requiring extensive experience**. LeetCode Easy to Medium problems represent the appropriate range, avoiding advanced data structures or complex algorithmic patterns that require specialized study.

**JavaScript fundamentals take precedence over frameworks**. Candidates should demonstrate solid understanding of closures, prototypal inheritance, event loop behavior, and ES6 features without needing expertise in React, Angular, or Node.js specifics.

**TypeScript questions focus on core type system concepts** rather than advanced type manipulation. Understanding interfaces, generics, basic utility types, and class hierarchies suffices for graduate-level positions. Complex conditional types or template literal types fall outside typical expectations.

**Problem-solving approach matters more than perfect solutions**. Interviewers evaluate systematic thinking, communication clarity, and coachability. **Candidates who ask clarifying questions, explain their reasoning, and incorporate feedback demonstrate the growth mindset essential for junior developer success**.

**Time complexity analysis requires only basic Big O understanding**. Candidates should recognize O(1), O(n), and O(n²) patterns without needing to analyze advanced algorithmic complexities or optimization techniques.

## Focus on practical code snippets over complex algorithms

Modern graduate program interviews emphasize **real-world problem-solving over academic algorithm implementation**. This shift reflects industry recognition that new graduates need practical skills for immediate productivity rather than theoretical computer science knowledge.

**Debugging exercises** simulate actual development work:

```javascript
// Find and fix the bug
function calculateTotal(items) {
    let total = 0;
    items.forEach(item => {
        total += item.price * item.quantity;
    });
    return total.toFixed(2); // Returns string, not number
}
```

**API integration patterns** test practical development skills:

```javascript
// Implement error handling for API calls
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        return null; // Return fallback value
    }
}
```

**Data transformation scenarios** mirror common business requirements:

```javascript
// Transform API response for frontend consumption
function formatUserProfiles(apiResponse) {
    return apiResponse.users.map(user => ({
        id: user.user_id,
        displayName: `${user.first_name} ${user.last_name}`,
        email: user.email_address,
        isActive: user.status === 'active',
        lastLogin: new Date(user.last_login_timestamp)
    }));
}
```

This practical focus **ensures candidates can contribute immediately to development teams while building more advanced skills through on-the-job experience and mentorship**. The interview process validates fundamental competency and learning potential rather than expecting expertise in specialized algorithms or advanced architectural patterns.

## Conclusion

JavaScript and TypeScript interviews for graduate software engineering programs have evolved to emphasize practical understanding over algorithmic complexity. **The 15-minute code interpretation format efficiently assesses fundamental competency, communication skills, and systematic problem-solving approaches** that predict success in professional development environments.

Enterprise companies like EPI-USE and similar SAP partners seek candidates who can bridge technical implementation with business requirements, requiring solid JavaScript foundations combined with TypeScript's type safety benefits. **Success in these interviews depends on mastering core concepts, practicing clear communication, and demonstrating adaptability to feedback** rather than memorizing complex algorithms or advanced framework patterns.

The shift toward practical, understanding-based assessment reflects industry recognition that **new graduates need immediately applicable skills and strong fundamentals to grow effectively within professional development teams**. Candidates who focus on JavaScript gotchas, TypeScript type system basics, async programming patterns, and practical data manipulation will find themselves well-prepared for graduate program technical assessments.