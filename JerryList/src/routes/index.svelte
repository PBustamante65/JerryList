<body>
	<nav>
		<div class="navTop">
			<div class="navItem">
				<img src="/favicon.png" alt="alt test" />
			</div>
			<div class="navItem">
				<div class="search">
					<input type="text" placeholder="Search..." class="searchInput" />
					<img src="/searchicon.png" width="20" height="20" alt="" class="searchIcon" />
				</div>
			</div>
			<div class="navItem">
				<span class="limitedOffer"> Limited Offer! </span>
			</div>
		</div>
		<div class="navBottom">
			<h3 class="menuItem">AIR FORCE</h3>
			<h3 class="menuItem">JORDAN</h3>
			<h3 class="menuItem">BLAZER</h3>
			<h3 class="menuItem">CRATER</h3>
			<h3 class="menuItem">HIPPIE</h3>
		</div>
	</nav>
</body>

<style>
	body {
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
		justify-content: space-between;
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

	.limitedOffer {
		font-size: 20px;
		border-bottom: 2px solid green;
		cursor: pointer;
	}

	.navBottom {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.menuItem {
		margin-right: 50px;
		cursor: pointer;
		color: lightgrey;
		font-weight: 400;
	}
</style>
