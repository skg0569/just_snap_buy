import { Avatar, Grid } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { Rating } from "@mui/material";


export default function ProductReviewCard() {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1} >
                <Box>
                    <Avatar className="text-white" sx={{width: 56, height: 56, bgcolor: "#9155fd"}}>
                        R
                    </Avatar>
                </Box>
            </Grid>

            <Grid item xs={5}>
                <div className="space-y-2">
                    <div>
                        <p className="font-semibold text-lg">Ram</p>
                        <p className="opacity-70">April 5, 2024</p>
                    </div>
                </div>
                <Rating name="read-only" value="4.5" readOnly precision={0.5} />
                <p>Nice product, I love this product.</p>
            </Grid>
            
        </Grid>
    </div>
  );
}