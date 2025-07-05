<script>
	import Nav from "$lib/Nav.svelte";
</script>

<svelte:head>
	<title>Contact Us</title>
</svelte:head>

<Nav />

<main class="fade-in-up">
	<h1>Contact Us</h1>
	<p class="subtitle">
		For any inquiries, collaborations, or just to say hello, we'd love to hear from you. Reach out,
		and let's connect.
	</p>

	<div class="emails">
		<div>
			<p class="title">Andrew</p>
			<p class="email">andrew@edumechs.ca</p>
		</div>
		<div>
			<p class="title">Reyhan</p>
			<p class="email">reyhan@edumechs.ca</p>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		margin: 6rem auto;
		max-width: 600px;

		padding: 0rem 1rem;
	}

	.title {
		font-weight: 600;
		margin-top: 2rem;
	}

	.subtitle {
		text-align: center;
	}

	.emails {
		display: flex;
		flex-flow: row wrap;

		justify-content: center;
		width: 100%;
		max-width: 500px;
		gap: 3rem;

		margin-top: 2.5rem;
	}

	.email {
		-moz-user-select: all;
		-webkit-user-select: all;
		user-select: all;
	}

	p {
		/* text-align: center; */
		max-width: 520px;
	}

	.emails p {
		margin: 0;
	}

	form {
		display: flex;
		flex-flow: column nowrap;
		max-width: 400px;
		margin-top: 2.5rem;
		width: 100%;

		gap: 1rem;
	}

	input[type="text"],
	input[type="email"] {
		width: 100%;
		padding: 1rem 1rem;
		font-size: 1rem;
		border-radius: 8px;
		border: 1px solid var(--input-border-color);
		color: var(--accent);

		&::placeholder {
			color: var(--accent);
		}
	}

	input[type="checkbox"] {
		transform: scale(1.5);
		border-radius: 8px;
	}

	#submit {
		margin-top: 1rem;
	}

	button:disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.marketing-consent {
		display: flex;
		align-items: center;
		gap: 0.7rem;
	}
</style>
