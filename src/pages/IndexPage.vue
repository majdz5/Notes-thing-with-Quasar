<script lang="ts">

/* eslint-disable */
import Container from 'src/components/Containerdot.vue'
import NoteCard from 'src/components/NoteCard.vue'
import {useLocalNotes} from 'src/useLocalstorage'
import {defineComponent }from 'vue'
import {useRouter} from 'vue-router'


export default defineComponent( {
  components: {NoteCard, Container},
  name: 'paegIndex',
  setup(){
    const notes = useLocalNotes()
    const router = useRouter()
    return {router, notes}
  }
})




</script>
<template>

  <q-page padding>
    <Container>
      <div>
        <h3>Your Notes</h3>
      </div>
    </Container>
  </q-page>


</template>