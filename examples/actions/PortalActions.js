var LCARS = require('lcars');
var PortalConstants = require('./../../src/index').constants;

var PortalActions = {
  open(){
    LCARS.dispatch({
      type: PortalConstants.PORTAL.OPEN
    });
  },
  close(){
    LCARS.dispatch({
      type: PortalConstants.PORTAL.CLOSE
    });
  }
};

module.exports = PortalActions;