// ============================================================
//  CRUISE DATA — Edit this file to update your site
// ============================================================

const cruiseData = {
  title: "Setting Sail 2026",
  subtitle: "A Trip to Remember",
  ship: "Carnival Cruise",
  departure: "June 8, 2026",
  returnDate: "June 12, 2026",
  heroEmoji: "⚓",

  // ── Passengers ──────────────────────────────────────────
  // Add or remove passengers here. cabin is optional.
  passengers: [
    // Stateroom 1 — #QB21G8 · Arrival: 11:00–11:30 AM
    { name: "Ashok Kuma Natarajan",    cabin: "Stateroom 1 · #QB21G8" },
    { name: "Vasanth Nesamani",        cabin: "Stateroom 1 · #QB21G8" },
    { name: "Abhimanyar Ashok",        cabin: "Stateroom 1 · #QB21G8" },
    { name: "Adharrva Ashok",          cabin: "Stateroom 1 · #QB21G8" },
    // Stateroom 2 — #QB21G9 · Arrival: 11:00–11:30 AM
    { name: "Krishnapra Ashokkumar",   cabin: "Stateroom 2 · #QB21G9" },
    { name: "Madhubala Natarajan",     cabin: "Stateroom 2 · #QB21G9" },
    { name: "Harshad Vasanth",         cabin: "Stateroom 2 · #QB21G9" },
    { name: "Haasini Vasanth",         cabin: "Stateroom 2 · #QB21G9" },
    // Stateroom 3 — #QB21H0 · Arrival: 11:00–11:30 AM
    { name: "Rajesh Pra Natarajan",    cabin: "Stateroom 3 · #QB21H0" },
    { name: "Anitha Ramasamy",         cabin: "Stateroom 3 · #QB21H0" },
    { name: "Rajitha Rajesh Prabhu",   cabin: "Stateroom 3 · #QB21H0" },
    { name: "Rashmitha Rajesh Prabhu", cabin: "Stateroom 3 · #QB21H0" },
  ],

  // ── Itinerary ────────────────────────────────────────────
  days: [
    {
      day: 1,
      date: "Monday, June 8, 2026",
      port: "Miami, Florida",
      label: "Embarkation Day",
      icon: "🚢",
      description: "Welcome aboard! Today we depart from Miami. Our arrival appointment is <strong>11:00–11:30 AM</strong> — all guests in each stateroom must arrive together during this window to minimize wait times. Get your boarding passes and luggage tags ready in advance.",
      highlights: ["⏰ Arrival: 11:00–11:30 AM", "All guests board together", "Muster safety drill", "Sail-away party on deck", "Explore the ship"]
    },
    {
      day: 2,
      date: "Tuesday, June 9, 2026",
      port: "Fun Day at Sea",
      label: "At Sea",
      icon: "🌊",
      description: "No port today — it's all about the ship! Explore entertainment, restaurants, and activities, or take it easy at the pool, spa, or your balcony watching the waves roll by.",
      highlights: ["Pool & waterslides", "Spa & wellness", "Live entertainment", "Specialty dining", "Casino & nightlife"]
    },
    {
      day: 3,
      date: "Wednesday, June 10, 2026",
      port: "RelaxAway, Half Moon Cay™",
      label: "Private Island, Bahamas",
      icon: "🏝️",
      description: "Named Best Private Island for 20+ straight years, Half Moon Cay is expanding in 2026 as RelaxAway. Pristine beaches, turquoise waters, new cabanas, bars, and lunch spots await.",
      highlights: ["White sand beach", "Kayaking & stingray lagoon", "Horseback riding", "Beachside massages", "Rental cabanas & villas", "New island-themed bars"]
    },
    {
      day: 4,
      date: "Thursday, June 11, 2026",
      port: "Celebration Key™",
      label: "Grand Bahama Island",
      icon: "🎉",
      description: "Carnival's brand-new exclusive destination on the south side of Grand Bahama Island. A mile-long white sand beach, the largest freshwater lagoons in the Caribbean, and five unique portals to explore.",
      highlights: [
        "Paradise Plaza™ — welcome portal, live music",
        "Starfish Lagoon™ — waterslides, splash pad (families)",
        "Calypso Lagoon™ — swim-up bar, DJ island (adults)",
        "Pearl Cove Beach Club™ — adults-only infinity pool & dining",
        "Lokono Cove™ — local art, culture & music"
      ]
    },
    {
      day: 5,
      date: "Friday, June 12, 2026",
      port: "Miami, Florida",
      label: "Disembarkation Day",
      icon: "🏠",
      description: "We're back in Miami! Disembarkation begins early morning. Enjoy a final breakfast on board, collect your luggage, and relive the memories until next time.",
      highlights: ["Final breakfast on board", "Luggage collection", "Disembarkation by group", "Safe travels home!"]
    }
  ]
};
