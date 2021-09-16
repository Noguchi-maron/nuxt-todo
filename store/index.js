import { vuexfireMutations } from 'vuexfire'

export const mutations = {
  editFormDisplay(state) {
    state.editForm = true
  },
  editFormHidden(state) {
    state.editForm = false
  },
  editPre (state, {id, name})  {
    state.editId = id
    state.editText = name
  },
  editInit (state) {
    state.editId = ''
    state.editText = ''
  },

  ...vuexfireMutations
}