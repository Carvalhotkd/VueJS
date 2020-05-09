import Vue from 'vue'
export default new Vue({
    methods:{
        alteraridade(idade){
            this.$emit('idadeMudou', idade)
        },
        quadoIdadeMudar(callback){
            this.$on('idadeMudou', callback)
        }
    }
})