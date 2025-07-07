<script lang="ts">
	import { base } from "$app/paths";
	import MobileMenu from "./MobileMenu.svelte";
</script>

<nav>
	<div>
		<a href={`${base}/`}>
			<img
				src={`${base}/Logo.png`}
				loading="eager"
				width="148px"
				alt="Cog with EDU MECHS text in blue"
			/>
		</a>
		<ul>
			<li><a href={`${base}/about`}>About Us</a></li>
			<li><a href={`${base}/waitlist`}>Waitlist</a></li>
			<!-- <li><a href={`${base}/pricing`}>Pricing</a></li> -->
		</ul>
	</div>
	<MobileMenu />
	<a href="{base}/contact" class="contact-link">
		<button class="primary">Contact Us</button>
	</a>
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

	@media screen and (max-width: 1024px) {
		ul {
			display: none;
		}

		.contact-link {
			display: none;
		}
	}
</style>
