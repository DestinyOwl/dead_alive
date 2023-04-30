import { useState, useRef } from 'react';
import Random from './config/Random';
import HandleCase from './config/HandleCase';
import Decompose from './config/Decompose';
import Alive from './config/Alive.js';
import Dead from './config/Dead';
import none from './assets/none.png';
import AliveRabbit from './assets/Alive.png';
import DeadRabbit from './assets/Dead.png';
import Particle from './Background';



//Getting Random 4 digit Number
let number = Random();

//History table
let History = [];

//Message History
let previous = " ";

let listItems ;


function Dead_Alive (){

//Modal to display
const [modal, setModal] = useState(false);
  
//Initial modal state
if(modal) {
  document.body.classList.add('active-modal')
} else {
  document.body.classList.remove('active-modal')
}


//Message to display
let [message, setMessage] = useState('');

//Rabbit State
let [rabbitState, setRabbitState] = useState([none, none, none, none]);

//Input of the user
let inputRef = useRef('');

//Initializing the answer
let answer = Decompose(inputRef.current.value);


//Modal toggle function
let toggleModal = () => {
  setModal(!modal);
};

//Message display function
let event = () =>{

//Initializing Rabbit Array State
let state = [' ', ' ', ' ', ' '];

//Initilizing Dead Rabbit Index
let i = 0;

//Initilizing Dead Rabbit Index
let j = 0;

//Getting the answer from the input
answer = Decompose(inputRef.current.value);


//Setting the Rabbit state
setRabbitState(state);



//Setting up the message using usestate
setMessage(HandleCase(answer,Dead(number,answer),Alive(number,answer)-Dead(number,answer)));

//Adding answer to history
History.push(previous+" | "+message);


listItems = History.map((history) =>
  <li className='p-5 font-xeare'>{history}</li>);

previous = inputRef.current.value;


//Assigning Dead Rabbit State
for(i;i<Dead(number,answer);i++){

state[i] = DeadRabbit;

}

//Assigning Alive Rabbit State
for(j =i;j<Alive(number,answer);j++){

  state[j] = AliveRabbit;
  
  }



}

let reset = () =>{
  window.location.reload(false);
}

  return (
  <div className='h-screen'>
    <Particle/>
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className='md:flex md:justify-center grid grid-cols-2 gap-4'>
          <img  className='place-self-end' src={rabbitState[0]}  alt=''/>
          <img  src={rabbitState[1]}  alt=''/>
          <img  className='place-self-end' src={rabbitState[2]}  alt=''/>
          <img  src={rabbitState[3]}  alt=''/>
        </div>
        <div className='text-center m-auto '>
          <h3 className='font-xeare text-secondary m-3' >{message}</h3>
          <div className='grid justify-items-center'>
            <input ref={inputRef} maxLength='4' placeholder="Try to guess the number" className="input input-bordered input-primary font-xeare w-full max-w-xs" />
            <div className='flex'>
              <button className="btn btn-outline btn-success font-xeare m-4"  onClick={event}>Submit</button>
              <button className="btn btn-outline btn-warning font-xeare m-4" onClick={reset}>reset</button>
              <label htmlFor="my-modal" className="btn btn-outline btn-error font-xeare m-4 px-5">Help</label>
            </div>
            <label htmlFor="my-drawer" className="btn btn-secondary drawer-button font-xeare text-primary ml-2">History</label>
          </div>
        </div>


      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        {listItems}
        </ul>
      </div>
    </div>

    <input type="checkbox" id="my-modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-xeare text-lg">How to PLay</h3>
        <p className="py-4 font-xeare">You need to guess the random generated number. The application will tell you if your guess has any digits that are present in the number but its position is false i.e Alive, and if you have any digits that are present and their position is correct in the number i.e Dead.</p>
        <div className="modal-action">
          <label htmlFor="my-modal" className="btn btn-primary font-xeare">Close</label>
        </div>
      </div>
    </div>

  </div>
  );
}

export default Dead_Alive;