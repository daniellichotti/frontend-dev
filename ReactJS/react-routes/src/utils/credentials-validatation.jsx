export function CredentialsValidation(email, password) {
    if (!email.includes("@")) {
        return 'Formato de e-mail inválido'
    }

    if (password.length < 6) {
        return 'A senha inválida'
    }
};
