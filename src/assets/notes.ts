import {ref, watch } from 'vue';




export interface Note {
    id: string;
    title: string;
    description: string;
    content: string;

}
export function useLocalStorage<T>(key: string, defaultValue: T){
    const value = ref<T>(defaultValue)

    const readFromLocalStorage = ()=> {
        const storedValue = localStorage.getItem(key)
        if (storedValue){
            value.value = JSON.parse(storedValue)

        }
    }
    watch(value, ()=> {
        localStorage.setItem(key, JSON.stringify(value.value))

    }, {deep: true})

    readFromLocalStorage()

    return value
}