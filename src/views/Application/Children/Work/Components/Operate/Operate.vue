<script lang="ts" setup>
import { Work } from '../../Work'
import { inject } from 'vue';

const instance = inject('instance') as Work

const {

} = instance.operate.InitStates()
instance.operate.InitHooks()
instance.operate.Run()
</script>

<template>
    <div class="Operate">

    </div>
</template>

<style lang="scss" scoped>
@import "./Operate.scss"
</style>