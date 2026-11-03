import type { PostOverview } from '@arki/content';
import type { SearchFailure } from './search-posts.js';
/**
 * Searches posts through the app's `/posts/search?query=` route as the reader types (debounced 300ms).
 * A newer query aborts the request still in flight.
 *
 * States: `isLoading` while a request runs, `failure` when the last search failed (`SearchUnavailable`
 * for a network error or non-ok response, `SearchResponseMalformed` for a body that is not a list of
 * posts; `result` is then empty), and `retry()` to run the same query again.
 */
declare const useSearch: () => {
    query: string;
    result: PostOverview[];
    search: import("react").Dispatch<import("react").SetStateAction<string>>;
    isLoading: boolean;
    failure: SearchFailure | undefined;
    retry: () => void;
};
export default useSearch;
//# sourceMappingURL=useSearch.d.ts.map