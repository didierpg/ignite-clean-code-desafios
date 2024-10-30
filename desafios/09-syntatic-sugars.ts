function getFirstFiveRatings({ ratings }) {
  const isRatingsAmountGreaterOrEqualFive = ratings.length >= 5;

  let firstFiveRatings = [];
  if (isRatingsAmountGreaterOrEqualFive) {
    firstFiveRatings = ratings.slice(0, 5);
  }

  return {
    firstFiveRatings,
  };
}

function sumFirstFiveRatings({ ratings }) {
  const hasRatings = Boolean(ratings);

  if (hasRatings) {
    const { firstFiveRatings } = getFirstFiveRatings({ ratings });

    if (!firstFiveRatings) return { error: "there must be at least 5 ratings" };

    const ratingsSum = firstFiveRatings.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    return { ratingsSum, created_at: Date.now() };
  }

  return { error: "ratings is required" };
}

const appRatings = ["5", "3", "4", "4", "5", "1", "5", "4", "4", "3"];
sumFirstFiveRatings({ ratings: appRatings });
