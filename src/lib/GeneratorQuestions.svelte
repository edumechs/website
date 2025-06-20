<script lang="ts">
	import IconArrowRight from "~icons/material-symbols/arrow-right-alt";
	let { question, initAnswer, onBack, onContinue, final, grade } = $props();

	let selectedAnswer = $state(initAnswer);

	function getAvailableSubjects(grade: string) {
		if (["6", "7", "8", "9"].includes(grade)) {
			return ["math", "science", "technology"];
		} else if (grade === "10") {
			return ["science"];
		} else if (grade === "11" || grade === "12") {
			return ["chemistry", "physics"];
		}
	}

	$effect(() => {
		question.answer = selectedAnswer;
	});
</script>

<div class="root">
	<div class="text">
		<h2 class="title">{question.question}</h2>
		<p>{question.description}</p>
	</div>

	<div class="answers">
		{#each question.answers as answer}
			{#if question.answerType === "radio"}
				{#if question.id !== "subjects" || (question.id === "subjects" && getAvailableSubjects(grade).includes(answer.value))}
					<label>
						<input type="radio" bind:group={selectedAnswer} name="answer" value={answer.value} />
						{answer.label}
					</label>
				{/if}
			{:else if question.answerType === "checkbox"}
				<label>
					<input type="checkbox" bind:group={selectedAnswer} name="answer" value={answer.value} />
					{answer.label}
				</label>
			{/if}
		{/each}
	</div>
	<div class="buttons">
		<button class="secondary" onclick={onBack}>Back</button>
		<button
			class="primary"
			onclick={onContinue}
			disabled={selectedAnswer === null ||
				(Array.isArray(selectedAnswer) && selectedAnswer.length === 0)}
			>{final ? "Create Plan" : "Continue"} <IconArrowRight /></button
		>
	</div>
</div>

<style>
	.text {
		margin-bottom: 4rem;
	}

	.buttons {
		display: flex;

		margin-top: 8rem;

		width: 100%;

		justify-content: space-between;
	}

	.answers {
		display: flex;
		flex-flow: row wrap;
		gap: 1rem;
	}

	.buttons {
		display: flex;

		margin-top: 8rem;

		width: 100%;

		justify-content: space-between;
	}

	label:has(input:checked) {
		border: 1px solid #6da5fe !important;
	}

	label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 8px;

		transition: 200ms border;

		cursor: pointer;
	}

	label:hover {
		border: 1px solid rgb(0, 0, 0, 0.2);
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
