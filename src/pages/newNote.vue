
<script lang="ts" setup>

import {ref } from 'vue'
import {useRouter} from 'vue-router'
import Container from 'src/components/NoteContainer.vue'
import { useLocalStorage } from 'assets/notes'
import type {Note } from 'assets/notes'


const notes = useLocalStorage<Note[]>('notes', [])
const router = useRouter()

const title = ref('')
const description = ref('')
const content = ref('')


function submitNote(){
    notes.value.push({
        id: crypto.randomUUID(),
        title: title.value,
        description: description.value,
        content: content.value
    })

    router.push('/').catch(()=>{})
}
</script>

<template>
    <q-page padding>
        <Container>
            <h3>New Notes</h3>
            <form @submit.prevent="submitNote">
                <q-input class="q-mt-sm" outlined v-model="title" label="Title"></q-input>
                <q-input class="q-mt-sm" outlined v-model="description" label="Description" dense></q-input>
                
            <q-card flat bordered class="q-mt-sm">
                <q-editor v-model="content"  min-height="5rem"/></q-card>


            <div class="q-mt-sm">
                <q-btn to="/" @click="router.push('/')" color="grey">Cancel</q-btn>
                <q-btn class="q-ml-sm" color="positive" type="submit">Create</q-btn>
            </div>    
            </form>

        </Container>

    </q-page>
</template>