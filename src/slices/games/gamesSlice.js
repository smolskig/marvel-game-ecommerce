import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toggleLoading } from '../ui/uiSlice'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export const gamesSlice = createSlice({
    name:'games',
    initialState:{
        selected:{},
        total:0,
        items:[],
        filteredItems:[]
    },
    reducers:{
        addGames:(state,action)=>{ 
            return state = {...state,items:action.payload.results,filteredItems:action.payload.results,total:action.payload.total}
        },
        selectGame(state,action){
            return state = {...state,selected:action.payload.item}
        },
        filterGame(state,action){
            return state = {...state,filteredItems:state.items.filter(item=>{
                return item.headline.includes(capitalizeFirstLetter(action.payload.filter))
            })}
        },
        resetFilter(state){
            return state = {...state,filteredItems:state.items}
        }
    }
})

//exportando as actions
export const { addGames,selectGame,filterGame,resetFilter } = gamesSlice.actions

// criando o thunk que chama a api da marvel
export const requestGames = dispatch => {
    dispatch(toggleLoading({isLoading:true}))
    axios.get('https://www.marvel.com/v1/pagination/search_cards?limit=20&query=marvel&content_type=games')
        .then((res)=> {
            dispatch(addGames(res.data.data))
            dispatch(toggleLoading({isLoading:false}))
        })
        .catch(err=> {
            dispatch(toggleLoading({isLoading:false}))
            console.log('erro',err)
        })
  };


  
export const getGames = state => state.games
//exportando o Reducer 
export default gamesSlice.reducer;