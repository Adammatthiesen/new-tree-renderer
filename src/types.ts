type tsPageDataSelect = {
    readonly id: string;
    readonly updatedAt: Date;
    readonly description: string;
    readonly title: string;
    readonly authorId: string;
    readonly package: string;
    readonly showOnNav: boolean;
    readonly publishedAt: Date;
    readonly slug: string;
    readonly contentLang: string;
    readonly heroImage: string | null | undefined;
    readonly categories: readonly string[];
    readonly tags: readonly string[];
    readonly contributorIds: readonly string[];
    readonly showAuthor: boolean;
    readonly showContributors: boolean;
    readonly parentFolder: string | null | undefined;
    readonly draft: boolean;
    readonly augments: readonly string[];
}
export type PageDataStripped = Omit<tsPageDataSelect, 'categories' | 'tags' | 'contributorIds'>;

type placeHolderObject = {};

export interface CombinedPageData extends PageDataStripped {
    contributorIds: string[];
    categories: placeHolderObject[];
    tags: placeHolderObject[];
    multiLangContent: placeHolderObject[];
    defaultContent: placeHolderObject | undefined;
    urlRoute: string;
    authorData: placeHolderObject | undefined;
    contributorsData: placeHolderObject[];
}

export interface FolderNode {
    id: string;
    name: string;
    page: boolean;
    pageData: CombinedPageData | null;
    children: FolderNode[];
}