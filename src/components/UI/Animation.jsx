import React from 'react'
import grua from '../../assets/Grua.svg';
import boxHooked from '../../assets/Box Hooked.svg';
import agricultureTruck from '../../assets/Agriculture.svg';

export const Animation = () => {
  return (
    <>
        <img src={grua} alt="Grua cargando cajas" className='crane-box' />
        <img src={boxHooked} alt="Grua cargando cajas" className='box-hooked-1' />
        <img src={boxHooked} alt="Grua cargando cajas" className='box-hooked-2' />
        <img src={boxHooked} alt="Grua cargando cajas" className='box-hooked-3' />
        <img src={agricultureTruck} alt="Tractor arrastrando cajas" className='agriculture-truck-1' />
        <img src={agricultureTruck} alt="Tractor arrastrando cajas" className='agriculture-truck-2' />
        <img src={agricultureTruck} alt="Tractor arrastrando cajas" className='agriculture-truck-3' />
    </>
  )
}
