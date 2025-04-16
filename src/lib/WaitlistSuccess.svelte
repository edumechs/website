<script>
	let { onClose, opened = $bindable(false) } = $props();

	let dialogEl;

	// Open/close based on `open` prop
	$effect(() => {
		if (opened && dialogEl && !dialogEl.open) {
			dialogEl.showModal();
		} else if (!opened && dialogEl?.open) {
			dialogEl.close();
		}
	});
</script>

<dialog bind:this={dialogEl} onclose={onClose} class="dialog">
	<div class="container">
		<div class="check">✓</div>
		<h2>You have been added to our waitlist!</h2>
		<p>Thanks for following our journey. You'll be the first to know when we're ready!</p>
		<form method="dialog">
			<button class="primary">Close</button>
		</form>
	</div>
</dialog>

<style>
	dialog {
		padding: 1rem !important;
	}

	button {
		width: 200px;
		margin-top: 1rem;
	}
	.container {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;

		padding: 1rem 2rem !important;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}

	.check {
		display: flex;

		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;

		font-size: 1.5rem;

		background-color: var(--accent);
		border-radius: 50%;
		aspect-ratio: 1 / 1;
		color: white;

		font-weight: bold;
	}

	p {
		max-width: 400px;
		text-align: center;
	}

	.dialog {
		border: none;
		border-radius: 1rem;
		padding: 2rem;
		min-width: 300px;
		max-width: 90vw;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
	}

	.close {
		display: flex;

		justify-content: center;
		align-items: center;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background-color: #dddddd;

		width: 2rem;
		height: 2rem;

		aspect-ratio: 1 / 1;

		font-size: 1.25rem;
	}

	.close:hover {
		background-color: #d3d3d3 !important;
	}

	h2 {
		margin-bottom: 0rem;
	}
</style>
