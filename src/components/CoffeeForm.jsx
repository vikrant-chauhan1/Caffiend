import {coffeeOptions} from "../utils"
import { useState } from "react"; 
import Modal from "./Modal";  
import Authentication from "./Authentication";


export default function CoffeeForm(props){
    const{isUserAuthenticated} =props;
    const [showModal,setShowModal]= useState(false);
    const[selectedCoffee,setSelectedcoffee]=useState(null);
    const [showCoffeeTypes,setShowCoffeeTypes]=useState(false);
    const[coffeeCost,setCoffeeCost]= useState(0);
    const[hour,setHour]=useState(0);
    const[min,setMin]=useState(0);

    function handleSubmitForm(){
        if(!isUserAuthenticated){
            setShowModal(true);
            
        }
        console.log(selectedCoffee,coffeeCost,hour,min);
    }
    return(
        <>
            {showModal && (
                <Modal handleCloseModal={()=>{setShowModal(false)}} >
                    <Authentication />
                </Modal>
            )}
            <div className="section-header"> 
                <i className="fa-solid fa-pencil" />
                <h2>Start Tracking Today</h2>
            </div>
            <h4>Select coffee type</h4>
            <div className="coffee-grid">
                {coffeeOptions.slice(0,6).map((option,optionIndex)=>{
                    return(
                        <button onClick={()=>{setSelectedcoffee(option.name) 
                        setShowCoffeeTypes(false)}} className={"button-card "+ (option.name===selectedCoffee?" coffee-button-selected" : "") } key={optionIndex}>
                            <h4>{option.name}</h4>
                            <p>{option.caffeine} mg</p>
                        </button>
                        
                    )

                })}
                <button  onClick={()=>{setShowCoffeeTypes(true)
                    setSelectedcoffee(false)
                }} 
                     className={"button-card "+ (showCoffeeTypes?" coffee-button-selected" : "") }>
                    <h4>Other</h4>
                    <p>n/a</p>
                </button>
            </div>
            {showCoffeeTypes && (
                 <select onChange={(event)=>{
                    setSelectedcoffee(event.target.value)
                 }} name="coffee-list" id="coffee-list">
                 <option value="null">Select type</option>
                 {coffeeOptions.map((option,optionIndex)=>{
                     return(
                         <option value={option.name} key={optionIndex}>
                             {option.name} {option.caffeine} mg
 
                         </option>
                     );
                 })}
             </select>
                
            )}
           
            <h4>Add the cost ($)</h4>
            <input type="number" className="w-full" placeholder="4.50" value={coffeeCost} onChange={(event)=>{
                setCoffeeCost(event.target.value);
                

            }}/>
            <h4>Time since consumption</h4>
            <div className="time-entry">
                <div>
                    <h6>Hours</h6>
                    <select  id="hours-select" onChange={(event)=>{
                        setHour(event.target.value);
                    }}>
                        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23].map((hour,hourIndex)=>{
                            return(
                                <option key={hourIndex} value={hour}>{hour}</option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <h6>Mins</h6>
                    <select  id="hours-select" onChange={(event)=>{
                        setMin(event.target.value);
                    }}>
                        {[0,5,10,15,20,25,30,35,40,45,50,55].map((mins,minsIndex)=>{
                            return(
                                <option key={minsIndex} value={mins}>{mins}</option>
                            );
                        })}
                    </select>
                </div>

            </div>  
            <button onClick={handleSubmitForm}>Add the entry</button>
        
        
        
        </>
    );
}