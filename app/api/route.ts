import { NextResponse } from "next/server"

const API_KEY = "8fSqp6spLft7daTwqfam6z3Tyb5scM"

const getData = async () => {
  try{
    const res = await fetch(`https://www.amdoren.com/api/currency.php?api_key=${API_KEY}&from=EUR&to=GBP&amount=50`)
    return await res.json()
  }catch(err){
    console.log(err)
  }
}

export async function GET() {

  const data = await getData()
  
  return NextResponse.json(data)
}