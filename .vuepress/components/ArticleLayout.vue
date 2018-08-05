<template>
  <div class="page articlePage post">
    <div class="header">
      <img class="entry-image " :src="$page.frontmatter.image">
      <header class="entry-header">
        <h1 class="entry-title" itemprop="headline">{{ $page.title }}</h1> 
        <p class="entry-meta">
          <span class="entry-categories" v-for="tag in $page.frontmatter.tags">
            {{tag}} ·
          </span> 
          <time class="entry-time" itemprop="datePublished" :datetime="new Date($page.frontmatter.date)">
            {{ new Date($page.frontmatter.date).toLocaleDateString() }}
          </time>
        </p>
      </header>
    </div>
    <article>
      <Content :custom="true"/>
    </article>
  </div>
</template>