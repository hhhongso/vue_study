var app = new Vue({
    el: '#app',
    data: {
        message: 'hello Vue.js!',
        message2: 'hi Vue.js!',
        message3: 'hola Vue.js!',
        uid: '100',
        flag: true, 
        systems: ['a', 'b', 'c']
    },
    methods: {
        clickBtn(){
            console.log('click! ES6');
        },
        clickBtn: function(){
            console.log('click! ES5');
        },
        eventMethod: function(event){
            console.log(event);

        }
    }
});