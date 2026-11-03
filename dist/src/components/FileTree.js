import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowBendDownRight, File, FolderOpen } from '@arki/icons/phosphor';
import { formatFileSize } from '@arki/math/format';
import { cn } from '@arki/ui/cn';
const isDirectory = (node) => {
    return node.type === 'directory';
};
const isFile = (node) => {
    return node.type === 'file';
};
const FileSize = ({ size }) => {
    // MDX authors type the size. A negative or non-finite one shows no size, since formatFileSize refuses it.
    if (size === undefined || !Number.isFinite(size) || size < 0) {
        return null;
    }
    return _jsxs("span", { className: "mr-2", children: ["(", formatFileSize(size), ")"] });
};
const LeafNode = ({ node, depth }) => {
    const Icon = isDirectory(node) ? FolderOpen : File;
    return (_jsxs("li", { className: "flex gap-1", children: [depth > 0 ? (_jsx("div", { className: "flex items-center justify-end", style: { width: depth * 24 }, children: _jsx(ArrowBendDownRight, { className: "text-base-300 dark:text-base-600 w-4" }) })) : null, _jsx(Icon, { className: "w-6" }), _jsxs("div", { className: "flex w-full justify-between", children: [_jsx("div", { children: node.name }), _jsx("div", { children: isFile(node) ? _jsx(FileSize, { size: node.size }) : null })] })] }));
};
const NonLeafNode = ({ node, depth }) => (_jsxs(_Fragment, { children: [_jsx(LeafNode, { node: node, depth: depth }), isDirectory(node)
            ? (node.children ?? []).map(c => (_jsx("ul", { children: _jsx(NonLeafNode, { node: c, depth: depth + 1 }) }, depth + '_' + c.name)))
            : null] }));
export const FileTree = ({ nodes, className }) => (_jsx("div", { className: cn('not-prose border-base-300 dark:border-base-700 flex flex-col gap-2 overflow-x-scroll rounded-md border-2 p-5 shadow-md', className), children: _jsx("ul", { className: 'flex min-w-[460px] flex-col gap-2', children: nodes.map(n => (_jsx(NonLeafNode, { node: n, depth: 0 }, n.name))) }) }));
//# sourceMappingURL=FileTree.js.map