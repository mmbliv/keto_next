import { CategoryType } from "@/types/type";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3a7cfed0bbmsh8015a4bc6f08d36p1f95d0jsn7fc4d9efe6db",
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
  return data.map((d: CategoryType) => {
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
    id,
    ...data,
  };
}
