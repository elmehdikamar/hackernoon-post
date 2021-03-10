import article from "../../data/hackernoon_article"

export default async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))
  res.status(200).json(article)
}
