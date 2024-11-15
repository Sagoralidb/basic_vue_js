var myapp = new Vue({
    el:"#my-app",

    data:{
        isActive: false,
        count: 0,
    },

    methods:{
        incrementFunction:function(event){
            console.log(event);
            this.count++;
        }
    }
})