const express = require("express")
const router = express.Router()

const {
  createIncident,
  getIncidents,
  updateStatus
} = require("../controllers/incidentController")

router.post("/create", createIncident)

router.get("/all", getIncidents)

router.put("/update/:id", updateStatus)

module.exports = router