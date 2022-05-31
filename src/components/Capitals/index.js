import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedState: countryAndCapitalsList[0].id}

  onDisplayCountry = event => {
    console.log(event.target.value)
    this.setState({selectedState: event.target.value})
  }

  getCountry = () => {
    const {selectedState} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === selectedState,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {selectedState} = this.state
    const country = this.getCountry(selectedState)

    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select
              value={selectedState}
              className="select-box"
              onChange={this.onDisplayCountry}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  key={eachCountry.id}
                  value={eachCountry.id}
                  className="option"
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="descriptive">is capital of which country?</p>
          </div>
          <h1 className="display-result">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
