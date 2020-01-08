<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newList" placeholder="Type what you have to do" v-on:keyup.enter="addList">
        <span class="addContainer" v-on:click="addList">
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>
        </span>

        <modal v-if="showModal" @close="showModal = false">
                <h3 slot="header"> 경고 </h3>
                <span slot="footer" @click="showModal = false">
                    할 일을 입력하세요. 
                    <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
                </span>
        </modal>
    </div>
  
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
   data(){
       return {
           newList: '',
           showModal: false,
       }
   }, 
   methods: {
       addList: function(){ //로컬 스토리지에 데이터 추가(key, value)
        if(this.newList != "") {
            var value = this.newList && this.newList.trim();
            this.$emit('addTodo', value);
            this.clearInput();
        } else {
            this.showModal = !this.showModal;
        }
       },
       clearInput: function(){
            this.newList = "";
       }
   },
   components: {
       Modal: Modal
   }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }

    .inputBox {
        background: white; 
        height: 50px; 
        line-height: 50px; 
        border-radius: 5px; 
    }

    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }

    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem; 
        border-radius: 0 5px 5px 0;
    }

    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>