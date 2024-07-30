import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="text-xl font-bold py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-5">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://assets.ajio.com/medias/sys_master/root/20240213/v6CL/65cb9ff516fd2c6e6af5e312/-288Wx360H-467069481-black-MODEL.jpg"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">
                    Vooter -Solid Relaxed Fit Cargo Pants
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: Black</span> <span>Size: M</span>
                  </p>
                  <p>Seller: Ajio</p>
                  <p>₹1099</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
