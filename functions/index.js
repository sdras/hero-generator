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

    // await fetch(`https://api.github.com/repos/netlify/product/issues`, {
    //   method: "post",
    //   body: event.body,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: process.env.GITHUB_API,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     if (json.Status === 201) {
    //       console.log(`Issue created at ${json.status.Location}`)
    //     } else {
    //       console.log(`Issue created: ${JSON.stringify(json)}`)
    //     }
    //   })

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
