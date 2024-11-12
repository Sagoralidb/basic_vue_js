var myapp = new Vue({
    el:"#my-app",
    data:{
        text:'',
    },
    methods:{
        keypressFunctions:function(event){
            console.log(event);
            this.text = event.key;
        }
    }
})