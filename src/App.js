import "bootstrap/dist/css/bootstrap.min.css"; //uso de Bootstrap
import Button from "react-bootstrap/Button"; //uso de Button de Bootstrap
import Badge from "react-bootstrap/Badge"; //uso de Badge de Bootstrap

import Header from "./components/Header"; //componente de encabezado del titulo
import Card from "./components/Card"; //componente Card de la galería
import Footer from "./components/Footer"; //componente Footer

import "./assets/css/App.css"; //archivo de estilos para Card y Button

function App() { //uso de componente Header, Card y Footer 
  return (
    <div className="App">
      <Header titulo="Galería de Imágenes con React" />

      <div className="cardG"> 
        <Card //envio de datos al componente Card desde App
          imagen="https://cdn.pixabay.com/photo/2022/11/21/12/24/swan-7606921_1280.jpg"
          titulo="NATURALEZA"
          descripcion="Cisne"
        />
        <Card
          imagen="https://cdn.pixabay.com/photo/2022/10/24/14/41/blackbird-7543630_1280.jpg"
          titulo="NATURALEZA"
          descripcion="Ave Mirlo"
        />
        <Card
          imagen="https://cdn.pixabay.com/photo/2022/08/25/20/48/bird-7411277_1280.jpg"
          titulo="NATURALEZA"
          descripcion="Pajaro buho"
        />
        <Card
          imagen="https://cdn.pixabay.com/photo/2022/09/23/04/33/woodpecker-7473589_960_720.jpg"
          titulo="NATURALEZA"
          descripcion="Pajaro Carpintero"
        />
        <Card
          imagen="https://cdn.pixabay.com/photo/2022/05/29/19/51/village-weaver-7229880_1280.jpg"
          titulo="NATURALEZA"
          descripcion="Pajaro tejedor de pueblo"
        />
      </div>
      
      <Button className="boton" variant="warning">
        Imágenes en galería <Badge bg="secondary">5</Badge>
      </Button> 
      <Footer />
    </div> //uso del Button y del Badge con alerta de Warning
  );
}

export default App;