import { z } from 'zod';
import type { PostOverview } from '@arki/content';
/** The search request did not complete: the network failed, or the route answered with a non-ok status. The cause holds the error or the status. */
export declare const SearchUnavailable: import("@arki/failure").FailureDefinition<"content_react.search_unavailable", undefined>;
/** The route answered, but the body is not JSON or not a list of post overviews. The cause holds the parse failure. */
export declare const SearchResponseMalformed: import("@arki/failure").FailureDefinition<"content_react.search_response_malformed", undefined>;
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
/**
 * Asks the app's `/posts/search?query=` route for posts. Returns the posts, or a typed failure:
 * `SearchUnavailable` (network or non-ok) or `SearchResponseMalformed` (not JSON, or the wrong shape).
 * An aborted request returns `SearchUnavailable` too; the caller that aborted ignores it.
 */
export type SearchFailure = ReturnType<typeof SearchUnavailable> | ReturnType<typeof SearchResponseMalformed>;
export declare function searchPosts(query: string, signal: AbortSignal, fetchPosts?: typeof fetch): Promise<PostOverview[] | SearchFailure>;
//# sourceMappingURL=search-posts.d.ts.map