import React,{useState,useEffect} from "react";
import {useHistory, useParams, Link} from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    name: "",
    pan: "",
    gst: "",
    acc: ""
}

const AddEdit = () =>{
    const [state, setState] = useState(initialState);
    
    const {name,pan,gst,acc} = state;
    
    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const handleInputChange=(e)=>{
        const {name, pan,gst,acc} = e.target;
        setState({...state, [name]:value});
    };
    return (
        <div>
{/* <h2>Edit</h2> */}
        <div style={{marginTop:"100px"}}>
            <form style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent:"center"
            }}
            onSubmit={handleSubmit}
            >
                <label htmlFor = "name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" value={name} onChange={handleInputChange}/>
                <label htmlFor = "pan">PAN</label>
                <input type="text" id="pan" name="pan" placeholder="PAN Number" value={pan} onChange={handleInputChange}/>
                <label htmlFor = "gst">GST ID</label>
                <input type="text" id="gst" name="gst" placeholder="GST ID" value={gst} onChange={handleInputChange}/>
                <label htmlFor = "acc">Account No.</label>
                <input type="text" id="acc" name="acc" placeholder="Account Number" value={acc} onChange={handleInputChange}/>

                <input type="submit" value="Save"/>
                <Link to="/">
                    <input type="button" value="Back"/>
                </Link>
            </form>
        </div>
        </div>
    )
}

export default AddEdit;