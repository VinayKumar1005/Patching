# Application List Sorter

A simple, interactive web tool to manage and sort a list of application names with alias/shortcut support. Built with pure HTML, CSS, and JavaScript—no backend or dependencies required.

## Features
- **Filter** applications by entering names, shortcuts, or keywords (comma, semicolon, or newline-separated)
- **Alias/Shortcut Matching:** Supports shortcuts and full names (e.g., `CRM` ↔ `CUSTOMER RELATIONSHIP MANAGEMENT`)
- **Add/Remove** applications dynamically
- **Persistence:** Changes are saved in your browser (localStorage)
- **Not Found List:** See which input names/shortcuts are not in the app list

## Getting Started

### 1. Open Locally
- Download or clone this repository.
- Open `public/app-sorter.html` in your web browser.

### 2. Share with Your Team
- Send the `app-sorter.html` file to your teammates, or place it on a shared drive/cloud folder.
- Or deploy to a web server for easy access.

### 3. (Optional) GitHub Pages Deployment
- Enable GitHub Pages in your repo settings (source: `main` branch, `/root`).
- Access your tool at `https://your-username.github.io/app-list-sorter/public/app-sorter.html`

## Customization
- Edit the `defaultApps` array in `app-sorter.html` to change the default app list.
- Update the `appAliases` object to add more shortcuts or full names.

## Example Aliases
```js
const appAliases = {
  "CRM": ["CUSTOMER RELATIONSHIP MANAGEMENT"],
  "CUSTOMER RELATIONSHIP MANAGEMENT": ["CRM"],
  "WPC": ["WEBSPHERE PRODUCT CENTER"],
  "WEBSPHERE PRODUCT CENTER": ["WPC"],
  // Add more...
};
```

## License
MIT
