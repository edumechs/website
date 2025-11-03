<script>
	import { base } from "$app/paths";
	import Nav from "$lib/Nav.svelte";
	import Package from "./Package.svelte";
</script>

<Nav></Nav>

<div class="root">
	<div class="hero fade-in-up">
		<div class="left">
			<h1>
				Built for classrooms,<br />
				<span class="highlight">priced for access</span>
			</h1>
			<p>
				EDU MECHS is designed to fit real teaching environments and school budgets, making
				hands-on learning more accessible to more students
			</p>
			<a href={`${base}/contact`}>
				<button class="primary">Book a demo</button>
			</a>
		</div>

		<img
			width="350"
			src={`${base}/images/cell_manual.jpg`}
			alt="Modular engineering kit with included assembly manual"
		/>
	</div>

	<div class="packages fade-in-up">
		<Package
			name="Engineers Package"
			description="Perfect for small teams, individual learners, or pilot programs."
			features={[{ text: "Modular Engineering Kit" }, { text: "Assembly Manual" }]}
		/>
		<div class="line"></div>
		<Package
			name="Educators Package"
			description="Designed for classrooms and learning institutions ready to integrate mechatronics into their curriculum."
			includedText="Everything in Engineers, plus:"
			minimumCells={15}
			features={[
				{
					text: "Customized Educators Software",
					listItems: [
						"Build your own custom teaching plan",
						"Access  to content and material",
						"24 / 7 assistance"
					]
				},
				{ text: "1 Free Educators Equip Workshop / year" },
				{ text: "3 Free Student Workshops / year" }
			]}
		/>
	</div>
</div>

<style>
	.hero {
		display: flex;

		align-items: center;
		gap: 4rem;

		margin: 0 auto;
		padding: 6rem 1rem 8rem 1rem;

		max-width: 1080px;

		p {
			max-width: 650px;
		}
	}
	img {
		border-radius: 8px;
	}
	.packages {
		display: flex;

		margin: 0 auto;
		margin-bottom: 6rem;
		border: 1px solid #08052220;
		max-width: calc(1080px + 2rem);
		border-radius: 8px;
	}
	.line {
		min-width: 1px;
		max-width: 1px;
		background-color: #08052220;
	}

	@media screen and (max-width: 1000px) {
		.packages {
			flex-flow: column nowrap;
		}

		.line {
			min-width: unset;
			max-width: unset;
			min-height: 1px;
			max-height: 1px;
		}

		.hero {
			flex-flow: column nowrap;
			align-items: start;
		}
		/* img {
			order: -1;
		} */
	}
</style>
