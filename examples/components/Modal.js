var React = require('react/addons');

var activeStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: '2000'
};

var backgroundStyle = {
  background: 'rgba(0, 0, 0, 0.6)',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  cursor: 'pointer'
};

var modalContent = {
  position: 'relative',
  zIndex: '3000'
};

var Modal = React.createClass({
  render: function() {
    return (
      <div style={activeStyle}>
        <div style={backgroundStyle} onClick={this.props.handleClose}></div>
        <div style={modalContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Modal;