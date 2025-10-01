export interface Activity {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  included: string[];
  toBring: string[];
  meetingPoint?: string;
  importantInfo: string[];
  images: string[];
  icon: string;
}

export const activities: Activity[] = [
  {
    id: 'diving',
    name: 'Diving',
    shortDescription: 'Explore the magnificent coral reefs and marine life of the Red Sea',
    fullDescription: `Dive into the crystal-clear waters of the Red Sea and discover one of the world's most spectacular underwater ecosystems. Our professional diving guides will take you to the best coral reef sites where you'll encounter vibrant coral formations, tropical fish, and maybe even dolphins or sea turtles.

Whether you're a beginner or an experienced diver, we have programs suitable for all levels. Our PADI-certified instructors ensure your safety while providing an unforgettable underwater adventure.

The Red Sea is renowned for its exceptional visibility, warm waters, and diverse marine life, making it one of the top diving destinations in the world. Experience the magic of floating weightlessly among colorful coral gardens and schools of exotic fish.

Join us for this incredible journey beneath the waves and create memories that will last a lifetime.`,
    duration: '4-5 hours',
    included: [
      'Full diving equipment (mask, fins, wetsuit, tank)',
      'Professional PADI-certified guide',
      'Hotel pickup & drop-off',
      'Refreshments and snacks',
      'Safety briefing and instruction',
      'Underwater photography tips'
    ],
    toBring: [
      'Swimsuit',
      'Towel',
      'Sunscreen (reef-safe)',
      'Underwater camera (optional)',
      'Certification card (if certified)',
      'Comfortable clothing for boat ride'
    ],
    meetingPoint: 'Marina Boulevard, Hurghada Marina',
    importantInfo: [
      'Minimum age: 10 years (with guardian)',
      'Basic swimming skills required',
      'Medical clearance may be required',
      'Weather conditions may affect schedule',
      'Maximum depth: 12m for beginners, 30m for certified divers'
    ],
    images: [
      '/images/diving/12.webp',
      '/images/diving/beautiful-coral-scuba-diver.webp',
      '/images/diving/divers-fukui-point-bunaken.jpg',
      '/images/diving/intro-1738601436.jpg',
      '/images/diving/large.jpg',
      '/images/diving/scuba-divers-colorful-reef-swim-thru.jpg'
    ],
    icon: 'Waves'
  },
  {
    id: 'dolphin-trips',
    name: 'Dolphin Trips',
    shortDescription: 'Swim and interact with wild dolphins in their natural habitat',
    fullDescription: `Experience the magic of swimming with wild dolphins in the pristine waters of the Red Sea. Our dolphin trips take you to Dolphin House (Sha'ab Samadai), a protected reef area where spinner dolphins come to rest and play.

Watch these magnificent creatures in their natural environment as they glide gracefully through the water. With luck and respect for their space, you may have the incredible opportunity to swim alongside them.

Our experienced guides know the best spots and times to encounter dolphins while ensuring we follow all environmental protection guidelines. We maintain a respectful distance and never disturb the dolphins' natural behavior.

This is more than just a boat trip – it's a life-changing encounter with one of the ocean's most intelligent and playful creatures. The memories of swimming with dolphins will stay with you forever.`,
    duration: '3-4 hours',
    included: [
      'Boat transportation to Dolphin House',
      'Life jackets and safety equipment',
      'Snorkeling equipment (mask, fins, snorkel)',
      'Professional guide and dolphin spotter',
      'Lunch and refreshments',
      'Hotel pickup and drop-off'
    ],
    toBring: [
      'Swimsuit',
      'Towel',
      'Sunscreen (reef-safe)',
      'Waterproof camera',
      'Hat and sunglasses',
      'Light jacket for boat ride'
    ],
    meetingPoint: 'Hurghada Marina, Gate 3',
    importantInfo: [
      'Dolphin sightings are not guaranteed (wild animals)',
      'Swimming with dolphins depends on their behavior',
      'Minimum age: 6 years',
      'Pregnant women should consult doctor',
      'Respect marine life - no touching or chasing',
      'Trip may be cancelled due to weather conditions'
    ],
    images: [
      dolphin1,
      dolphin2,
      dolphin3,
      dolphin4,
      dolphin5,
      dolphin6
    ],
    icon: 'Fish'
  },
  {
    id: 'island-tours',
    name: 'Island Tours',
    shortDescription: 'Visit pristine islands with crystal clear waters and white sand beaches',
    fullDescription: `Escape to paradise with our full-day island tours to the most beautiful islands in the Red Sea. Visit Orange Bay and Giftun Island, where pristine white sand beaches meet crystal-clear turquoise waters.

Spend your day relaxing on untouched beaches, swimming in warm, clear waters, and snorkeling among vibrant coral reefs. These protected islands offer some of the most spectacular scenery in the Red Sea region.

Orange Bay is famous for its stunning sandbar that appears at low tide, creating a natural swimming pool in the middle of the sea. Giftun Island offers excellent snorkeling opportunities with its house reef teeming with marine life.

Enjoy a delicious lunch on the beach, take Instagram-worthy photos, and simply unwind in this tropical paradise. This is the perfect day trip for those seeking natural beauty and relaxation.`,
    duration: '6-8 hours (full day)',
    included: [
      'Boat transportation to islands',
      'Snorkeling equipment',
      'Beach lunch and refreshments',
      'Hotel pickup and drop-off',
      'Professional guide',
      'Beach chairs and umbrellas',
      'Life jackets'
    ],
    toBring: [
      'Swimsuit',
      'Towel',
      'Sunscreen (high SPF)',
      'Camera',
      'Hat and sunglasses',
      'Light beach cover-up',
      'Flip-flops or water shoes'
    ],
    meetingPoint: 'Hurghada Marina, Main Dock',
    importantInfo: [
      'Full day trip - bring sun protection',
      'Island access fees included',
      'Suitable for all ages',
      'Vegetarian meal options available',
      'Weather dependent - may be rescheduled',
      'Limited shade on islands - bring hat'
    ],
    images: [
      island1,
      island2,
      island3,
      island4,
      island5,
      island6
    ],
    icon: 'MapPin'
  },
  {
    id: 'boat-trips',
    name: 'Boat Trips',
    shortDescription: 'Relaxing yacht and boat tours along the beautiful Red Sea coast',
    fullDescription: `Cruise along the stunning Red Sea coastline aboard our comfortable yachts and boats. Enjoy the gentle sea breeze, spectacular views, and the luxury of being on the water without any rush or schedule pressure.

Our boat trips offer the perfect combination of relaxation and adventure. Choose from sunset cruises, half-day excursions, or full-day adventures. Watch the coastline drift by as you sip refreshing drinks and soak up the sun.

Many of our boat trips include stops at secluded snorkeling spots where you can explore underwater life, or simply anchor in a quiet bay for swimming and sunbathing. The experienced crew takes care of everything while you relax and enjoy.

Whether you're celebrating a special occasion, looking for a romantic getaway, or just want to experience the Red Sea from a different perspective, our boat trips provide the perfect setting for unforgettable memories.`,
    duration: '3-6 hours',
    included: [
      'Yacht or boat rental with crew',
      'Professional captain and crew',
      'Refreshments and snacks',
      'Snorkeling stops (equipment included)',
      'Sound system for music',
      'Comfortable seating areas',
      'Safety equipment'
    ],
    toBring: [
      'Comfortable clothes',
      'Sunscreen',
      'Camera',
      'Sunglasses',
      'Light jacket for evening cruises',
      'Personal music playlist (optional)'
    ],
    meetingPoint: 'Hurghada Marina, Yacht Club',
    importantInfo: [
      'Suitable for all ages',
      'Private charters available',
      'Sunset cruises highly recommended',
      'Can accommodate dietary restrictions',
      'Weather conditions may affect itinerary',
      'Group discounts available'
    ],
    images: [
      boat1,
      boat2,
      boat3,
      boat4,
      boat5,
      boat6
    ],
    icon: 'Anchor'
  },
  {
    id: 'speed-boats',
    name: 'Speed Boats',
    shortDescription: 'Thrilling speed boat rides across the Red Sea waters',
    fullDescription: `Feel the adrenaline rush as you speed across the crystal-clear waters of the Red Sea! Our high-performance speed boats offer an exhilarating experience for thrill-seekers and adventure enthusiasts.

Race across the waves at high speeds while enjoying panoramic views of the Hurghada coastline and the Eastern Desert mountains. The powerful engines and expert drivers ensure both excitement and safety throughout your adventure.

These speed boat rides are perfect for those who want to add some excitement to their Red Sea experience. Feel the wind in your hair and the spray of the sea as you navigate through the waves at thrilling speeds.

We offer various routes including coastal tours, island hopping, and custom adventures based on your preferences. Each ride is tailored to provide maximum excitement while maintaining the highest safety standards.`,
    duration: '1-2 hours',
    included: [
      'High-performance speed boat',
      'Professional and experienced driver',
      'Life jackets and safety equipment',
      'Safety briefing before departure',
      'Waterproof storage for belongings',
      'Insurance coverage'
    ],
    toBring: [
      'Secure clothing (avoid loose items)',
      'Waterproof phone case',
      'Sunglasses with strap',
      'Secure footwear',
      'Towel',
      'Sunscreen'
    ],
    meetingPoint: 'Hurghada Marina, Speed Boat Dock',
    importantInfo: [
      'Minimum age: 12 years',
      'Not suitable for pregnant women',
      'Heart conditions - consult doctor first',
      'Weight limit: 120kg per person',
      'Weather dependent activity',
      'Hold on tight - it\'s a wild ride!'
    ],
    images: [
      speed1,
      speed2,
      speed3,
      speed4,
      speed5,
      speed6
    ],
    icon: 'Zap'
  },
  {
    id: 'water-sports',
    name: 'Water Sports',
    shortDescription: 'Exciting water activities including banana boat, parasailing, jet ski, and more',
    fullDescription: `Dive into an action-packed day of water sports and activities! We offer a wide range of exciting water-based adventures suitable for all thrill levels, from gentle family fun to extreme adrenaline rushes.

Try parasailing and soar high above the Red Sea for breathtaking aerial views of the coastline. Experience the fun and laughter of banana boat rides with friends and family. Feel the power and freedom of jet skiing across the waves.

For the ultimate thrill-seekers, we offer flyboarding - a futuristic water sport that lets you fly above the water using water propulsion. Or try wakeboarding and water skiing for classic water sports excitement.

All activities are supervised by certified instructors who prioritize your safety while ensuring maximum fun. Whether you're a beginner or an experienced water sports enthusiast, we have something exciting for everyone.`,
    duration: '1-3 hours (varies by activity)',
    included: [
      'All necessary equipment for chosen activities',
      'Life jackets and safety gear',
      'Professional instructors and guides',
      'Safety briefing for each activity',
      'Equipment maintenance and setup',
      'Action photography (additional cost)'
    ],
    toBring: [
      'Swimsuit',
      'Towel',
      'Waterproof camera',
      'Secure footwear for boat',
      'Sunscreen',
      'Change of clothes'
    ],
    meetingPoint: 'Hurghada Marina, Water Sports Center',
    importantInfo: [
      'Age restrictions vary by activity',
      'Swimming ability required for most activities',
      'Weight restrictions apply to some sports',
      'Weather conditions affect availability',
      'Group packages available',
      'Combination packages offer better value'
    ],
    images: [
      water1,
      water2,
      water3,
      water4,
      water5,
      water6
    ],
    icon: 'Activity'
  }
];
