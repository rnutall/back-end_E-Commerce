const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint
// find all tags
// be sure to include its associated Product data
router.get("/", (req, res) => {
  Tag.findAll().then((tagData) => {
    res.json(tagData);
  });
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get("/:id", (req, res) => {
  tag
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((tagData) => {
      res.json(tagData);
    });
});

router.post("/", (req, res) => {
  // create a new tag
  tag.bulkCreate([
    {
      title: "Make It Stick: The Science of Successful Learning",
      author: "Peter Brown",
      id: "9780674729018",
      pages: 336,
      edition: 1,
      is_paperback: false,
    },
  ]);
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  tag.update(
    {
      // All the fields you can update and the data attached to the request body.
      title: req.body.title,
      author: req.body.author,
      id: req.body.id,
      pages: req.body.pages,
      edition: req.body.edition,
      is_paperback: req.body.is_paperback,
    },
    {
      // Gets the tags based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedtag) => {
      // Sends the updated tag as a json response
      res.json(updatedtag);
    })
    .catch((err) => res.json(err));
});

// delete on tag by its `id` value
router.delete("/:id", (req, res) => {
  tag
    .destroy({
      where: {
        id: res.params.id,
      },
    })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
