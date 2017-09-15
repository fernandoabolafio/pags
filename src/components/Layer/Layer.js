import React from 'react';
import Layer from 'grommet/components/Layer';
import ScrollLock from 'react-scrolllock';

export default class MyLayer extends React.Component {
  render() {
    const {onClose} = this.props;
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        onClose
      })
    );
    return (
      <div>
        <Layer
          styles={{zIndex: '9999999'}}
          align='center'
          closer
          onClose={onClose}
        >
          {childrenWithProps}
        </Layer>
        <ScrollLock />
      </div>
    )
  }
}
