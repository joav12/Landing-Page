import estilo from '../styles/service.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

export default function service(){

    return(

        <>
        <div className={estilo.container_bg}>

            <Container className={estilo.container}>

                <Row>

                    <Col xs={12} md={4} className={estilo.centro}>
                    
                        <Image className="img-fluid" src={'/assets/image-one.png'} width={200} height={200}></Image>
                        <h2>Best offer in town</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, minus in hic iste id inventore expedita officiis, esse voluptatum vel laborum placeat eius ab saepe voluptatibus modi atque, nemo alias.</p>
                    
                    </Col>

                    <Col xs={12} md={4} className={estilo.centro}>
                    
                        <Image className="img-fluid" src={'/assets/image-two.png'} width={200} height={200}></Image>
                        <h2>Fast delivery</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, minus in hic iste id inventore expedita officiis, esse voluptatum vel laborum placeat eius ab saepe voluptatibus modi atque, nemo alias.</p>
                
                    </Col>

                    <Col xs={12} md={4} className={estilo.centro}>
                    
                        <Image className="img-fluid" src={'/assets/image-three.png'} width={200} height={200}></Image>
                        <h2>Quality food</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, minus in hic iste id inventore expedita officiis, esse voluptatum vel laborum placeat eius ab saepe voluptatibus modi atque, nemo alias.</p>
            
                    </Col>
                
                </Row>

            </Container>

        </div>
        </>

    )

}