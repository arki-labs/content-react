import { z } from 'zod';
import { defineFailure, isFailure } from '@arki/failure';
import { parse } from '@arki/schema';
import { postOverviewSchema } from './post-overview-schema.js';
/**
 * The search request did not complete: the network failed, or the route answered with a non-ok status. The cause holds the error or the status.
 *
 * @fix Retry the search. If it keeps failing, check the `/posts/search` route.
 * @verify bun run test -- src/lib/search-posts.test.ts
 */
export const SearchUnavailable = /* @__PURE__ */ defineFailure('content_react.search_unavailable', {
    status: 502,
    message: 'The post search request failed.',
    remediation: 'Retry the search. If it keeps failing, check the `/posts/search` route.',
});
/**
 * The route answered, but the body is not JSON or not a list of post overviews. The cause holds the parse failure.
 *
 * @fix Make the `/posts/search` route return a JSON array of post overviews.
 * @verify bun run test -- src/lib/search-posts.test.ts
 */
export const SearchResponseMalformed = /* @__PURE__ */ defineFailure('content_react.search_response_malformed', {
    status: 502,
    message: 'The post search answered with a body that is not a list of posts.',
    remediation: 'Make the `/posts/search` route return a JSON array of post overviews.',
});
const postOverviewsSchema = z.array(postOverviewSchema);
export async function searchPosts(query, signal, fetchPosts = fetch) {
    let response;
    try {
        response = await fetchPosts(`/posts/search?query=${encodeURIComponent(query)}`, { signal });
    }
    catch (error) {
        return SearchUnavailable({ cause: error });
    }
    if (!response.ok)
        return SearchUnavailable({ cause: response.status });
    let body;
    try {
        body = await response.json();
    }
    catch (error) {
        return SearchResponseMalformed({ cause: error });
    }
    const posts = parse(postOverviewsSchema, body);
    if (isFailure(posts))
        return SearchResponseMalformed({ cause: posts });
    return posts;
}
//# sourceMappingURL=search-posts.js.map