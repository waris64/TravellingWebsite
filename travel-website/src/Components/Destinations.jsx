import React from 'react';
import pic1 from '../../public/assets/1.jpg'
import pic2 from '../../public/assets/2.jpg'
import pic3 from '../../public/assets/3.jpg'
import pic4 from '../../public/assets/4.jpg'
import pic5 from '../../public/assets/5.jpg'
import pic6 from '../../public/assets/6.jpg'
import pic8 from '../../public/assets/8.jpg'
import pic9 from '../../public/assets/9.jpg'
import pic10 from '../../public/assets/10.jpg'
import pic11 from '../../public/assets/11.jpg'
import indonesia from '../../public/assets/indonesia.jpg'
import malaysia from '../../public/assets/malaysia.jpg'
import france from '../../public/assets/france.jpg'
const Destinations = () => {
    return (
        <div className="px-4 py-8 max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-5xl text-center font-bold mb-4">Popular Destinations</h1>
            <h3 className="text-lg md:text-xl text-center font-medium mb-8">
                Tours give you the opportunity to see a lot, within a time frame
            </h3>

            {/* First section of places */}

            <div className="flex flex-col md:flex-row gap-8 md:mt-34 items-center ">


                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Taal Volcano, Batangas</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                        One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look,
                        the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and
                        you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty
                        and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!
                    </p>
                </div>
                <div className="flex gap-4 w-full md:w-1/2 " >
                    <img
                        src={pic1}
                        alt="Destination 1"
                        className="w-1/2 rounded-xl object-cover  relative md:top-10 top-7  h-[70vh]"
                    />
                    <img
                        src={pic2}
                        alt="Destination 2"
                        className="w-1/2 rounded-xl object-cover h-[70vh]"
                    />
                </div>
            </div>

            {/* second section of places */}

            <div className="flex flex-col md:flex-row gap-8 md:mt-34 items-center ">

                <div className="flex gap-4 w-full md:w-1/2 " >
                    <img
                        src={pic3}
                        alt="Destination 1"
                        className="w-1/2 rounded-xl object-cover  relative md:top-10 top-7  "
                    />
                    <img
                        src={pic4}
                        alt="Destination 2"
                        className="w-1/2 rounded-xl object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Taal Volcano, Batangas</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                        One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look,
                        the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and
                        you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty
                        and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!
                    </p>
                </div>
            </div>
            <h1 className='text-center text-4xl pt-10 font-bold pt-4'>Recent Trips</h1>
            <p className='text-center text-2xl'>You can discover unique destinations using Google Maps.</p>
            <div className='multiple-destinations flex '>

                <div class="max-w-sm rounded shadow-lg p-4 ">
                    <div class="transition-transform duration-300 hover:scale-125 overflow-hidden">
                        <img class="w-full h-56 object-cover rounded" src={malaysia} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Destinations;
