var React = require('react');

var SearchCity = React.createClass({

  handleSort: function(e) {
    this.props.onReOrder(e.target.id, this.props.orderDir);
  }, //handleSort

  handleOrder: function(e) {
    this.props.onReOrder(this.props.orderBy, e.target.id);
  }, //handleSort

  handleSearch: function(e) {
    this.props.onSearch(e.target.value);
  }, //handleSearch

  render: function() {
    return(
      <div className="row search-city">
        <div className="col-sm-offset-3 col-sm-6">
          <div className="input-group">
            <input id="SearchCity" onChange={ this.handleSearch } placeholder="Search" type="text" className="form-control" aria-label="Search City" />
            <div className="input-group-btn">
              <button type="button" className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="#" id="cityName" onClick={ this.handleSort }>City { (this.props.orderBy === 'cityName') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                  <li><a href="#" id="countryName" onClick={ this.handleSort }>Country { (this.props.orderBy === 'countryName') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                  <li><a href="#" id="addDate" onClick={ this.handleSort }>Date { (this.props.orderBy === 'addDate') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#" id="asc" onClick={ this.handleOrder }>Ascending { (this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                  <li><a href="#" id="desc" onClick={ this.handleOrder }>Descending { (this.props.orderDir === 'desc') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    ) // return
  } // render
}); //SearchCity

module.exports = SearchCity;
