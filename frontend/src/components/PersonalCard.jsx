import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

function PersonalCard() {
  const { t, i18n } = useTranslation();

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Avatar
            sx={{
              width: 120,
              height: 120,
            }}
            src="/images/profile2.png"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Typography variant="h5" component="div">
            Gustavo Berny
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {t("job")}
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            {t("about_text")}
            <br />
            {t("IA_era")}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default PersonalCard;
