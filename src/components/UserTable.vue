<script setup lang="ts">
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net-dt'
import { useUserStore } from '@/stores/UserStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import {motion}  from 'motion-v';

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
  

  <div class="card">
    <div 
    v-if="isLoading">Loading...</div>
    <div 
    v-else-if="error">{{ error }}</div>
    <motion.div
    v-else-if="users.length"
    :initial="{ opacity: 0, scale: .9, y:-5 }"
    :animate="{ 
      opacity: 1, 
      scale: 1,
      y:0
    }"
    :transition="{ duration: 0.5, ease: 'backInOut' }"
    >
    <h1 class="font-bold text-emerald-700 text-3xl mb-4">User Table</h1>
      <DataTable
        :data="users"
        :columns="columns"
      />
    </motion.div>
  </div>
</template>
