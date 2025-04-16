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

	<div class="canv">
		<video width="400px" height="240px" src="cellscaled.webm" muted autoplay loop playsinline
		></video>
	</div>

	<!-- <Model /> -->
</section>

<style>
	video {
		isolation: isolate !important;
		-webkit-appearance: none !important;
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

	.secondary {
		margin-top: 1.5rem;
	}

	.highlight {
		color: var(--highlight-text);
	}
</style>
