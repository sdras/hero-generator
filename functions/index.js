const fetch = require("node-fetch")
const AWS = require("aws-sdk")
const sharp = require("sharp")
require("dotenv").config()

const fnHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
}

exports.handler = async (event, context) => {
  try {
    sharp(event.body)
      .resize(300)
      .toFile("output.jpg", function(err) {
        console.log(`There was an error, ${err}`)
      })
      .on("info", function(info) {
        console.log("Image width is " + info.width)
      })

    return {
      statusCode: 200,
      fnHeaders,
      body: JSON.stringify({
        status: "it works! beep boop",
      }),
    }
  } catch (err) {
    console.error(err)

    return {
      statusCode: 400,
      fnHeaders,
      body: JSON.stringify({
        status: err,
      }),
    }
  }
}
