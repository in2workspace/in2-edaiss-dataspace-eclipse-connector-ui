<!-- title: Developer Instructions -->

## Developer Instructions

# Guidelines: Overwriting Components in the Angular Library

**Purpose:** Define a standard process for developers to overwrite and extend existing components inside the shared Angular library while maintaining compatibility and modularity.

---

## Overview

Sometimes, we need to **customize or extend** a component from the core Angular library without modifying the original source code directly.

To achieve this, we **create a new component** that **extends** the original component class and **re-exports it** under the same name.  
This ensures that all imports referring to the original component now use the customized one.

---

## Folder Structure

Example:

Assume the original component is located in an app inside the library:

```
projects/dashboard-core/home/src/
├── home-view/home-view.component.ts
├── home-view/home-view.component.html
├── home-view/home-view.component.css
└── index.ts
```

To overwrite it, you’ll create:

```
projects/dashboard-core/home/src/
├── home-view/home-view-custom.component.ts
├── home-view/home-view-custom.component.html
├── home-view/home-view-custom.component.css
├── home-view/home-view.component.ts <-- Original component
├── home-view/home-view.component.html <-- Original component
├── home-view/home-view.component.css <-- Original component
└── index.ts <-- Updated to export the custom component
```

Assume the original component, services is located inside the library:

```
projects/dashboard-core/src/lib/
├── services/dashboard-state.service.ts
└── public-api.ts
```

To overwrite it, you’ll create:

```
projects/dashboard-core/src/lib/
├── services/dashboard-state-custom.service.ts
├── services/dashboard-state.service.ts <-- Original service
└── public-api.ts <-- Updated to export the custom service
```

---

## Step-by-Step Instructions

### 1. Create the Custom Component

Create a new file named `home-view-custom.component.ts` in the same folder as the original component.

**typescript**

```
import { Component } from '@angular/core';
import { DashboardStateService } from '@eclipse-edc/dashboard-core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
selector: 'lib-home-view', // Keep the same selector
imports: [AsyncPipe],
templateUrl: './home-view-custom.component.html',
styleUrls: ['./home-view-custom.component.scss'],
})
export class HomeViewCustomComponent extends HomeViewComponent {
// ✅ You can override properties, lifecycle hooks, or methods here.

override ngOnInit(): void {
super.ngOnInit();
console.log('Custom HomeView component loaded');
}

// Example of overriding a method
override someMethod(): void {
console.log('Custom behavior');
}

// You can add new methods
}
```

### 2. Update the HTML and CSS

Create a new files named `home-view-custom.component.html` and `home-view-custom.component.css` in the same folder as the original component.

Copy the same Template and Styles than the original component and then you can modify or add new code.

### 3. Re-export the Custom Component

Open the index.ts file and replace the export of the original component:

// Replace this line:

`export * from './src/home-view/home-view.component';`

// With this line:

`export { HomeViewCustomComponent as HomeViewComponent } from './home-view-custom.component';`

This ensures that any consumer importing HomeViewComponent will receive your customized implementation.

### 4. Rebuild the Library

From your workspace root, run (Terminal):

`npm run lib-build`

or

`npm run lib-start`

The output library (dist/@eclipse-edc/dashboard-core) will now contain your custom HomeViewComponent, which replaces the original one everywhere it’s imported from the library.

## Notes and Best Practices

- Never modify original component logic directly — always extend it.

- Keep the same selector to preserve compatibility in templates.

- If you need to access private members from the base class, consider refactoring them to be protected in the original source.

- Always test your custom component after overwriting to ensure no regressions.

- Document your overrides in the library’s changelog for visibility.
