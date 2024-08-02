import Header from "./Header";
import Container from "./Container";
import History from "./History";
import BasicButton from "./BasicButton";
import { useState } from "react";

const App = () => {
  const [newGame, setNewGame] = useState(false);
  const [scorePlayer, setScorePlayer] = useState(0);
  const [winPlayer, setWinPlayer] = useState("null");
  const [winComputer, setWinComputer] = useState("null");
  const [scoreComputer, setScoreComputer] = useState(0);
  const [historyRows, setHistoryRows] = useState([]);

  const handleNewGame = () => {
    setNewGame(true);
    setScorePlayer(0);
    setScoreComputer(0);
    setWinPlayer("null");
    setWinComputer("null");
    setHistoryRows([]);
  };

  const choseOption = (option) => {
    const result = getResult(option);
    addScores(result.playerChoice, result.computerChoice, result.result);
  };

  const addScores = (playerChoice, computerChoice, result) => {
    setHistoryRows([
      ...historyRows,
      {
        id: historyRows.length + 1,
        col1: playerChoice,
        col2: computerChoice,
        winner: result,
      },
    ]);
  };

  const getResult = (playerChoice) => {
    //Make computer choice
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    const combinations = [
      {
        playerChoice: "Rock",
        computerChoice: "Paper",
        result: "Computer",
      },
      {
        playerChoice: "Rock",
        computerChoice: "Scissors",
        result: "You",
      },
      {
        playerChoice: "Paper",
        computerChoice: "Rock",
        result: "You",
      },
      {
        playerChoice: "Paper",
        computerChoice: "Scissors",
        result: "Computer",
      },
      {
        playerChoice: "Scissors",
        computerChoice: "Rock",
        result: "Computer",
      },
      {
        playerChoice: "Scissors",
        computerChoice: "Paper",
        result: "You",
      },
      {
        playerChoice: "Rock",
        computerChoice: "Rock",
        result: "Draw",
      },
      {
        playerChoice: "Paper",
        computerChoice: "Paper",
        result: "Draw",
      },
      {
        playerChoice: "Scissors",
        computerChoice: "Scissors",
        result: "Draw",
      },
    ];

    const result = combinations.find((combination) => combination.playerChoice == playerChoice && combination.computerChoice == computerChoice);

    if (result.result === "You") {
      setScorePlayer((prevScore) => prevScore + 1);
      setWinPlayer("outlined");
      setWinComputer("null");
    } else if (result.result === "Computer") {
      setScoreComputer((prevScore) => prevScore + 1);
      setWinPlayer("null");
      setWinComputer("outlined");
    } else {
      setWinPlayer("null");
      setWinComputer("null");
    }

    return result;
  };

  return (
    <div>
      <Header />
      {newGame ? (
        <>
          <Container
            scorePlayer={scorePlayer}
            scoreComputer={scoreComputer}
            choseOption={choseOption}
            winPlayer={winPlayer}
            winComputer={winComputer}
          />
        </>
      ) : null}
      <BasicButton onClick={handleNewGame} label="Start New Game" />
      <History rows={historyRows} />
    </div>
  );
};

export default App;
