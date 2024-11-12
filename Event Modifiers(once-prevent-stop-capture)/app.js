var myApp = new Vue({
    el:"#my-app",
    data:{
        counter: 0,
    },
    methods:{
        increment:function(){
            this.counter++;
        },
        decrement:function(){
            this.counter--;
        },
        ParentClickFunction:function(){
            console.log("Clicking...........");
        },
        parentClassFunction:function(){
            console.log('You are clinking in Paren part');
        },
        childClassFunction:function(){
            console.log('You are clicking to child part');
          
        }
    }
});