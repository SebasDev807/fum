export const isUnimayor = (value) => {

    const regex = /^[\w-\.]+@unimayor\.edu\.co$/

    if (!regex.test(value)) {
        throw new Error('You must be a Unimayor Student');

    }

    return true;
}