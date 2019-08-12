import React, {Component} from 'react'

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <main>
          <h1 className="animate-welcome">AUDIO HIVE</h1>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/honeycomb-22-961720.png"
            className="mt-4 center-block img-responsive"
          />
        </main>
      </div>
    )
  }
}

export default HomePage
