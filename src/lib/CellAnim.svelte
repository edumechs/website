<script lang="ts">
	import svg from "../conveyor.svg?raw";

	import { gsap } from "gsap";
	import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
	import ScrollTrigger from "gsap/src/ScrollTrigger";
	import ScrollSmoother from "gsap/src/ScrollSmoother";

	$effect(() => {
		gsap.registerPlugin(DrawSVGPlugin);
		gsap.registerPlugin(ScrollTrigger);
		gsap.registerPlugin(ScrollSmoother);

		// create the scrollSmoother before your scrollTriggers
		ScrollSmoother.create({
			smooth: 1.5, // how long (in seconds) it takes to "catch up" to the native scroll position
			effects: true, // looks for data-speed and data-lag attributes on elements
			smoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
			// speed: 0.1
		});

		function hideSvgAll(tl) {
			tl.set(
				[
					"#line1",
					"#conveyor",
					"#line2",
					"#startstop",
					"#line3",
					"#indicator",
					"#line4",
					"#upside-down-text",
					"#line5",
					"#relay-text",
					"#line6",
					"#drawers-text",
					"#line7",
					"#solenoid-text",
					"#line8",
					"#optical-sensor-text",
					"#line9",
					"#plc-text"
				],
				{ opacity: 0, rotation: 0.01, z: 0.01 }
			);
		}

		if (window.matchMedia("(max-width: 1000px)").matches) {
			const tl = gsap.timeline({
				defaults: { ease: "power2.inOut", duration: 1 },
				scrollTrigger: {
					trigger: "#ourcell",
					pin: true, // pin the trigger element while active
					start: "top top", // when the top of the trigger hits the top of the viewport
					end: "+=1000", // end after scrolling 500px beyond the start
					scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				}
			});

			hideSvgAll(tl);

			tl.set("#svg1", {
				opacity: 0,
				transform: "translateX(20px) translateY(100px) scale(0.96)"
			});

			tl.to("#svg1", {
				opacity: 1,
				duration: 100,
				ease: "power2.inOut",
				transform: "translateX(20px) translateY(0px)",
				rotation: 0.1,
				z: 0.01
			});

			return;
		}

		const tl = gsap.timeline({
			defaults: { ease: "power2.inOut", duration: 1 },
			scrollTrigger: {
				trigger: "#ourcell",
				pin: true, // pin the trigger element while active
				start: "top top", // when the top of the trigger hits the top of the viewport
				end: "+=6000", // end after scrolling 500px beyond the start
				scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			}
		});

		tl.set(".statictext", { rotation: 0.1, z: 0.01 });

		tl.set("#svg1", {
			opacity: 0,
			transform: "translateX(20px) translateY(100px) scale(0.96)"
		});

		hideSvgAll(tl);

		tl.to("#svg1", {
			opacity: 1,
			duration: 100,
			ease: "power2.inOut",
			transform: "translateX(20px) translateY(0px)",
			rotation: 0.1,
			z: 0.01
		});

		tl.to("#svg1", {
			duration: 100,
			ease: "power2.inOut",
			transform: "translateX(-260px)"
		});
		// Pair 1
		tl.add("step1")
			.fromTo(
				"#line1",
				{ drawSVG: "0%", opacity: 1 },
				{ drawSVG: "100%", duration: 25, opacity: 1 },
				"step1"
			)
			.to("#conveyor", { opacity: 1, rotation: 0.1, z: 0.01, duration: 25 }, "step1+=0.5")

			// Pair 2
			.add("step2", ">")
			.fromTo(
				"#line2",
				{ drawSVG: "0%", opacity: 1 },
				{ drawSVG: "100%", duration: 25, opacity: 1 },
				"step2"
			)
			.to("#startstop", { opacity: 1, rotation: 0.1, z: 0.01, duration: 25 }, "step2+=0.4")

			// Pair 3
			.add("step3", ">")
			.fromTo(
				"#line3",
				{ drawSVG: "0%", opacity: 1 },
				{ drawSVG: "100%", duration: 25, opacity: 1 },
				"step3"
			)
			.to("#indicator", { opacity: 1, rotation: 0.1, z: 0.01, duration: 25 }, "step3+=0.4")
			.add("delay1")
			.to("#svg1", { duration: 50, opacity: 1 })
			.add("step4")
			.to(["#line1", "#line2", "#line3"], { drawSVG: "0%", duration: 25 }, ">")
			.to(["#conveyor", "#startstop", "#indicator"], { opacity: 0, duration: 25 }, ">")
			// Pair 4
			.add("step5")
			.fromTo(
				"#line4",
				{ drawSVG: "0%", opacity: 1 },
				{ drawSVG: "100%", duration: 25, opacity: 1 },
				"<0.5"
			)
			.to("#upside-down-text", { opacity: 1, rotation: 0.1, z: 0.01, duration: 25 }, ">")
			// Pair 5
			.add("step6")
			.fromTo(
				"#line5",
				{ drawSVG: "0%", opacity: 1 },
				{ drawSVG: "100%", duration: 25, opacity: 1 },
				"<0.5"
			)
			.to("#relay-text", { opacity: 1, rotation: 0.1, z: 0.01, duration: 25 }, ">")
			// Pair 6
			.add("step7")
			.fromTo(
				"#line6",
				{ drawSVG: "0%", opacity: 1 },
				{ drawSVG: "100%", duration: 25, opacity: 1 },
				"<0.5"
			)
			.to("#drawers-text", { opacity: 1, rotation: 0.1, z: 0.01, duration: 25 }, ">")
			.add("delay2")
			.to("#svg1", { duration: 100, opacity: 1 })
			.add("step8")
			.to(["#line4", "#line5", "#line6"], { drawSVG: "0%", duration: 25 })
			.to(
				["#upside-down-text", "#relay-text", "#drawers-text"],
				{ opacity: 0, duration: 25 },
				"step8+=0.5"
			)
			.add("step9")
			.to("#svg1", {
				duration: 100,
				ease: "power2.inOut",
				transform: "translateX(260px)"
			})
			// Pair 7
			.add("step10")
			.fromTo(
				"#line7",
				{ drawSVG: "100% 100%", opacity: 1 },
				{ drawSVG: "0% 100%", duration: 25, opacity: 1 },
				">"
			)
			.to("#solenoid-text", { opacity: 1, rotation: 0.1, z: 0.01, duration: 25 }, "<-=0.1") // Pair 8
			.add("step11")
			.fromTo(
				"#line8",
				{ drawSVG: "100% 100%", opacity: 1 },
				{ drawSVG: "0% 100%", duration: 25, opacity: 1 }
			)
			.to("#optical-sensor-text", { opacity: 1, rotation: 0.1, z: 0.01, duration: 25 }, "<+=0.1") // Pair 9
			.add("step12")
			.fromTo(
				"#line9",
				{ drawSVG: "100% 100%", opacity: 1 },
				{ drawSVG: "0% 100%", duration: 25, opacity: 1 }
			)
			.to("#plc-text", { opacity: 1, rotation: 0.1, z: 0.01, duration: 25 }, "<+=0.1")
			.add("delay3")
			.to("#svg1", { duration: 50, opacity: 1 });

		return () => {
			tl.kill();
		};
	});
</script>

<div id="ourcell">
	<h2 class="statictext">Our Cell</h2>
	<p class="statictext">
		We&apos;ve specifically designed our mechatronics cell with simplified learning and
		accessibility in mind. Learn at your own pace.
	</p>
	{@html svg}
</div>

<style>
	#ourcell {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		max-width: 1500px;
		margin: 0 auto;
		text-align: center;
		padding-top: 4rem;
		padding-bottom: 12rem;
		h2 {
			rotate: 0.01;
			z-index: 0.01;
		}
		p {
			max-width: 600px;
			text-align: center;
			margin: 0 auto;
			margin-top: 1rem;
			rotate: 0.01;
			z-index: 0.01;

			margin-bottom: 2rem;
		}
	}
</style>
