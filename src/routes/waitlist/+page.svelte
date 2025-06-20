<script>
	import Nav from "$lib/Nav.svelte";
	import WaitlistSuccess from "$lib/WaitlistSuccess.svelte";

	let waitlistPending = $state(false);

	const waitlistEndpoint = "https://waitlist.afrmtbl627.workers.dev/api/waitlist";

	let waitlistDialog;
	let dialogOpen = $state(false);

	async function addUserToWaitlist(event) {
		if (waitlistPending) {
			return;
		}

		waitlistPending = true;

		event.preventDefault();

		const form = event.target;
		const fullname = form.fullname.value;
		const email = form.email.value;
		const marketingConsent = form.marketing_consent.checked;

		const body = {
			fullname,
			email,
			marketing_consent: marketingConsent
		};

		try {
			const response = await fetch(waitlistEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(body)
			});

			if (!response.ok) {
				throw new Error(`Server error: ${response.status}`);
			}

			const result = await response.json();
			dialogOpen = true;
			console.log("Success:", result);
		} catch (error) {
			console.error("Error:", error);
		} finally {
			waitlistPending = false;
			form.reset();
		}
	}
</script>

<svelte:head>
	<title>Join the Waitlist</title>
</svelte:head>

<Nav />

<WaitlistSuccess bind:opened={dialogOpen} onClose={() => (dialogOpen = false)} />

<main class="fade-in-up">
	<h1>Join the Waitlist</h1>
	<p>We'll send updates on our progress and share more about our plan for STEM education.</p>

	<form onsubmit={(form) => addUserToWaitlist(form)}>
		<input type="text" name="fullname" placeholder="Full name..." required />
		<input type="email" name="email" placeholder="Email address..." required />
		<div class="marketing-consent">
			<input id="marketing_consent" name="marketing_consent" type="checkbox" />
			<label for="marketing_consent">Send me promotional emails</label>
		</div>
		<button id="submit" class="primary" disabled={waitlistPending}>
			{#if waitlistPending}
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					fill="white"
					><style>
						.spinner_P7sC {
							transform-origin: center;
							animation: spinner_svv2 0.75s infinite linear;
						}
						@keyframes spinner_svv2 {
							100% {
								transform: rotate(360deg);
							}
						}
					</style><path
						d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
						class="spinner_P7sC"
					/></svg
				>
			{:else}
				Join Now
			{/if}
		</button>
	</form>
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

	p {
		text-align: center;
		max-width: 520px;
	}
	form {
		display: flex;
		flex-flow: column nowrap;
		max-width: 400px;
		margin-top: 2.5rem;
		width: 100%;

		gap: 1rem;
	}

	/* input[type='text'],
	input[type='email'] {
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

	input[type='checkbox'] {
		transform: scale(1.5);
		border-radius: 8px;
	} */

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
