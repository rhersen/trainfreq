<script>
	import slices from '$lib/slices.js';

	export let data;
</script>

<h1>Tullinge, norrgående</h1>

<ul>
	{#each Object.entries(slices(data)) as [hour, announcements]}
		<li>
			{hour}
			{announcements
				.map(({ ToLocation }) => ToLocation.map(({ LocationName }) => LocationName))
				.join(' ')}
		</li>
	{/each}
</ul>
