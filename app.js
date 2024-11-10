var myVar =  new Vue({
    el: '#myapp',

    data:{
      message: "I am new",
      Fname: 'Sagor',
      Lname: 'Ali',
      Age: 30,
    }
  });

  new Vue({
    el: "#myData",
    data: {
        message: 'We are students',
        name: 'Rony',
        education: 'CSE'
    },
    methods:{
        run : function(text, name){ // multiple parameter passing
           return "We are learning Vue.js 2" +text+", "+name;
        },
       welcome:function() {
        return "You are welcome";
       }
    }
  });