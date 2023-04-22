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
            <!-- Logo Site -->
            <div class=" navbar-brand">
                <img src="../assets/img/BollFlix Logo.jpg" alt="">
            </div>
            <!-- selects for serch  -->
            <div class=" nav-item">
                <SelectsHeader></SelectsHeader>
            </div>
        </div>
    </header>
</template>

