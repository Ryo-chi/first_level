// /**const let等の変数宣言 */
// val1 = "var変数";
// console.log(val1);
// //var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1);
// //varは再宣言可能

// let val2 = "let変数"
// console.log(val2);
// //letは上書き可能
// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);
// //constは上書き不可
// //再宣言不可
// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name : "ryo",
//   age : 20,
// };
// val4.name ="jak";
// console.log(val4);

// // constで定義したオブジェクトは配列の変更が可能
// const val5 = ['dog', 'cat'];
// val5[1] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name ="ryo"
// const age =20;
// //私の名前はryoです。年齢は20歳です。

// //従来の方法
// const message1 = "私の名前は"　+ name + "です。年齢は"　+ age +　"です";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 =`私の名前は${name}です。年齢は${age}です`
// console.log(message2);

//アロー関数
//従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

//分割代入
// const myProfile = {
//   neme: "ryo",
//   age: 20,
// };
// const message1 = `名前は${myProfile.neme}です`;
// console.log(message1);
// const { name, age} = myProfile;
// const message2 = `名前は${myProfile.neme}です`;
// console.log(message2);

//配列

// const myProfile = ['ryo', 20];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message4);

//デフォルト値。引数など

// const sayHello = (name = "ゲスト") => {
//   console.log(`こんにちは${name}さん`)
// };
// sayHello();

// スプレッド構文...
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // const arr6 = [...arr4]
// // console.log(arr6);

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

//mapやfilterを使った配列の処理
const nameArr = ["tanaka", "watanabe", "satou"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => {
// console.log(name)
// });

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "watanabe") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

//三項演算子
//ある条件？条件がtrueのとき　:条件がfalseのとき
// const val1 = 1 > 0 ? "tureです" : "falseです";
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100をこえています" : "許容範囲内です";

// };

//論理演算氏の本当の意味を知ろう　&& //
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1か2はtrueになります");
// }

//||は左側がfalseなら右側を返す
// const num = 100;
// const fee =　num　||　"金額未設定です";
// console.log(fee);

// //&&は左側がtrueなら右側をかえす
