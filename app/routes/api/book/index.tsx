import { ActionFunction, json } from "@remix-run/node";
import { resolverBook } from "nodejs-book-modules";
// import { response } from "msw";
// import {Response} from "@remix-run/node";

export const action: ActionFunction = async ({request}) => {
  if (request.method === "POST") {
    const response = new Response();
    console.log(response);
    return await resolverBook.books(request, response)
    // return json(
    //   {
    //     data: books
    //   }
    // );
  } else {
    throw new Response("Not Found", {
      status: 404
    });
  }
};