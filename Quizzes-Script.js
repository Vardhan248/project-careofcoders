//getting all required elements

const start_btn=document.querySelector(".startbutton button");
const info_box=document.querySelector(".info_box");
const exit_btn=info_box.querySelector(".buttons .exit");
const continue_btn=info_box.querySelector(".buttons .continue");
const quiz_box=document.querySelector(".quiz_box");
const timecount=quiz_box.querySelector(".timer .time_seconds");
const timeLine=quiz_box.querySelector("header .time_line");
const timeOff=quiz_box.querySelector("header .time_text");
const option_list=document.querySelector(".option_list");


//if start quiz button is clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");//it will show the info box
}

//if exit button is clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//it will hide the info box
}

//if continue button is clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//it will hide the info box
    quiz_box.classList.add("activeQuiz");//it will show the quiz box
    showQuestions(0);
    questioncounter(1);
    startTimer(15);
    startTimerLine(0);
}

let que_count=0;
let que_num=1;
let counter;
let counterLine;
let timeValue=15; 
let widthValue=0;
let userScore=0;

const next_btn=quiz_box.querySelector(".next_btn");
const result_box=document.querySelector(".result_box");
const restart_quiz=result_box.querySelector(".buttons .replay");
const quit_quiz=result_box.querySelector(".buttons .quit");

quit_quiz.onclick = ()=>{
   window.location.reload();
}

//if next button is clicked
next_btn.onclick =()=>{
    if(que_count < questions.length -1 )
    {
        que_count++;
        que_num++;
        showQuestions(que_count);
       questioncounter(que_num); 
       clearInterval(counter); 
       startTimer(timeValue);
       clearInterval(counterLine); 
       startTimerLine(widthValue);
       next_btn.style.display="none";
       timeOff.textContent="Time Left";
    }
    else
    {
        clearInterval(counter); 
        clearInterval(counterLine); 
        console.log("questions completed");
        showResultBox();
    }
}


//getting questions and options from array
function showQuestions(index)
{
    const que_text=document.querySelector(".qstn_text");
    let que_tag='<span>'+questions[index].num+". "+ questions[index].question +'</span>';
    let option_tag='<div class="option">'+questions[index].options[0]+'<span></span></div>'
                   + '<div class="option">'+questions[index].options[1]+'<span></span></div>'
                   + '<div class="option">'+questions[index].options[2]+'<span></span></div>'
                   + '<div class="option">'+questions[index].options[3]+'<span></span></div>';
    que_text.innerHTML=que_tag;
    option_list.innerHTML=option_tag;
    const option=option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onClick","optionSelected(this)");
        
    }
}

let tickicon='<div class="icon tick"><i class="fas fa-check"></i></div> ';
let crossicon='<div class="icon cross"><i class="fas fa-times"></i></div>  ';

function optionSelected(answer)
{
  clearInterval(counter); 
  clearInterval(counterLine);
  let userans=answer.textContent;
  let correctans=questions[que_count].answer;
  let allOptions=option_list.children.length;
  if(userans==correctans)
  {
    userScore+=1; 
    console.log(userScore);
     answer.classList.add("correct");
    console.log("answer is correct");
    answer.insertAdjacentHTML("beforeend",tickicon);
  }
  else
  {
    answer.classList.add("incorrect");
    console.log("answer is wrong");
    answer.insertAdjacentHTML("beforeend",crossicon);
    
    //if answer is wrong automatically selecting the correct option
    for (let i = 0; i < allOptions; i++) 
    {
     if(option_list.children[i].textContent==correctans)
     {
      option_list.children[i].setAttribute("class","option correct");
      option_list.children[i].insertAdjacentHTML("beforeend",tickicon);
     }
    }
  }
  //disabling all remaining options once user selected a option
  for (let i = 0; i < allOptions; i++) 
  {
    option_list.children[i].classList.add("disabled");
    
  }
   next_btn.style.display="block";
}

function showResultBox()
  {
    info_box.classList.remove("activeInfo");//it will hide the info box
    quiz_box.classList.remove("activeQuiz");//it will hide the quiz box
    result_box.classList.add("activeResult");//it will show the result box
    const scoreText=result_box.querySelector(".score_text");
    if(userScore>(questions.length/2)+1)
    {
      let scoreTag='<span>AND CONGRATS, YOU GOT <p>'+ userScore +'</p> OUT OF <P>'+questions.length+'</P></span>' ;
       scoreText.innerHTML = scoreTag;
    }
    else if(userScore<=(questions.length/2)+1 && userScore>=1)
    {
      let scoreTag='<span>AND NICE, YOU GOT <p>'+ userScore +'</p> OUT OF <P>'+questions.length+'</P></span>' ;
      scoreText.innerHTML = scoreTag;
    }
    else
    { 
      let scoreTag='<span>AND SORRY, YOU GOT <p>'+ userScore +'</p> OUT OF <P>'+questions.length+'</P></span>' ;
      scoreText.innerHTML = scoreTag;
    }
  }

function startTimer(time)
{
  counter=setInterval(timer,900);
  function timer()
  {
    timecount.textContent=time;
    time--;
    if(time<9)
    {
      let addZero=timecount.textContent;
      timecount.textContent="0"+addZero;
    }
    if(time<0)
    {
      clearInterval(counter);
      timecount.textContent="00";
      timeOff.textContent="Time Up";

      let correctans=questions[que_count].answer;
      let allOptions=option_list.children.length; 
     for (let i = 0; i < allOptions; i++) 
    {
     if(option_list.children[i].textContent==correctans)
     {
      option_list.children[i].setAttribute("class","option correct");
      option_list.children[i].insertAdjacentHTML("beforeend",tickicon);
     }
    }
    for (let i = 0; i < allOptions; i++) 
    {
      option_list.children[i].classList.add("disabled");
      
    }
     next_btn.style.display="block";
    }
  }
}
function startTimerLine(time)
{
  counterLine=setInterval(timer,29);
  function timer()
  {
    time+=1;
    timeLine.style.width=time+"px";
    if(time>549)
    {
      clearInterval(counterLine);
    } 
  }
}

function questioncounter(index)
{
const que_counter=quiz_box.querySelector(".total_que");
let que_counter_tag='<span><p>'+index+'</p>of<p>'+questions.length+'</p>Questions</span>';
que_counter.innerHTML=que_counter_tag;
}