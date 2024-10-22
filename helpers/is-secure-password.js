export const isSecurePassword = (value) => {
    
    const regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    if (!regex.test(value)) {
        throw new Error('password should contain atleast one number and one special character');
    }

    return true;
}