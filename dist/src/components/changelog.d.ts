import type { LinkComponent } from '@arki/intl/react';
/** What the changelog components read from each entry. A content-build `Changelog` has these fields. */
export type ChangelogEntry = {
    slug: string;
    title: string;
    publishedAt: Date;
    image: {
        url: string;
        blurDataURL?: string | undefined;
    };
    content: {
        mdx: string;
    };
};
export declare const ITEMS_PER_PAGE = 10;
export declare const searchParamsParsers: {
    p: Omit<import("nuqs/server").SingleParserBuilder<number>, "parseServerSide"> & {
        readonly defaultValue: number;
        parseServerSide(value: string | string[] | undefined): number;
    };
};
export declare const searchParamsCache: {
    parse: {
        (searchParams: import("nuqs/server").SearchParams, loaderOptions?: {
            strict?: boolean;
        }): {
            p: number;
        };
        (searchParams: Promise<any>, loaderOptions?: {
            strict?: boolean;
        }): Promise<{
            p: number;
        }>;
    };
    all: () => {
        p: number;
    };
    get: <Key extends "p">(key: Key) => import("nuqs/server").inferParserType<{
        p: Omit<import("nuqs/server").SingleParserBuilder<number>, "parseServerSide"> & {
            readonly defaultValue: number;
            parseServerSide(value: string | string[] | undefined): number;
        };
    }[Key]>;
};
export declare function ChangelogTimeline({ posts, Link, searchParams, appTitle, }: {
    posts: readonly ChangelogEntry[];
    Link: LinkComponent;
    searchParams: Record<string, string | string[] | undefined>;
    appTitle: string;
}): import("react").JSX.Element;
type ChangelogLink = Pick<ChangelogEntry, 'slug' | 'title'>;
export declare function ChangelogPagination({ prev, next, }: {
    prev?: ChangelogLink | undefined;
    next?: ChangelogLink | undefined;
}): import("react").JSX.Element;
export declare function ChangelogCard({ post }: {
    post: Omit<ChangelogEntry, 'slug'>;
}): import("react").JSX.Element;
export {};
//# sourceMappingURL=changelog.d.ts.map