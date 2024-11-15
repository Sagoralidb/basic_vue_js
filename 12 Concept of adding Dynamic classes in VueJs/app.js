var myapp = new Vue({
    el:"#my-app",
    data:{
        isActive:false,
    },
    methods:{
        ToggleFunction:function(){
            this.isActive = !this.isActive;
        } 
    }
});