import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createParser, createSearchParamsCache, parseAsInteger } from 'nuqs/server';
import { useTranslations } from 'use-intl';
import { Rss } from '@arki/icons/phosphor';
import { Button } from '@arki/ui/button';
import { Pagination, PaginationContent, PaginationLink } from '@arki/ui/pagination';
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
const ITEMS_PER_PAGE = 10;
const searchParamsParsers = {
    p: parseAsPageIndex.withDefault(0),
};
const searchParamsCache = createSearchParamsCache(searchParamsParsers);
export const PostsTimeline = ({ appTitle, posts, searchParams, Link, }) => {
    const { p } = searchParamsCache.parse(searchParams);
    const maxPageIndex = Math.ceil(posts.length / ITEMS_PER_PAGE) - 1;
    const page = Math.min(p, maxPageIndex);
    const paginatedPosts = posts.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);
    const t = useTranslations('PostsTimeline');
    return (_jsxs(Timeline, { title: t('title'), description: t('description', { appTitle }), actions: _jsx(Button, { variant: "outline", size: "icon", asChild: true, children: _jsxs(Link, { href: "/posts/feed.xml", target: "_blank", rel: "noreferrer", children: [_jsx(Rss, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: t('rssFeed') })] }) }), children: [paginatedPosts.map(post => (_jsxs(Timeline.Article, { publishedAt: post.publishedAt, imageSrc: post.image.url, title: post.title, href: `/posts/${post.slug}`, blurDataURL: post.image.blurDataURL, Link: Link, children: [_jsx("div", { className: "prose dark:prose-invert", children: _jsx("p", { children: post.description }) }), _jsx("div", { children: _jsx(Button, { variant: "outline", className: "rounded-full", asChild: true, children: _jsx(Link, { href: `/posts/${post.slug}`, children: t('readMore') }) }) })] }, post.slug))), _jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-6", children: [_jsx("div", { className: "row-span-2" }), _jsx("div", { className: "w-full md:order-2 md:col-span-4", children: _jsx(Pagination, { children: _jsx(PaginationContent, { children: Array.from({ length: maxPageIndex + 1 }).map((_, index) => {
                                    return (_jsx(PaginationLink, { href: `?p=${index}`, isActive: p === index, children: index + 1 }, index));
                                }) }) }) })] })] }));
};
//# sourceMappingURL=PostsTimeline.js.map