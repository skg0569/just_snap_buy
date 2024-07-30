import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {

  const navigate = useNavigate();

  const handleOrderDetails = () => {
    navigate(`/account/order/${5}`);
  }


  return (
    <div onClick={handleOrderDetails} className="p-5 shadow-md shadow-gray-400 hover:shadow-2xl border border-gray-200 rounded-lg ml-5">
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between" }}
      >
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://assets.ajio.com/medias/sys_master/root/20240213/v6CL/65cb9ff516fd2c6e6af5e312/-288Wx360H-467069481-black-MODEL.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Vooter -Solid Relaxed Fit Cargo Pants</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹1099</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "18px", height: "18px", color: "green" }}
                  className="mr-2 text-sm"
                />
                <span>Delivered On March 12, 2024</span>
              </p>
              <p className="text-xs">Your Item Has Been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery On March 12, 2024</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
