new Vue({
    el: '#desafio',
    data:{
        valor: ''
    },
    methods: {
        exibirAlert(){
            alert('Estou alertando agora!')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})