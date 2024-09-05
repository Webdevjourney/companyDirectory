/** @type {import('./$types').PageServerLoad} */


import { getEmployees } from '$lib/employees';

export async function load() {

    const companyData = await getEmployees();
    return {
        companyData
    };
};