<template>
    <div class="star-rating">
        <b-icon-star-fill
            v-for="fill in this.starRate"
            :key="fill.lenght"
        ></b-icon-star-fill>
        <b-icon-star v-for="star in 5 - this.starRate" :key="star.lenght"></b-icon-star>
    </div>
</template>

<script>
export default {
    name: "StarRating",
    props: {
        starRate: {
            required: true,
        },
    },

    data() {
        return {
            stars: [{ name: "b-icon-star" }, { name: "b-icon-star-fill" }],
            rate: 0,
        };
    },

    // beforeMount() {
    //     this.rate = this.starRate ? this.starRate : 0;
    //     console.log(this.starRate, this.rate);
    // },
};
</script>