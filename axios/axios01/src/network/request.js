import axios from "axios";
// export function  request(config,success,failure){
//   //创建实例
//   const  instance = axios.create({
//     baseURL:'http://localhost:7777',
//     timeout:3000
//   })
//   //2.发送网络请求
//   return instance(config)
//     .then(res=>{
//       success(res)
//     })
//     .catch(error=>{
//       failure(error)
//     })
// }

export function  request(config){
  //1.创建实例
  const  instance = axios.create({
    baseURL:'http://localhost:8080',
    timeout:3000
  })
  //2.拦截器使用
  //请求拦截
  instance.interceptors.request.use(config=>{
    console.log("interceptors ok",config);

    console.log("interceptors token:",config.headers.token);
    console.log("interceptors name:",config.headers.name);
    // 1.  config中不符合信息处理
    // 2 动画图标效果
    // 3.登录信息处理
    return config;
  },error => {
    console.log("interceptors not ok");

  })
  //响应
  instance.interceptors.response.use(res=>{
    console.log("response ok",config);
    return res;
  },error => {
    console.log("response not ok");

  })
  //3.发送网络请求 直接return axios create 本身返回的就是Promise
  return instance(config);
}
