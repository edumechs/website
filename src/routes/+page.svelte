<script lang="ts">
	import Nav from "$lib/Nav.svelte";
	import Hero from "$lib/Hero.svelte";
	import FeatureGroup from "$lib/FeatureGroup.svelte";

	import IconSettingsInput from "~icons/material-symbols/settings-input-component";
	import IconBolt from "~icons/material-symbols/bolt-outline";
	import IconAir from "~icons/material-symbols/air";

	import IconQuickReference from "~icons/material-symbols/quick-reference-outline";
	import IconOpenJam from "~icons/material-symbols/open-jam-outline";
	import IconBook from "~icons/material-symbols/book-2-outline";
	import CellAnim from "$lib/CellAnim.svelte";
	import { base } from "$app/paths";
</script>

<svelte:head>
	<title>EDU MECHS: Wiring the next generation</title>
</svelte:head>

<Nav />
<Hero />

<section class="features-1">
	<FeatureGroup
		title={`The mechatronics learning kit that <span style="color: #6DA5FE">grows with you</span>`}
		description="Connect to students while it matters most. Studies show that the best time to teach about mechatronics is as early as possible."
		features={[
			{
				title: "Input and output",
				description:
					"Learn about the importance of input and output (I/O) and its use in the industry",
				icon: IconSettingsInput
			},
			{
				title: "Electricity and circuit flow",
				description:
					"Become familiar with electrical wiring, and visualize how electricity might move throughout a circuit",
				icon: IconBolt
			},
			{
				title: "Bernouilli's Principle",
				description: "Understand how air moves and how to control it using pneumatic systems",
				icon: IconAir
			}
		]}
		imgSrc="images/cell_sun.jpg"
	/>
	<FeatureGroup
		title={`Ready for <span style="color: #6DA5FE">educators</span>`}
		description="Go from learning to teaching as quickly as possible using our materials and programs specifically designed for educators."
		reversed
		features={[
			{
				title: "Interactive, personalized guides",
				description: "Easy-to-use guides that are tailored specifically to your classroom needs",
				icon: IconQuickReference
			},
			{
				title: "Comprehensive documentation",
				description: "Everything that is included in your kit has extensive documentation",
				icon: IconBook
			},
			{
				title: "Educator workshops",
				description:
					"Our team is available to deliver an educator workshop to demonstrate effective use of the kit",
				icon: IconOpenJam
			}
		]}
		imgSrc="theboys 2.jpg"
	/>
</section>

<section>
	<div class="video-container fade-in-up">
		<video src={`${base}/videos/cell_showcase.mp4`} autoplay muted loop playsinline></video>
	</div>
	<CellAnim />
</section>

<style>
	.video-container {
		height: 450px;
	}
	video {
		object-fit: cover;
		/* opacity: 0.5; */
		filter: brightness(30%);
		width: 101%;
		height: 101%;
		transition: filter 1s;
	}

	video:hover {
		filter: brightness(70%);
	}

	.features-1 {
		background-color: #080522;
		color: #dedaff;
		padding: 4rem;
	}

	@media screen and (max-width: 1000px) {
		.features-1 {
			background-color: #080522;
			color: #dedaff;
			padding: 4rem 1rem;
		}
	}
</style>
