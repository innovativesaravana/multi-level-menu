import React, { Component } from "react";
import "./MultiLevelMenu.css";
import _ from "lodash";

class Item extends Component {
  constructor(props) {
    super(props);
    const { item } = props;
    const name = item.name;
    this.state = {
      item: item,
      name: name
    };
  }
  render() {
    const name = this.state.name;
    const item = this.state.item;
    return (
      <div className={`item ${name}`}>
        <label className={`label ${name}`}>{name}</label>
        {
          (!_.isUndefined(item.subitems)&&<span>&#x25BA;</span>)
        }
      </div>
    );
  }
  
};

class Group extends Component {
  constructor(props) {
    super(props);
    const { name, items } = props;
    const sortedItems = _.orderBy(items, "name");
    this.state = {
      name: name,
      sortedItems: sortedItems
    };
  }
  render() {
    return (
      <div className={`group ${this.state.name}`}>
        {_.map(this.state.sortedItems, item => {
          return <Item item={item} />;
        })}
      </div>
    );
  }
  // const sortedItems = _.sortBy(items);
};

class MultiLevelMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {_.map(this.state.data, group => {
            return <Group name="group 3" items={group} />;
          })}
        </div>
      </div>
    );
  }
}

export default MultiLevelMenu;
