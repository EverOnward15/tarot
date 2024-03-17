//deck cover
const startingCard = [    { name: "", description: "", url: "./rider-waite-tarot/deck_cover.jpeg" },
];

const tarotCards = [
    //Major arcana
    { name: "The Fool", description: "New beginnings, innocence, spontaneity", url: "./rider-waite-tarot/major_arcana_fool.png" },
    { name: "The Magician", description: "Manifestation, resourcefulness, power", url: "./rider-waite-tarot/major_arcana_magician.png" },
    { name: "The High Priestess", description: "Intuition, unconscious knowledge, mystery", url: "./rider-waite-tarot/major_arcana_priestess.png" },
    { name: "The Empress", description: "Femininity, beauty, nature", url: "./rider-waite-tarot/major_arcana_empress.png" },
    { name: "The Emperor", description: "Authority, stability, structure", url: "./rider-waite-tarot/major_arcana_emperor.png" },
    { name: "The Hierophant", description: "Tradition, conformity, spiritual guidance", url: "./rider-waite-tarot/major_arcana_hierophant.png" },
    { name: "The Lovers", description: "Love, harmony, relationships", url: "./rider-waite-tarot/major_arcana_lovers.png" },
    { name: "The Chariot", description: "Control, willpower, victory", url: "./rider-waite-tarot/major_arcana_chariot.png" },
    { name: "Strength", description: "Courage, inner strength, patience", url: "./rider-waite-tarot/major_arcana_strength.png" },
    { name: "The Hermit", description: "Soul-searching, introspection, guidance", url: "./rider-waite-tarot/major_arcana_hermit.png" },
    { name: "Wheel of Fortune", description: "Change, cycles, fate", url: "./rider-waite-tarot/major_arcana_fortune.png" },
    { name: "Justice", description: "Fairness, truth, balance", url: "./rider-waite-tarot/major_arcana_justice.png" },
    { name: "The Hanged Man", description: "Sacrifice, release, suspension", url: "./rider-waite-tarot/major_arcana_hanged.png" },
    { name: "Death", description: "Endings, transformation, renewal", url: "./rider-waite-tarot/major_arcana_death.png" },
    { name: "Temperance", description: "Balance, moderation, harmony", url: "./rider-waite-tarot/major_arcana_temperance.png" },
    { name: "The Devil", description: "Materialism, ignorance, bondage", url: "./rider-waite-tarot/major_arcana_devil.png" },
    { name: "The Tower", description: "Disaster, upheaval, revelation", url: "./rider-waite-tarot/major_arcana_tower.png" },
    { name: "The Star", description: "Hope, inspiration, generosity", url: "./rider-waite-tarot/major_arcana_star.png" },
    { name: "The Moon", description: "Illusion, fear, subconscious", url: "./rider-waite-tarot/major_arcana_moon.png" },
    { name: "The Sun", description: "Joy, success, vitality", url: "./rider-waite-tarot/major_arcana_sun.png" },
    { name: "Judgement", description: "Judgment, rebirth, inner calling", url: "./rider-waite-tarot/major_arcana_judgement.png" },
    { name: "The World", description: "Completion, fulfillment, unity", url: "./rider-waite-tarot/major_arcana_world.png" },
    
    // Wands (Minor Arcana)
    { name: "Ace of Wands", description: "New opportunities, inspiration, potential", url: "./rider-waite-tarot/minor_arcana_wands_ace.png" },
    { name: "Two of Wands", description: "Future planning, progress, decisions", url: "./rider-waite-tarot/minor_arcana_wands_2.png" },
    { name: "Three of Wands", description: "Expansion, foresight, leadership", url: "./rider-waite-tarot/minor_arcana_wands_3.png" },
    { name: "Four of Wands", description: "Celebration, harmony, homecoming", url: "./rider-waite-tarot/minor_arcana_wands_4.png" },
    { name: "Five of Wands", description: "Competition, conflict, diversity", url: "./rider-waite-tarot/minor_arcana_wands_5.png" },
    { name: "Six of Wands", description: "Victory, success, recognition", url: "./rider-waite-tarot/minor_arcana_wands_6.png" },
    { name: "Seven of Wands", description: "Defensiveness, perseverance, challenges", url: "./rider-waite-tarot/minor_arcana_wands_7.png" },
    { name: "Eight of Wands", description: "Speed, movement, quick decisions", url: "./rider-waite-tarot/minor_arcana_wands_8.png" },
    { name: "Nine of Wands", description: "Resilience, determination, persistence", url: "./rider-waite-tarot/minor_arcana_wands_9.png" },
    { name: "Ten of Wands", description: "Burden, responsibility, hard work", url: "./rider-waite-tarot/minor_arcana_wands_10.png" },
    { name: "Page of Wands", description: "Exploration, excitement, free spirit", url: "./rider-waite-tarot/minor_arcana_wands_page.png" },
    { name: "Knight of Wands", description: "Energy, adventure, impulsiveness", url: "./rider-waite-tarot/minor_arcana_wands_knight.png" },
    { name: "Queen of Wands", description: "Courage, confidence, independence", url: "./rider-waite-tarot/minor_arcana_wands_queen.png" },
    { name: "King of Wands", description: "Leadership, vision, charisma", url: "./rider-waite-tarot/minor_arcana_wands_king.png" },

    // Swords (Minor Arcana)
    { name: "Ace of Swords", description: "Clarity, mental breakthroughs, truth", url: "./rider-waite-tarot/minor_arcana_swords_ace.png" },
    { name: "Two of Swords", description: "Indecision, choices, stalemate", url: "./rider-waite-tarot/minor_arcana_swords_2.png" },
    { name: "Three of Swords", description: "Heartbreak, sorrow, grief", url: "./rider-waite-tarot/minor_arcana_swords_3.png" },
    { name: "Four of Swords", description: "Rest, relaxation, contemplation", url: "./rider-waite-tarot/minor_arcana_swords_4.png" },
    { name: "Five of Swords", description: "Conflict, tension, defeat", url: "./rider-waite-tarot/minor_arcana_swords_5.png" },
    { name: "Six of Swords", description: "Transition, moving on, leaving behind", url: "./rider-waite-tarot/minor_arcana_swords_6.png" },
    { name: "Seven of Swords", description: "Deception, betrayal, sneakiness", url: "./rider-waite-tarot/minor_arcana_swords_7.png" },
    { name: "Eight of Swords", description: "Restriction, imprisonment, self-victimization", url: "./rider-waite-tarot/minor_arcana_swords_8.png" },
    { name: "Nine of Swords", description: "Anxiety, fear, nightmares", url: "./rider-waite-tarot/minor_arcana_swords_9.png" },
    { name: "Ten of Swords", description: "Rock bottom, failure, collapse", url: "./rider-waite-tarot/minor_arcana_swords_10.png" },
    { name: "Page of Swords", description: "Curiosity, vigilance, new ideas", url: "./rider-waite-tarot/minor_arcana_swords_page.png" },
    { name: "Knight of Swords", description: "Ambition, action, haste", url: "./rider-waite-tarot/minor_arcana_swords_knight.png" },
    { name: "Queen of Swords", description: "Independence, wisdom, clear communication", url: "./rider-waite-tarot/minor_arcana_swords_queen.png" },
    { name: "King of Swords", description: "Mental clarity, authority, truth", url: "./rider-waite-tarot/minor_arcana_swords_king.png" },


    // Cups (Minor Arcana)
    { name: "Ace of Cups", description: "New beginnings, emotional fulfillment, joy", url: "./rider-waite-tarot/minor_arcana_cups_ace.png" },
    { name: "Two of Cups", description: "Unified love, partnership, mutual attraction", url: "./rider-waite-tarot/minor_arcana_cups_2.png" },
    { name: "Three of Cups", description: "Celebration, friendship, community", url: "./rider-waite-tarot/minor_arcana_cups_3.png" },
    { name: "Four of Cups", description: "Apathy, contemplation, discontentment", url: "./rider-waite-tarot/minor_arcana_cups_4.png" },
    { name: "Five of Cups", description: "Loss, grief, regret", url: "./rider-waite-tarot/minor_arcana_cups_5.png" },
    { name: "Six of Cups", description: "Nostalgia, childhood memories, innocence", url: "./rider-waite-tarot/minor_arcana_cups_6.png" },
    { name: "Seven of Cups", description: "Opportunity, choices, wishful thinking", url: "./rider-waite-tarot/minor_arcana_cups_7.png" },
    { name: "Eight of Cups", description: "Walking away, disillusionment, searching", url: "./rider-waite-tarot/minor_arcana_cups_8.png" },
    { name: "Nine of Cups", description: "Contentment, satisfaction, emotional fulfillment", url: "./rider-waite-tarot/minor_arcana_cups_9.png" },
    { name: "Ten of Cups", description: "Harmony, happiness, fulfillment", url: "./rider-waite-tarot/minor_arcana_cups_10.png" },
    { name: "Page of Cups", description: "Creativity, intuition, sensitivity", url: "./rider-waite-tarot/minor_arcana_cups_page.png" },
    { name: "Knight of Cups", description: "Romance, charm, pursuit of dreams", url: "./rider-waite-tarot/minor_arcana_cups_knight.png" },
    { name: "Queen of Cups", description: "Compassion, empathy, emotional support", url: "./rider-waite-tarot/minor_arcana_cups_queen.png" },
    { name: "King of Cups", description: "Emotional maturity, calmness, control", url: "./rider-waite-tarot/minor_arcana_cups_king.png" },

    // Pentacles (Minor Arcana)
    { name: "Ace of Pentacles", description: "New financial opportunity, prosperity, abundance", url: "./rider-waite-tarot/minor_arcana_pentacles_ace.png" },
    { name: "Two of Pentacles", description: "Balance, adaptability, juggling multiple priorities", url: "./rider-waite-tarot/minor_arcana_pentacles_2.png" },
    { name: "Three of Pentacles", description: "Teamwork, collaboration, building something together", url: "./rider-waite-tarot/minor_arcana_pentacles_3.png" },
    { name: "Four of Pentacles", description: "Conservation, security, control", url: "./rider-waite-tarot/minor_arcana_pentacles_4.png" },
    { name: "Five of Pentacles", description: "Hard times, poverty, insecurity", url: "./rider-waite-tarot/minor_arcana_pentacles_5.png" },
    { name: "Six of Pentacles", description: "Generosity, charity, giving and receiving", url: "./rider-waite-tarot/minor_arcana_pentacles_6.png" },
    { name: "Seven of Pentacles", description: "Assessment, reevaluation, patience", url: "./rider-waite-tarot/minor_arcana_pentacles_7.png" },
    { name: "Eight of Pentacles", description: "Apprenticeship, mastery, skill development", url: "./rider-waite-tarot/minor_arcana_pentacles_8.png" },
    { name: "Nine of Pentacles", description: "Fruitfulness, independence, luxury", url: "./rider-waite-tarot/minor_arcana_pentacles_9.png" },
    { name: "Ten of Pentacles", description: "Wealth, inheritance, establishment", url: "./rider-waite-tarot/minor_arcana_pentacles_10.png" },
    { name: "Page of Pentacles", description: "Manifestation, financial opportunity, new career", url: "./rider-waite-tarot/minor_arcana_pentacles_page.png" },
    { name: "Knight of Pentacles", description: "Hard work, productivity, routine", url: "./rider-waite-tarot/minor_arcana_pentacles_knight.png" },
    { name: "Queen of Pentacles", description: "Nurturing, practicality, abundance", url: "./rider-waite-tarot/minor_arcana_pentacles_queen.png" },
    { name: "King of Pentacles", description: "Abundance, prosperity, security", url: "./rider-waite-tarot/minor_arcana_pentacles_king.png" },
];

// Function to display initial card 
function startCard() {
    const cardContainer = document.getElementById("cardContainer");
    const startElement = document.createElement("div");
    const card = startingCard[0];
    startElement.classList.add("card");
    startElement.innerHTML = `
        <img src="${card.url}"></img>
        <h2>${card.name}</h2>
        <p>${card.description}</p>
    `;
    cardContainer.innerHTML = "";
    cardContainer.appendChild(startElement);
}

// Function to randomly select a card and display it
function drawCard() {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomIndex];
    const cardContainer = document.getElementById("cardContainer");
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
        <img src="${card.url}"></img>
        <h2>${card.name}</h2>
        <p>${card.description}</p>
    `;
    cardContainer.innerHTML = "";
    cardContainer.appendChild(cardElement);
}

// Event listener for draw card button
document.getElementById("drawCardButton").addEventListener("click", drawCard);

//Reset
document.getElementById("reset").addEventListener("click", startCard);


// Initial draw when the page loads
startCard();
