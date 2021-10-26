import React, { useState } from 'react';
import './Avatar.css';
import TypeIcons from '../Utils/TypeIcons';


export default function Avatar() {

   const [type, setType] = useState();
   const man = 'Homen';
   const woman = 'Mulher';
   const other = 'Outros';
  
	return (
   
      <div className='avatar'>
         {
            TypeIcons.map((icon, index) => ( //pego o incide do vetor e substituo a imagem
            index > 0 && 
            <button type="button" onClick={() => setType(index)}>
               <span class="sex"> {index === 1 ? man : index === 2 ? woman : index === 3 ? other : ''} </span>
               <img src={icon} alt="Avatar" className={type && type !== index && 'inative'}/> 
            </button>
            ))
            
         }
      </div>
		 
	);
}
