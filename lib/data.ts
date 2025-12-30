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
      "PRP with Microneedling",
      "IV Drips"
    ],
    procedureDescriptions: {
      "Chemical Peels": "Professional-grade chemical solutions that exfoliate dead skin cells and fade pigmentation, revealing brighter, more even-toned skin. Multiple sessions recommended for optimal results.",
      "Carbon Facial": "Laser treatment that uses activated charcoal to absorb impurities and reduce melanin production. Provides immediate brightening and smoothing effects.",
      "Medi Facials": "Advanced facial treatments using professional-grade serums and technology to target pigmentation at the cellular level. Customized for your skin type.",
      "PRP with Microneedling": "Combines microneedling with Platelet-Rich Plasma (PRP) to accelerate skin renewal and fade stubborn pigmentation. Growth factors in PRP enhance the brightening effects and improve skin texture.",
      "IV Drips": "Intravenous infusion of brightening agents including Vitamin C, Glutathione, and antioxidants to enhance skin radiance from within."
    },
    details: "Hyperpigmentation requires a multi-faceted approach. We use Chemical Peels and Carbon Facials for effective surface exfoliation and melanin reduction, while PRP with Microneedling and IV Drips stimulate deep cellular renewal and internal brightening to restore a radiant, even complexion.",
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
    details: "Our acne protocols combine the deep extraction power of Hydrafacial with the anti-bacterial effects of Carbon Facials and High Frequency therapy. These treatments work together to eliminate acne-causing bacteria, regulate oil production through Chemical Peels, and heal active breakouts.",
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
    details: "To effectively treat acne scars, we utilize advanced collagen-induction therapies like Microneedling and MNRF to remodel skin texture. When combined with the regenerative properties of Face PRP and smoothing effects of Chemical Peels, these treatments significantly diminish scar depth and restore skin smoothness.",
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
    details: "Melasma management requires a cautious, gentle approach. Our customized protocols use progressive Chemical Peels and low-energy Carbon Facials to fade pigmentation, while Microneedling and Medi Facials strengthen the skin barrier and promote healthy cell turnover without causing irritation.",
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
      "Under-eye PRP",
      "Under-eye Chemical Peel",
      "Medi Facials",
      "Microneedling"
    ],
    procedureDescriptions: {
      "Under-eye PRP": "Growth factors in platelet-rich plasma improve blood circulation, reduce pigmentation, and thicken delicate under-eye skin for a brighter, youthful appearance.",
      "Under-eye Chemical Peel": "Gentle, specialized chemical peels formulated for the delicate under-eye skin to effectively fade pigmentation and brighten the eye area.",
      "Medi Facials": "Specialized under-eye treatment with brightening and hydrating serums that target pigmentation and improve skin texture around the delicate eye area.",
      "Microneedling": "Gentle microneedling around the eyes stimulates collagen, improves skin thickness, and reduces the appearance of dark circles and fine lines."
    },
    details: "We address dark circles by combining Under-eye PRP to improve circulation and skin thickness with specialized Under-eye Chemical Peels to target pigmentation. Gentle Microneedling and hydrating Medi Facials further refine the delicate eye area, restoring radiance and reducing fine lines.",
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
    details: "Our open pore treatments focus on both deep cleansing and structural tightening. Carbon Facials and Medi Facials remove debris and reduce sebum, while Microneedling and MNRF provide deep collagen induction to structurally tighten pores and significantly refine skin texture.",
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
    details: "Our holistic anti-aging approach utilizes HIFU for non-surgical lifting and MNRF for targeting deep wrinkles and sagging. These are complemented by regenerative Face PRP, nutrient-rich IV Drips, and targeted Medi Facials to restore volume, firmness, and a youthful glow from both inside and out.",
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
      "Electro Cautery",
      "Plasma Pen",
      // "Cryotherapy",
      // "Laser Removal"
    ],
    procedureDescriptions: {
      "Electro Cautery": "Advanced technique using thermal energy to precisely remove skin tags and moles, ensuring minimal bleeding and quick recovery.",
      "Plasma Pen": "Innovative treatment using plasma energy to vaporize benign skin lesions with high precision and minimal impact on surrounding tissue.",
      // "Cryotherapy": "Fast and effective removal of skin tags through controlled freezing, allowing the lesion to detach naturally.",
      // "Laser Removal": "High-precision laser therapy to eliminate moles and skin tags with superior cosmetic outcomes and minimal scarring."
    },
    details: "We provide high-precision removal of skin tags and moles using advanced Electro Cautery and Plasma Pen technology. These procedures ensure pinpoint accuracy, minimal discomfort, and rapid healing with exceptional cosmetic results and virtually no downtime.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766215602/Skin_Tag_Mole_Removal_zefcib.jpg",
    link: "/treatments/skin/skin-tag-removal"
  },
  {
    id: "stretch-marks",
    title: "Stretch Marks Reduction",
    description: "Improve appearance of stretch marks and skin texture. Microneedling and Plasma Pen reduce visibility and restore elasticity.",
    condition: "Stretch Marks",
    category: "Skin",
    recommendedProcedures: [
      "Microneedling",
      "MNRF (Microneedling RF)",
      "Plasma Pen"
    ],
    procedureDescriptions: {
      "Microneedling": "Stimulates collagen remodeling to improve stretch mark appearance and skin texture. Most effective on newer stretch marks.",
      "MNRF (Microneedling RF)": "Combines microneedling with radiofrequency for enhanced collagen production. Reduces stretch mark visibility and improves elasticity.",
      "Plasma Pen": "Uses fibroblast technology to stimulate skin tightening and collagen production, significantly reducing the appearance of stretch marks."
    },
    details: "Stretch marks are treated using powerful collagen-remodeling techniques. Microneedling and MNRF penetrate deep to stimulate tissue repair, while Plasma Pen technology tightens the skin surface, working together to significantly reduce the visibility of marks and improve overall skin elasticity.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766215567/Stretch_Marks_Reduction_uh6bnl.jpg",
    link: "/treatments/skin/stretch-marks"
  },
  {
    id: "double-chin",
    title: "Double Chin Reduction",
    description: "Non-surgical fat reduction and skin tightening. HIFU and Mesolipolysis treatments define the jawline and enhance facial contours.",
    condition: "Double Chin",
    category: "Skin",
    recommendedProcedures: [
      "HIFU",
      "Mesolipolysis Injection"
    ],
    procedureDescriptions: {
      "HIFU": "High-intensity focused ultrasound selectively destroys fat cells in the submental area while tightening overlying skin. Defines jawline without surgery or downtime.",
      "Mesolipolysis Injection": "Targeted micro-injections that dissolve stubborn fat deposits under the chin, resulting in a more contoured and sculpted jawline."
    },
    details: "We achieve jawline definition through a two-pronged approach: Mesolipolysis injections to specifically dissolve stubborn fat deposits, followed by HIFU technology to destroy remaining fat cells and provide deep structural skin tightening for a non-surgical lift.",
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
      "Hair Exosomes",
      "Meso Therapy",
      "LED Therapy"
    ],
    procedureDescriptions: {
      "PRP + Microneedling": "Platelet-rich plasma combined with microneedling stimulates dormant hair follicles. Growth factors activate hair regeneration and improve scalp health.",
      "GFC + Microneedling": "Growth factor concentrate provides superior regenerative properties compared to PRP. Enhanced follicle stimulation for visible hair regrowth.",
      "Hair Exosomes": "Advanced regenerative therapy using exosome vesicles to deliver growth factors and signaling molecules. Promotes hair follicle rejuvenation and increases hair density.",
      "Meso Therapy": "Microinjection of growth factors and nutrients directly into the scalp. Nourishes hair follicles and promotes healthy hair growth.",
      "LED Therapy": "Low-level laser light stimulates cellular energy in hair follicles. Increases blood flow and promotes natural hair growth without side effects."
    },
    details: "Our comprehensive hair restoration protocols utilize PRP, GFC, and Hair Exosome therapies combined with microneedling to directly activate dormant follicles. Meso Therapy provides a deep infusion of essential nutrients, while LED Therapy increases scalp circulation and cellular energy to ensure robust, natural hair regrowth.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766217607/Hair_Fall_Balding_Treatment_klmu15.jpg",
    link: "/treatments/hair/hair-fall",
    featured: true
  },
  {
    id: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    description: "Experience permanent hair reduction with our USP: USFDA approved 4-wavelength diode laser technolog. Safe, effective, and long-lasting results for all skin types.",
    condition: "Unwanted / Ingrown Hair",
    category: "Hair",
    recommendedProcedures: [
      "Laser Hair Reduction"
    ],
    procedureDescriptions: {
      "Laser Hair Reduction": "We utilize the advanced **USFDA approved 4-wavelength diode laser**, which targets hair follicles at multiple depths simultaneously. This ensures superior results, maximum safety, and minimal discomfort compared to standard lasers."
    },
    details: "Our clinic's USP is the **USFDA approved 4-wavelength diode laser**, which represents the gold standard in permanent hair reduction. This advanced technology targets multiple hair follicle depths simultaneously, making it highly effective for all hair types and exceptionally safe for all skin tones.",
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
    details: "To eliminate dandruff, we use a targeted anti-fungal approach. Meso Therapy delivers medicated agents directly to the scalp, while LED Therapy and High Frequency Comb treatments eliminate fungal growth and soothe inflammation, restoring a healthy scalp balance and preventing recurrence.",
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
    details: "Chronic scalp conditions are managed through medical-grade LED and High Frequency therapy to reduce inflammation and eliminate yeast. Targeted Meso Therapy delivers anti-inflammatory agents directly to the scalp, providing relief from redness and flakes while preventing painful flare-ups.",
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
    details: "Our premature greying protocols focus on restoring scalp nutrition and stimulating melanin production. Meso Therapy provides essential minerals and color-stimulating agents directly to the roots, while LED light therapy boosts cellular energy to support the maintenance of natural hair pigmentation.",
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
      "Intra-lesional Injection",
      "Alopecia Areata Treatment",
      "PRP + Microneedling",
      "GFC + Microneedling"
    ],
    procedureDescriptions: {
      "Intra-lesional Injection": "Direct injection of immunomodulating agents into bald patches to suppress the autoimmune response and stimulate hair regrowth in affected areas.",
      "Alopecia Areata Treatment": "Specialized treatment combining immunomodulating agents with growth stimulation. Targets autoimmune response and awakens dormant follicles.",
      "PRP + Microneedling": "Growth factor-rich platelets combined with microneedling stimulate follicle regeneration. Effective for patchy regrowth in alopecia areata.",
      "GFC + Microneedling": "Growth factor concentrate with enhanced regenerative properties. Superior results for treating alopecia areata and stimulating new hair growth."
    },
    details: "Treating Alopecia Areata requires managing the autoimmune response while stimulating regrowth. We use Intra-lesional Injections to suppress local inflammation, followed by PRP and GFC therapies combined with microneedling to awaken dormant follicles and promote rapid, healthy hair regrowth in bald patches.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766218976/Alopecia_Areata_Treatment_qumt5a.jpg",
    link: "/treatments/hair/alopecia-areata"
  },
  {
    id: "advanced-hydrafacial",
    title: "Advanced Hydrafacial",
    description: "Revolutionary vortex-fusion technology that deeply cleanses, extracts impurities, and infuses hydrating serums. Instantly refreshed, plump, and radiant skin.",
    condition: "Skin Hydration & Radiance",
    category: "Medi Facials",
    recommendedProcedures: [
      "Hydrofusion Technology",
      "Deep Extraction",
      "Targeted Serums",
      "Hydration Infusion"
    ],
    procedureDescriptions: {
      "Hydrofusion Technology": "Vortex-fusion technology that painlessly extracts impurities while simultaneously infusing nourishing serums for immediate hydration.",
      "Deep Extraction": "Advanced vacuum technology removes blackheads, whiteheads, and clogged pores without irritation or discomfort.",
      "Targeted Serums": "Professional-grade serums customized to your skin type, addressing specific concerns like acne, aging, or hyperpigmentation.",
      "Hydration Infusion": "Intense hydration boost that plumps skin, reduces fine lines, and restores natural glow in just one session."
    },
    details: "Advanced Hydrafacial combines cutting-edge vortex-fusion technology with customized serums to deliver immediate, visible results. The treatment deeply cleanses, painlessly extracts impurities, and floods your skin with hydration, leaving you with plump, radiant, and refreshed complexion.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1767008664/Advanced_Hydrafacial_gc36zk.avif",
    link: "/treatments/medi-facials/advanced-hydrafacial",
  },
  {
    id: "oxygeneo-facial",
    title: "Oxygeneo Facial",
    description: "Oxygen-infused facial treatment that oxygenates, exfoliates, and infuses active ingredients. Experience the power of oxygen for glowing, youthful skin.",
    condition: "Dull Skin & Rejuvenation",
    category: "Medi Facials",
    recommendedProcedures: [
      "Oxygen Infusion",
      "Gentle Exfoliation",
      "Active Ingredient Infusion",
      "Skin Oxygenation"
    ],
    procedureDescriptions: {
      "Oxygen Infusion": "Patented technology infuses 98% pure oxygen and active ingredients into skin, boosting cellular function and collagen production.",
      "Gentle Exfoliation": "Soft-abrasive exfoliation combined with oxygen therapy removes dead skin cells while energizing the skin.",
      "Active Ingredient Infusion": "Advanced serum delivery system ensures maximum penetration of powerful active ingredients like Vitamin C and hyaluronic acid.",
      "Skin Oxygenation": "Increases oxygen levels in skin cells, promoting cellular energy, healing, and natural radiance."
    },
    details: "Oxygeneo Facial harnesses the power of oxygen to revitalize and rejuvenate tired, dull skin. The treatment combines gentle exfoliation with infusion of 98% pure oxygen and active ingredients, boosting cellular metabolism and collagen production for visibly brighter, smoother, and more youthful-looking skin.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1767008665/Oxygeneo_Facial_mefcok.webp",
    link: "/treatments/medi-facials/oxygeneo-facial",
  },
  {
    id: "pumpkin-medi-facial",
    title: "Pumpkin Medi Facial",
    description: "Nutrient-rich pumpkin-based facial with natural enzymes that gently exfoliate and rejuvenate. Perfect for sensitive skin and seasonal refreshment.",
    condition: "Sensitive Skin & Rejuvenation",
    category: "Medi Facials",
    recommendedProcedures: [
      "Pumpkin Enzyme Exfoliation",
      "Antioxidant Infusion",
      "Gentle Hydration",
      "Anti-inflammatory Treatment"
    ],
    procedureDescriptions: {
      "Pumpkin Enzyme Exfoliation": "Natural enzymes from pumpkin gently dissolve dead skin cells without harming sensitive skin. Rich in vitamins A and C.",
      "Antioxidant Infusion": "Powerful antioxidants from pumpkin protect skin from environmental damage and free radicals, promoting youthful radiance.",
      "Gentle Hydration": "Nourishing hydrating serums infused post-exfoliation to lock in moisture and comfort irritated skin.",
      "Anti-inflammatory Treatment": "Pumpkin's natural anti-inflammatory properties soothe redness and calm reactive skin conditions."
    },
    details: "Pumpkin Medi Facial is a luxurious, gentle treatment ideal for sensitive and reactive skin. Natural pumpkin enzymes provide effective exfoliation without harshness, while rich antioxidants and vitamins soothe, hydrate, and rejuvenate. Perfect for anyone seeking a nourishing, non-irritating facial experience.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1767008885/pumpkin-peel_xcppat.jpg",
    link: "/treatments/medi-facials/pumpkin-medi-facial",
    featured: false
  },
  {
    id: "party-peel",
    title: "Party Peel",
    description: "Quick, effective chemical peel designed for immediate results with minimal downtime. Achieve glowing, refreshed skin in time for your special occasion.",
    condition: "Pre-event Skin Preparation",
    category: "Medi Facials",
    recommendedProcedures: [
      "Superficial Chemical Peel",
      "Brightening Infusion",
      "Instant Glow Treatment",
      "Protective Sealing"
    ],
    procedureDescriptions: {
      "Superficial Chemical Peel": "Gentle acid-based peel that removes the outermost layer of dead skin cells, revealing fresh, bright skin underneath with zero downtime.",
      "Brightening Infusion": "Vitamin-rich serums infused immediately after peeling to boost luminosity and even out skin tone.",
      "Instant Glow Treatment": "Special formulation designed to enhance radiance and create an immediate lit-from-within glow perfect for events.",
      "Protective Sealing": "Advanced moisturizing seal locks in hydration and protects freshly peeled skin from environmental stressors."
    },
    details: "Party Peel is the ultimate express facial for last-minute beauty preparation. This quick, effective chemical peel removes dead skin, brightens complexion, and infuses luminosity-boosting serums—all with zero downtime. Perfect for looking your absolute best before weddings, parties, and special occasions.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1767008971/Party-peel_mu5xin.jpg",
    link: "/treatments/medi-facials/party-peel",
    featured: false
  },
  {
    id: "tattoo-removal",
    title: "Tattoo Removal",
    description: "Professional tattoo removal using advanced Pico Laser and Q-Switch Laser technology. Safe, effective, and suitable for all skin types.",
    condition: "Unwanted Tattoos",
    category: "Skin",
    recommendedProcedures: [
      "Pico Laser",
      "Q-Switch Laser"
    ],
    procedureDescriptions: {
      "Pico Laser": "Advanced picosecond laser technology that breaks down tattoo pigments into smaller particles for faster clearance. Effective on multi-colored tattoos with minimal risk of scarring.",
      "Q-Switch Laser": "High-powered laser that delivers energy in short pulses to fragment tattoo ink. Proven technology for safe and effective tattoo removal with fewer sessions required."
    },
    details: "Our tattoo removal services utilize cutting-edge Pico Laser and Q-Switch Laser technology to safely and effectively eliminate unwanted tattoos. Both laser systems target ink pigments without damaging surrounding skin, making them suitable for all skin types. Multiple sessions may be required depending on tattoo size, color, and depth.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1767099895/Tattoo_removal_treatment_bzvxar.jpg",
    link: "/treatments/skin/tattoo-removal",
    featured: false
  }
];

export const testimonials = [
  {
    id: "testimonial-1",
    name: "Adarsh Srivastava",
    treatment: "Acne Treatment",
    text: "Nice experience all around. The clinic is clean, the wait time was reasonable, and Dr anurag made me feel comfortable (even though I was anxious about my skin issue). He answered all my questions without rushing, explained what to expect, and the scheduled follow-up was handled smoothly. Glad I came here.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766997145/ADARSH_SRIVASTAVA_slkpmy.png",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Kiran Singh",
    treatment: "Hair Fall & PRP Therapy",
    text: `I was struggling with hair fall and dullness for months, and after just a few sessions, I noticed a visible improvement. The results have been amazing — my hair feels stronger, shinier, and much healthier now. The clinic is clean, well-equipped, and the staff is friendly and professional.`,
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1767000337/kiransingh_gmrgbc.png",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Priya Sharma",
    treatment: "Hyperpigmentation & HydraFacial",
    text: "I got a HydraFacial done at Dermacharm Aesthetics, and it gave me a beautiful glow and made my skin feel hydrated. I would highly recommend everyone to visit Dermacharm Aesthetics and enjoy the HydraFacial experience.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766997867/Simran_Siddiquii_jy1nqx.png",
    rating: 5
  },
  {
    id: "testimonial-4",
    name: "Tanwi Singh",
    treatment: "General Aesthetics Consultation",
    text: "I went to consult dr Anurag ; he is best in the town for aesthetics and skin concern .I just had a wonderful experience at the clinic ; all staff and ambience was so good . I think now I know my go to place for skin and aesthetic concern",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766998388/Tanwi_Singh_nr0njv.png",
    rating: 5
  },
  {
    id: "testimonial-5",
    name: "Shivangi Pankaj",
    treatment: "Dark Circles Under-Eye Treatment",
    text: "I had an amazing experience at DERMACHARM. The clinic is exceptionally clean, well-organized, and has a very calming environment. A special thanks to Doctor Anurag Their approach is not only highly professional but also very compassionate. They took the time to listen to all my concerns explained every step of the treatment clearly and made me feel completely at ease.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766998889/Shivangi_Pankaj_ulmqwo.png",
    rating: 5
  },
  {
    id: "testimonial-6",
    name: "Himanshu Gupta",
    treatment: "Laser Hair Reduction",
    text: "Finally, a permanent solution to unwanted hair! I had personally visited the facility for the treatment and had an amazing experience. The staff is very professional and the equipment used is top-notch. After a few sessions, I noticed a significant reduction in hair growth, and the results have been long-lasting.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766999147/Himanshu_Gupta_tkssn0.png",
    rating: 5
  },
  {
    id: "testimonial-7",
    name: "Vinojpriya Chatterjee",
    treatment: "Acne Scars Treatment",
    text: "The microneedling RF treatment for my acne scars was incredible. My skin texture improved significantly, and the scars are barely visible now. The whole experience was smooth and the results speak for themselves. Highly professional clinic!",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766999610/Vinojpriya_C_ultsp0.png",
    rating: 5
  },
  {
    id: "testimonial-8",
    name: "Rohan Mehta",
    treatment: "Double Chin Reduction with HIFU",
    text: "The HIFU treatment for my double chin definition was non-invasive and painless. Within weeks, I could see my jawline becoming more defined. No surgery, no downtime, just amazing results. Dr. Anita is truly skilled!",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1767000385/profile-l_o4agfa.jpg",
    rating: 5
  }
];
