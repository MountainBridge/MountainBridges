// Deliberately broken example.
// Part 2 demonstrates how a model requests a tool to inspect and edit it.

function checkout(cart) {
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  total = total + tax;
  return total;
}

module.exports = { checkout };
