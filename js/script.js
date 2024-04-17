const {createApp} = Vue;

createApp({
    data(){
        return {
            user: "",
            result: "Ciao qui avviene la stampa",
            imgName: "./img/01.webp",
            imgAlt: "Miles Morales"
        }
    },
    
    methods: {
        printUser: function(){
            this.result = this.user
        }
    }
}).mount("#app")