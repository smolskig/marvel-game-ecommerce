import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({ // states para controlar a interface
    name:'ui',
    initialState:{
        loading:false,
        modalOpen:false,
        cartMenuOpen:false
    },
    reducers:{
        toggleLoading:(state,action) => state = {...state,loading:action.payload.isLoading},
        toggleModal:(state,action) => state = {...state,modalOpen:action.payload.modalOpen},
        toggleCartMenu:(state,action) => state = {...state,cartMenuOpen:action.payload.cartOpen},
    }
})

export const {toggleLoading, toggleModal, toggleCartMenu} = uiSlice.actions

export const getUi = state => state.ui


export default uiSlice.reducer