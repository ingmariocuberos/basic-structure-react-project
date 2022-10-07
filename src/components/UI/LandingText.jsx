import alarm from '../../assets/Alarm.svg';
import world from '../../assets/Language.svg';

export const LandingText = () => {
  return (
    <div className='main-text-container'>
        <span className='text-primary main-text-1'>Gestiona el área de mantenimiento</span>
        <span className='text-primary main-text-2'>de tu empresa</span>
        <div className='subtext-container'>
            <div className='phrase-and-logo'><span className='text-primary main-text-3'>en cualquier lugar</span> <img src={world} alt="" /></div>
            <div className='phrase-and-logo'><span className='text-primary main-text-3'>y a cualquier hora</span> <img src={alarm} alt="" /></div>
        </div>            
    </div>
  )
}
