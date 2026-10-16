<script>
	import favicon from '#lib/assets/favicon.svg';
	import '#lib/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Common App Personal Statement Grader | VSPICE & Admissions Rubric</title>
	<meta
		name="description"
		content="Grade and elevate your American college admissions Common App personal statement with authenticity evaluation, effectiveness of delivery, and the 6-pillar VSPICE criteria."
	/>
</svelte:head>

<div class="layout-container">
	{@render children()}
</div>

<style>
	.layout-container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
