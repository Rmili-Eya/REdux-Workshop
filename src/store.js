import {createStore} from "redux"
import calcul from "./reducer/reducer"
const store =createStore(calcul)
export default store;