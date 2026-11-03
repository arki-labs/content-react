import { jsx as _jsx } from "react/jsx-runtime";
const MarkdownImage = ({ src, alt, width, height }) => {
    // Markdown is authored or user text, so it must not crash the page. Without a source there is
    // nothing to show. Missing alt text is a decorative image, which is valid: `alt=""`.
    if (!src)
        return null;
    return (_jsx("img", { src: src, alt: alt ?? '', width: width === undefined ? undefined : Number(width), height: height === undefined ? undefined : Number(height), className: "rounded-md shadow-md", loading: "lazy", decoding: "async" }));
};
export default MarkdownImage;
//# sourceMappingURL=MarkdownImage.js.map