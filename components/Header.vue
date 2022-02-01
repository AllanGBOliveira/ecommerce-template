<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-lg justify-content-between">
                <nuxt-link class="navbar-brand" to="/">
                    <picture>
                        <source
                            media="(max-width: 767px)"
                            srcset="/logo-2x.png"
                        />
                        <img
                            src="/logo.png"
                            class="img-cover"
                        /> </picture
                ></nuxt-link>

                <div class="search-box">
                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Digite aqui o que você procura"
                    />
                    <button type="submit">
                        <b-icon-search></b-icon-search>
                    </button>
                </div>

                <div class="user-buttons">
                    <nuxt-link to="/login"
                        ><b-icon-person-circle></b-icon-person-circle>
                    </nuxt-link>
                    <nuxt-link to="/favorites"
                        ><b-icon-suit-heart-fill></b-icon-suit-heart-fill>
                    </nuxt-link>
                    <nuxt-link to="/cart"
                        ><b-icon-cart-fill></b-icon-cart-fill>
                    </nuxt-link>
                    <button
                        v-on:click="$toggleSideBar()"
                        class="toggle-side-bar"
                    >
                        <b-icon-list></b-icon-list>
                    </button>
                </div>
                <!-- <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button> -->
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            toggle: false,
        };
    },

    mounted() {
        this.$menuScroll();
    },
};
</script>