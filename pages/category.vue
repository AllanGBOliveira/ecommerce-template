<template>
    <div>
        <div class="list-products">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <SideBarFilter/>
                    </div>
                    <div class="col-lg-9">
                        <ListProducts />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "category",
};
</script>