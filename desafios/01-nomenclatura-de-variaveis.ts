// Nomenclatura de variáveis

const githubCategories = [
  {
    title: "User",
    minFollowersRequired: 5,
  },
  {
    title: "Friendly",
    minFollowersRequired: 50,
  },
  {
    title: "Famous",
    minFollowersRequired: 500,
  },
  {
    title: "Super Star",
    minFollowersRequired: 1000,
  },
];

export default async function getGithubUserCategory(request, response) {
  const githubUsername = String(request.query.username);

  if (!githubUsername) {
    return response.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const githubUserResponse = await fetch(
    `https://api.github.com/users/${githubUsername}`
  );

  if (githubUserResponse.status === 404) {
    return response.status(400).json({
      message: `User with username "${githubUsername}" not found`,
    });
  }

  const user = await githubUserResponse.json();

  const categories = githubCategories.sort(
    (categoryA, categoryB) =>
      categoryB.minFollowersRequired - categoryA.minFollowersRequired
  );

  const userCategory = categories.find(
    (category) => user.followers > category.minFollowersRequired
  );

  const githubUserCategory = {
    github: githubUsername,
    category: userCategory.title,
  };

  return githubUserCategory;
}

getGithubUserCategory(
  {
    query: {
      username: "josepholiveira",
    },
  },
  {}
);
