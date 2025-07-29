import { useUserStore } from "@/stores/UserStore";
import type { User } from "@/types/userType";


export function validateCreateUserFields(user: User): { valid: boolean; message: string } {
    if (!user.name || !user.email || !user.password) {
        return { valid: false, message: 'Todos los campos son obligatorios.' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
        return { valid: false, message: 'Debe ingresar un email válido.' };
    }

    if (user.password2 !== undefined && user.password !== user.password2) {
        return { valid: false, message: 'Las contraseñas no coinciden.' };
    }

    return { valid: true, message: '' };
}


export function validateDeleteUserFields(userId: number): { valid: boolean; message: string } {

    const userStore = useUserStore();
    const userExist = userStore.users.filter(user => user.id === userId);

    if (isNaN(userId)) {
        return { valid: false, message: 'El user ID debe ser numérico.' };
    }

    if (userExist.length < 1) {
        return { valid: false, message: 'No se encontró nungún usuario con ese id.' };
    }

    return { valid: true, message: '' };
}
