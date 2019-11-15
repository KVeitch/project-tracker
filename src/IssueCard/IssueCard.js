import React from 'react';

const IssueCard = () => {



  return(
    <section className="section__issue">
      <h2>IssueName</h2>
      <p>IssueDescription</p>
      <footer>
        <p>Pts:<span className="section__footer--points">1-8</span></p> <button type="button">Full Description</button>
      </footer>
    </section>
  )
}

export default IssueCard;