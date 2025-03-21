import Container from "@mui/material/Container";
import Copyright from "../../src/Copyright";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="lg">
      <main>{children}</main>
      <Copyright />
    </Container>
  );
}
