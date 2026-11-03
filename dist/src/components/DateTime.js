import { jsx as _jsx } from "react/jsx-runtime";
import { parseISO } from '@arki/date/core';
import { format } from '@arki/date/format';
import { isInstant } from '@arki/date/types';
const DateTime = ({ title, value, className }) => {
    // Front-matter text is outside input: parseISO returns a failure for bad text, so show the text as written.
    const parsed = parseISO(value);
    return (_jsx("time", { title: title, className: className, dateTime: value, children: isInstant(parsed) ? format(parsed, 'yyyy-MM-dd') : value }));
};
export default DateTime;
//# sourceMappingURL=DateTime.js.map