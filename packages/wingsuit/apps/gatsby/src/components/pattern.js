import PropTypes from "prop-types"
import React from "react"
import {renderer} from '@wingsuit-designsystem/pattern';

const Pattern = ({ id }) => (
  <div>Pattern: { renderer.renderData('<h1>hi</h1>') }</div>
)

Pattern.propTypes = {
  id: PropTypes.string,
}

Pattern.defaultProps = {
  id: '',
}

export default Pattern
