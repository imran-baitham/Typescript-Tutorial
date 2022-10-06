import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return { props: { data: data } };
};
const Users = ({ data }: any) => {
  console.log(data, "props");
  return (
    <>
      <h1>Users Details here</h1>
      {data.map((item: any) => (
        <div key={item.id}>
          <a> {item.name}</a>
        </div>
      ))}
    </>
  );
};

export default Users;
