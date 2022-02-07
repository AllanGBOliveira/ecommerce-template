<template>
    <div id="categories" class="categories">
        <div class="container">
            <ul class="categories-list">
                <li>
                    <button class="all-categories">
                        <fa icon="bars" />Todas as Categorias
                    </button>
                    <div class="categories-menu">
                        <ul class="menu-content">
                            <li
                                class="categorie-item"
                                v-for="(categorie, index) in categories"
                                :key="index"
                            >
                                <button
                                    :class="
                                        activeMenu === `menu-item-${index + 1}`
                                            ? 'show active'
                                            : ''
                                    "
                                    v-on:click="
                                        activeMenu = `menu-item-${index + 1}`
                                    "
                                >
                                    {{ categorie.categorie }}
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div
                                class="tab-pane fade"
                                :class="
                                    activeMenu === `menu-item-${index + 1}`
                                        ? 'show active'
                                        : ''
                                "
                                :id="`menu-item-${index + 1}`"
                                v-for="(item, index) in categories"
                                :key="index"
                            >
                                <ul>
                                    <li
                                        v-for="(subItem, key) in item.items"
                                        :key="key"
                                    >
                                        <nuxt-link :to="subItem.path">
                                            {{ subItem.name }}</nuxt-link
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li v-for="(categorie, index) in items" :key="index">
                    <nuxt-link :to="categorie.path">{{
                        categorie.name
                    }}</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Categories",

    data() {
        return {
            toggleCategories: false,
            activeMenu: "menu-item-1",

            items: [
                {
                    name: "Categoria 1",
                    path: "/category",
                },
                {
                    name: "Categoria 2",
                    path: "/category2",
                },
                {
                    name: "Categoria 3",
                    path: "/category3",
                },
                {
                    name: "Categoria 4",
                    path: "/category4",
                },
                {
                    name: "Categoria 5",
                    path: "/category5",
                },
                {
                    name: "Categoria 6",
                    path: "/category6",
                },
                {
                    name: "Categoria 7",
                    path: "/category7",
                },
                {
                    name: "Categoria 8",
                    path: "/category8",
                },
            ],
            categories: [
                {
                    categorie: "Categoria 1",
                    items: [
                        {
                            name: "Categoria 1",
                            path: "/category",
                        },
                        {
                            name: "Categoria 2",
                            path: "/category",
                        },
                        {
                            name: "Categoria 3",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4",
                            path: "/category",
                        },
                    ],
                },
                {
                    categorie: "Categoria 2",
                    items: [
                        {
                            name: "Categoria 2 1",
                            path: "/category",
                        },
                        {
                            name: "Categoria 2 2",
                            path: "/category",
                        },
                    ],
                },
                {
                    categorie: "Categoria 3 Lorem ipsum dolor sit",
                    items: [
                        {
                            name: "Categoria 3 1",
                            path: "/category",
                        },
                        {
                            name: "Categoria 3 2",
                            path: "/category",
                        },
                        {
                            name: "Categoria 3 3",
                            path: "/category",
                        },
                        {
                            name: "Categoria 3 4",
                            path: "/category",
                        },
                    ],
                },
                {
                    categorie: "Categoria 4",
                    items: [
                        {
                            name: "Categoria 4 1",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 2",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 3",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 4",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 5",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 6",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 7",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 8",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 9",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 10",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 11",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 12",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 13",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 14",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 15",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 16",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 17",
                            path: "/category",
                        },
                        {
                            name: "Categoria 4 18",
                            path: "/category",
                        },
                    ],
                },
            ],
        };
    },
};
</script>