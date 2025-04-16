<script>
	import Model from './Model.svelte';
</script>

<section>
	<div>
		<h1>Wiring the <span class="highlight">next generation</span></h1>
		<p>
			Bridge the gap between classroom theory and industry practice. Designed specifically for
			educational environments, our mechatronics cell makes industrial-grade learning accessible,
			affordable, and engaging.
		</p>
		<button class="primary">Join the Waitlist</button>
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
	}
	.canv {
		width: 500px;
		height: 300px;
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

	@media screen and (max-width: 700px) {
		section {
			padding: 4rem 1rem;
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
