import estilos from "../styles/topo.module.css"
import { Container,Row,Col } from "react-bootstrap"
import Image from "next/image"

export default function Topo(){
    return(
        <>
          <div className={estilos.background}></div>

          <div className={estilos.texture}>

          <Container className={estilos.container}>

                <Row className={estilos.row}>

                    <Col xs={12} md={6}>

                        <Image src="/assets/mobile.png" alt="" className="img-fluid" width={500} height={500} ></Image>
                    </Col>


                    <Col xs={12} md={6} className={estilos.direita}>

                        <h6>FOODO</h6>
                        <h2>Get Your Food In</h2>
                        <h1>FOOODO</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus euismod eros eu lobortis. Integer quis pulvinar elit, ac luctus lectus. Phasellus placerat turpis eu sem bibendum maximus. Nullam iaculis libero eu magna faucibus, bibendum fringilla ligula bibendum. Maecenas eu lobortis sapien, ut maximus nunc. Proin tempor elit ut massa fringilla, eget faucibus eros venenatis. Proin nisl mauris, tempor vitae nulla et, fermentum interdum metus. Morbi vitae ex eget sapien euismod malesuada. Fusce mattis pulvinar eros, id eleifend leo mattis vitae. Maecenas feugiat augue vitae ullamcorper auctor.</p>
                        
                        <button className={estilos.botao}> Download App</button>
                        
                    </Col>

                </Row>

          </Container>
          
          </div>
        </>
    )
}