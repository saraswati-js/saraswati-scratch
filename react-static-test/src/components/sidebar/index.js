import React from 'react'

import Header from './header'
import Accordion from '../accordion'
import { accordianHeaders } from '../../_sample-data/data'

export default () => (
  <nav id="sidebar">
    <Header />
    <Accordion headers={accordianHeaders} />
  </nav>
)
