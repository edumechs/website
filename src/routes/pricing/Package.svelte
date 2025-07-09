<script lang="ts">
	import { base } from "$app/paths";
	import IconCheckmark from "~icons/material-symbols/check-circle";

	interface Feature {
		text: string;
		listItems?: string[];
	}

	interface Props {
		name: string;
		description: string;
		features: Feature[];
		includedText?: string;
		minimumCells?: number;
	}

	let {
		name,
		description,
		features,
		includedText = "Included in Engineers:",
		minimumCells
	}: Props = $props();
</script>

<div class="root">
	{#if minimumCells}
		<span class="minimum">*Minimum {minimumCells} cells ordered</span>
	{:else}
		<span>&nbsp</span>
	{/if}
	<h2>{name}</h2>
	<p class="description">{description}</p>
	<a href={`${base}/contact`}>
		<button class="primary">Get in touch</button>
	</a>

	<div class="included">
		<span class="included-text">{includedText}</span>
		{#each features as feat}
			<div class="feature">
				<IconCheckmark font-size="1.25rem" />
				<span>{feat.text}</span>
			</div>
			{#if feat.listItems?.length}
				<ul>
					{#each feat.listItems as fli}
						<li>{fli}</li>
					{/each}
				</ul>
			{/if}
		{/each}
	</div>
</div>

<style>
	.root {
		width: 100%;
		padding: 2rem 2rem 5rem 2rem;
	}
	h2 {
		font-size: 1.75rem;
	}

	.included {
		background-color: #f2f9fd;
		border-radius: 8px;
		padding: 1rem 1.25rem 2rem 1.25rem;

		& .included-text {
			font-weight: 500;
		}
	}

	button {
		margin-bottom: 2.5rem;
	}

	.feature {
		display: flex;
		flex-flow: row nowrap;
		gap: 0.5rem;

		align-items: center;
		margin-top: 1rem;
		margin-left: 0.75rem;
	}

	ul li {
		line-height: 150%;
		margin-left: 1rem;
	}

	.description {
		height: 56px;
	}
	.minimum {
		display: inline-block;
		font-style: italic;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 0.25rem;
	}
</style>
