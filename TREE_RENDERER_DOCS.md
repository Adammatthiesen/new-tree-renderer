# Folder Tree Renderer

A modern, accessible, and collapsible tree renderer for hierarchical folder and page structures built with Astro.

## Features

- ✨ **Collapsible Folders**: Click to expand/collapse folder nodes
- 💾 **Persistent State**: Folder expanded states are saved to localStorage
- ♿ **Accessible**: Full keyboard navigation and ARIA attributes
- 🎨 **Themed**: Uses CSS variables from studiocms-ui theme system
- 📱 **Responsive**: Clean, modern design that works on all screen sizes
- 🔍 **Visual Feedback**: Active page highlighting and hover states
- 🏷️ **Draft Badges**: Visual indicators for draft content
- 🎯 **Smart Icons**: Different icons for home pages, drafts, and regular pages

## Components

### FolderTreeRenderer

The main component that renders the entire tree structure.

```astro
---
import FolderTreeRenderer from "./components/FolderTreeRenderer.astro";
import { mockFolderTree } from "./mockData";
---

<FolderTreeRenderer data={mockFolderTree} />
```

**Props:**
- `data: FolderNode[]` - Array of root-level folder nodes
- `depth?: number` - Initial depth level (default: 0)

### FolderTreeNode

Renders a collapsible folder node with children.

**Features:**
- Click anywhere on the header to toggle
- Chevron icon rotates when expanded
- Folder icon changes from closed to open
- Children are indented with a visual border
- State persists across page reloads

**Keyboard Support:**
- `Enter` / `Space` - Toggle expand/collapse
- `ArrowRight` - Expand folder
- `ArrowLeft` - Collapse folder

### FolderTreeLeaf

Renders a clickable page/document leaf node.

**Features:**
- Icon changes based on page type (home, draft, regular)
- Active state for current page
- Draft badge for draft content
- Smooth hover effects

**Keyboard Support:**
- `Enter` / `Space` - Navigate to page
- `Ctrl/Cmd + Click` - Open in new tab

## Type System

```typescript
export interface FolderNode {
    id: string;
    name: string;
    page: boolean;
    pageData: CombinedPageData | null;
    children: FolderNode[];
}
```

- **page: true** → Renders as `FolderTreeLeaf` (clickable page)
- **page: false** → Renders as `FolderTreeNode` (collapsible folder)

## Styling

The components use CSS variables from the studiocms-ui theme system:

### Colors Used
- `--background-base` - Main background
- `--background-step-1` - Elevated surface
- `--background-step-2` - Hover state
- `--background-step-3` - Active state
- `--text-normal` - Primary text
- `--text-muted` - Secondary text
- `--border` - Borders and dividers
- `--primary-base` - Active/selected state
- `--warning-base` - Draft badge color
- `--warning-flat` - Draft badge background

### Radii Used
- `--radius-sm` - Small radius (badges)
- `--radius-md` - Medium radius (nodes)

### Transitions
All interactive elements use smooth 0.15s transitions for hover states and 0.2s for chevron rotation.

## Customization

### Custom Icons

Modify the `getPageIcon()` function in `FolderTreeLeaf.astro`:

```typescript
function getPageIcon(): AvailableIcons {
    if (!node.pageData) return "heroicons:document-text";

    // Add custom logic
    if (node.pageData.slug === "index") {
        return "heroicons:home-modern";
    }

    return "heroicons:document-text";
}
```

### Custom Badges

Add more badge types in `FolderTreeLeaf.astro`:

```astro
{node.pageData?.draft && (
    <span class="leaf-badge draft-badge">Draft</span>
)}
{node.pageData?.featured && (
    <span class="leaf-badge featured-badge">Featured</span>
)}
```

### Styling Override

You can override styles by targeting the component classes:

```css
.tree-node-header:hover {
    background-color: var(--custom-hover-color);
}

.tree-leaf[aria-current="page"] {
    background-color: var(--custom-active-color);
}
```

## Mock Data

The project includes comprehensive mock data in `src/mockData.ts`:

```typescript
import { mockFolderTree } from "./mockData";

// Use in your page
<FolderTreeRenderer data={mockFolderTree} />
```

**Available mock data:**
- `mockFolderTree` - Complete hierarchical tree structure
- `mockEmptyFolder` - Empty folder with no children
- `mockSinglePage` - Standalone page node
- `mockDraftPage` - Draft page example

## Accessibility

The tree renderer follows WAI-ARIA tree pattern guidelines:

- Uses `role="treeitem"` for nodes and leaves
- Implements `aria-expanded` for folder states
- Provides `aria-current="page"` for active pages
- Supports full keyboard navigation
- Includes descriptive `aria-label` attributes
- Uses semantic HTML elements

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript for collapsible functionality
- Uses CSS custom properties (IE11 not supported)
- Uses localStorage API for state persistence

## Comparison with Old Renderer

| Feature             | Old Renderer | New Renderer |
| ------------------- | ------------ | ------------ |
| Collapsible         | ❌            | ✅            |
| State Persistence   | ❌            | ✅            |
| Keyboard Navigation | Basic        | Full         |
| Visual Feedback     | Limited      | Enhanced     |
| Draft Badges        | ❌            | ✅            |
| Icon Transitions    | Basic        | Smooth       |
| Nested Borders      | Simple       | Visual       |

## Examples

### Basic Usage

```astro
---
import FolderTreeRenderer from "./components/FolderTreeRenderer.astro";

const myData = [
    {
        id: "1",
        name: "Documentation",
        page: false,
        pageData: null,
        children: [
            {
                id: "2",
                name: "Getting Started",
                page: true,
                pageData: { /* ... */ },
                children: []
            }
        ]
    }
];
---

<FolderTreeRenderer data={myData} />
```

### With Custom Container

```astro
<div class="sidebar">
    <h2>Navigation</h2>
    <FolderTreeRenderer data={navData} />
</div>

<style>
    .sidebar {
        width: 300px;
        padding: 1rem;
        background: var(--background-step-1);
        border-radius: var(--radius-lg);
    }
</style>
```

## License

MIT
