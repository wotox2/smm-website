const express = require("express")
const router = express.Router()
const fs = require("fs")
const axios = require("axios");
const { SMM_STORE } = require("../../lib/envAccess");





setInterval(() => {
    axios.get(SMM_STORE.BASE_URL
        + `?key=${SMM_STORE.API_KEY}&action=services`
    )
        .then(data => {
            console.log("Catching Started ....")
            const services = data.data
            fs.writeFile(
                "catch/services.json",
                JSON.stringify(services),
                (res, err) => {
                    console.log(err)
                }
            )
            fs.close()
        })
        .catch(err => {
        })
}, 60000);



router.get("/", async (req, res) => {
    return res.json(require("../../catch/services.json"))
})





router.get("/popular-services", (req, res) => {
})


module.exports = router 