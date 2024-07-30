import React from "react";
import CartItem from "./CartItem";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout?step=2")
  }


  return (
    <div>
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <CartItem key={item} />
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border p-5 rounded-md">
            <p className="uppercase font-bold opacity-60">Price Details</p>
            <Divider />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹4697</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">-₹3419</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <Divider />
              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹1278</span>
              </div>
            </div>
            <div className="flex justify-center pt-3">
              <Button
                onClick={handleCheckout}
                variant="contained" className="w-full mt-5"
                sx={{ px: "2.5rem", py: "0.7rem", mt: "2rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
