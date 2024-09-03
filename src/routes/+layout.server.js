/** @type {import('./$types').LayoutServerLoad} */
export async function load() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    let companyData = await res.json();


    // console.log('userDat isss', userData);



    return {
        companyData
    };
}