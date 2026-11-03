type DirectoryNode = {
    name: string;
    type: 'directory';
    /** MDX authors may leave an empty folder's children out. */
    children?: TreeNode[];
};
type FileNode = {
    name: string;
    type: 'file';
    size?: number;
};
type TreeNode = FileNode | DirectoryNode;
export type FileTreeProps = {
    nodes: TreeNode[];
    className?: string;
};
export declare const FileTree: ({ nodes, className }: FileTreeProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=FileTree.d.ts.map