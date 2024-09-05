<script>
	import UserCards from '$lib/components/UserCards.svelte';
    import {  faArrowLeft  } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { page } from '$app/stores'

    /** @type {import('./$types').PageData} */
    export let data;

    const { origin } =  $page.url

    console.log('this is the last page', origin);
    
</script>

    


<div class="border w-full py-5 px-5">
    <a href="{origin}">
    <FontAwesomeIcon icon={faArrowLeft} class="h-6 w-6 pb-4 text-[#60b7ff]" />
    </a>
    <p class="text-slate-500">Company</p>
    <h1 class=" font-bold text-2xl">{data.title}</h1>
</div>

<div class="text-xl p-5">
    <h2>Employees:</h2>
</div>


<div class="p-8">
    <UserCards {data}/>
</div>