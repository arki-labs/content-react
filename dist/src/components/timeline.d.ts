import type { LinkComponent } from '@arki/intl/react';
type TimelineProps = {
    title: string;
    description: string;
    children?: React.ReactNode;
    actions?: React.ReactNode;
};
export declare function Timeline({ title, description, children, actions }: TimelineProps): import("react").JSX.Element;
export declare namespace Timeline {
    export { Article };
}
type ArticleProps = {
    href: string;
    publishedAt: Date;
    imageSrc: string;
    title: string;
    children?: React.ReactNode;
    blurDataURL?: string;
    Link: LinkComponent;
};
declare function Article({ publishedAt, imageSrc, title, children, href, Link }: ArticleProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=timeline.d.ts.map