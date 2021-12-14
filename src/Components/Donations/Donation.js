import React from "react";
import { Button } from "@mui/material";
import "../../Styles/BoxStyle.css";

const Donations = ({ donationText }) => {

  const paymentLink = "https://mpago.la/146W2WB";

  return (
    <div class="boxStyle">
      <p>{donationText}</p>
      <Button
        id="mercadoPagoButton"
        name="mercadoPagoButton"
        variant="contained"
        color="primary"
        href={paymentLink}
      >
        MercadoPago
      </Button>
    </div>
  );
};

export default Donations;
