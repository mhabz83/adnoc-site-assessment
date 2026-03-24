const SITES_DATA = [
  {
    "ss": "SS526",
    "name": "Dubai Hills",
    "emirate": "Dubai",
    "area": "Dubai Hills Estate",
    "lat": 25.130002,
    "lng": 55.260369,
    "priority": "Y1-2026",
    "road": "Al Khail Rd (E44)",
    "scores": {
      "traffic": 9,
      "fuel_retailers": 7,
      "car_wash": 8,
      "affluent": 9,
      "ev_signals": 9,
      "competitor": 6
    },
    "weighted_score": 8.1,
    "grade": "green",
    "notes": "Al Khail Rd (E44) - mega arterial. Dubai Hills Estate one of the most affluent master-planned communities. Tesla presence. High EV adoption. Strong car wash demand. Premium catchment.",
    "category": "Y1-2026 Priority"
  },
  {
    "ss": "SS222",
    "name": "Sheikh Zayed Road",
    "area": "Sheikh Zayed Road",
    "lat": 25.095,
    "lng": 55.175,
    "emirate": "Dubai",
    "scores": {
      "traffic": 10,
      "fuel_retailers": 7,
      "car_wash": 6,
      "affluent": 8,
      "ev_signals": 7,
      "competitor": 5
    },
    "weighted_score": 7.5,
    "grade": "green",
    "notes": "E11 Sheikh Zayed Road - Dubai's primary artery. Maximum traffic. Premium location.",
    "category": "Dubai"
  },
  {
    "ss": "SS535",
    "name": "Business Bay",
    "area": "Sheikh Zayed Road",
    "lat": 25.185,
    "lng": 55.275,
    "emirate": "Dubai",
    "scores": {
      "traffic": 9,
      "fuel_retailers": 6,
      "car_wash": 7,
      "affluent": 8,
      "ev_signals": 8,
      "competitor": 5
    },
    "weighted_score": 7.3,
    "grade": "green",
    "notes": "Business Bay / SZR. Ultra-premium location. Maximum visibility. Corporate catchment.",
    "category": "Dubai"
  },
  {
    "ss": "SS533",
    "name": "Al Warqa",
    "emirate": "Dubai",
    "area": "Al Warqaa 3",
    "lat": 25.19837,
    "lng": 55.432693,
    "priority": "Y1-2026",
    "road": "Hessa Road / Al Warqa St",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 7,
      "car_wash": 7,
      "affluent": 7,
      "ev_signals": 6,
      "competitor": 7
    },
    "weighted_score": 7.2,
    "grade": "green",
    "notes": "Hessa Road intersection. Established residential area with villa communities. Good footfall. Multiple fuel retailers in vicinity. Moderate competition from independent garages.",
    "category": "Y1-2026 Priority"
  },
  {
    "ss": "SS209",
    "name": "Al Warqa 2",
    "area": "Hessa Road",
    "lat": 25.195,
    "lng": 55.43,
    "emirate": "Dubai",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 7,
      "car_wash": 7,
      "affluent": 7,
      "ev_signals": 6,
      "competitor": 7
    },
    "weighted_score": 7.2,
    "grade": "green",
    "notes": "Same Al Warqa corridor as Y1 site. Established residential.",
    "category": "Dubai"
  },
  {
    "ss": "SS220",
    "name": "Hadaeq",
    "area": "Sheikh Mohamed Bin Zayed Rd",
    "lat": 25.085,
    "lng": 55.23,
    "emirate": "Dubai",
    "scores": {
      "traffic": 9,
      "fuel_retailers": 7,
      "car_wash": 6,
      "affluent": 7,
      "ev_signals": 7,
      "competitor": 6
    },
    "weighted_score": 7.2,
    "grade": "green",
    "notes": "E311 near Dubai Hills. Major arterial. Premium catchment nearby.",
    "category": "Dubai"
  },
  {
    "ss": "SS227",
    "name": "Umm Suqeim 1",
    "area": "Umm Suqeim, Al Wasl Rd",
    "lat": 25.155,
    "lng": 55.215,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 8,
      "affluent": 9,
      "ev_signals": 8,
      "competitor": 5
    },
    "weighted_score": 7.2,
    "grade": "green",
    "notes": "Premium Jumeirah/UmSuqeim. Extremely affluent. High car care demand. EV-forward.",
    "category": "Dubai"
  },
  {
    "ss": "SS357",
    "name": "Jumeirah",
    "area": "Jumeirah St",
    "lat": 25.205,
    "lng": 55.245,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 8,
      "affluent": 9,
      "ev_signals": 8,
      "competitor": 5
    },
    "weighted_score": 7.2,
    "grade": "green",
    "notes": "Jumeirah Beach Road. Ultra-premium area. High car care demand.",
    "category": "Dubai"
  },
  {
    "ss": "SS969",
    "name": "Souq Al Bateen",
    "emirate": "Abu Dhabi",
    "area": "Al Bateen",
    "lat": 24.46,
    "lng": 54.351,
    "priority": "Y1-2026",
    "road": "Al Bateen St",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 7,
      "affluent": 9,
      "ev_signals": 8,
      "competitor": 5
    },
    "weighted_score": 7.0,
    "grade": "green",
    "notes": "Premium Abu Dhabi neighborhood. Corniche adjacent. High-income catchment - embassy area, executive villas. EV adoption above average. Lower direct competition.",
    "category": "Y1-2026 Priority"
  },
  {
    "ss": "SS384",
    "name": "Arabian Ranches",
    "area": "Emirates Road E11",
    "lat": 25.055,
    "lng": 55.285,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 7,
      "affluent": 9,
      "ev_signals": 8,
      "competitor": 6
    },
    "weighted_score": 7.0,
    "grade": "green",
    "notes": "Arabian Ranches - premium villa community. Very affluent. Strong car care demand.",
    "category": "Dubai"
  },
  {
    "ss": "SS528",
    "name": "Al Barsha",
    "area": "Al Barsha Street",
    "lat": 25.115,
    "lng": 55.195,
    "emirate": "Dubai",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 7,
      "car_wash": 7,
      "affluent": 7,
      "ev_signals": 6,
      "competitor": 5
    },
    "weighted_score": 6.9,
    "grade": "green",
    "notes": "Al Barsha - major residential/commercial hub. Near Mall of Emirates. High footfall.",
    "category": "Dubai"
  },
  {
    "ss": "SS169",
    "name": "Motor World",
    "emirate": "Abu Dhabi",
    "area": "Al Shamkha",
    "lat": 24.398722,
    "lng": 54.690537,
    "priority": "Y1-2026",
    "road": "Sweihan Road (E20)",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 8,
      "car_wash": 7,
      "affluent": 6,
      "ev_signals": 5,
      "competitor": 6
    },
    "weighted_score": 6.8,
    "grade": "green",
    "notes": "Major intersection on Sweihan Road (E20). Motor World auto hub with high vehicle traffic. Growing residential. Multiple fuel brands nearby. Active VIC on-site.",
    "category": "Y1-2026 Priority"
  },
  {
    "ss": "SS171",
    "name": "Mafraq",
    "emirate": "Abu Dhabi",
    "area": "Bani Yas East",
    "lat": 24.320774,
    "lng": 54.614905,
    "priority": "Y1-2026",
    "road": "Shk. Maktoum Bin Rashid Rd (E11)",
    "scores": {
      "traffic": 9,
      "fuel_retailers": 8,
      "car_wash": 6,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 7
    },
    "weighted_score": 6.8,
    "grade": "green",
    "notes": "E11 (Shk Maktoum Bin Rashid Rd) - one of the busiest highways in Abu Dhabi. Major interchange. Dense residential/commercial. High truck traffic.",
    "category": "Y1-2026 Priority"
  },
  {
    "ss": "SS537",
    "name": "Al Badaa",
    "area": "Al Wasl Rd",
    "lat": 25.225,
    "lng": 55.265,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 7,
      "affluent": 8,
      "ev_signals": 7,
      "competitor": 5
    },
    "weighted_score": 6.8,
    "grade": "green",
    "notes": "Al Badaa / Jumeirah. Premium residential. Very high car care demand.",
    "category": "Dubai"
  },
  {
    "ss": "SS176",
    "name": "Al Buhaira",
    "area": "Al Khan Street",
    "lat": 25.34,
    "lng": 55.385,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 7,
      "car_wash": 7,
      "affluent": 7,
      "ev_signals": 5,
      "competitor": 5
    },
    "weighted_score": 6.8,
    "grade": "green",
    "notes": "Al Khan / Qasba waterfront area. Premium Sharjah location. High visibility.",
    "category": "Sharjah"
  },
  {
    "ss": "SS536",
    "name": "Nad Al Sheba",
    "area": "Sheikh Mohamed Bin Zayed",
    "lat": 25.145,
    "lng": 55.325,
    "emirate": "Dubai",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 6,
      "car_wash": 6,
      "affluent": 7,
      "ev_signals": 6,
      "competitor": 6
    },
    "weighted_score": 6.7,
    "grade": "yellow",
    "notes": "Nad Al Sheba. Established villa area. Good income. Near Meydan.",
    "category": "Dubai"
  },
  {
    "ss": "SS437",
    "name": "Yas Acres North",
    "area": "Al Shamkha",
    "lat": 24.425,
    "lng": 54.685,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 6,
      "affluent": 7,
      "ev_signals": 6,
      "competitor": 6
    },
    "weighted_score": 6.5,
    "grade": "yellow",
    "notes": "Near Yas Island. Premium community (Yas Acres). Higher affluence.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS228",
    "name": "Al Mamzar",
    "area": "Al Khaleej Street",
    "lat": 25.285,
    "lng": 55.345,
    "emirate": "Dubai",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 7,
      "car_wash": 6,
      "affluent": 6,
      "ev_signals": 5,
      "competitor": 6
    },
    "weighted_score": 6.5,
    "grade": "yellow",
    "notes": "Deira side. Dense residential/commercial. High footfall. Cross-border with Sharjah.",
    "category": "Dubai"
  },
  {
    "ss": "SS232",
    "name": "Al Yufra",
    "area": "Damac Hills",
    "lat": 25.055,
    "lng": 55.26,
    "emirate": "Dubai",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 6,
      "affluent": 8,
      "ev_signals": 7,
      "competitor": 7
    },
    "weighted_score": 6.5,
    "grade": "yellow",
    "notes": "Damac Hills - premium master-planned community. Affluent families.",
    "category": "Dubai"
  },
  {
    "ss": "SS378",
    "name": "Ghoroob Mirdif",
    "area": "Mirdif",
    "lat": 25.215,
    "lng": 55.415,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 6,
      "affluent": 7,
      "ev_signals": 6,
      "competitor": 6
    },
    "weighted_score": 6.5,
    "grade": "yellow",
    "notes": "Mirdif - established villa community. Family-oriented. Good income.",
    "category": "Dubai"
  },
  {
    "ss": "SS463",
    "name": "Al Nahda",
    "area": "Al Qusais",
    "lat": 25.28,
    "lng": 55.36,
    "emirate": "Dubai",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 7,
      "car_wash": 6,
      "affluent": 6,
      "ev_signals": 5,
      "competitor": 5
    },
    "weighted_score": 6.4,
    "grade": "yellow",
    "notes": "Dense Al Nahda. Cross-border with Sharjah. Very high residential density.",
    "category": "Dubai"
  },
  {
    "ss": "SS527",
    "name": "Al Khawaneej",
    "area": "Al Khawaneej St",
    "lat": 25.24,
    "lng": 55.46,
    "emirate": "Dubai",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 5,
      "affluent": 8,
      "ev_signals": 7,
      "competitor": 7
    },
    "weighted_score": 6.4,
    "grade": "yellow",
    "notes": "Al Khawaneej - premium Emirati residential. Very affluent.",
    "category": "Dubai"
  },
  {
    "ss": "SS523",
    "name": "Al Daar",
    "area": "Khalifa City",
    "lat": 24.435,
    "lng": 54.62,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 6,
      "affluent": 7,
      "ev_signals": 6,
      "competitor": 5
    },
    "weighted_score": 6.3,
    "grade": "yellow",
    "notes": "Khalifa City - established affluent suburb. Good car ownership. EV-friendly.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS124",
    "name": "Jabal Ali",
    "area": "Sheikh Mohammed Bin Zayed Rd",
    "lat": 25.04,
    "lng": 55.12,
    "emirate": "Dubai",
    "scores": {
      "traffic": 9,
      "fuel_retailers": 7,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 6
    },
    "weighted_score": 6.3,
    "grade": "yellow",
    "notes": "E311/SMBZ Road. Extremely high traffic. Industrial/commercial zone.",
    "category": "Dubai"
  },
  {
    "ss": "SS248",
    "name": "Al Ttay",
    "area": "Al Khawaneej E611",
    "lat": 25.23,
    "lng": 55.44,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 7,
      "ev_signals": 6,
      "competitor": 6
    },
    "weighted_score": 6.3,
    "grade": "yellow",
    "notes": "Al Khawaneej / Al Ttay. Premium villa area. Growing community.",
    "category": "Dubai"
  },
  {
    "ss": "SS178",
    "name": "Al Asrar",
    "area": "Al Nahda Street",
    "lat": 25.31,
    "lng": 55.38,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 7,
      "car_wash": 6,
      "affluent": 6,
      "ev_signals": 4,
      "competitor": 5
    },
    "weighted_score": 6.3,
    "grade": "yellow",
    "notes": "Al Nahda Sharjah - cross-border with Dubai. Extremely dense residential.",
    "category": "Sharjah"
  },
  {
    "ss": "SS883",
    "name": "Al Qasbaa'",
    "area": "Al Khan",
    "lat": 25.338,
    "lng": 55.385,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 7,
      "affluent": 7,
      "ev_signals": 5,
      "competitor": 5
    },
    "weighted_score": 6.3,
    "grade": "yellow",
    "notes": "Al Qasba / Al Khan. Premium Sharjah waterfront. Good catchment.",
    "category": "Sharjah"
  },
  {
    "ss": "SS114",
    "name": "Baniyas East",
    "area": "E11 Baniyas East",
    "lat": 24.504,
    "lng": 54.66,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 7,
      "car_wash": 6,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 6.2,
    "grade": "yellow",
    "notes": "E11 Baniyas. Dense residential. High footfall. Multiple competitors.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS377",
    "name": "The Villa 2",
    "area": "Sheikh Zayed Bin Hamdan",
    "lat": 24.41,
    "lng": 54.53,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 6,
      "affluent": 7,
      "ev_signals": 5,
      "competitor": 6
    },
    "weighted_score": 6.2,
    "grade": "yellow",
    "notes": "Near The Villa community - premium residential. Good income levels.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS241",
    "name": "Nadd Al Hamar",
    "area": "E311",
    "lat": 25.173,
    "lng": 55.375,
    "emirate": "Dubai",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 6,
      "ev_signals": 5,
      "competitor": 6
    },
    "weighted_score": 6.2,
    "grade": "yellow",
    "notes": "E311 Nadd Al Hamar. Good highway access. Residential nearby.",
    "category": "Dubai"
  },
  {
    "ss": "SS532",
    "name": "Al Jafiliya",
    "area": "Al Satwa",
    "lat": 25.23,
    "lng": 55.295,
    "emirate": "Dubai",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 6,
      "car_wash": 6,
      "affluent": 6,
      "ev_signals": 5,
      "competitor": 5
    },
    "weighted_score": 6.2,
    "grade": "yellow",
    "notes": "Central Dubai. Dense mixed-use. Very high footfall.",
    "category": "Dubai"
  },
  {
    "ss": "SS225",
    "name": "Al Khail Gate",
    "area": "Al Quoz Industrial",
    "lat": 25.14,
    "lng": 55.235,
    "emirate": "Dubai",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 6,
      "car_wash": 7,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 5
    },
    "weighted_score": 6.1,
    "grade": "yellow",
    "notes": "Al Quoz - major auto service hub. High car care demand. Strong footfall.",
    "category": "Dubai"
  },
  {
    "ss": "SS376",
    "name": "Al Khawaneej 2",
    "area": "D50",
    "lat": 25.245,
    "lng": 55.455,
    "emirate": "Dubai",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 5,
      "affluent": 7,
      "ev_signals": 6,
      "competitor": 7
    },
    "weighted_score": 6.1,
    "grade": "yellow",
    "notes": "Al Khawaneej villa area. Premium residential.",
    "category": "Dubai"
  },
  {
    "ss": "SS529",
    "name": "Al Quoz",
    "area": "Al Quoz 3",
    "lat": 25.145,
    "lng": 55.22,
    "emirate": "Dubai",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 6,
      "car_wash": 8,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 4
    },
    "weighted_score": 6.1,
    "grade": "yellow",
    "notes": "Al Quoz - UAE's largest auto services cluster. Massive car care demand. Heavy competition but proven market.",
    "category": "Dubai"
  },
  {
    "ss": "SS530",
    "name": "Muhaisnah",
    "area": "Sheikh Mohamed Bin Zayed / Al Qusais",
    "lat": 25.27,
    "lng": 55.395,
    "emirate": "Dubai",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 7,
      "car_wash": 6,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 5
    },
    "weighted_score": 6.1,
    "grade": "yellow",
    "notes": "Muhaisnah dense residential. Near Al Qusais. High footfall.",
    "category": "Dubai"
  },
  {
    "ss": "SS229",
    "name": "Sustainable City",
    "area": "Al Waha",
    "lat": 25.045,
    "lng": 55.31,
    "emirate": "Dubai",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 4,
      "car_wash": 4,
      "affluent": 7,
      "ev_signals": 10,
      "competitor": 8
    },
    "weighted_score": 6.0,
    "grade": "yellow",
    "notes": "Sustainable City - highest EV density in UAE. Premium eco-community. Lower traffic but EV goldmine.",
    "category": "Dubai"
  },
  {
    "ss": "SS240",
    "name": "Hessa",
    "area": "Nadd Hessa",
    "lat": 25.115,
    "lng": 55.235,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 6,
      "ev_signals": 5,
      "competitor": 6
    },
    "weighted_score": 6.0,
    "grade": "yellow",
    "notes": "Near Dubai Hills/Barsha. Residential corridor.",
    "category": "Dubai"
  },
  {
    "ss": "SS174",
    "name": "Al Salama",
    "area": "Ittihad Road",
    "lat": 25.32,
    "lng": 55.395,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 7,
      "car_wash": 6,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 5
    },
    "weighted_score": 6.0,
    "grade": "yellow",
    "notes": "E11 Ittihad Road - one of the busiest Sharjah corridors. Near Safeer Mall.",
    "category": "Sharjah"
  },
  {
    "ss": "SS183",
    "name": "Al Taawan",
    "area": "Al Tawan Street",
    "lat": 25.305,
    "lng": 55.375,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 7,
      "car_wash": 6,
      "affluent": 6,
      "ev_signals": 4,
      "competitor": 5
    },
    "weighted_score": 6.0,
    "grade": "yellow",
    "notes": "Al Taawun - premium Sharjah area near Sahara Centre. Higher income.",
    "category": "Sharjah"
  },
  {
    "ss": "SS193",
    "name": "Al Dar",
    "area": "Al Tawoon",
    "lat": 25.308,
    "lng": 55.378,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 7,
      "car_wash": 6,
      "affluent": 6,
      "ev_signals": 4,
      "competitor": 5
    },
    "weighted_score": 6.0,
    "grade": "yellow",
    "notes": "Al Taawun area. Same premium profile.",
    "category": "Sharjah"
  },
  {
    "ss": "SS165",
    "name": "Qutouf",
    "area": "Shahama/Rahba",
    "lat": 24.485,
    "lng": 54.722,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 7,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 7
    },
    "weighted_score": 5.9,
    "grade": "yellow",
    "notes": "Near E11 corridor. Residential area with moderate density. Growing population. Some competition.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS147",
    "name": "Al Ramla",
    "area": "Shakbout City",
    "lat": 24.412,
    "lng": 54.596,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 6,
      "ev_signals": 4,
      "competitor": 6
    },
    "weighted_score": 5.9,
    "grade": "yellow",
    "notes": "Shakbout City - established residential. Good income levels. Growing car ownership.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS170",
    "name": "Al Falah South",
    "area": "New Al Falah",
    "lat": 24.385,
    "lng": 54.61,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 6,
      "ev_signals": 4,
      "competitor": 6
    },
    "weighted_score": 5.9,
    "grade": "yellow",
    "notes": "Al Falah new residential community. Family-oriented. Good income.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS314",
    "name": "Al Falah West",
    "area": "Al Falah",
    "lat": 24.395,
    "lng": 54.6,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 6,
      "ev_signals": 4,
      "competitor": 6
    },
    "weighted_score": 5.9,
    "grade": "yellow",
    "notes": "Al Falah established residential. Similar profile to South.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS198",
    "name": "Al Deyar",
    "area": "Al Mejaz-2",
    "lat": 25.338,
    "lng": 55.39,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 6,
      "affluent": 6,
      "ev_signals": 4,
      "competitor": 5
    },
    "weighted_score": 5.9,
    "grade": "yellow",
    "notes": "Al Mejaz - established area near Buhaira Corniche. Good catchment.",
    "category": "Sharjah"
  },
  {
    "ss": "SS568",
    "name": "Al Jameat",
    "area": "University Road, Muweilah",
    "lat": 25.34,
    "lng": 55.46,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 6,
      "ev_signals": 4,
      "competitor": 6
    },
    "weighted_score": 5.9,
    "grade": "yellow",
    "notes": "University City / Muweilah. Growing community. Student + residential.",
    "category": "Sharjah"
  },
  {
    "ss": "SS877",
    "name": "Muwaileh",
    "area": "Zuraina-1",
    "lat": 25.338,
    "lng": 55.458,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 6,
      "ev_signals": 4,
      "competitor": 6
    },
    "weighted_score": 5.9,
    "grade": "yellow",
    "notes": "Muwaileh - one of Sharjah's fastest growing areas. New developments.",
    "category": "Sharjah"
  },
  {
    "ss": "SS861",
    "name": "Shahama",
    "area": "Dubai-Abu Dhabi Road",
    "lat": 24.53,
    "lng": 54.72,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 7,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.8,
    "grade": "yellow",
    "notes": "E11 near Shahama residential. Growing area. Multiple fuel stations.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS954",
    "name": "Al Shahama",
    "area": "Dubai-Abu Dhabi Road",
    "lat": 24.535,
    "lng": 54.715,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 7,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.8,
    "grade": "yellow",
    "notes": "E11 Shahama area. Residential growth. Good visibility.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS156",
    "name": "Shamkha Community 2",
    "area": "Al Shamkha",
    "lat": 24.4,
    "lng": 54.7,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 7,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 6
    },
    "weighted_score": 5.8,
    "grade": "yellow",
    "notes": "Growing Al Shamkha residential. Near Motor World hub.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS423",
    "name": "Al Shamkha",
    "area": "Al Shamkha",
    "lat": 24.398,
    "lng": 54.705,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 7,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 6
    },
    "weighted_score": 5.8,
    "grade": "yellow",
    "notes": "Central Al Shamkha. Growing suburb with good services.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS522",
    "name": "Mouzaz",
    "area": "Baniyas-Dubai Road",
    "lat": 24.51,
    "lng": 54.67,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 7
    },
    "weighted_score": 5.8,
    "grade": "yellow",
    "notes": "Baniyas corridor. Highway traffic with residential catchment.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS196",
    "name": "Al Shorouq-2",
    "area": "Al Tawan",
    "lat": 25.312,
    "lng": 55.38,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 6,
      "ev_signals": 4,
      "competitor": 5
    },
    "weighted_score": 5.8,
    "grade": "yellow",
    "notes": "Al Tawan residential. Good income area.",
    "category": "Sharjah"
  },
  {
    "ss": "SS216",
    "name": "Wadi Al Amardi East",
    "area": "Tripoli Street",
    "lat": 25.165,
    "lng": 55.41,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 6
    },
    "weighted_score": 5.7,
    "grade": "yellow",
    "notes": "Residential area near Mirdif/Al Warqa. Moderate density.",
    "category": "Dubai"
  },
  {
    "ss": "SS217",
    "name": "Wadi Al Amardi West",
    "area": "Wadi Al Amardi",
    "lat": 25.16,
    "lng": 55.405,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 6
    },
    "weighted_score": 5.7,
    "grade": "yellow",
    "notes": "Same corridor as East. Residential catchment.",
    "category": "Dubai"
  },
  {
    "ss": "SS356",
    "name": "Al Ghadeer",
    "area": "Algeria Street",
    "lat": 25.265,
    "lng": 55.36,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 6
    },
    "weighted_score": 5.7,
    "grade": "yellow",
    "notes": "Hor Al Anz / Deira. Dense residential. Good footfall.",
    "category": "Dubai"
  },
  {
    "ss": "SS177",
    "name": "Al Manarah",
    "area": "University Road",
    "lat": 25.345,
    "lng": 55.455,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 6
    },
    "weighted_score": 5.7,
    "grade": "yellow",
    "notes": "University City area. Student/residential mix. Good footfall.",
    "category": "Sharjah"
  },
  {
    "ss": "SS887",
    "name": "Samha South East",
    "area": "Abu Dhabi-Dubai Road",
    "lat": 24.445,
    "lng": 54.735,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 7
    },
    "weighted_score": 5.6,
    "grade": "yellow",
    "notes": "E11 corridor near Al Samha residential. Growing community. Moderate traffic.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS888",
    "name": "Samha South West",
    "area": "Dubai-Abu Dhabi Road",
    "lat": 24.447,
    "lng": 54.73,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 7
    },
    "weighted_score": 5.6,
    "grade": "yellow",
    "notes": "Mirror of South East. Same corridor, opposite direction.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS117",
    "name": "New Shahama",
    "area": "Al Shahama",
    "lat": 24.54,
    "lng": 54.7,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.6,
    "grade": "yellow",
    "notes": "Growing residential in New Shahama. Good highway access.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS538",
    "name": "Dubai Studio City",
    "area": "Dubai Studio City",
    "lat": 25.04,
    "lng": 55.24,
    "emirate": "Dubai",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 4,
      "car_wash": 4,
      "affluent": 6,
      "ev_signals": 5,
      "competitor": 8
    },
    "weighted_score": 5.6,
    "grade": "yellow",
    "notes": "Dubai Studio City. Mixed use. Developing. Lower competition.",
    "category": "Dubai"
  },
  {
    "ss": "SS175",
    "name": "Al Wasit-2",
    "area": "Wasit Street, Al Ramtha",
    "lat": 25.325,
    "lng": 55.44,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.6,
    "grade": "yellow",
    "notes": "Wasit residential area. Growing community.",
    "category": "Sharjah"
  },
  {
    "ss": "SS179",
    "name": "Al Manakh",
    "area": "Al Qasimi Street",
    "lat": 25.355,
    "lng": 55.395,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.6,
    "grade": "yellow",
    "notes": "Central Sharjah commercial area.",
    "category": "Sharjah"
  },
  {
    "ss": "SS180",
    "name": "Al Mahaskar",
    "area": "Sheikh Khalifa Bin Zayed Road",
    "lat": 25.37,
    "lng": 55.42,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.6,
    "grade": "yellow",
    "notes": "SKB Zayed Road corridor. Good highway access.",
    "category": "Sharjah"
  },
  {
    "ss": "SS192",
    "name": "Al Arouba",
    "area": "Al Buteena",
    "lat": 25.355,
    "lng": 55.4,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.6,
    "grade": "yellow",
    "notes": "Central Sharjah. Dense mixed-use.",
    "category": "Sharjah"
  },
  {
    "ss": "SS274",
    "name": "Sultan Al Ketbi",
    "area": "Al Ittihad Street",
    "lat": 25.37,
    "lng": 55.42,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.6,
    "grade": "yellow",
    "notes": "Ittihad Street commercial corridor.",
    "category": "Sharjah"
  },
  {
    "ss": "SS579",
    "name": "Khalidiya",
    "area": "Al Khalidiya",
    "lat": 25.345,
    "lng": 55.395,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.6,
    "grade": "yellow",
    "notes": "Khalidiya residential.",
    "category": "Sharjah"
  },
  {
    "ss": "SS799",
    "name": "Samnan",
    "area": "Samnan",
    "lat": 25.365,
    "lng": 55.398,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.6,
    "grade": "yellow",
    "notes": "Samnan central area.",
    "category": "Sharjah"
  },
  {
    "ss": "SS662",
    "name": "Khalifa Ind. City",
    "area": "Dubai-Abu Dhabi Highway",
    "lat": 24.55,
    "lng": 54.94,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 6,
      "car_wash": 3,
      "affluent": 3,
      "ev_signals": 3,
      "competitor": 8
    },
    "weighted_score": 5.5,
    "grade": "yellow",
    "notes": "Major highway location. High pass-through traffic. Industrial zone - limited residential but high vehicle counts.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS242",
    "name": "Madinat Hind2",
    "area": "E611",
    "lat": 25.105,
    "lng": 55.355,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 7
    },
    "weighted_score": 5.5,
    "grade": "yellow",
    "notes": "Emirates Road E611. Pass-through traffic.",
    "category": "Dubai"
  },
  {
    "ss": "SS246",
    "name": "Al Rowaiyah 3",
    "area": "Emirates Road E611",
    "lat": 25.13,
    "lng": 55.41,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 7
    },
    "weighted_score": 5.5,
    "grade": "yellow",
    "notes": "E611 corridor. Transit traffic.",
    "category": "Dubai"
  },
  {
    "ss": "SS247",
    "name": "Al Rowaiyah1",
    "area": "E611 Emirates Road",
    "lat": 25.135,
    "lng": 55.395,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 7
    },
    "weighted_score": 5.5,
    "grade": "yellow",
    "notes": "E611 corridor. Similar to Rowaiyah 3.",
    "category": "Dubai"
  },
  {
    "ss": "SS379",
    "name": "Al Ruwayyah",
    "area": "Dubai-Al Ain Road",
    "lat": 25.125,
    "lng": 55.425,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 7
    },
    "weighted_score": 5.5,
    "grade": "yellow",
    "notes": "E66 Dubai-Al Ain. Transit traffic.",
    "category": "Dubai"
  },
  {
    "ss": "SS520",
    "name": "Dubai Investment Park",
    "area": "Sheikh Mohammed Bin Zayed Rd",
    "lat": 25.01,
    "lng": 55.175,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 4,
      "competitor": 7
    },
    "weighted_score": 5.5,
    "grade": "yellow",
    "notes": "DIP - mixed industrial/residential. Growing area.",
    "category": "Dubai"
  },
  {
    "ss": "SS329",
    "name": "Production City",
    "area": "Dubai Production City",
    "lat": 25.045,
    "lng": 55.185,
    "emirate": "Dubai",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 5,
      "competitor": 7
    },
    "weighted_score": 5.4,
    "grade": "yellow",
    "notes": "Production City. Mixed residential/commercial. Moderate demand.",
    "category": "Dubai"
  },
  {
    "ss": "SS666",
    "name": "Al Jurf",
    "area": "Abu Dhabi-Dubai Highway",
    "lat": 24.54,
    "lng": 54.92,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 8,
      "fuel_retailers": 6,
      "car_wash": 3,
      "affluent": 3,
      "ev_signals": 2,
      "competitor": 8
    },
    "weighted_score": 5.3,
    "grade": "yellow",
    "notes": "Highway corridor between AD and Dubai. Transit traffic. Limited residential catchment.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS164",
    "name": "Al Bahia North",
    "area": "Al Bahia",
    "lat": 24.536,
    "lng": 54.64,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 6,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 7
    },
    "weighted_score": 5.3,
    "grade": "yellow",
    "notes": "Al Bahia residential. Moderate density. Growing community.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS312",
    "name": "Mouzaz South",
    "area": "Al Shahama",
    "lat": 24.52,
    "lng": 54.675,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 6,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 7
    },
    "weighted_score": 5.3,
    "grade": "yellow",
    "notes": "Shahama area. Moderate profile.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS612",
    "name": "Al Rahba",
    "area": "Al Rahba / Old Rahba",
    "lat": 24.495,
    "lng": 54.73,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 6,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 7
    },
    "weighted_score": 5.3,
    "grade": "yellow",
    "notes": "Al Rahba residential. Moderate density.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS534",
    "name": "Remraam",
    "area": "Remraam",
    "lat": 25.035,
    "lng": 55.265,
    "emirate": "Dubai",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 4,
      "car_wash": 4,
      "affluent": 6,
      "ev_signals": 5,
      "competitor": 8
    },
    "weighted_score": 5.3,
    "grade": "yellow",
    "notes": "Remraam community. Growing. Limited services = opportunity.",
    "category": "Dubai"
  },
  {
    "ss": "SS723",
    "name": "Seih Al Sedirah East",
    "area": "MBZ",
    "lat": 24.515,
    "lng": 54.855,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 3,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 8
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "MBZ corridor. Highway pass-through traffic. Limited local residential.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS724",
    "name": "Seih Al Sedirah West",
    "area": "MBZ",
    "lat": 24.51,
    "lng": 54.84,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 3,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 8
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "MBZ corridor. Same profile as East - highway traffic dominant.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS141",
    "name": "Al Riyadh City",
    "area": "Al Khayr",
    "lat": 24.385,
    "lng": 54.64,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 7
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "Al Riyadh City residential community. Developing area.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS166",
    "name": "Al Widayhi",
    "area": "Al Bahia",
    "lat": 24.52,
    "lng": 54.63,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 7
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "Al Bahia area. Similar profile to Al Bahia North.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS313",
    "name": "Bawabat Al Riyadh",
    "area": "Al Riyadh City",
    "lat": 24.378,
    "lng": 54.635,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 7
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "Gateway to Al Riyadh City. Developing.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS231",
    "name": "Al Aaber",
    "area": "Al Aweer",
    "lat": 25.175,
    "lng": 55.44,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "Al Aweer market area. Commercial traffic.",
    "category": "Dubai"
  },
  {
    "ss": "SS531",
    "name": "Al Qusais Industrial",
    "area": "Al Qusais Industrial",
    "lat": 25.27,
    "lng": 55.38,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 5
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "Industrial/commercial area. Auto services hub.",
    "category": "Dubai"
  },
  {
    "ss": "SS181",
    "name": "Minerva",
    "area": "Al Qadisiya",
    "lat": 25.36,
    "lng": 55.44,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "Al Qadisiya residential. Moderate density.",
    "category": "Sharjah"
  },
  {
    "ss": "SS238",
    "name": "Al Rahmania",
    "area": "Al Rahmania",
    "lat": 25.37,
    "lng": 55.48,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 7
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "Al Rahmania residential. Growing area.",
    "category": "Sharjah"
  },
  {
    "ss": "SS330",
    "name": "Hamriya Club",
    "area": "Emirates Road E611",
    "lat": 25.39,
    "lng": 55.455,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 7
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "E611 Emirates Road. Highway pass-through.",
    "category": "Sharjah"
  },
  {
    "ss": "SS331",
    "name": "Al Zubair",
    "area": "Emirates Road E611",
    "lat": 25.395,
    "lng": 55.46,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 7
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "E611 corridor. Same profile as Hamriya Club.",
    "category": "Sharjah"
  },
  {
    "ss": "SS498",
    "name": "Al Qassimiya",
    "area": "Al Qassimiya",
    "lat": 25.352,
    "lng": 55.385,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 5
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "Central Sharjah. Dense residential.",
    "category": "Sharjah"
  },
  {
    "ss": "SS582",
    "name": "Green Belt",
    "area": "Industrial Area 2",
    "lat": 25.33,
    "lng": 55.41,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 5,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 5
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "Industrial area. Auto services present.",
    "category": "Sharjah"
  },
  {
    "ss": "SS657",
    "name": "Wasit",
    "area": "Al Huma",
    "lat": 25.328,
    "lng": 55.442,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "Wasit/Al Huma area. Growing residential.",
    "category": "Sharjah"
  },
  {
    "ss": "SS769",
    "name": "Al Shahba'",
    "area": "Al Shahba",
    "lat": 25.365,
    "lng": 55.445,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "Al Shahba residential.",
    "category": "Sharjah"
  },
  {
    "ss": "SS783",
    "name": "Maysaloon",
    "area": "Maysaloon",
    "lat": 25.364,
    "lng": 55.412,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "Maysaloon residential.",
    "category": "Sharjah"
  },
  {
    "ss": "SS828",
    "name": "Al Ramtha",
    "area": "Al Ramtha",
    "lat": 25.328,
    "lng": 55.445,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 5,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.2,
    "grade": "yellow",
    "notes": "Al Ramtha residential. Moderate profile.",
    "category": "Sharjah"
  },
  {
    "ss": "SS811",
    "name": "Ghantoot",
    "area": "Dubai-Abu Dhabi Road",
    "lat": 25.02,
    "lng": 55.125,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 4,
      "car_wash": 2,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 9
    },
    "weighted_score": 5.1,
    "grade": "yellow",
    "notes": "E11 border area between Abu Dhabi and Dubai. High pass-through. Limited local catchment.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS210",
    "name": "Al Aweer",
    "area": "Al Awwer Rd",
    "lat": 25.16,
    "lng": 55.47,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.1,
    "grade": "yellow",
    "notes": "Al Aweer commercial/wholesale area. High daytime traffic.",
    "category": "Dubai"
  },
  {
    "ss": "SS194",
    "name": "Al Ittihad",
    "area": "Industrial Area 1",
    "lat": 25.34,
    "lng": 55.415,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 6,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 4
    },
    "weighted_score": 5.1,
    "grade": "yellow",
    "notes": "Sharjah Industrial. Major auto services cluster. High car care demand.",
    "category": "Sharjah"
  },
  {
    "ss": "SS197",
    "name": "Al Rawdha",
    "area": "Third Industrial Street",
    "lat": 25.335,
    "lng": 55.42,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 6,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 4
    },
    "weighted_score": 5.1,
    "grade": "yellow",
    "notes": "Industrial zone with auto services. Strong demand.",
    "category": "Sharjah"
  },
  {
    "ss": "SS567",
    "name": "Al Burhan",
    "area": "Industrial Area 3",
    "lat": 25.335,
    "lng": 55.405,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 6,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 4
    },
    "weighted_score": 5.1,
    "grade": "yellow",
    "notes": "Industrial area. Auto services cluster.",
    "category": "Sharjah"
  },
  {
    "ss": "SS569",
    "name": "Darari (Jarwan)",
    "area": "3rd Industrial Area",
    "lat": 25.332,
    "lng": 55.42,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 6,
      "car_wash": 6,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 4
    },
    "weighted_score": 5.1,
    "grade": "yellow",
    "notes": "Industrial area. Auto services hub.",
    "category": "Sharjah"
  },
  {
    "ss": "SS127",
    "name": "Al Asayel",
    "area": "Al Asayel St",
    "lat": 25.02,
    "lng": 55.135,
    "emirate": "Dubai",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 7
    },
    "weighted_score": 5.0,
    "grade": "yellow",
    "notes": "Near Jebel Ali. Mixed use area.",
    "category": "Dubai"
  },
  {
    "ss": "SS383",
    "name": "Al Warsan",
    "area": "International City",
    "lat": 25.16,
    "lng": 55.41,
    "emirate": "Dubai",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 5,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.0,
    "grade": "yellow",
    "notes": "International City / Al Warsan. Dense budget residential. High volume, lower spend.",
    "category": "Dubai"
  },
  {
    "ss": "SS761",
    "name": "Emirates Road",
    "area": "Industrial 11",
    "lat": 25.31,
    "lng": 55.43,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 6
    },
    "weighted_score": 5.0,
    "grade": "yellow",
    "notes": "Industrial zone near Emirates Road.",
    "category": "Sharjah"
  },
  {
    "ss": "SS872",
    "name": "Al Senaeya",
    "area": "Industrial 3",
    "lat": 25.336,
    "lng": 55.415,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 5,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 5
    },
    "weighted_score": 5.0,
    "grade": "yellow",
    "notes": "Industrial area 3.",
    "category": "Sharjah"
  },
  {
    "ss": "SS876",
    "name": "Al Matar",
    "area": "Zuraina-1",
    "lat": 25.34,
    "lng": 55.455,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 5.0,
    "grade": "yellow",
    "notes": "Muweilah/Zuraina area. Growing.",
    "category": "Sharjah"
  },
  {
    "ss": "SS686",
    "name": "Al Mearad",
    "area": "Abu Dhabi-Sweihan Road",
    "lat": 24.405,
    "lng": 54.88,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 3,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 8
    },
    "weighted_score": 4.9,
    "grade": "red",
    "notes": "Sweihan road corridor. Moderate traffic. Growing suburbs. Low competition.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS195",
    "name": "Al Rafia",
    "area": "Sharjah-Dhaid Road",
    "lat": 25.365,
    "lng": 55.47,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 7
    },
    "weighted_score": 4.9,
    "grade": "red",
    "notes": "Dhaid Road corridor. Moderate traffic.",
    "category": "Sharjah"
  },
  {
    "ss": "SS126",
    "name": "Jabal Ali Industrial 1",
    "area": "Jabal Ali Industrial",
    "lat": 25.015,
    "lng": 55.095,
    "emirate": "Dubai",
    "scores": {
      "traffic": 7,
      "fuel_retailers": 5,
      "car_wash": 3,
      "affluent": 3,
      "ev_signals": 2,
      "competitor": 7
    },
    "weighted_score": 4.8,
    "grade": "red",
    "notes": "Industrial zone. Commercial vehicle dominant.",
    "category": "Dubai"
  },
  {
    "ss": "SS511",
    "name": "Al Seyouh",
    "area": "Siyouh Suburb",
    "lat": 25.33,
    "lng": 55.49,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 4,
      "car_wash": 3,
      "affluent": 5,
      "ev_signals": 3,
      "competitor": 8
    },
    "weighted_score": 4.8,
    "grade": "red",
    "notes": "Al Seyouh - developing suburban area.",
    "category": "Sharjah"
  },
  {
    "ss": "SS570",
    "name": "Al Madar",
    "area": "Industrial Area 4",
    "lat": 25.338,
    "lng": 55.412,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 5,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 5
    },
    "weighted_score": 4.8,
    "grade": "red",
    "notes": "Industrial zone. Moderate auto demand.",
    "category": "Sharjah"
  },
  {
    "ss": "SS869",
    "name": "Al Madina Al Jameya",
    "area": "Industrial 10",
    "lat": 25.328,
    "lng": 55.42,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 5,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 5
    },
    "weighted_score": 4.8,
    "grade": "red",
    "notes": "Industrial zone.",
    "category": "Sharjah"
  },
  {
    "ss": "SS243",
    "name": "KIZAD",
    "area": "Al Warqa St / KIZAD",
    "lat": 24.57,
    "lng": 54.78,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 3,
      "affluent": 3,
      "ev_signals": 2,
      "competitor": 8
    },
    "weighted_score": 4.7,
    "grade": "red",
    "notes": "Industrial zone - KIZAD. High commercial/truck traffic but low residential. Low car care demand. Low competition advantage.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS519",
    "name": "Al Muqbra (Al Qusais)",
    "area": "Sheikh Mohammed Bin Zayed Rd",
    "lat": 25.26,
    "lng": 55.385,
    "emirate": "Dubai",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Dubai"
  },
  {
    "ss": "SS234",
    "name": "Al Yafer",
    "area": "Sharjah",
    "lat": 25.35,
    "lng": 55.45,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS237",
    "name": "Ardh Al Ma'ahed",
    "area": "Institute Land",
    "lat": 25.34,
    "lng": 55.405,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS276",
    "name": "Thawi Musnad",
    "area": "Al Dhaid Rd",
    "lat": 25.37,
    "lng": 55.49,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS278",
    "name": "Al Shua'a",
    "area": "Industrial Road",
    "lat": 25.335,
    "lng": 55.41,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS279",
    "name": "Al Nud",
    "area": "Sheikh Saqr Bin Khalid Al Qasimi St",
    "lat": 25.35,
    "lng": 55.4,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS456",
    "name": "Suhaila",
    "area": "Suhaila, Sharjah",
    "lat": 25.385,
    "lng": 55.435,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS560",
    "name": "Al Aabar",
    "area": "Al Tarfah",
    "lat": 25.365,
    "lng": 55.435,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS564",
    "name": "Al Sharjah",
    "area": "Al Ruqaa Al Hamra",
    "lat": 25.355,
    "lng": 55.41,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS565",
    "name": "Al Qala-2",
    "area": "Al Tay",
    "lat": 25.345,
    "lng": 55.46,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS571",
    "name": "Kaser Al Amwaj",
    "area": "Al Fisht",
    "lat": 25.375,
    "lng": 55.39,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS572",
    "name": "Al Majarah",
    "area": "Samnan",
    "lat": 25.36,
    "lng": 55.395,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS574",
    "name": "Al Shaab-2",
    "area": "Al Hazannah",
    "lat": 25.362,
    "lng": 55.405,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS575",
    "name": "Sharjah Club",
    "area": "Industrial Area 5",
    "lat": 25.33,
    "lng": 55.405,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS576",
    "name": "Al Nasseriya",
    "area": "Al Nasseriya",
    "lat": 25.358,
    "lng": 55.415,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS577",
    "name": "Al Ghafiya",
    "area": "Um Khanoor",
    "lat": 25.365,
    "lng": 55.43,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS583",
    "name": "Dasman",
    "area": "Dasman",
    "lat": 25.358,
    "lng": 55.388,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS584",
    "name": "Al Yarmouk-2",
    "area": "Al Mirqab",
    "lat": 25.36,
    "lng": 55.405,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS585",
    "name": "Emirates",
    "area": "Industrial Area 4",
    "lat": 25.332,
    "lng": 55.415,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS586",
    "name": "Al Nakheel",
    "area": "Al Khuzamiya",
    "lat": 25.36,
    "lng": 55.42,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS592",
    "name": "Al Mussalla",
    "area": "Al Mussalla",
    "lat": 25.368,
    "lng": 55.402,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS593",
    "name": "Maisaloon 2",
    "area": "Yarmouk",
    "lat": 25.362,
    "lng": 55.41,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS628",
    "name": "Al Madayen",
    "area": "Industrial Area",
    "lat": 25.33,
    "lng": 55.418,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS629",
    "name": "Mughaidar",
    "area": "Mughaidar",
    "lat": 25.345,
    "lng": 55.408,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS631",
    "name": "Al Tahmeed",
    "area": "Al Thameed",
    "lat": 25.32,
    "lng": 55.395,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS632",
    "name": "Al Riqaibah",
    "area": "Al Syouh Suburb",
    "lat": 25.33,
    "lng": 55.48,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS634",
    "name": "Al Nasma",
    "area": "Siyouh Suburb",
    "lat": 25.325,
    "lng": 55.475,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS647",
    "name": "Al Talaa",
    "area": "Al Talaa",
    "lat": 25.365,
    "lng": 55.425,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS649",
    "name": "Al Jawza",
    "area": "Al Telal",
    "lat": 25.34,
    "lng": 55.445,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS651",
    "name": "Al-Zahya",
    "area": "Sheikh Mohammed bin Zayed Rd E311",
    "lat": 25.378,
    "lng": 55.465,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS652",
    "name": "Al Gubaiba",
    "area": "Maliha-Fujairah Road",
    "lat": 25.36,
    "lng": 55.5,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS654",
    "name": "Sharjah Corniche",
    "area": "Refaah",
    "lat": 25.37,
    "lng": 55.395,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS655",
    "name": "Al Yarmook",
    "area": "Yarmouk",
    "lat": 25.36,
    "lng": 55.408,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS656",
    "name": "Tayba",
    "area": "Maliha",
    "lat": 25.355,
    "lng": 55.475,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS722",
    "name": "Al Meydan",
    "area": "Al Soor",
    "lat": 25.36,
    "lng": 55.39,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS770",
    "name": "Al Faisal",
    "area": "Al Mazaj",
    "lat": 25.348,
    "lng": 55.405,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS771",
    "name": "Al Mirqab",
    "area": "Al Mirqab",
    "lat": 25.362,
    "lng": 55.408,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS840",
    "name": "Al Ishraq",
    "area": "Al Rafaa",
    "lat": 25.36,
    "lng": 55.396,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS880",
    "name": "Al Quoz",
    "area": "Al Quoz",
    "lat": 25.35,
    "lng": 55.435,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 5,
      "car_wash": 4,
      "affluent": 4,
      "ev_signals": 3,
      "competitor": 6
    },
    "weighted_score": 4.6,
    "grade": "red",
    "notes": "Default profile - area not individually assessed",
    "category": "Sharjah"
  },
  {
    "ss": "SS614",
    "name": "Telal Sweihan",
    "area": "Sweihan Road",
    "lat": 24.47,
    "lng": 55.35,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 4,
      "car_wash": 2,
      "affluent": 4,
      "ev_signals": 2,
      "competitor": 9
    },
    "weighted_score": 4.5,
    "grade": "red",
    "notes": "Semi-rural Sweihan corridor. Lower traffic density. Limited services = low competition. Limited affluent catchment.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS975",
    "name": "Al Khatam",
    "area": "Abu Dhabi-Al Ain Road",
    "lat": 24.38,
    "lng": 55.12,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 4,
      "car_wash": 2,
      "affluent": 3,
      "ev_signals": 2,
      "competitor": 9
    },
    "weighted_score": 4.5,
    "grade": "red",
    "notes": "E22 Abu Dhabi-Al Ain highway. Transit traffic. Limited residential.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS462",
    "name": "Jebal Ali Industrial 2",
    "area": "Mina Jebel Ali",
    "lat": 25.03,
    "lng": 55.08,
    "emirate": "Dubai",
    "scores": {
      "traffic": 6,
      "fuel_retailers": 5,
      "car_wash": 3,
      "affluent": 3,
      "ev_signals": 2,
      "competitor": 7
    },
    "weighted_score": 4.5,
    "grade": "red",
    "notes": "Industrial zone. Commercial traffic.",
    "category": "Dubai"
  },
  {
    "ss": "SS718",
    "name": "Tawazun",
    "area": "Ajban",
    "lat": 24.54,
    "lng": 54.86,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 4,
      "car_wash": 2,
      "affluent": 3,
      "ev_signals": 2,
      "competitor": 9
    },
    "weighted_score": 4.3,
    "grade": "red",
    "notes": "Military/semi-rural area near Ajban. Low density. Very low competition.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS916",
    "name": "Al Hilila",
    "area": "ADIA-Sweihan Road",
    "lat": 24.405,
    "lng": 55.07,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 4,
      "car_wash": 2,
      "affluent": 3,
      "ev_signals": 2,
      "competitor": 9
    },
    "weighted_score": 4.3,
    "grade": "red",
    "notes": "Semi-rural between Abu Dhabi and Sweihan. Low density.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS334",
    "name": "Al Marmoom",
    "area": "Jebel Ali-Lehbab Rd",
    "lat": 25.0,
    "lng": 55.3,
    "emirate": "Dubai",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 3,
      "car_wash": 2,
      "affluent": 3,
      "ev_signals": 2,
      "competitor": 9
    },
    "weighted_score": 4.2,
    "grade": "red",
    "notes": "Remote desert area. Low traffic. Minimal services.",
    "category": "Dubai"
  },
  {
    "ss": "SS689",
    "name": "Kizad",
    "area": "Khalifa Port Road",
    "lat": 24.58,
    "lng": 54.65,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 4,
      "car_wash": 2,
      "affluent": 2,
      "ev_signals": 2,
      "competitor": 9
    },
    "weighted_score": 4.1,
    "grade": "red",
    "notes": "Port/industrial area. Commercial traffic dominant. Very low residential.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS275",
    "name": "Al Sajaa Industrial",
    "area": "Al Sajaa Industrial",
    "lat": 25.37,
    "lng": 55.5,
    "emirate": "Sharjah",
    "scores": {
      "traffic": 5,
      "fuel_retailers": 4,
      "car_wash": 3,
      "affluent": 3,
      "ev_signals": 1,
      "competitor": 6
    },
    "weighted_score": 3.9,
    "grade": "red",
    "notes": "Remote industrial. Low residential.",
    "category": "Sharjah"
  },
  {
    "ss": "SS690",
    "name": "Taweela Fisherman",
    "area": "Khalifa Port Road",
    "lat": 24.61,
    "lng": 54.64,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 4,
      "fuel_retailers": 3,
      "car_wash": 2,
      "affluent": 2,
      "ev_signals": 2,
      "competitor": 9
    },
    "weighted_score": 3.7,
    "grade": "red",
    "notes": "Remote port area. Low traffic. Very limited services.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS873",
    "name": "Mina Al Sader",
    "area": "Island Port, Taweelah",
    "lat": 24.61,
    "lng": 54.63,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 4,
      "fuel_retailers": 3,
      "car_wash": 2,
      "affluent": 2,
      "ev_signals": 2,
      "competitor": 9
    },
    "weighted_score": 3.7,
    "grade": "red",
    "notes": "Remote port/industrial. Specialized market.",
    "category": "Abu Dhabi"
  },
  {
    "ss": "SS778",
    "name": "Military Base",
    "area": "Sweihan St",
    "lat": 24.47,
    "lng": 55.42,
    "emirate": "Abu Dhabi",
    "scores": {
      "traffic": 4,
      "fuel_retailers": 3,
      "car_wash": 1,
      "affluent": 2,
      "ev_signals": 1,
      "competitor": 10
    },
    "weighted_score": 3.6,
    "grade": "red",
    "notes": "Remote military area. Very low civilian traffic. Zero competition but minimal demand.",
    "category": "Abu Dhabi"
  }
];