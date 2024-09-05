<script>
  import { faEnvelope, faGlobe, faPhone  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import officeBuilding from '$lib/office-building.png'; 

  export let data;
  let phone = data.phone
  let extension=''

  function removeExt(phone) {
    const parts = phone.split(' x');
    extension = parts.length > 1 ? parts[1] : '';
    return parts[0];
  }

  phone = removeExt(phone);
</script>
<div class="container p-4 w-full flex flex-wrap flex-row">

<div class="section flex justify-center items-center w-full md:w-1/2 lg:w-1/4 flex-col border bg-white  border-gray-200 border-opacity-60 hover:border-none cursor-pointer hover:shadow-lg rounded-lg p-8 text-center">

  <div class="flex justify-center mb-6">
    <img src="{officeBuilding}" alt="Profile" class="h-24 w-24 rounded-full border-4 border-white shadow-lg">
  </div>

  <div class="mb-4">
    <h2 class="text-3xl font-bold text-[#1f2937]">{data.name}</h2>
    <p class="text-gray-400 mt-2">{data.title}</p>
  </div>

  <div class="flex flex-col justify-center items-center mt-4 gap-4">
    <a href="#" class=" p-2 px-4 rounded-full  flex items-center">
    <FontAwesomeIcon icon={faPhone} class="h-6 w-6 text-[#60b7ff]" />
    <div class="phone">
      <p>{data.phone.split(' x')[0]}</p>
      <p>Ext: {extension}</p>
    </div>
    </a>

    <a href="#" class=" p-2 px-4 rounded-full flex gap-3">
      <FontAwesomeIcon icon={faGlobe} class="h-6 w-6 text-[#60b7ff]" />
      {data.website}
    </a>
  </div>

  <div class="mt-6">
    <button class="  text-black font-semibold py-4 px-6 rounded-full shadow-sm flex items-center mx-auto">
      <FontAwesomeIcon icon={faEnvelope} class="mr-2 text-[#60b7ff]" />
     {data.email}
    </button>
  </div>
</div>

</div>

