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
function func1(str) {
  return str;
}
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));
