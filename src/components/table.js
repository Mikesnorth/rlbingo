import React from 'react';


class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: [
                ["Get Asked to Sign Profile","Score a Hat Trick","Opponent has Anime PP","Someone Missed an Open Net","Toxicity in Chat"],
                ["Pre-flip Goal","Low Five","Someone own Goals","Flip-Reset Goal","Opponent Using Weird Car"],
                ["3 Minute Overtime","Passing Play Goal","Free","Ceiling Shot","Opponent rage quit (ff)"],
                ["Get into Rule #1","Fake an Opponent","Make an Epic Save","Musty Flick Goal","Demo Both Opponents (In succession)"],
                ["Team Pinch Goal","Get a Lag Indicator","Double Tap Goal","Someone whiffs","Bump/Demo Goal"]
            ]
        }
    }
    handleClick = (e) => {
        e.target.style.backgroundColor = "green";
    }

    render () {
        return (
            <table align="center" cellspacing="0" cellpadding="0" style={tableStyle}>
                <caption>Rocket League Bingo</caption>
                <tr style={rowStyle}>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[0][0]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[0][1]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[0][2]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[0][3]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[0][4]}</div></th>
                </tr>
                <tr>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[1][0]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[1][1]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[1][2]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[1][3]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[1][4]}</div></th>
                </tr>
                <tr>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[2][0]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[2][1]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[2][2]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[2][3]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[2][4]}</div></th>
                </tr>
                <tr>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[3][0]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[3][1]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[3][2]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[3][3]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[3][4]}</div></th>
                </tr>
                <tr>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[4][0]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[4][1]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[4][2 ]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[4][3]}</div></th>
                    <th><div style={cellStyle} onClick={this.handleClick}>{this.state.rows[4][4]}</div></th>
                </tr>
            </table>
        );
    }
}


const tableStyle = {
    tableLayout: "fixed",
    width: "50%",
    borderCollapse: "collapse"
}

const rowStyle = {
    width: "15%",
    position: "relative",
    borderCollapse: "collapse",
}

const cellStyle = {
    background: 'red',
    padding: "3.5vw",
    borderCollapse: "collapse",
    overflow: "hidden"
    
}


export default Table;