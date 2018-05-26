// 编码
// 3的小游戏，练习使用循环和条件语句，实现如下需求：

// 从1到100，以此在console输出各数字，但是，当数字为3的倍数或者含有3的时候，输出“PA”
// 比如：1,2,PA,4,5,PA,……,11,PA,PA,14,PA……

// let arr = []
// for (let i = 1; i < 101; i++) {
//     if (i % 3) {
//         arr.push(i)
//     } else {
//         arr.push("PA")
//     }
// }

// console.log(arr.join(","));

// 编码
// 小练习，练习使用循环实现一个九九乘法表

// 第一步，最低要求：在Console中按行输出 n * m = t
// 然后，尝试在网页中，使用table来实现一个九九乘法表

// for(let i = 1; i < 10;i++){
//     for(let j = 1; j < 10; j++){
//         console.log(`${i}*${j}=${i*j}`);
//     }
// }


// 编码
// 今天最后一个练习，在你的简历中，实现一个，当用户访问页面的时候，根据当前时间，在页面中输出不同的问候语。

// 比如早上的时候，输出早上好，晚上的时候是晚上好。

// let time = (new Date()).getHours();
// console.log(time);
// if( 6 <= time && time <=11 ){
//     console.log("早上好")
// } else if( 12 <= time && time <= 18 ){
//     console.log("下午好")
// } else if( 19 <= time && time  <= 24 ){
//     console.log("晚上好")
// }