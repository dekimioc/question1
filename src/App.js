import React from 'react';
import { connect } from 'react-redux';
import People from './components/People/People';
import House from './components/House/House';
import { fetchPeople, fetchHouses, fetchCompanies } from "./redux/actions";

const mapCompaniesIntoPeople = (people, companies) => {
  /* Map Company names into each person that they work for */
  let data = [];
  data.push(people, companies);
  return data;
};

const mapPeopleIntoHouses = (houses, people) => {
  /* Map Company names into each person that they work for */
  let data = [];
  data.push(houses, people);
  return data;
};

class App extends React.Component {
  componentDidMount() {
    this.props.getPeople();
    this.props.getHouses();
    this.props.getCompanies();
  }
  render() {
    return (
      <div className="main">
        <People data={this.props.people} />
        <House data={this.props.houses} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { data, companies, houses } = state;
  return {
    people: mapCompaniesIntoPeople(data, companies),
    houses: mapPeopleIntoHouses(houses, data)
  }
};

const mapDispatchToProps = dispatch => ({
  getPeople: () => dispatch(fetchPeople()),
  // These methods were added in case we also retrieve this data from the API
  getHouses: () => dispatch(fetchHouses()),
  getCompanies: () => dispatch(fetchCompanies())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);