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
		description="Inspire students when it matters most by laying a hands-on foundation in math, physics, and logic through real-world engineering systems they can build, wire, and control themselves."
		features={[
			{
				title: "Input and output",
				description:
					"Discover how inputs and outputs power the world around us — from everyday devices to advanced automation. Learn how they form the foundation for understanding sensors and control systems.",
				icon: IconSettingsInput
			},
			{
				title: "Wiring and circuitry",
				description:
					"Get hands-on with electrical wiring and see how components truly work — using easy-to-connect, stackable systems designed for learning and exploration.",
				icon: IconBolt
			},
			{
				title: "Control systems",
				description:
					"Advance your skills and explore how control systems work — through hands-on experience with timers, relay logic, and holding circuits.",
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
				description: "Easy-to-use guides that are tailored specifically to your classroom needs.",
				icon: IconQuickReference
			},
			{
				title: "Custom lesson builder",
				description:
					"Use our software to create personalized lesson plans tailored to your class size, subject, and schedule. Fast, flexible, and built for real classrooms.",
				icon: IconBook
			},
			{
				title: "Educator workshops",
				description:
					"Our team is available to deliver an educator workshop to demonstrate effective use of the kit.",
				icon: IconOpenJam
			}
		]}
		imgSrc="theboys 2.jpg"
	/>
</section>

<section>
	<!-- <div class="video-container fade-in-up">
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
	</div> -->
	<CellAnim />
</section>

<style>
	.video-container {
		height: 450px;

		& video {
			object-fit: cover;
			/* opacity: 0.5; */
			filter: brightness(30%);
			width: 101%;
			height: 101%;
			transition: filter 1s;
			margin-left: -1px;
		}

		& video:hover {
			filter: brightness(70%);
		}
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
