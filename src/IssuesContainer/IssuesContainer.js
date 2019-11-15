import React from 'react';
import './IssuesContainer';
import IssueCard from '../IssueCard/IssueCard';

const IssuesContainer = ({issues}) => {
  //bob is to be removes after backend and redux in introduced
  const bob = [{title:'bug 1'},{title:'bug2'}]
  const issueList = bob.map(issue => (<IssueCard info={issue} key={Date.now()+Math.random()} />) )

  // const issueList = issues.map(issue=> <issueCard issue />)
  return (
    <div className="main__container">
      <h1>Biggest Bugs</h1>
      {issueList}
    </div>
  )
}

export default IssuesContainer;