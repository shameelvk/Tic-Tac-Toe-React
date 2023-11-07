import React,{useState,useRef} from 'react'
import Tic_Circle from '../Assets/circle.png'
import Tic_Cross from '../Assets/cross.png'
import './TicTacToe.css'

let data=['','','','','','','','',''];

const TicTacToe=()=> {
    
    let [count, setcount] = useState(0);
    const [Lock, setLock] = useState(false)
const titleRef = useRef(null);
const box1=useRef(null);
const box2=useRef(null);
const box3=useRef(null);
const box4=useRef(null);
const box5=useRef(null);
const box6=useRef(null);
const box7=useRef(null);
const box8=useRef(null);
const box9=useRef(null);
let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle=(e,num)=>{
        if(Lock){
            return 0;
        }
        if (count%2===0) {
            e.target.innerHTML=`<img src='${Tic_Cross}'>`
            data[num]='x';
            setcount(++count);
        }
        else{
            e.target.innerHTML=`<img src='${Tic_Circle}'>`
            data[num]='o';
            setcount(++count);
        }
        checkwon();
    }
    const checkwon=()=>{
        
        if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==''){
          
            win(data[2]);
        }else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!==''){
          
            win(data[5]);
        }else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!==''){
          
            win(data[8]);
        }else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!==''){
          
            win(data[6]);
        }else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!==''){
          
            win(data[7]);
        }else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!==''){
          
            win(data[8]);
        }else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!==''){
          
            win(data);
        }else if(data[6]===data[4]&&data[4]===data[2]&&data[2]!==''){
          
            win(data[2]);
        } else if(count===9){
            drew();
        }

    }
    const win=(winner)=>{
        setLock(true);
        if (winner==='x') {
            titleRef.current.innerHTML=`Congratulations:<img src='${Tic_Cross}'> Win`
            
        }else{
            titleRef.current.innerHTML=`Congratulations:<img src='${Tic_Circle}'> Win`
        }
    }
    const drew=()=>{
        setLock(true);
        titleRef.current.innerHTML=`Draw Game Please <span>Reset</span>`

    }
    const reset=()=>{
        setLock(false);
        data=['','','','','','','','',''];
        titleRef.current.innerHTML=`Tic Tac Toe Using <span>React</span>`;
        box_array.forEach((e)=>{
            e.current.innerHTML='';
        })
        setcount(0)

    }



  return (
    <div className='continer'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe Using <span>React</span></h1>
        <div className="borde">
            <div className="row1">
                <div className="boxes" ref={box1} onClick={(e)=>toggle(e,0)}></div>
                <div className="boxes" ref={box2} onClick={(e)=>toggle(e,1)}></div>
                <div className="boxes" ref={box3} onClick={(e)=>toggle(e,2)}></div>
            </div>
            <div className="row2">
                <div className="boxes" ref={box4} onClick={(e)=>toggle(e,3)}></div>
                <div className="boxes" ref={box5} onClick={(e)=>toggle(e,4)}></div>
                <div className="boxes" ref={box6} onClick={(e)=>toggle(e,5)}></div>
            </div>
            <div className="row3">
                <div className="boxes" ref={box7} onClick={(e)=>toggle(e,6)}></div>
                <div className="boxes" ref={box8} onClick={(e)=>toggle(e,7)}></div>
                <div className="boxes" ref={box9} onClick={(e)=>toggle(e,8)}></div>
            </div>

        </div>
        <button className="reset" onClick={reset}>Reset</button>
    </div>
  )
}

export default TicTacToe