function render() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  books.forEach((b) => {
    tbody.innerHTML += `<tr><td>${b.title}</td><td>${b.author}</td><td>${b.year}</td><td>${b.genre}</td></tr>`;
  });
}
// Book information updating function
function updateBook() {
  const t = document.getElementById("title").value.trim();
  const a = document.getElementById("author").value.trim();
  const y = parseInt(document.getElementById("year").value.trim());
  const g = document.getElementById("genre").value.trim();
  // Input validation, this checks if all fields are filled before updating the book information
  if (!t || !a || !y || !g || isNaN(y)) return alert("Invalid input");
  let book = books.find((b) => b.title === t);
  if (!book) return alert("Book not found");
  book.author = a;
  book.year = y;
  book.genre = g;
  render();
}
// Book removing function
function removeBook() {
  const t = document.getElementById("removeTitle").value.trim();
  books = books.filter((b) => b.title !== t);
  render();
}
fetch("book_info.json")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not OK");
    return response.json();
  })
  .then((data) => {
    books = data;
    render();
  })
  .catch((error) => {
    console.error("Failed to load JSON:", error);
    alert("Failed to load book data");
  });
