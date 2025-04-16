<script>
	import Nav from '$lib/Nav.svelte';

	async function addUserToWaitlist(event) {
		event.preventDefault(); // Prevent form from refreshing the page

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
			const response = await fetch('http://localhost:8787/api/waitlist', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			});

			if (!response.ok) {
				throw new Error(`Server error: ${response.status}`);
			}

			const result = await response.json();
			console.log('Success:', result);
			// Optional: show success message to user
		} catch (error) {
			console.error('Error:', error);
			// Optional: show error message to user
		}
	}
</script>

<Nav />
<main>
	<h1>Join the Waitlist</h1>
	<p>We'll send updates on our progress and share more about our plan for STEM education</p>

	<form onsubmit={(form) => addUserToWaitlist(form)}>
		<input type="text" name="fullname" placeholder="Full name..." />
		<input type="email" name="email" placeholder="Email address..." />
		<div class="marketing-consent">
			<input id="marketing_consent" name="marketing_consent" type="checkbox" />
			<label for="marketing_consent">Send me promotional emails</label>
		</div>
		<button id="submit" class="primary">Join Now</button>
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

		gap: 1rem;
	}

	input[type='text'],
	input[type='email'] {
		width: 400px;
		padding: 1rem 1rem;
		font-size: 14px;
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
	}

	#submit {
		margin-top: 1rem;
	}

	.marketing-consent {
		display: flex;
		align-items: center;
		gap: 0.7rem;
	}
</style>
