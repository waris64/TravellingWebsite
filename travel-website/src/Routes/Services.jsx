import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Destinations from '../Components/Destinations';
const Services =()=>{
return (
    <main>
        <Navbar />
        <Hero  heroImg="/src/assets/services.jpg" title="Our Services" />
        <Destinations/>
    </main>
)
} 
export default Services;