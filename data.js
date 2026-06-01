// ============================================================
//  CRUISE DATA — Edit this file to update your site
// ============================================================

const cruiseData = {
  title: "Setting Sail 2026",
  subtitle: "A Trip to Remember",
  ship: "Carnival Conquest",
  shipImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Carnival_Conquest_(ship,_2002)_docked_in_Celebration_Key_(February_2026).jpg",
  departure: "June 8, 2026",
  departureISO: "2026-06-08T11:00:00",
  returnDate: "June 12, 2026",

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
          { name: "Bayside Marketplace", desc: "Waterfront dining and shopping right near the cruise terminal." }
        ],
        food: [
          { name: "Guy's Burger Joint", tag: "Free · Lido Deck", emoji: "🍔", desc: "Guy Fieri's hand-crafted burgers — consistently the #1 rated free food on the ship. Go as soon as you board to beat the line." },
          { name: "BlueIguana Cantina", tag: "Free · Lido Deck", emoji: "🌮", desc: "Fresh burritos and tacos. Passengers rave about the chicken burrito — great for a quick lunch on embarkation day." },
          { name: "Monet Main Dining Room", tag: "Free · Dinner", emoji: "🍽", desc: "First night dinner in the main dining room is a treat. The lobster gets outstanding reviews — don't miss it if it's on the menu." },
          { name: "Pizzeria del Capitano", tag: "Free · 24 hrs", emoji: "🍕", desc: "Fresh pizza around the clock. Margherita and Quattro Formaggi are passenger favourites — great for late-night snacking after boarding." }
        ],
        tips: "The cruise terminal is at PortMiami. Arrive early — the 11:00 AM window is your assigned slot and boarding goes smoothly when everyone arrives together.",
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
        food: [
          { name: "Sea Day Brunch", tag: "Free · Main Dining Room", emoji: "🥞", desc: "The Sea Day Brunch is a Carnival tradition — passengers love the eggs Benedict and French toast. Opens late morning so you can sleep in." },
          { name: "Guy's Burger Joint", tag: "Free · Lido Deck", emoji: "🍔", desc: "If you missed it on Day 1, today's the day. The Pig Patty and Ringer burger are passenger favourites. Lines form early — go at 11 AM." },
          { name: "BlueIguana Cantina", tag: "Free · Lido Deck", emoji: "🌯", desc: "Great build-your-own burritos. Many passengers say this is their go-to lunch on sea days." },
          { name: "The Point Steakhouse", tag: "Paid · Premium", emoji: "🥩", desc: "Worth every penny for a special dinner. Passengers consistently rate it the best meal on the ship — reserve in advance via the HUB app." },
          { name: "Pizzeria del Capitano", tag: "Free · 24 hrs", emoji: "🍕", desc: "Perfect for a midnight snack after the evening show. Always fresh, always hot." }
        ],
        tips: "Sea days fill up fast — book specialty dining early via the Carnival HUB app. The lido deck pool gets crowded by 10 AM.",
        weather: "🌡 Atlantic Ocean: 82°F / 28°C · Partly cloudy, gentle sea breeze"
      }
    },
    {
      day: 3,
      date: "Wednesday, June 10, 2026",
      port: "RelaxAway, Half Moon Cay™",
      label: "Private Island · Bahamas",
      icon: "🏝️",
      description: "Named Best Private Island for 20+ straight years, Half Moon Cay is expanding in 2026 as RelaxAway. Pristine beaches, turquoise waters, new complimentary bars and lunch spots await.",
      highlights: ["White sand beach", "Swim in turquoise waters", "Complimentary island lunch", "Nature trails", "New island bars"],
      details: {
        about: "Half Moon Cay — rebranding as RelaxAway in 2026 — is a 2,400-acre private island in the Bahamas. With over 2 miles of pristine white sand beach and crystal-clear turquoise water, it has won 'Best Private Island' for more than 20 consecutive years. In 2026 the island is expanding with new complimentary dining spots, scenic paths, and island-themed bars.",
        thingsToDo: [
          { name: "Beach Lounging", desc: "Miles of powdery white sand beach — find your spot, enjoy the sun, and unwind completely." },
          { name: "Swimming & Snorkelling", desc: "The warm, clear turquoise water is perfect for swimming and exploring the reef just offshore." },
          { name: "Nature Trail Walk", desc: "Stroll the scenic nature path through the island's lush landscape and coastal views." },
          { name: "Island-Themed Bars", desc: "New in 2026 — sip tropical cocktails at the brand-new island bars right on the beachfront." },
          { name: "Complimentary Lunch Buffet", desc: "Enjoy a free island buffet lunch with fresh food served right on the island." },
          { name: "Clamshell Hideaway", desc: "Cozy up in a shady beachside clamshell — perfect for a quiet afternoon with your group." }
        ],
        food: [
          { name: "Island BBQ Buffet", tag: "Free · 11:30 AM – 1:30 PM", emoji: "🍖", desc: "The complimentary island lunch is a highlight — jerk chicken, BBQ ribs, hot dogs, hamburgers, potato salad, and chips. Passengers say the jerk chicken is excellent. Don't miss it!" },
          { name: "Coconut & Tropical Drinks", tag: "Paid · Beach Bars", emoji: "🥥", desc: "Fresh coconut drinks and frozen cocktails from the island bars are a must-try. New in 2026 — try the new island-themed signature cocktails at the relaunched RelaxAway bars." },
          { name: "Back on Ship — Guy's or Pizza", tag: "Free · On Board", emoji: "🍔", desc: "After a long beach day, passengers recommend grabbing a Guy's burger or pizza slice the moment you're back on board — quick, satisfying, and free." }
        ],
        tips: "Get off the ship early to claim the best beach spots. The most secluded areas are a short walk from the main beach. The lagoon water is incredibly clear and warm — bring snorkel gear if you have it.",
        weather: "🌡 Bahamas in June: 88°F / 31°C · Sunny skies, calm turquoise water"
      }
    },
    {
      day: 4,
      date: "Thursday, June 11, 2026",
      port: "Celebration Key™",
      label: "Grand Bahama Island",
      icon: "🎉",
      description: "Carnival's brand-new exclusive destination on Grand Bahama Island. A mile-long white sand beach, the largest freshwater lagoons in the Caribbean, and unique portals for everyone to enjoy.",
      highlights: [
        "Paradise Plaza™ — live music & welcome area",
        "Starfish Lagoon™ — waterslides & sports (families)",
        "Calypso Lagoon™ — swim-up bar & DJ (adults)",
        "Lokono Cove™ — Bahamian art & culture",
        "Mile-long white sand beach"
      ],
      details: {
        about: "Celebration Key is Carnival's newest exclusive destination, opening in 2025 on the south side of Grand Bahama Island. Designed for Carnival guests, it features a mile-long white sand beach, the largest freshwater lagoons in the Caribbean, and themed portals for families, adults, and culture lovers alike.",
        thingsToDo: [
          { name: "Paradise Plaza™", desc: "The welcoming gateway to the island — live local music, guest information, and great photo opportunities." },
          { name: "Starfish Lagoon™ (Families)", desc: "Flash Flamingo & Mach III Marlin waterslides, Guppy Grotto splash pad, plus basketball, volleyball, and pickleball courts — all included." },
          { name: "Calypso Lagoon™ (Adults)", desc: "Swim-up bars, swings bars, a DJ island, and a lively social vibe for adults. The lagoon and atmosphere are free to enjoy." },
          { name: "Lokono Cove™", desc: "Browse goods from local Bahamian artisans and enjoy showcases of authentic Bahamian art, music, history, and culture." },
          { name: "Freshwater Lagoons", desc: "The largest freshwater lagoons in the Caribbean — swim, float, and enjoy the unique crystal-clear water." },
          { name: "White Sand Beach", desc: "A full mile of gorgeous beach to explore, relax on, and enjoy at no cost." }
        ],
        food: [
          { name: "Grand Bahama Taco", tag: "Free meal voucher · Celebration Key", emoji: "🌮", desc: "Passengers highly recommend the Jerk Chicken Taco and Fried Fish Taco. Each guest gets one complimentary 'Island Eats' meal — use it here!" },
          { name: "Mingo's Tropical Bar & Kitchen", tag: "Free meal voucher · Celebration Key", emoji: "🦞", desc: "A fan favourite — the conch fritters are a genuine Bahamian classic and passengers say they're delicious. Also try the fried fish and BBQ burger." },
          { name: "Captain's Galley Food Hall", tag: "Free meal voucher · Celebration Key", emoji: "🥙", desc: "Build-your-own Mexican and Mediterranean bowls, pizza, and American classics. Great for picky eaters — the kids love the chicken tenders." },
          { name: "Island Bars — Calypso & Pearl Cove", tag: "Paid · Drinks", emoji: "🍹", desc: "Swim-up bar cocktails and tropical drinks at Calypso Lagoon are a highlight. Try a Bahama Mama or a local rum punch while floating in the lagoon." }
        ],
        tips: "Everything is brand new at this destination — arrive early to explore all five portals. Lokono Cove is a great spot to pick up authentic Bahamian souvenirs to remember the trip.",
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
        about: "All good things must come to an end — but what a trip! Disembarkation is organized by group number. Your luggage will be placed outside your stateroom door the night before, so pack everything except overnight essentials.",
        thingsToDo: [
          { name: "Final Breakfast on Board", desc: "Enjoy one last meal — the Lido buffet opens early on disembarkation day." },
          { name: "Pack the Night Before", desc: "Place luggage outside your cabin door by midnight on Day 4. Keep a small bag for overnight essentials." },
          { name: "Check Your Folio", desc: "Review your onboard charges via the Carnival HUB app or stateroom TV before disembarkation." },
          { name: "Wait for Your Group Number", desc: "Disembarkation is called by group — listen for announcements. Don't rush the gangway." },
          { name: "Collect Luggage in Terminal", desc: "Luggage is organized by color-coded tags in the terminal. Have your ID and travel docs ready." }
        ],
        food: [
          { name: "Final Lido Buffet Breakfast", tag: "Free · Early morning", emoji: "🍳", desc: "The Lido buffet opens early on disembarkation day. Passengers recommend grabbing a full cooked breakfast — scrambled eggs, bacon, pastries — before heading off the ship." },
          { name: "Versailles Restaurant, Miami", tag: "Miami · Cuban classic", emoji: "☕", desc: "If you have time before your flight, Versailles in Little Havana is a Miami institution. Cuban coffee (cafecito), pressed sandwiches, and rice dishes. Passengers who've been say it's unmissable." }
        ],
        tips: "If you have a late flight, consider heading to South Beach for a few hours — it's only 20 minutes from the port. The earliest groups typically disembark around 7:30–8:00 AM.",
        weather: "🌡 Miami in June: 89°F / 32°C · Warm and sunny"
      }
    }
  ]
};
