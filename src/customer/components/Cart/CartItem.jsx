import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://assets.ajio.com/medias/sys_master/root/20240213/v6CL/65cb9ff516fd2c6e6af5e322/-473Wx593H-467069481-black-MODEL.jpg"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Solid Relaxed Fit Cargo Pants</p>
          <p className="opacity-70">Size: L, White</p>
          <p className="text-gray-5000">Seller: Vooter</p>

          <div className="flex space-x-5-items-center text-gray-900 pt-6">
            <p className="font-semibold">₹ 199</p>
            <p className="opacity-50 line-through">₹ 211</p>
            <p className="text-red-600 font-semibold">5% off</p>
          </div>
        </div>

        
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
            
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>
            {/* <p className="text-gray-500">1</p> */}
            <span className="py-1 px-7 border rounded-sm">3</span>
              <IconButton sx={{color: "RGB(145 85 253)"}}>
                <AddCircleOutlineIcon />
              </IconButton>
            
          </div>

          <div className="flex items-center space-x-2">
            <IconButton>
              <DeleteOutlineIcon />
            </IconButton>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
