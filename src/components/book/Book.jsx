import React,{useState} from 'react'
import './Book.css'
const Book = () => {
    const[bid,setBid]=useState('');
    const[bname,setBname]=useState('');
    const[bprice,setBprice]=useState('');
    const[bauthor,setBauthor]=useState('');
    const[bpd,setBpd]=useState('');

    const readbookid =(event)=>{
        setBid(event.target.value);
        console.log(event.target.value)
    }
    const readbName =(event)=>{
        setBname(event.target.value);
        console.log(event.target.value)
    }
    const readprice =(event)=>{
        setBprice(event.target.value);
        console.log(event.target.value);
     
    }
    const readauthor =(event)=>{
    setBauthor(event.target.value);
    console.log(event.target.value)
}

const readpublisheddate =(event)=>{
    setBpd(event.target.value);
    console.log(event.target.value)
    }

  return (
    <div className='bo'>
       <form>
        <h1>
            books
        </h1>
        Book id:<input type='text' onChange={readbookid}></input><br/><br/>
        Name     :<input type='text' onChange={readbName}></input><br/><br/>
        price    :<input type='text' onChange={readprice}></input><br/><br/>
        author  :<input type='text' onChange={readauthor}></input><br/><br/>
        published date :<input type='date' onChange={readpublisheddate}></input><br/><br/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Book
