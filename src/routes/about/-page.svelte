<script>
	import { base } from "$app/paths";
	import Nav from "$lib/Nav.svelte";
</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>

<Nav />

<main class="fade-in-up">
	<section class="hero">
		<h1>Meet EDU MECHS</h1>
		<p class="subtitle">
			We're on a mission to make technical education accessible, practical, and exciting through
			interactive tools built for modern STEM education. For every student, in every classroom.
		</p>
		<img class="big" src="" />
		<img class="big" src="" />
	</section>

	<section class="who">
		<div class="content-container">
			<p>Who we are</p>
			<div class="boy">
				<div>
					<h2>Reyhan Tresslar</h2>
					<p>
						<strong
							>Reyhan is a passionate mentor with a lifelong interest in all things electronic.</strong
						>
					</p>
					<p>
						Before co-founding EDU MECHS, he studied mechatronics at Humber Polytechnic. Between
						classes he worked part-time at the Barrett Centre for Technology Innovation located at
						the North Campus.
					</p>
					<p>
						During his time at the BCTI, Reyhan would reach thousands of young minds while
						delivering STEM-based workshops, with content including mechatronics, programming, 3D
						design, and more.
					</p>
				</div>
				<img class="big" src="reyhan.jpg" />
			</div>

			<div class="boy reverse">
				<div>
					<h2>Andrew Allan</h2>
					<p>
						<strong
							>Andrew is a passionate mentor with a lifelong interest in all things electronic.</strong
						>
					</p>
					<p>
						Before co-founding EDU MECHS, he studied mechatronics at Humber Polytechnic. Between
						classes he worked part-time at the Barrett Centre for Technology Innovation located at
						the North Campus.
					</p>
					<p>
						During his time at the BCTI, Andrew would reach thousands of young minds while
						delivering STEM-based workshops, with content including mechatronics, programming, 3D
						design, and more.
					</p>
				</div>
				<img class="big" src="andrew.jpg" />
			</div>
		</div>
	</section>

	<section class="mission">
		<div class="content-container">
			<h2>Our Mission</h2>
			<p>
				In classrooms and workshops, we&apos;d often show educators the learning kits we were using
				to teach mechatronics. Almost every time, the response followed a familiar pattern: strong
				interest, followed by hesitation once the cost came up.
			</p>
			<p>
				It became clear that while the value of hands-on technical education was obvious, the price
				of existing equipment made it out of reach for most classrooms.
			</p>
			<p>
				Our mission is to empower educators and students with a learning platform designed to offer
				the same core experiences in automation, electronics, and control systems, but at a price
				point that makes sense for real educators and real schools.
			</p>
		</div>
	</section>

	<section class="values">
		<div class="content-container">
			<h2>Our Values</h2>

			<div>
				<div class="value-container">
					<span class="number">01</span>
					<span class="value">Hands-on Learning</span>
					<p class="description">
						We believe students learn best by doing. Every EDU MECHS tool is designed to give
						learners real, tactile experience with automation, electronics, and control systems.
					</p>
				</div>
				<div class="value-container">
					<span class="number">02</span>
					<span class="value">Built for the Classroom</span>
					<p class="description">
						From pricing to durability to simplicity, our learning kits are designed with real
						classrooms in mind. We aim to make advanced technical education accessible to schools of
						all sizes and budgets.
					</p>
				</div>
				<div class="value-container">
					<span class="number">03</span>
					<span class="value">Empowering Educators</span>
					<p class="description">
						Educators are at the heart of every successful learning experience. We build tools that
						support, not replace, great teaching, making it easier to deliver engaging, future-ready
						STEM education.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="emotion">
		<div class="content-container">
			<p>Why it matters</p>
			<div class="reading">
				<h2>
					Young people are increasingly<br /><span class="highlight-it"
						>dismissing skilled trades</span
					> as a career
				</h2>
				<p>
					Even as the need for technically skilled workers is rising across Canada, many young
					people overlook these careers simply because they haven&apos;t had the chance to
					experience what working with automation, electronics, or machinery actually feels like.
				</p>
				<p>
					As older workers retire and technology transforms the trades, the gap between opportunity
					and awareness is only getting wider.
				</p>
			</div>

			<div class="stats-row">
				<div class="stat">
					<span class="stat-percent highlight">16<span class="perc">%</span></span>
					<p class="stat-text">
						Only 16% of young people consider skilled trades as a career. Many aren&apos;t even
						aware that it&apos;s an option
					</p>
				</div>

				<div class="stat">
					<span class="stat-percent highlight">10<span class="perc">%</span></span>
					<p class="stat-text">
						There&apos;s been a 10% drop among 9-12 year old children with interest in skilled
						trades
					</p>
				</div>
				<div class="stat">
					<span class="stat-percent highlight">50<span class="perc">%</span></span>
					<p class="stat-text">
						Even amongst young people who are interested, over 50% lack professional development
						opportunities
					</p>
				</div>
			</div>

			<div class="icon-reading">
				<div class="icon">
					<img width="128px" src={`${base}/opportunity.svg`} />
				</div>
				<div class="reading">
					<h2>
						Lack of exposure is a <span class="highlight-it">lifelong missed opportunity</span>
					</h2>
					<p>
						Many students never consider a career in skilled trades or technical fields, not because
						they aren&apos;t interested, but because they&apos;ve never had the chance to try.
						Research shows that early exposure to hands-on learning dramatically increases the
						likelihood that students will see themselves in these roles.
					</p>
					<p>Without opportunities to build, test, and explore, entire career paths stay hidden.</p>
				</div>
			</div>

			<div class="icon-reading">
				<div class="icon">
					<img width="128px" src={`${base}/retire.svg`} />
				</div>
				<div class="reading">
					<h2>
						<span class="highlight-it">700 000+</span> skilled trades workers expected to
						<span class="highlight-it">retire by 2028</span>
					</h2>
					<p>
						Canada is facing a massive wave of retirements in skilled trades. Over 700,000 workers
						are expected to leave the workforce by 2028. This isn't just a labour shortage; it's a
						knowledge gap.
					</p>
					<p>
						As experienced technicians age out, there's an urgent need to prepare the next
						generation with the hands-on skills that keep our industries running.
					</p>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		/* align-items: center; */
		margin: 6rem auto;
		/* max-width: 600px; */

		/* padding: 0rem 1rem; */
	}

	.content-container {
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
	}

	.who .content-container {
		max-width: 1200px;
	}

	.who p {
		max-width: 600px !important;
	}

	.hero {
		max-width: 750px;
		margin: 0 auto;
	}

	.stats-row {
		display: flex;

		margin-bottom: 12rem;
		max-width: 1440px;

		gap: 5rem;
	}
	.stat {
		display: flex;
		flex-flow: column nowrap;
	}
	.stat-percent {
		font-size: 4.75rem;
		font-weight: 500;
	}

	.stat-text {
		max-width: 300px;
	}

	.perc {
		font-size: 2rem;
	}

	.emotion,
	.who {
		background-color: #080522;
		color: #dedaff;
		padding: 4rem;
	}

	.reading {
		max-width: 770px;
		margin-bottom: 12rem;

		h2 {
			font-size: 2.5rem;
		}
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		background-color: #1c193b;
		border-radius: 1rem;
		width: 300px;
		height: 250px;
		margin-bottom: 2rem;

		img {
			width: 160px;
		}
	}

	.mission,
	.values,
	.who {
		padding: 6rem 10rem;

		p {
			max-width: 770px;
		}
	}

	.value-container {
		display: flex;
		gap: 2rem;

		padding: 1rem 0;

		border-top: 1px solid rgba(0, 0, 0, 0.2);

		.number {
			min-width: 126px;
		}
		.value {
			min-width: 220px;
		}

		.description {
			padding: 0;
			margin: 0;
		}
	}

	img.big {
		width: 450px;
		min-width: 450px;
		height: 380px;
		background-color: #1c193b;
		border: none;
		outline: none;
		border-radius: 8px;
	}

	.boy {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 16rem;
	}
	.boy.reverse {
		flex-flow: row-reverse;
	}

	.icon-reading {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
	}
</style>
