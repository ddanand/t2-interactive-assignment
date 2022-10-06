import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { FullProfile } from "./FullProfile";
import { UserList } from "./UsersList";

export function Main() {

  const value = 0;
  const handleChange = (event, newValue) => {
    console.log("TRYING TO CHANGE TO TAB: ", newValue)
  };
  const currentUser = {
    gender: "male",
    name: { title: "Mr", first: "Elzo", last: "Sales" },
    location: {
      street: { number: 6378, name: "Rua Onze " },
      city: "Barueri",
      state: "Acre",
      country: "Brazil",
      postcode: 12757,
      coordinates: { latitude: "-77.5253", longitude: "-108.5009" },
      timezone: { offset: "-8:00", description: "Pacific Time (US & Canada)" }
    },
    email: "elzo.sales@example.com",
    login: {
      uuid: "5e2a6100-12c5-4dfb-a39b-9932270ab649",
      username: "organicpeacock636",
      password: "chickens",
      salt: "giXu19Rl",
      md5: "3db55a277f5d539a9bcaaa4dea1f68ee",
      sha1: "6e091e9b6143ad637b554db81c82e098e7547557",
      sha256: "d00ea3a2cd8312cf51b3efe77eef6765ffd6fa1f7625e72bdbd519f24dd2cd0c"
    },
    dob: { date: "1976-07-18T08:12:04.949Z", age: 44 },
    registered: { date: "2006-01-09T06:25:56.340Z", age: 14 },
    phone: "(14) 0674-2565",
    cell: "(23) 6348-8808",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/16.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/16.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/16.jpg"
    },
    nat: "BR"
  };
  return (
<>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} >
          <Tab label="Users"  />
          <Tab label="Selected User" />
        </Tabs>
      </AppBar>
      <div
    >
      {value === 0 &&   <UserList />}
    </div>

    {value === 1 &&   (currentUser ? (
          <FullProfile {...currentUser} />
        ) : (
          <div>No current user selected</div>
        ))}

</>
  );
}
