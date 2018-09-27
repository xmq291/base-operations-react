var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var CityList = require('./CityList');
var AddCity = require('./AddCity');
var SearchCity = require('./SearchCity');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      cityBodyVisible: false,
      orderBy: 'cityName',
      orderDir: 'asc',
      queryText: '',
      myCities: []
    } //return
  }, //getInitialState

  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function(result) {
      var tempCities = result;
      this.setState({
        myCities: tempCities
      }); //setState
    }.bind(this));
  }, //componentDidMount

  componentWillUnmount: function() {
    this.serverRequest.abort();
  }, //componentWillUnmount

  deleteMessage: function(item) {
    var allCities = this.state.myCities;
    var newCities = _.without(allCities, item);
    this.setState({
      myCities: newCities
    }); //setState
  }, //deleteMessage

  toggleAddDisplay: function() {
    var tempVisibility = !this.state.cityBodyVisible;
    this.setState({
      cityBodyVisible: tempVisibility
    }); //setState
  }, //toggleAddDisplay

  addItem: function(tempItem) {
    var tempCities = this.state.myCities;
    tempCities.push(tempItem);
    this.setState({
      myCities: tempCities
    }); //setState
  }, //addItem

  reOrder: function(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    }); //setState
  }, //reOrder

  SearchCity(q) {
    this.setState({
      queryText: q
    }); //setState
  }, //SearchCity

  render: function() {
    var filteredCities = [];
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;
    var queryText = this.state.queryText;
    var myCities = this.state.myCities; 

    myCities.forEach(function(item) {
      if(
        (item.cityName.toLowerCase().indexOf(queryText)!=-1) ||
        (item.countryName.toLowerCase().indexOf(queryText)!=-1) ||
        (item.addDate.toLowerCase().indexOf(queryText)!=-1) ||
        (item.cityNotes.toLowerCase().indexOf(queryText)!=-1)
      ) {
        filteredCities.push(item);
      }
    }); //forEach

    filteredCities = _.orderBy(filteredCities, function(item) {
      return item[orderBy].toLowerCase();
    }, orderDir);//orderBy

    filteredCities = filteredCities.map(function(item, index) {
      return(
        <CityList key = { index }
          singleItem = { item }
          whichItem = { item }
          onDelete = { this.deleteMessage } />
      ) //return
    }.bind(this)); //filteredCities.map
    return (
      <div className="interface">
        <AddCity
          bodyVisible = { this.state.cityBodyVisible }
          handleToggle = { this.toggleAddDisplay }
          addCity = { this.addItem }
        />
        <SearchCity
          orderBy = { this.state.orderBy }
          orderDir = { this.state.orderDir }
          onReOrder = { this.reOrder }
          onSearch = { this.SearchCity }
        />
        <ul className="item-list media-list">{filteredCities}</ul>
      </div>
    ) //return
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('cityNavigation')
); //render
