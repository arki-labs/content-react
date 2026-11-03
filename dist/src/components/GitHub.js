import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GithubLogo } from '@arki/icons/phosphor';
import DateTime from './DateTime.js';
import EmbeddedCard from './EmbeddedCard.js';
const EmbeddedEntity = ({ repository, entity, type }) => (_jsxs(EmbeddedCard, { href: entity.url, children: [_jsx(EmbeddedCard.Title, { icon: GithubLogo, children: _jsxs("p", { className: "text-lg font-bold", children: [_jsxs("span", { className: "text-base-500 dark:text-base-400", children: [repository.owner, "/", repository.name] }), ' ', _jsx("span", { dangerouslySetInnerHTML: { __html: entity.titleHTML } })] }) }), _jsxs("p", { className: "text-sm", children: [type, " #", entity.number, " opened on ", _jsx(DateTime, { value: entity.createdAt }), " by"] }), _jsx(EmbeddedCard.Author, { name: entity.author.login, avatar: { src: entity.author.avatarUrl, alt: `Profile of ${entity.author.login}` } })] }));
export const GitHubPullRequest = ({ pullRequest, repository }) => (_jsx(EmbeddedEntity, { type: "Pull Request", repository: repository, entity: pullRequest }));
export const GitHubIssue = ({ repository, issue }) => (_jsx(EmbeddedEntity, { type: "Issue", repository: repository, entity: issue }));
//# sourceMappingURL=GitHub.js.map