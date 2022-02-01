<template>
    <button @mouseover="hover = true" @mouseleave="hover = false" v-on:click.prevent="activeFavorite()" class="favorite" :class="{ active: (hover || active) }">
        <b-icon-heart-fill v-if="(hover || active)"></b-icon-heart-fill>
        <b-icon-heart v-else></b-icon-heart>
    </button>
</template>

<script>
export default {
    name: "Favorite",
    data() {
        return {
            hover: false,
            active: false,
        };
    },

    methods: {
        activeFavorite() {
            this.active = !this.active;
        },
    },
};
</script>
