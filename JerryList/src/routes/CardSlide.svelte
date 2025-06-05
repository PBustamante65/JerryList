<script>
	import { onMount } from 'svelte';
	import { currentIndex } from './slideractions';

	let mouse = { X: 0, Y: 0, CX: 0, CY: 0 };
	let block = { X: 0, Y: 0, CX: 0, CY: 0 };

	// let imags = [
	// 	'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	// 	'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
	// 	'https://images.pexels.com/photos/210546/pexels-photo-210546.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
	// 	'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
	// ];

	let imags = ['/Prod1.png', '/Prod2.png', '/Prod3.png', '/Prod4.png', '/Prod5.png'];
	let back = ['/wallback.jpg'];
	let ProdTitles = ['Prod 1', 'Prod 2', 'Prod 3', 'Prod 4', 'Prod 5'];
	let BackColor = ['green', 'red', 'blue', 'grey', 'teal'];
	let ProdPrice = ['$355', '$354', '$353', '$352', '$351'];

	let sliderEl;

	function handleMouseMove(event) {
		const rect = sliderEl.getBoundingClientRect();
		mouse.X = event.clientX - rect.left - sliderEl.offsetWidth / 2;
		mouse.Y = event.clientY - rect.top - sliderEl.offsetHeight / 2;
	}

	function handleMouseLeave() {
		mouse.X = mouse.CX;
		mouse.Y = mouse.CY;
	}

	function selectSlide(i) {
		currentIndex.set(i);
	}

	let interval;

	onMount(() => {
		interval = setInterval(() => {
			block.CY += (mouse.Y - block.CY) / 12;
			block.CX += (mouse.X - block.CX) / 12;
		}, 20);

		return () => clearInterval(interval);
	});
</script>

<div class="slider">
	{#each imags as img, i}
		<div
			class="item {i === $currentIndex ? 'active' : ''}"
			id={`slide-${i}`}
			style="background-image: url({back});"
		>
			<div
				bind:this={sliderEl}
				class="block"
				on:mousemove={handleMouseMove}
				on:mouseleave={handleMouseLeave}
				role="presentation"
				style={`background-image: url(${img}); transform: scale(1.03) translate(${block.CX * 0.05}px, ${block.CY * 0.05}px) rotateX(${block.CY * 0.05}deg) rotateY(${block.CX * 0.05}deg);`}
			>
				<h1 class="ProdTitle">{ProdTitles[i]}</h1>
				<h2 class="ProdPrice">{ProdPrice[i]}</h2>
				<div
					class="circleLight"
					style={`background: radial-gradient(circle at ${mouse.X}px ${mouse.Y}px, rgba(255,255,255,0.4), transparent)`}
				></div>
			</div>
		</div>
	{/each}

	<div class="navigations">
		<ul class="dots" role="tablist">
			{#each imags as _, i}
				<li role="presentation">
					<button
						role="tab"
						aria-label={`Go to slide ${i + 1}`}
						aria-selected={i === $currentIndex}
						class:active={i === $currentIndex}
						on:click={() => selectSlide(i)}
					></button>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	.slider {
		width: auto;
		height: 85vh;
		position: relative;

		.item {
			position: absolute;
			top: 0;
			background-size: cover;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 0;
			visibility: hidden;
			transition: 0.7s;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 50px 20px;
			box-sizing: border-box;

			&.active {
				opacity: 1;
				visibility: visible;
			}
		}

		.block {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			width: 100%;
			height: 100%;
			max-width: 450px;
			max-height: 450px;
			padding: 20px;
			border-radius: 10px;
			transform: scale(1.03);
			box-sizing: border-box;
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			position: relative;
			transition:
				box-shadow 0.7s,
				transform 0.2s ease-out;
			transform-style: preserve-3d;
			will-change: transform;

			.ProdTitle {
				position: absolute;
				font-weight: 600;
				top: 0;
				left: 180px;
			}

			.ProdPrice {
				position: absolute;
				bottom: 0;
			}

			&:hover {
				box-shadow: 0px 0px 70px #111;
			}

			.circleLight {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-radius: 10px;
				pointer-events: none;
				transition: opacity 0.5s;
			}
		}

		.navigations {
			position: absolute;
			bottom: 0;
			width: 100%;

			.dots {
				height: 20px;
				padding: 10px 0;
				text-align: center;
				list-style: none;
				margin: 0;

				li {
					display: inline-block;
					vertical-align: middle;
					margin: 0 5px;

					button {
						width: 10px;
						height: 10px;
						cursor: pointer;
						transition: all 0.3s;
						background: grey;
						border: none;
						border-radius: 50%;
						padding: 0;
						display: block;
						text-indent: -9999px;
						overflow: hidden;

						&:hover {
							filter: blur(2px);
						}

						&.active {
							width: 15px;
							height: 15px;

							&:hover {
								filter: blur(0);
							}
						}
					}
				}
			}
		}
	}
</style>
