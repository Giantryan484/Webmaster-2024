# Webmaster-2024

This is the code behind our 2024 TSA Webmaster submission. Our current team members are: Ryan, Kari, and Elisa



# Quick Start (start coding with us!)

### Setting Up the Development Environment

**1. Create a GitHub Account:**
   - Go to [GitHub](https://github.com/) and sign up for a new account if you do not already have one.
   - After signing up, verify your email address.

**2. Get Repository Permissions:**
   - Provide your GitHub username to the repository owner (you) so they can add you as a collaborator to the private repository.

**3. Install Git and Visual Studio Code:**
   - Download and install Git from [git-scm.com](https://git-scm.com/downloads).
   - Download and install Visual Studio Code (VS Code) from [code.visualstudio.com](https://code.visualstudio.com/).

**4. Configure Git:**
   - Open the terminal (Command Prompt or PowerShell on Windows, Terminal on macOS or Linux).
   - Set your global Git username and email (use the ones you registered with on GitHub):
     ```
     git config --global user.name "Your Name"
     git config --global user.email "your_email@example.com"
     ```

### Cloning the Repository Locally

**5. Clone the Repository:**
   - Open VS Code and access the terminal (Terminal > New Terminal).
   - Navigate to the directory where you want to clone the repository:
     ```
     cd path/to/directory
     ```
   - Clone the repository:
     ```
     git clone https://github.com/Giantryan484/Webmaster-2024
     ```

### Understanding Commits and Pushing Changes

**6. Make Changes and Commit:**
   - Make the necessary changes to the code or content within VS Code.
   - Once you are ready to save your changes, stage your changes in Git with:
     ```
     git add .
     ```
   - Commit your changes with a message describing what you've done:
     ```
     git commit -m "A brief description of the changes made"
     ```

**7. Push Changes to GitHub:**
   - Push your changes to the remote repository on GitHub:
     ```
     git push
     ```
   - If you're working on a separate branch, you'll push like this:
     ```
     git push origin your-branch-name
     ```

### Opening a Pull Request

**8. Open a Pull Request (PR):**
   - Go to the repository on GitHub.
   - You'll typically see a prompt to review your recently pushed branches.
   - Click on "Compare & pull request" next to your branch.
   - Add a title and description to your pull request.
   - Click "Create pull request."

### Previewing Changes Locally

**9. Previewing the Website:**
To get started with React and npm, you’ll need to install Node.js, which includes npm (Node Package Manager). Here’s a brief tutorial on installing Node.js and npm, initializing a React project, and using npm to install required packages.

#### Step 1: Installing Node.js and npm

1. **Download Node.js**: Visit the official Node.js website at [nodejs.org](https://nodejs.org/) and download the latest stable version for your operating system.

2. **Install Node.js**: Run the downloaded installer, following the prompts to install both Node.js and npm. The installer should set up everything, including adding Node.js and npm to your system's PATH.

3. **Verify Installation**: To check if Node.js and npm are installed correctly, open a terminal or command prompt and run:
   ```sh
   node --version
   npm --version
   ```
   You should see the version numbers for both Node.js and npm if they are correctly installed.

#### Step 2: Running React Locally

2. **Navigate to Your Project**: Once the installation is complete, move into your project directory (Open VSCode, open your cloned repo, go to Terminal > New Terminal):
   ```sh
   cd webmaster-2024
   ```

3. **Installing packages**: Run the following to install the dependencies required to get the app working locally
   ```sh
   npm install
   ```

3. **Start the Development Server**: You can start the local development server to see your React app in action:
   ```sh
   npm start
   ```
   This command will open your default web browser and load the React app at `http://localhost:3000`.

### Additional Tips

- Frequently pull the latest changes from the main branch to stay updated:
  ```
  git pull origin main
  ```

*If you have further questions, please contact Ryan for help*



# Code Styling Guidelines:

### General Principles
- **Readability**: Write code as if the next person to read it knows where you live.
- **Consistency**: Follow the established patterns and guidelines at all times.
- **Commenting**: Comment your code where necessary, but remember that the best comment is a good name for a class, function, or variable.
- **Testing**: Write tests where possible and practical.

### HTML Guidelines
- Use semantic HTML5 elements.
- Keep the structure clean and readable.
- Use `kebab-case` for IDs and classes.
- Attributes should be in double quotes.

**Example:**
```html
<article class="post-excerpt">
  <header>
    <h2 class="post-title">The Importance of Clean Energy</h2>
  </header>
  <section class="post-content">
    <!-- Content goes here -->
  </section>
  <footer class="post-footer">
    <!-- Footer content -->
  </footer>
</article>
```

### CSS Guidelines
- Use BEM (Block Element Modifier) naming convention.
- Organize sections of CSS by component.
- Use `kebab-case` for class names.
- Avoid deep nesting in preprocessors like SASS.

**Example:**
```css
/* Good */
.block__element--modifier {
  /* Styles */
}

/* Avoid */
.block .another-block__element {
  /* Styles */
}
```

### JavaScript/React Guidelines
- Use ES6+ syntax where appropriate.
- Prefer `const` and `let` over `var`.
- Use arrow functions for anonymous functions.
- Use camelCase for variables and functions, PascalCase for classes and React components.
- Destructure props and state where practical.
- Keep components small and focused on a single responsibility.

**Example:**
```jsx
// React Component
const EnergyCalculator = ({ energyData }) => {
  const calculateSavings = () => {
    // Logic here
  };

  return (
    <div className="energy-calculator">
      <h2>Calculate Your Energy Savings</h2>
      <button onClick={calculateSavings}>Calculate</button>
    </div>
  );
};
```

### Commit Message Guidelines
- Keep commits as small as possible, trying to keep each one focused on one particular feature
- Begin the commit message with a verb in the imperative mood.
- Keep the first line under 50 characters.
- Include a more detailed description if necessary, after a blank line.
- Reference issues or tickets when relevant.

**Example:**
```
Add solar panel calculator component

- Implemented the initial version of the solar panel energy savings calculator.
- Included basic styling according to the design specs.
- Connected the component to the Redux store.
Refs #1234
```

### File Structure Guidelines
- Organize files in a logical hierarchy.
- Use clear, descriptive names for files and directories.
- Group files by feature or functionality rather than by type.
- For React, co-locate CSS (or SASS/SCSS) files with their respective components.

**Example File Structure:**
```
/src
  /components
    /EnergyCalculator
      EnergyCalculator.jsx
      EnergyCalculator.module.css
    /Header
      Header.jsx
      Header.module.css
  /utils
    api.js
    helpers.js
  /assets
    /images
      logo.svg
    /styles
      main.css
  /redux
    /actions
    store.js
    rootReducer.js
index.js
index.html
```

### Commenting Code
- Use comments to explain "why" rather than "what" or "how".
- Use JSDoc for function documentation in JavaScript.

**Example:**
```javascript
/**
 * Calculate the potential savings from installing solar panels.
 * @param {number} currentBill - The current monthly electricity bill.
 * @param {number} panelOutput - The expected monthly output from the solar panels.
 * @return {number} The estimated monthly savings.
 */
function calculateSavings(currentBill, panelOutput) {
  // Calculation logic...
  return savings;
}
```
