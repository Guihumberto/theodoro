<template>
    <div class="contentteste">
        <ul>
            <li>X - {{ x }}</li>
            <li>Y - {{ y }}</li>
        </ul>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted} from 'vue';

    const x = ref(0)
    const y = ref(0)

    onMounted(() => {
        window.addEventListener('mousemove', mouseEvent => {
            x.value = mouseEvent.pageX
            y.value = mouseEvent.pageY
        })
    })

    onUnmounted(() => {
        window.removeEventListener('mousemove', mouseEvent => {
            x.value = mouseEvent.pageX
            y.value = mouseEvent.pageY
        })
    })


</script>

<style lang="scss" scoped>
.contentteste {
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>