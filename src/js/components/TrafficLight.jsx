import { useState } from "react";

const TrafficLight = () => {
	const [color, setColor] = useState("");

	const myColors = {
		red: "#f00000",
		yellow: "#f0f000",
		green: "#00f000"
	};

	const turnOn = () => {
		return {
			backgroundColor: myColors[color],
			boxShadow: `0 0 15px 5px ${myColors[color]}`,
		};
	};
	
	return (
		<div id="traffic-light">
			<div id="signal-pole"></div>
			<div id="signal-head">
				<div className="red light" style={color === "red" ? turnOn() : undefined} onClick={() => setColor("red")}></div>
				<div className="yellow light" style={color === "yellow" ? turnOn() : undefined} onClick={() => setColor("yellow")}></div>
				<div className="green light" style={color === "green" ? turnOn() : undefined} onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};

export default TrafficLight;