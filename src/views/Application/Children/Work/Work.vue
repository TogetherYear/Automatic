<script lang="ts" setup>
import { Work } from './Work';

const instance = new Work()
const {

} = instance.InitStates()
instance.InitHooks()
instance.Run()
</script>

<template>
    <div class="Work">
        Work
    </div>
</template>

<style lang="scss" scoped>
@import "./Work.scss"
</style>