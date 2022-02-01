<template>
    <div class="categories">
        <div class="container">
            <ul>
                <!-- <li class="categories-title"><span>Categorias</span> <button v-on:click="$toggleSideBar()"><b-icon-x-circle-fill></b-icon-x-circle-fill></button></li> -->
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category">
                        <fa icon="bars" />Todas as Categorias</nuxt-link
                    >
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category1">Categoria</nuxt-link>
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category2">Categoria</nuxt-link>
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category3">Categoria</nuxt-link>
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category4">Categoria</nuxt-link>
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category5">Categoria</nuxt-link>
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category6">Categoria</nuxt-link>
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category6">Categoria</nuxt-link>
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category6">Categoria</nuxt-link>
                </li>
                <li v-on:click="$toggleSideBar()">
                    <nuxt-link to="/category7">Categoria</nuxt-link>
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