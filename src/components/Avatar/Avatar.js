import React from 'react';
import './Avatar.css';
import TypeIcons from '../../utils/typeIcons';


export default function Avatar() {

	return (
		<div className='avatar'>
         {
            TypeIcons.map((icon, index) => ( //pego o incide do vetor e substituo a imagem
             index > 0 && 
             <button type="button" onClick={() => setType(index)}>
                <img src={icon} alt="Tipo da Tarefa" 
                className={type && type !== index && 'inative'}/> 
             </button>
            ))
          }
		</div>
       
	);
}
