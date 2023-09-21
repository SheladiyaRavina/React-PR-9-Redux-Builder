export const ADD = (data)=>{
    return {
        type : "ADD",
        payload : data
    }
}
export const DELETE =(id)=>{
    return {
        type :"DELETE",
        payload : id
    }
}
export const EDIT =(id)=>{
    return{
        type :"EDIT",
        payload :id
    }
}
export const UPDATE =(data)=>{
    return{
        type : "UPDATE",
        payload : data
    }
}