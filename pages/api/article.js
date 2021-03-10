import article from "../../data/hackernoon_article"

export default (req, res) => {
  res.status(200).json(article)
}
