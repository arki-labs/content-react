'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@arki/ui/button';
import { useProcessor } from '../react/use-preprocessor.js';
export function Preview({ md }) {
    const { value: content, failure, retry } = useProcessor(md || '');
    return (_jsx("div", { className: "prose-headings:font-cal prose prose-sm h-[158px] w-full overflow-auto rounded-md border border-input px-3 py-2 dark:prose-invert", children: failure === undefined ? (content) : (_jsxs("div", { role: "alert", className: "flex items-center gap-2", children: [_jsx("span", { children: "The preview could not be rendered." }), _jsx(Button, { variant: "outline", size: "sm", onClick: retry, children: "Retry" })] })) }));
}
//# sourceMappingURL=preview.js.map