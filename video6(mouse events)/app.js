var mouseEvent = new Vue({
    el:"#my-app",
    data:{
        x:0,
        y:0
    },
    methods:{
        // moveFunction:function(){
        //     this.x++;
        //     this.y++
        // },
        moveFunction:function(event){
            // console.log(event)
            this.x =event.offsetX
            this.y =event.offsetY
        }
    }
});