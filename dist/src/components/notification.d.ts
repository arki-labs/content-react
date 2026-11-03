import type { ReactNode } from 'react';
export declare const types: readonly ['info', 'success', 'warning', 'error'];
type Type = (typeof types)[number];
type Props = {
    type?: Type;
    title?: string;
    children: ReactNode;
    prose?: boolean;
};
export declare const Notification: ({ title, children, type, prose }: Props) => import("react").JSX.Element;
export {};
//# sourceMappingURL=notification.d.ts.map