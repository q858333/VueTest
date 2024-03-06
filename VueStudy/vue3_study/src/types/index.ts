
// 定义一个接口，定义CarModel对象的具体属性
export interface CarModel {
    id : string,
    name : string,
    price : number,
    adress? : string,
}

//自定义类型 Cars 元素为CarModel，下面两种写法都可以
// export type Cars = Array<CarModel>
export type Cars = CarModel[]

