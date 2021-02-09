# tabbar

### 动态绑定样式属性
    1.定义TabBarItem属性
    name: "TabBarItem",
    props: {
      path: String,
      activeColor:{
        type: String,
        //设置默认值
        default: 'blue'
      }
    }
    2.添加计算属性
    computed: {
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    3.绑定样式属性
    <div  :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    4.使用自定义属性修改样式
     <tab-bar-item  path="/home" active-color="red">

