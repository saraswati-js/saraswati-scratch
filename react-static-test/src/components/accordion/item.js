import React, { Component } from 'react'
import Tree from '../Tree'
import { treeSample1 as treedata } from '../../_sample-data/data'

// TODO: Convert to react hooks.
class AccordionItem extends Component {
  state = { opened: false }

  render() {
    const { props: { header }, state: { opened } } = this
    const className = `accordion-item ${opened && 'accordion-item--opened'}`;
    const onClick = () => { this.setState({ opened: !opened }) }
    
    return (
      <div className={className} onClick={onClick}>
        <div className="accordion-item__line">
          <p className="accordion-item__title">{header}</p>
          <span className="accordion-item__icon" />
        </div>
        <div className="accordion-item__inner">
          <div className="accordion-item__content">
            <Tree data={treedata} />
          </div>
        </div>
      </div>
    );
  }
}

export default AccordionItem
