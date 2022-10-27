const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { Show } = require("../models/index");
const { User } = require("../models/index");

// GET all shows //
router.get("/", async (req, res) => {
  const shows = await Show.findAll();
  res.json(shows);
});

// GET one show //
router.get("/:id", async (req, res) => {
  const foundshow = await Show.findByPk(req.params.id);
  res.json(foundshow);
});

// GET shows of a particular genre //
router.get("/genres/:genre", async (req, res) => {
  const genre = await Show.findAll({
    where: {
      genre: req.params.genre,
    },
  });

  res.json(genre);
});

// PUT update rating of a show that has been watched //
router.put("/:showId/watched", async (req, res) => {
  const updaterating = await Show.findByPk(req.params.showId);
  updaterating.update({ rating: req.body.rating });
  console.log("testing", req.body);
  res.json(updaterating);
});

// PUT update the status of a show //
router.put(
  "/:showId/updates",
  [check("status").not().isEmpty().trim().isLength({ min: 5, max: 25 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
      const updatestatus = await Show.findByPk(req.params.showId);
      updatestatus.update({ status: req.body.status });
      res.json(updatestatus);
    }
  }
);

// DELETE a show //
router.delete("/:id", async (req, res) => {
  const showtodelete = await Show.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(await Show.findAll());
});

module.exports = router;
