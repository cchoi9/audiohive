import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom';
import {Concert} from './Concert'

class EventPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      concerts: [],
      search: '',
      concerts1: []
    }
  }
  async componentDidMount() {
    try {
      const concerts = await axios.get(`/api/concerts`)
      if (concerts) {
        this.setState({concerts: concerts.data, concerts1: concerts.data})
      }
    } catch (error) {
      console.error(error)
    }
  }
  handleChange = event => {
    this.setState({search: event.target.value})

    let concerts = this.state.concerts.filter(concert => {
      let str = ''
      let keys = Object.keys(concert)
      console.log(keys)
      for (let i = 1; i < 5; i++) {
        str += concert[keys[i]]
      }
      console.log(str)
      let regex = new RegExp(this.state.search, 'gi')
      console.log(regex)
      return str.match(regex)
    })
    console.log(concerts)
    this.setState({
      concerts1: concerts
    })
  }

  render() {
    const concerts = this.state.concerts1
    return (
      <div className="wrapper tutorial-page">
        <div className="main main-raised main-translucent">
          <div className="section">
            <div className="container">
              <div className="input-group mt-5">
                <div className="input-group-prepend bg-dark b-dark">
                  <div className="input-group-text bg-dark text-white">@</div>
                </div>
                <input
                  type="text"
                  value={this.state.search}
                  onChange={this.handleChange}
                  className="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Search"
                />
              </div>
              <table className="table table-hover table-responsive mt-5">
                <thead className="thead-dark">
                  <tr className="text-white">
                    <th className="text-center">Date</th>
                    <th>Time</th>
                    <th>Artist</th>
                    <th>Venue</th>
                    <th className="text-right text-white">Sale</th>
                  </tr>
                </thead>
                <tbody>
                  {concerts.map(concert => {
                    return <Concert key={concert.id} concert={concert} />
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// {concerts.map(concert => {
//   return <Concert key={concert.id} concert={concert} />
// })}

export default EventPage
