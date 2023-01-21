import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import WineCard from '../../components/WineCard';
import { useLocalStorage } from 'react-use';


const dummyPrice = 1999

function PosPage() {

    // window.localStorage['wine'] = 'Wine'
    //const [wine, setwine] = useLocalStorage('wine', 'Wine')

    let [Wine, setWine] = React.useState([])
    let [subMenu, setSubMenu] = React.useState('reds')

    let [cart, setCart] = useLocalStorage('cart', [])

    function addToCart(wine) {
        //console.debug(wine)
        cart.push(wine)
        console.table(cart)
        setCart([...cart])
    }

    React.useEffect(() => {
        let items = []
        fetch(`https://api.sampleapis.com/wines/${subMenu}`)
            .then(res => res.json())
            .then((wines) => {
                for (let i = 0; i < wines.length; i++) {
                    // console.log(wines[i].wine)
                    items.push(
                        <WineCard
                            key={i}
                            image={wines[i].image}
                            wine={wines[i].wine}
                            winery={wines[i].winery}
                            price={dummyPrice.toLocaleString('en-US')}
                            rating={wines[1].rating}
                            handleClick={() => { addToCart(wines[i]) }}
                        />
                    )
                }
                setWine(items)
            })
    }, [subMenu])

    return <Container>
        <h1>Wine Shop</h1>
        <ButtonGroup aria-label="Basic example" style={{ marginBottom: 1 + 'em' }}>
            <Button variant="primary" onClick={() => { setSubMenu('reds') }}>reds</Button>
            <Button variant="primary" onClick={() => { setSubMenu('whites') }}>whites</Button>
            <Button variant="primary" onClick={() => { setSubMenu('sparkling') }}>sparkling</Button>
            <Button variant="primary" onClick={() => { setSubMenu('rose') }}>rose</Button>
            <Button variant="primary" onClick={() => { setSubMenu('dessert') }}>dessert</Button>
            <Button variant="primary" onClick={() => { setSubMenu('port') }}>port</Button>
        </ButtonGroup>
        <Row>
            <Col>
                <Row>
                    {Wine}
                </Row>
            </Col>
            <Col sm={3}>
                <h2>Cart</h2>
                <Row>
                    <Col><h6>Wine</h6></Col>
                    <Col sm={4}><h6>Price</h6></Col>
                </Row>
                {cart.map((item, i) => {
                    return <Row key={i}>
                        <Col>{item.wine}</Col>
                        <Col sm={4}>{dummyPrice.toLocaleString('en-US')}</Col>
                    </Row>
                })}
                <Row>
                    <Col><b>Total:</b> <u>{(cart.length * dummyPrice).toLocaleString('en-US')} Baht</u></Col>
                </Row>
            </Col>
        </Row>
    </Container >
}

export default PosPage