import { useState, useEffect } from 'react';
import './Slideshow.css'; // Import your CSS file

const contentList = [
  // Introductory Cards
  {
    header: "Climate Crisis Overview",
    description: "Welcome to a crucial journey! Our planet is facing significant challenges - rising temperatures, melting ice caps, and extreme weather. These aren't just headlines; they're our reality. But don't worry, we're here to understand and take action together. Let's explore how we can make a difference!",
    format: "text-only"
  },
  {
    header: "Importance of Green Energy",
    description: "Did you know that shifting to green energy is like giving our planet a breath of fresh air? Renewable sources like solar and wind are not only endless but also kinder to our environment. They reduce greenhouse gases and help us move towards a sustainable future. Let's dig into how these energy sources can change our world for the better.",
    format: "text-only"
  },
  {
    header: "Personal and Community Action",
    description: "Change starts with us! Small steps by each of us can lead to giant leaps for mankind. From switching off lights to advocating for policy changes, our actions matter. Together, we can build a community that values sustainability and sets an example for future generations.",
    format: "text-only"
  },
  // Hub-Type Card
  {
    header: "Explore Green Initiatives",
    buttons: ["Roofing", "Energy", "Insulation and Windows", "Heating and Cooling", "Water Conservation", "Landscaping", "Materials and Resources", "Global Impact"],
    format: "hub-page"
  },
  // Roofing Series 4-6
  {
    header: "Solar Tiles",
    description: "Imagine your roof doing more than just sheltering you. Solar tiles not only protect your home but also harness the sun's power. They blend in beautifully with traditional roofing and are a great investment for the eco-conscious homeowner. Let's explore how they bring energy and elegance together.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/solar-roof.jpg`,
    format: "image-left"
  },
  {
    header: "Green Roofs",
    description: "Green roofs are not just gardens in the sky; they are powerhouses of sustainability. They improve air quality, provide natural insulation, and create a habitat for wildlife. Join us in exploring this beautiful blend of nature and architecture.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/Green_Roof.jpg`,
    format: "image-right"
  },
  {
    header: "Cool Roofs",
    description: "Beat the heat with cool roofs! These innovative roofs reflect sunlight, keeping your home cooler and reducing energy bills. Dive into the world of cool roofs and discover how they can be a smart choice for your home and the environment.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/cool-roof.jpg`,
    format: "image-left"
  },
  // Energy Series 7-10
  {
    header: "Solar Panels",
    description: "Sunlight is free, so why not use it? Solar panels convert sunlight into electricity, providing a clean and cost-effective energy source. Let’s explore how installing solar panels can be a bright idea for your home and the planet.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/solar-panels.jpg`,
    format: "image-right"
  },
  {
    header: "Wind Turbines",
    description: "Harvest the power of the wind! Residential wind turbines are a breath of fresh air in green energy solutions. Let's compare different models and see how they can contribute to a more sustainable home.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/windmill.jpg`,
    format: "image-left"
  },
  {
    header: "Geothermal Systems",
    description: "Tap into the Earth’s natural warmth with geothermal systems. These systems provide efficient heating and cooling, reducing our reliance on fossil fuels. Let's delve into how geothermal technology works and its benefits for your home.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/geothermal.jpg`,
    format: "image-right"
  },
  {
    header: "Tax Rebates and Incentives",
    description: "Going green can save you some green! Learn about tax rebates and incentives available for those who invest in renewable energy systems. We’ve got all the info you need to make your green initiatives more affordable.",
    format: "text-only"
  },
  // Insulation and Windows Series 11-12
  {
    header: "Eco-Friendly Insulation",
    description: "Keep your home cozy and eco-friendly with sustainable insulation materials. Discover different types and how they help in reducing your carbon footprint while keeping your energy bills low.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/insulation.jpg`,
    format: "image-left"
  },
  {
    header: "Energy-Efficient Windows",
    description: "Windows can be more than just a view outside. Energy-efficient windows reduce energy loss, keeping your home warmer in winter and cooler in summer. Let’s look at how choosing the right windows can make a big difference.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/energy-efficiency-window-illustration.jpg`,
    format: "image-right"
  },
  // Heating and Cooling Series 13-14
  {
    header: "Energy-Efficient HVAC Systems",
    description: "Modern HVAC systems are not just about comfort; they’re about sustainability. Explore the latest in energy-efficient HVAC technology and find out how these systems can improve your home's comfort and reduce environmental impact.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/HVAC.jpg`,
    format: "image-left"
  },
  {
    header: "Smart Thermostats",
    description: "Control your home's climate smartly! Smart thermostats learn your habits and adjust heating and cooling for optimal comfort and efficiency. Discover how these intelligent devices can make a big difference in your energy consumption.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/thermostat.jpg`,
    format: "image-right"
  },
  // Water Conservation Series 15-16
  {
    header: "Rainwater Harvesting Systems",
    description: "Every drop counts! Rainwater harvesting systems capture rainwater for reuse, reducing your water bills and helping the environment. Let’s explore how these systems work and the benefits they bring to your home and garden.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/rainwater.jpg`,
    format: "image-left"
  },
  {
    header: "Low-Flow Fixtures",
    description: "Save water with every flush, wash, and shower! Low-flow fixtures are a simple yet effective way to conserve water. Learn about their benefits and how easily they can be integrated into your home.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/lowflow.jpg`,
    format: "image-right"
  },
  // Landscaping Series 17-18
  {
    header: "Sustainable Landscaping Practices",
    description: "Transform your garden into an eco-paradise! Sustainable landscaping is all about working with nature. Discover practices that conserve water, reduce waste, and create a haven for local wildlife.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/landscaping.jpg`,
    format: "image-left"
  },
  {
    header: "Native Plants",
    description: "Go native with your garden! Native plants require less water and care, making them an excellent choice for eco-friendly landscaping. Let’s explore the beauty and benefits of incorporating native flora into your outdoor space.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/native-plants.jpg`,
    format: "image-right"
  },
  // Materials and Resources Series 19-20
  {
    header: "Recycled Materials",
    description: "Recycling isn't just for bins! Using recycled materials in construction reduces waste and conserves resources. Discover the types of recycled materials that can give your home an eco-friendly edge.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/recyclables.jpg`,
    format: "image-left"
  },
  {
    header: "Sustainably Sourced Materials",
    description: "Every material has a story. Choosing sustainably sourced materials means supporting eco-friendly practices and reducing environmental impact. Let’s find out how to make responsible choices in building materials.",
    image: `${process.env.PUBLIC_URL}/flashcard-images/sustainable-materials.jpg`,
    format: "image-right"
  },
  // Conclusion Cards 20-22
  {
    header: "Global Impact",
    description: "Our journey together shows that every small step leads to a big impact. Your choices and actions contribute to a healthier planet. Let’s keep inspiring each other and move towards a sustainable future!",
    format: "text-only"
  },
  {
    header: "Call to Action",
    description: "You're now equipped with knowledge and inspiration. It's time to take action! Start implementing these green practices in your life and encourage others to join in. Together, we can make a difference!",
    format: "text-only"
  },
  {
    header: "Thank You",
    description: "Thank you for joining us on this green journey! We hope you’re leaving inspired and ready to make a change. Share this knowledge and spread the word. Every share is a step towards a greener world.",
    format: "text-only"
  }
];

const nameToCards = {
  "Roofing": [4,5,6],
  "Energy": [7,8,9,10],
  "Insulation and Windows": [11,12],
  "Heating and Cooling": [13,14],
  "Water Conservation": [15,16],
  "Landscaping": [17,18],
  "Materials and Resources": [19,20],
  "Global Impact": [21,22,23]
}

// go through sequentially if queue empty (before hub card), then when hub button pressed set the queue. if on last index of the queue and going forward, go back to hub and clear queue


function Flashcard({ data, animationClass, queueFunction }) {
  const { image, description, format } = data;
  const slideClass = `slide ${format} ${animationClass}`;

  switch (format) {
    case 'image-left':
      return (
        <div className={slideClass}>
          <h2>{data.header}</h2>
          <div className="content">
            <div className="image-container">
              <img src={image} alt={image} />
            </div>
            <div className="text-container">
              <p>{description}</p>
            </div>
          </div>
        </div>
      );

    case 'image-right':
      return (
        <div className={slideClass}>
          <h2>{data.header}</h2>
          <div className="content">
            <div className="text-container">
              <p>{description}</p>
            </div>
            <div className="image-container">
              <img src={image} alt={image} />
            </div>
          </div>
        </div>
      );

    case 'text-only':
      return (
        <div className={slideClass}>
          <h2>{data.header}</h2>
          <div className="text-only-container">
            <p>{description}</p>
          </div>
        </div>
      );

    case 'big-image':
      return (
        <div className={slideClass}>
          <h2>{data.header}</h2>
          <div className="image-container">
            <img src={image} alt={image} />
            <p className="caption">{description}</p>
          </div>
        </div>
      );

    case 'hub-page':
      return (
        <div className={slideClass}>
          <h2>{data.header}</h2>
          <div className="buttons-container">
            {data.buttons.map((button, index) => (
              <button key={index} className="hub-button" onClick={() => queueFunction(button)}>{button}</button>
            ))}
          </div>
        </div>
      );

    default:
      return <div>Unknown format</div>;
  }
}

function Slideshow({ currentSlide, setCurrentSlide }) {

  const [queue, setQueue] = useState(null);
  const [slideDirection, setSlideDirection] = useState('forward');
  const [animating, setAnimating] = useState(false);
  const [animatedSlide, setAnimatedSlide] = useState(null);

  async function goBack() {
    if (currentSlide > 0) {
      setSlideDirection('backward');
      setAnimatedSlide(currentSlide - 1)
      setAnimating(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
      }, 499);
    }
  };

  async function goForward() {
    if (queue && currentSlide === queue[queue.length - 1]) {
      setSlideDirection('forward');
      setAnimatedSlide(currentSlide)
      setAnimating(true);
      setCurrentSlide(3);
      setQueue(null);
    } else if (queue && currentSlide === 3) {
      setSlideDirection('forward');
      setAnimatedSlide(currentSlide)
      setAnimating(true);
      setCurrentSlide(queue[0]);
    } else if (queue) {
      setSlideDirection('forward');
      setAnimatedSlide(currentSlide)
      setAnimating(true);
      setCurrentSlide(currentSlide + 1);
    } else {
      setSlideDirection('forward');
      setAnimatedSlide(currentSlide)
      setAnimating(true);
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    if (animating) {
      const timeout = setTimeout(() => setAnimating(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [animating]);

  async function handleSetQueue( series ) {
    setQueue(nameToCards[series]);
  }

  useEffect(() => {
    if (queue) {
      goForward();
    }
  }, [queue]);

  return (
    <div className='slideshow-page'>
      <div className="slideshow-container">
        {currentSlide > 0 && <button className="arrow-button go-back" onClick={() => {if (animating !== true) {goBack()}}}>←</button>}
        
        <Flashcard data={contentList[currentSlide]} queueFunction={(value) => handleSetQueue(value)}/>
        
        {animating && 
          <Flashcard data={contentList[animatedSlide]} animationClass={slideDirection === 'forward' ? 'sliding-off' : 'sliding-on'} queueFunction={(value) => handleSetQueue(value)}/>
        }

        {(currentSlide < contentList.length - 1 && currentSlide !== 3) && <button className="arrow-button go-forward" onClick={() => {if (animating !== true) {goForward()}}}>→</button>}
      </div>
    </div>
  );
}

export default Slideshow;
