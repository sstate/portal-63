var React = require('react');
var Freighter = require('freighter');
var PortalStore = require('./../stores/PortalStore');
var PortalActions = require('./../actions/PortalActions');

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

  componentWillMount() {
    if (this.state.active) {
      this.openPortal();
    }
  },

  componentWillUnmount(){
    this.closePortal();
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

  handleClose(){
    PortalActions.close();
  },

  renderPortal(){
    if (!this.node) {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);
      this.portal = React.render(React.cloneElement(this.props.children, {handleClose: this.handleClose}), this.node);
    }
    PortalActions.open();
  },

  openPortal(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    this.renderPortal();
  },
  render() {
    switch(this.state.active){
      case false:
        this.closePortal();
        break;
      case true:
        if (this.node){
          this.portal = React.render(React.cloneElement(this.props.children, {handleClose: this.handleClose}), this.node);
        }
        break;
    }
    if (this.props.openByClickOn) {
      return <div className="Portal__open-by-click-on" onClick={this.openPortal}>{this.props.openByClickOn}</div>;
    } else {
      return null;
    }
  }

});

module.exports = Portal;
