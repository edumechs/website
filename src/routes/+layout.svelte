<script lang="ts">
	import "$lib/global.css";

	let { children } = $props();
	import { page } from "$app/state";
	import Footer from "$lib/Footer.svelte";

	$effect(() => {
		page.url.pathname;

		if (typeof gtag !== "undefined") {
			gtag("config", "MEASUREMENT_ID", {
				page_title: document.title,
				page_path: page.url.pathname
			});
		}

		const elements = document.querySelectorAll(".fadeinz");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<link rel="icon" href="./favicon.ico?v=2" />
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-KMLJ7CQJ15"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag("js", new Date());

		gtag("config", "G-KMLJ7CQJ15");
	</script>
</svelte:head>

<div id="smooth-wrapper">
	<div id="smooth-content">
		<div class="page-content">
			{@render children()}
		</div>
		<Footer />
	</div>
</div>
