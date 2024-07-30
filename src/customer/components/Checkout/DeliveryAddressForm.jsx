import { Grid } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";

const DeliveryAddressForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Address: ", e.target.value);
        const data = new FormData(e.target);

        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zipCode"),
            phoneNumber: data.get("phoneNumber"),
        }

        console.log(address);
    }

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={4}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    fullWidth
                    required
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    fullWidth
                    required
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    fullWidth
                    required
                    id="address"
                    name="address"
                    autoComplete="address-line1"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="City"
                    fullWidth
                    required
                    id="city"
                    name="city"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="State"
                    fullWidth
                    required
                    id="state"
                    name="state"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Zip Code"
                    fullWidth
                    required
                    id="zipCode"
                    name="zipCode"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Phone Number"
                    fullWidth
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
