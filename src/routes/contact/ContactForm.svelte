<script lang="ts">
	function formSubmit(e) {
		e.preventDefault();
	}
</script>

<div class="root">
	<form onsubmit={formSubmit}>
		<div class="double">
			<label>
				First name
				<input type="text" name="first" placeholder="First name" required />
			</label>

			<label>
				Last name
				<input type="text" name="last" placeholder="Last name" required />
			</label>
		</div>

		<label>
			Email
			<input type="email" name="email" placeholder="you@company.com" required />
		</label>

		<label>
			Message
			<textarea name="message" placeholder="Leave us a message..." rows="5" required minlength="20"
			></textarea>
		</label>

		<button class="primary">Send message</button>
	</form>
</div>

<style>
	.root {
		max-width: 600px;
	}
	.double {
		display: flex;
		gap: 2rem;
	}
	label {
		display: inline-block;
		width: 100%;
		margin-bottom: 2rem;
		font-weight: 500;
		font-size: 0.875rem;
	}
	input,
	textarea {
		margin-top: 0.5rem;
	}

	button {
		width: 100%;
	}
</style>
