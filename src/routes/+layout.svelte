<script lang="ts">
	import "$lib/global.css";

	let { children } = $props();
	import { page } from "$app/state";

	$effect(() => {
		page.url.pathname;

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
</svelte:head>

<div id="smooth-wrapper">
	<div id="smooth-content">
		{@render children()}
	</div>
</div>
