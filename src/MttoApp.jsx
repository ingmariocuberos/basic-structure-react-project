import './index.css'
// import { PropTypes } from "prop-types"
import { Navbar } from "./UI/Navbar"
import { Animation } from './UI/Animation'
import { LandingText } from './UI/LandingText';

export const MttoApp = ({title, subtitulo}) => {
  return (
        <div className="main-index">
          <Navbar/>
          <Animation/>
          <LandingText/>      
        </div>
   
  )
}

// MttoApp.propTypes = {
//     subtitulo: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
// }

// MttoApp.defaultProps = {
//     title: 'No hay ningún titulo',
// }
