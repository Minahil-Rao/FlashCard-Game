// import { useState } from "react";
// function App(){
//   const [count,setCount]=useState(0);
//   return(
//     <div style={{display:"flex",gap:"20px"}}>
//       <button onClick={()=>setCount(count-1)}>Decrease</button>
//       {count}
//       <button onClick={()=>setCount(count+1)}>Increase</button>
//     </div>
//   )
// }
// export default App;

// import { useState } from "react";
// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <div style={{textAlign: 'center'}}>
//       <h2>Show/Hide Password</h2>
//       <input type={show ? "text" : "password"} placeholder="Enter Password" />
//       <br /><br />
//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide" : "Show"} Password
//       </button>
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";
// function App(){
//   const [task,setTask]=useState('');
//   const [todos,addTodos]=useState([]);
//   function todo(){
//     if(task.trim()!=""){
//       addTodos([...todos,task]);
//       setTask('');
//     }
//   }
//   return(
//     <div style={{textAlign:"center"}}>
//       <h2>TODO LIST</h2>
//     <input onChange={(event)=>setTask(event.target.value)} value={task} type="text" placeholder="Enter your Task"></input>
//     <br/><br/>
//     <button onClick={todo}>Add Todo</button>
//     <br/><br/>
//     <ul>
//       {
//       todos.map((list,index)=>(
//         <li style={{listStyle:"none"}} key={index}>{list}</li>
//       ))
//     }
//     </ul>
//     </div>
//   )
// }
// export default App;

// import { useState } from "react";

// function App() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [clickedIndex, setClickedIndex] = useState(null);
//   const [clickedColor, setClickedColor] = useState("");
//   const questions = [
//     {
//       question: "What is the capital of Pakistan?",
//       options: ["Karachi", "Islamabad", "Lahore", "Multan"],
//       answer: "Islamabad"
//     },
//     {
//       question: "Who is the founder of Microsoft?",
//       options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
//       answer: "Bill Gates"
//     },
//     {
//       question: "React is a...",
//       options: ["Library", "Language", "Framework", "Tool"],
//       answer: "Library"
//     },
//     {
//       question: "Which language runs in a web browser?",
//       options: ["Java", "C", "Python", "JavaScript"],
//       answer: "JavaScript"
//     },
//     {
//       question: "What does CSS stand for?",
//       options: ["Central Style Sheets", "Cascading Style Sheets", "Coded Style Sheets", "Colorful Style Sheets"],
//       answer: "Cascading Style Sheets"
//     },
//     {
//       question: "Who developed React JS?",
//       options: ["Facebook", "Google", "Microsoft", "Twitter"],
//       answer: "Facebook"
//     },
//     {
//       question: "Which HTML tag is used to create a link?",
//       options: ["<link>", "<a>", "<href>", "<url>"],
//       answer: "<a>"
//     },
//     {
//       question: "Which of these is a JavaScript framework?",
//       options: ["Laravel", "Django", "React", "Flask"],
//       answer: "React"
//     },
//     {
//       question: "Which tag is used to insert an image in HTML?",
//       options: ["<img>", "<src>", "<image>", "<pic>"],
//       answer: "<img>"
//     },
//     {
//       question: "How do you declare a variable in JavaScript?",
//       options: ["var myVar", "v myVar", "dim myVar", "int myVar"],
//       answer: "var myVar"
//     }
//   ];

//   const handleAnswer = (option, index) => {
//     const isCorrect = option === questions[currentQuestion].answer;

//     setClickedIndex(index);
//     setClickedColor(isCorrect ? "green" : "red");

//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     setTimeout(() => {
//       setClickedIndex(null);
//       setClickedColor("");
//       const next = currentQuestion + 1;
//       if (next < questions.length) {
//         setCurrentQuestion(next);
//       } else {
//         setShowResult(true);
//       }
//     }, 500);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Quiz App</h1>
//       <br />
//       {showResult ? (
//         <div>
//           <h2>Your Score: {score} / {questions.length}</h2>
//         </div>
//       ) : (
//         <>
//           <h2>{questions[currentQuestion].question}</h2>
//           <br />
//           {questions[currentQuestion].options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => handleAnswer(option, index)}
//               style={{
//                 backgroundColor: clickedIndex === index ? clickedColor : "",
//                 color: option === questions[currentQuestion].answer && clickedColor === 'green' ? 'white' : 'black',
//                 margin: '10px',
//                 padding: '10px'
//               }}
//               disabled={clickedIndex !== null}
//             >
//               {option}
//             </button>
//           ))}
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([
    { id: 1, value: 1, flipped: false },
    { id: 2, value: 6, flipped: false },
    { id: 3, value: 3, flipped: false },
    { id: 4, value: 6, flipped: false },
    { id: 5, value: 5, flipped: false },
    { id: 6, value: 1, flipped: false },
    { id: 7, value: 2, flipped: false },
    { id: 8, value: 4, flipped: false },
    { id: 9, value: 5, flipped: false },
    { id: 10, value: 2, flipped: false },
    { id: 11, value: 4, flipped: false },
    { id: 12, value: 3, flipped: false },
  ]);

  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const cardClick = (id) => {
    if (selectedCards.length < 2 && !matchedCards.includes(id)) {
      const card = cards.find((c) => c.id === id);
      setSelectedCards([...selectedCards, card]);
      setCards(cards.map((c) => (c.id === id ? { ...c, flipped: true } : c)));
    }
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      setCount(count + 1);
      const [first, second] = selectedCards;

      if (first.value === second.value) {
        setMatchedCards((prev) => [...prev, first.id, second.id]);
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === first.id || card.id === second.id
                ? { ...card, flipped: false }
                : card
            )
          );
          setSelectedCards([]);
        }, 1000);
      }
    }
  }, [selectedCards]);

  const shuffle = () => {
    const cd = [];
    for (let i = 1; i <= 6; i++) {
      cd.push({ id: i + "a", value: i, flipped: false });
      cd.push({ id: i + "b", value: i, flipped: false });
    }
    return cd.sort(() => Math.random() - 0.5);
  };

  const reset = () => {
    setCards(shuffle());
    setCount(0);
    setSelectedCards([]);
    setMatchedCards([]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="heading" style={{ paddingTop: "30px" }}>
        FlashCard Game
      </h1>
      <h2 style={{ color: "white" }}>Trials : {count}</h2>
      <div className="game-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.flipped ? "flipped" : ""}`}
            onClick={() => cardClick(card.id)}
          >
            <div className="card-face card-front"></div>
            <div className="card-face card-back">
              {card.flipped ? card.value : ""}
            </div>
          </div>
        ))}
      </div>
      <button className="btn" onClick={reset}>
        Reset Game
      </button>
      <br />
      <br />
    </div>
  );
}

export default App;
