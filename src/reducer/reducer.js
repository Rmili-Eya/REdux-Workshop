const calcul=(initialState=10,action)=>{
switch(action.type){
    case "INCREASE": return initialState+1;
    case "DECREASE": return initialState-1;
    default: return  initialState
}
}
export default calcul