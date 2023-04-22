<script >
import SelectsHeader from './SelectsHeader.vue'
export default {
    name: 'AppHeader',
    components: {
        SelectsHeader
    }
}
</script>
<template>
    <header>
        <div class=" navbar">
            <div class=" navbar-brand">
                <img src="../assets/img/BollFlix Logo.jpg" alt="">
            </div>
            <div class=" nav-item">
                <SelectsHeader></SelectsHeader>
            </div>
        </div>
    </header>
</template>

