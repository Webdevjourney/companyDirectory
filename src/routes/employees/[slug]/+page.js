/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import { getEmployees } from '$lib/employees';





export async function load({ params }) {



    const { companyData } = await getEmployees();


    const company = companyData.find(company => company.company.name === params.slug);

    if (company) {
        return {
            title: company.company.name,
            name: company.name,
            phone: company.phone,
            website: company.website,
            email: company.email

        };
    }

    throw error(404, 'Not found');
}