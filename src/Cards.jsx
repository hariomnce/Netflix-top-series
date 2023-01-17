import React from 'react';
import Image from './Image';
import Heading from './Heading';

function Card(props) {
    return (
        <>
    <div className="cards">
      <div className="card">
        <Image imgsrc = { props.imgsrc } sname = { props.sname }/>
        <div className="card__info">
        <span className="card__category">{props.title}</span>
        <Heading sname = { props.sname }/>
          <a href={props.link} target="_blank" >
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  </>
    );
}

export default Card;