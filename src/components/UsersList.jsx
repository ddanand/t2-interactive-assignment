import React from "react";

export const UserList = () => {
  const randomUsers = [
    {
      gender: "male",
      name: { title: "Mr", first: "Anton", last: "Møller" },
      location: {
        street: { number: 959, name: "Hjortevænget" },
        city: "Randers Nv",
        state: "Sjælland",
        country: "Denmark",
        postcode: 25297,
        coordinates: { latitude: "-28.9996", longitude: "-42.3621" },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia"
        }
      },
      email: "anton.moller@example.com",
      login: {
        uuid: "19f159c2-fa99-4041-bf85-acbc24538cfb",
        username: "orangefrog688",
        password: "wingman",
        salt: "8NJKardE",
        md5: "1fabfa7b23daf9d32cf7766f2ad57ea0",
        sha1: "c0cc31e42f93e11f4343eb2216f27a8743b18c78",
        sha256:
          "1648203ac0e2eb8c6f7fd3bac2279e1352437e42973a6424c0f4a7957ad3f46f"
      },
      dob: { date: "1986-08-15T17:38:00.382Z", age: 34 },
      registered: { date: "2014-04-23T11:57:33.908Z", age: 6 },
      phone: "13325896",
      cell: "74638980",
      id: { name: "CPR", value: "150886-4911" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/76.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/76.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/76.jpg"
      },
      nat: "DK"
    },
    {
      gender: "female",
      name: { title: "Ms", first: "Asuncion", last: "Molina" },
      location: {
        street: { number: 5011, name: "Avenida de Salamanca" },
        city: "Lugo",
        state: "Aragón",
        country: "Spain",
        postcode: 61017,
        coordinates: { latitude: "37.1156", longitude: "-11.6825" },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      email: "asuncion.molina@example.com",
      login: {
        uuid: "95ded06f-226b-419e-8827-19d8c9f86749",
        username: "purplegorilla402",
        password: "dean",
        salt: "ZGWK0FzC",
        md5: "f9278814be943336df5b097be64c70d5",
        sha1: "c17d8a400028b0d219883abb34ca0dc42bf1e1a1",
        sha256:
          "8f8e99d141fb22edf6170c417b00a0d16f4856908985eee967c92b1f6f6a693c"
      },
      dob: { date: "1968-02-07T23:12:31.826Z", age: 52 },
      registered: { date: "2005-03-26T22:46:27.159Z", age: 15 },
      phone: "996-333-369",
      cell: "677-886-276",
      id: { name: "DNI", value: "80083144-Z" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/76.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/76.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/76.jpg"
      },
      nat: "ES"
    },
    {
      gender: "female",
      name: { title: "Mademoiselle", first: "Jacqueline", last: "Durand" },
      location: {
        street: { number: 3471, name: "Avenue Vauban" },
        city: "Flüelen",
        state: "Zug",
        country: "Switzerland",
        postcode: 7911,
        coordinates: { latitude: "-17.8631", longitude: "-59.1317" },
        timezone: { offset: "-3:30", description: "Newfoundland" }
      },
      email: "jacqueline.durand@example.com",
      login: {
        uuid: "62cf9466-59ec-4cdd-a4bb-c10d6266f2d7",
        username: "happymouse139",
        password: "spiral",
        salt: "4RYt4SdH",
        md5: "39b4871bc6f83699b731e2d3eeca415a",
        sha1: "59b564593e87e5e13685604e65abce903cdc4000",
        sha256:
          "e519e5516f7edc6bff18a00706b0866e5b7120d547e7251000125075fb2aeb19"
      },
      dob: { date: "1946-12-18T19:06:51.313Z", age: 74 },
      registered: { date: "2017-04-18T14:02:42.044Z", age: 3 },
      phone: "077 315 59 45",
      cell: "079 262 03 61",
      id: { name: "AVS", value: "756.6607.8069.63" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/68.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/68.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/68.jpg"
      },
      nat: "CH"
    }
  ];

  return (
    <div>
      {randomUsers.map(item => (
        <div key={item.login.uuid} className="tile">
          <img src={item.picture.large} alt="img" />
          <div>{`${item.name.first} ${
            item.name.last
          }`}</div>
        </div>
      ))}
    </div>
  );
};

