import React from "react";

import StripeCheckout from "react-stripe-checkout";

interface CheckoutInfo {
  price: number;
}

const StripeButton: React.FC<CheckoutInfo> = (price) => {
  const priceForStripe = price.price * 100;
  const publishableKey =
    "pk_test_51HJYuyALJ65dUbXE9LbgisTLYfCGp40Pm301GKJqbdfv8E94ok19iIFO4OV69qomT4fmKtgjtRAenS1Qg7DCB36z00j4E5OplN";

  const onToken = () => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Cloth Remake portfolio"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price.price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
