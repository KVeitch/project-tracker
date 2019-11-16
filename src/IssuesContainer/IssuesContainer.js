import React from 'react';
import './IssuesContainer';
import IssueCard from '../IssueCard/IssueCard';

const IssuesContainer = ({issues}) => {
  //bob is to be removes after backend and redux in introduced
  const bob = [{title:'bug 1', project:'New Point',points:5, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {title:'bug2', project:'Old Point',points:8, description:'It done don\'t work'},
  {title:'Buggy bug 2', project:'Runner Map Third Street',points:1, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]
  const issueList = bob.map(issue => (<IssueCard {...issue} key={Date.now()+Math.random()} />) )

  // const issueList = issues.map(issue=> <issueCard issue />)
  return (
    <div className="main__container">
      <h1>Biggest Bugs</h1>
      {issueList}
    </div>
  )
}

export default IssuesContainer;