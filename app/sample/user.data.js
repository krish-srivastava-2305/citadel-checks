const userData = 
[
  {
    id: 1,
    name: "Priya Sharma",
    academic: {
      university: "Delhi University",
      degreeProgram: "B.Tech Computer Science",
      graduationYear: 2024
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["Connaught Place", "Karol Bagh", "Khan Market"]
    },
    personal: {
      age: 22,
      gender: "Female",
      interests: ["Coding", "Photography", "Classical Dance", "Travel", "Cooking"]
    },
    behavioural: {
      previousLikes: ["Tech meetups", "Cultural events", "Food festivals"],
      previousDislikes: ["Crowded places", "Late-night events"],
      responsePatterns: "Responds within 2-3 hours, prefers detailed conversations"
    },
    profileContent: {
      bio: "CS grad passionate about AI/ML. Love capturing moments through my lens and expressing myself through Bharatanatyam. Always up for trying new cuisines!",
      uploadedMedia: ["Portfolio photos", "Dance performance videos"],
      personalityPrompts: "Introverted but curious, values authenticity"
    }
  },
  {
    id: 2,
    name: "Arjun Patel",
    academic: {
      university: "IIT Bombay",
      degreeProgram: "M.Tech Mechanical Engineering",
      graduationYear: 2023
    },
    geographic: {
      city: "Mumbai",
      preferredAreas: ["Bandra", "Andheri", "Powai"]
    },
    personal: {
      age: 25,
      gender: "Male",
      interests: ["Cricket", "Entrepreneurship", "Guitar", "Fitness", "Finance"]
    },
    behavioural: {
      previousLikes: ["Sports events", "Startup networking", "Music concerts"],
      previousDislikes: ["Passive activities", "Pessimistic people"],
      responsePatterns: "Quick responder, uses voice messages often"
    },
    profileContent: {
      bio: "IIT grad building the next big thing. Weekend warrior on cricket field. Strumming my way through life 🎸",
      uploadedMedia: ["Gym selfies", "Cricket match photos", "Guitar covers"],
      personalityPrompts: "Ambitious extrovert, goal-oriented"
    }
  },
  {
    id: 3,
    name: "Meera Nair",
    academic: {
      university: "Christ University, Bangalore",
      degreeProgram: "MBA Marketing",
      graduationYear: 2022
    },
    geographic: {
      city: "Bangalore",
      preferredAreas: ["Koramangala", "Indiranagar", "Whitefield"]
    },
    personal: {
      age: 26,
      gender: "Female",
      interests: ["Digital Marketing", "Yoga", "Reading", "Art", "Sustainability"]
    },
    behavioural: {
      previousLikes: ["Book clubs", "Eco-friendly events", "Wellness workshops"],
      previousDislikes: ["Superficial conversations", "Wasteful practices"],
      responsePatterns: "Thoughtful responses, shares articles and insights"
    },
    profileContent: {
      bio: "Marketing professional by day, sustainability advocate always. Seeking meaningful connections over coffee and consciousness.",
      uploadedMedia: ["Book collection photos", "Yoga poses", "Eco-friendly lifestyle shots"],
      personalityPrompts: "Mindful and values-driven, seeks depth"
    }
  },
  {
    id: 4,
    name: "Rohit Singh",
    academic: {
      university: "JNU, New Delhi",
      degreeProgram: "MA Political Science",
      graduationYear: 2021
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["Central Delhi", "South Delhi", "Gurgaon"]
    },
    personal: {
      age: 27,
      gender: "Male",
      interests: ["Politics", "Debate", "History", "Writing", "Social Work"]
    },
    behavioural: {
      previousLikes: ["Political discussions", "NGO events", "Literary festivals"],
      previousDislikes: ["Apathy", "Materialistic conversations"],
      responsePatterns: "Engages in long debates, shares news articles frequently"
    },
    profileContent: {
      bio: "Policy researcher fighting for social justice. Believer in the power of informed discourse and grassroots change.",
      uploadedMedia: ["Rally photos", "Book quotes", "Opinion articles"],
      personalityPrompts: "Passionate activist, intellectually driven"
    }
  },
  {
    id: 5,
    name: "Kavya Reddy",
    academic: {
      university: "NIFT Hyderabad",
      degreeProgram: "B.Des Fashion Design",
      graduationYear: 2023
    },
    geographic: {
      city: "Hyderabad",
      preferredAreas: ["Banjara Hills", "Jubilee Hills", "Kondapur"]
    },
    personal: {
      age: 23,
      gender: "Female",
      interests: ["Fashion Design", "Sketching", "Movies", "Interior Design", "Shopping"]
    },
    behavioural: {
      previousLikes: ["Fashion shows", "Art exhibitions", "Designer meetups"],
      previousDislikes: ["Boring routines", "Criticism of creativity"],
      responsePatterns: "Visual communicator, shares design inspiration"
    },
    profileContent: {
      bio: "Fashion designer crafting stories through fabric. Obsessed with colors, textures, and everything aesthetic ✨",
      uploadedMedia: ["Fashion sketches", "Outfit photos", "Design process videos"],
      personalityPrompts: "Creative visionary, trend-conscious"
    }
  },
  {
    id: 6,
    name: "Vikram Joshi",
    academic: {
      university: "IIM Ahmedabad",
      degreeProgram: "MBA Finance",
      graduationYear: 2020
    },
    geographic: {
      city: "Mumbai",
      preferredAreas: ["Lower Parel", "BKC", "Marine Drive"]
    },
    personal: {
      age: 28,
      gender: "Male",
      interests: ["Investment Banking", "Chess", "Travel", "Wine Tasting", "Sailing"]
    },
    behavioural: {
      previousLikes: ["Business conferences", "Luxury events", "Strategic games"],
      previousDislikes: ["Unprofessionalism", "Time wasters"],
      responsePatterns: "Concise communicator, schedules meetings efficiently"
    },
    profileContent: {
      bio: "Investment banker with a passion for strategic thinking. Weekends = sailing or exploring new destinations.",
      uploadedMedia: ["Travel photos", "Sailing adventures", "Business event pictures"],
      personalityPrompts: "Analytical leader, achievement-oriented"
    }
  },
  {
    id: 7,
    name: "Ananya Gupta",
    academic: {
      university: "Lady Shri Ram College, Delhi",
      degreeProgram: "BA Psychology",
      graduationYear: 2024
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["South Delhi", "Central Delhi", "Noida"]
    },
    personal: {
      age: 21,
      gender: "Female",
      interests: ["Psychology", "Mental Health", "Painting", "Volunteering", "Meditation"]
    },
    behavioural: {
      previousLikes: ["Mental health workshops", "Art therapy sessions", "Volunteer activities"],
      previousDislikes: ["Judgmental attitudes", "Toxic positivity"],
      responsePatterns: "Empathetic listener, asks thoughtful questions"
    },
    profileContent: {
      bio: "Psychology student passionate about mental wellness. Creating safe spaces through art and conversation 🎨",
      uploadedMedia: ["Painting artwork", "Volunteer work photos", "Mindfulness quotes"],
      personalityPrompts: "Empathetic healer, emotionally intelligent"
    }
  },
  {
    id: 8,
    name: "Karthik Menon",
    academic: {
      university: "IIT Madras",
      degreeProgram: "B.Tech Electronics",
      graduationYear: 2022
    },
    geographic: {
      city: "Chennai",
      preferredAreas: ["OMR", "Adyar", "T. Nagar"]
    },
    personal: {
      age: 24,
      gender: "Male",
      interests: ["Robotics", "Tamil Literature", "Classical Music", "Gaming", "Cycling"]
    },
    behavioural: {
      previousLikes: ["Tech competitions", "Cultural programs", "Gaming tournaments"],
      previousDislikes: ["Loud environments", "Shallow conversations"],
      responsePatterns: "Detailed technical explanations, shares cultural content"
    },
    profileContent: {
      bio: "Robotics engineer rooted in Tamil culture. Building the future while honoring the past. Carnatic music soothes my soul 🎵",
      uploadedMedia: ["Robot prototypes", "Concert performances", "Cycling adventures"],
      personalityPrompts: "Culturally grounded techie, thoughtful innovator"
    }
  },
  {
    id: 9,
    name: "Shreya Agarwal",
    academic: {
      university: "XLRI Jamshedpur",
      degreeProgram: "PGDM HR",
      graduationYear: 2021
    },
    geographic: {
      city: "Pune",
      preferredAreas: ["Koregaon Park", "Viman Nagar", "Baner"]
    },
    personal: {
      age: 26,
      gender: "Female",
      interests: ["Human Resources", "Public Speaking", "Dance", "Team Building", "Networking"]
    },
    behavioural: {
      previousLikes: ["Corporate events", "Dance competitions", "Leadership workshops"],
      previousDislikes: ["Micromanagement", "Inflexibility"],
      responsePatterns: "Motivational communicator, organizes group activities"
    },
    profileContent: {
      bio: "HR professional building bridges between people and purpose. Life's a dance - let's make it memorable! 💃",
      uploadedMedia: ["Team building events", "Dance performances", "Speaking engagements"],
      personalityPrompts: "People-focused leader, energetic motivator"
    }
  },
  {
    id: 10,
    name: "Aditya Khanna",
    academic: {
      university: "NIT Warangal",
      degreeProgram: "B.Tech Civil Engineering",
      graduationYear: 2023
    },
    geographic: {
      city: "Gurgaon",
      preferredAreas: ["Cyber City", "Golf Course Road", "Sector 29"]
    },
    personal: {
      age: 23,
      gender: "Male",
      interests: ["Architecture", "Photography", "Trekking", "Sustainable Design", "Urban Planning"]
    },
    behavioural: {
      previousLikes: ["Architecture walks", "Nature photography", "Environmental seminars"],
      previousDislikes: ["Urban pollution", "Unsustainable practices"],
      responsePatterns: "Shares architectural insights, plans outdoor activities"
    },
    profileContent: {
      bio: "Civil engineer designing sustainable cities. Capturing urban beauty through my lens while dreaming of greener skylines 🏗️",
      uploadedMedia: ["Architectural photography", "Trekking photos", "Sustainable design concepts"],
      personalityPrompts: "Environmentally conscious builder, artistic engineer"
    }
  },
  {
    id: 11,
    name: "Radhika Menon",
    academic: {
      university: "Jamia Millia Islamia",
      degreeProgram: "MA Journalism",
      graduationYear: 2022
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["Lajpat Nagar", "Nizamuddin", "Greater Kailash"]
    },
    personal: {
      age: 25,
      gender: "Female",
      interests: ["Journalism", "Travel Writing", "Photography", "Social Issues", "Literature"]
    },
    behavioural: {
      previousLikes: ["Press conferences", "Literary events", "Documentary screenings"],
      previousDislikes: ["Fake news", "Censorship"],
      responsePatterns: "Investigative communicator, shares factual content"
    },
    profileContent: {
      bio: "Journalist uncovering stories that matter. Words are my weapon, truth is my mission. Storyteller by profession, humanist by choice 📰",
      uploadedMedia: ["News articles", "Interview footage", "Travel photography"],
      personalityPrompts: "Truth-seeking storyteller, socially conscious"
    }
  },
  {
    id: 12,
    name: "Siddharth Kumar",
    academic: {
      university: "IISc Bangalore",
      degreeProgram: "PhD Physics",
      graduationYear: 2025
    },
    geographic: {
      city: "Bangalore",
      preferredAreas: ["Malleswaram", "Basavanagudi", "Jayanagar"]
    },
    personal: {
      age: 29,
      gender: "Male",
      interests: ["Quantum Physics", "Chess", "Classical Music", "Philosophy", "Astronomy"]
    },
    behavioural: {
      previousLikes: ["Science conferences", "Chess tournaments", "Music concerts"],
      previousDislikes: ["Pseudoscience", "Noise pollution"],
      responsePatterns: "Analytical thinker, shares scientific insights"
    },
    profileContent: {
      bio: "PhD researcher exploring quantum mysteries. When not in the lab, you'll find me contemplating the universe or playing chess ♟️",
      uploadedMedia: ["Research presentations", "Chess game screenshots", "Telescope photos"],
      personalityPrompts: "Intellectual explorer, methodical thinker"
    }
  },
  {
    id: 13,
    name: "Deepika Rao",
    academic: {
      university: "AIIMS Delhi",
      degreeProgram: "MBBS",
      graduationYear: 2023
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["AIIMS", "Safdarjung", "Green Park"]
    },
    personal: {
      age: 26,
      gender: "Female",
      interests: ["Medicine", "Public Health", "Swimming", "Cooking", "Community Service"]
    },
    behavioural: {
      previousLikes: ["Medical camps", "Health awareness drives", "Swimming competitions"],
      previousDislikes: ["Health misinformation", "Medical negligence"],
      responsePatterns: "Caring communicator, shares health tips"
    },
    profileContent: {
      bio: "Doctor dedicated to healing and serving. Passionate about preventive healthcare and community wellness. Life saver by day, chef by night 👩‍⚕️",
      uploadedMedia: ["Medical camp photos", "Healthy recipe videos", "Swimming medals"],
      personalityPrompts: "Compassionate healer, community-focused"
    }
  },
  {
    id: 14,
    name: "Aryan Sharma",
    academic: {
      university: "NID Ahmedabad",
      degreeProgram: "M.Des Product Design",
      graduationYear: 2024
    },
    geographic: {
      city: "Ahmedabad",
      preferredAreas: ["Satellite", "Navrangpura", "Vastrapur"]
    },
    personal: {
      age: 24,
      gender: "Male",
      interests: ["Product Design", "Innovation", "Skateboarding", "Typography", "Sustainability"]
    },
    behavioural: {
      previousLikes: ["Design exhibitions", "Innovation labs", "Skateboarding events"],
      previousDislikes: ["Poor user experience", "Wasteful design"],
      responsePatterns: "Creative problem solver, shares design processes"
    },
    profileContent: {
      bio: "Product designer crafting solutions for tomorrow. Skateboarding through design challenges with sustainable innovation 🛹",
      uploadedMedia: ["Design prototypes", "Skateboarding videos", "Typography artwork"],
      personalityPrompts: "Innovative creator, sustainability advocate"
    }
  },
  {
    id: 15,
    name: "Neha Patel",
    academic: {
      university: "Symbiosis Pune",
      degreeProgram: "MBA International Business",
      graduationYear: 2021
    },
    geographic: {
      city: "Pune",
      preferredAreas: ["Hinjewadi", "Wakad", "Aundh"]
    },
    personal: {
      age: 27,
      gender: "Female",
      interests: ["International Trade", "Languages", "Hiking", "Wine Tasting", "Cultural Exchange"]
    },
    behavioural: {
      previousLikes: ["Business summits", "Cultural festivals", "Hiking expeditions"],
      previousDislikes: ["Cultural insensitivity", "Trade barriers"],
      responsePatterns: "Global thinker, shares cultural insights"
    },
    profileContent: {
      bio: "International business professional connecting cultures through commerce. Polyglot explorer seeking adventures in mountains and markets 🌍",
      uploadedMedia: ["Business conference photos", "Hiking adventures", "Cultural event pictures"],
      personalityPrompts: "Culturally aware connector, adventure seeker"
    }
  },
  {
    id: 16,
    name: "Akash Verma",
    academic: {
      university: "IIT Delhi",
      degreeProgram: "B.Tech Computer Science",
      graduationYear: 2024
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["Hauz Khas", "Lajpat Nagar", "Greater Kailash"]
    },
    personal: {
      age: 22,
      gender: "Male",
      interests: ["Machine Learning", "Open Source", "Basketball", "Gaming", "Hackathons"]
    },
    behavioural: {
      previousLikes: ["Hackathons", "Basketball games", "Tech conferences"],
      previousDislikes: ["Proprietary software", "Cheating in games"],
      responsePatterns: "Code enthusiast, shares technical tutorials"
    },
    profileContent: {
      bio: "CS grad passionate about AI and open source. Coding by day, gaming by night, basketball on weekends 🏀",
      uploadedMedia: ["Hackathon wins", "Basketball highlights", "Code repositories"],
      personalityPrompts: "Tech innovator, competitive gamer"
    }
  },
  {
    id: 17,
    name: "Ishita Jain",
    academic: {
      university: "SRCC Delhi",
      degreeProgram: "B.Com Honors",
      graduationYear: 2023
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["CP", "Rajouri Garden", "Janakpuri"]
    },
    personal: {
      age: 23,
      gender: "Female",
      interests: ["Finance", "Stock Market", "Badminton", "Podcasts", "Investment Banking"]
    },
    behavioural: {
      previousLikes: ["Investment seminars", "Badminton tournaments", "Financial podcasts"],
      previousDislikes: ["Market manipulation", "Poor financial literacy"],
      responsePatterns: "Financial advisor, shares market insights"
    },
    profileContent: {
      bio: "Commerce grad navigating the financial markets. Smashing stereotypes on the badminton court and breaking market trends 📈",
      uploadedMedia: ["Trading screenshots", "Badminton match videos", "Financial analysis posts"],
      personalityPrompts: "Analytical investor, competitive athlete"
    }
  },
  {
    id: 18,
    name: "Ravi Krishnan",
    academic: {
      university: "IIT Kharagpur",
      degreeProgram: "B.Tech Metallurgy",
      graduationYear: 2022
    },
    geographic: {
      city: "Kolkata",
      preferredAreas: ["Salt Lake", "Park Street", "Ballygunge"]
    },
    personal: {
      age: 25,
      gender: "Male",
      interests: ["Materials Science", "Football", "Bengali Literature", "Street Food", "Research"]
    },
    behavioural: {
      previousLikes: ["Research symposiums", "Football matches", "Literary discussions"],
      previousDislikes: ["Plagiarism", "Industrial pollution"],
      responsePatterns: "Research-oriented, shares scientific discoveries"
    },
    profileContent: {
      bio: "Metallurgist forging the future with innovative materials. Football fanatic and Bengali literature lover. Durga Pujo enthusiast 🏗️",
      uploadedMedia: ["Research lab photos", "Football game highlights", "Book collection"],
      personalityPrompts: "Scientific researcher, culturally rooted"
    }
  },
  {
    id: 19,
    name: "Pooja Singh",
    academic: {
      university: "BHU Varanasi",
      degreeProgram: "MA Sanskrit",
      graduationYear: 2023
    },
    geographic: {
      city: "Varanasi",
      preferredAreas: ["Godowlia", "Lanka", "Sigra"]
    },
    personal: {
      age: 24,
      gender: "Female",
      interests: ["Sanskrit Literature", "Classical Dance", "Spirituality", "Teaching", "Yoga"]
    },
    behavioural: {
      previousLikes: ["Cultural programs", "Yoga retreats", "Sanskrit recitations"],
      previousDislikes: ["Cultural appropriation", "Disrespect to traditions"],
      responsePatterns: "Cultural preservationist, shares ancient wisdom"
    },
    profileContent: {
      bio: "Sanskrit scholar preserving ancient wisdom for modern times. Dancing through life with classical grace and spiritual depth 🕉️",
      uploadedMedia: ["Classical dance performances", "Sanskrit manuscripts", "Yoga sessions"],
      personalityPrompts: "Traditional scholar, spiritual seeker"
    }
  },
  {
    id: 20,
    name: "Sameer Khan",
    academic: {
      university: "Aligarh Muslim University",
      degreeProgram: "LLB",
      graduationYear: 2022
    },
    geographic: {
      city: "Delhi",
      preferredAreas: ["Old Delhi", "Jamia Nagar", "Okhla"]
    },
    personal: {
      age: 26,
      gender: "Male",
      interests: ["Law", "Human Rights", "Urdu Poetry", "Cricket", "Social Justice"]
    },
    behavioural: {
      previousLikes: ["Legal seminars", "Poetry sessions", "Cricket matches"],
      previousDislikes: ["Injustice", "Legal delays"],
      responsePatterns: "Justice advocate, shares legal insights"
    },
    profileContent: {
      bio: "Lawyer fighting for justice and equality. Urdu poetry soothes my soul, cricket ignites my passion. Advocate for the voiceless ⚖️",
      uploadedMedia: ["Court case victories", "Poetry recitations", "Cricket highlights"],
      personalityPrompts: "Justice warrior, poetic soul"
    }
  },
  {
    id: 21,
    name: "Tanvi Agarwal",
    academic: {
      university: "Miranda House Delhi",
      degreeProgram: "BA English Literature",
      graduationYear: 2024
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["North Campus", "Kamla Nagar", "Civil Lines"]
    },
    personal: {
      age: 22,
      gender: "Female",
      interests: ["Literature", "Creative Writing", "Theatre", "Feminism", "Book Reviews"]
    },
    behavioural: {
      previousLikes: ["Book launches", "Theatre performances", "Literary festivals"],
      previousDislikes: ["Censorship", "Gender discrimination"],
      responsePatterns: "Literary critic, shares book recommendations"
    },
    profileContent: {
      bio: "English lit graduate weaving stories and breaking stereotypes. Theatre enthusiast, feminist writer, and book lover extraordinaire 📚",
      uploadedMedia: ["Theatre performances", "Book review videos", "Writing samples"],
      personalityPrompts: "Creative storyteller, feminist advocate"
    }
  },
  {
    id: 22,
    name: "Kunal Thakur",
    academic: {
      university: "IIM Lucknow",
      degreeProgram: "MBA Marketing",
      graduationYear: 2021
    },
    geographic: {
      city: "Mumbai",
      preferredAreas: ["Malad", "Goregaon", "Kandivali"]
    },
    personal: {
      age: 28,
      gender: "Male",
      interests: ["Digital Marketing", "Stand-up Comedy", "Trekking", "Brand Strategy", "Entrepreneurship"]
    },
    behavioural: {
      previousLikes: ["Marketing conferences", "Comedy shows", "Trekking expeditions"],
      previousDislikes: ["False advertising", "Boring presentations"],
      responsePatterns: "Humorous marketer, shares brand insights"
    },
    profileContent: {
      bio: "Marketing strategist turning brands into stories. Part-time comedian making boardrooms laugh. Life's too short for boring campaigns 😄",
      uploadedMedia: ["Brand campaign videos", "Comedy performance clips", "Trekking photos"],
      personalityPrompts: "Creative marketer, natural entertainer"
    }
  },
  {
    id: 23,
    name: "Divya Reddy",
    academic: {
      university: "ISB Hyderabad",
      degreeProgram: "MBA Finance",
      graduationYear: 2020
    },
    geographic: {
      city: "Hyderabad",
      preferredAreas: ["Gachibowli", "Madhapur", "Hitech City"]
    },
    personal: {
      age: 29,
      gender: "Female",
      interests: ["Investment Banking", "Tennis", "Wine Collection", "Luxury Travel", "Art Collection"]
    },
    behavioural: {
      previousLikes: ["Financial conferences", "Tennis matches", "Art auctions"],
      previousDislikes: ["Market volatility", "Poor service"],
      responsePatterns: "Strategic advisor, shares investment tips"
    },
    profileContent: {
      bio: "Investment banker with a passion for fine art and tennis. Collecting memories through luxury travels and rare wines 🎾",
      uploadedMedia: ["Trading floor photos", "Tennis tournament wins", "Art collection"],
      personalityPrompts: "Sophisticated investor, luxury enthusiast"
    }
  },
  {
    id: 24,
    name: "Harsh Gupta",
    academic: {
      university: "DTU Delhi",
      degreeProgram: "B.Tech Electrical Engineering",
      graduationYear: 2023
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["Rohini", "Pitampura", "Janakpuri"]
    },
    personal: {
      age: 23,
      gender: "Male",
      interests: ["Renewable Energy", "Electric Vehicles", "Cycling", "Environmental Conservation", "Innovation"]
    },
    behavioural: {
      previousLikes: ["Green energy seminars", "Cycling races", "Innovation labs"],
      previousDislikes: ["Pollution", "Energy waste"],
      responsePatterns: "Eco-engineer, shares sustainable solutions"
    },
    profileContent: {
      bio: "Electrical engineer powering the green revolution. Cycling towards a sustainable future, one innovation at a time 🚴‍♂️",
      uploadedMedia: ["Solar panel installations", "Cycling adventures", "EV prototypes"],
      personalityPrompts: "Environmental innovator, clean energy advocate"
    }
  },
  {
    id: 25,
    name: "Shreya Nair",
    academic: {
      university: "Stella Maris Chennai",
      degreeProgram: "MSc Biotechnology",
      graduationYear: 2022
    },
    geographic: {
      city: "Chennai",
      preferredAreas: ["Adyar", "Besant Nagar", "Thiruvanmiyur"]
    },
    personal: {
      age: 25,
      gender: "Female",
      interests: ["Biotechnology", "Marine Biology", "Scuba Diving", "Environmental Research", "Photography"]
    },
    behavioural: {
      previousLikes: ["Research conferences", "Diving expeditions", "Marine conservation drives"],
      previousDislikes: ["Ocean pollution", "Unethical research"],
      responsePatterns: "Research enthusiast, shares scientific findings"
    },
    profileContent: {
      bio: "Biotechnologist diving deep into marine mysteries. Protecting ocean life through research and conservation. Underwater photographer 🐠",
      uploadedMedia: ["Underwater photography", "Lab research videos", "Marine conservation posts"],
      personalityPrompts: "Marine researcher, conservation activist"
    }
  },
  {
    id: 26,
    name: "Arjun Singh",
    academic: {
      university: "Jadavpur University",
      degreeProgram: "BE Production Engineering",
      graduationYear: 2024
    },
    geographic: {
      city: "Kolkata",
      preferredAreas: ["Jadavpur", "Gariahat", "Southern Avenue"]
    },
    personal: {
      age: 23,
      gender: "Male",
      interests: ["Manufacturing", "Automation", "Table Tennis", "Bengali Culture", "Industrial Design"]
    },
    behavioural: {
      previousLikes: ["Industrial visits", "Table tennis tournaments", "Cultural programs"],
      previousDislikes: ["Manual inefficiency", "Poor quality control"],
      responsePatterns: "Process optimizer, shares manufacturing insights"
    },
    profileContent: {
      bio: "Production engineer optimizing manufacturing processes. Table tennis player with precision in both sports and engineering 🏓",
      uploadedMedia: ["Factory automation videos", "Table tennis matches", "Cultural event photos"],
      personalityPrompts: "Efficiency expert, precision athlete"
    }
  },
  {
    id: 27,
    name: "Priyanka Joshi",
    academic: {
      university: "Fashion Institute Gandhinagar",
      degreeProgram: "B.Des Textile Design",
      graduationYear: 2023
    },
    geographic: {
      city: "Ahmedabad",
      preferredAreas: ["Bopal", "Prahlad Nagar", "Satellite"]
    },
    personal: {
      age: 24,
      gender: "Female",
      interests: ["Textile Design", "Sustainable Fashion", "Handicrafts", "Travel", "Cultural Heritage"]
    },
    behavioural: {
      previousLikes: ["Craft exhibitions", "Fashion weeks", "Heritage walks"],
      previousDislikes: ["Fast fashion", "Cultural exploitation"],
      responsePatterns: "Cultural designer, shares traditional crafts"
    },
    profileContent: {
      bio: "Textile designer weaving sustainability into fashion. Preserving traditional crafts while creating contemporary designs 🧵",
      uploadedMedia: ["Textile patterns", "Handicraft collections", "Fashion show photos"],
      personalityPrompts: "Sustainable designer, heritage preserver"
    }
  },
  {
    id: 28,
    name: "Vikrant Yadav",
    academic: {
      university: "JNU Delhi",
      degreeProgram: "MA Economics",
      graduationYear: 2022
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["JNU Campus", "Munirka", "Vasant Kunj"]
    },
    personal: {
      age: 26,
      gender: "Male",
      interests: ["Economics", "Policy Research", "Cricket", "Debating", "Social Issues"]
    },
    behavioural: {
      previousLikes: ["Economic forums", "Cricket matches", "Policy debates"],
      previousDislikes: ["Economic inequality", "Poor governance"],
      responsePatterns: "Policy analyst, shares economic insights"
    },
    profileContent: {
      bio: "Economist analyzing markets and societies. Cricket enthusiast who debates policy as passionately as match statistics 📊",
      uploadedMedia: ["Research presentations", "Cricket analysis posts", "Policy debate videos"],
      personalityPrompts: "Analytical economist, sports enthusiast"
    }
  },
  {
    id: 29,
    name: "Kavitha Pillai",
    academic: {
      university: "Government Medical College Kochi",
      degreeProgram: "MBBS",
      graduationYear: 2024
    },
    geographic: {
      city: "Kochi",
      preferredAreas: ["Ernakulam", "Fort Kochi", "Marine Drive"]
    },
    personal: {
      age: 25,
      gender: "Female",
      interests: ["Medicine", "Ayurveda", "Kathakali", "Backwater Tourism", "Traditional Medicine"]
    },
    behavioural: {
      previousLikes: ["Medical camps", "Cultural performances", "Ayurveda workshops"],
      previousDislikes: ["Medical commercialization", "Cultural erosion"],
      responsePatterns: "Holistic healer, shares traditional medicine knowledge"
    },
    profileContent: {
      bio: "Doctor blending modern medicine with traditional Ayurveda. Kathakali dancer preserving Kerala's cultural heritage 🌴",
      uploadedMedia: ["Medical camp photos", "Kathakali performances", "Ayurveda treatments"],
      personalityPrompts: "Traditional healer, cultural ambassador"
    }
  },
  {
    id: 30,
    name: "Rajesh Gupta",
    academic: {
      university: "IIT Roorkee",
      degreeProgram: "B.Tech Civil Engineering",
      graduationYear: 2021
    },
    geographic: {
      city: "Gurgaon",
      preferredAreas: ["DLF Phase 1", "Sector 14", "Golf Course Road"]
    },
    personal: {
      age: 27,
      gender: "Male",
      interests: ["Infrastructure", "Smart Cities", "Marathon Running", "Urban Planning", "Technology"]
    },
    behavioural: {
      previousLikes: ["Urban planning seminars", "Marathon events", "Infrastructure projects"],
      previousDislikes: ["Poor urban planning", "Traffic congestion"],
      responsePatterns: "Infrastructure planner, shares urban solutions"
    },
    profileContent: {
      bio: "Civil engineer building smart cities for tomorrow. Marathon runner covering distances in planning and running 🏃‍♂️",
      uploadedMedia: ["Infrastructure projects", "Marathon medals", "City planning models"],
      personalityPrompts: "Urban visionary, endurance athlete"
    }
  },
  {
    id: 31,
    name: "Anushka Sharma",
    academic: {
      university: "NIFT Delhi",
      degreeProgram: "B.Des Fashion Communication",
      graduationYear: 2024
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["Hauz Khas Village", "Shahpur Jat", "Khan Market"]
    },
    personal: {
      age: 22,
      gender: "Female",
      interests: ["Fashion Styling", "Social Media", "Photography", "Brand Communication", "Trend Forecasting"]
    },
    behavioural: {
      previousLikes: ["Fashion weeks", "Brand launches", "Photo shoots"],
      previousDislikes: ["Body shaming", "Unrealistic beauty standards"],
      responsePatterns: "Visual storyteller, shares fashion trends"
    },
    profileContent: {
      bio: "Fashion communication grad styling the narrative of brands. Capturing beauty in diversity and authenticity ✨",
      uploadedMedia: ["Fashion shoots", "Brand campaigns", "Styling portfolios"],
      personalityPrompts: "Creative communicator, inclusive advocate"
    }
  },
  {
    id: 32,
    name: "Rohit Malhotra",
    academic: {
      university: "BITS Pilani",
      degreeProgram: "B.Tech Chemical Engineering",
      graduationYear: 2023
    },
    geographic: {
      city: "Mumbai",
      preferredAreas: ["Andheri East", "Powai", "Vikhroli"]
    },
    personal: {
      age: 24,
      gender: "Male",
      interests: ["Process Engineering", "Rock Climbing", "Sustainable Chemistry", "Adventure Sports", "Innovation"]
    },
    behavioural: {
      previousLikes: ["Chemical conferences", "Climbing expeditions", "Innovation challenges"],
      previousDislikes: ["Chemical pollution", "Safety violations"],
      responsePatterns: "Process innovator, shares engineering solutions"
    },
    profileContent: {
      bio: "Chemical engineer scaling new heights in sustainable processes. Rock climbing teaches me that every challenge has a solution 🧗‍♂️",
      uploadedMedia: ["Process plant photos", "Rock climbing adventures", "Innovation prototypes"],
      personalityPrompts: "Adventure seeker, process optimizer"
    }
  },
  {
    id: 33,
    name: "Sneha Reddy",
    academic: {
      university: "Osmania University",
      degreeProgram: "MSW Social Work",
      graduationYear: 2022
    },
    geographic: {
      city: "Hyderabad",
      preferredAreas: ["Ameerpet", "Secunderabad", "Begumpet"]
    },
    personal: {
      age: 26,
      gender: "Female",
      interests: ["Social Work", "Community Development", "Women Empowerment", "Rural Development", "NGO Management"]
    },
    behavioural: {
      previousLikes: ["Community outreach", "Women's workshops", "Social campaigns"],
      previousDislikes: ["Social inequality", "Gender discrimination"],
      responsePatterns: "Community advocate, shares social causes"
    },
    profileContent: {
      bio: "Social worker empowering communities one project at a time. Believing in the power of collective action for social change 🤝",
      uploadedMedia: ["Community project photos", "Workshop sessions", "Social campaign videos"],
      personalityPrompts: "Social changemaker, community builder"
    }
  },
  {
    id: 34,
    name: "Manish Tiwari",
    academic: {
      university: "IIT Kanpur",
      degreeProgram: "B.Tech Aerospace Engineering",
      graduationYear: 2023
    },
    geographic: {
      city: "Bangalore",
      preferredAreas: ["Whitefield", "Electronic City", "HSR Layout"]
    },
    personal: {
      age: 24,
      gender: "Male",
      interests: ["Aerospace", "Space Technology", "Astrophotography", "Drone Racing", "Aviation"]
    },
    behavioural: {
      previousLikes: ["Space exhibitions", "Drone competitions", "Aviation shows"],
      previousDislikes: ["Space debris", "Technology gaps"],
      responsePatterns: "Space enthusiast, shares aerospace innovations"
    },
    profileContent: {
      bio: "Aerospace engineer reaching for the stars. Capturing cosmic beauty through astrophotography and racing drones 🚀",
      uploadedMedia: ["Rocket launches", "Astrophotography", "Drone racing videos"],
      personalityPrompts: "Space explorer, technology pioneer"
    }
  },
  {
    id: 35,
    name: "Richa Agarwal",
    academic: {
      university: "Lady Hardinge Medical College",
      degreeProgram: "MBBS",
      graduationYear: 2022
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["Connaught Place", "Paharganj", "Karol Bagh"]
    },
    personal: {
      age: 26,
      gender: "Female",
      interests: ["Pediatrics", "Child Healthcare", "Volunteer Work", "Reading", "Medical Research"]
    },
    behavioural: {
      previousLikes: ["Medical conferences", "Volunteer drives", "Children's programs"],
      previousDislikes: ["Child neglect", "Healthcare inequality"],
      responsePatterns: "Child advocate, shares medical knowledge"
    },
    profileContent: {
      bio: "Pediatrician dedicated to children's health and happiness. Every smile I bring to a child's face makes medicine worthwhile 👶",
      uploadedMedia: ["Medical camp photos", "Children's program videos", "Research publications"],
      personalityPrompts: "Child advocate, compassionate healer"
    }
  },
  {
    id: 36,
    name: "Suraj Yadav",
    academic: {
      university: "NIT Calicut",
      degreeProgram: "B.Tech Information Technology",
      graduationYear: 2024
    },
    geographic: {
      city: "Kochi",
      preferredAreas: ["Kakkanad", "Edapally", "Vyttila"]
    },
    personal: {
      age: 23,
      gender: "Male",
      interests: ["Cybersecurity", "Ethical Hacking", "Martial Arts", "Privacy Advocacy", "Bug Bounty"]
    },
    behavioural: {
      previousLikes: ["Security conferences", "Martial arts tournaments", "Hacking competitions"],
      previousDislikes: ["Data breaches", "Privacy violations"],
      responsePatterns: "Security expert, shares cybersecurity tips"
    },
    profileContent: {
      bio: "IT professional securing digital worlds. Martial artist defending both physical and virtual spaces with equal precision 🥋",
      uploadedMedia: ["Security certifications", "Martial arts demos", "Bug bounty achievements"],
      personalityPrompts: "Digital defender, disciplined warrior"
    }
  },
  {
    id: 37,
    name: "Meghna Kulkarni",
    academic: {
      university: "Fergusson College Pune",
      degreeProgram: "MA Sociology",
      graduationYear: 2023
    },
    geographic: {
      city: "Pune",
      preferredAreas: ["FC Road", "JM Road", "Shivajinagar"]
    },
    personal: {
      age: 25,
      gender: "Female",
      interests: ["Sociology", "Gender Studies", "Documentary Making", "Social Research", "Human Rights"]
    },
    behavioural: {
      previousLikes: ["Research conferences", "Documentary screenings", "Social seminars"],
      previousDislikes: ["Social prejudice", "Discrimination"],
      responsePatterns: "Social researcher, shares sociological insights"
    },
    profileContent: {
      bio: "Sociologist documenting social realities and driving change. Using camera lens to capture stories that need to be told 🎬",
      uploadedMedia: ["Documentary clips", "Research presentations", "Social campaign videos"],
      personalityPrompts: "Social documentarian, change catalyst"
    }
  },
  {
    id: 38,
    name: "Kartik Desai",
    academic: {
      university: "IIM Bangalore",
      degreeProgram: "MBA Strategy",
      graduationYear: 2021
    },
    geographic: {
      city: "Mumbai",
      preferredAreas: ["Bandra Kurla Complex", "Lower Parel", "Worli"]
    },
    personal: {
      age: 28,
      gender: "Male",
      interests: ["Strategy Consulting", "Corporate Finance", "Squash", "Business Analytics", "Startups"]
    },
    behavioural: {
      previousLikes: ["Strategy workshops", "Squash tournaments", "Startup events"],
      previousDislikes: ["Poor execution", "Missed deadlines"],
      responsePatterns: "Strategic thinker, shares business insights"
    },
    profileContent: {
      bio: "Strategy consultant helping businesses win. Squash player who approaches both sports and strategy with tactical precision 🎯",
      uploadedMedia: ["Consulting projects", "Squash matches", "Business presentations"],
      personalityPrompts: "Strategic advisor, competitive player"
    }
  },
  {
    id: 39,
    name: "Nandini Shah",
    academic: {
      university: "MS University Baroda",
      degreeProgram: "BFA Painting",
      graduationYear: 2024
    },
    geographic: {
      city: "Vadodara",
      preferredAreas: ["Alkapuri", "Sayajigunj", "Fatehgunj"]
    },
    personal: {
      age: 23,
      gender: "Female",
      interests: ["Fine Arts", "Contemporary Art", "Art Therapy", "Gallery Management", "Creative Expression"]
    },
    behavioural: {
      previousLikes: ["Art exhibitions", "Gallery openings", "Art therapy sessions"],
      previousDislikes: ["Art commercialization", "Creative suppression"],
      responsePatterns: "Creative artist, shares artistic inspiration"
    },
    profileContent: {
      bio: "Fine arts graduate painting emotions and stories. Using art as therapy to heal souls and express the inexpressible 🎨",
      uploadedMedia: ["Painting collections", "Art therapy sessions", "Gallery exhibitions"],
      personalityPrompts: "Expressive artist, emotional healer"
    }
  },
  {
    id: 40,
    name: "Abhishek Pandey",
    academic: {
      university: "IIT Guwahati",
      degreeProgram: "B.Tech Biotechnology",
      graduationYear: 2022
    },
    geographic: {
      city: "Pune",
      preferredAreas: ["Hadapsar", "Kharadi", "Magarpatta"]
    },
    personal: {
      age: 25,
      gender: "Male",
      interests: ["Biotechnology", "Bioinformatics", "Mountaineering", "Research", "Conservation Biology"]
    },
    behavioural: {
      previousLikes: ["Research symposiums", "Mountaineering expeditions", "Conservation drives"],
      previousDislikes: ["Environmental destruction", "Unethical research"],
      responsePatterns: "Bio-researcher, shares scientific discoveries"
    },
    profileContent: {
      bio: "Biotechnologist exploring life's mysteries. Mountaineer who finds inspiration in both lab discoveries and mountain peaks ⛰️",
      uploadedMedia: ["Research lab photos", "Mountaineering adventures", "Conservation projects"],
      personalityPrompts: "Life scientist, adventure explorer"
    }
  },
  {
    id: 41,
    name: "Shweta Joshi",
    academic: {
      university: "TISS Mumbai",
      degreeProgram: "MA Development Studies",
      graduationYear: 2023
    },
    geographic: {
      city: "Mumbai",
      preferredAreas: ["Chembur", "Ghatkopar", "Mulund"]
    },
    personal: {
      age: 25,
      gender: "Female",
      interests: ["Development Studies", "Rural Development", "Microfinance", "Social Entrepreneurship", "Policy Analysis"]
    },
    behavioural: {
      previousLikes: ["Development conferences", "Rural visits", "Social enterprise events"],
      previousDislikes: ["Development inequality", "Exploitation"],
      responsePatterns: "Development advocate, shares social impact stories"
    },
    profileContent: {
      bio: "Development studies graduate working for inclusive growth. Bridging the gap between policy and practice for sustainable development 🌱",
      uploadedMedia: ["Rural project photos", "Development program videos", "Policy research documents"],
      personalityPrompts: "Development catalyst, policy researcher"
    }
  },
  {
    id: 42,
    name: "Yash Sinha",
    academic: {
      university: "IIT Bhubaneswar",
      degreeProgram: "B.Tech Mechanical Engineering",
      graduationYear: 2024
    },
    geographic: {
      city: "Bangalore",
      preferredAreas: ["Koramangala", "BTM Layout", "JP Nagar"]
    },
    personal: {
      age: 23,
      gender: "Male",
      interests: ["Automotive Engineering", "Formula Racing", "CAD Design", "Motorcycle Racing", "Innovation"]
    },
    behavioural: {
      previousLikes: ["Racing events", "Engineering competitions", "Auto exhibitions"],
      previousDislikes: ["Poor vehicle safety", "Environmental damage"],
      responsePatterns: "Speed enthusiast, shares automotive innovations"
    },
    profileContent: {
      bio: "Mechanical engineer designing the future of mobility. Formula racing driver who lives life in the fast lane ⚡",
      uploadedMedia: ["Racing car designs", "Racing videos", "CAD models"],
      personalityPrompts: "Speed demon, engineering innovator"
    }
  },
  {
    id: 43,
    name: "Ritika Bhardwaj",
    academic: {
      university: "Amity University Noida",
      degreeProgram: "MBA Digital Marketing",
      graduationYear: 2022
    },
    geographic: {
      city: "Gurgaon",
      preferredAreas: ["Sector 29", "Cyber Hub", "MG Road"]
    },
    personal: {
      age: 26,
      gender: "Female",
      interests: ["Digital Marketing", "Content Creation", "Social Media Strategy", "Blogging", "Brand Building"]
    },
    behavioural: {
      previousLikes: ["Marketing conferences", "Content creator meetups", "Brand launches"],
      previousDislikes: ["Fake influencers", "Poor content quality"],
      responsePatterns: "Content strategist, shares marketing trends"
    },
    profileContent: {
      bio: "Digital marketing maven creating viral content and building brands. Storyteller who turns brands into memorable experiences 📱",
      uploadedMedia: ["Campaign videos", "Content creation process", "Brand strategy presentations"],
      personalityPrompts: "Digital storyteller, brand architect"
    }
  },
  {
    id: 44,
    name: "Aaditya Kapoor",
    academic: {
      university: "Shri Ram College of Commerce",
      degreeProgram: "B.Com Honors",
      graduationYear: 2024
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["South Extension", "Lajpat Nagar", "Defense Colony"]
    },
    personal: {
      age: 22,
      gender: "Male",
      interests: ["Finance", "Equity Research", "Volleyball", "Financial Planning", "Investment Analysis"]
    },
    behavioural: {
      previousLikes: ["Investment seminars", "Volleyball matches", "Financial workshops"],
      previousDislikes: ["Market manipulation", "Financial fraud"],
      responsePatterns: "Financial analyst, shares market research"
    },
    profileContent: {
      bio: "Commerce graduate analyzing markets and building wealth. Volleyball player who spikes both on court and in portfolio returns 🏐",
      uploadedMedia: ["Market analysis posts", "Volleyball highlights", "Investment tutorials"],
      personalityPrompts: "Market analyst, team player"
    }
  },
  {
    id: 45,
    name: "Swati Malik",
    academic: {
      university: "Bharati Vidyapeeth Pune",
      degreeProgram: "BDS Dentistry",
      graduationYear: 2023
    },
    geographic: {
      city: "Pune",
      preferredAreas: ["Deccan", "Shivajinagar", "Camp"]
    },
    personal: {
      age: 24,
      gender: "Female",
      interests: ["Dentistry", "Oral Health", "Classical Music", "Community Health", "Medical Education"]
    },
    behavioural: {
      previousLikes: ["Medical conferences", "Music concerts", "Health camps"],
      previousDislikes: ["Poor oral hygiene awareness", "Medical negligence"],
      responsePatterns: "Health educator, shares oral health tips"
    },
    profileContent: {
      bio: "Dentist creating beautiful smiles and healthy communities. Classical music enthusiast who finds harmony in healing 🦷",
      uploadedMedia: ["Dental procedures", "Health camp photos", "Music performances"],
      personalityPrompts: "Healing artist, community educator"
    }
  },
  {
    id: 46,
    name: "Rohan Chopra",
    academic: {
      university: "IIT Madras",
      degreeProgram: "B.Tech Ocean Engineering",
      graduationYear: 2023
    },
    geographic: {
      city: "Chennai",
      preferredAreas: ["Velachery", "Guindy", "Saidapet"]
    },
    personal: {
      age: 24,
      gender: "Male",
      interests: ["Ocean Engineering", "Marine Technology", "Surfing", "Coastal Conservation", "Underwater Robotics"]
    },
    behavioural: {
      previousLikes: ["Marine conferences", "Surfing competitions", "Conservation drives"],
      previousDislikes: ["Ocean pollution", "Coastal destruction"],
      responsePatterns: "Ocean explorer, shares marine technology"
    },
    profileContent: {
      bio: "Ocean engineer riding waves of innovation. Surfer who's equally passionate about marine technology and wave riding 🏄‍♂️",
      uploadedMedia: ["Underwater robotics", "Surfing videos", "Marine research"],
      personalityPrompts: "Wave rider, ocean protector"
    }
  },
  {
    id: 47,
    name: "Prerna Mishra",
    academic: {
      university: "JNU Delhi",
      degreeProgram: "MA International Relations",
      graduationYear: 2022
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["Munirka", "Vasant Vihar", "RK Puram"]
    },
    personal: {
      age: 26,
      gender: "Female",
      interests: ["International Relations", "Diplomacy", "Policy Writing", "Travel", "Cultural Exchange"]
    },
    behavioural: {
      previousLikes: ["Diplomatic events", "International conferences", "Cultural programs"],
      previousDislikes: ["International conflicts", "Cultural misunderstandings"],
      responsePatterns: "Global citizen, shares international perspectives"
    },
    profileContent: {
      bio: "International relations graduate building bridges across borders. Diplomat by training, global citizen by heart 🌍",
      uploadedMedia: ["Conference presentations", "Cultural exchange photos", "Policy documents"],
      personalityPrompts: "Global connector, peace advocate"
    }
  },
  {
    id: 48,
    name: "Varun Saxena",
    academic: {
      university: "IIT Kharagpur",
      degreeProgram: "B.Tech Mining Engineering",
      graduationYear: 2022
    },
    geographic: {
      city: "Bhubaneswar",
      preferredAreas: ["Saheed Nagar", "Khandagiri", "Patia"]
    },
    personal: {
      age: 25,
      gender: "Male",
      interests: ["Mining Engineering", "Sustainable Mining", "Rock Climbing", "Geology", "Environmental Protection"]
    },
    behavioural: {
      previousLikes: ["Mining conferences", "Climbing expeditions", "Environmental seminars"],
      previousDislikes: ["Illegal mining", "Environmental degradation"],
      responsePatterns: "Sustainable engineer, shares mining innovations"
    },
    profileContent: {
      bio: "Mining engineer extracting value while protecting earth. Rock climber who respects both mountains and minerals ⛏️",
      uploadedMedia: ["Mining site photos", "Rock climbing adventures", "Sustainability projects"],
      personalityPrompts: "Earth steward, adventure seeker"
    }
  },
  {
    id: 49,
    name: "Aditi Sharma",
    academic: {
      university: "Delhi School of Economics",
      degreeProgram: "MA Economics",
      graduationYear: 2023
    },
    geographic: {
      city: "New Delhi",
      preferredAreas: ["North Campus", "Mukherjee Nagar", "Model Town"]
    },
    personal: {
      age: 25,
      gender: "Female",
      interests: ["Economics", "Behavioral Economics", "Data Analysis", "Public Policy", "Research"]
    },
    behavioural: {
      previousLikes: ["Economic conferences", "Research seminars", "Policy discussions"],
      previousDislikes: ["Economic inequality", "Poor policy implementation"],
      responsePatterns: "Economic researcher, shares policy insights"
    },
    profileContent: {
      bio: "Economist decoding human behavior through data. Research enthusiast turning economic theories into practical solutions 📊",
      uploadedMedia: ["Research presentations", "Data visualizations", "Policy analysis"],
      personalityPrompts: "Data-driven economist, policy reformer"
    }
  },
  {
    id: 50,
    name: "Mohit Agarwal",
    academic: {
      university: "NIT Trichy",
      degreeProgram: "B.Tech Computer Science",
      graduationYear: 2024
    },
    geographic: {
      city: "Chennai",
      preferredAreas: ["Anna Nagar", "T. Nagar", "Mylapore"]
    },
    personal: {
      age: 23,
      gender: "Male",
      interests: ["Software Development", "AI/ML", "Chess", "Competitive Programming", "Open Source"]
    },
    behavioural: {
      previousLikes: ["Coding competitions", "Chess tournaments", "Tech conferences"],
      previousDislikes: ["Buggy code", "Closed source monopolies"],
      responsePatterns: "Code craftsman, shares programming insights"
    },
    profileContent: {
      bio: "Software developer crafting elegant code solutions. Chess player who thinks several moves ahead in both games and algorithms ♟️",
      uploadedMedia: ["Code repositories", "Chess game analyses", "Programming tutorials"],
      personalityPrompts: "Strategic coder, logical thinker"
    }
  }
]

export default userData;