<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { Spring } from 'svelte/motion';
	import { DirectionalLight } from 'three';
	import Cell from './cell.svelte';

	interactivity();
	const scale = new Spring(15);

	let rotation = 0;
	useTask((delta) => {
		rotation += delta / 5;
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[4, 6, 8]}
	oncreate={(ref) => {
		ref.lookAt(0, 1, 0);
	}}
/>

<T.DirectionalLight position={[0, 10, 10]} />

<Cell
	position.y={1}
	rotation.y={rotation}
	scale={scale.current}
	onpointerenter={() => {
		scale.target = 25;
	}}
	onpointerleave={() => {
		scale.target = 20;
	}}
>
	<T.BoxGeometry args={[1, 2, 1]} />
	<T.MeshStandardMaterial color="orange" />
</Cell>
