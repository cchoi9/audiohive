import React from 'react'

export const Concert = props => {
  const concert = props.concert
  return (
    <div className="concert">
      <div className="photo">
        {/* <main>
          <img className="school-pic" src={concert.imageUrl} />
        </main> */}
      </div>
      <div className="details">
        <main>
          <h3>{concert.artist}</h3>
          <h4>{concert.venue}</h4>
          <p>
            {concert.date} {concert.time}
          </p>
          <a href={concert.tickets}>Tickets</a>
        </main>
      </div>
    </div>
  )
}
