import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

  const LightMode = () => {
    props.showalert('light theme enabled', 'success');
    props.settheme('light');
  }
  const YellowMode = () => {
    props.showalert('yellow theme enabled', 'success');
    props.settheme('yellow');

  }
  const RedMode = () => {
    props.showalert('red theme enabled', 'success');
    props.settheme('red');

  }

  const MagentaMode = () => {
    props.showalert('magenta theme enabled', 'success');
    props.settheme('magenta');
  }

  const ChangeDark = () =>{
    if(props.dark === false)
    {
      props.setdark(true);
      props.showalert('dark theme enabled!!','success');
    }
    else
    {
      props.setdark(false);
      props.showalert('dark theme disabled!!','success');
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg 
    ${props.theme === 'yellow' && props.dark === true ? 'darkyellow1'
    : props.theme === 'yellow' ? 'yellow' 
    : props.theme === 'red' && props.dark === true ? 'darkred1'
    : props.theme === 'red' ? 'red' 
    : props.theme === 'magenta' && props.dark === true ? 'darkmagenta1' 
    : props.theme === 'magenta' ? 'magenta'
    : props.theme ==='light' && props.dark === true ? 'dark1'
    :'navbar-light bg-light'} text-${props.dark === true ? 'light' :'dark'}`
    
    }>


      <div className="container-fluid">
        <a className={`navbar-brand text text-${props.dark === true ? 'light' : 'dark'}`} href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text text-${props.dark === true ? 'light' : 'dark'}`} aria-current="page" href="/">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className={`nav-link active text text-${props.dark === true ? 'light' : 'dark'}`} href="">{props.about}</a>
            </li> */}
          </ul>



          <div>
            Select Your Theme Color
          </div>
          <button className="dot yellow mx-2" onClick={YellowMode}></button>
          <button className="dot red mx-2" onClick={RedMode}></button>
          <button className="dot magenta mx-2" onClick={MagentaMode}></button>
          <button className="dot bg-light mx-2" onClick={LightMode}></button>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={ChangeDark}  id="flexSwitchCheckChecked" />
            <label className={`form-check-label text text-${props.dark === true ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckChecked">Dark Mode</label>
          </div>

        </div>
      </div>

    </nav>

  )

}




Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Title Text here',
  about: "About Text here"
}



