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