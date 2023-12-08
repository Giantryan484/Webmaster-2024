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
  // Roofing Series
  {
    header: "Solar Tiles",
    description: "Imagine your roof doing more than just sheltering you. Solar tiles not only protect your home but also harness the sun's power. They blend in beautifully with traditional roofing and are a great investment for the eco-conscious homeowner. Let's explore how they bring energy and elegance together.",
    image: "path/to/solar-tiles.jpg",
    format: "image-left"
  },
  {
    header: "Green Roofs",
    description: "Green roofs are not just gardens in the sky; they are powerhouses of sustainability. They improve air quality, provide natural insulation, and create a habitat for wildlife. Join us in exploring this beautiful blend of nature and architecture.",
    image: "path/to/green-roofs.jpg",
    format: "image-right"
  },
  {
    header: "Cool Roofs",
    description: "Beat the heat with cool roofs! These innovative roofs reflect sunlight, keeping your home cooler and reducing energy bills. Dive into the world of cool roofs and discover how they can be a smart choice for your home and the environment.",
    image: "path/to/cool-roofs.jpg",
    format: "image-left"
  },
  // Energy Series
  {
    header: "Solar Panels",
    description: "Sunlight is free, so why not use it? Solar panels convert sunlight into electricity, providing a clean and cost-effective energy source. Let’s explore how installing solar panels can be a bright idea for your home and the planet.",
    image: "path/to/solar-panels.jpg",
    format: "image-right"
  },
  {
    header: "Wind Turbines",
    description: "Harvest the power of the wind! Residential wind turbines are a breath of fresh air in green energy solutions. Let's compare different models and see how they can contribute to a more sustainable home.",
    image: "path/to/wind-turbines.jpg",
    format: "image-left"
  },
  {
    header: "Geothermal Systems",
    description: "Tap into the Earth’s natural warmth with geothermal systems. These systems provide efficient heating and cooling, reducing our reliance on fossil fuels. Let's delve into how geothermal technology works and its benefits for your home.",
    image: "path/to/geothermal-systems.jpg",
    format: "image-right"
  },
  {
    header: "Tax Rebates and Incentives",
    description: "Going green can save you some green! Learn about tax rebates and incentives available for those who invest in renewable energy systems. We’ve got all the info you need to make your green initiatives more affordable.",
    format: "text-only"
  },
  // Insulation and Windows Series
  {
    header: "Eco-Friendly Insulation",
    description: "Keep your home cozy and eco-friendly with sustainable insulation materials. Discover different types and how they help in reducing your carbon footprint while keeping your energy bills low.",
    image: "path/to/eco-friendly-insulation.jpg",
    format: "image-left"
  },
  {
    header: "Energy-Efficient Windows",
    description: "Windows can be more than just a view outside. Energy-efficient windows reduce energy loss, keeping your home warmer in winter and cooler in summer. Let’s look at how choosing the right windows can make a big difference.",
    image: "path/to/energy-efficient-windows.jpg",
    format: "image-right"
  },
  // Heating and Cooling Series
  {
    header: "Energy-Efficient HVAC Systems",
    description: "Modern HVAC systems are not just about comfort; they’re about sustainability. Explore the latest in energy-efficient HVAC technology and find out how these systems can improve your home's comfort and reduce environmental impact.",
    image: "path/to/hvac-systems.jpg",
    format: "image-left"
  },
  {
    header: "Smart Thermostats",
    description: "Control your home's climate smartly! Smart thermostats learn your habits and adjust heating and cooling for optimal comfort and efficiency. Discover how these intelligent devices can make a big difference in your energy consumption.",
    image: "path/to/smart-thermostats.jpg",
    format: "image-right"
  },
  // Water Conservation Series
  {
    header: "Rainwater Harvesting Systems",
    description: "Every drop counts! Rainwater harvesting systems capture rainwater for reuse, reducing your water bills and helping the environment. Let’s explore how these systems work and the benefits they bring to your home and garden.",
    image: "path/to/rainwater-harvesting.jpg",
    format: "image-left"
  },
  {
    header: "Low-Flow Fixtures",
    description: "Save water with every flush, wash, and shower! Low-flow fixtures are a simple yet effective way to conserve water. Learn about their benefits and how easily they can be integrated into your home.",
    image: "path/to/low-flow-fixtures.jpg",
    format: "image-right"
  },
  // Landscaping Series
  {
    header: "Sustainable Landscaping Practices",
    description: "Transform your garden into an eco-paradise! Sustainable landscaping is all about working with nature. Discover practices that conserve water, reduce waste, and create a haven for local wildlife.",
    image: "path/to/sustainable-landscaping.jpg",
    format: "image-left"
  },
  {
    header: "Native Plants",
    description: "Go native with your garden! Native plants require less water and care, making them an excellent choice for eco-friendly landscaping. Let’s explore the beauty and benefits of incorporating native flora into your outdoor space.",
    image: "path/to/native-plants.jpg",
    format: "image-right"
  },
  // Materials and Resources Series
  {
    header: "Recycled Materials",
    description: "Recycling isn't just for bins! Using recycled materials in construction reduces waste and conserves resources. Discover the types of recycled materials that can give your home an eco-friendly edge.",
    image: "path/to/recycled-materials.jpg",
    format: "image-left"
  },
  {
    header: "Sustainably Sourced Materials",
    description: "Every material has a story. Choosing sustainably sourced materials means supporting eco-friendly practices and reducing environmental impact. Let’s find out how to make responsible choices in building materials.",
    image: "path/to/sustainably-sourced-materials.jpg",
    format: "image-right"
  },
  // Conclusion Cards
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

function Flashcard({ data, animationClass }) {
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
              <button key={index} className="hub-button">{button}</button>
            ))}
          </div>
        </div>
      );

    default:
      return <div>Unknown format</div>;
  }
}

function Slideshow({ currentSlide, setCurrentSlide }) {
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
    if (currentSlide < contentList.length - 1) {
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

  return (
    <div className='slideshow-page'>
      <div className="slideshow-container">
        {currentSlide > 0 && <button className="arrow-button go-back" onClick={() => {if (animating !== true) {goBack()}}}>←</button>}
        
        <Flashcard data={contentList[currentSlide]} />
        
        {animating && 
          <Flashcard data={contentList[animatedSlide]} animationClass={slideDirection === 'forward' ? 'sliding-off' : 'sliding-on'}/>
        }

        {currentSlide < contentList.length - 1 && <button className="arrow-button go-forward" onClick={() => {if (animating !== true) {goForward()}}}>→</button>}
      </div>
    </div>
  );
}

export default Slideshow;
