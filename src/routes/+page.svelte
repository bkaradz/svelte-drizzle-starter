<script lang="ts">
	 export let data
</script>

<div class="flex flex-col justify-center items-center h-screen bg-gray-100">
  
	<form class="bg-gray-300 p-5 rounded-lg" method="POST" action="?/create">
    <div class="mt-6">

      <label class="">
        Username
        <input
          class="mt-1 peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder-transparent"
          name="username"
          type="text"
        />
      </label>
      <label class="">
        Password
        <input
          class="mt-1 peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder-transparent"
          name="password"
          type="text"
        />
      </label>
    </div>
   
		<button
			class="bg-info mb-3 mt-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
			
			type="submit">Submit</button
		>
	</form>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
