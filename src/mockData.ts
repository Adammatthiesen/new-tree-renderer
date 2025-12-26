import type { FolderNode, CombinedPageData } from './types';

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
        page: true,
        pageData: createMockPageData({
            title: 'Getting Started',
            slug: 'getting-started',
            description: 'Learn how to get started with our platform',
            urlRoute: '/docs/getting-started'
        }),
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
                page: true,
                pageData: createMockPageData({
                    title: 'Authentication API',
                    slug: 'authentication',
                    description: 'API endpoints for authentication',
                    urlRoute: '/docs/api/authentication',
                    parentFolder: 'root-2'
                }),
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
                            parentFolder: 'child-2-1'
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
