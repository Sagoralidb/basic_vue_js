var myapp = new Vue({
   el:"#my-app",
   data:{

   } ,
   methods:{
    keyPressFunction:function(event){
        console.log(event.key); // key press event
    },
    keyupFunction:function(event) {
        console.log("key up pressed ........"); // key up event
    },
    keydownFunction:function(event) {
        console.log(event); // key up event
    }
   }
});