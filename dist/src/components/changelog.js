import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createParser, createSearchParamsCache, parseAsInteger } from 'nuqs/server';
import { useTranslations } from 'use-intl';
import { formatPublished } from '../lib/format-published.js';
import { CaretLeft, CaretRight, Rss } from '@arki/icons/phosphor';
import { Button } from '@arki/ui/button';
import { Pagination, PaginationContent, PaginationLink } from '@arki/ui/pagination';
import { Mdx } from './mdx.js';
import { Timeline } from './timeline.js';
const parseAsPageIndex = createParser({
    parse(queryValue) {
        const parsed = parseAsInteger.parse(queryValue);
        if (!parsed || parsed < 0)
            return 0;
        return parsed;
    },
    serialize(value) {
        return value.toString();
    },
});
export const ITEMS_PER_PAGE = 10;
export const searchParamsParsers = {
    p: parseAsPageIndex.withDefault(0),
};
export const searchParamsCache = createSearchParamsCache(searchParamsParsers);
export function ChangelogTimeline({ posts, Link, searchParams, appTitle, }) {
    const { p } = searchParamsCache.parse(searchParams);
    const t = useTranslations('ChangelogTimeline');
    const MAX_PAGE_INDEX = Math.ceil(posts.length / ITEMS_PER_PAGE) - 1;
    const page = Math.min(p, MAX_PAGE_INDEX);
    const paginatedChangelogs = posts.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);
    return (_jsxs(Timeline, { title: t('title'), description: t('description', { appTitle }), actions: _jsx(Button, { variant: "outline", size: "icon", asChild: true, children: _jsxs("a", { href: "/changelog/feed.xml", target: "_blank", rel: "noreferrer", children: [_jsx(Rss, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: t('rssFeed') })] }) }), children: [paginatedChangelogs.map(changelog => (_jsx(Timeline.Article, { publishedAt: changelog.publishedAt, imageSrc: changelog.image.url, title: changelog.title, href: `/changelog/${changelog.slug}`, blurDataURL: changelog.image.blurDataURL, Link: Link, children: _jsx(Mdx, { code: changelog.content.mdx }) }, changelog.slug))), _jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-6", children: [_jsx("div", { className: "row-span-2" }), _jsx("div", { className: "w-full md:order-2 md:col-span-4", children: _jsx(Pagination, { children: _jsx(PaginationContent, { children: Array.from({ length: MAX_PAGE_INDEX + 1 }).map((_, index) => {
                                    return (_jsx(PaginationLink, { href: `?p=${index}`, isActive: p === index, children: index + 1 }, index));
                                }) }) }) })] })] }));
}
export function ChangelogPagination({ prev, next, }) {
    return (_jsxs("div", { className: "mx-auto flex w-full max-w-prose items-center justify-between", children: [_jsx("div", {}), prev ? (_jsx("div", { className: "w-1/2 flex-1 text-left", children: _jsx(Button, { asChild: true, variant: "link", children: _jsxs("a", { href: `/changelog/${prev.slug}`, className: "group", children: [_jsx(CaretLeft, { className: "mr-2 h-4 w-4 text-muted-foreground group-hover:text-foreground" }), _jsx("span", { className: "truncate", children: prev.title })] }) }) })) : (_jsx("div", {})), next ? (_jsx("div", { className: "w-1/2 flex-1 text-right", children: _jsx(Button, { asChild: true, variant: "link", children: _jsxs("a", { href: `/changelog/${next.slug}`, className: "group", children: [_jsx("span", { className: "truncate", children: next.title }), _jsx(CaretRight, { className: "ml-2 h-4 w-4 text-muted-foreground group-hover:text-foreground" })] }) }) })) : (_jsx("div", {}))] }));
}
export function ChangelogCard({ post }) {
    return (_jsxs("article", { className: "relative mx-auto flex max-w-prose flex-col gap-8", children: [_jsxs("div", { className: "grid w-full gap-3", children: [_jsx("p", { className: "font-mono text-sm text-muted-foreground", children: formatPublished(post.publishedAt, 'LLL dd, y') }), _jsx("h1", { className: "font-cal mb-5 text-3xl", children: post.title }), _jsx("div", { className: "relative aspect-video w-full overflow-hidden rounded-lg border border-border", children: _jsx("img", { src: post.image.url, alt: post.title, className: "absolute inset-0 h-full w-full object-cover" }) })] }), _jsx(Mdx, { code: post.content.mdx })] }));
}
//# sourceMappingURL=changelog.js.map