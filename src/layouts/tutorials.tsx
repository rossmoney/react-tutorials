import Sidebar from "../Sidebar";
import BaseLayout from "./base";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const GridItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Tutorials({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <Grid size={3}>
          <GridItem>
            <nav aria-label="main">
              <Sidebar links={links} />
            </nav>
          </GridItem>
        </Grid>
        <Grid size={9}>
          <GridItem>
            <main>
              {children}
            </main>
          </GridItem>
        </Grid>
      </Grid>
    </BaseLayout>
  );
}

const links = [
  {
    href: "/tutorials/noughts-and-crosses",
    text: "Noughts and Crosses Game",
  },
  {
    href: "/tutorials/product-table",
    text: "Filterable Product Table",
  },
];
