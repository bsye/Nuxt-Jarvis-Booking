<template>
    {{ 'Hello World' }}
    <button @click="addOne()">
        {{ '+1 button' }}
    </button>
    <p> {{ sampleCount.getCount }} </p>
</template>

<script>
export default {
    setup() {
        const sampleCount = useSampleStore()

        return {
            sampleCount
        }
    },

    data() {
        return {
            anotherCounter: 3,
        }
    },

    methods: {
        addOne() {
            this.sampleCount.increment()
        }
    }
}
</script>

<style lang="scss" scoped>
</style>