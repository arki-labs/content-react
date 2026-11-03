import type { AnchorHTMLAttributes, HTMLAttributes, ImgHTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import type { TweetProps } from 'react-tweet';
import type { CalloutProps } from '@arki/ui/callout';
import type { FileTreeProps } from './FileTree.js';
import { GitHubIssue, GitHubPullRequest } from './GitHub.js';
import MarkdownImage from './MarkdownImage.js';
import { Notification } from './notification.js';
import { StaticTweet } from './StaticTweet.js';
type HeadingProps = {
    id?: string;
    children?: ReactNode;
};
export declare const components: {
    a: ({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => import("react").JSX.Element;
    Tweet: (props: TweetProps) => import("react").JSX.Element;
    Image: ({ alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => import("react").JSX.Element;
    img: typeof MarkdownImage;
    Callout: (props: CalloutProps) => import("react").JSX.Element;
    Notification: typeof Notification;
    GitHubIssue: typeof GitHubIssue;
    GitHubPullRequest: typeof GitHubPullRequest;
    StaticTweet: typeof StaticTweet;
    FileTree: (props: FileTreeProps) => import("react").JSX.Element;
    table: (props: HTMLAttributes<HTMLTableElement>) => import("react").JSX.Element;
    thead: (props: HTMLAttributes<HTMLTableSectionElement>) => import("react").JSX.Element;
    tbody: (props: HTMLAttributes<HTMLTableSectionElement>) => import("react").JSX.Element;
    tfoot: (props: HTMLAttributes<HTMLTableSectionElement>) => import("react").JSX.Element;
    tr: (props: HTMLAttributes<HTMLTableRowElement>) => import("react").JSX.Element;
    th: (props: ThHTMLAttributes<HTMLTableCellElement>) => import("react").JSX.Element;
    td: (props: TdHTMLAttributes<HTMLTableCellElement>) => import("react").JSX.Element;
    pre: (props: HTMLAttributes<HTMLPreElement>) => import("react").JSX.Element;
    h1: {
        ({ id, children }: HeadingProps): import("react").JSX.Element;
        displayName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    };
    h2: {
        ({ id, children }: HeadingProps): import("react").JSX.Element;
        displayName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    };
    h3: {
        ({ id, children }: HeadingProps): import("react").JSX.Element;
        displayName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    };
    h4: {
        ({ id, children }: HeadingProps): import("react").JSX.Element;
        displayName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    };
    h5: {
        ({ id, children }: HeadingProps): import("react").JSX.Element;
        displayName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    };
    h6: {
        ({ id, children }: HeadingProps): import("react").JSX.Element;
        displayName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    };
};
export {};
//# sourceMappingURL=mdx-components.d.ts.map