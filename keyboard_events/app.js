var myapp = new Vue({
   el:"#my-app",
   data:{

   } ,
   methods:{
    keyPressFunction:function(event){
        console.log(event.key)
    }
   }
});