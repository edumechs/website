<script>
	import { base } from '$app/paths';

	let open = false;
</script>

<div class="hamburger {open ? 'open' : ''}" on:click={() => (open = !open)}>
	{#if open}
		&times;
	{:else}
		&#9776;
	{/if}
</div>

<nav class="menu-container {open ? 'open' : ''}">
	<ul>
		<!-- <li><a href="#">About Us</a></li> -->
		<!-- <li><a href="#">Our Mission</a></li> -->
		<li><a href={`${base}/waitlist`}>Waitlist</a></li>
		<li><a href={`${base}/contact`}>Contact</a></li>
	</ul>
</nav>

<style>
	.hamburger {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		padding: 1rem;
		cursor: pointer;
		z-index: 1001;
		position: relative;

		width: 60px;
	}

	.hamburger.open {
		transform: scale(1.1);
	}

	.menu-container {
		overflow: hidden;
		max-height: 0;
		transition: max-height 0.4s ease;
		background: var(--accent);
		color: white;
		position: absolute;
		top: 5rem;
		left: 0;
		width: 100vw;
		z-index: 1000;
	}

	.menu-container.open {
		max-height: 400px;
	}

	.menu-header {
		display: flex;
		justify-content: end;
		padding: 0 1rem;
		/* background: #333; */
	}

	.close-btn {
		font-size: 2rem;
		cursor: pointer;
	}

	ul {
		list-style: none;
		padding: 1rem;
		margin: 0;
	}

	li {
		margin: 1rem 0;
	}

	a {
		color: var(--light-text);
		text-decoration: none;
		font-size: 1.1rem;
	}

	@media screen and (min-width: 1024px) {
		.hamburger,
		.menu-container {
			display: none;
		}
	}
</style>
