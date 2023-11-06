
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
   ```
   node --version
   npm --version
   ```
   You should see the version numbers for both Node.js and npm if they are correctly installed.

#### Step 2: Running React Locally

2. **Navigate to Your Project**: Once the installation is complete, move into your project directory (Open VSCode, open your cloned repo, go to Terminal > New Terminal):
   ```
   cd webmaster-2024
   ```

3. **Installing packages**: Run the following to install the dependencies required to get the app working locally
   ```
   npm install
   ```

3. **Start the Development Server**: You can start the local development server to see your React app in action:
   ```
   npm start
   ```
   This command will open your default web browser and load the React app at `http://localhost:3000`.

### Additional Tips

- Frequently pull the latest changes from the main branch to stay updated:
  ```
  git pull origin main
  ```

*If you have further questions, please contact Ryan for help*