import type { tsPageDataCategoriesSelect, tsPageDataTagsSelect } from "../../types";

/**
 * Unified tree node for categories and tags
 */
export interface TaxonomyNode {
    id: number;
    name: string;
    slug: string;
    description: string;
    meta: {
        readonly [x: string]: unknown;
    };
    parent: number | null | undefined;
    children: TaxonomyNode[];
    type: 'category' | 'tag';
}

interface BaseTaxonomyProps {
    depth?: number;
    editCategoryLink?: string;
    editTagLink?: string;
    createCategoryLink?: string;
}

export interface TaxonomyNodeProps extends BaseTaxonomyProps {
    node: TaxonomyNode;
}

export interface TaxonomyTreeProps extends BaseTaxonomyProps {
    data: TaxonomyNode[];
}

/**
 * Convert category data to taxonomy nodes
 */
export function categoriesToTaxonomyNodes(categories: tsPageDataCategoriesSelect[]): TaxonomyNode[] {
    const nodes: TaxonomyNode[] = categories.map(cat => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        meta: cat.meta,
        parent: cat.parent,
        children: [],
        type: 'category' as const
    }));

    // Build hierarchy
    const nodeMap = new Map<number, TaxonomyNode>();
    nodes.forEach(node => nodeMap.set(node.id, node));

    const roots: TaxonomyNode[] = [];
    nodes.forEach(node => {
        if (node.parent === null || node.parent === undefined) {
            roots.push(node);
        } else {
            const parent = nodeMap.get(node.parent);
            if (parent) {
                parent.children.push(node);
            } else {
                // Parent not found, treat as root
                roots.push(node);
            }
        }
    });

    return roots;
}

/**
 * Convert tag data to taxonomy nodes (flat structure)
 */
export function tagsToTaxonomyNodes(tags: tsPageDataTagsSelect[]): TaxonomyNode[] {
    return tags.map(tag => ({
        id: tag.id,
        name: tag.name,
        slug: tag.slug,
        description: tag.description,
        meta: tag.meta,
        parent: null,
        children: [],
        type: 'tag' as const
    }));
}
