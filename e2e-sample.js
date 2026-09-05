// Sample util for the review test.
function add(a, b) {
  return a + b;
}
function isAdmin(user) {
  return user.role == "admin";
}
module.exports = { add, isAdmin };