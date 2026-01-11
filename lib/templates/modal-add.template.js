export default ({ name, Name }) => `<template>
  <BaseModal
    :isVisible="store.isModal"
    :title="\`Add \${store.moduleName}\`"
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
          :required="true"
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
import { ref } from 'vue'
import { use${Name}Mutations } from '@/modules/${name}/queries/use${Name}Mutations'
import app from '@/shared/config/appConfig'
import { use${Name}Store } from '@/modules/${name}/stores/${name}Store'

const store = use${Name}Store()

const formData = ref({
  name: app.moduleLocal ? 'Test Name' : '',
})

const { submit } = use${Name}Mutations(store.moduleName, {
  onSuccess() {
    store.handleToggleModal()          // ✅ close modal
    store.handleReset(formData.value)  // ✅ reset form
  },
  onError: (error) => {
    console.log('Custom error handling', error)
  },
})

const handleSubmit = async () => {
  await submit.mutateAsync(formData.value)
}
</script>
`;
