

## 1. Promise 三种状态
    1. pending 正处理网络请求或定时任务没执行时
    2. fulfill 满足状态， 当我们主动调用resolve时，就处于该状态，然后调用then函数
    3. reject 当我们主动调用reject就处于该状态，然后会调用catch()
    new Promise((resolve,reject)=>{
        setTimeout((data)=>{
          //成功调用 resole
          //resolve("hello word");
          //失败调用reject
          reject("error message")
        },1000);
        }).then((data)=>{
            console.log(data);
        }).catch((error)=>{
        console.log(error);
    })
## 2. Promise 链式调用
    new Promise((resolve,reject)=>{
        setTimeout((data)=>{
          resolve("hello word");
        },1000);
    }).then((data)=>{
        console.log(data);
        return Promise.resolve(data+"1111");
    }).then((data)=>{
        console.log(data);
        return Promise.resolve(data+"2222");
    }).then((data)=>{
        console.log(data);
        return Promise.resolve(data+"3333");
    }).then((data)=>{
        console.log(data);
    })
## 省略 promise resolve 操作
    new Promise((resolve,reject)=>{
        setTimeout((data)=>{
          resolve("hello word");
        },1000);
    }).then((data)=>{
        console.log(data);
        return data+"1111";
    }).then((data)=>{
        console.log(data);
        return data+"2222";
    }).then((data)=>{
        console.log(data);
        return data+"3333";
    }).then((data)=>{
        console.log(data);
    })
    通过 throw xxx 代替 调用 reject()
## 多任务异步请求，同步返回处理
    Promise.all()
    Promise.all([
    new Promise((resolve, reject) => {
        setTimeout((data) => {
        resolve("abc ")
        }, 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout((data) => {
        resolve("123 ")
        }, 4000);
    }),
    new Promise((resolve, reject) => {
        setTimeout((data) => {
        resolve("456 ")
        }, 2000);
    })
    ]).then(result => {
        console.log(result)
    })