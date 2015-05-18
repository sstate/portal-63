var React = require('react');
var Freighter = require('freighter');
var PortalStore = require('./../stores/PortalStore');

var Portal = React.createClass({

  mixins: [Freighter],

  stores: [PortalStore],

  propTypes: {
    children: React.PropTypes.element.isRequired,
    onClose: React.PropTypes.func
  },

  getStateFromStores(){
    return PortalStore.getStoreData();
  },

  componentWillUnmount(){
    this.closePortal();
  },

  openPortal(){
    if (!this.node) {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);
    }
    this.portal = React.render(React.cloneElement(this.props.children, {closePortal: this.closePortal}), this.node);
  },

  closePortal() {
    if (this.node) {
      React.unmountComponentAtNode(this.node);
      document.body.removeChild(this.node);
    }
    this.portal = null;
    this.node = null;
    if (this.props.onClose) {
      this.props.onClose();
    }
  },

  render() {
    var outPut = ()=> {
      switch(this.state.active){
        case true:
          this.openPortal();
          break;
        default:
          this.closePortal();
        break;
      }
    };
    return (
      <div>
        {outPut()}
      </div>
    );
  }
});

module.exports = Portal;