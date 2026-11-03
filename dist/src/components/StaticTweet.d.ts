/**
 * A tweet as the card shows it. `@arki/content-build` writes these props into the compiled MDX from the embed
 * snapshot (`src/content/.embeds/`), so the fields match its `tweetProps`.
 */
export type Tweet = {
    id: string;
    text: string;
    createdAt: string;
    author: {
        name: string;
        username: string;
        profileImageUrl: string;
    };
    url: string;
};
type Props = {
    tweet: Tweet;
};
export declare const StaticTweet: ({ tweet }: Props) => import("react").JSX.Element;
export {};
//# sourceMappingURL=StaticTweet.d.ts.map