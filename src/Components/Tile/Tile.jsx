import {
  React,
} from 'react';
import PropTypes from 'prop-types';
import { TileCont } from './Tile.style';

function Tile(props) {
  const {
    source, size, span, alt,
  } = props;

  return (
    <TileCont
      tiltReverse
      style={{ gridColumn: span ? 'span 2' : 'auto' }}
      className="TileCont"
      src={source}
      size={size}
      span={span ? 1 : 0}
      alt={alt}
    />
  );
}

Tile.propTypes = {
  source: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  span: PropTypes.bool,
  alt: PropTypes.string,
};

Tile.defaultProps = {
  span: false,
  alt: '',
};

export default Tile;
