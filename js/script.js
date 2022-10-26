const {createApp}= Vue;
createApp({
    // info dati ("costruttore")
    data(){
        return{
            message:'Hello Vue !',
            img: 'https://www.geekandjob.com/uploads/wiki/f236a1aa005ef9a93041f294749e86d1.png'

        }
    }
}).mount('#app')

