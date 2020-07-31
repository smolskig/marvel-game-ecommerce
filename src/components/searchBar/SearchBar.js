import React, { useState, useEffect} from 'react';
import { FiSearch } from 'react-icons/fi'
import './SearchBar.css'

import { useDispatch } from 'react-redux'
import { filterGame,resetFilter } from '../../slices/games/gamesSlice'

const SerachBar = ()=>{
  const dispatch = useDispatch()
  const [textField,setTextField] = useState('')

  const handleInput = event =>{
    setTextField(event.target.value)
    dispatch(filterGame({filter:textField}))
  }

  useEffect(()=>{
    if(textField.length === 0){
      dispatch(resetFilter())
    }
  },[textField,dispatch])
  return (
    <div className="inputWrapper" >
        <input data-testid="input-filter" type="text" value={textField} onChange={handleInput} className="marvelInput nohighlight noselect" placeholder="Digite o nome do Jogo" />
        <button type="button" className="button-search">
            <FiSearch/>
        </button>
    </div>
   
  );
}

export default SerachBar;