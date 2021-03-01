import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo2.svg'
import facebook from '../img/social/facebook.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kärkölä-ryhmä"
            style={{ height: '3em', padding:'5px' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Etusivu
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/tietoja/">
                        Tietoja
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/ehdokkaat/">
                        Kuntavaaliehdokkaat
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blogi/">
                        Viimeisimmät artikkelit
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/ota-yhteytta/">
                        Ota yhteyttä
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <a title="facebook" href="https://facebook.com/groups/1832394150109607">
                        <img
                          src={facebook}
                          alt="Facebook"
                          style={{width: '4em', height: '4em' }}
                        />
                      </a>
                    </li>
                    <li>
                      <p class="navbar-item" style={{color:"whitesmoke"}}>Kärkölä-ryhmä ry</p>
                    </li>
                    <li>
                      <p  class="navbar-item" style={{color:"whitesmoke"}}>Y-tunnus: 3083164-9</p>
                    </li>
                  </ul>
                </section>
                

              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
