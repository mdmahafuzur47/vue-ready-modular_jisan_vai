export default ({
  name,
  Name,
}) => `import { useApi } from '@/shared/composables/useApi'

const BASE_URL = '/${name}s'

const response = (api) => ({
  data: api.data.value,
  error: api.error.value,
})

export async function fetchAll() {
  const api = useApi()
  await api.sendRequest(BASE_URL)
  return response(api)
}

export async function submitData(payload) {
  const api = useApi()
  await api.sendRequest(BASE_URL, 'POST', payload)
  if (api.error.value) {
    throw api.error.value  // 🚨 so useMutation.onError triggers
  }
  return api.data.value
}

export async function updateData(payload) {
  const api = useApi()
  await api.sendRequest(\`\${BASE_URL}/\${payload.id}\`, 'POST', payload, {
    headers: { 'X-HTTP-Method-Override': 'PUT' }
  })
  if (api.error.value) throw api.error.value
  return api.data.value
}

export async function deleteItem(id) {
  const api = useApi()
  await api.sendRequest(\`\${BASE_URL}/\${id}\`, 'DELETE')
  if (api.error.value) throw api.error.value
  return api.data.value
}
`;
