<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addList"></TodoInput>
    <TodoList v-bind:propsdata="todoList" v-on:removeTodo="removeList"></TodoList>
    <TodoFooter v-on:clearTodo="clearList"></TodoFooter>

  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data(){
    return {
      //todoList의 데이터를 App.vue에서 관리
      todoList: []
    }
  },
  created(){
      if(localStorage.length >0) {
          for (let i = 0; i < localStorage.length; i++) {
              this.todoList.push(localStorage.key(i));
              
          }
      }
  },
  methods: {
    addList(todoitem){
      localStorage.setItem(todoitem, todoitem);
      this.todoList.push(todoitem);
    },
    clearList(){
      localStorage.clear();
      this.todoList = [];
    },
    removeList(todoitem, index){
      //todoitem = 'changed!'; => doesn't work.
      //하위 컴포넌트로부터 전달받은 데이터는, 상위컴포넌트에서 갱신하더라도 하위 컴포넌트에 반영되지 않는다. 
      localStorage.removeItem(todoitem);
      this.todoList.splice(index, 1);
    }

  },
  //지역 컴포넌트 등록 
  components: {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style>
 body {
    text-align: center;
    background-color: #f6f6f8;
        
  }
  
  input {
    width: 200px; 
    border-style: groove;

  }

  button {
    border-style: groove;

  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>