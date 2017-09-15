import React from 'react';
import Label from 'grommet/components/Label';

const GraphSubtitle = ({ color, text }) => {
  const wrapperStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    margin: '5px 0',
  };

  const colorBoxStyle = {
    background: color,
    width: '30px',
    height: '20px',
    border: '1px solid rgba(0, 0, 0, .3)'
  };

  const labelStyle = {
    margin: '0 0 0 5px',
    fontSize: '16px',
  }

  return (
    <div style={wrapperStyle}>
      <div style={colorBoxStyle} />
      <Label style={labelStyle}>{text}</Label>
    </div>
  );
}

GraphSubtitle.propTypes = {
  color: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default GraphSubtitle;
