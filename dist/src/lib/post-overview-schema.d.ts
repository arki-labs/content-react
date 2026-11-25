/**
 * The Zod schema of one post overview on the search wire. It lives apart from `search-posts.ts` so the
 * package's public `.d.ts` names no Zod type (`TYPES_E001`); `search-posts.test.ts` locks it to `PostOverview`.
 */
import { z } from 'zod';
/** What the route sends for one post. Dates travel as ISO text and come back as `Date`. */
export declare const postOverviewSchema: z.ZodObject<{
    url: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    publishedAt: z.ZodCoercedDate<unknown>;
    readingTime: z.ZodString;
    image: z.ZodObject<{
        url: z.ZodString;
        blurDataURL: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=post-overview-schema.d.ts.map