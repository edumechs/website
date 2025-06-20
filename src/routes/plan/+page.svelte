<script lang="ts">
	import Nav from "$lib/Nav.svelte";

	import IconArrowRight from "~icons/material-symbols/arrow-right-alt";
	import IconDownload from "~icons/material-symbols/download";
	import { base } from "$app/paths";
	import GeneratorQuestions from "$lib/GeneratorQuestions.svelte";
	import { fade } from "svelte/transition";
	import WhoQuestion from "$lib/WhoQuestion.svelte";

	const questions = [
		{
			id: "who",
			question: "Who is this lesson plan for?",
			description:
				"We'll include your name and institution so your lesson is ready to share or print",
			answerType: "text",
			answers: [
				{ label: "Name", value: "" },
				{ label: "Educational institution", value: "" }
			]
		},
		{
			id: "studentCount",
			question: "How many students are you teaching?",
			description: "This helps us recommend the best way to organize groups, materials, and timing",
			answerType: "radio",
			answers: [
				{ label: "Less than 5", value: "5_or_less" },
				{ label: "5 to 10", value: "5_to_10" },
				{ label: "11 to 15", value: "11_to_15" },
				{ label: "16 or more", value: "16_or_more" }
			],
			answer: null
		},
		{
			id: "grade",
			question: "Which grade are your students in?",
			description: "If your students are in mixed grades, choose what represents them best",
			answerType: "radio",
			answers: [
				{ label: "Grade 6", value: "6" },
				{ label: "Grade 7", value: "7" },
				{ label: "Grade 8", value: "8" },
				{ label: "Grade 9", value: "9" },
				{ label: "Grade 10", value: "10" },
				{ label: "Grade 11", value: "11" },
				{ label: "Grade 12", value: "12" }
			],
			answer: null
		},
		{
			id: "subjects",
			question: "Which subject are you teaching?",
			description: "This helps us match the content to your classroom focus",
			answerType: "radio",
			answers: [
				{ label: "Science", value: "science" },
				{ label: "Math", value: "math" },
				{ label: "Physics", value: "physics" },
				{ label: "Chemistry", value: "chemistry" },
				{ label: "Technology", value: "technology" },
				{ label: "Learning for Fun", value: "fun" }
			],
			answer: null
		}
	];

	let currentQuestionIndex = $state(0);
	let currentQuestion = $derived(questions[currentQuestionIndex]);

	function nextQuestion(answer) {
		if (currentState === "who") {
			currentState = "";
			nextState = "questions";
		}
		if (currentQuestionIndex === questions.length - 1) {
			currentState = "";
			nextState = "generate";

			const delay = 3000 + Math.random() * 3000;
			setTimeout(() => {
				showPdf = true;
			}, delay);
			return;
		} else {
			// Reset the subject choice when switching grades
			// Since some grades might not have whatever subject was previously selected
			if (currentQuestionIndex === 2) {
				questions[3].answer = null;
			}
			currentState = "";
			nextState = "questions";
			currentQuestionIndex += 1;
		}
	}

	function onBack() {
		if (currentQuestionIndex <= 0) {
			return;
		} else if (currentQuestionIndex === 1) {
			currentState = "";
			currentQuestionIndex -= 1;
			nextState = "who";
		} else {
			currentState = "";
			currentQuestionIndex -= 1;
		}
	}

	// Placeholder:
	// will be switched to live when complete
	function generatedPdfName() {
		const grade = questions[2].answer;
		const subject = questions[3].answer;

		if (["6", "7", "8", "9"].includes(grade)) {
			return {
				math: "6 - 8 Math.pdf",
				science: "6 - 8 Science and Tech.pdf",
				technology: "6 - 8 Science and Tech.pdf"
			}[subject];
		} else if (grade === "10") {
			return "10 SNC2DP.pdf";
		} else if (grade === "11") {
			if (subject === "physics") {
				return "11 SPH3U.pdf";
			} else {
				return "11 SCH3U.pdf";
			}
		} else if (grade === "12") {
			if (subject === "physics") {
				return "12 SPH4U.pdf";
			} else {
				return "12 SCH4U.pdf";
			}
		}
	}

	let currentState: "get_started" | "who" | "questions" | "generate" | "" = $state("get_started");
	let nextState: "get_started" | "who" | "questions" | "generate" | "" = "";

	let final = $derived(currentQuestionIndex === questions.length - 1);
	let showPdf = $state(false);
</script>

<svelte:head>
	<title>Create your lesson plan</title>
</svelte:head>

<Nav />
<div class="root">
	{#if currentState === "get_started"}
		<div
			class="hero"
			transition:fade={{ duration: 300 }}
			onoutroend={() => (currentState = nextState)}
		>
			<h1>Create your lesson plan</h1>
			<p>
				Quickly create a personalized lesson plan for your EDU MECHS learning cell, no matter your
				class size, schedule, or experience level.
			</p>
			<button
				class="primary"
				onclick={() => {
					currentState = "";
					nextState = "who";
				}}>Get Started <IconArrowRight /></button
			>
		</div>
	{:else if currentState === "who"}
		<div
			in:fade={{ duration: 400, delay: 200 }}
			out:fade={{ duration: 400 }}
			onoutroend={() => (currentState = nextState)}
		>
			{#key currentQuestionIndex}
				<WhoQuestion
					question={questions[0]}
					onContinue={nextQuestion}
					onBack={() => {
						currentState = "";
						nextState = "get_started";
					}}
				/>
			{/key}
		</div>
	{:else if currentState === "questions"}
		<div
			in:fade={{ duration: 250, delay: 200 }}
			out:fade={{ duration: 250 }}
			onoutroend={() => (currentState = nextState)}
		>
			{#key currentQuestionIndex}
				<GeneratorQuestions
					question={currentQuestion}
					onContinue={nextQuestion}
					{onBack}
					{final}
					initAnswer={currentQuestion.answer}
					grade={questions[2].answer}
				/>
			{/key}
		</div>
	{:else if currentState === "generate"}
		<div class="hero" in:fade={{ duration: 250, delay: 250 }} out:fade={{ duration: 250 }}>
			{#if showPdf}
				{@const name = questions[0].answers[0].value.trim()}
				{@const institute = questions[0].answers[1].value.trim()}
				{@const pdfFileName = generatedPdfName()}
				<h2>Plan Generated for {name} at {institute}</h2>
				<p>Your lesson plan is now ready to teach!</p>

				<div
					class="pdfview"
					transition:fade={{ duration: 300 }}
					onoutroend={() => (currentState = nextState)}
				>
					<a href={`${base}/plangen/${pdfFileName}`} download={`EDU MECHS Plan ${pdfFileName}`}>
						<button class="primary">Download <IconDownload /></button>
					</a>
					<iframe
						title="Generated lesson plan PDF"
						width="100%"
						height="600px"
						src={`${base}/plangen/${pdfFileName}`}
					></iframe>
				</div>
			{:else}
				<h2>Generating your lesson plan</h2>
				<p>You will have the option to view and download your lesson plan in a few seconds</p>

				<div class="placeholder">
					<svg
						width="32"
						height="32"
						stroke="#000"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><style>
							.spinner_V8m1 {
								transform-origin: center;
								animation: spinner_zKoa 2s linear infinite;
							}
							.spinner_V8m1 circle {
								stroke-linecap: round;
								animation: spinner_YpZS 1.5s ease-in-out infinite;
							}
							@keyframes spinner_zKoa {
								100% {
									transform: rotate(360deg);
								}
							}
							@keyframes spinner_YpZS {
								0% {
									stroke-dasharray: 0 150;
									stroke-dashoffset: 0;
								}
								47.5% {
									stroke-dasharray: 42 150;
									stroke-dashoffset: -16;
								}
								95%,
								100% {
									stroke-dasharray: 42 150;
									stroke-dashoffset: -59;
								}
							}
						</style><g class="spinner_V8m1"
							><circle cx="12" cy="12" r="9.5" fill="none" stroke="#BCBCBC" stroke-width="3"
							></circle></g
						></svg
					>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.root {
		display: flex;
		flex-flow: column nowrap;
		max-width: 650px;
		margin: 0 auto;
		padding: 6rem 1rem;
		min-height: 650px;

		justify-content: space-between;
	}
	.hero {
		max-width: 650px;
		margin: 0 auto;
		padding: 0rem 1rem;
		text-align: center;
	}

	button:disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.placeholder {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 240px;
		background-color: #eaeaea;
		border-radius: 8px;
	}

	iframe {
		width: 100%;
		margin-top: 4rem;
		/* height:; */
	}
</style>
