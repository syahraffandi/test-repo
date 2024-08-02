import React from 'react'
import { useState } from 'react';
import './WallofAppreciation.css';
import { RiDoubleQuotesL } from "react-icons/ri";
import Masonry from 'react-masonry-css';



function WallofAppreciation() {
    const [inputArr,SetInputArr] = useState ([]);
    const [inputData,SetInputData] = useState({name:"", message:""});
    const [isAnonymous, setIsAnonymous] = useState(false); // State to manage anonymity

    

    // Handle input changes
    function handleInputChange(e){
        const {name,value}=e.target; // added this line
        SetInputData({
            ...inputData,
            [name]:value // revamped this line
        });
    }

    function handleAnonymousChange (e){
    setIsAnonymous(e.target.checked);
    }


    // Handle form submission
    function handleFormSubmit(e){
        e.preventDefault(); // added this line
        const nametoDisplay = isAnonymous ? "Anonymous" : inputData.name;

        SetInputArr([...inputArr, {...inputData, name: nametoDisplay}]);// revamped this line
        console.log(inputData,"input data what we entered");
        SetInputData({name:"",message:""});
        setIsAnonymous(false);
    }

    // Check stored data
    function handleCheck(){
        console.log("Object store in array",inputArr);
    }


    return (
        <div className='wrapper'>
                    <div className="showcase">
                        <div className="title">
                         <h1>Wall of Awesomeness (Made by Ara)</h1>
                         </div>
                         <Masonry
                            breakpointCols={3}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            <div className="example">
                            <RiDoubleQuotesL />
                            <h6>This is the example message. You can include feedbacks, appreciation, and suggestion for Ara. Nice to see you! :) </h6>
                            <h5>— Buzz Lightyear</h5>
                        </div>
                            {inputArr.map((info,ind) => {
                                            return (
                                                <div key= {ind} className="notes">
                                                    <RiDoubleQuotesL />
                                                    <div className="notes-message">
                                                        <h6>{info.message}</h6>
                                                    </div>
                                                    <div className="notes-name">
                                                        <h5>— {info.name}</h5>
                                                    </div>
                                                </div>
                                                    )  
                                                })
                                }
                        </Masonry>
                    </div>

                    <div className="SubmitForm">
                    <form onSubmit={handleFormSubmit}>
                            <h2>Write your thoughts</h2>
                            <h4>Message for Ara</h4>
                                <textarea
                                    name = "message" // added this line
                                    required placeholder='Jot down your message, feedback, thoughts, critics, thoughts, or appreciation for Ara here'
                                    value={inputData.message}
                                    onChange={handleInputChange}>
                                </textarea>    

                                <h4>From</h4>
                            <div className="input-name">
                                <input type="text"
                                    name = "name" // added this line
                                    autoComplete='off'
                                    required placeholder='Use real name please~'
                                    value={inputData.name}
                                    onChange={handleInputChange} />
                            </div>
                            
                            <div className="send-anonymous">
                                <label>
                                    <input 
                                    type="checkbox" 
                                    checked={isAnonymous}
                                    onChange={handleAnonymousChange}/> Send as anonymous
                                </label>
                            </div>
                            <button type="submit" >Submit</button>
                            
                </form>
                </div>

                
                </div>)}

export default WallofAppreciation