
import type { User } from '@/types/userType'
import { defineStore } from 'pinia'
import { useBannerStore } from './BannerStore';
import { validateCreateUserFields, validateDeleteUserFields, validateUpdateUserFields } from '@/utils/fieldValidation';

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
            const { valid, message } = validateCreateUserFields(user);

            if (!valid) {
                banner.success = false;
                banner.showBanner(message);
                return false;
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
                banner.showBanner('Hubo un problema al crear el usuario.')
                return false
            } finally {
                banner.success = true;
                banner.showBanner('Usuario creado correctamente.')
            }
        },

        async deleteUserById(id: number) {
            const banner = useBannerStore();
            const { valid, message } = validateDeleteUserFields(id);

            if (!valid) {
                banner.success = false;
                banner.showBanner(message);
                return false;
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
                banner.showBanner('Hubo un error al eliminar el usuario.')
                return false
            } finally {
                banner.success = true;
                banner.showBanner('Usuario eliminado correctamente!🎉');
            }
        },

        async updateUser(user: User) {
            const banner = useBannerStore();
            const { id } = user;

            const { valid, message } = validateUpdateUserFields(user);

            if (!valid) {
                banner.success = false;
                banner.showBanner(message);
                return false;
            }

            try {
                const body: Record<string, string> = {};
                if (user.name && user.name.trim() !== '') {
                    body.name = user.name.trim();
                }
                if (user.email && user.email.trim() !== '') {
                    body.email = user.email.trim();
                }

                const res = await fetch(`${API_USER}/${id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });

                if (!res.ok) throw new Error('Error al actualizar el usuario.');
                await this.fetchUsers();
            } catch (err) {
                console.error(err);
                banner.success = false;
                banner.showBanner('Hubo un error al actualizar el usuario.');
                return false;
            } finally {
                banner.success = true;
                banner.showBanner('Usuario actualizado correctamente! 🎉');
            }
        }
    }
})
