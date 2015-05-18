var React = require('react/addons');
var PortalActions = require('./../actions/PortalActions');
var Portal = require('./../../dist/Portal');
var Modal = require('./Modal');

console.log(Portal)

var Button = React.createClass({

  propTypes: {
    //scroll: React.PropTypes.bool
  },

  getInitialState(){
    return {};
  },

  componentDidMount(){
  },

  componentWillUnmount(){
  },

  handleOpenModal(e){
    PortalActions.open()
  },

  handleCloseModal(e){
    PortalActions.close()
  },

  render(){
    return (
      <div>
        <button onClick={this.handleOpenModal}>Open Modal</button>
        <Portal>
          <Modal>
            <p>this is a modal</p>
            <button onClick={this.handleCloseModal}>close modal</button>
          </Modal>
        </Portal>
      </div>
    );
  }
});

module.exports = Button;