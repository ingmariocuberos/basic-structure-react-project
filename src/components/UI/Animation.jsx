import React from 'react'
import grua from '../../assets/Grua.svg';
import boxHooked from '../../assets/Box Hooked.svg';
import agricultureTruck from '../../assets/Agriculture.svg';

export const Animation = () => {
  return (
    <>
      <img src={grua} alt="Grua cargando cajas" className='crane-box' />
      {[1,2,3].map((item)=>(<img src={boxHooked} alt="Grua cargando cajas" className={'box-hooked-' + item } />))}
      {[1,2,3].map((item)=>(<img src={agricultureTruck} alt="Tractor arrastrando cajas" className={'agriculture-truck-' + item } />))}
    </>
  )
}
