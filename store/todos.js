import firebase from '../plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const todosRef = db.collection('todos')

export const state = () => ({
  todos: [],
  editId: '',
  editText: '',
  editForm: false
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('todos', todosRef)
  }),
  add: firestoreAction((context, name) => {
    if(name.trim()) {
      todosRef.add({
        name: name,
        done: false,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    todosRef.doc(id).delete()
  }),
  edit: firestoreAction((context, {id, text}) => {
    todosRef.doc(id).update({
      name: text
    })
  }),
  toggle: firestoreAction((context, todo) => {
    todosRef.doc(todo.id).update({
      done: !todo.done
    })
  })

}

export const getters = {
  orderdTodos (state) {
    return _.sortBy(state.todos, 'created')
  },
  stateEditForm(state) {
    return state.editForm
  }
}