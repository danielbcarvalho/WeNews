import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "John" },
    { id: 1, name: "Daniel" },
    { id: 1, name: "Mel" },
  ];

  return response.json(users);
};
