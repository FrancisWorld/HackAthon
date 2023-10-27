export interface responseData{
    name: string
    points: number
}

export async function get({ params }: any) {
  return {
    body: JSON.stringify([
      {
        name: "Usuário",
        points: 100
      },
      {
        name: "Usuário",
        points: 100
      },
      {
        name: "Usuário",
        points: 100
      },
    ]),
  };
}
