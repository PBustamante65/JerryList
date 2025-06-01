<script>
	import { currentIndex } from './slideractions';
</script>

<div class="slider">
	<div class="sliderWrapper" style="transform: translateX({-100 * $currentIndex}vw)">
		<div class="sliderItem">
			<img src="/Prod1.png" alt="Components" class="sliderImg" />
			<div class="slideBg"></div>
			<h1 class="sliderTitle">PC <br /> Components</h1>
			<h2 class="sliderPrice">$Price</h2>
			<button class="buyButton">Buy now</button>
		</div>
		<div class="sliderItem">
			<img src="/Prod2.png" alt="Components" class="sliderImg" />
			<div class="slideBg"></div>
			<h1 class="sliderTitle">PC <br /> Components</h1>
			<h2 class="sliderPrice">$Price</h2>
			<button class="buyButton">Buy now</button>
		</div>
		<div class="sliderItem">
			<img src="/Prod3.png" alt="Components" class="sliderImg" />
			<div class="slideBg"></div>
			<h1 class="sliderTitle">PC <br /> Components</h1>
			<h2 class="sliderPrice">$Price</h2>
			<button class="buyButton">Buy now</button>
		</div>
		<div class="sliderItem">
			<img src="/Prod4.png" alt="Components" class="sliderImg" />
			<div class="slideBg"></div>
			<h1 class="sliderTitle">PC <br /> Components</h1>
			<h2 class="sliderPrice">$Price</h2>
			<button class="buyButton">Buy now</button>
		</div>
		<div class="sliderItem">
			<img src="/Prod5.png" alt="Components" class="sliderImg" />
			<div class="slideBg"></div>
			<h1 class="sliderTitle">PC <br /> Components</h1>
			<h2 class="sliderPrice">$Price</h2>
			<button class="buyButton">Buy now</button>
		</div>
	</div>
</div>

<style>
	.slider {
		background-color: #e5e5f7;
		opacity: 0.8;
		background-size: 20px 20px;
		background-image: repeating-linear-gradient(0deg, #444cf7, #444cf7 1px, #e5e5f7 1px, #e5e5f7);
		clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 45% 100%, 0% 50%);
	}

	.sliderWrapper {
		display: flex;
		width: 500vw;
		transition: all 1s ease-in-out;
	}

	.sliderItem {
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.slideBg {
		width: 750px;
		height: 750px;
		border-radius: 50%;
		position: absolute;
	}

	.sliderImg {
		z-index: 1;
	}

	.sliderTitle {
		position: absolute;
		top: 10%;
		right: 10%;
		font-size: 60px;
		font-weight: 900;
		text-align: center;
		z-index: 1;
	}

	.sliderPrice {
		position: absolute;
		top: 10%;
		left: 10%;
		font-size: 60px;
		font-weight: 300;
		text-align: center;
		border: 1px solid grey;
		z-index: 1;
	}

	.buyButton {
		position: absolute;
		top: 50%;
		right: 10%;
		font-size: 30px;
		font-weight: 900;
		border: 1px solid grey;
		background-color: black;
		color: white;
		z-index: 1;
		cursor: pointer;
	}

	.buyButton:hover {
		background-color: white;
		color: black;
	}

	.sliderItem:nth-child(1) .slideBg {
		background-color: green;
	}
	.sliderItem:nth-child(2) .slideBg {
		background-color: rebeccapurple;
	}
	.sliderItem:nth-child(3) .slideBg {
		background-color: teal;
	}
	.sliderItem:nth-child(4) .slideBg {
		background-color: cornflowerblue;
	}
	.sliderItem:nth-child(5) .slideBg {
		background-color: rgb(124, 115, 80);
	}

	.sliderItem:nth-child(1) .sliderPrice {
		color: green;
	}
	.sliderItem:nth-child(2) .sliderPrice {
		color: rebeccapurple;
	}
	.sliderItem:nth-child(3) .sliderPrice {
		color: teal;
	}
	.sliderItem:nth-child(4) .sliderPrice {
		color: cornflowerblue;
	}
	.sliderItem:nth-child(5) .sliderPrice {
		color: rgb(124, 115, 80);
	}
</style>
