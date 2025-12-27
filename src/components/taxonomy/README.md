# Taxonomy Tree Components

Shared tree renderer components for displaying categories and tags in a hierarchical structure. Based on the FolderTreeRenderer components but adapted for taxonomy data.

## Components Overview

### TaxonomyTreeRenderer.astro
Main container component that renders the entire taxonomy tree with header and context menus.

**Props:**
- `title?: string` - Header title (default: "Taxonomy")
- `type: 'category' | 'tag'` - Type of taxonomy to render
- `data: TaxonomyNode[]` - Array of taxonomy nodes to render
- `createCategoryLink?: string` - Link for creating new categories (default: "/#")
- `editCategoryLink?: string` - Link for editing categories (default: "/#")
- `editTagLink?: string` - Link for editing tags (default: "/#")
- `depth?: number` - Initial depth level (default: 0)

**Features:**
- Right-click context menu on empty space
- Header with menu trigger for collapse/expand all
- Auto-sorts taxonomy alphabetically
- Supports both hierarchical categories and flat tags

### TaxonomyTreeNode.astro
Renders individual taxonomy nodes with children (typically categories with subcategories).

**Features:**
- Collapsible/expandable nodes
- Persistent state via localStorage
- Context menu with edit and create subcategory actions
- Color-coded icons from metadata
- Shows child count in label
- Keyboard navigation (Enter, Space, Arrow keys)

### TaxonomyTreeLeaf.astro
Renders leaf nodes without children (categories without subcategories or tags).

**Features:**
- Click to navigate to edit page
- Context menu for editing
- Color-coded icons from metadata
- Keyboard support

### TaxonomyTreeNodeTree.astro
Internal component that recursively renders the tree structure. Automatically sorts nodes alphabetically.

## Utility Functions

### categoriesToTaxonomyNodes(categories)
Converts category data to hierarchical taxonomy nodes by building parent-child relationships.

```typescript
const categoryNodes = categoriesToTaxonomyNodes(mockCategories);
```

### tagsToTaxonomyNodes(tags)
Converts tag data to flat taxonomy nodes (no hierarchy).

```typescript
const tagNodes = tagsToTaxonomyNodes(mockTags);
```

## Usage Example

```astro
---
import TaxonomyTreeRenderer from "../components/taxonomy/TaxonomyTreeRenderer.astro";
import { categoriesToTaxonomyNodes, tagsToTaxonomyNodes } from "../components/taxonomy/shared";
import { mockCategories, mockTags } from "../mockData";

const categoryNodes = categoriesToTaxonomyNodes(mockCategories);
const tagNodes = tagsToTaxonomyNodes(mockTags);
---

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
    <!-- Categories Tree -->
    <TaxonomyTreeRenderer
        title="Categories"
        type="category"
        data={categoryNodes}
        createCategoryLink="/admin/categories/create"
        editCategoryLink="/admin/categories/edit"
    />
    
    <!-- Tags Tree -->
    <TaxonomyTreeRenderer
        title="Tags"
        type="tag"
        data={tagNodes}
        editTagLink="/admin/tags/edit"
    />
</div>
```

## Data Structure

### TaxonomyNode Interface
```typescript
interface TaxonomyNode {
    id: number;
    name: string;
    slug: string;
    description: string;
    meta: {
        readonly [x: string]: unknown;
        color?: string;  // Hex color for icon
    };
    parent: number | null | undefined;
    children: TaxonomyNode[];
    type: 'category' | 'tag';
}
```

### Source Data Formats

**Categories** (tsPageDataCategoriesSelect):
```typescript
{
    id: number;
    name: string;
    parent: number | null;
    description: string;
    slug: string;
    meta: { color?: string, icon?: string };
}
```

**Tags** (tsPageDataTagsSelect):
```typescript
{
    id: number;
    name: string;
    description: string;
    slug: string;
    meta: { color?: string };
}
```

## Features

### Context Menus
- **Container Level**: Right-click empty space to create new taxonomy or collapse/expand all
- **Node Level**: Right-click categories to edit or create subcategories
- **Leaf Level**: Right-click to edit

### Keyboard Navigation
- `Enter` or `Space`: Toggle expand/collapse or navigate
- `ArrowRight`: Expand node
- `ArrowLeft`: Collapse node
- `Escape`: Close context menus

### State Persistence
Expanded/collapsed state is saved to localStorage with keys:
- `taxonomy-category-{id}-expanded`
- `taxonomy-tag-{id}-expanded`

### Visual Indicators
- Color-coded folder/tag icons from `meta.color`
- Chevron icons for expandable nodes
- Open/closed folder states
- Child count display

## Styling

The taxonomy components use the existing `folderTree.css` styles with these custom elements:
- `taxonomy-tree-container`
- `taxonomy-tree-node`
- `taxonomy-tree-leaf`

Additional styles are scoped within TaxonomyTreeRenderer.astro for the header and menu trigger.

## Differences from FolderTreeRenderer

1. **No Page Data**: Taxonomy nodes don't contain page data
2. **Type-based Icons**: Uses folder icons for categories, tag icons for tags
3. **Simplified Structure**: No draft badges or complex page states
4. **Color Metadata**: Supports color customization via meta.color
5. **Header UI**: Includes titled header with menu trigger
6. **Flat Tag Support**: Tags are rendered as a flat list, categories are hierarchical

## Integration with studiocms-ui

Requires the following icons from studiocms-ui:
- `heroicons:folder`
- `heroicons:folder-open`
- `heroicons:folder-plus`
- `heroicons:tag`
- `heroicons:pencil`
- `heroicons:chevron-right`
- `heroicons:plus`
- `heroicons:minus`
- `heroicons:ellipsis-vertical`
