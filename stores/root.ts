export const useSampleStore = defineStore('sample', {
    state: () => {
      return { count: 0 }
    },

    actions: {
      increment() {
        this.count++
      },
    },

    getters: {
        getCount(state) {
            return state.count
        }
    }
  })