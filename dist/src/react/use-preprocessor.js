import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import rehypeReact from 'rehype-react';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { useAsyncMemo } from '@arki/ui/hooks/async-memo';
/** Renders markdown text to React. Returns the content, `isPending`, `failure` (what the pipeline rejected with) and `retry()`. */
export function useProcessor(text) {
    return useAsyncMemo(async () => {
        const file = await unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeReact, {
            Fragment,
            jsx,
            jsxs,
            components: {
                a: ({ children, ...props }) => {
                    return (_jsx("a", { target: "_blank", rel: "noreferrer", ...props, children: children }));
                },
            },
        })
            .process(text);
        return file.result;
    }, [text]);
}
//# sourceMappingURL=use-preprocessor.js.map