import { Grid, Rating } from '@mui/material'
import React from 'react'
import { Squares2X2Icon } from '@heroicons/react/20/solid';
import Box from '@mui/system/Box';
import Avatar from '@mui/material/Avatar';

const ProductReviewcard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              style={{ with: 56, height: 56, bgcolor: "secondary" }}
            ></Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Megha</p>
              <p className="opacity-70">April 5,2024</p>
            </div>
          </div>

          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p className="">Good Product,I Really Love This Shirts</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductReviewcard
