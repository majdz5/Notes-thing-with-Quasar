<script lang="ts">
export default {
    props: {
        title:String,
        description:String
    }
}
</script>
<template>

    <q-card flat bordered class="q-mb-sm cursor-pointer" @click="$emit('click', $event)">


        <q-card-selection class="q-pt-xs">
            <div class="text-h5 q-mt-sm q-mb-xs"> {{ title }}</div>
            <div class="text-caption text-grey">
                {{ description }}
            </div>
        </q-card-selection>
    </q-card>


</template>