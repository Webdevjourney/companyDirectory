/** @type {import('./$types').LayoutServerLoad} */


import { getEmployees } from '$lib/employees'

export async function load() {

    const companyData = await getEmployees();

    return {
        companyData

    };
}