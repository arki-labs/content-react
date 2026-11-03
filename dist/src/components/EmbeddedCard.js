import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AvatarImage } from '@arki/ui/avatar';
import { cn } from '@arki/ui/cn';
const EmbeddedCard = ({ href, className, children }) => (_jsx("div", { className: "not-prose", children: _jsx("a", { href: href, target: "_blank", rel: "noreferrer", className: cn('group mb-2 block space-y-2 rounded-md p-5 shadow-md', 'border-b border-l-8 border-r border-t', 'border-base-300 dark:border-base-600', 'hover:border-primary-600 dark:hover:border-primary-400', className), children: children }) }));
const EmbeddedIcon = ({ icon: Icon, className }) => (_jsx(Icon, { className: cn('shrink-0 stroke-2 group-hover:stroke-[3px]', 'text-base-400 dark:text-base-500', 'group-hover:text-primary-600 dark:group-hover:text-primary-400', className) }));
const Title = ({ children, icon }) => (_jsxs("div", { className: "flex justify-between", children: [children, _jsx(EmbeddedIcon, { icon: icon })] }));
Title.displayName = 'EmbeddedCard.Title';
EmbeddedCard.Title = Title;
const Author = ({ name, avatar }) => (_jsxs("div", { className: "flex items-center gap-2", children: [avatar ? _jsx(AvatarImage, { src: avatar.src, alt: avatar.alt, className: "h-8 w-8" }) : null, _jsx("p", { children: name })] }));
Author.displayName = 'EmbeddedCard.Author';
EmbeddedCard.Author = Author;
export default EmbeddedCard;
//# sourceMappingURL=EmbeddedCard.js.map