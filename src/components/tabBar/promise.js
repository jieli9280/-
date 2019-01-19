// promise是一个构造函数,可以通过,new Promise实例对象

// 在Promise上有俩个回掉函数,分别叫做reslove(成功回调),reject(失败回调)

// 在Promise构造函数的prototype属性上有一个.then()只要是Promise构造函数创建的实例都可以访问.then()

// Promise是一个异步操作每当new一个实例,表示一个具体的异步
// 状态1：success
// 状态2：err

// 由于promise的实例 是个一个异步操作 内部拿到结果后 无法使用return把操作的结果返回回去,只能使用回调函数把结果返回

// 可以在 new出来的Promise实例上调用.then方法 

// 只要一被创建就会立即执行
// var promise=new Promise(function() {

// });
promise的2中捕获机制
then函数里面的第二个参数, 放的是一个糊掉函数, 该函数会把当前的错误暴露, 但不会停止之后的代码执行
在所有的then后面接着catch如果出错这个函数会停止执行后续操作并输出当前错误
// async和await 是一起使用的 es7骚操作
promise = new Promise();

// async function getDta() {
//     const data1 = await getFileByPath('./files/1.text')
//     const data2 = await getFileByPath('./files/2.txt')
//     const data3 = await getFileByPath('./files/3.txt')

// }