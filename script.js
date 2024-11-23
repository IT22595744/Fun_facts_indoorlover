const indoorGameFacts = [
    "Did you know? Indoor game enthusiasts tend to have better problem-solving skills as they often engage in strategic thinking games!",
    "Someone who loves indoor games typically spends 50% more time developing social bonds through multiplayer games than outdoor-only players.",
    "Indoor gaming fans have been found to have higher patience levels, as board games and puzzles often require careful planning and waiting.",
    "A typical indoor game lover owns an average of 15 board games and can spend up to 10 hours per week playing their favorite games!",
    "Indoor gaming enthusiasts are 30% more likely to excel at pattern recognition due to their exposure to various puzzle and strategy games.",
    "Regular chess players show improved memory and cognitive abilities compared to non-players!",
    "Indoor gaming has been linked to increased creativity, with puzzle gamers showing 20% higher scores on creative thinking tests.",
    "Family board game nights can improve children's emotional intelligence and social skills by up to 25%!",
    "Strategy game players demonstrate enhanced decision-making skills in real-world scenarios.",
    "Indoor gamers who play cooperative games show increased empathy and team-working abilities!"
];

const factDisplay = document.getElementById('factDisplay');
const newFactBtn = document.getElementById('newFactBtn');

function displayRandomFact() {
    const randomFact = indoorGameFacts[Math.floor(Math.random() * indoorGameFacts.length)];
    factDisplay.textContent = randomFact;
}

// Display initial fact when page loads
displayRandomFact();

// Add click event listener to button
newFactBtn.addEventListener('click', displayRandomFact);
