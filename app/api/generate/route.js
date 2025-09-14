import clientPromise from "@/lib/mongodb"

export async function POST(req) {

    const body =  await req.json()
    const client = await clientPromise;
    const db = client.db("URLite");
    const collection = db.collection("url")

    // check if the short url exist
    const doc = await collection.findOne({shorturl:body.shorturl})
    if(doc){
      return Response.json({ sucess:false, error:true , message: 'URL is already exist!' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })

  return Response.json({ sucess:true, error:false , message: ' URL generated successfully' })
}