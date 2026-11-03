import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatPublished } from '../lib/format-published.js';
export function Timeline({ title, description, children, actions }) {
    return (_jsxs("div", { className: "grid gap-8", children: [_jsxs("div", { className: "grid gap-4 md:grid-cols-5 md:gap-8", children: [_jsx("div", { className: "md:col-span-1" }), _jsxs("div", { className: "flex items-end justify-between gap-3 md:col-span-4", children: [_jsxs("div", { className: "grid gap-4", children: [_jsx("h1", { className: "font-cal text-4xl text-foreground", children: title }), _jsx("p", { className: "text-muted-foreground", children: description })] }), _jsx("div", { children: actions })] })] }), children] }));
}
function Article({ publishedAt, imageSrc, title, children, href, Link }) {
    return (_jsxs("article", { className: "grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-6", children: [_jsx("div", { className: "relative row-span-2", children: _jsx("div", { className: "sticky top-20", children: _jsx("time", { className: "order-2 font-mono text-sm text-muted-foreground md:order-1 md:col-span-1", children: formatPublished(publishedAt, 'LLL dd, y') }) }) }), _jsx("div", { className: "relative order-1 aspect-video h-full w-full overflow-hidden rounded-md border border-border md:order-2 md:col-span-4", children: _jsx(Link, { href: href, children: _jsx("img", { src: imageSrc, alt: title, className: "absolute inset-0 h-full w-full object-cover" }) }) }), _jsxs("div", { className: "order-3 grid grid-cols-1 gap-4 md:col-span-4 md:col-start-2", children: [_jsx("h2", { className: "font-cal text-2xl text-foreground", children: title }), children] })] }));
}
Timeline.Article = Article;
//# sourceMappingURL=timeline.js.map