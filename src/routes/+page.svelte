<script>
	export let data;
</script>

<h1>trainfreq</h1>

<ol>
	{#each data.announcements as { AdvertisedTimeAtLocation, ToLocation }}
		<li>{AdvertisedTimeAtLocation.substring(5, 16)} {ToLocation[0].LocationName}</li>
	{/each}
</ol>
<p>{data.announcements}</p>
