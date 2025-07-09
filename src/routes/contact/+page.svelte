<script>
	import Nav from "$lib/Nav.svelte";
	import ContactForm from "./ContactForm.svelte";
</script>

<svelte:head>
	<title>Contact Us</title>
</svelte:head>

<Nav />

<main class="fade-in-up">
	<div class="hero">
		<h1>Contact Us</h1>
		<p class="subtitle">
			For any inquiries, collaborations, or just to say hello, we'd love to hear from you. Reach
			out, and let's connect.
		</p>
	</div>

	<div class="content">
		<!-- <ContactForm /> -->

		<div class="emails">
			<!-- <div>
				<h3>Email us</h3>
				<span>Send us an email and we'll get back to you as soon as we can</span>
			</div> -->
			<!-- <div> -->
			<div class="email">
				<p class="title">Andrew</p>
				<p class="email-text">andrew@edumechs.ca</p>
			</div>
			<div class="email">
				<p class="title">Reyhan</p>
				<p class="email-text">reyhan@edumechs.ca</p>
			</div>
			<!-- </div> -->
		</div>
	</div>
</main>

<style>
	main {
		margin-bottom: 6rem;
	}
	.hero {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		margin: 6rem auto;
		margin-bottom: 2rem;
		max-width: 600px;

		padding: 0rem 1rem;
	}

	.content {
		display: flex;
		max-width: 1080px;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		padding: 1rem;
		gap: 2rem;
		/* text-align: center; */
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

		width: 100%;
		/* max-width: 400px; */
		gap: 2rem;

		padding: 1rem;
		justify-content: center;

		/* margin-top: 2.5rem; */
	}

	span {
		line-height: 150%;
	}

	.email {
		margin-bottom: 0.75rem;
	}

	.email-text {
		-moz-user-select: all;
		-webkit-user-select: all;
		user-select: all;
		text-decoration: underline;
	}

	p {
		/* text-align: center; */
		max-width: 520px;
	}

	.emails p {
		margin: 0;
	}

	h3 {
		margin-bottom: 0.75rem;
	}

	@media screen and (max-width: 1000px) {
		.content {
			flex-flow: column nowrap;
			align-items: center;

			gap: 6rem;
		}

		.hero {
			/* margin-bottom: 2rem; */
		}

		.emails {
			max-width: 600px;
		}
	}
</style>
