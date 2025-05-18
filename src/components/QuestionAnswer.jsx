import React from "react";
import Answers from "./Answers";


const QuestionAnswer = ({item,index,selectedHistory}) => {
    // let recentAskedQuestion;
    // if(item.type=='q'){
    // //   let historyArray=JSON.parse(localStorage.getItem("history") || "[]");
    // //   if(historyArray.includes(selectedHistory)){
    // //     recentAskedQuestion=""
    // //   }
    // console.log(selectedHistory)
    // console.log(item.text);
    // if(selectedHistory==item.text){
    //     return ;
    // }
    // }
  return (
    <>
      <div
        key={index + Math.random()}
        className={item.type == "q" ? "flex justify-end" : "" }
      >
        {item.type == "q" ? (
          <li
            key={index + Math.random()}
            className="text-right p-1   mt-2 mb-2 border-5  dark:bg-zinc-700  dark:border-zinc-700 bg-red-100  border-red-100 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl w-fit"
          >
            <Answers
              ans={item.text}
              anskey={index}
              totalResult={1}
              type={item.type}
            />
          </li>
        ) : (
          item.text.map((ansItem, ansIndex) => (
            <li key={ansIndex + Math.random()} className="text-left p-1">
              <Answers
                ans={ansItem}
                anskey={ansIndex}
                totalResult={item.length}
                type={item.type}
              />
            </li>
          ))
        )}
      </div>
    </>
  );
};

export default QuestionAnswer;
