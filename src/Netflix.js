import React from 'react';
import Card from './Cards'
import Data from './Data'

const Netflix = () => {
    return (Data.map((val) => {
        if(val.title == "A Netflix Original Series") {
            return (
                <Card 
                    key = {val.id}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    sname = {val.sname}
                    link = {val.link}
                />
            );
        }
    }))
}
export default Netflix;