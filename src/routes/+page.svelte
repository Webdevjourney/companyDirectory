<script>
    export let data; 
    let { companyData } = data.companyData; 



    const companyCounts = {};
    
    companyData.forEach(employee =>  {
        const companyName = employee.company.name;
        if (companyCounts[companyName]) {
            companyCounts[companyName]++;
        } else {
            companyCounts[companyName] = 1;
        }
    });
</script>

<div class="border w-full py-5 px-5 fixed bg-white">
    <p class="text-3xl">Company Directory</p>
</div>

{#if companyData}
<div class="container pt-[100px] p-4 w-full flex flex-wrap flex-row gap-2">
    {#each companyData as companies}
    <a href="/employees/{companies?.company.name}" class="car-section flex justify-center items-center w-full md:w-1/3 lg:w-1/4 flex-col p-4 hover:bg-gray-100 cursor-pointer bg-white border border-gray-200 border-opacity-60 hover:border-none hover:shadow-lg rounded-lg">
        <div class="flex flex-1 justify-center p-8 text-center">
            <div class="flex flex-col items-center w-full">
                <div class="name">
                    <h1 class="text-xl bold pt-2">{companies?.company.name}</h1>
                </div>
                <div class="catch-phrase py-4">
                    <p class="text-gray-800">{companies?.company?.catchPhrase}</p>
                </div>
                <div class="employees">
                    <p class="">Employees: {companyCounts[companies?.company.name]}</p>
                </div>
            </div>
        </div>  
    </a>
    {/each}
</div>
{/if}