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
        let entries = ('href' in linkSet) ? [linkSet] : linkSet.entries;
        return (
          <React.Fragment key={'category' in linkSet ? linkSet.category : new Date().getTime()}>
            {'category' in linkSet && (
              <>
                <Typography variant="h6" component="h2" gutterBottom>
                  {linkSet.category}
                </Typography>
                <Divider />
              </>
            )}
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
          </React.Fragment>
        );
      })}
    </>
  );
}
