// place files you want to import through the `$lib` alias in this folder.


export async function getEmployees() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    let companyData = await res.json();

    return {
        companyData
    }

}