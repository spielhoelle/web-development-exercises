exports.createBook = async (req, res) => {
  console.log(`Here we have what got send through the form available in the BookController file:`);
  console.log(req.body);
  res.redirect('/')
}
