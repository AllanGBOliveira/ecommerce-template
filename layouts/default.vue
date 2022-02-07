<template>
    <div>
        <Overlay />
        <Header />
        <Categories />
        <div id="wrapper">
            <Nuxt />
        </div>
        <Footer />
        <!-- <K13Cookies /> -->
    </div>
</template>

<script>
export default {
    mounted() {
        this.$mainHeight();
        this.$toggleCategoriesMenu();
    },
    // transition(to, from) {
    //     if (!from) {
    //         return "slide-left";
    //     }
    //     return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
    // },
};
</script>

