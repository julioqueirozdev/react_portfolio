import Slider from "react-slick";
import './Carousel.css';

export default function Carousel({children}) {
    const settings = {  // Configurações do Slider
        dots: true, // Pontinhos de navegação
        infinite: true, // Loop infinito
        speed: 500, // Velocidade de transição
        slidesToShow: 3, // Quantidade de slides visíveis por vez
        slidesToScroll: 1, // Quantidade de slides que se movem por vez
        responsive: [ // Configurações responsivas
          {
            breakpoint: 1024, // Largura em que as configurações abaixo se aplicam
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
}