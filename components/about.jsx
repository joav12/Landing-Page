import Estilo from '../styles/about.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

export default function download(){

    return(

        <>
        
            <div className={Estilo.container_bg}>

                <Container>

                    <Row>

                        <Col xs={12} md={6}>
                        
                            <Image className='img-fluid' src={'/assets/image-about.png'} width={500} height={500}></Image>

                        </Col>

                        <Col xs={12} md={6} className={Estilo.details}>
                        
                            <div>

                                <h2>Best offer in town</h2>
                                <b>Lorem ipsum dolor sit amet consectetur.</b>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quia vitae voluptatibus? Sit exercitationem vel vitae labore corrupti placeat ab.</p>

                                <button className={'btn' +Estilo.botao}>Explore more</button>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </div>

        </>

    )

}