import React from 'react'
import Header from './Header'

export default function About() {
  return (
    <>
    <Header/>
    <div className="about">
      <h1 style={{color:"#325090"}}>About FutureBaba</h1>
      <p>
        Welcome to <strong>FutureBaba</strong> – your gateway to astrology powered by the modern age! 
        At FutureBaba, we blend the ancient wisdom of astrology with the power of social media data 
        to provide personalized, insightful, and accurate astrological guidance. Whether you're seeking 
        answers about love, career, finance, or life's uncertainties, our unique approach analyzes your 
        social media presence to offer tailored predictions and advice – all for just <strong>1 rupee</strong>!
      </p>
      <p>
        We believe that the future is not just written in the stars but also in the digital footprints 
        we leave behind. FutureBaba is here to make astrology accessible, affordable, and relevant for 
        everyone. Join us on this fascinating journey to unlock the secrets of your destiny, one prediction 
        at a time!
      </p>
      <p>
        <strong>Your future, simplified. Your guidance, redefined.</strong> 🌌✨
      </p>
      <a href='/'>back</a>
    </div>
    
    </>
  )
}
