export default ({ name, Name }) => `<template>
  <BaseModal
    :isVisible="store.isEditModal"
    :title="\`Edit \${store.moduleName}\`"
    :maxWidth="\`\${store.modalWidth}\`"
    @close="store.handleToggleModal"
  >
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- ${Name} Name -->
      <div>
        <BaseLabel for="name">Name</BaseLabel>
        <BaseInput
          id="name"
          v-model="formData.name"
          placeholder="Eg: Example Name"
        />
      </div>

      <!-- Actions -->
      <div class="flex justify-end gap-2 pt-4">
        <BaseButton
          class="bg-yellow-600 hover:bg-yellow-700"
          type="button"
          @click="store.handleToggleModal"
        >Cancel</BaseButton>
        <BaseButton type="submit">Save</BaseButton>
      </div>
    </form>
  </BaseModal>
</template>

<script setup>
import { ref, watch } from 'vue'
import { use${Name}Mutations } from '@/modules/${name}/queries/use${Name}Mutations'
import { use${Name}Store } from '@/modules/${name}/stores/${name}Store'

const store = use${Name}Store()

const formData = ref({
  name: '',
  id: '',
})

// Prefill form when selected item changes
watch(
  () => store.item,
  (newItem) => {
    if (newItem) {
      formData.value.name = newItem.name || ''
      formData.value.id = newItem.id || ''
    }
  },
  { immediate: true }
)

const { update } = use${Name}Mutations(store.moduleName, {
  onSuccess() {
    store.handleToggleModal() // ✅ close modal
  },
  onError: (error) => {
    console.log('Custom error handling', error)
  },
})

const handleSubmit = async () => {
  await update.mutateAsync(formData.value)
}
</script>
`;
