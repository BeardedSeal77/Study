# 📚 Theoretical Questions Quick Reference

> **15-minute theory section preparation for graduate program interviews**

## 🗣️ Common Opening Questions

### "Tell me about yourself in relation to software engineering"
**Good Answer Structure:**
- "I have a strong foundation in logic and problem-solving"
- "I'm particularly good at reading and understanding code"
- "I'm excited about TypeScript because it adds structure to JavaScript"
- "I enjoy breaking down complex problems into smaller parts"

### "Why are you interested in this graduate program?"
**Good Answer Points:**
- Learning modern software development practices
- Gaining hands-on experience with industry tools
- Working on real-world projects
- Developing both technical and collaboration skills

---

## 💻 Core JavaScript/TypeScript Theory

### **What is JavaScript?**
**Simple Answer:** "JavaScript is a programming language that makes websites interactive. It's interpreted, meaning it runs directly without needing to be compiled first."

**Key Points:**
- Dynamically typed (types determined at runtime)
- Runs in browsers and on servers (Node.js)
- Event-driven programming model

### **What is TypeScript and why use it?**
**Simple Answer:** "TypeScript is JavaScript with types added. It helps catch errors before the code runs and makes development easier with better tooling."

**Key Benefits:**
- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Auto-completion and refactoring
- **Self-Documenting**: Types serve as documentation
- **Easier Maintenance**: Refactoring is safer

### **JavaScript vs TypeScript Comparison**
| JavaScript | TypeScript |
|-----------|------------|
| Dynamic typing | Static typing |
| Runtime error detection | Compile-time error detection |
| No compilation step | Compiles to JavaScript |
| Flexible but error-prone | Stricter but safer |

---

## 🔑 Essential Concepts (Explain Simply)

### **1. Types in TypeScript**
```typescript
// Basic types
let name: string = "Alice";        // Text
let age: number = 25;              // Numbers
let isActive: boolean = true;      // True/false
```

**Explanation:** "Types tell TypeScript what kind of data a variable should hold. This prevents mistakes like trying to do math with text."

### **2. Interfaces**
```typescript
interface Person {
  name: string;
  age: number;
}
```

**Explanation:** "An interface is like a blueprint that describes what properties an object should have. It ensures consistency."

### **3. Functions**
```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

**Explanation:** "This function takes a string parameter and returns a string. TypeScript checks that we use it correctly."

### **4. Arrays and Objects**
```javascript
// Array methods
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);  // [2, 4, 6]
```

**Explanation:** "Map creates a new array by transforming each element. Very useful for data processing."

---

## 🎯 Problem-Solving Approach

### When Asked About Code Logic:
1. **"I would start by understanding what the code is trying to achieve"**
2. **"Then I'd trace through it step by step"**
3. **"I'd look for any edge cases or potential issues"**
4. **"Finally, I'd consider if there are ways to make it clearer"**

### When Asked About Debugging:
1. **"First, I'd reproduce the error"**
2. **"Then I'd use console.log to see what's happening"**
3. **"I'd check the types and data flow"**
4. **"I'd test small parts to isolate the problem"**

---

## 🚀 Modern Development Concepts

### **What is Version Control?**
**Simple Answer:** "Version control tracks changes to code over time. Git is the most common tool - it's like 'track changes' for code but much more powerful."

### **What is Testing?**
**Simple Answer:** "Testing means writing code to check that your main code works correctly. It catches bugs before users see them."

### **What is an API?**
**Simple Answer:** "An API is a way for different pieces of software to communicate. Like how a restaurant menu lets you order food without knowing how the kitchen works."

---

## 🤝 Interpersonal Questions

### "How do you handle challenges?"
**Good Answer:** "I break big problems into smaller ones. If I'm stuck, I research online, try different approaches, and ask for help when needed. I believe every challenge is a learning opportunity."

### "How do you learn new technologies?"
**Good Answer:** "I start with official documentation and tutorials. I like to build small projects to practice. I also learn from reading other people's code to see different approaches."

### "Describe a time you solved a difficult problem"
**Structure:**
- **Situation**: Briefly describe the problem
- **Task**: What you needed to accomplish
- **Action**: How you approached it (step by step)
- **Result**: What you learned/achieved

---

## 💡 Questions You Can Ask Them

### About the Program:
- "What kind of projects do students typically work on?"
- "How is the program structured between theory and practical work?"
- "What technologies will we be learning?"

### About Support:
- "What kind of mentorship is available?"
- "How do you help students who are stronger in logic than syntax?"
- "Are there pair programming or collaboration opportunities?"

---

## 🎪 Common Misconceptions to Avoid

### ❌ **Don't Say:**
- "I'm not good at coding" (focus on what you ARE good at)
- "JavaScript is just for websites" (it's everywhere now)
- "I prefer [other language] better" (show enthusiasm for what they use)
- "Types are unnecessary" (they're asking about TypeScript for a reason)

### ✅ **Do Say:**
- "I'm strong with logic and learning syntax"
- "I appreciate how TypeScript makes code more reliable"
- "I enjoy reading and understanding how code works"
- "I'm excited to learn industry best practices"

---

## 🎯 Last-Minute Confidence Boosters

### Remember Your Strengths:
- **Logic**: You can understand complex problems
- **Code Reading**: You can trace through existing code
- **Learning**: You're motivated to improve
- **Problem-Solving**: You can break things down

### If You Don't Know Something:
- **"I haven't used that specific feature, but based on the pattern, I think it might..."**
- **"I'm not familiar with that syntax, but I can see it's doing..."**
- **"That's something I'd like to learn more about in the program"**

### Show Your Thinking Process:
- **"Let me think through this step by step..."**
- **"If I understand correctly, this is trying to..."**
- **"The logic here seems to be..."**

---

## 🔥 Power Phrases for Interviews

- **"From a logical perspective..."**
- **"I can see this code is structured to..."**
- **"The benefit of this approach is..."**
- **"This pattern helps ensure..."**
- **"I'd trace through this by..."**
- **"The key insight here is..."**
- **"This demonstrates good practice because..."**

Remember: **They're evaluating your potential, not expecting you to know everything!** 🌟