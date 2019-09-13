const state={
    menuItems:{}
}

const getters={
   getMenuItems:state=>state.menuItems
}

const mutations={
    setMenuItems(state,data){
        state.menuItems=data
    },
    removeMenuItems(state,data){
        state.menuItems.forEach((item,index) => {
            if(item===data){
                state.menuItems.splice(index,1)
            }
        });
    },
    //将新添加的pizza push到menuitems中
    pushToMenuItems(state,data){
        state.menuItems.push(data)
    }
}

const actions={
    
}

export default{
    state,
    getters,
    mutations,
    actions
}