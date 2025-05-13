import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimated, setIsAnimated] = useState(false);
    const [paused, setPaused] = useState(false);
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const slides = [
        {
            id: 1,
            image: "https://theme646-medical-equipment-free.myshopify.com/cdn/shop/t/2/assets/slide3_image.jpg?v=150747260907011226501553079480",
            link: "/products/b3200-aluminum-bath-bench",
            title: "Siemens",
            subtitle: "MAGNETOM Avanto"
        },
        {
            id: 2,
            image: "https://theme646-medical-equipment-free.myshopify.com/cdn/shop/t/2/assets/slide2_image.jpg?v=68507574582379359391553079480",
            link: "/products/b3500f-folding-aluminum-3-in-1-elongated-commode",
            title: "Siemens",
            subtitle: "Acuson P300"
        },
        {
            id: 3,
            image: "https://theme646-medical-equipment-free.myshopify.com/cdn/shop/t/2/assets/slide3_image.jpg?v=150747260907011226501553079480",
            link: "/products/bd-3-10-cc-insulin-syringe-with-fixed-needle",
            title: "Siemens",
            subtitle: "SIREMOBIL Compact L"
        }
    ];

    const showcaseItems = [
        {
            id: 1,
            image: "https://theme646-medical-equipment-free.myshopify.com/cdn/shop/t/2/assets/custom_showcase1_img.jpg?v=177847931685857203191553079477",
            link: "/products/easy-brush-standard",
            title: "Dental",
            subtitle: "supplies"
        },
        {
            id: 2,
            image: "https://theme646-medical-equipment-free.myshopify.com/cdn/shop/t/2/assets/custom_showcase2_img.jpg?v=112759975244882067521553079478",
            link: "/products/blood-pressure-bluetooth-monitor",
            title: "RAPID Point",
            subtitle: "Systems"
        },
        {
            id: 3,
            image: "https://theme646-medical-equipment-free.myshopify.com/cdn/shop/t/2/assets/custom_showcase3_img.jpg?v=174743998581832701741553079478",
            link: "/products/b3500f-folding-aluminum-3-in-1-elongated-commode",
            title: "X-rays",
            subtitle: ""
        }
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        setIsAnimated(true);
        if (paused) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [paused, nextSlide]);

    return (
        <div className="bg-white">

            <div className="container mx-auto px-4">

                {/* Slider */}
                <div className="slider-wrap relative mb-12 h-96 md:h-[500px] overflow-hidden">
                    {slides.map((slide, index) =>
                        index === currentSlide ? (
                            <div key={slide.id} className="block w-full h-full relative cursor-default">
                                <img
                                    src={slide.image}
                                    alt={slide.subtitle}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-6 text-white">
                                    <h2 className="text-3xl font-bold">{slide.title}</h2>
                                    <h3 className="text-2xl">{slide.subtitle}</h3>
                                </div>
                            </div>
                        ) : null
                    )}
                    <div className="slider-nav absolute top-1/2 w-full px-4 flex justify-between -translate-y-1/2">
                        <button
                            onClick={prevSlide}
                            className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Showcase */}
                <div id="showcase" className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {showcaseItems.map((item) => (
                            <div
                                key={item.id}
                                className={`showcase-item bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 ${isAnimated ? 'animate-zoomIn' : ''
                                    }`}
                            >
                                <a href={item.link} className="block">
                                    <div className="img-wrapper h-48 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={`${item.title} ${item.subtitle}`}
                                            className="w-full h-full object-cover transition-transform hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="text-xl font-medium">
                                            <span className="text-teal-500">{item.title}</span> {item.subtitle}
                                        </h3>
                                        <span className="text-gray-500 hover:text-teal-500 transition inline-block mt-2">
                                            read more
                                        </span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured product */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-2/3">
                            <img
                                src="https://theme646-medical-equipment-free.myshopify.com/cdn/shop/files/mri.jpg"
                                alt="Siemens MAGNETOM Avanto MRI Machine"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/3 md:pl-12 mt-8 md:mt-0 text-center md:text-left">
                            <h2 className="text-5xl font-bold text-teal-500 mb-4">SIEMENS</h2>
                            <h3 className="text-3xl text-gray-700 mb-6">MAGNETOM AVANTO</h3>
                            <p className="text-gray-600 mb-8">
                                Advanced MRI technology with exceptional image quality and patient comfort
                            </p>
                            <a
                                href="/products/magnetom-avanto"
                                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product categories */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://theme646-medical-equipment-free.myshopify.com/cdn/shop/products/drive_medical_universal_knee_walker_2_large.png?v=1553080570" alt="Dental Equipment" className="w-full h-48 object-cover" />
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://theme646-medical-equipment-free.myshopify.com/cdn/shop/products/ez2care_deluxe_two_button_folding_walker_with_5-inch_wheels_2_large.png?v=1553080599" alt="Diagnostic Equipment" className="w-full h-48 object-cover" />
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://theme646-medical-equipment-free.myshopify.com/cdn/shop/products/eudemon_digital_basal_thermometer_for_cycle_control_2_large.png?v=1553080588" alt="X-ray Equipment" className="w-full h-48 object-cover" />
                    </div>
                </div>
            </div>

            <div className="relative w-full h-[80vh] overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url("https://theme646-medical-equipment-free.myshopify.com/cdn/shop/t/2/assets/custom_block_img.jpg?v=18917046620828414661553079477")`,
                        transform: `translateY(${offsetY * 0}px)`  // Adjust the multiplier for the parallax effect
                    }}
                ></div>

                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4 text-white bg-black bg-opacity-30">
                    <h1 className="mb-4 text-4xl font-bold text-center text-teal-400">SIEMENS</h1>
                    <h2 className="max-w-3xl mb-8 text-xl text-center">
                        WE ALSO SUPPLY DIAGNOSTIC SETS, OTOSCOPES, OPHTHALMOSCOPES, BLOOD PRESSURE MONITORS, THERMOMETERS AND MANY MORE
                    </h2>
                    <button className="px-6 py-2 font-bold bg-white text-black">SHOP NOW!</button>
                </div>
            </div>


            {/* Contact Button */}
            <div className="fixed bottom-4 right-4 z-50">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg flex items-center transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact us!
                </button>
            </div>
        </div>
    );
};

export default Home;
