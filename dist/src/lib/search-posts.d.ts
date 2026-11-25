import type { PostOverview } from '@arki/content';
/**
 * The search request did not complete: the network failed, or the route answered with a non-ok status. The cause holds the error or the status.
 *
 * @fix Retry the search. If it keeps failing, check the `/posts/search` route.
 * @verify bun run test -- src/lib/search-posts.test.ts
 */
export declare const SearchUnavailable: import("@arki/failure").FailureDefinition<"content_react.search_unavailable", undefined>;
/**
 * The route answered, but the body is not JSON or not a list of post overviews. The cause holds the parse failure.
 *
 * @fix Make the `/posts/search` route return a JSON array of post overviews.
 * @verify bun run test -- src/lib/search-posts.test.ts
 */
export declare const SearchResponseMalformed: import("@arki/failure").FailureDefinition<"content_react.search_response_malformed", undefined>;
/**
 * Asks the app's `/posts/search?query=` route for posts. Returns the posts, or a typed failure:
 * `SearchUnavailable` (network or non-ok) or `SearchResponseMalformed` (not JSON, or the wrong shape).
 * An aborted request returns `SearchUnavailable` too; the caller that aborted ignores it.
 */
export type SearchFailure = ReturnType<typeof SearchUnavailable> | ReturnType<typeof SearchResponseMalformed>;
export declare function searchPosts(query: string, signal: AbortSignal, fetchPosts?: typeof fetch): Promise<PostOverview[] | SearchFailure>;
//# sourceMappingURL=search-posts.d.ts.map