import React from 'react';
import Card from './Cards'
import Data from './Data'


function App() {
    return (
    <>
        <h1 className="heading__style" >Top Netflix Series  ⚡ </h1>
        {Data.map((val) => {
            return (
                <Card 
                    key = {val.id}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    sname = {val.sname}
                    link = {val.link}
                />
            );
        })}
    </>
    );
}

export default App;