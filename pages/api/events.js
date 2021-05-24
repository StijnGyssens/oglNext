// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {knex} from "../../components/helpers"

export default async (req, res) => {
  const result = await knex.select().table("events")
  res.status(200).json(result)
}
