const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products
router.get("/", (req, res) => {
  Category.findAll().then((CategoryData) => {
    res.json(CategoryData);
  });
});

// find one category by its `id` value
// be sure to include its associated Products
router.get("/:id", (req, res) => {
  Category.findOne(
    {
      // Gets the Category based on the id given in the request parameters
      where: { 
        id: req.params.id 
      },
    }
  ).then((CategoryData) => {
    res.json(CategoryData);
  });
});


router.post("/", (req, res) => {
  // create a new category
  Category.bulkCreate([
    {
      title: "Make It Stick: The Science of Successful Learning",
      author: "Peter Brown",
      id: "9780674729018",
      pages: 336,
      edition: 1,
      is_paperback: false,
    },
    {
      title:
        "Essential Scrum: A Practical Guide to the Most Popular Agile Process",
      author: "Kenneth Rubin",
      id: "9780137043293",
      pages: 500,
      edition: 1,
      is_paperback: true,
    },
  ]);

  // update a category by its `id` value
  router.put("/:id", (req, res) => {
    // Calls the update method on the Category model
    Category.update(
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
        // Gets the Categorys based on the id given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedCategory) => {
        // Sends the updated Category as a json response
        res.json(updatedCategory);
      })
      .catch((err) => res.json(err));
  });
  

  // delete a category by its `id` value
  router.delete("/:id", (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedCategory) => {
        res.json(deletedCategory);
      })
      .catch((err) => res.json(err));
  });
});

module.exports = router;
