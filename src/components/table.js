import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: [
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 5]
            ],
            disp: false,
        }
    }

    loadText = () => {
        var tileText = ["Get Asked to Sign Profile","Score a Hat Trick","Opponent has Anime PP","Someone Missed an Open Net","Toxicity in Chat", 
                        "Pre-flip Goal","Low Five","Someone own Goals","Flip-Reset Goal","Opponent Using Weird Car", 
                        "3 Minute Overtime","Passing Play Goal","Score a 0 Second Goal","Ceiling Shot","Opponent rage quit (ff)", 
                        "Get into Rule #1","Fake an Opponent","Make an Epic Save","Musty Flick Goal","Demo Both Opponents (In succession)", 
                        "Team Pinch Goal","Get a Lag Indicator","Double Tap Goal","Someone whiffs","Bump/Demo Goal", 
                        "You Miss Boost", "Map is Salty Shores (day or night)", "Team Double Commits", "Opponents Double Commits", "Turtle Goal", 
                        "Someone's using Poof Goal Explosion", "Get 3 Assists", "Get 3 Saves", "Have the Best Ping in Lobby", "Score 2 Goals in the first Minute",
                        "Whiff a Flick"
                        ];

        var usedIndex = [];

        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                do
                {
                    var index = Math.floor(Math.random() * tileText.length);

                } while (usedIndex.includes(index));
                usedIndex.push(index);
                this.state.rows[i][j] = tileText[index];
            }
        }
        this.state.rows[2][2] = "Free";
        this.disp = true;
        this.forceUpdate();
    }

    handleClick = (e) => {
        console.log(e.target.style.background);
        if (e.target.style.background === "red") {
            e.target.style.background = "green";
        }
        else {
            e.target.style.background = "red";
        }
    }

    render () {
        let content;
        const display = this.disp;
        if (display) {
            content = 
            <React.Fragment>
                <table align="center" cellSpacing="0" cellPadding="0" style={tableStyle}>
                    <tbody>
                        <tr style={rowStyle}>
                            <th style={itemStyle} onClick={this.handleClick}>{this.state.rows[0][0]}</th>
                            <th style={itemStyle} onClick={this.handleClick}>{this.state.rows[0][1]}</th>
                            <th style={itemStyle} onClick={this.handleClick}>{this.state.rows[0][2]}</th>
                            <th style={itemStyle} onClick={this.handleClick}>{this.state.rows[0][3]}</th>
                            <th style={itemStyle} onClick={this.handleClick}>{this.state.rows[0][4]}</th>
                        </tr>
                        <tr>
                            <th style={itemStyle} onClick={this.handleClick}>{this.state.rows[1][0]}</th>
                            <th style={itemStyle} onClick={this.handleClick}>{this.state.rows[1][1]}</th>
                            <th style={itemStyle} onClick={this.handleClick}>{this.state.rows[1][2]}</th>
                            <th style={itemStyle} onClick={this.handleClick}>{this.state.rows[1][3]}</th>
                            <th style={itemStyle} onClick={this.handleClick}>{this.state.rows[1][4]}</th>
                        </tr>
                        <tr>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[2][0]}</th>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[2][1]}</th>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[2][2]}</th>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[2][3]}</th>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[2][4]}</th>
                        </tr>
                        <tr>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[3][0]}</th>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[3][1]}</th>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[3][2]}</th>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[3][3]}</th>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[3][4]}</th>
                        </tr>
                        <tr>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[4][0]}</th>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[4][1]}</th>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[4][2]}</th>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[4][3]}</th>
                            <th  style={itemStyle} onClick={this.handleClick}>{this.state.rows[4][4]}</th>
                        </tr>
                        </tbody>
                </table>
            </React.Fragment>
        }
        
        return (
            <React.Fragment>
                <button onClick={this.loadText} >Create Board</button>
                {content}
            </React.Fragment>
        );
    }
}


const tableStyle = {
    tableLayout: "fixed",
    width: "70%",
    border: '5px solid white'
}

const rowStyle = {
    width: "15%",
    position: "relative",
}

const itemStyle = {
    overflow: "hidden",
    padding: "3.5vw", 
    opacity: "0.8",
    border: '1px solid white',
    background: "red"
}

const togleStyle = {
    overflow: "hidden",
    padding: "3.5vw", 
    opacity: "0.8",
    border: '1px solid white',
    background: "green"
}


export default Table;