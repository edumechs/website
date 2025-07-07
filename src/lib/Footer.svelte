<script>
	import { base } from "$app/paths";
</script>

<div class="root">
	<div class="content fade-in-up">
		<div class="center">
			<h1>Ready to get started?</h1>
			<p class="sub">
				We'll help you choose the right kit and build a plan that works for your classroom
			</p>
			<a href="{base}/contact">
				<button class="primary">Contact Us</button>
			</a>
		</div>

		<div class="bottom">
			<a href={`${base}/`}>
				<img
					src={`${base}/Logo_light.png`}
					loading="eager"
					width="148px"
					alt="Cog with EDU MECHS text in blue"
				/>
			</a>

			<span class="reserved">© 2025 EDU MECHS. All Rights Reserved</span>
			<div class="social-links">
				<a href="https://www.linkedin.com/company/edu-mechs" class="social-link">
					<button class="primary">
						<img src="linkedin.svg" />
					</button>
				</a>
				<a href="javascript:void" class="social-link">
					<button class="primary">
						<img src="facebook.svg" />
					</button>
				</a>
				<a href="javascript:void" class="social-link">
					<button class="primary">
						<img src="instagram.svg" />
					</button>
				</a>
			</div>
		</div>
		<span class="reserved-mobile">© 2025 EDU MECHS. All Rights Reserved</span>
	</div>
</div>

<style>
	.root {
		width: 100%;
		/* height: 600px; */

		padding: 6rem;
		background-color: #080522;
		color: #dedaff;
	}

	.center {
		display: flex;
		flex-flow: column nowrap;

		justify-content: center;
		align-items: center;

		margin-bottom: 120px;
	}

	.bottom {
		display: flex;

		justify-content: space-between;
		align-items: center;
	}

	.reserved,
	.reserved-mobile {
		font-size: 0.875rem;
		opacity: 0.6;
	}

	.content {
		max-width: 1080px;
		margin: 0 auto;
		text-align: center;
	}

	/* .social-link {
		display: flex;
		border: 1px solid #dedaff4a;
		border-radius: 50%;

		min-width: 40px;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;

		flex: 0;
	} */

	.social-link button {
		display: flex;

		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		padding: 0px;
	}

	.social-links {
		display: flex;
		gap: 0.75rem;
	}

	.primary {
		border: 1px solid #6da5fe;
		color: #6da5fe;
	}

	.social-link .primary {
		border: 1px solid #dedaff30;
	}

	.sub {
		max-width: 500px;
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.reserved-mobile {
		display: none;
	}

	@media screen and (max-width: 1000px) {
		h1 {
			font-size: 2.25rem;
		}

		.root {
			padding: 6rem 2rem;
		}

		.reserved {
			display: none;
		}
		.reserved-mobile {
			display: block;
			padding-top: 2rem;
		}
	}
</style>
