import type { FolderNode } from "../types";

interface BaseProps {
    depth?: number;
}

export interface NodeLeafProps extends BaseProps {
    node: FolderNode;
}

export interface TreeProps extends BaseProps {
    data: FolderNode[];
}