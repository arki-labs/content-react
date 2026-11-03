import { jsx as _jsx } from "react/jsx-runtime";
import { MDXContent } from '@content-collections/mdx/react';
import { ContentSection } from './ContentSection.js';
import { components } from './mdx-components.js';
export function Mdx({ code, className }) {
    return (_jsx(ContentSection, { className: className, children: _jsx(MDXContent, { code: code, components: components }) }));
}
//# sourceMappingURL=mdx.js.map