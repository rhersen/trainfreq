<script>
	import slices from '$lib/slices.js';

	export let data;
</script>

<h1>Tullinge, norrgående</h1>

{#each Object.entries(slices(data)) as [hour, announcements]}
	<div>
		<span class="hour">{hour.substring(11)}</span>
		<span
			>{announcements
				.map(({ AdvertisedTimeAtLocation }) => AdvertisedTimeAtLocation.substring(14, 16))
				.join(' ')}
		</span>
	</div>
{/each}

<style>
	div,
	h1 {
		font-family: sans-serif;
	}

	.hour {
		font-weight: bold;
	}
</style>
