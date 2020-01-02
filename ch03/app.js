Vue.component('todo-footer', {
    template: '<p>this is another global child component </p>'
});

var cmp = {
    template: '<p>this is another local child component</p>'
}

var app = new Vue({
    el: '#app',
    data: {
        message: 'this is a parent component'
    },
    component: {
    'todo-list' : cmp
}
});
