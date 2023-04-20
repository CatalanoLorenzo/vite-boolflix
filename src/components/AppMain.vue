<script >
import CardsGeneration from './CardsGeneration.vue'
export default {
    name: 'AppMain',
    components: {
        CardsGeneration
    },
}
</script>
<template>
    <main>
        <div class="container">
            <div class="row  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
                <CardsGeneration ></CardsGeneration>
            </div>
        </div>
    </main>
</template>

