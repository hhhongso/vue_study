<template>
  <section>
      <!-- transition-group: 목록에 애니메이션을 추가할 때 사용하는 태그. 태그 속성에 애니메이션이 들어갈 태그(ex ul, p, section, ..) 지정. 
      목록에 애니매이션을 지정할 시, transition=group 안의 대상 태그에 :key 속성(유일하게 구분되는 값!)을 반드시 지정하여야 한다. -->
      <transition-group name="list" tag="ul">
        <li v-for="(todoitem, index) in propsdata" v-bind:key="todoitem" class="shadow">
            <i class="checkBtn fa fa-check" aria-hidden="true"></i>
            {{ todoitem }} 
            <span type="button" class="removeBtn" @click="removeList(todoitem, index)">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            </span>
        </li>
      </transition-group>

  </section>
</template>

<script>
export default {
    props: ['propsdata'],
    //todoList: ['propsdata']=> App.vue에서 binding.
    
   
    methods: {
        removeList: function(todoitem, index){
            console.log(index, todoitem);
            this.$emit('removeTodo', todoitem, index);
        }
    }
}
</script>

<style>
    /* 진입/진출 트랜지션 클래스: https://kr.vuejs.org/v2/guide/transitions.html#%EA%B0%9C%EC%9A%94 */
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .list-move {
        transition: transform 3s;
    }

    .list-enter-active, .list-leave-active {
        transition: all 0.05s;
    }

    .list-enter, .list-leave-to {
        opacity: 0; 
        transform: translateY(20px);
    }

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