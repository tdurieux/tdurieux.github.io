---
home: false
title: Projects
---

# Projects

A list of my active projects that are also available on [GitHub](https://github.com/tdurieux).

<div class="posts">
  <article class="post" v-for="project in projects()">
    <router-link :to="project.path">
      <span class="img-wrap">
        <img class="entry-image attachment-post" :article-title="project.title" :src="$withBase(project.frontmatter.image || '')">
      </span>
    </router-link>
    <ul class="post-categories">
      <li class="entry-categories" v-for="tag in project.frontmatter.tags">{{tag}} </li>
    </ul>
    <header class="entry-header">
      <h4 class="entry-title">
        <router-link :to="project.path">
          {{ project.title }}
        </router-link>
      </h4>
    </header>
    <div class="entry-content">
      <p>
        {{ project.frontmatter.description }}
      </p>
      <div v-html="project.excerpt"></div>
    </div>
    <p class="entry-meta">
      <a v-if="project.frontmatter.github" :href="project.frontmatter.github">GitHub</a>
    </p>
  </article>
</div>

<script>
export default {
    methods: {
        projects() {
            var thisPage = this.$page;
            return this.$site.pages
            .filter((page) => {return page != thisPage && page.path.startsWith("/projects/")})
        }
    },
}
</script>