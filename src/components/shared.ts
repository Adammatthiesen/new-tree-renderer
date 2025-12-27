import type { FolderNode } from "../types";

interface BaseProps {
    depth?: number;
    createFolderLink?: string;
    createPageLink?: string;
    editFolderLink?: string;
    editPageLink?: string;
}

export interface NodeLeafProps extends BaseProps {
    node: FolderNode;
}

export interface TreeNodeProps extends NodeLeafProps {
    createFolderLink: string;
    createPageLink: string;
}

export interface TreeProps extends BaseProps {
    data: FolderNode[];
}