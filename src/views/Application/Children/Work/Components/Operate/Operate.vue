<script lang="ts" setup>
import { Work } from '../../Work'
import { inject } from 'vue';

const instance = inject('instance') as Work

const {
    dom,
} = instance.operate.InitStates()
instance.operate.InitHooks()
instance.operate.Run()
</script>

<template>
    <div class="Operate">
        <span class="Canvas" ref="dom"></span>
    </div>
</template>

<style lang="scss" scoped>
@import "./Operate.scss"
</style>