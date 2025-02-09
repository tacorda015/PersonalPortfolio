import PropTypes from 'prop-types';

export default function ArrowDown({ height = '50px', width = '50px', className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={width}
      height={height}
      className={className}
      style={{ width, height }}
    >
      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
    </svg>
  );
}

ArrowDown.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};
