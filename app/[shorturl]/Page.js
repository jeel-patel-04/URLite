import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation"

export default async function Page({ params }) {
  const { shorturl } = params
  const client = await clientPromise
  const db = client.db("URLite")
  const collection = db.collection("url")

  // find original long URL
  const record = await collection.findOne({ shorturl: shorturl })

  if (record) {
    // redirect to the original URL
    redirect(record.url)
  }else{
    redirect(`${process.envNEXT_PUBLIC_HOST}`)
  }

  return <p>Short URL not found</p>
}
