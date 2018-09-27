var React = require('react');

var AddCity = React.createClass({

  toggleCityDisplay: function() {
    this.props.handleToggle();
  },

  handleAdd: function(e) {
    var tempItem = {
      cityName: this.refs.inputcityName.value,
      countryName: this.refs.inputcountryName.value,
      addDate: this.refs.inputaddDate.value + ' ' +
        this.refs.inputaddTime.value,
      cityNotes: this.refs.inputcityNotes.value
    } //tempItem
    e.preventDefault();
    this.props.addCity(tempItem);
  }, //handleAdd

  render: function() {

    var displayCityBody = {
      display: this.props.bodyVisible ? 'block' : 'none'
    };

    return(
      <div className="panel panel-primary">
        <div className="panel-heading city-addheading" onClick={ this.toggleCityDisplay }>
        <span className="glyphicon glyphicon-plus"></span> Add A City</div>
        <div className="panel-body" style={ displayCityBody }>
          <form className="add-city form-horizontal"
          onSubmit={ this.handleAdd }>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="cityName">City</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  id="cityName" ref="inputcityName" placeholder="Enter the City Name" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="petOwner">Country</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  id="petOwner" ref="inputcountryName" placeholder="Enter the Country Name" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="addDate">Date</label>
              <div className="col-sm-4">
                <input type="date" className="form-control"
                  id="addDate" ref="inputaddDate" />
              </div>
              <label className="col-sm-2 control-label" htmlFor="addTime">Time</label>
              <div className="col-sm-4">
                <input type="time" className="form-control"
                  id="addTime" ref="inputaddTime" />
              </div>

            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="cityNotes">City Notes</label>
              <div className="col-sm-10">
                <textarea className="form-control" rows="4" cols="50"
                  id="cityNotes" ref="inputcityNotes" placeholder="Add a note of the City"></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary pull-right">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )//return
  } //render
}); // AddCity

module.exports = AddCity;
