import React, { Component } from 'react';
import BarProgess from './BarProgess';
class Langages extends Component {
    state = {
        languages: [
            // {id:3, value: "Html & Css", xp: 1.8},
            {id:1, value: "JavaScript", xp: 1.2},
            {id:2, value: "Java", xp: 0.5},
            {id:4, value: "Php", xp: 2.0},
            {id:5, value: "C#", xp: 1},
            {id:6, value: "Kotlin", xp: 0.4},
            {id:7, value: "Python", xp: 0.5},
        ],
        frameWorks: [
            {id: 1, value: "NodeJS", xp: 0.4},
            {id: 1, value: "Bootstrap", xp: 2},
            {id: 3, value: "Angular", xp: 0.9},
            {id: 4, value: "React", xp: 1.6},
            {id: 5, value: "Laravel", xp: 0.8},
            {id: 6, value: "Symfony", xp: 0.5},
        ]
    }

    render () {
        let {languages, frameWorks} = this.state;
        return (
            <div className='languagesFrameworks'>
                <BarProgess
                languages = {languages}
                className= 'landuagesDisplay'
                tittle= 'langages'/>
                <BarProgess
                languages = {frameWorks}
                className= 'frameworkDisplay'
                tittle= 'frameWorks & bibliothèques'
                />
            </div>
        )
    }
}

export default Langages;