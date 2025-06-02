import React, { useEffect, useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { fetchCountries } from "../api/api";

const CountryCards = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };

    getData();
  }, []);

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
    {countries.map((c, i) => (
        <Grid
        item
        xs={12}
        sm={6}
        md={2} 
        key={i}
        sx={{
            maxWidth: "calc(100% / 6)", // force max width per item 
            flexBasis: "calc(100% / 6)", // force base width per item
        }}
        >
        <Card
            sx={{
            height: 170,
            width: "100%", 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            p: 2,
            boxSizing: "border-box",
            overflow: "hidden",
            }}
        >
            <CardMedia
            component="img"
            image={c.flag}
            alt={c.name}
            sx={{
                width: 90,
                height: 60,
                objectFit: "cover",
                mb: 1,
            }}
            />
            <CardContent
            sx={{
                p: 0,
                width: "100%",
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
            <Typography
                variant="subtitle2"
                align="center"
                sx={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                textAlign: "center",
                fontSize: "0.85rem",
                lineHeight: 1.1,
                maxHeight: 32, 
                overflow: "hidden",
                whiteSpace: "normal",
                }}
            >
                {c.name}
            </Typography>
            </CardContent>
        </Card>
        </Grid>
    ))}
    </Grid>

  );
};

export default CountryCards;
