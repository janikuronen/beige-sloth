import React from 'react'
import PropTypes from 'prop-types'
import { TietojaPageTemplate } from '../../templates/tietoja-sivu'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <TietojaPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
