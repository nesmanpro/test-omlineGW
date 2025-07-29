
import type { User } from '@/types/userType'
import { defineStore } from 'pinia'

const fields = [
    'id', 'name', 'email'
];

const API_USER = 'https://test.resabooking.fr/api/users'

function reduceUser(user: User | any) {
    return Object.fromEntries(fields.map(key => [key, user[key]]));
}

export const useUserStore = defineStore('users', {
    state: () => ({
        users: [] as User[],
        isLoading: false,
        error: null as string | null
    }),
    actions: {
        async fetchUsers() {
            this.isLoading = true
            try {
                const res = await fetch(API_USER)
                if (!res.ok) throw new Error(`No se pudo cargar la lista de usuarios: ${res.status}`)
                const data = await res.json()
                this.users = data.users.map(reduceUser);
            } catch (err) {
                this.error = 'Error al cargar usuarios'
                console.error(err)
            } finally {
                this.isLoading = false
            }
        },

        async createUser(user: { id: number, name: string; email: string, password: string }) {
            try {
                const res = await fetch(API_USER, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user)
                })
                if (!res.ok) throw new Error('Error al crear usuario')
                await this.fetchUsers()
                return true
            } catch (err) {
                console.error(err)
                return false
            }
        },

        async deleteUserById(id: number) {
            try {
                const res = await fetch(`${API_USER}/${id}`, {
                    method: 'DELETE'
                })
                if (!res.ok) throw new Error('Error al eliminar usuario')
                await this.fetchUsers()
                return true
            } catch (err) {
                console.error(err)
                return false
            }
        }
    }
})
