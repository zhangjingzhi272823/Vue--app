<template>
    <form>
        <h3 class="text-muted my-5">添加新的pizza</h3>
        <div class="form-group row">
            <label for="" class="col-sm-1">品种</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
            </div>
        </div>
        <p><strong>选项1</strong></p>
        <div class="form-group row">
            <label for="" class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size1">
            </div>
        </div>
         <div class="form-group row">
            <label for="" class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price1">
            </div>
        </div>
        <p><strong>选项2</strong></p>
        <div class="form-group row">
            <label for="" class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size2">
            </div>
        </div>
         <div class="form-group row">
            <label for="" class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price2">
            </div>
        </div>
        <div class="from-group row">
            <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return{
            newPizza:{}
        }
    },
    methods:{
        addMenuItem(){
            let data={
                name:this.newPizza.name,
                description:this.newPizza.description,
                options:[
                    {
                        size:this.newPizza.size1,
                        price:this.newPizza.price1
                    },
                    {
                        size:this.newPizza.size2,
                        price:this.newPizza.price2
                    }
                ]
            }
            fetch("https://order-app-1-b5ca8.firebaseio.com/menu.json",{
                method:"post",
                headers:{
                    "Content-type":'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            // .then(data=>this.$router.push({name:'menuLink'}))
            //数据同步到vuex
            .then(data=>this.$store.commit("pushToMenuItems",data))
            .catch(err=>console.log(err))
        }
    }
}
</script>