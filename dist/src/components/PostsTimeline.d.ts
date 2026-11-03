import type { LinkComponent } from '@arki/intl/react';
/** What the posts timeline reads from each post. A content-build `Post` has these fields. */
export type TimelinePost = {
    slug: string;
    title: string;
    description: string;
    publishedAt: Date;
    image: {
        url: string;
        blurDataURL?: string | undefined;
    };
};
export declare const PostsTimeline: ({ appTitle, posts, searchParams, Link, }: {
    appTitle: string;
    posts: readonly TimelinePost[];
    searchParams: Record<'p', string | string[] | undefined>;
    Link: LinkComponent;
}) => import("react").JSX.Element;
//# sourceMappingURL=PostsTimeline.d.ts.map