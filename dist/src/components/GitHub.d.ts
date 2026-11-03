/**
 * An issue or pull request as the card shows it. `@arki/content-build` writes these props into the compiled MDX
 * from the embed snapshot (`src/content/.embeds/`), so the fields match its snapshot schema.
 */
export type GitHubItem = {
    number: number;
    url: string;
    titleHTML: string;
    createdAt: string;
    author: {
        login: string;
        avatarUrl: string;
        url: string;
    };
};
export type Repository = {
    owner: string;
    name: string;
};
type PullRequestProps = {
    repository: Repository;
    pullRequest: GitHubItem;
};
export declare const GitHubPullRequest: ({ pullRequest, repository }: PullRequestProps) => import("react").JSX.Element;
type IssueProps = {
    repository: Repository;
    issue: GitHubItem;
};
export declare const GitHubIssue: ({ repository, issue }: IssueProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=GitHub.d.ts.map