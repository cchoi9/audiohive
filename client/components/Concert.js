import React from 'react'

export const Concert = props => {
  const concert = props.concert
  return (
    <tr className="text-white" key={concert.id}>
      <td className="text-center">{concert.date}</td>
      <td>{concert.time}</td>
      <td>{concert.artist}</td>
      <td>{concert.venue}</td>
      <td className="td-tickets text-right">
        <a href={concert.tickets} className="btn btn-primary" target="_blank">
          Tickets
        </a>
      </td>
    </tr>
  )
}
