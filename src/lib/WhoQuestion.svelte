<script lang="ts">
	import { base } from "$app/paths";
	import IconArrowRight from "~icons/material-symbols/arrow-right-alt";

	interface Props {
		question: any;
		onContinue: any;
		onBack: any;
	}

	let { question, onContinue, onBack }: Props = $props();

	let userName = $state(question.answers[0].value);
	let institution = $state(question.answers[1].value);

	$effect(() => {
		question.answers[0].value = userName;
		question.answers[1].value = institution;
	});
</script>

<div class="root">
	<div class="text">
		<h2 class="title">Who is this lesson plan for?</h2>
		<p>We'll include your name and institution so your lesson is ready to share or print</p>
	</div>

	<form class="answers">
		<input type="text" placeholder="Name" bind:value={userName} />
		<input type="text" placeholder="Educational institution" bind:value={institution} />
	</form>

	<div class="buttons">
		<button class="secondary" onclick={onBack}>Back</button>
		<button
			class="primary"
			onclick={onContinue}
			disabled={userName.trim() === "" || institution.trim() === ""}
			>Continue <IconArrowRight /></button
		>
	</div>
</div>

<style>
	.text {
		margin-bottom: 4rem;
	}

	.answers {
		display: flex;
		flex-flow: row wrap;
		gap: 1rem;
	}

	label:has(input:checked) {
		border: 1px solid #6da5fe !important;
	}

	label {
		padding: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 8px;

		transition: 200ms border;

		cursor: pointer;
	}

	label:hover {
		border: 1px solid rgb(0, 0, 0, 0.2);
	}

	.buttons {
		display: flex;

		margin-top: 8rem;

		width: 100%;

		justify-content: space-between;
	}

	button:disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.title {
		font-size: 24px;
		font-weight: bold;
	}

	button {
		transition: 200ms opacity;
	}
</style>
