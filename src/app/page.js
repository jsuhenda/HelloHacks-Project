'use client';
import Image from 'next/image'
import styles from './page.module.css'
import React , { useReducer, useState } from 'react';
import './globals.css';
import OpenAI from 'openai';

// const dotenv = require('dotenv')
// dotenv.config({path: '../../.env'})
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
//   dangerouslyAllowBrowser: true
// });

// const stream = await openai.chat.completions.create({
//   model: 'gpt-4',
//   messages: [{ role: 'user', content: symptoms }],
//   stream: true,
// });

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(true);
    }, 3000)
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });

  }
  return(
    <div className="wrapper">
      <h1>Hello! What symptoms are you dealing with right now? </h1>
      {submitting &&
       <div>
        You might be having these possible diseases:
        <ul style={{marginRight: 50 + 'em'}}>
          <li><b>COVID-19:</b> Loss of smell and taste (anosmia and ageusia, respectively) is a common symptom of COVID-19, caused by the SARS-CoV-2 virus. Other symptoms may include fever, cough, sore throat, fatigue, and muscle aches. <b>(4 of 4 symptoms detected)</b></li>
          <li><b>Influenza (Flu):</b> While loss of smell and taste is less common in influenza compared to COVID-19, it can still occur in some cases. The flu typically presents with fever, cough, sore throat, and muscle aches. <b>(4 of 4 symptoms detected)</b></li>
          <li><b>Common Cold:</b> A cold can lead to temporary loss of smell and taste along with symptoms like a runny or stuffy nose, sneezing, coughing, and sometimes a mild fever. <b>(3 of 4 symptoms detected)</b></li>
          <li><b>Sinusitis:</b> Inflammation of the sinuses can cause congestion and affect the sense of smell, along with symptoms like facial pain and pressure, cough, and post-nasal drip. <b>(2 of 4 symptoms detected)</b></li>
        </ul>
        Here are some common treatments and medications:
        <ul style={{marginRight: 50 + 'em'}}>
        <li>
          <b>Fever:</b> Over-the-counter fever reducing medications like <b><i>acetaminophen (Tylenol)</i></b> or <b><i>ibuprofen (Advil)</i></b> can help lower fever and relieve discomfort.
        </li>
        <li>
          <b>Cough:</b> Over-the-counter suppressants or expectorants can help relieve coughing. Examples include <b><i>dextromethorphan (Robitussin DM)</i></b> for dry coughs or <b><i>guaifenesin (Mucinex)</i></b> for productive coughs.
        </li>
        <li>
          <b>Sore Throat: </b> Over-the-counter <b><i>throat lozenges (Strepsils) or sprays</i></b> can provide temporary relief from sore throat pain. Gargling with warm salt water may help alleviate discomfort.
        </li>
        <li>
          <b>Loss of Sense of Smell (Anosmia) and Taste (Ageusia):</b> If these symptoms are associated with COVID-19, it's important to isolate yourself and seek medical advice, as these symptoms can be a sign of COVID-19 infection.
          There is no specific medication to treat anosmia and ageusia directly. These symptoms often improve as the underlying infection or condition is treated and resolved.
        </li>
        <li>
          <b>Rest and Hydration:</b> Rest is crucial to help the body recover from illness. Staying well-hydrated by drinking plenty of fluids, such as water, herbal tea, or clear broths, can be beneficial.
        </li>
        </ul>
       </div>
     }
      <form onSubmit={handleSubmit} >
      <fieldset>
         <label> 
           <input name="name" onChange={handleChange} />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
