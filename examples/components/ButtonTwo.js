var React = require('react/addons');
var PortalActions = require('./../actions/PortalActions');
var Portal = require('./../../src/index').component;
var Modal = require('./Modal');

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
    var Button = <button>Open Modal</button>;
    return (
      <div>
        <Portal openByClickOn={Button}>
          <Modal>
            <p>this is a modal TWO</p>
            <button onClick={this.handleCloseModal}>close modal</button>
          </Modal>
        </Portal>
      </div>
    );
  }
});

module.exports = Button;