// Exercise 1 Section

function printOdds(count) {
  if (count < 0) {
    console.log("enter a positive number");
    return;
  }

  for (let i = 1; i <= count; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printOdds(100);

// Exercise 2 Section

function checkAge(userName, age) {
  const aboveSixteen = `Congrats ${userName}, you can drive!`;
  const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;

  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}

checkAge("Josh", 30);

// Exercise 3 section

function whichQuadrant(x, y) {
  if (x > 0 && y > 0) {
    console.log("this point lies in Quadrant 1");
  } else if (x < 0 && y > 0) {
    console.log("this point lies in Quadrant 2");
  } else if (x < 0 && y < 0) {
    console.log("this point lies in Quadrant 3");
  } else if (x > 0 && y < 0) {
    console.log("this point lies in Quadrant 4");
  }
}

function whichAxis(x, y) {
  if (x === 0 && y !== 0) {
    console.log("this point lies on the Y-axis");
  } else if (x !== 0 && y === 0) {
    console.log("this point lies on the X-axis");
  }
}

whichQuadrant(2, -10);
whichAxis(5, 0);

// Exercise 4 section

function triangle(side1, side2, side3) {
  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    console.log("Invalid triangle");
  } else if (side1 === side2 && side2 === side3) {
    console.log("This is a equilateral triangle");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("This is an isosceles triangle");
  } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
    console.log("This is a scalene triangle");
  }
}

triangle(3, 4, 5);

// Exercise 5 section

function dataUsage(planLimit, day, usage) {
  const daysRemaining = 30 - day;
  const averageAllowed = planLimit / 30;
  const currentAverage = usage / day;
  const projectedUsage = currentAverage * 30;
  const dataOverage = projectedUsage - planLimit;
  const remainingData = planLimit - usage;
  const recommendedDaily = remainingData / daysRemaining;

  console.log(`${day} days used, ${daysRemaining} days remaining`);
  console.log(`Average daily use: ${averageAllowed.toFixed(2)} GB/day`);

  if (usage >= planLimit) {
    console.log("You have run out of data.");
  } else if (currentAverage > averageAllowed) {
    console.log(
      `You are EXCEEDING your average daily use (${currentAverage.toFixed(
        2
      )} GB/day),`
    );
    console.log(
      `continuing this high usage, you'll exceed your data plan by ${dataOverage.toFixed(
        2
      )} GB.`
    );
    console.log(
      `To stay below your data plan, use no more than ${recommendedDaily.toFixed(
        2
      )} GB/day.`
    );
  } else if (currentAverage < averageAllowed) {
    console.log(
      `You are UNDER your average daily use (${currentAverage.toFixed(
        2
      )} GB/day).`
    );
    console.log(
      `You can use up to ${recommendedDaily.toFixed(
        2
      )} GB/day for the rest of the month.`
    );
  } else {
    console.log("You are RIGHT ON TRACK with your average usage.");
  }
}

dataUsage(15, 5, 14);
