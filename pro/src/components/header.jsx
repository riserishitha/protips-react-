import '../App.css';
import { Link } from 'react-router-dom';

function HeaderComp() {
  const flexStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    color: 'white',
    padding: '5px',
  };
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };
  return (
    <div>
      <nav style={flexStyle}>
        <div>
          <h1>
            <Link to="/" style={linkStyle}>
              kalvium ❤️{' '}
            </Link>
          </h1>
        </div>
        <div style={flexStyle} className="justify-contact-reg">
          <div>
            <h3>
              <Link style={linkStyle} to="/contact">
                Contact
              </Link>
            </h3>
          </div>
          <div>
            <h3 style={{marginLeft: "20px"}}>  
              <Link style={linkStyle} to="/register">
                Register-Form
              </Link>
            </h3>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderComp;