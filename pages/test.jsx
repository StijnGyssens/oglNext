import React from "react";

function test() {
  return <div>blabla</div>;
}

export default test;

export async function getServerSideProps() {
  // FB.api(
  //     '/me/feed',
  //     'GET',
  //     {},
  //     function(response) {
  //         // Insert your code here
  //     }
  //   );
}
// npm i fb
// export default function test({ data }) {
//   return <pre>{JSON.stringify(data, null, 4)}</pre>;
//   }

//   export async function getServerSideProps() {
//   var FB = require("fb");
//   const data = await FB.api("me/feed", {
//   fields: ["id","name","message","full_picture","picture","attachments","comments"],
//   access_token:
//   "XXX",
//   });
//   return {
//   props: {
//   data,
//   },
//   };
//   }
