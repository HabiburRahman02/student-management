

const AboutUs = props => {
    return (
        <div className='bg-gray-100'>
            <div className='py-10'>
                <div className='text-center max-w-6xl mx-auto space-y-3 p-2'>
                    <h1 className='text-5xl font-bold'>About Us</h1>
                    <p className='text-lg'> Sherpur Polytechnic Institute is a renowned technical institution committed to delivering quality education and practical skills. With a focus on hands-on learning, experienced faculty, and industry partnerships, it equips students for successful careers in engineering, technology, and vocational fields, fostering innovation and growth. </p>
                </div>

                <div className='grid md:grid-cols-3 justify-items-center border-2  bg-green-200 border-[#5bec91]  items-center container mx-auto my-5 p-10 rounded-xl gap-5'>
                    <div className=''>
                        <div className="card card-compact border-2 border-[#5bec91] bg-gray-100 transition hover:scale-105 overflow-hidden">
                            <figure>
                                <img
                                    className='p-5 rounded-2xl w-full h-[350px] object-cover'
                                    src="https://i.postimg.cc/CLXFGPC7/Whats-App-Image-2024-11-07-at-4-58-26-PM.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Our Mission 🎯</h2>
                                <p>To empower students with quality technical education, fostering innovation and practical skills to prepare them for successful careers in technology and engineering fields.</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="card card-compact border-2 border-[#5bec91] bg-gray-100 transition hover:scale-105 overflow-hidden">
                            <figure>
                                <img
                                    className='p-5 rounded-2xl w-full h-[350px] object-cover'
                                    src="https://i.postimg.cc/wBcgd9C4/Whats-App-Image-2024-11-07-at-4-59-48-PM.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Our History 💹 </h2>
                                <p>Founded to advance technical education, Sherpur Polytechnic has a rich legacy of excellence, evolving to meet industry demands while maintaining a focus on student success.</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="card card-compact border-2 border-[#5bec91] bg-gray-100 transition hover:scale-105 overflow-hidden">
                            <figure>
                                <img
                                    className='p-5 rounded-2xl w-full h-[350px] object-cover'
                                    src="https://i.postimg.cc/mrbC4gct/Whats-App-Image-2024-11-07-at-5-28-17-PM.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Educational Approach 📚</h2>
                                <p>We emphasize hands-on learning through practical workshops, industry collaborations, and real-world projects, ensuring students gain skills directly applicable to their careers.</p>
                            </div>
                        </div>
                    </div>

                   
                   

                </div>
            </div>
        </div>
    );
};

AboutUs.propTypes = {

};

export default AboutUs;