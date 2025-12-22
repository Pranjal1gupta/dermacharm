export const treatmentSlides = [
  {
    id: 'laser-resurfacing',
    caption: 'Advanced laser resurfacing',
    detail: 'Precision laser treatments for skin rejuvenation and pigment correction',
    src: 'https://images.unsplash.com/photo-1713085085470-fba013d67e65?fm=jpg&q=80&w=800&ixlib=rb-4.1.0',
  },
  {
    id: 'hair-restoration',
    caption: 'Hair restoration therapy',
    detail: 'PRP and GFC therapies combined with advanced growth factor treatments',
    src: 'https://images.unsplash.com/photo-1742280159636-3a06652ac9d9?fm=jpg&q=80&w=800&ixlib=rb-4.1.0',
  },
  {
    id: 'scalp-treatment',
    caption: 'Scalp treatment protocol',
    detail: 'Comprehensive hair fall management with personalized treatment plans',
    src: 'https://static.glossgenius.com/public/service/927c7da91558b470456567fd78eeae0cc63978d3/image/91d7a4a3a5dfe35dcf0aae4b0ceff560.jpg',
  },
];

export const careHighlights = [
  'Delivering safe and effective treatments using advanced technology',
  'Offering personalized solutions rather than one-size-fits-all procedures',
  'Educating patients to make informed decisions about their skin and hair health',
  'Maintaining honesty, integrity, and medical ethics in every treatment',
  'Enhancing natural beauty while preserving skin health and confidence',
];

export const docSpecialties = [
  'Acne & acne scar management',
  'Anti-aging treatments (Botox, fillers, skin rejuvenation)',
  'Advanced medi facials & Hydrafacial',
  'Hair fall management, PRP & GFC therapies',
  'Laser hair reduction and pigment treatments',
  'HIFU (High intensity focused ultrasound)',
  'MNRF (Microneedling Radiofrequency)',
  'Mole, wart, and skin tag removal',
];

export const services = [
  {
    id: "hyperpigmentation",
    title: "Hyperpigmentation Treatment",
    description: "Advanced solutions to reduce dark spots and uneven skin tone. Specialized treatments to restore even complexion.",
    condition: "Hyperpigmentation",
    category: "Skin",
    recommendedProcedures: [
      "Chemical Peels",
      "Carbon Facial",
      "Medi Facials",
      "Microneedling",
      "IV Drips"
    ],
    procedureDescriptions: {
      "Chemical Peels": "Professional-grade chemical solutions that exfoliate dead skin cells and fade pigmentation, revealing brighter, more even-toned skin. Multiple sessions recommended for optimal results.",
      "Carbon Facial": "Laser treatment that uses activated charcoal to absorb impurities and reduce melanin production. Provides immediate brightening and smoothing effects.",
      "Medi Facials": "Advanced facial treatments using professional-grade serums and technology to target pigmentation at the cellular level. Customized for your skin type.",
      "Microneedling": "Controlled micro-injuries stimulate collagen production and accelerate skin cell turnover, helping to fade dark spots and improve overall skin texture.",
      "IV Drips": "Intravenous infusion of brightening agents including Vitamin C, Glutathione, and antioxidants to enhance skin radiance from within."
    },
    details: "Hyperpigmentation occurs due to excess melanin production. Our treatments focus on exfoliation, collagen stimulation, and skin brightening to restore an even complexion.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766150275/Hyperpigmentation_Treatment_wy6b2j.webp",
    link: "/treatments/skin/hyperpigmentation",
    featured: true
  },
  {
    id: "acne",
    title: "Acne & Active Pimples Treatment",
    description: "Clinically proven treatments to control acne and inflammation. Deep cleansing and bacteria elimination to prevent future breakouts.",
    category: "Skin",
    condition: "Acne",
    recommendedProcedures: [
      "Advanced Hydrafacial",
      "Carbon Facial",
      "Chemical Peels",
      "High Frequency",
      "Medi Facials"
    ],
    procedureDescriptions: {
      "Advanced Hydrafacial": "Vortex-fusion technology that deeply cleanses, extracts impurities, and infuses hydrating serums. Reduces acne-causing bacteria and prevents clogged pores without irritation.",
      "Carbon Facial": "Photoacoustic laser therapy targeting acne bacteria and sebaceous glands. Reduces oil production and kills acne-causing bacteria while rejuvenating skin texture.",
      "Chemical Peels": "Controlled application of chemical solutions to exfoliate dead skin, unclog pores, and reduce bacterial growth. Prevents future breakouts while treating active acne.",
      "High Frequency": "Electromagnetic current that kills acne bacteria, reduces inflammation, and promotes healing of active breakouts and post-acne marks.",
      "Medi Facials": "Professional facials combining cleansing, extraction, and targeted treatment serums to control oil, eliminate bacteria, and heal active acne."
    },
    details: "Acne is caused by clogged pores, bacteria, and inflammation. Our therapies deeply cleanse pores, reduce acne-causing bacteria, and prevent future breakouts.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766212664/Acne_Active_Pimples_Treatment_vv1hgt.jpg",
    link: "/treatments/skin/acne",
    featured: true
  },
  {
    id: "acne-scars",
    title: "Acne Scars & Marks Treatment",
    description: "Reduce acne scars with collagen-boosting procedures. Improve skin texture and diminish scar depth.",
    condition: "Acne Marks / Scars",
    category: "Skin",
    recommendedProcedures: [
      "Microneedling",
      "MNRF (Microneedling RF)",
      "Face PRP",
      "Chemical Peels"
    ],
    procedureDescriptions: {
      "Microneedling": "Creates controlled micro-injuries to trigger natural collagen production and remodeling. Effectively reduces scar depth and improves skin texture over multiple sessions.",
      "MNRF (Microneedling RF)": "Combines microneedling with radiofrequency energy for enhanced collagen induction. More effective than standard microneedling for deeper scar improvement.",
      "Face PRP": "Platelet-rich plasma infusion stimulates collagen production and promotes tissue regeneration. Accelerates healing and improves scar appearance naturally.",
      "Chemical Peels": "Professional chemical exfoliation to remove damaged outer skin layers. Helps fade surface scars and promotes healing from within."
    },
    details: "Acne scars develop due to tissue damage. These treatments promote collagen remodeling to improve skin texture and reduce scar depth.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766212778/Acne_Scars_Marks_Treatment_hifbh3.jpg",
    link: "/treatments/skin/acne-scars"
  },
  {
    id: "melasma",
    title: "Melasma Treatment",
    description: "Targeted therapies for hormonal and sun-induced pigmentation. Customized protocols with gentle exfoliation and pigmentation control.",
    condition: "Melasma",
    category: "Skin",
    recommendedProcedures: [
      "Chemical Peels",
      "Carbon Facial",
      "Medi Facials",
      "Microneedling"
    ],
    procedureDescriptions: {
      "Chemical Peels": "Gentle, progressive chemical peels that gradually fade melasma without causing irritation or post-inflammatory hyperpigmentation. Multiple sessions for sustained results.",
      "Carbon Facial": "Low-energy laser treatment that targets melanin without harming surrounding tissue. Safe and effective for melasma, with minimal downtime.",
      "Medi Facials": "Customized professional facials using lightening and brightening serums specifically formulated for melasma-prone skin.",
      "Microneedling": "Controlled needling stimulates collagen and encourages skin renewal, helping to fade melasma patches while strengthening the skin barrier."
    },
    details: "Melasma requires controlled and customized treatments. Our protocols focus on gentle exfoliation and pigmentation control without irritating the skin.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766213365/Melasma_Treatment_rpnwpl.jpg",
    link: "/treatments/skin/melasma",
    featured: true
  },
  {
    id: "dark-circles",
    title: "Under-Eye Dark Circles Treatment",
    description: "Brighten and rejuvenate tired-looking under eyes. PRP therapy and microneedling improve circulation and restore radiance.",
    condition: "Under-eye Dark Circles",
    category: "Skin",
    recommendedProcedures: [
      "Face PRP",
      "Medi Facials",
      "IV Drips",
      "Microneedling"
    ],
    procedureDescriptions: {
      "Face PRP": "Growth factors in platelet-rich plasma improve blood circulation, reduce pigmentation, and thicken delicate under-eye skin for a brighter, youthful appearance.",
      "Medi Facials": "Specialized under-eye treatment with brightening and hydrating serums that target pigmentation and improve skin texture around delicate eye area.",
      "IV Drips": "Antioxidant-rich intravenous therapy improves circulation and reduces dark circles from within. Enhances overall skin radiance and hydration.",
      "Microneedling": "Gentle microneedling around the eyes stimulates collagen, improves skin thickness, and reduces the appearance of dark circles and fine lines."
    },
    details: "Dark circles may result from pigmentation, hollowing, or poor circulation. Our treatments improve skin quality, hydration, and collagen production.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766213748/Under-Eye_PRP_tg1ege.jpg",
    link: "/treatments/skin/dark-circles"
  },
  {
    id: "open-pores",
    title: "Open Pores Treatment",
    description: "Minimize enlarged pores and refine skin texture. Microneedling and radiofrequency stimulate collagen for tightened pores.",
    condition: "Open Pores",
    category: "Skin",
    recommendedProcedures: [
      "Microneedling",
      "MNRF (Microneedling RF)",
      "Carbon Facial",
      "Medi Facials"
    ],
    procedureDescriptions: {
      "Microneedling": "Creates controlled punctures to stimulate collagen production. Improves skin elasticity and tightens pore appearance over multiple sessions.",
      "MNRF (Microneedling RF)": "Radiofrequency energy combined with microneedling provides superior collagen remodeling. Noticeably tightens pores and refines skin texture.",
      "Carbon Facial": "Laser treatment that removes dead skin and reduces excess sebum. Minimizes pore appearance and leaves skin smooth and refined.",
      "Medi Facials": "Professional facials with pore-minimizing serums and extraction techniques to cleanse deeply and improve pore visibility."
    },
    details: "Enlarged pores are commonly caused by excess oil and collagen loss. These procedures tighten pores and enhance skin smoothness.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766214071/Microneedling_RF_llo3o5.jpg",
    link: "/treatments/skin/open-pores"
  },
  {
    id: "anti-aging",
    title: "Anti-Aging & Skin Rejuvenation",
    description: "Combat fine lines, wrinkles, and sagging skin. HIFU and PRP treatments restore firmness and youthful glow.",
    condition: "Skin Aging",
    category: "Skin",
    recommendedProcedures: [
      "HIFU",
      "MNRF (Microneedling RF)",
      "Face PRP",
      "IV Drips",
      "Medi Facials"
    ],
    procedureDescriptions: {
      "HIFU": "High-intensity focused ultrasound creates controlled heat at deep skin layers to stimulate collagen and lift sagging skin. Non-invasive alternative to surgery.",
      "MNRF (Microneedling RF)": "Combines micro-injuries with radiofrequency for maximum collagen induction. Effectively reduces fine lines, wrinkles, and loose skin.",
      "Face PRP": "Platelet-rich plasma stimulates natural collagen production and skin regeneration. Restores youthful glow and improves skin quality.",
      "IV Drips": "Anti-aging infusion with Vitamin C, Collagen, and antioxidants. Enhances skin elasticity and radiance from within.",
      "Medi Facials": "Professional anti-aging facials with advanced serums targeting fine lines, loss of elasticity, and dull complexion."
    },
    details: "Aging skin benefits from collagen stimulation and skin tightening. Our treatments restore firmness, glow, and youthful texture.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766214868/Anti-Aging_Skin_Rejuvenation_uiifll.webp",
    link: "/treatments/skin/anti-aging",
    featured: true
  },
  {
    id: "skin-tag-removal",
    title: "Skin Tag & Mole Removal",
    description: "Safe and effective removal with minimal discomfort and quick recovery. Precision procedures with excellent cosmetic outcomes.",
    condition: "Skin Tags / Moles",
    category: "Skin",
    recommendedProcedures: [
      "Skin Tag / Mole Removal"
    ],
    procedureDescriptions: {
      "Skin Tag / Mole Removal": "Precise removal using advanced techniques including cryotherapy, laser, or surgical excision. Ensures clean removal with minimal scarring and quick healing."
    },
    details: "Non-invasive procedures ensure precise removal with minimal discomfort and downtime.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766215602/Skin_Tag_Mole_Removal_zefcib.jpg",
    link: "/treatments/skin/skin-tag-removal"
  },
  {
    id: "stretch-marks",
    title: "Stretch Marks Reduction",
    description: "Improve appearance of stretch marks and skin texture. Microneedling and PRP therapy reduce visibility and restore elasticity.",
    condition: "Stretch Marks",
    category: "Skin",
    recommendedProcedures: [
      "Microneedling",
      "MNRF (Microneedling RF)",
      "Face PRP"
    ],
    procedureDescriptions: {
      "Microneedling": "Stimulates collagen remodeling to improve stretch mark appearance and skin texture. Most effective on newer stretch marks.",
      "MNRF (Microneedling RF)": "Combines microneedling with radiofrequency for enhanced collagen production. Reduces stretch mark visibility and improves elasticity.",
      "Face PRP": "Growth factors in platelet-rich plasma stimulate tissue regeneration and collagen production for better stretch mark reduction."
    },
    details: "Stretch marks occur due to rapid skin stretching. Collagen-inducing treatments help improve skin elasticity and appearance.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766215567/Stretch_Marks_Reduction_uh6bnl.jpg",
    link: "/treatments/skin/stretch-marks"
  },
  {
    id: "double-chin",
    title: "Double Chin Reduction",
    description: "Non-surgical fat reduction and skin tightening. HIFU technology defines jawline and enhances facial contours.",
    condition: "Double Chin",
    category: "Skin",
    recommendedProcedures: [
      "HIFU"
    ],
    procedureDescriptions: {
      "HIFU": "High-intensity focused ultrasound selectively destroys fat cells in the submental area while tightening overlying skin. Defines jawline without surgery or downtime."
    },
    details: "HIFU tightens skin and reduces fat deposits to enhance jawline definition.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766216249/Double-Chin-Removal.jpg_qyjvrn.webp",
    link: "/treatments/skin/double-chin",
    featured: true
  },
  {
    id: "hair-fall",
    title: "Hair Fall & Balding Treatment",
    description: "Advanced hair restoration combining PRP and growth factor therapy. Stimulate follicles and promote natural regrowth.",
    condition: "Hair Fall / Balding",
    category: "Hair",
    recommendedProcedures: [
      "PRP + Microneedling",
      "GFC + Microneedling",
      "Meso Therapy",
      "LED Therapy"
    ],
    procedureDescriptions: {
      "PRP + Microneedling": "Platelet-rich plasma combined with microneedling stimulates dormant hair follicles. Growth factors activate hair regeneration and improve scalp health.",
      "GFC + Microneedling": "Growth factor concentrate provides superior regenerative properties compared to PRP. Enhanced follicle stimulation for visible hair regrowth.",
      "Meso Therapy": "Microinjection of growth factors and nutrients directly into the scalp. Nourishes hair follicles and promotes healthy hair growth.",
      "LED Therapy": "Low-level laser light stimulates cellular energy in hair follicles. Increases blood flow and promotes natural hair growth without side effects."
    },
    details: "Hair loss treatments stimulate follicles, improve scalp health, and promote natural hair regrowth.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766217607/Hair_Fall_Balding_Treatment_klmu15.jpg",
    link: "/treatments/hair/hair-fall",
    featured: true
  },
  {
    id: "laser-hair-reduction",
    title: "Unwanted Hair Reduction",
    description: "Permanent hair reduction with advanced laser technology. Safe, effective, and long-lasting removal with minimal discomfort.",
    condition: "Unwanted / Ingrown Hair",
    category: "Hair",
    recommendedProcedures: [
      "Laser Hair Reduction"
    ],
    procedureDescriptions: {
      "Laser Hair Reduction": "Advanced laser technology selectively targets melanin in hair follicles, destroying them while protecting surrounding skin. 6-8 sessions provide permanent reduction."
    },
    details: "Laser technology targets hair follicles to reduce unwanted hair growth safely and effectively.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766218098/Unwanted_Hair_Reduction_uiqflh.jpg",
    link: "/treatments/hair/laser-hair-reduction",
    featured: true
  },
  {
    id: "dandruff",
    title: "Dandruff Treatment",
    description: "Effective scalp treatments to control flakes and itching. Medical-grade therapies eliminate fungal growth and restore balance.",
    condition: "Dandruff",
    category: "Hair",
    recommendedProcedures: [
      "Meso Therapy",
      "LED Therapy",
      "High Frequency Comb"
    ],
    procedureDescriptions: {
      "Meso Therapy": "Microinjection of antifungal and anti-inflammatory agents into the scalp. Provides quick relief and prevents dandruff recurrence.",
      "LED Therapy": "Red and blue light therapy kills dandruff-causing fungi and reduces inflammation. Non-invasive and soothing for irritated scalp.",
      "High Frequency Comb": "Electromagnetic current that eliminates fungal and bacterial growth on the scalp. Reduces itching and flaking while improving scalp health."
    },
    details: "These treatments soothe the scalp, control fungal growth, and restore scalp balance.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766218246/Meso_Therapy_ix6lv6.jpg",
    link: "/treatments/hair/dandruff",
    featured: true
  },
  {
    id: "seborrheic-dermatitis",
    title: "Seborrheic Dermatitis Treatment",
    description: " Targeted scalp therapies help reduce inflammation, redness, and recurring flakes.",
    condition: "Seborrheic Dermatitis",
    category: "Hair",
    recommendedProcedures: [
      "LED Therapy",
      "High Frequency Comb",
      "Meso Therapy"
    ],
    procedureDescriptions: {
      "LED Therapy": "Anti-inflammatory light therapy reduces redness and itching associated with seborrheic dermatitis. Promotes scalp healing and reduces flare-ups.",
      "High Frequency Comb": "Kills yeast and bacteria responsible for seborrheic dermatitis. Reduces inflammation and prevents recurrence of symptoms.",
      "Meso Therapy": "Injection of anti-inflammatory and antifungal agents directly into affected areas. Provides targeted treatment for chronic scalp dermatitis."
    },
    details: "Medical-grade solutions for chronic scalp conditions. LED and high-frequency therapy reduce inflammation and prevent flare-ups.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766218697/High_Frequency_Comb_vq07oj.webp",
    link:"/treatments/hair/seborrheic-dermatitis"
  },
  {
    id: "premature-greying",
    title: "Premature Greying Treatment",
    description: "Improve scalp nutrition and slow down premature greying. Regenerative therapies support melanin production and natural color.",
    condition: "Premature Greying Hair",
    category: "Hair",
    recommendedProcedures: [
      "Meso Therapy",
      "LED Therapy"
    ],
    procedureDescriptions: {
      "Meso Therapy": "Microinjection of nutrients, minerals, and melanin-stimulating agents. Nourishes hair roots and supports natural color production.",
      "LED Therapy": "Red light stimulates cellular energy in melanin-producing cells. Improves scalp circulation and supports natural hair pigmentation."
    },
    details: "Nutritional and regenerative therapies support melanin production and scalp health.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766218858/Premature_Grey_Hair_1108564280_resized_1_q1m3bi.webp",
    link: "/treatments/hair/premature-greying"
  },
  {
    id: "alopecia-areata",
    title: "Alopecia Areata Treatment",
    description: "Specialized treatments for patchy hair loss. PRP and growth factor therapy combine with microneedling to stimulate regrowth.",
    condition: "Alopecia Areata",
    category: "Hair",
    recommendedProcedures: [
      "Alopecia Areata Treatment",
      "PRP + Microneedling",
      "GFC + Microneedling"
    ],
    procedureDescriptions: {
      "Alopecia Areata Treatment": "Specialized treatment combining immunomodulating agents with growth stimulation. Targets autoimmune response and awakens dormant follicles.",
      "PRP + Microneedling": "Growth factor-rich platelets combined with microneedling stimulate follicle regeneration. Effective for patchy regrowth in alopecia areata.",
      "GFC + Microneedling": "Growth factor concentrate with enhanced regenerative properties. Superior results for treating alopecia areata and stimulating new hair growth."
    },
    details: "Autoimmune-related hair loss requires focused regenerative and immune-modulating treatments.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766218976/Alopecia_Areata_Treatment_qumt5a.jpg",
    link: "/treatments/hair/alopecia-areata"
  }
];

export const testimonials = [
  {
    id: "testimonial-1",
    name: "Neha Kapoor",
    treatment: "Acne Treatment",
    text: "I struggled with persistent acne for years, and nothing seemed to work. Dr. Anita's personalized acne treatment plan completely transformed my skin. Within 3 months, I saw remarkable results. The combination of advanced facials and medi treatments was exactly what my skin needed. I'm so grateful!",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Rajesh Kumar",
    treatment: "Hair Fall & PRP Therapy",
    text: "After experiencing significant hair loss, I was losing confidence. The PRP therapy combined with microneedling at DermaCharma worked wonders. I can see new hair growth in just 4 months. The staff was incredibly supportive throughout the treatment journey.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Priya Sharma",
    treatment: "Hyperpigmentation & Chemical Peels",
    text: "My dark spots and uneven skin tone were really affecting my confidence. The chemical peel treatments followed by medi facials have completely evened out my complexion. The results exceeded my expectations. Highly recommend DermaCharma!",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5
  },
  {
    id: "testimonial-4",
    name: "Amit Patel",
    treatment: "Anti-Aging & HIFU",
    text: "I was skeptical about non-invasive treatments, but the HIFU procedure at DermaCharma gave me results comparable to surgery without any downtime. My skin looks more lifted and youthful. The team is professional and results-driven.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5
  },
  {
    id: "testimonial-5",
    name: "Ananya Desai",
    treatment: "Dark Circles Under-Eye Treatment",
    text: "I tried countless creams for my dark circles, but nothing worked. The under-eye PRP treatment combined with microneedling was a game-changer. My eyes look so much brighter and more refreshed. Thank you Dr. Anita!",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5
  },
  {
    id: "testimonial-6",
    name: "Vikram Singh",
    treatment: "Laser Hair Reduction",
    text: "Finally, a permanent solution to unwanted hair! The laser hair reduction treatment is painless and effective. I've completed 6 sessions and the reduction is remarkable. Cost-effective and saves so much time. Couldn't be happier!",
    image: "https://images.pexels.com/photos/1181481/pexels-photo-1181481.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5
  },
  {
    id: "testimonial-7",
    name: "Divya Nair",
    treatment: "Acne Scars Treatment",
    text: "The microneedling RF treatment for my acne scars was incredible. My skin texture improved significantly, and the scars are barely visible now. The whole experience was smooth and the results speak for themselves. Highly professional clinic!",
    image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5
  },
  {
    id: "testimonial-8",
    name: "Rohan Mehta",
    treatment: "Double Chin Reduction with HIFU",
    text: "The HIFU treatment for my double chin definition was non-invasive and painless. Within weeks, I could see my jawline becoming more defined. No surgery, no downtime, just amazing results. Dr. Anita is truly skilled!",
    image: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5
  }
];
