'use client';
import Image from 'next/image'
import styles from './page.module.css'
import React , { useState } from 'react';
import './globals.css';
import OpenAI from 'openai';

const dotenv = require('dotenv')
dotenv.config({path: '../../.env'})

console.log('hi '+ process.env.OPENAI_API_KEY)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

function App() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    
    event.preventDefault();
    setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
  }
  return(
    <div className="wrapper">
      <h1>Hello! What symptoms are you dealing with right now? </h1>
      {submitting &&
       <div>Submtting Form...</div>
     }
      <form onSubmit={handleSubmit} >
      <fieldset>
         <label> 
           <input name="name" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
