//rota dinâmica, para parâmetros dinâmicos. Ex: userId
//[...params].tsx vai pegar todos os dados passados pelo user. ex. api/users.edit/1
import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  //acesso ao id dinâmico do usuário. Ex: http://localhost:3000/api/users/1
  const id = request.query;

  console.log(id); // 1

  const users = [
    { id: 1, name: "John" },
    { id: 1, name: "Daniel" },
    { id: 1, name: "Mel" },
  ];

  return response.json(users);
};
