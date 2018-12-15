import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MultiLevelMenu from './MultiLevelMenu';

{
    const data = [[
        {
            name: "item z",
            subitems: [
                [{ name: "item a-1" },
                { name: "item a-2" },],
                [{ name: "item a-3" }]

            ]
        },
        {
            name: "item y"
        },
        {
            name: "item x"
        },
        {
            name: "item v"
        }
    ],
    [
        {
            name: "item d",
            subitems: [
                [{ name: "item a-1" }],
                [{ name: "item a-2" },
                { name: "item a-3" },]

            ]
        },
        {
            name: "item b"
        },
        {
            name: "item a"
        },
        {
            name: "item c"
        }
    ]]

    ReactDOM.render(<MultiLevelMenu data={data} />, document.getElementById('root'));

}

