export default ({ name, Name }) => `<template>
  <BaseModal
    :isVisible="store.isViewModal"
    :title="\`View \${store.moduleName} Details\`"
    :maxWidth="\`\${store.modalWidth}\`"
    @close="store.handleToggleModal"
  >
    <div class="space-y-2">
      <p class="text-lg">
        <strong>ID:</strong>
        {{ store.item.id }}
      </p>
      <p class="text-lg">
        <strong>Name:</strong>
        {{ store.item.name }}
      </p>
      <p class="text-lg">
        <strong>Created At:</strong>
        {{ store.item.created_at }}
      </p>
      <p class="text-lg">
        <strong>Updated At:</strong>
        {{ store.item.updated_at }}
      </p>
    </div>
  </BaseModal>
</template>

<script setup>
import { use${Name}Store } from '@/modules/${name}/stores/${name}Store'
const store = use${Name}Store()
</script>
`;
