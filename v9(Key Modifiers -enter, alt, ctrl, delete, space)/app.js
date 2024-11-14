var myapp = new Vue({
    el:"#my-app",
    data:{
        text:'',
        name:'Sagor Ali BD',
        email:'mdsagorali@gamil.com',
    },
    methods:{
        keypressFunctions:function(event){
            console.log(event);
            this.text = event.key;
            // this.name =event.key;
            // this.email = event.key;
        }
    }
})