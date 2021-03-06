import React, { useState, useEffect } from "react";
import axios from 'axios'
import '../checkout.css'
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
export default function CheckoutForm({ cart }) {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const [email, setEmail] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] })
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setClientSecret(data.clientSecret);
            });
    }, []);
    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };
    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };
    const handleSubmit = async ev => {
        ev.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            receipt_email: email,
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: ev.target.name.value
                }
            }
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    };
    function productSold() {
        console.log(cart, email)
        let data = {
            email,
            cart
        }
        axios({
            method: "post",
            url: "/sold",
            data,
        })
            .then((res) => {
                window.location.reload()
            })
            .catch((error) => {
                console.log(error);
            });
        window.location.reload()
    }
    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
            />
            <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
            <button
                disabled={processing || disabled || succeeded}
                id="submit"
                onClick={() => productSold()}
            >
                <span id="button-text">
                    {processing ? (
                        <div className="spinner" id="spinner"></div>
                    ) : (
                            "Pay"
                        )}
                </span>
            </button>
            {/* Show any error that happens when processing the payment */}
            {error && (
                <div className="card-error" role="alert">
                    {error}
                </div>
            )}
            {/* Show a success message upon completion */}
            <p className={succeeded ? "result-message" : "result-message hidden"}>
                Payment succeeded, see the result in your
                <a
                    href={`https://dashboard.stripe.com/test/payments`}
                >
                    {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
        </form>
    );
}