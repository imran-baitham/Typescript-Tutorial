import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

const Home: NextPage = () => {
  const [num, setNum] = useState<number>(1);
  const handleChange = (e: string) => {
    console.log(e);
    return e;
  };

  return (
    <div>
      <Head>
        <title>Full TypeScript Tutorial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Button title="Button" variants={Variants.PERMIRY} /> */}
        {/* <Button title="Hello World" status={ButtonStatus.PANDING} /> */}
        {/* <Input
          onChange={(event) => handleChange(event.target.value)}
          label="Search Input"
          variant={InputVariants.LG}
        /> */}
        {/* <Button
          num={num}
          set={setNum}
          // addBoth={(num1: number) => {
          //   setNum(num1 + 1);
          //   console.log(num);
          //   return 3;
          // }}
        /> */}
        hello world
      </main>
    </div>
  );
};

export default Home;
