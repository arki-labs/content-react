import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, AvatarFallback, AvatarImage } from '@arki/ui/avatar';
import { Badge } from '@arki/ui/badge';
import { ScrollToTop } from '@arki/ui/scroll-to-top';
import { formatPublished } from '../lib/format-published.js';
import { Mdx } from './mdx.js';
/** The first letter of the first and the last name: "Ada King Lovelace" is "AL". */
function nameInitials(name) {
    const names = name.split(' ');
    return `${names[0]?.charAt(0) ?? ''}${names.at(-1)?.charAt(0) ?? ''}`;
}
export function Article({ post }) {
    return (_jsxs("article", { className: "relative mx-auto flex max-w-prose flex-col gap-8", children: [_jsxs("div", { className: "grid w-full gap-3", children: [_jsx("h1", { className: "font-cal mb-5 text-3xl", children: post.title }), _jsx("figure", { className: "relative aspect-video w-full overflow-hidden rounded-lg border border-border", children: _jsx("img", { src: post.image.url, alt: post.title, className: "absolute inset-0 h-full w-full object-cover", loading: "lazy", decoding: "async" }) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs(Avatar, { children: [_jsx(AvatarImage, { src: post.author.avatar }), _jsx(AvatarFallback, { children: nameInitials(post.author.name) })] }), _jsxs("div", { className: "text-sm font-light text-muted-foreground", children: [_jsx("a", { href: post.author.url ?? '#', target: "_blank", rel: "noopener noreferrer", className: "cursor-pointer font-medium text-foreground hover:underline", children: post.author.name }), _jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [_jsx("time", { className: "font-mono", children: formatPublished(post.publishedAt, 'LLL dd, y') }), _jsx("span", { className: "text-muted-foreground/70", children: "\u2022" }), _jsx("span", { className: "font-mono", children: post.readingTime }), _jsx("span", { className: "text-muted-foreground/70", children: "\u2022" }), post.tags.map(tag => (_jsx(Badge, { variant: "outline", className: "font-normal capitalize", children: tag }, tag)))] })] })] })] }), _jsx(Mdx, { code: post.content.mdx }), _jsx(ScrollToTop, {})] }));
}
//# sourceMappingURL=article.js.map