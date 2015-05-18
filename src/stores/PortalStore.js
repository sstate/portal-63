var LCARS = require('lcars');
var CargoBay = require('cargo-bay');
var merge = require('amp-merge');
var PortalConstants = require('./../constants/PortalConstants');

var StoreData = {
  _data: {
    active: false
  },
  clonedData: function() {
    return JSON.parse(JSON.stringify(this._data));
  }
};

var PortalStore = merge(CargoBay,{
  set(key, value){
    StoreData._data[key] = value;
    return StoreData.clonedData();
  },
  getStoreData(){
    return StoreData.clonedData();
  }
});

PortalStore.dispatchToken = LCARS.register(function(action){
  console.log(action.type)
  switch (action.type){
    case PortalConstants.PORTAL.OPEN:
      PortalStore.set('active', true);
      PortalStore.emitChange();
      break;
    case PortalConstants.PORTAL.CLOSE:
      PortalStore.set('active', false);
      PortalStore.emitChange();
      break;
  }
});

module.exports = PortalStore;