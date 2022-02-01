<template>
    <div class="side-bar-filters">
        <div
            class="filters-container"
            v-for="filter in filters"
            :key="filter.name"
        >
            <button
                class="filter-title"
                :class="filter.visible ? null : 'collapsed'"
                :aria-expanded="filter.visible ? 'true' : 'false'"
                :aria-controls="`filter-${filter.id}`"
                @click="filter.visible = !filter.visible"
            >
                {{ filter.name }}
            </button>
            <b-collapse :id="`filter-${filter.id}`" v-model="filter.visible">
                <ul>
                    <li
                        v-for="categorie in filter.categories"
                        :key="categorie.index"
                    >
                        <label class="custom-check"
                            >{{ categorie }}
                            <input type="checkbox" />
                            <span class="checkmark">
                                <b-icon-check></b-icon-check
                            ></span>
                        </label>
                    </li>
                </ul>
            </b-collapse>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBarFilter",

    data() {
        return {
            filters: [
                {
                    id: 1,
                    name: "Filter 1",
                    categories: ["Category 1", "Category 2"],
                    visible: true,
                },
                {
                    id: 2,
                    name: "Filter 2",
                    categories: ["Category 1", "Category 2"],
                    visible: true,
                },
                {
                    id: 3,
                    name: "Filter 3",
                    categories: ["Category 1", "Category 2"],
                    visible: false,
                },
                {
                    id: 4,
                    name: "Filter 4",
                    categories: ["Category 1", "Category 2"],
                    visible: false,
                },
                {
                    id: 5,
                    name: "Filter 5",
                    categories: ["Category 1", "Category 2"],
                    visible: false,
                },
                {
                    id: 6,
                    name: "Filter 6",
                    categories: ["Category 1", "Category 2"],
                    visible: false,
                },
                {
                    id: 7,
                    name: "Filter 7",
                    categories: ["Category 1", "Category 2"],
                    visible: false,
                },
                {
                    id: 8,
                    name: "Filter 8",
                    categories: ["Category 1", "Category 2"],
                    visible: false,
                },
                {
                    id: 9,
                    name: "Filter 9",
                    categories: ["Category 1", "Category 2"],
                    visible: false,
                },
                {
                    id: 10,
                    name: "Filter 10",
                    categories: ["Category 1", "Category 2"],
                    visible: false,
                },
            ],
        };
    },
};
</script>