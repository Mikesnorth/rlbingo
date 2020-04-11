import React from 'react';
import GitHubLogo from './images/githubLogo.png';
import SteamLogo from './images/steamLogo.png';
import youTubeLogo from './images/youTubeLogo.png';

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: [
                [{title: 1, marked: false},{title: 2, marked: false}, {title: 3, marked: false},{title: 4, marked: false},{title: 5, marked: false}],
                [{title: 1, marked: false},{title: 2, marked: false}, {title: 3, marked: false},{title: 4, marked: false},{title: 5, marked: false}],
                [{title: 1, marked: false},{title: 2, marked: false}, {title: 3, marked: false},{title: 4, marked: false},{title: 5, marked: false}],
                [{title: 1, marked: false},{title: 2, marked: false}, {title: 3, marked: false},{title: 4, marked: false},{title: 5, marked: false}],
                [{title: 1, marked: false},{title: 2, marked: false}, {title: 3, marked: false},{title: 4, marked: false},{title: 5, marked: false}]
            ],
            disp: false,
            addedTiles: []
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
                this.state.rows[i][j].title = tileText[index];
                this.state.rows[i][j].marked = false;
                this.forceUpdate();
            }
        }
        this.state.rows[2][2].title = "Free";
        this.disp = true;
        this.forceUpdate();
    }

    handleClick = (i, j, e) => {

        
        if (e.target.style.background === "red") {
            e.target.style.background = "green";
            this.state.rows[i][j].marked = true;
        }
        else {
            e.target.style.background = "red";
            this.state.rows[i][j].marked = false;
        }
        this.checkWin();
    }

    async checkWin() {
        
        var pass=false;
        let temp = this.state.rows;
        
        //horizontal check
        for (var i=0; i<5; i++) {
            for (var j=0; j<5; j++) {
                if (temp[i][j].marked) {
                    pass=true;
                }
                else {
                    pass=false;
                    break;
                }
            }
            if (pass) {
                await sleep(10);
                alert("you win");
                return;
            }
        }

        //vertical check
        for (i=0; i<5; i++) {
            for (j=0; j<5; j++) {
                if (temp[j][i].marked) {
                    pass=true;
                }
                else {
                    pass=false;
                    break;
                }
            }
            if (pass) {
                await sleep(10);
                alert("you win");
                return;
            }
        }

        //diagonal check - left to right
        for (i=0; i<5; i++) {
            if (temp[i][i].marked) {
                pass=true;
            }
            else {
                pass=false;
                break;
            }
        }
        if (pass) {
            await sleep(10);
            alert("you win");
            return;
        }

        //diagonal check - right to left
        j = 4;
        for (i=0; i<5; i++) {
            if (temp[i][j].marked) {
                pass=true;
                j--;
            }
            else {
                pass=false;
                break;
            }
        }
        if (pass) {
            await sleep(10);
            alert("you win");
            return;
        }

    } 


    onSubmit = (e) => {
        e.preventDefault();
        var title = this.title;
        console.log(title);
    }
    noReload = (e) => {
        e.preventDefault();
    }

    render () {
        let content;
        const display = this.disp;
        if (display) {
            content = 
                <table align="center" cellSpacing="0" cellPadding="0" style={tableStyle}>
                    <tbody>
                        <tr style={rowStyle}>
                            <th id="00" style={itemStyle} onClick={(e) => this.handleClick("0", "0", e)}>{this.state.rows[0][0].title}</th>
                            <th style={itemStyle} onClick={(e) => this.handleClick("0", "1", e)}>{this.state.rows[0][1].title}</th>
                            <th style={itemStyle} onClick={(e) => this.handleClick("0", "2", e)}>{this.state.rows[0][2].title}</th>
                            <th style={itemStyle} onClick={(e) => this.handleClick("0", "3", e)}>{this.state.rows[0][3].title}</th>
                            <th style={itemStyle} onClick={(e) => this.handleClick("0", "4", e)}>{this.state.rows[0][4].title}</th>
                        </tr>
                        <tr>
                            <th style={itemStyle} onClick={(e) => this.handleClick("1", "0", e)}>{this.state.rows[1][0].title}</th>
                            <th style={itemStyle} onClick={(e) => this.handleClick("1", "1", e)}>{this.state.rows[1][1].title}</th>
                            <th style={itemStyle} onClick={(e) => this.handleClick("1", "2", e)}>{this.state.rows[1][2].title}</th>
                            <th style={itemStyle} onClick={(e) => this.handleClick("1", "3", e)}>{this.state.rows[1][3].title}</th>
                            <th style={itemStyle} onClick={(e) => this.handleClick("1", "4", e)}>{this.state.rows[1][4].title}</th>
                        </tr>
                        <tr>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("2", "0", e)}>{this.state.rows[2][0].title}</th>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("2", "1", e)}>{this.state.rows[2][1].title}</th>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("2", "2", e)}>{this.state.rows[2][2].title}</th>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("2", "3", e)}>{this.state.rows[2][3].title}</th>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("2", "4", e)}>{this.state.rows[2][4].title}</th>
                        </tr>
                        <tr>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("3", "0", e)}>{this.state.rows[3][0].title}</th>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("3", "1", e)}>{this.state.rows[3][1].title}</th>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("3", "2", e)}>{this.state.rows[3][2].title}</th>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("3", "3", e)}>{this.state.rows[3][3].title}</th>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("3", "4", e)}>{this.state.rows[3][4].title}</th>
                        </tr>
                        <tr>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("4", "0", e)}>{this.state.rows[4][0].title}</th>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("4", "1", e)}>{this.state.rows[4][1].title}</th>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("4", "2", e)}>{this.state.rows[4][2].title}</th>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("4", "3", e)}>{this.state.rows[4][3].title}</th>
                            <th  style={itemStyle} onClick={(e) => this.handleClick("4", "4", e)}>{this.state.rows[4][4].title}</th>
                        </tr>
                        </tbody>
                </table>
        }
        
        return (
            <React.Fragment>
                <div style={leftDiv}>
                    <button style={buttonStyle} onClick={this.loadText} >Create Board</button>
                    <h1>Welcome to Rocket League Bingo!</h1>
                    <h3>This is based off a video made by <a style={linkStyle} href="https://www.youtube.com/channel/UCocHtA1ADT6kTObipYzJoww">SunlessKhan</a></h3>
                    <h2><a style={linkStyle} href="https://www.youtube.com/watch?v=-3aVf_LilUc" target="_blank"><img class="logoLink" src={youTubeLogo}></img></a></h2>
                    <h3>
                        <a style={linkStyle} href="https://github.com/JakeCapra/rlbingo" target="_blank"><img class="logoLink" src={GitHubLogo}></img></a>
                        <a style={linkStyle} href="https://steamcommunity.com/id/hip_dips/" target="_blank"><img class="logoLink" src={SteamLogo}></img></a>
                        </h3>
                    <div>
                        <form onSubmit={this.noReload}>
                        <input type="text" placeholder="Enter a bingo tile" />
                        </form>
                        <button style={buttonStyle} onClick={this.onSubmit}>Enter</button>
                    </div>
                </div>
                <div style={rightDiv}>
                    {content}
                </div>
            </React.Fragment>
        );
    }
}

const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }


const tableStyle = {
    tableLayout: "fixed",
    width: "80%",
    border: '5px solid white',
    margin: "0",
    textAlign: "center"
}

const rowStyle = {
    width: "15%",
    position: "relative",
}

const itemStyle = {
    overflow: "hidden",
    padding: "3.2vw", 
    opacity: "0.8",
    border: '1px solid white',
    background: "red",
    userSelect: "none",
    cursor: "grab"
}

const buttonStyle = {
    borderRadius: "10%",
    margin: "1vw"
}

const leftDiv = {
    float: "left",
    width: "15%",
    minHeight: "99%",
    background: "purple",
    opacity: ".9",
    color: "white",
    border: '3px solid white',
    textAlign: "center",
    position: "absolute",
}

const rightDiv = {
    width: "80%",
    float: "right",
    textAlign: "center",
}

const linkStyle = {
    textDecoration: "none",
    color: "inherit"
}

export default Table;