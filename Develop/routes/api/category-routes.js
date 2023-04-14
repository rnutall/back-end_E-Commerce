const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products
router.get("/", (req, res) => {
  const categoryData = [
    {
      category_name: "Shirts",
    },
    {
      category_name: "Shorts",
    },
    {
      category_name: "Music",
    },
    {
      category_name: "Hats",
    },
    {
      category_name: "Shoes",
    },
  ];
});

// find one category by its `id` value
// be sure to include its associated Products
router.get("/:id", (req, res) => {
  const productData = [
    {
      product_name: "Plain T-Shirt",
      price: 14.99,
      stock: 14,
      category_id: 1,
    },
    {
      product_name: "Running Sneakers",
      price: 90.0,
      stock: 25,
      category_id: 5,
    },
    {
      product_name: "Branded Baseball Hat",
      price: 22.99,
      stock: 12,
      category_id: 4,
    },
    {
      product_name: "Top 40 Music Compilation Vinyl Record",
      price: 12.99,
      stock: 50,
      category_id: 3,
    },
    {
      product_name: "Cargo Shorts",
      price: 29.99,
      stock: 22,
      category_id: 2,
    },
  ];
});

router.post("/", (req, res) => {
  // create a new category
  Book.bulkCreate([
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
    // Calls the update method on the Book model
    Book.update({
      // All the fields you can update and the data attached to the request body.
      title: req.body.title,
      author: req.body.author,
      id: req.body.id,
      pages: req.body.pages,
      edition: req.body.edition,
      is_paperback: req.body.is_paperback,
    });
  });

  // delete a category by its `id` value
  router.delete("/:id", (req, res) => {
    Book.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedBook) => {
        res.json(deletedBook);
      })
      .catch((err) => res.json(err));
  });
});

module.exports = router;
