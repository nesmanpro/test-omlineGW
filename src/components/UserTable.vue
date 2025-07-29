<script setup lang="ts">
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net-dt'
import { useUserStore } from '@/stores/UserStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

DataTable.use(DataTablesCore)

const columns = [
  { data: 'id', title: 'ID' },
  { data: 'name', title: 'Name' },
  { data: 'email', title: 'Email' },
];

const userStore = useUserStore()
const { users, error, isLoading } = storeToRefs(userStore)

onMounted(() => {
  userStore.fetchUsers()
})

</script>

<template>
  <h1 class="font-bold text-xl mb-4">User Table</h1>

  <div class="card">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <DataTable
      v-else-if="users.length"
      :data="users"
      :columns="columns"
    />
  </div>
</template>
