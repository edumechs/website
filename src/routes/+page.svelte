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
</script>

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
		imgSrc="cell 1.jpg"
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
	<!-- <h2>Our Cell</h2>
	<p>
		We&apos;ve specifically designed our mechatronics cell with simplified learning and
		accessibility in mind. Learn at your own pace.
	</p> -->

	<CellAnim />
</section>

<style>
	.stats {
		display: flex;
		flex-flow: column nowrap;
		text-align: center;
		padding-top: 6rem;

		justify-content: center;
		align-items: center;

		& > p {
			max-width: 600px;
			align-self: center;
		}
	}
	.stats-row {
		display: flex;

		margin-top: 6rem;
		max-width: 1440px;

		gap: 5rem;
	}
	.stat {
		display: flex;
		flex-flow: column nowrap;

		align-items: center;
	}
	.stat-percent {
		font-size: 3.5rem;
		font-weight: 500;
	}

	.stat-text {
		max-width: 300px;
		text-align: center;
	}

	.perc {
		font-size: 2rem;
	}

	.features-1 {
		background-color: #080522;
		color: #dedaff;
		padding: 4rem;
	}
</style>
