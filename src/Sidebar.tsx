import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function Sidebar(props: { links: Array<{ href: string, text: string }> }) {
  return (
    <List>
      {props.links.map(({ href, text }) => (
        <ListItem key={href} disablePadding>
          <ListItemButton component="a" href={href}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
