import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



const TutorialHoc = (componentName, Children) => {
  class Overlay extends React.Component {
    render() {
      const {tutorial} = this.props;
      const children = <Children {...this.props}/>;
      const overlayWrapperStyle = {
        position: 'relative'
      }
      const overlayStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: '99',
        backgroundColor: 'rgba(0,0,0,0.6)'
      }
      if(!tutorial.show) return children;
      return (
        componentName === tutorial.currentStep ?
        children
        :
        <div style={overlayWrapperStyle}>
          <div style={overlayStyle}></div>
          {children}
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      tutorial: state.app.tutorial
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
  }

  return connect(mapStateToProps, mapDispatchToProps)(Overlay);
}

export default TutorialHoc;
