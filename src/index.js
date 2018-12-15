import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MultiLevelMenu from "./MultiLevelMenu";

{
	const data = [
		[
			{
				name: "item z",
				subitems: [
					[{ name: "item z-1" }, { name: "item z-2" }],
					[{ name: "item z-3" }]
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
					[{ name: "item d-1" }],
					[{ name: "item d-2" }, {
						name: "item d-3", subitems: [
							[{ name: "item d-3-1" }],
							[{
								name: "item d-3-2",
								subitems: [
									[{ name: "item d-3-2-1" }, { name: "item d-3-2-2" }],
									[{ name: "item d-3-2-3" }]
								]
							}, { name: "item d-3-3" }]
						]
					}]
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
		],
		[
			{
				name: "item g",
				subitems: [
					[{ name: "item a-1" }, { name: "item a-2" }],
					[{ name: "item a-3" }]
				]
			},
			{
				name: "item f"
			},
			{
				name: "item i"
			},
			{
				name: "item h"
			}
		]
	];

	ReactDOM.render(
		<MultiLevelMenu data={data} />,
		document.getElementById("root")
	);
}
