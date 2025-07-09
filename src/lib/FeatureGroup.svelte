<script lang="ts">
	let { title, description, features, imgSrc, reversed = false } = $props();
</script>

<div class="feature-group fadeinz" class:reversed>
	<div class="content">
		<h2>{@html title}</h2>
		<p class="subheading">
			{@html description}
		</p>

		{#each features as f}
			<div class="feature">
				{#if f.icon}
					<div class="icon-container">
						<f.icon fill={false} />
					</div>
				{/if}
				<div class="text">
					<p class="title">{f.title}</p>
					<p class="description">
						{f.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
	<img src={imgSrc} />
</div>

<style>
	.feature-group {
		display: flex;
		gap: 8rem;
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 0;

		flex: none;

		img {
			--w: 420px;
			width: var(--w);
			height: calc(var(--w) * 0.844);
			/* min-width: 450px; */
			border: none;
			outline: none;
			border-radius: 4px;
			object-fit: cover;
		}
	}

	.feature-group.reversed {
		flex-direction: row-reverse;
	}

	.subheading {
		margin-bottom: 4rem;
	}

	.feature {
		display: flex;
		border-top: 1px solid rgba(222, 218, 255, 0.2);
		padding-top: 1rem;

		gap: 1rem;

		.icon-container {
			padding-top: 4px;
		}
	}

	.feature .title {
		font-weight: 500;
		max-width: 400px;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	.feature .description {
		opacity: 0.8;
		max-width: 450px;
	}

	@media screen and (max-width: 1000px) {
		.feature-group {
			flex-flow: column nowrap;

			gap: 4rem;

			.content {
				order: 1;
			}

			img {
				--w: 300px;
				order: 0;
			}
		}
		.feature-group.reversed {
			flex-direction: column;
		}
	}
</style>
