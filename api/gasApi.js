const BASE_URL =
  "https://script.google.com/macros/s/AKfycbyj4HRSbYGEUAhB9noHlmsYFS0QVy_fijEugfmq8lZ_ArRQhGmf03BujCFc3rneHoQS2w/exec"; // ←あなたのGAS URLに置き換えて！

export async function getUsers(params = {}) {
  const url = new URL(BASE_URL);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const res = await fetch(url);
  if (!res.ok) throw new Error("ユーザー取得に失敗");
  return await res.json();
}

export async function createUser(user) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error("ユーザー作成に失敗");
  return await res.text();
}

export async function updateUser(user) {
  const res = await fetch(BASE_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error("ユーザー更新に失敗");
  return await res.text();
}

export async function deleteUser(id) {
  const res = await fetch(BASE_URL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error("ユーザー削除に失敗");
  return await res.text();
}
