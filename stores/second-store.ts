export const useSecondStore = defineStore('secondStore', () => {
    const firstName = ref('Alexander');
    const lastName = ref('Nefedov');
    const age = ref(24);
    const about = ref('any info about me');

    const fullName = computed(() => `${firstName.value} ${lastName.value}`);

    function incrementAge() {
        age.value++;
    }

    return { firstName, lastName, age, about, fullName, incrementAge };
})
