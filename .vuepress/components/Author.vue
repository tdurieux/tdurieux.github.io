<template>
	<span class="author">
		<a :href="url" v-if="url" target="_blank" rel="noopener noreferrer">
			<span class="lastname">{{ lastname }}, </span>
			<span class="firstname">{{ firstname[0] }}.</span>
		</a>
		<span v-else>
			<span class="lastname">{{ lastname }}, </span>
			<span class="firstname">{{ firstname[0] }}.</span>
		</span>
	</span>
</template>

<script>
export default {
  props: ['firstname', 'lastname', 'url'],
}
</script>