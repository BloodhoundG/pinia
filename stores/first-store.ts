export const useFirstStore = defineStore('firstStore', {
    state: () => ({
        firstName: 'Александр',
        lastName: 'Нефедов',
        age: 24,
        about: 'Какая-то информация о себе'
    }),
    getters: {
        fullName: (state) => `${state.firstName} ${state.lastName}`
    },
    actions: {
        incrementAge() {
            this.age++;
        }
    }
})
