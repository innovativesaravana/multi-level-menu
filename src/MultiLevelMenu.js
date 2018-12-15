import React, { Component } from "react";
import "./MultiLevelMenu.css";
import _ from "lodash";

const Item = props => {
  const { item, displaySubmenu, itemClicked } = props;
  const name = item.name;
  return (
    <div className={`item ${name}`} onClick={() => itemClicked(name)}>
      <label className={`label ${name}`}>{name}</label>
      {!_.isUndefined(item.subitems) && (
        <span onMouseEnter={() => displaySubmenu(item.subitems)}>&#x25BA;</span>
      )}
    </div>
  );
};

const Group = props => {
  const { name, items, displaySubmenu, itemClicked } = props;
  // const sortedItems = _.sortBy(items);
  const sortedItems = _.orderBy(items, "name");
  return (
    <div className={`group ${name}`}>
      {_.map(sortedItems, item => {
        return (
          <Item
            item={item}
            displaySubmenu={displaySubmenu}
            itemClicked={itemClicked}
          />
        );
      })}
    </div>
  );
};

const MenuContainer = props => {
  const { data, displaySubmenu, itemClicked } = props;
  return (
    <div className="container">
      {_.map(data, group => {
        return (
          <Group
            name="group 3"
            items={group}
            displaySubmenu={displaySubmenu}
            itemClicked={itemClicked}
          />
        );
      })}
    </div>
  );
};

class MultiLevelMenu extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    const levelArray = [];
    levelArray.push(data);
    this.state = {
      data: data,
      levelArray: levelArray,
      selectedOption: "nothing selected"
    };
  }

  displaySubmenu = subitems => {
    const levelArray = this.state.levelArray;
    // const updatedLevelArray = levelArray
    if (!_.includes(levelArray, subitems)) {
      levelArray.push(subitems);
    }
    this.setState({
      levelArray: this.state.levelArray
    });
  };

  itemClicked = item => {
    const levelArray = [];
    levelArray.push(this.state.data);
    this.setState({
      selectedOption: item,
      levelArray: levelArray
    });
  };

  render() {
    const displaySubmenu = this.displaySubmenu;
    const itemClicked = this.itemClicked;
    return (
      <div className="App">
        <div class="test">Selected Option: {this.state.selectedOption}</div>
        {_.map(this.state.levelArray, data => {
          return (
            <MenuContainer
              data={data}
              displaySubmenu={displaySubmenu}
              itemClicked={itemClicked}
            />
          );
        })}
      </div>
    );
  }
}

export default MultiLevelMenu;
