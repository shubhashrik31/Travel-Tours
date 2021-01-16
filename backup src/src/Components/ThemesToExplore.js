import React, { Component } from "react";

export class ThemesToExplore extends Component {
  render() {
    const myList = [
      { id: "a", value: "WildLife" },
      { id: "b", value: "Beach" },
      { id: "c", value: "Mountains" },
      { id: "d", value: "Heritage" },
      { id: "e", value: "Pilgrims" },
    ];
    return (
      <div>
        <h1>This section contains themes to explore</h1>
        <ul>
          {myList.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ThemesToExplore;
