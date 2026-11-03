/** What an article reads from a post. A content-build `Post` has these fields. */
export type ArticlePost = {
    title: string;
    image: {
        url: string;
    };
    author: {
        name: string;
        url?: string | undefined;
        avatar?: string | undefined;
    };
    publishedAt: Date;
    readingTime: string;
    tags: readonly string[];
    content: {
        mdx: string;
    };
};
export declare function Article({ post }: {
    post: ArticlePost;
}): import("react").JSX.Element;
//# sourceMappingURL=article.d.ts.map