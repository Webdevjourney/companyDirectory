<script>
    export let data; 
    const { companyData } = data; 

    console.log('company Data', companyData);
    
    let company = companyData[0];
    
</script>

<h1 class="text-4xl">Company Directory</h1>


{#if companyData }
{#each companyData as company}
    <a href= "/employees/{company?.company.name}">
<div class="flex flex-row w-full items-center flex-wrap">


<div class="flex flex-col items-center justify-stretch border">
    <div class="name">
        <h1 class="text-xl bold pt-2">{company?.company.name}</h1>
    </div>

    <div class="catch-phrase">
<p>{company?.company?.catchPhrase}</p>
    </div>
    <div class="employees">
<p>This is number of employees</p>
    </div>
</div>
</div>
</a>
{/each}
{/if}
