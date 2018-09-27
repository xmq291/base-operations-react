var React = require('react');

var CityList = React.createClass({

  handleDelete: function() {
    this.props.onDelete(this.props.whichItem)
  },

  render: function() {
    return(
      <li className="city-item media">
        <div className="media-left">
          <button className="city-delete btn btn-xs btn-danger" onClick={this.handleDelete}>
          <span className="glyphicon glyphicon-remove"></span></button>
        </div>
        <div className="city-info media-body">
          <div className="city-head">
            <span className="city-name">{this.props.singleItem.cityName}</span>
            <span className="add-date pull-right">{this.props.singleItem.addDate}</span>
          </div>
          <div className="country-name"><span className="label-item">Country: </span>
          {this.props.singleItem.countryName}</div>
          <div className="city-notes">{this.props.singleItem.cityNotes}</div>
        </div>
      </li>
    ) // return
  } // render
}); //CityList

module.exports = CityList;
