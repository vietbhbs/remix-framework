import { ActionFunction, json } from "@remix-run/node";
import { resolverBook } from "nodejs-book-modules";

export const action: ActionFunction = async ({request}) => {
  if (request.method === "POST") {
    const book = await resolverBook.createBook(request, );
    return json(
      {
        data: await resolverBook.books
      }
    );
  } else {
    throw new Response("Not Found", {
      status: 404
    });
  }
};