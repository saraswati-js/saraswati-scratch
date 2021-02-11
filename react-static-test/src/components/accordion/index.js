import React from 'react';
import AccordionItem from './item';

const Accordion = ({ headers }) => {
  return (
    <div className="wrapper">
      <ul className="accordion-list">
        {headers.map((story, index) => (
          <li className="accordion-list__item" key={index}>
            {/* {console.log(story, index)} */}
            <AccordionItem header={story} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Accordion;
