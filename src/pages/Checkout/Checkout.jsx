import React from 'react'
import { useSelector } from 'react-redux'

import { Button, Form } from 'react-bootstrap';
import './Checkout.css'

const Checkout = () => {
    const elems = useSelector(state => state.cart.cart);

    var total = 0;
    const itemList = (item) => {
        total += Number(item.price * item.quantity);
        return (
            // <li className="list-group-item d-flex justify-content-between lh-sm">
            <div className='listItem'>

                <h6 className="model">{item.id}: {item.model}</h6>
                <span className="price">$ {item.price} * {item.quantity} ={item.price* item.quantity} </span> 
            </div>

            // {/* </li> */}
        )
    }
    return (
        <div className="checkout">
            <div className="container">
                <div className="inner">
                <div className="left-side">
                <h4> Billing address</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Full name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="1234 Main st" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Yerevan" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Country</Form.Label>
                        <Form.Select >
                            <option>Choose...</option>
                            <option>Armenia</option>
                            <option>Germany</option>
                            <option>France</option>
                        </Form.Select>
                    </Form.Group>

                    <hr />

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Shipping address is the same as my billing address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Save this information for next time" />
                    </Form.Group>

                    <hr />

                    <h3>Payment</h3>

                    <div class="radio-check">
                        <div class="form-check">
                            <input id="credit" name="paymentMethod" type="radio" />
                            <label class="form-check-label" for="credit">Credit card</label>
                        </div>
                        <div class="form-check">
                            <input id="debit" name="paymentMethod" type="radio" />
                            <label class="form-check-label" for="debit">Debit card</label>
                        </div>
                        <div class="form-check">
                            <input id="paypal" name="paymentMethod" type="radio" />
                            <label class="form-check-label" for="paypal">PayPal</label>
                        </div>
                    </div>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name on card</Form.Label>
                        <Form.Control type="text" />
                        <Form.Text className="text-muted">
                            Full name as displayed on card
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Credit card number</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Expiration</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="number" limit="999" />
                    </Form.Group>

                    <hr />

                    <Button variant="primary" type="submit">
                        Continue to checkout
                    </Button>
                </Form>
            </div>
            <div className="right-side">
                <h4 > Your cart <span className='itemSNumber'> ({elems.length})</span></h4>

                <ul >
                    {elems.map(itemList)}
                    <li className="listItem">
                        <span>Total</span>
                        <strong>${total}</strong>
                    </li>
                </ul>
            </div>
                </div>
            </div>
        </div>
    )

}

export default Checkout