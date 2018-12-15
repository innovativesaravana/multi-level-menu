import React, { Component } from "react";
import "./MultiLevelMenu.css";
import _ from "lodash";

const Item = props => {
  const { item } = props;
  const name = item.name;
  return (
    <div className={`item ${name}`}>
      <label className={`label ${name}`}>{name}</label>
      {
        (!_.isUndefined(item.subitems)&&<span>&#x25BA;</span>)
      }
    </div>
  );
};

const Group = props => {
  const { name, items } = props;
  // const sortedItems = _.sortBy(items);
  const sortedItems = _.orderBy(items, "name");
  return (
    <div className={`group ${name}`}>
      {_.map(sortedItems, item => {
        return <Item item={item} />;
      })}
    </div>
  );
};

const MenuContainer = props => {
  const {data} = props;
  return(
    <div className="container">
      {_.map(data, group => {
        return <Group name="group 3" items={group} />;
      })}
    </div>
  )
}

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
        <MenuContainer data={this.state.data}/>
      </div>
    );
  }
}

export default MultiLevelMenu;
