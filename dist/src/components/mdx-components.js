import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tweet } from 'react-tweet';
import { Hash } from '@arki/icons/phosphor';
import { Callout } from '@arki/ui/callout';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@arki/ui/table';
import { FileTree } from './FileTree.js';
import { GitHubIssue, GitHubPullRequest } from './GitHub.js';
import MarkdownImage from './MarkdownImage.js';
import { Notification } from './notification.js';
import Pre from './pre.js';
import { StaticTweet } from './StaticTweet.js';
const heading = (As) => {
    const Heading = ({ id, children }) => (_jsxs("a", { href: `#${id}`, className: "group relative no-underline focus-visible:ring-0", children: [_jsx(Hash, { className: "text-primary-500 dark:text-primary-400 absolute -left-5 hidden h-full p-1 group-hover:block group-focus-visible:block sm:-left-6", strokeWidth: "3" }), _jsx(As, { id: id, className: "group-focus-visible:decoration-primary-500 group-focus-visible:underline group-focus-visible:decoration-2", children: children })] }));
    Heading.displayName = As;
    return Heading;
};
export const components = {
    a: ({ href = '', children, ...props }) => {
        if (href.startsWith('http')) {
            return (_jsx("a", { className: "text-foreground underline underline-offset-4 hover:no-underline", href: href, target: "_blank", rel: "noopener noreferrer", ...props, children: children }));
        }
        return (_jsx("a", { href: href, className: "text-foreground underline underline-offset-4 hover:no-underline", ...props, children: children }));
    },
    Tweet: (props) => {
        return (_jsx("div", { "data-theme": "light", className: "not-prose [&>div]:mx-auto", children: _jsx(Tweet, { ...props }) }));
    },
    // No `alt` in the MDX marks the image decorative (`alt=""`), so screen readers skip it.
    Image: ({ alt = '', ...props }) => (_jsx("img", { loading: "lazy", decoding: "async", alt: alt, ...props })),
    img: MarkdownImage,
    Callout: (props) => {
        return (_jsx("div", { className: "not-prose my-5", children: _jsx(Callout, { ...props }) }));
    },
    Notification,
    GitHubIssue,
    GitHubPullRequest,
    StaticTweet,
    FileTree: (props) => _jsx(FileTree, { ...props }),
    table: (props) => _jsx(Table, { ...props }),
    thead: (props) => _jsx(TableHeader, { ...props }),
    tbody: (props) => _jsx(TableBody, { ...props }),
    tfoot: (props) => _jsx(TableFooter, { ...props }),
    tr: (props) => _jsx(TableRow, { ...props }),
    th: (props) => _jsx(TableHead, { ...props }),
    td: (props) => _jsx(TableCell, { ...props }),
    pre: (props) => _jsx(Pre, { ...props }),
    h1: heading('h1'),
    h2: heading('h2'),
    h3: heading('h3'),
    h4: heading('h4'),
    h5: heading('h5'),
    h6: heading('h6'),
};
//# sourceMappingURL=mdx-components.js.map