<template>
  <div>
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">PHYTHON - VUE - MYSQL - CRUD</a>
      </div>
    </nav>
    <div class="container mt-5"><router-view/></div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css);
@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css);

</style>
