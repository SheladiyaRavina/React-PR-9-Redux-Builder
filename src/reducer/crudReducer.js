let initialState = {
    users : localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : [],
    user :{}
}
const Crud = (state = initialState,action)=>{
    switch(action.type){
        case "ADD" :
            let insertdata = action.payload;
            let data = [...state.users,insertdata];
            localStorage.setItem('crud',JSON.stringify(data));
            return {
                ...state,
                users : data
            }
            break;
        
        case "DELETE":
            const deleteData = state.users.filter((v)=>{
                return v.id !== action.payload
            })
            localStorage.setItem('crud',JSON.stringify(deleteData));
            return{
                ...state,
                users : deleteData
            }
            break;
        
            case "EDIT":
                let editData = state.users.find((v)=>{
                    return v.id === action.payload
                })
                return{
                    ...state,
                    user : editData
                }
            
            case "UPDATE":
                let update = state.users.map((v)=>{
                    if(v.id === action.payload.id){
                        return {
                            ...v,
                            fname:action.payload.fname,
                            lname:action.payload.lname,
                            email:action.payload.email,
                            salary:action.payload.salary,
                        }
                    }
                    return v;
                })
                localStorage.setItem('crud',JSON.stringify(update));
                return{
                    ...state,
                    users :update
                }
        default : 
            return state;
    }
}
export default Crud;