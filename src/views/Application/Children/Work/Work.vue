<script lang="ts" setup>
import { provide } from 'vue';
import { Work } from './Work';
import WorkVue from './Components/Operate/Operate.vue'

const instance = new Work()

provide('instance', instance)

const {

} = instance.InitStates()
instance.InitHooks()
instance.Run()
</script>

<template>
    <div class="Work">
        <WorkVue></WorkVue>
    </div>
</template>

<style lang="scss" scoped>
@import "./Work.scss"
</style>