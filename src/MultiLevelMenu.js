import React, { Component } from "react";
import "./MultiLevelMenu.css";
import _ from "lodash";
import one from "./audio/one_to_eight/one.mp3";
import two from "./audio/one_to_eight/two.mp3";
import three from "./audio/one_to_eight/three.mp3";
import four from "./audio/one_to_eight/four.mp3";
import five from "./audio/one_to_eight/five.mp3";
import six from "./audio/one_to_eight/six.mp3";
import seven from "./audio/one_to_eight/seven.mp3";
import eight from "./audio/one_to_eight/eight.mp3";

import A from "./audio/a_to_h/a.mp3";
import B from "./audio/a_to_h/b.mp3";
import C from "./audio/a_to_h/c.mp3";
import D from "./audio/a_to_h/d.mp3";
import E from "./audio/a_to_h/e.mp3";
import F from "./audio/a_to_h/f.mp3";
import G from "./audio/a_to_h/g.mp3";
import H from "./audio/a_to_h/h.mp3";

import rook from "./audio/pices/rook.mp3";
import bishop from "./audio/pices/bishop.mp3";
import knight from "./audio/pices/knight.mp3";
import pawn from "./audio/pices/pawn.mp3";
import queen from "./audio/pices/queen.mp3";
import king from "./audio/pices/king.mp3";

import black_win from "./audio/terms/black_win.mp3";
import check from "./audio/terms/check.mp3";
import checkmate from "./audio/terms/checkmate.mp3";
import draw from "./audio/terms/draw.mp3";
import king_side_castle from "./audio/terms/king_side_castle.mp3";
import queen_side_castle from "./audio/terms/queen_side_castle.mp3";
import takes from "./audio/terms/takes.mp3";
import white_win from "./audio/terms/white_win.mp3";





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

  playMove = item => {
    var keyword = "Rxa6#"
    var terms = _.split(keyword,'')

    var audioHash = {
      "a" : A,
      "b" : B,
      "c" : C,
      "d" : D,
      "e" : E,
      "f" : F,
      "g" : G,
      "h" : H,

      "1" : one,
      "2" : two,
      "3" : three,
      "4" : four,
      "5" : five,
      "6" : six,
      "7" : seven,
      "8" : eight,

      "R" : rook,
      "N" : knight,
      "B" : bishop,
      "Q" : queen,
      "K" : king,

      "x" : takes,
      "+" : check,
      "#" : checkmate,
      "1/2 - 1/2" : draw,
      "O-O" : king_side_castle,
      "O-O-O" : queen_side_castle,
      "0-1" : black_win,
      "1-0" : white_win,
  }

  var timeout = 0
  _.map(terms, term => {
    var aud = new Audio(audioHash[term])
    setTimeout(function() { aud.play(); }, timeout)
    timeout = timeout + 800;
  })
  };

  render() {
    const displaySubmenu = this.displaySubmenu;
    const itemClicked = this.itemClicked;
    return (
      <div className="App">
      <div onClick={() => this.playMove()}>test</div>
      </div>
    );
  }
}

export default MultiLevelMenu;
