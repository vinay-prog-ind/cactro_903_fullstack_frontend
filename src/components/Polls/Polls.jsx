import React from 'react'
import CreatePoll from './CreatePoll'
import PollList from './ListPolls'
import PollDetails from './PollDetails'

export default function Polls() {
  return (
    <div>
        {/* <CreatePoll/> */}
        <PollList/>
        {/* <PollDetails/> */}
    </div>
  )
}
