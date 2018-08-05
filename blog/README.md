---
home: false
title: Blog
---

# Blog 

<div class="posts">
    <article class="post" v-for="post in posts()" :key="post.frontmatter.date">
      <router-link :to="post.path">
        <img class="entry-image attachment-post" :src="post.frontmatter.image">
      </router-link>
      <ul class="post-categories">
        <li class="entry-categories" v-for="tag in post.frontmatter.tags">{{tag}} </li>
      </ul>
      <header class="entry-header">
        <h4 class="entry-title">
          <router-link :to="post.path">
            {{ post.title }}
          </router-link>
        </h4>
      </header>
      <div class="entry-content">
        <p>
          {{ post.frontmatter.description }}
        </p>
      </div>
      <p class="entry-meta">
        <time class="entry-time" itemprop="datePublished" :datetime="new Date(post.frontmatter.date)">
          {{ new Date(post.frontmatter.date).toLocaleDateString() }}
        </time>
      </p>
    </article>
</div>




<script>
export default {
    methods: {
        posts_with_tag(tag) {
            return this.$site.pages
            .filter((page) => page.frontmatter.tags)
            .filter((page) => page.frontmatter.tags.includes(tag))
        },
        posts() {
            var thisPage = this.$page;
            return this.$site.pages
            .filter((page) => {return page != thisPage && page.path.startsWith("/blog/")})
        }
    },
}
</script>