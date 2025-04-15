<nav>
	<div>
		<a href="/">
			<img src="Logo.png" width="148px" alt="Cog with EDU MECHS text in blue" />
		</a>
		<ul>
			<li><a href="#">About Us</a></li>
			<li><a href="#">Our Mission</a></li>
			<li><a href="/waitlist">Waitlist</a></li>
		</ul>
	</div>
	<button class="primary">Contact Us</button>
</nav>

<style>
	nav,
	div {
		display: flex;
		align-items: center;
		height: 100%;
	}

	nav {
		justify-content: space-between;
		height: 5rem;
		padding: 0 1.5rem;

		border-bottom: 1px solid var(--divider-color);
	}

	img {
		margin-right: 2rem;
	}

	ul {
		display: flex;
		align-items: center;
		gap: 2.5rem;
		list-style: none;
		padding: 0;
		margin: 0;

		padding-left: 1.5rem;

		height: 100%;

		border-left: 1px solid var(--divider-color);
	}

	li a {
		text-decoration: none;
		color: inherit;
	}

	li a:hover {
		text-decoration: underline;
	}
</style>
