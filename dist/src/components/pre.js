'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Check, Copy, Warning } from '@arki/icons/phosphor';
import { Button } from '@arki/ui/button';
import { cn } from '@arki/ui/cn';
import { copyText } from '@arki/ui/copy-text';
export default function Pre({ children, className, ...props }) {
    const [copyState, setCopyState] = React.useState('idle');
    const ref = React.useRef(null);
    React.useEffect(() => {
        let timer;
        if (copyState !== 'idle') {
            timer = setTimeout(() => {
                setCopyState('idle');
            }, 2000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [copyState]);
    const onClick = () => {
        const content = ref.current?.textContent;
        if (!content)
            return;
        // The check mark shows only once the text is on the clipboard; a refused write shows the failed icon for 2 seconds.
        void copyText(content).then(setCopyState);
    };
    return (_jsxs("div", { className: "relative hidden overflow-hidden dark:[&:has([data-theme='dark'])]:block [&:has([data-theme='light'])]:block dark:[&:has([data-theme='light'])]:hidden", children: [_jsx(Button, { variant: "outline", size: "icon", className: "absolute right-2 top-2", onClick: onClick, "aria-label": copyState === 'failed' ? 'Copy failed' : copyState === 'copied' ? 'Copied' : 'Copy code', children: copyState === 'copied' ? (_jsx(Check, { className: "h-5 w-5" })) : copyState === 'failed' ? (_jsx(Warning, { className: "h-5 w-5" })) : (_jsx(Copy, { className: "h-5 w-5" })) }), _jsx("pre", { ref: ref, className: cn('[&_code]:grid', className), ...props, children: children })] }));
}
//# sourceMappingURL=pre.js.map