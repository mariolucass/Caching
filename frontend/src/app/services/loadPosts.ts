export async function loadPosts() {
  const res = await fetch("http://localhost:3000/posts/");
  const data = await res.json();
  return data;
}
