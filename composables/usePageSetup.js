import useMetaData from './useMetaData';

/**
 * Unified page setup composable that handles different page types
 * @param {Object} options - Configuration options
 * @param {string} options.apiEndpoint - API endpoint to fetch data from ('pages', 'blogs', 'talks', etc.)
 * @param {boolean} options.useParams - Whether to use route.params.slug instead of route.name
 * @param {boolean} options.fetchList - Whether to fetch a list of items (for index pages)
 * @param {string} options.listEndpoint - API endpoint to fetch list from (for index pages)
 * @returns {Object} Page data and any additional data requested
 */
export default function usePageSetup(options = {}) {
  const {
    apiEndpoint = 'pages',
    useParams = false,
    fetchList = false,
    listEndpoint = null
  } = options;

  const route = useRoute();
  
  // Determine what slug/identifier to use
  const slugParam = useParams ? route.params.slug : route.name;
  
  // Fetch the main page data
  const { data } = useFetch(`/api/${apiEndpoint}?slug=${slugParam}`);
  
  // Set up page metadata
  useHead(() => {
    return data.value ? useMetaData(route, data.value) : {};
  });
  
  // Note: Page transitions are handled globally in plugins/transitions.js
  // No need to configure transitions per-page anymore
  
  // If needed, fetch a list of items (for index pages)
  let listData = null;
  if (fetchList && listEndpoint) {
    const { data: fetchedListData } = useFetch(`/api/${listEndpoint}`);
    listData = fetchedListData;
  }
  
  // Return all the data
  return {
    data,
    route,
    list: listData
  };
}