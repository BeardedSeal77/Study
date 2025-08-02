# 📚 JavaScript Learning Environment Setup Guide

This guide will walk you through setting up your development environment for JavaScript learning with Jupyter notebooks in VS Code.

## 🎯 What We'll Install

1. **Python 3.11.9** - Required for Jupyter notebooks
2. **VS Code Jupyter Extension** - For running notebooks in VS Code
3. **Jupyter** - For interactive notebook support
4. **Deno** - Modern JavaScript/TypeScript runtime

---

## 📋 Prerequisites

- Windows 10/11
- Administrative privileges for installation
- Stable internet connection

---

## 🐍 Step 1: Install Python 3.11.9

### Download Python
1. Go to [https://www.python.org/downloads/release/python-3119/](https://www.python.org/downloads/release/python-3119/)
2. Click "Download Python 3.11.9" (or navigate to specific version if needed)
3. Wait for the installer to download

### Install Python
1. **Run the installer** as Administrator (right-click → "Run as administrator")
2. **IMPORTANT**: Check both boxes at the bottom:
   - ✅ "Add python.exe to PATH"
   - ✅ "Install for all users"
3. Choose installation directory: `C:\Program Files\Python311\`
4. Click **"Install Now"**
5. Wait for installation to complete
6. Click **"Close"** when finished

### Verify Python Installation
1. Open **Command Prompt** as Administrator
2. Type: `python --version`
3. Should show: `Python 3.11.9`
4. Type: `pip --version`
5. Should show pip version information

---

## 🔧 Step 2: Install VS Code Jupyter Extension

### Option A: Install via VS Code
1. Open **Visual Studio Code**
2. Press `Ctrl + Shift + X` to open Extensions
3. Search for **"Jupyter"**
4. Install the **Jupyter extension by Microsoft**
5. Also install **"Python"** extension by Microsoft

### Option B: Install via Command Line
```bash
code --install-extension ms-toolsai.jupyter
code --install-extension ms-python.python
```

---

## 📓 Step 3: Install Jupyter (Globally)

### Install Jupyter via pip
1. Open **Command Prompt** as Administrator
2. Run the following command:
```bash
pip install jupyter jupyterlab notebook
```

3. **Check if jupyter.exe exists in Scripts directory**:
```bash
dir "C:\Program Files\Python311\Scripts\jupyter*"
```
   - If found: Lists all jupyter-related files (jupyter.exe, jupyter-lab.exe, etc.)
   - If not found: "File Not Found" - proceed to upgrade step

4. **If jupyter.exe is missing from Scripts directory**, upgrade Jupyter:
```bash
pip install --upgrade jupyter
```

5. **Alternative fix** - Reinstall with force:
```bash
pip uninstall jupyter
pip install jupyter
```

### Verify Jupyter Installation
```bash
jupyter --version
```
Should show version information for jupyter core, lab, and notebook.

### Test Jupyter
```bash
jupyter notebook --version
jupyter lab --version
```

---

## 🦕 Step 4: Install Deno

### Download and Install Deno
1. Open **PowerShell** as Administrator
2. Run the installation command:
```powershell
irm https://deno.land/install.ps1 | iex
```

### Add Deno to PATH (if not automatic)
1. Open **System Properties** → **Environment Variables**
2. Under **System Variables**, find and edit **PATH**
3. Add: `C:\Users\%USERNAME%\.deno\bin`
4. Click **OK** and restart Command Prompt

### Verify Deno Installation
```bash
deno --version
```
Should show Deno version, V8 version, and TypeScript version.

---

## 🧪 Step 5: Setup Jupyter Kernel for JavaScript

### Install IJavaScript Kernel
1. First, install Node.js from [nodejs.org](https://nodejs.org/) (LTS version)
2. Open Command Prompt as Administrator
3. Install the JavaScript kernel:
```bash
npm install -g ijavascript
ijsinstall
```

### Alternative: Use Deno Jupyter Kernel
```bash
deno jupyter --install
```

---

## ✅ Step 6: Verify Complete Setup

### Test in VS Code
1. Open **VS Code**
2. Open the `Javascript` folder
3. Create a new file: `test.ipynb`
4. Click **"Select Kernel"** in the top right
5. Choose **"Jupyter Server"** → **"Python 3.11.9"** or **"Deno"**
6. Create a code cell and test:

**For JavaScript (if using IJavaScript):**
```javascript
console.log("Hello, JavaScript in Jupyter!");
const numbers = [1, 2, 3, 4, 5];
console.log("Sum:", numbers.reduce((a, b) => a + b));
```

**For Deno:**
```typescript
console.log("Hello from Deno!");
const greeting = "Welcome to JavaScript learning!";
console.log(greeting);
```

---

## 🛠️ Troubleshooting

### Python Not Found
- Ensure Python is added to PATH
- Restart Command Prompt/VS Code
- Check installation directory: `C:\Program Files\Python311\`

### Jupyter Extension Issues
- Reload VS Code window: `Ctrl + Shift + P` → "Developer: Reload Window"
- Check Python interpreter: `Ctrl + Shift + P` → "Python: Select Interpreter"

### Kernel Selection Problems
- Install ipykernel: `pip install ipykernel`
- Refresh kernel list in VS Code
- Try creating a new notebook

### Deno Issues
- Ensure PowerShell execution policy allows scripts:
  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```
- Restart terminal after installation

---

## 📁 Recommended Folder Structure

```
Javascript/
├── 00_Installation_Setup_Guide.md  (this file)
├── 01_Introduction.ipynb
├── 02_Data_types.ipynb
├── 03_Booleans_Operators_Dates.ipynb
├── 04_Conditionals.ipynb
├── 05_Arrays.ipynb
├── 06_Loops.ipynb
└── ... (more learning notebooks)
```

---

## 🎉 You're Ready!

Once all steps are completed, you should have:
- ✅ Python 3.11.9 installed globally with PATH
- ✅ VS Code with Jupyter extension
- ✅ Jupyter notebook support
- ✅ Deno for modern JavaScript development
- ✅ JavaScript kernel for Jupyter notebooks

Start learning with the notebooks in this directory!

---

## 🔗 Useful Links

- [Python Official Documentation](https://docs.python.org/3.11/)
- [VS Code Jupyter Documentation](https://code.visualstudio.com/docs/datascience/jupyter-notebooks)
- [Deno Manual](https://deno.land/manual)
- [Jupyter Documentation](https://jupyter.org/documentation)

---

**Happy Learning! 🚀**