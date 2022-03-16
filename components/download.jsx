import Estilo from '../styles/download.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

export default function download(){

    return(

        <>
        
        <div className={Estilo.container_bg}>

            <Container className={Estilo.container}>

                <h3>Get food with FOODO</h3>
                <h3>Download the app</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptas necessitatibus distinctio iusto sapiente nesciunt temporibus atque aperiam earum, ipsa autem magni porro nemo nobis ex dignissimos molestiae suscipit dolores!</p>

            </Container>

            <Container>

                <Row>

                    <Col xs={12} md={6}>
                    
                        <Image src={'/assets/app-apple-btn.svn'} className='img-fluid' width={244} height={76}></Image>
                    
                    </Col>

                    <Col xs={12} md={6}>
                    
                        <Image src={'/assets/app-play-btn.svn'} className='img-fluid' width={244} height={76}></Image>
                    
                    </Col>

                </Row>

            </Container>

        </div>
        
        </>

    )

}