import { reactive, toRefs } from 'vue'

const state = reactive({
  baseColors: ['#903345', '#F2D3AC', '#F2F2F2', '#000000'],
  selectedBaseColor: '#903345',
  cushionColors: ['#e5abb6', '#F2F2F2', '#f5f1eb', '#050505'],
  selectedCushionColor: '#F2F2F2'
})

export function useState() {
  return {
    ...toRefs(state)
  }
}