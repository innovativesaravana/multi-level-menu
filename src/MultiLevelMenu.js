import React, { Component } from 'react';
import './MultiLevelMenu.css';
import _ from "lodash";

const Item = props => {
  const {
    name,
  } = props;
  return (
    <div className={`item ${name}`}>
    <label className={`label ${name}`}>{name}</label>
    </div>
  );
};

const Group = props => {
  const {
    name,
    items
  } = props;
  const sortedItems = _.sortBy(items);
  return (
    <div className={`group ${name}`}>
    {
      _.map(sortedItems, item => {
        return <Item name={item}/>
      })
    }
    </div>
  );
}

class MultiLevelMenu extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Group name="group 1" items={["item1","item2","item3","item4","item5"]}/>
          <Group name="group 2" items={["item6","item7","item8","item9","item4"]}/>
          <Group name="group 3" items={["item b","item a","item e","item d","item c"]}/>
        </div>
      </div>
    );
  }
}

export default MultiLevelMenu;
