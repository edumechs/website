<script>
	import Model from "./Model.svelte";
	import { base } from "$app/paths";
</script>

<section class="root fade-in-up">
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

	<div class="video-container fade-in-up">
		<video
			onclick={() => {
				return false;
			}}
			src={`${base}/videos/cell_showcase.mp4`}
			autoplay
			muted
			loop
			playsinline
		></video>
	</div>
	<!-- <video src="cell.mp4" muted autoplay loop playsinline></video> -->

	<!-- <Model /> -->
</section>

<style>
	.root {
		position: relative;
	}

	.video-container {
		position: absolute;
		height: 450px;
		left: 0;
		top: 0;

		width: 100%;
		height: 100%;

		z-index: -1;

		& video {
			object-fit: cover;
			/* opacity: 0.5; */
			filter: brightness(20%);
			width: 101%;
			height: 101%;
			transition: filter 1s;
			margin-left: -1px;
		}
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
		text-align: center;
		/* background-color: var(--accent); */
	}

	h1 {
		color: var(--light-text);
		margin: 0;
	}

	p {
		color: var(--light-text);
		max-width: 600px;
	}

	.primary {
		margin-top: 1rem;
	}

	.primary {
		border: 1px solid #6da5fe;
		color: #6da5fe;
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
