<script lang="ts" setup>
import { Store } from './Store';

const instance = new Store()
const {

} = instance.InitStates()
instance.InitHooks()
instance.Run()
</script>

<template>
    <div class="Store">
        Store
    </div>
</template>

<style lang="scss" scoped>
@import "./Store.scss"
</style>