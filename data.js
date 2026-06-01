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
      day: 0,
      date: "Sunday, June 7, 2026",
      port: "Cumming, GA → Fort Lauderdale, FL",
      label: "Road Trip Day",
      icon: "🚗",
      description: "Hit the road at <strong>7:00 AM</strong> from Cumming, GA heading south. It's a long drive — about 700 miles and 9–10 hours. Destination: <strong>Hilton Fort Lauderdale</strong>, 720 East Cypress Creek Road. Check-in around 8:00 PM and rest up for embarkation day tomorrow.",
      highlights: ["🕖 Depart Cumming 7:00 AM", "~700 miles · ~10 hrs", "🏨 Hilton Fort Lauderdale", "Check-in ~8:00 PM"],
      details: {
        about: "The adventure starts here — a full day road trip from Cumming, GA down to Fort Lauderdale, FL. The route takes you through Atlanta, south on I-75, and through the heart of Florida. Plan fuel and food stops every 2–3 hours to keep everyone comfortable.",
        thingsToDo: [
          { name: "Depart 7:00 AM sharp", desc: "Early start is key — hitting Atlanta before morning rush hour saves significant time. Aim to be on I-75 South by 7:30 AM." },
          { name: "Valdosta, GA — Fuel & Lunch stop", desc: "Around the 3-hour mark. Valdosta has plenty of fast food and sit-down options off I-75. Good midway point through Georgia." },
          { name: "Gainesville, FL — Afternoon break", desc: "About 5–6 hours in. Stretch your legs, fuel up, and grab snacks for the final push to Fort Lauderdale." },
          { name: "Florida Turnpike south", desc: "From I-75 south of Gainesville, take the Florida Turnpike (toll road) for the fastest route to Fort Lauderdale. Keep loose change or use SunPass." },
          { name: "Hilton Fort Lauderdale check-in", desc: "720 East Cypress Creek Road, Fort Lauderdale, FL 33334. Check-in from 3:00 PM — call ahead if arriving late. Pool and restaurant on-site for a relaxing evening." }
        ],
        food: [
          { name: "McDonald's / Taco Bell — Valdosta, GA", tag: "🍔 Lunch · ~3 hrs in", emoji: "🌮", desc: "Plenty of fast food off I-75 in Valdosta — quick pit stop, fuel up the car, and keep moving. Taco Bell and McDonald's both off Exit 18 or 22." },
          { name: "Bawarchi Biryanis — Orlando, FL", tag: "🍛 Dinner option 1 · ~7 hrs in", emoji: "🍛", desc: "Highly rated South Indian restaurant in Orlando, famous for Hyderabadi chicken and goat biryani. Perfect dinner stop if you're hungry around 4–5 PM before the final stretch." },
          { name: "Tabla Indian Restaurant — Orlando, FL", tag: "🍛 Dinner option 2 · ~7 hrs in", emoji: "🫕", desc: "Well-known Orlando Indian restaurant on Grand National Dr. Chicken tikka masala, butter chicken, and lamb biryani are crowd favourites. Open evenings daily." },
          { name: "Dasara Indian Cuisine — Fort Lauderdale", tag: "🍛 Dinner at hotel · Cypress Creek Rd", emoji: "⭐", desc: "Dasara Indian Cuisine is on East Cypress Creek Road — the same street as the Hilton! Authentic Indian food highly rated on TripAdvisor. Perfect arrival-night dinner without going out of your way." }
        ],
        tips: "Use Google Maps or Waze and download offline maps for the route before you leave. Tolls on the Florida Turnpike — keep SunPass or cash handy. The drive is roughly: Cumming → Atlanta → Macon → Valdosta → Lake City → Gainesville → Orlando → Fort Lauderdale.",
        weather: "🌡 June 7 in Fort Lauderdale: 88°F / 31°C · Warm and humid, possible afternoon thunderstorms en route through Florida"
      }
    },
    {
      day: 1,
      date: "Monday, June 8, 2026",
      port: "Miami, Florida",
      label: "Embarkation Day",
      icon: "🚢",
      description: "Check out of the Hilton Fort Lauderdale by <strong>10:00 AM</strong> and drive 35 miles south to PortMiami. Our arrival appointment is <strong>11:00–11:30 AM</strong> — all guests in each stateroom must arrive together. Get boarding passes and luggage tags ready the night before.",
      highlights: ["🏨 Hotel checkout 10:00 AM", "~35 min drive to PortMiami", "⏰ Arrival: 11:00–11:30 AM", "Muster drill · Sail-away party"],
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
          { name: "Pizzeria del Capitano", tag: "Free · 24 hrs", emoji: "🍕", desc: "Fresh pizza around the clock. Margherita and Quattro Formaggi are passenger favourites — great for late-night snacking after boarding." },
          { name: "Sea Day Brunch", tag: "Free · Main Dining Room", emoji: "🥞", desc: "Served the first full day at sea — worth checking if it starts on embarkation evening. Eggs Benedict is the crowd favourite." }
        ],
        tips: "Check out of the Hilton by 10 AM — it's about 35 miles (30–40 min) to PortMiami via I-95 South. Drop luggage with the porters at the terminal, then park in the PortMiami garage. Have boarding passes and passport ready before you leave the hotel.",
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
          { name: "Captain's Galley Food Hall", tag: "Free meal voucher · Celebration Key", emoji: "🥙", desc: "Build-your-own Mexican and Mediterranean bowls, pizza, and American classics. Great for picky eaters — the kids love the chicken tenders." }
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
          { name: "Final Lido Buffet Breakfast", tag: "Free · Early morning", emoji: "🍳", desc: "The Lido buffet opens early on disembarkation day. Passengers recommend grabbing a full cooked breakfast — scrambled eggs, bacon, pastries — before heading off the ship." }
        ],
        tips: "The earliest groups typically disembark around 7:30–8:00 AM. Head straight to your car once you have your luggage — the goal is to be on I-95 North by 9:00 AM for the drive home.",
        weather: "🌡 Miami in June: 89°F / 32°C · Warm and sunny"
      }
    },
    {
      day: 6,
      date: "Friday, June 12, 2026",
      port: "Miami, FL → Cumming, GA",
      label: "Drive Home",
      icon: "🏡",
      description: "After disembarking, hit the road by <strong>9:00 AM</strong> from PortMiami headed north. It's the same ~700-mile journey home — you'll be back in Cumming by evening. Relive the highlights on the way!",
      highlights: ["🕘 Depart Miami 9:00 AM", "~700 miles · ~10 hrs", "🛣 I-95 N to I-75 N", "🏡 Arrive Cumming ~7 PM"],
      details: {
        about: "The final leg — a 700-mile drive back to Cumming, GA. After an early disembarkation, you can be on the road by 9 AM. The route is essentially the reverse: I-95 North through Florida, then I-75 North through Georgia all the way home. Aim to be in Cumming by 7–8 PM.",
        thingsToDo: [
          { name: "Depart PortMiami by 9:00 AM", desc: "Load up the car right after collecting luggage at the terminal. Beat the morning rush out of Miami on I-95 North." },
          { name: "Fort Lauderdale — optional quick stop", desc: "Just 30 min north of Miami. Good place for a coffee or gas fill-up before the long drive." },
          { name: "Orlando — lunch break (~4 hrs in)", desc: "Perfect halfway point for lunch, fuel, and a stretch. Plenty of options off I-75 / Florida Turnpike." },
          { name: "Gainesville / Lake City, FL — rest stop", desc: "Around 5–6 hours in. Good place to refuel and take a break before crossing into Georgia." },
          { name: "Valdosta, GA — almost home", desc: "Around 7–8 hours in. Final fuel stop before the last stretch up to Cumming." },
          { name: "Arrive Cumming, GA ~7:00 PM", desc: "Home sweet home! Expect to be back around 7 PM if you leave Miami at 9 AM with normal stops." }
        ],
        food: [
          { name: "McDonald's / Taco Bell — Fort Lauderdale or Boca Raton", tag: "🍔 Breakfast / early stop", emoji: "🌮", desc: "Quick drive-through right after leaving Miami — grab coffee and something to eat before the highway opens up." },
          { name: "Bawarchi Biryanis or Tabla — Orlando", tag: "🍛 Lunch · ~4 hrs in", emoji: "🍛", desc: "Stop in Orlando for a proper Indian lunch on the way back. Same restaurants as the drive down — a familiar and satisfying mid-trip meal." },
          { name: "McDonald's / Taco Bell — Valdosta, GA", tag: "🍔 Snack stop · ~8 hrs in", emoji: "🍟", desc: "Quick refuel near the Georgia–Florida border. Just a bite to power through the last stretch to Cumming." }
        ],
        tips: "The drive from Miami to Cumming is about 10 hours with normal stops. Use Waze for real-time traffic — I-95 through Miami and I-75 through Atlanta can have slowdowns. Leave PortMiami by 9 AM to avoid Atlanta rush hour (aim to hit Atlanta before 5 PM or after 7 PM).",
        weather: "🌡 Miami to Georgia in June: 89°F → 85°F · Partly cloudy, possible afternoon storms in Florida"
      }
    }
  ]
};
