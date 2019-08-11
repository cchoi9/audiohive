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
      <div>
        <main>
          <h1>TUNE IN</h1>
        </main>
        <main>
          {concerts.map(concert => {
            return <Concert key={concert.id} concert={concert} />
          })}
        </main>
      </div>
    )
  }
}

export default EventPage
