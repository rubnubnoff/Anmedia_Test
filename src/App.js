import React, { Component } from 'react';
import { Controllers } from './components/Controllers';
import { View } from './components/View';
import './App.sass';
import blue  from './icons/blue.png';
import green  from './icons/green.png';
import pink  from './icons/pink.png';
import funny from './icons/funny.png';
import angry from './icons/angry.png';
import amuze from './icons/amuze.png';

const icons = {
  bodies: [
    {name: 'blue', icon: blue},
    {name: 'green', icon: green},
    {name: 'pink', icon: pink}
  ],
  faces: [
    {name: 'funny', icon: funny},
    {name: 'angry', icon: angry},
    {name: 'amuze', icon: amuze}
  ]
}
const grades = {
  junior: [
    'Html', 'CSS', 'Adaptive', 'Base JS', 'SQL', 'Git', 'ESLint', 'SASS', 'Pug', 'Gulp', 'Webpack'
  ],
  middle: [
    'TDD', 'JS', 'Canvas', 'SVG', 'Bash', 'CI/CD', 'React', 'D3.js', 'Vue', 'SPA', 'ES6'
  ],
  senior: [
    'ThreeJs', 'WebGl', 'Chrome Extension', 'Node', 'Express', 'Architecture'
  ]
}
class App extends Component {
  state = {
    activeRangeValue: grades.junior,
    activeBodyIcon: blue,
    activeFaceIcon: funny,
    rangeValue: '0'
  };
  changeGrade = (e) => {
    const { target: { value } } = e;
    const { junior, middle, senior } = grades;
    this.setState({ rangeValue: value });
    switch(+value) {
      case 1: 
        this.setState({ activeRangeValue: [...junior, ...middle] });
        break;
      case 2:
        this.setState({ activeRangeValue: [...junior, ...middle, ...senior] });
        break;      
      default:
        this.setState({ activeRangeValue: junior });
        break;
    }
  }
  changeIcon = (propetyStateName, arrayName, iconName) => {
    arrayName.forEach(item => {
      if (item.name === iconName) {
        return this.setState({ [propetyStateName]: item.icon });
      }
    });
  }
  changeBodyIcon = (value) => {
    return () => {
      this.changeIcon('activeBodyIcon', icons.bodies, value);
    }   
  }
  changeFaceIcon = (value) => {
    return () => {
      this.changeIcon('activeFaceIcon', icons.faces, value);
    }    
  }
  render() {
    return (
      <div className='app-container'>
        <div className="app">
            <Controllers 
              icons = { icons } 
              changeBodyIcon = { this.changeBodyIcon }
              changeFaceIcon = { this.changeFaceIcon }
              changeGrade = { this.changeGrade }
              rangeValue = { this.state.rangeValue }
              activeBodyIcon = { this.state.activeBodyIcon }
              activeFaceIcon = { this.state.activeFaceIcon }
            />
            <View 
              activeBodyIcon = { this.state.activeBodyIcon }
              activeFaceIcon = { this.state.activeFaceIcon }
              activeRangeValue = { this.state.activeRangeValue }
            />
        </div>
      </div>
    );
  }
}

export default App;
