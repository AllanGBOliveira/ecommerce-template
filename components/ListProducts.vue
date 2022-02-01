<template>
    <div class="row products-row">
        <div
            v-for="item in items"
            :key="item.name"
            class="col-sm-6 col-md-4 col-xl-3"
        >
            <nuxt-link to="/single" class="item">
                <div v-if="item.sale" class="item-sale">{{ item.sale }}%</div>
                <div class="item-header">
                    <StarRating :star-rate="item.rating" />
                    <div class="favorite-container">
                        <Favorite />
                    </div>
                </div>
                <div class="thumb">
                    <img :src="item.thumb" alt="" />
                </div>
                <div class="item-info">
                    <p class="item-name">
                        {{ item.name }}
                    </p>
                    <p v-if="item.sale" class="item-old-price">
                        R${{ item.oldPrice }}
                    </p>
                    <p class="item-price">R${{ item.price }}</p>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListProducts",

    data() {
        return {
            items: [
                {
                    sale: null,
                    rating: 5,
                    thumb: "/spider-man-ps4.jpg",
                    name: "Marvels Spider Man PS4 Insomaniac",
                    oldPrice: null,
                    price: "99,9",
                },
                {
                    sale: 50,
                    rating: 3,
                    thumb: "/himym.jpg",
                    name: "Caneca How I Met Your Mother",
                    oldPrice: "60,00",
                    price: "30,00",
                },
                {
                    sale: 25,
                    rating: 4,
                    thumb: "/homer-shirt.jpg",
                    name: "Camiseta Homer Simpson",
                    oldPrice: "60,00",
                    price: "45,00",
                },
                {
                    sale: null,
                    rating: 5,
                    thumb: "/ps5.jpg",
                    name: "Console PlayStation® 5 – Sony",
                    oldPrice: null,
                    price: "6.299,78",
                },
            ],
        };
    },
};
</script>