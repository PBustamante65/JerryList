<script>
	import { onMount } from 'svelte';

	let bg;

	onMount(() => {
		const windowWidth = window.innerWidth / 5;
		const windowHeight = window.innerHeight / 5;

		const handleMouseMove = (e) => {
			const mouseX = e.clientX / windowWidth;
			const mouseY = e.clientY / windowHeight;
			bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
		};

		bg.addEventListener('mousemove', handleMouseMove);

		return () => {
			bg.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<h1>Hover me</h1>
<div bind:this={bg} class="background-image"></div>

<style>
	@import url(https://fonts.googleapis.com/css?family=Lobster+Two:400,400italic);

	.background-image {
		width: 110%;
		height: 110%;
		left: 0;
		top: 0;
		position: absolute;
		background: url('https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?crop=entropy&dpr=2&fit=crop&fm=jpg&h=1500&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=2900.jpg')
			no-repeat left center / cover;
		overflow: hidden;
	}

	h1 {
		margin: 0;
		padding: 0;
		pointer-events: none;
		white-space: nowrap;
		font-family: 'Lobster Two', cursive;
		font-style: italic;
		z-index: 9;
		font-size: 100px;
		color: white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
	}
</style>
