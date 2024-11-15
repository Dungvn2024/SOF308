<template>

<div class="container">
    <header class="row bg-warning p-2">Header</header>
    <nav class="row bg-primary p-2">Nav</nav>
    <section class="row">
    <aside class="col-sm-4 bg-success p-5">Side bar</aside>
    <article class="col-sm-8 bg-info p-5">Main content</article>
    </section>
    <footer class="row bg-danger p-3">Footer</footer>
    </div>
</template>

<script>

export default {
name: "Bai1Page",
};
</script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<style>
header, nav, footer, aside, article {
  color: white; /* Set text color to white for better readability */
  font-weight: bold; /* Make section titles bold */
}
</style>