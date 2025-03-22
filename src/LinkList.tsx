import { Divider, ListItemIcon, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { LinksSimple, LinksCategories } from "./types";

export default function LinkList(props: { links: LinksSimple | LinksCategories }) {
  return (
    <>
      {props.links.map((linkSet) => {
        let entries = 'href' in linkSet ? [linkSet] : linkSet.entries;
        let list = 'href' in linkSet ? (
          <ListItem key={linkSet.href} disablePadding>
            <ListItemButton component="a" href={linkSet.href}>
              <ListItemIcon>{linkSet.icon}</ListItemIcon>
              <ListItemText primary={linkSet.text} />
            </ListItemButton>
          </ListItem>
        ) : (
          <List>
            {entries.map(({ href, text, icon }) => (
              <ListItem key={href} disablePadding>
                <ListItemButton component="a" href={href}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        );

        function getRandomInt(max: number) {
          return Math.floor(Math.random() * max);
        }
        return (
          <React.Fragment key={'category' in linkSet ? linkSet.category : new Date().getTime() + getRandomInt(1000)}>
            {'category' in linkSet && (
              <>
                <Typography variant="h6" component="h2" gutterBottom>
                  {linkSet.category}
                </Typography>
                <Divider />
              </>
            )}
            {list}
          </React.Fragment>
        );
      })}
    </>
  );
}
