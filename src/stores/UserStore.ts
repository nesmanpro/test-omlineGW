
import type { User } from '@/types/userType'
import { defineStore } from 'pinia'
import { useBannerStore } from './BannerStore';

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
                this.error = 'Error al cargar usuarios';
                console.error(err)
            } finally {
                this.isLoading = false;
            }
        },

        async createUser(user: { id: number, name: string; email: string, password: string, password2?: string }) {

            const banner = useBannerStore();
            if (!user.name || !user.email || !user.password) {
                banner.success = false;
                banner.showBanner('Todos los campos son obligatorios.')
                return false
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(user.email)) {
                banner.success = false;
                banner.showBanner('Debe ingresar un email válido.');
                return false
            }

            if (user.password2 !== user.password) {
                banner.success = false;
                banner.showBanner('Las contraseñas no coinciden.')
                return false
            }

            try {
                const res = await fetch(API_USER, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user)
                })
                if (!res.ok) {
                    banner.showBanner('Error al crear usuario.');
                    throw new Error('Error al crear usuario.');
                }

                await this.fetchUsers()
            } catch (err) {
                console.error(err)
                return false
            } finally {
                banner.success = true;
                banner.showBanner('Usuario creado correctamente.')
            }
        },

        async deleteUserById(id: number) {
            const banner = useBannerStore();
            const userExist = this.users.filter(user => user.id === id);

            if (isNaN(id)) {
                banner.success = false;
                banner.showBanner('El user ID debe ser numérico.');
                return false
            }

            if (userExist.length < 1) {
                banner.success = false;
                banner.showBanner('No se encontró nungún usuario con ese id.');
                return false
            }

            try {
                const res = await fetch(`${API_USER}/${id}`, {
                    method: 'DELETE'
                })
                if (!res.ok) throw new Error('Error al eliminar usuario.')
                await this.fetchUsers()
                return true
            } catch (err) {
                console.error(err)
                return false
            } finally {
                banner.success = true;
                banner.showBanner('Usuario eliminado correctamente!🎉');
            }
        }
    }
})
