import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom';
import {Concert} from './Concert'

class EventPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      concerts: []
    }
  }
  async componentDidMount() {
    try {
      const concerts = await axios.get(`/api/concerts`)
      if (concerts) {
        this.setState({concerts: concerts.data})
      }
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const concerts = this.state.concerts
    return (
      <div className="wrapper tutorial-page">
        <div className="main main-raised main-translucent">
          <div className="section">
            <div className="container">
              <table className="table table-hover table-responsive">
                <thead className="thead-dark">
                  <tr>
                    <th className="text-center text-white">Date</th>
                    <th className="text-white">Time</th>
                    <th className="text-white">Artist</th>
                    <th className="text-white">Venue</th>
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
