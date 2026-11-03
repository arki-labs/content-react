import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckCircle, Lightbulb, Warning, XCircle } from '@arki/icons/phosphor';
import { cn } from '@arki/ui/cn';
export const types = ['info', 'success', 'warning', 'error'];
const icons = {
    info: Lightbulb,
    success: CheckCircle,
    warning: Warning,
    error: XCircle,
};
export const Notification = ({ title, children, type = 'warning', prose = false }) => {
    const Icon = icons[type];
    return (_jsxs("div", { className: cn('rounded-md border-b border-l-8 border-r border-t p-5 shadow-md [&_a]:underline hover:[&_a]:decoration-2', {
            'border-info-600 dark:border-info-500 hover:[&_a]:decoration-info-500': type === 'info',
            'border-warn-600 dark:border-warn-500 hover:[&_a]:decoration-warn-500': type === 'warning',
            'border-error-600 dark:border-error-500 hover:[&_a]:decoration-error-500': type === 'error',
            'border-success-600 dark:border-success-500 hover:[&_a]:decoration-success-500': type === 'success',
            'not-prose': !prose,
        }), children: [_jsxs("div", { className: cn('mb-2 flex items-center justify-between', {
                    'text-info-700 dark:text-info-500': type === 'info',
                    'text-warn-700 dark:text-warn-500': type === 'warning',
                    'text-error-600 dark:text-error-500': type === 'error',
                    'text-success-700 dark:text-success-500': type === 'success',
                }), children: [_jsx("div", { className: "font-semibold first-letter:uppercase", children: title || type }), _jsx(Icon, {})] }), children] }));
};
//# sourceMappingURL=notification.js.map