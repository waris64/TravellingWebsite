import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Destinations from '../Components/Destinations';
const App = () => {
    return (
        <main>
            <Navbar />
            <Hero heroImg="/assets/jeep.jpg" title="Your Journey Your Story" text="Choose Your Favourite Destination" btnText="Travel Plan" />
            <Destinations />
        </main>

    )
}
export default App;