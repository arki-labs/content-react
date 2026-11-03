import type { ReactNode } from 'react';
import type { Icon as LucideIcon } from '@arki/icons/phosphor';
type Props = {
    href: string;
    className?: string;
    children?: ReactNode;
};
declare function EmbeddedCard({ href, className, children }: Props): import("react").JSX.Element;
declare namespace EmbeddedCard {
    export { Title };
    export { Author };
}
type TitleProps = {
    children?: ReactNode;
    icon: LucideIcon;
};
declare const Title: {
    ({ children, icon }: TitleProps): import("react").JSX.Element;
    displayName: string;
};
type AuthorProps = {
    name: string;
    avatar?: {
        src: string;
        alt: string;
    };
};
declare const Author: {
    ({ name, avatar }: AuthorProps): import("react").JSX.Element;
    displayName: string;
};
export default EmbeddedCard;
//# sourceMappingURL=EmbeddedCard.d.ts.map