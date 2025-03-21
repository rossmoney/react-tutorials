import LinkList from "../LinkList";
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

export default function Tutorials({ children, links }: { children: React.ReactNode, links: Array<{ href: string, text: string }> }) {
  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <Grid size={3}>
          <GridItem>
            <nav aria-label="main">
              <LinkList links={links} />
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
