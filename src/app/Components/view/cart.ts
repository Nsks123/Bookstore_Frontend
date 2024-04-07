export interface CartEntity{
    cartId:number,
    cartQuantity:number,
    userId:number,
    bookId:number,
    isPurchased:boolean,
    orderDate:string
}