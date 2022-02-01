<template>
    <div class="categories">
        <div class="container">
            <ul>
                <li class="categories-title"><span>Categorias</span> <button v-on:click="$toggleSideBar()"><b-icon-x-circle-fill></b-icon-x-circle-fill></button></li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category" >Category 1</nuxt-link>
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category2">Category 2</nuxt-link>
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category3">Category 3</nuxt-link>
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category4">Category 4</nuxt-link>
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category5">Category 5</nuxt-link>
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category6">Category 6</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Categories",
};
</script>