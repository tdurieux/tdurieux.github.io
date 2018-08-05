<template>
	<div class="cv">
		<h3>
			<a :href="url">{{ name }}</a>&nbsp;
			<div class="time" v-if="date">/ {{ date }} </div>
		</h3>
		<div class="description">
			<span class="role" v-if="authors">
				<Author 
					:lastname="author.lastname"
					:firstname="author.firstname"
					:url="author.url"
					v-for="author in authors"
					:key="author.lastname"></Author>&nbsp;<span v-if="description">-  </span></span>
			</span>
			<span class="role" v-if="role">{{ role }} <span v-if="description">- </span></span>
			{{ description }}
	  	</div>
	</div>
</template>

<script>
export default {
  props: ['url', 'name', 'date', 'description', 'authors', 'role'],
}
</script>