import { CardType } from "@/types/type";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY as string,
    "X-RapidAPI-Host": "keto-diet.p.rapidapi.com",
  },
};

export function fetchData(url: string) {
  const data = fetch(`https://keto-diet.p.rapidapi.com/${url}`, options)
    .then((res) => res.json())
    .catch((e) => console.log(e));
  return data;
}

export async function getCategoryId() {
  const data = await fetchData("categories/");
  return data.map((d: CardType) => {
    return {
      params: {
        id: d.id.toString(),
      },
    };
  });
}

export async function getRecipeId() {
  const data = await fetchData("");
  return data.map((d: any) => {
    return {
      params: {
        id: d.id.toString(),
      },
    };
  });
}

export async function getCategoryDataById(id: number) {
  const data = await fetchData(`?category=${id}`);

  return {
    ...data,
  };
}

export async function getRecipeDataById(id: number) {
  const data = await fetchData(`?id=${id}`);
  return {
    id,
    ...data[0],
  };
}
