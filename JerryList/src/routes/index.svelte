<script>
	import Slider from './slider.svelte';
	import { currentIndex } from './slideractions';
</script>

<nav>
	<div class="navTop">
		<!-- <div class="navItem"> -->
		<!-- 	<img src="/favicon.png" alt="alt test" /> -->
		<!-- </div> -->
		<div class="navItem">
			<div class="search">
				<input type="text" placeholder="Search..." class="searchInput" />
				<img src="/searchicon.png" width="20" height="20" alt="" class="searchIcon" />
			</div>
		</div>
		<!-- <div class="navItem"> -->
		<!-- 	<span class="limitedOffer"> Limited Offer! </span> -->
		<!-- </div> -->
	</div>
	<div class="navBottom">
		{#each Array(5) as _, i}
			<h3 class="menuItem" onclick={() => ($currentIndex = i)}>Product {i + 1}</h3>
			<!-- <h3 class="menuItem">Product2</h3> -->
			<!-- <h3 class="menuItem">Product3</h3> -->
			<!-- <h3 class="menuItem">Product4</h3> -->
			<!-- <h3 class="menuItem">Product5</h3> -->
		{/each}
	</div>
</nav>

<Slider />

<style>
	:global(body) {
		font-family: sans-serif;
		padding: 0;
		margin: 0;
	}

	nav {
		background-color: black;
		color: white;
		padding: 20px 50px;
	}

	.navTop {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.search {
		display: flex;
		align-items: center;
		background-color: grey;
		padding: 10px 20px;
		border-radius: 10px;
	}

	.searchInput {
		border: none;
		background-color: transparent;
	}

	.searchInput::placeholder {
		color: lightgrey;
	}

	.navBottom {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 10px;
	}

	.menuItem {
		margin-right: 50px;
		cursor: pointer;
		color: lightgrey;
		font-weight: 400;
	}
</style>
