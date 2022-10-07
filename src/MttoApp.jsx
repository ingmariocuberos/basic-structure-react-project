import { Animation } from './components/UI/Animation'
import { LandingText } from './components/UI/LandingText'
import { Navbar } from './components/UI/Navbar'
import './index.css'
// import { PropTypes } from "prop-types"

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
