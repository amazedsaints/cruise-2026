// ============================================================
//  CRUISE DATA — Edit this file to update your site
// ============================================================

const cruiseData = {
  title: "Setting Sail 2026",
  subtitle: "A Trip to Remember",
  ship: "Carnival Conquest",
  shipImage: "https://www.carnival.com/content/dam/carnival/ships/carnival-conquest/carnival-conquest-exterior-1.jpg",
  departure: "June 8, 2026",
  departureISO: "2026-06-08T11:00:00",
  returnDate: "June 12, 2026",
  heroEmoji: "⚓",

  // ── Staterooms ───────────────────────────────────────────
  staterooms: [
    {
      number: "Stateroom 1",
      code: "#QB21G8",
      arrival: "11:00 – 11:30 AM",
      passengers: [
        "Ashok Kuma Natarajan",
        "Vasanth Nesamani",
        "Abhimanyar Ashok",
        "Adharrva Ashok"
      ]
    },
    {
      number: "Stateroom 2",
      code: "#QB21G9",
      arrival: "11:00 – 11:30 AM",
      passengers: [
        "Krishnapra Ashokkumar",
        "Madhubala Natarajan",
        "Harshad Vasanth",
        "Haasini Vasanth"
      ]
    },
    {
      number: "Stateroom 3",
      code: "#QB21H0",
      arrival: "11:00 – 11:30 AM",
      passengers: [
        "Rajesh Pra Natarajan",
        "Anitha Ramasamy",
        "Rajitha Rajesh Prabhu",
        "Rashmitha Rajesh Prabhu"
      ]
    }
  ],

  // ── Itinerary ────────────────────────────────────────────
  days: [
    {
      day: 1,
      date: "Monday, June 8, 2026",
      port: "Miami, Florida",
      label: "Embarkation Day",
      icon: "🚢",
      description: "Welcome aboard! Our arrival appointment is <strong>11:00–11:30 AM</strong> — all guests in each stateroom must arrive together. Get your boarding passes and luggage tags ready in advance.",
      highlights: ["⏰ Arrival: 11:00–11:30 AM", "All guests board together", "Muster safety drill", "Sail-away party on deck"],
      details: {
        about: "Miami is the cruise capital of the world and one of the most vibrant cities in the US. Known for its Art Deco architecture, stunning beaches, and incredible food scene, Miami is the perfect launchpad for your Caribbean adventure.",
        thingsToDo: [
          { name: "South Beach", desc: "World-famous beach with white sand, turquoise water, and the iconic Art Deco Historic District." },
          { name: "Wynwood Walls", desc: "An outdoor museum with world-class murals and street art — a must-see cultural experience." },
          { name: "Little Havana", desc: "Soak in Cuban culture, music, and authentic food on Calle Ocho." },
          { name: "Bayside Marketplace", desc: "Waterfront dining and shopping right near the cruise terminal." },
          { name: "American Airlines Arena", desc: "Catch a game or concert if timing works out." }
        ],
        tips: "The cruise terminal is at PortMiami. Parking is available on-site. Arrive early — the 11:00 AM window is your assigned slot and boarding goes smoothly when everyone arrives together.",
        weather: "🌡 June average: 89°F / 32°C · Sunny with occasional afternoon showers"
      }
    },
    {
      day: 2,
      date: "Tuesday, June 9, 2026",
      port: "Fun Day at Sea",
      label: "At Sea",
      icon: "🌊",
      description: "No port today — it's all about the ship! Explore entertainment, restaurants, and activities, or take it easy at the pool, spa, or your balcony watching the waves roll by.",
      highlights: ["Pool & waterslides", "Spa & wellness", "Live entertainment", "Specialty dining", "Casino & nightlife"],
      details: {
        about: "A sea day on Carnival Conquest is anything but boring. The ship is packed with things to do for every age — from thrilling waterslides to relaxing spa treatments, world-class dining to live comedy shows.",
        thingsToDo: [
          { name: "Twister Waterslide & WaterWorks", desc: "The ship's aqua park features the iconic Twister slide and splash zones for all ages." },
          { name: "Serenity Adults-Only Retreat", desc: "A peaceful sun deck reserved exclusively for adults — perfect for lounging and reading." },
          { name: "Cloud 9 Spa", desc: "Indulge in massages, facials, thermal suites, and salon services." },
          { name: "Playlist Productions", desc: "Carnival's live show experience featuring Broadway-style performances every evening." },
          { name: "Casino at Sea", desc: "Try your luck at slots, blackjack, poker, and roulette." },
          { name: "Guy's Burger Joint", desc: "Celebrity chef Guy Fieri's signature burgers — free and absolutely legendary." },
          { name: "BlueIguana Cantina", desc: "Fresh Mexican fare with burritos and tacos, included with your cruise." }
        ],
        tips: "Sea days fill up fast — book spa appointments and specialty dining as early as possible via the Carnival HUB app. The lido deck pool gets crowded by 10 AM.",
        weather: "🌡 Atlantic Ocean: 82°F / 28°C · Partly cloudy, gentle sea breeze"
      }
    },
    {
      day: 3,
      date: "Wednesday, June 10, 2026",
      port: "RelaxAway, Half Moon Cay™",
      label: "Private Island · Bahamas",
      icon: "🏝️",
      description: "Named Best Private Island for 20+ straight years, Half Moon Cay is expanding in 2026 as RelaxAway. Pristine beaches, turquoise waters, new cabanas, bars, and lunch spots await.",
      highlights: ["White sand beach", "Kayaking & stingray lagoon", "Horseback riding", "Beachside massages", "Rental cabanas & villas"],
      details: {
        about: "Half Moon Cay — now rebranding as RelaxAway — is a 2,400-acre private island in the Bahamas owned by Holland America Line and available to Carnival guests. With over 2 miles of pristine white sand beach and crystal-clear turquoise water, it has won 'Best Private Island' for more than 20 consecutive years.",
        thingsToDo: [
          { name: "Beach Lounging", desc: "Miles of powdery white sand beach — find your spot, order a drink, and unwind." },
          { name: "Stingray Encounter", desc: "Wade into the shallow lagoon and interact with Southern stingrays — a truly magical experience." },
          { name: "Kayaking & Paddleboarding", desc: "Explore the calm, protected lagoon waters at your own pace." },
          { name: "Horseback Riding on the Beach", desc: "One of the island's signature experiences — ride along the shoreline and into the ocean." },
          { name: "Parasailing", desc: "Soar above the island for breathtaking aerial views of the turquoise waters." },
          { name: "Beachside Massage", desc: "Indulge in a relaxing massage right on the sand." },
          { name: "Private Cabanas & Villas", desc: "Rent a premium beachfront cabana or villa for extra privacy and amenities." }
        ],
        tips: "The island provides a complimentary buffet lunch. Get off the ship early to claim the best beach spots — the most secluded areas are a short walk from the main beach. The lagoon water is incredibly clear and warm.",
        weather: "🌡 Bahamas in June: 88°F / 31°C · Sunny skies, calm turquoise water"
      }
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
        "Pearl Cove Beach Club™ — adults-only infinity pool",
        "Lokono Cove™ — local art, culture & music"
      ],
      details: {
        about: "Celebration Key is Carnival's newest and most ambitious private destination, opening in 2025 on the south side of Grand Bahama Island. Designed exclusively for Carnival guests, it features a mile-long white sand beach, the largest freshwater lagoons in the Caribbean, and five themed 'portals' catering to every type of traveler.",
        thingsToDo: [
          { name: "Paradise Plaza™", desc: "The first portal you'll see — welcoming you ashore with guest services, live local music, and photo opportunities." },
          { name: "Starfish Lagoon™ (Families)", desc: "Flash Flamingo & Mach III Marlin waterslides, Guppy Grotto splash pad, plus basketball, volleyball, and pickleball courts." },
          { name: "Calypso Lagoon™ (Adults)", desc: "Swim-up bars, swings bars, a DJ island, and a lively social vibe for adults who want fun without the kids." },
          { name: "Pearl Cove Beach Club™ (Adults Only)", desc: "Premium adults-only experience with an infinity pool, swim-up bar, elevated dining, and attentive service poolside and beachside." },
          { name: "Lokono Cove™", desc: "Shop goods from local Bahamian artisans and enjoy showcases of Bahamian art, music, history, and culture." },
          { name: "Freshwater Lagoons", desc: "The largest freshwater lagoons in the Caribbean — perfect for swimming, floating, and water sports." }
        ],
        tips: "This destination opened in 2025, so everything is brand new. Pearl Cove Beach Club may require advance reservation — check the Carnival HUB app before your cruise. Lokono Cove is a great spot to pick up authentic Bahamian souvenirs.",
        weather: "🌡 Grand Bahama in June: 87°F / 31°C · Warm and sunny, light tropical breeze"
      }
    },
    {
      day: 5,
      date: "Friday, June 12, 2026",
      port: "Miami, Florida",
      label: "Disembarkation Day",
      icon: "🏠",
      description: "We're back in Miami! Disembarkation begins early morning. Enjoy a final breakfast on board, collect your luggage, and relive the memories until next time.",
      highlights: ["Final breakfast on board", "Luggage collection", "Disembarkation by group", "Safe travels home!"],
      details: {
        about: "All good things must come to an end — but what a trip it's been! Disembarkation is organized by group number. Your luggage will be placed outside your stateroom door the night before, so pack everything except your essentials.",
        thingsToDo: [
          { name: "Final Breakfast", desc: "Enjoy one last meal on board — the Lido buffet opens early on disembarkation day." },
          { name: "Pack the Night Before", desc: "Place luggage outside your cabin door by midnight on Day 4. Keep a small bag for overnight essentials." },
          { name: "Check Your Folio", desc: "Review your onboard charges via the Carnival HUB app or stateroom TV before disembarkation." },
          { name: "Wait for Your Group Number", desc: "Disembarkation is called by group — listen for announcements and don't rush the gangway." },
          { name: "Collect Luggage in Terminal", desc: "Luggage is organized by color-coded tags in the terminal. Have your ID and travel docs ready." }
        ],
        tips: "If you have a late flight, consider booking a Miami day tour or heading to South Beach to kill time. Luggage storage is available near the terminal. The earliest groups typically disembark around 7:30–8:00 AM.",
        weather: "🌡 Miami in June: 89°F / 32°C · Warm and sunny"
      }
    }
  ]
};
