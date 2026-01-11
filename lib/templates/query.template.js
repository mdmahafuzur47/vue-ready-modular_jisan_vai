export default ({
  name,
  Name,
}) => `import { useQuery } from '@tanstack/vue-query'
import { fetchAll } from '../services/${name}Service'

export function use${Name}sQuery(params = {}) {
  return useQuery({
    queryKey: ['${name}s', params],
    queryFn: () => fetchAll(params),
    staleTime: 5 * 60 * 1000,       // 5 minutes
    cacheTime: 1000 * 60 * 60,      // 1 hour
    keepPreviousData: true,
    meta: {
      persist: true,                // ✅ persisted
    },
  })
}
`;
