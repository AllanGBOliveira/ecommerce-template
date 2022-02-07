<template>
    <main class="error-page">
        <div class="container">
            <b-icon-exclamation-diamond></b-icon-exclamation-diamond>
            <p class="error-type">{{ error.statusCode }}</p>
            <p class="error-msg">{{error.message}}</p>

            <nuxt-link to="/">Início <b-icon-arrow-return-left></b-icon-arrow-return-left></nuxt-link>
        </div>
    </main>
</template>

<script>
export default {
    props: ["error"],
    //   layout: 'blog' // you can set a custom layout for the error page
};
</script>