Vue.component('sibling-component', {
    template: '<p> {{propsdata}} </p>',
    props : ['propsdata']
});

Vue.component('child-component', {
    template: '<p> {{propsdata}} </p>',
    props: ['propsdata']
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue, passed from Parent Component to child component',
        anotherMessage: 'Hello again Vue, passed from Parent Component to sibling component',
        
    }
});