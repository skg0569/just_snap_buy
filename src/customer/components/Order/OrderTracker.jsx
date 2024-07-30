import { Stepper } from "@mui/material";
import React from "react";
import { Step, StepLabel } from "@mui/material";

const steps = ['Order Placed', 'Order Confirmed', 'Order Shipped', 'Out For Delivery', 'Delivered', 'Order Returned'];

const OrderTracker = ({activeStep}) => {
    return (
        <div className="w-full">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel sx={{color: '#9155FD', fontSize:"44px"}}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default OrderTracker;