<template>
  <section>
      <ul>
        <!--v-on:click == @click -->
          <li v-for="(todoitem, index) in todoList" v-bind:key="todoitem" class="shadow">
          <i class="checkBtn fa fa-check" aria-hidden="true"></i>
           {{ todoitem }} 
          <span type="button" class="removeBtn" @click="removeList(todoitem, index)">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
          </span>
          </li>
      </ul>

  </section>
</template>

<script>
export default {
    data(){
        return {
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
        removeList: function(todoitem, index){
            console.log(index, todoitem);
            localStorage.removeItem(todoitem); //로컬 스토리지에서 해당 todoitem 삭제
            this.todoList.splice(index, 1); // todoList 배열에서 해당 인덱스 삭제
        }
    }
}
</script>

<style>
    ul {
        list-style-type: none;
        padding-left: 0px; 
        margin-top: 0; 
        text-align: left;
    }

    li {
        display: flex; 
        min-height: 50px;
        height: 50px; 
        line-height: 50px; 
        margin: 0.5rem 0;
        padding: 0 0.9rem; 
        background: white; 
        border-radius: 5px;

    }

    .checkBtn {
        line-height: 45px; 
        color: #62acde;
        margin-right: 5px; 
    }

    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
</style>