import React from "react";
import "./Testimonial.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from 'react-reveal/Zoom';


const Testimonial = () => {

    const data = [
        {
            name: "Sitotaw",
            position: "CEO",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl enim, imperdiet nec metus quis, ullamcorper tincidunt leo.",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            name: "Sitotaw",
            position: "CEO",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl enim, imperdiet nec metus quis, ullamcorper tincidunt leo.",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            name: "Sitotaw",
            position: "CEO",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl enim, imperdiet nec metus quis, ullamcorper tincidunt leo.",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            name: "Sitotaw",
            position: "CEO",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl enim, imperdiet nec metus quis, ullamcorper tincidunt leo.",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            name: "Sitotaw",
            position: "CEO",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl enim, imperdiet nec metus quis, ullamcorper tincidunt leo.",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            name: "Sitotaw",
            position: "CEO",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl enim, imperdiet nec metus quis, ullamcorper tincidunt leo.",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            name: "Sitotaw",
            position: "CEO",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl enim, imperdiet nec metus quis, ullamcorper tincidunt leo.",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            name: "Sitotaw",
            position: "CEO",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl enim, imperdiet nec metus quis, ullamcorper tincidunt leo.",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        }
    ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        initialSlide: 0,
        autoplay: true,
        rows: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const colors = [

        "#F1C40F",
        "#EB984E",
        "#D5DBDB",
        "#FE2EF7",
        "#C39BD3",
        "#00C49F",
        "#73C6B6",
        "#FF8042",
        "#001CCE",
        "#00C79F",
        "#FFBB24",
        "#FF1042",
        "#0088FE",
        "#00C49F",
        "#FFBB28",
    
    ]

    return (
        <Zoom>
        <div className="container testimonial-section">
            
            <div className="section-title">
                <h5>Testimonial</h5>
                <span className="line"></span>
            </div>

            <div className="testimonial-slider">

                <Slider {...settings}>

                    {data.map((item,index)=>(

                        <div className="content-slider-main" id="testimonial">
                            <div className="content-slider" key={index} style={{backgroundColor:colors[index]}}>

                                <img src={item.img} alt="testimonial image" className="center-image"/>
                                <p>{item.name}</p>
                                <p>{item.position}</p>
                                <p>{item.des}</p>
                
                            </div>
                        </div>

                        

                    ))  }

                </Slider>

            </div>

        </div>
        </Zoom>
    )
}

export default Testimonial