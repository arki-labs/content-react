import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { XIcon } from '@arki/icons/phosphor';
import DateTime from './DateTime.js';
import EmbeddedCard from './EmbeddedCard.js';
export const StaticTweet = ({ tweet }) => (_jsxs(EmbeddedCard, { href: tweet.url, className: "gap-5", children: [_jsx(EmbeddedCard.Title, { icon: XIcon, children: _jsxs("p", { className: "text-base-500 dark:text-base-400", children: ["Tweet from ", _jsx(DateTime, { value: tweet.createdAt })] }) }), _jsx("blockquote", { dangerouslySetInnerHTML: { __html: tweet.text } }), _jsx(EmbeddedCard.Author, { name: tweet.author.name, avatar: { src: tweet.author.profileImageUrl, alt: `Profile of ${tweet.author.name}` } })] }));
//# sourceMappingURL=StaticTweet.js.map