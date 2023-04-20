<script >
import { store } from "../store.js";
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>
<template>
    <header>
        <div class=" navbar">
            <div class=" navbar-brand">
                <img src="../assets/img/BollFlix Logo.jpg" alt="">
            </div>
            <div class=" nav-item">
                <section class="serch_bar">
                    <input type="text" name="" id="" v-model="store.querySerch" @change="store.getDataByApi()">
                </section>
            </div>
        </div>
    </header>
</template>

