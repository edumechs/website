<script>
	import Model from './Model.svelte';
	import { base } from '$app/paths';
</script>

<section class="fade-in-up">
	<div>
		<h1>Wiring the <span class="highlight">next generation</span></h1>
		<p>
			Bridge the gap between classroom theory and industry practice. Designed specifically for
			educational environments, our mechatronics cell makes industrial-grade learning accessible,
			affordable, and engaging.
		</p>
		<a href="{base}/waitlist">
			<button class="primary">Join the Waitlist</button>
		</a>
	</div>

	<video src="cell.mp4" muted autoplay loop playsinline></video>

	<!-- <Model /> -->
</section>

<style>
	video {
		/* isolation: isolate !important;
		-webkit-appearance: none !important; */
		border-radius: 8px;
		width: 400px;

		transition: 250ms width;
	}

	section {
		display: flex;
		flex-flow: row nowrap;
		gap: 2.5rem;

		justify-content: center;
		align-items: center;
		height: 80vh;
		min-height: 500px;
		max-height: 640px;
		/* background-color: var(--accent); */
	}

	h1 {
		color: var(--accent);
		margin: 0;
	}

	p {
		color: var(--accent);
		max-width: 600px;
	}

	.primary {
		margin-top: 1rem;
	}

	.highlight {
		color: var(--highlight-text);
	}

	@media screen and (max-width: 1280px) {
		video {
			width: 350px;
		}
	}

	@media screen and (max-width: 1024px) {
		section {
			padding: 6rem 1rem;
			height: unset;
			max-height: unset;
			flex-flow: column nowrap;

			justify-content: center;
			align-items: center;

			text-align: center;
		}

		video {
			width: 300px;
		}
	}
</style>
