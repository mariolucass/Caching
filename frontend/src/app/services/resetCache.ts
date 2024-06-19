export async function resetCache() {
  await fetch("http://localhost:3000/cache/", {
    method: "DELETE",
  });
}
