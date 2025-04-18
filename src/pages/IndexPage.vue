<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Container from 'src/components/NoteContainer.vue'
import NoteCard from 'src/components/NoteCard.vue'
import { useLocalStorage} from 'assets/notes'
import type { Note } from 'assets/notes'


const notes = useLocalStorage<Note[]>('notes', [])
const router = useRouter()
console.log(notes)
</script>

<template>
  <q-page padding>
    <Container>
      <div class="row items-center justify-between">
        <h3>Your Notes</h3>
        <div>
          <q-btn round color="positive" icon="add" to="/new"></q-btn>
        </div>
      </div>
      <NoteCard 
        v-for="note in notes"
        :key="note.id"
        :title="note.title"
        :description="note.description"  
        @click="router.push(`/note/${note.id}`)"
      />
      <div v-if="notes.length === 0">You have not created any notes yet!</div>
    
    </Container>
  </q-page>
</template>
