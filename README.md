Video Link:https://www.loom.com/share/e5f675d8e80040b1a69be14cd412bd91?sid=b4424c91-fd55-452c-9844-5ccc3dc50e13

Accessibility Widget (Frontend)
A user-friendly accessibility widget built with Vue 3 and Vite, offering customizable features to enhance web accessibility. This widget is built as a frontend-only module, ready for integration into any web application or SPA.

Features
Adjustable font size, contrast, and color themes
Big cursor and dyslexia-friendly font toggles
Link highlighting, pause animations, and outline headings
Accessible keyboard navigation
User feedback and widget usage analytics (optional frontend tracking)
Modern, modular Vue 3 + Vite codebase (ideal for SaaS or multi-domain integration)
Project Structure
widget/ ├─ public/ # Static files (e.g., icons, favicon) │ └─ vite.svg ├─ src/ │ ├─ assets/ # Images, icons, SVGs │ │ ├─ cat.png │ │ └─ vue.svg │ ├─ components/ # Vue components (MenuPanel, FloatingButton) │ │ ├─ controls/ │ │ ├─ FloatingButton.vue │ │ └─ MenuPanel.vue │ ├─ store/ # Store for settings │ │ └─ settings.js │ ├─ utils/ # Reusable helpers (e.g., cssHelpers) │ │ ├─ api.js │ │ ├─ cssHelpers.js │ │ └─ controlsConfig.js │ ├─ App.vue │ ├─ main.js │ └─ style.css ├─ .gitignore ├─ index.html ├─ package.json ├─ vite.config.js └─ README.md

Setup Instructions
Prerequisites
Node.js (v18+ recommended)
npm or yarn (npm comes with Node.js)
Installation
Clone the repository and navigate to the project directory:
``bash git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git cd YOUR_REPO_NAME/widget

Install dependencies: npm install Start the development server:npm run dev

Open the app in your browser:http://localhost:51734

Usage Launch the application in your browser to test and preview the widget.

Use the floating button to toggle accessibility settings.

Integrate this widget into any existing frontend application as a component or iframe.

All accessibility controls update the DOM using CSS for maximum compatibility.

Customization Modify Widget Features Update control logic in: src/components/MenuPanel.vue

Update CSS behavior or utility logic in: src/utils/cssHelpers.js

Adjust default state or behavior in: src/store/settings.js

Assets and Images Place shared/static assets in the public/ folder (access via /filename)

Or import them into Vue components from src/assets/

Build for Production To generate a static production bundle: npm run build
