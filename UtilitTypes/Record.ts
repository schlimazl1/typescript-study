// 他会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型

// type Record<K entends keyof any, T> = {
//   [P in K]: T
// }

// 即将K中的每个属性([P in K]),都转为T类型
type petsGroup = 'dog' | 'cat' | 'fish';
interface IPetInfo {
  name:string,
  age:number,
}

type IPets = Record<petsGroup, IPetInfo>;

const animalsInfo:IPets = {
  dog: {
    name:'dogName',
    age:2
  },
  cat: {
    name:'catName',
    age:3
  },
  fish: {
    name:'fishName',
    age:5
  }
}