import React from 'react'

import Layout from '../../components/Layout'
import EhdokasRoll from '../../components/EhdokasRoll'

export default class EhdokkaatIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/pekkala.jpg')`,
            backgroundPosition: `center center`,
            backgroundSize: `cover`
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3"
            style={{
              boxShadow: '0.5rem 0 0 rgba(241, 151, 15, 0.8), -0.5rem 0 0 rgba(241, 151, 15, 0.8)',
              backgroundColor: 'rgba(241, 151, 15, 0.8)',
              color: 'white',
              padding: '1rem',
            }}
          >
            Kuntavaaliehdokkaat 2021
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <EhdokasRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
