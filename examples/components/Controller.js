var React = require('react/addons');
var ModalButton = require('./Button');
var ModalButtonTwo = require('./ButtonTwo');

var Controller = React.createClass({
  render(){
    return (
      <div>
        <ModalButton />
        <ModalButtonTwo />
      </div>
    );
  }
});

module.exports = Controller;