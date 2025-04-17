import { useState } from "react";

import "./App.scss";
import Box from "./component/Box";
import rockImg from "./assets/rock.png";
import scissorsImg from "./assets/scissors.png";
import paperImg from "./assets/paper.png";

export const choice = Object.freeze({
  rock: {
    name: "Rock",
    img: rockImg,
  },
  scissors: {
    name: "Scissors",
    img: scissorsImg,
  },
  paper: {
    name: "Paper",
    img: paperImg,
  },
});

//1. 박스 2개 (title, 사진, 결과값)
//2. 가위 바위 보 버튼 있음.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임.
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6. 지면 빨강, 이기면 초록. 비기면 검정 테두리 색이 바뀜.

function App() {
  const [userSelect, setUserSelct] = useState();
  const [computerSelect, setComputerSeclect] = useState();
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    console.log("userChoice:", userChoice);
    setUserSelct(choice[userChoice]);

    let computerChoice = randomChoice();
    console.log(computerChoice);
    setComputerSeclect(computerChoice);

    //3 4의 결과를 가지고 누가 이겼는지 승패를 따진다.
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("itemArray:", itemArray);
    let randomIndex = Math.floor(Math.random() * itemArray.length);
    console.log("randomIndex:", randomIndex);
    let final = itemArray[randomIndex];
    return choice[final];
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    // user == computer tie
    // user == rock, computer == "scissors" user 이긴거지
    // user == "rock" computer == paper   user 진거지
    // user == scissors computer paper    user 이긴거지
    // user == scissors computer rock     user 진거지
    // user == paper computer rock   user 이긴거지
    // user paper computer scissors user 진거지

    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };

  return (
    <div>
      <div className="game">
        <Box title="You" item={userSelect} result={result}></Box>
        <Box title="Computer" item={computerSelect} result={result}></Box>
      </div>

      <div className="button-wrap">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
