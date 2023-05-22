const { createApp } = Vue  //creo un objeto VUE llamdo createApp

// const app = Vue.createApp({
createApp({
        data() {
    return {
        
       url: 'https://api.thedogapi.com/v1/breeds?limit=small&page=0',
       personajes: []
        }
    },
    methods: {
        async fetchData(url) {
            const res = await fetch(url);
            data = await res.json();
            console.log(data);
            this.personajes = data;
            }
    },
    async created() {
        await this.fetchData(this.url)
    }
}).mount('#app')



