async function register(data) {
  const { email, name, avatar } = data;

  if (!avatar) return { error: "avatar is required" };

  if (!name) return { error: "name is required" };

  const emailAlreadyUsed = existsUserByEmail(email);

  if (emailAlreadyUsed) {
    return { error: "email already used" };
  }

  const compatibleAvatar = convertImageToJPG(avatar);

  const user = await createUser({ email, name, avatar: compatibleAvatar });

  return { user };
}
