import type { FolderNode, CombinedPageData, tsPageDataTagsSelect, tsPageDataCategoriesSelect } from './types';

// Mock page data helper
const createMockPageData = (overrides: Partial<CombinedPageData> = {}): CombinedPageData => ({
    id: 'page-' + Math.random().toString(36).slice(2, 9),
    updatedAt: new Date('2025-12-20'),
    description: 'This is a sample page description',
    title: 'Sample Page',
    authorId: 'author-123',
    package: 'main',
    showOnNav: true,
    publishedAt: new Date('2025-12-15'),
    slug: 'sample-page',
    contentLang: 'en',
    heroImage: '/images/hero.jpg',
    showAuthor: true,
    showContributors: true,
    parentFolder: null,
    draft: false,
    augments: [],
    contributorIds: ['contributor-1', 'contributor-2'],
    categories: [
        { id: 'cat-1', name: 'Documentation' },
        { id: 'cat-2', name: 'Tutorial' }
    ],
    tags: [
        { id: 'tag-1', name: 'getting-started' },
        { id: 'tag-2', name: 'beginner' }
    ],
    multiLangContent: [
        { lang: 'en', content: 'English content' },
        { lang: 'es', content: 'Spanish content' }
    ],
    defaultContent: { lang: 'en', content: 'Default English content' },
    urlRoute: '/docs/sample-page',
    authorData: {
        id: 'author-123',
        name: 'John Doe',
        email: 'john@example.com'
    },
    contributorsData: [
        { id: 'contributor-1', name: 'Jane Smith' },
        { id: 'contributor-2', name: 'Bob Johnson' }
    ],
    ...overrides
});

// Mock folder tree data
export const mockFolderTree: FolderNode[] = [
    {
        id: 'root-1',
        name: 'Getting Started',
        page: false,
        pageData: null,
        children: [
            {
                id: 'child-1-1',
                name: 'Installation',
                page: true,
                pageData: createMockPageData({
                    title: 'Installation Guide',
                    slug: 'installation',
                    description: 'Step-by-step installation instructions',
                    urlRoute: '/docs/getting-started/installation',
                    parentFolder: 'root-1'
                }),
                children: []
            },
            {
                id: 'child-1-2',
                name: 'Configuration',
                page: true,
                pageData: createMockPageData({
                    title: 'Configuration',
                    slug: 'configuration',
                    description: 'Configure your application',
                    urlRoute: '/docs/getting-started/configuration',
                    parentFolder: 'root-1'
                }),
                children: []
            }
        ]
    },
    {
        id: 'root-2',
        name: 'API Reference',
        page: false,
        pageData: null,
        children: [
            {
                id: 'child-2-1',
                name: 'Authentication',
                page: false,
                pageData: null,
                children: [
                    {
                        id: 'child-2-1-1',
                        name: 'Login',
                        page: true,
                        pageData: createMockPageData({
                            title: 'Login Endpoint',
                            slug: 'login',
                            description: 'User login endpoint documentation',
                            urlRoute: '/docs/api/authentication/login',
                            parentFolder: 'child-2-1',
                            draft: true
                        }),
                        children: []
                    },
                    {
                        id: 'child-2-1-2',
                        name: 'Logout',
                        page: true,
                        pageData: createMockPageData({
                            title: 'Logout Endpoint',
                            slug: 'logout',
                            description: 'User logout endpoint documentation',
                            urlRoute: '/docs/api/authentication/logout',
                            parentFolder: 'child-2-1'
                        }),
                        children: []
                    }
                ]
            },
            {
                id: 'child-2-2',
                name: 'Users',
                page: true,
                pageData: createMockPageData({
                    title: 'Users API',
                    slug: 'users',
                    description: 'User management endpoints',
                    urlRoute: '/docs/api/users',
                    parentFolder: 'root-2'
                }),
                children: []
            }
        ]
    },
    {
        id: 'root-3',
        name: 'Guides',
        page: false,
        pageData: null,
        children: [
            {
                id: 'child-3-1',
                name: 'Best Practices',
                page: true,
                pageData: createMockPageData({
                    title: 'Best Practices',
                    slug: 'best-practices',
                    description: 'Learn industry best practices',
                    urlRoute: '/docs/guides/best-practices',
                    parentFolder: 'root-3'
                }),
                children: []
            },
            {
                id: 'child-3-2',
                name: 'Troubleshooting',
                page: true,
                pageData: createMockPageData({
                    title: 'Troubleshooting Guide',
                    slug: 'troubleshooting',
                    description: 'Common issues and solutions',
                    urlRoute: '/docs/guides/troubleshooting',
                    parentFolder: 'root-3',
                    draft: false
                }),
                children: []
            },
            {
                id: 'child-3-3',
                name: 'Advanced Topics',
                page: false,
                pageData: null,
                children: [
                    {
                        id: 'child-3-3-1',
                        name: 'Performance Optimization',
                        page: true,
                        pageData: createMockPageData({
                            title: 'Performance Optimization',
                            slug: 'performance',
                            description: 'Optimize your application performance',
                            urlRoute: '/docs/guides/advanced/performance',
                            parentFolder: 'child-3-3'
                        }),
                        children: []
                    },
                    {
                        id: 'child-3-3-2',
                        name: 'Security',
                        page: true,
                        pageData: createMockPageData({
                            title: 'Security Best Practices',
                            slug: 'security',
                            description: 'Secure your application',
                            urlRoute: '/docs/guides/advanced/security',
                            parentFolder: 'child-3-3'
                        }),
                        children: []
                    }
                ]
            }
        ]
    },
    {
        id: 'root-4',
        name: 'FAQ',
        page: true,
        pageData: createMockPageData({
            title: 'Frequently Asked Questions',
            slug: 'faq',
            description: 'Common questions and answers',
            urlRoute: '/docs/faq',
            showOnNav: true
        }),
        children: []
    }
];

// Additional mock data for testing
export const mockEmptyFolder: FolderNode = {
    id: 'empty-1',
    name: 'Empty Folder',
    page: false,
    pageData: null,
    children: []
};

export const mockSinglePage: FolderNode = {
    id: 'single-1',
    name: 'Standalone Page',
    page: true,
    pageData: createMockPageData({
        title: 'Standalone Page',
        slug: 'standalone',
        description: 'A page without children',
        urlRoute: '/docs/standalone'
    }),
    children: []
};

export const mockDraftPage: FolderNode = {
    id: 'draft-1',
    name: 'Draft Content',
    page: true,
    pageData: createMockPageData({
        title: 'Draft Article',
        slug: 'draft-article',
        description: 'This is a draft article',
        urlRoute: '/docs/draft-article',
        draft: true,
        showOnNav: false
    }),
    children: []
};

// Mock data for categories
export const mockCategories: tsPageDataCategoriesSelect[] = [
    {
        id: 1,
        name: "Technology",
        parent: null,
        description: "Technology-related content and articles",
        slug: "technology",
        meta: { color: "#3b82f6", icon: "cpu" }
    },
    {
        id: 2,
        name: "Web Development",
        parent: 1,
        description: "Web development tutorials and guides",
        slug: "web-development",
        meta: { color: "#8b5cf6", icon: "code" }
    },
    {
        id: 3,
        name: "Frontend",
        parent: 2,
        description: "Frontend frameworks and libraries",
        slug: "frontend",
        meta: { color: "#06b6d4", icon: "window" }
    },
    {
        id: 4,
        name: "Backend",
        parent: 2,
        description: "Backend development and APIs",
        slug: "backend",
        meta: { color: "#10b981", icon: "server" }
    },
    {
        id: 5,
        name: "Design",
        parent: null,
        description: "Design principles and UI/UX",
        slug: "design",
        meta: { color: "#ec4899", icon: "palette" }
    },
    {
        id: 6,
        name: "DevOps",
        parent: 1,
        description: "DevOps practices and tools",
        slug: "devops",
        meta: { color: "#f59e0b", icon: "cog" }
    },
    {
        id: 7,
        name: "Mobile",
        parent: 1,
        description: "Mobile app development",
        slug: "mobile",
        meta: { color: "#ef4444", icon: "device-mobile" }
    },
    {
        id: 8,
        name: "Tutorials",
        parent: null,
        description: "Step-by-step tutorials and guides",
        slug: "tutorials",
        meta: { color: "#14b8a6", icon: "book-open" }
    }
];

// Mock data for tags
export const mockTags: tsPageDataTagsSelect[] = [
    {
        id: 1,
        name: "JavaScript",
        description: "JavaScript programming language",
        slug: "javascript",
        meta: { color: "#f7df1e" }
    },
    {
        id: 2,
        name: "TypeScript",
        description: "TypeScript superset of JavaScript",
        slug: "typescript",
        meta: { color: "#3178c6" }
    },
    {
        id: 3,
        name: "React",
        description: "React JavaScript library",
        slug: "react",
        meta: { color: "#61dafb" }
    },
    {
        id: 4,
        name: "Astro",
        description: "Astro web framework",
        slug: "astro",
        meta: { color: "#ff5d01" }
    },
    {
        id: 5,
        name: "CSS",
        description: "Cascading Style Sheets",
        slug: "css",
        meta: { color: "#264de4" }
    },
    {
        id: 6,
        name: "Node.js",
        description: "Node.js runtime environment",
        slug: "nodejs",
        meta: { color: "#339933" }
    },
    {
        id: 7,
        name: "API",
        description: "Application Programming Interface",
        slug: "api",
        meta: { color: "#009688" }
    },
    {
        id: 8,
        name: "Database",
        description: "Database design and management",
        slug: "database",
        meta: { color: "#ff6f00" }
    },
    {
        id: 9,
        name: "Security",
        description: "Security best practices",
        slug: "security",
        meta: { color: "#d32f2f" }
    },
    {
        id: 10,
        name: "Performance",
        description: "Performance optimization",
        slug: "performance",
        meta: { color: "#7cb342" }
    },
    {
        id: 11,
        name: "Testing",
        description: "Testing and quality assurance",
        slug: "testing",
        meta: { color: "#e91e63" }
    },
    {
        id: 12,
        name: "Docker",
        description: "Docker containerization",
        slug: "docker",
        meta: { color: "#2496ed" }
    },
    {
        id: 13,
        name: "Git",
        description: "Git version control",
        slug: "git",
        meta: { color: "#f05032" }
    },
    {
        id: 14,
        name: "UI/UX",
        description: "User interface and experience design",
        slug: "ui-ux",
        meta: { color: "#9c27b0" }
    },
    {
        id: 15,
        name: "Accessibility",
        description: "Web accessibility standards",
        slug: "accessibility",
        meta: { color: "#4caf50" }
    }
];