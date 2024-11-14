
var myapp =new Vue({
    el:"#my-app",
    data:{
        firstName : '',
        lastName : '',
        meter: ''
    },
    computed:{
        fullName:function(){
            return this.firstName+" "+this.lastName;
        },
        getCentimeterValue:function() {
            return this.meter*100;
        }
    }
});