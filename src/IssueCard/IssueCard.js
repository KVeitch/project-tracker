import React from 'react';
import './IssueCard.scss'
const IssueCard = ({title, points, description, project}) => {
  return(
    <section className="section__issue">
      <h3>{project}</h3>
      <h2 className="section__issue--title">{title}</h2>
      <p className="section__issue--description">{description}</p>
      <footer>
        <p>Pts:<span className="section__footer--points"> {points}</span></p>
        <button type="button">Full Description</button>
      </footer>
    </section>
  )
}

export default IssueCard;