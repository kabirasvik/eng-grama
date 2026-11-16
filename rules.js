/* ============================================================
   Grammar Rules Data Structure
   Batch 1: Rules 1-20
   Batch 2: Rules 21-40
   Batch 3: Rules 41-60
   Batch 4: Rules 61-80
   Each rule includes core statement, trigger words, incorrect/correct
   with highlighted error/fix words, exam tip, and unique examples.
   ============================================================ */
const GRAMMAR_RULES = [
  /* ===== BATCH 1 ===== */
  {
    id: "rule-001",
    number: "Rule 01",
    title: "Indefinite Pronouns take a Singular Verb",
    category: "Subject-Verb Agreement",
    explanation:
      "**Indefinite pronouns** always take a **singular verb** (and singular pronoun in formal exams).",
    triggerWords: ["Everybody", "Everyone", "Anybody", "Anyone", "Somebody", "Someone", "Nobody", "Nothing", "Everything", "Something"],
    incorrect: { text: "Everybody are ready.", highlight: "are" },
    correct: { text: "Everybody is ready.", highlight: "is" },
    tip: "Singular verb for all indefinite pronouns.",
    examples: [
      { text: "Everyone in the examination hall was instructed to switch off their mobile phones.", highlight: "was" },
      { text: "Somebody has left their identity card at the security desk.", highlight: "has" },
      { text: "Everything in the new policy document needs careful scrutiny before approval.", highlight: "needs" },
      { text: "Nobody among the shortlisted candidates knows the exact interview schedule.", highlight: "knows" },
      { text: "Anything that compromises national security is strictly prohibited.", highlight: "is" }
    ]
  },
  {
    id: "rule-002",
    number: "Rule 02",
    title: "Each / Every take a Singular Verb",
    category: "Subject-Verb Agreement",
    explanation:
      "**Each** and **Every** always take a **singular verb**.",
    triggerWords: ["Each", "Every"],
    incorrect: { text: "Each student are present.", highlight: "are" },
    correct: { text: "Each student is present.", highlight: "is" },
    tip: "Each / Every → always singular.",
    examples: [
      { text: "Each candidate is required to bring two passport-sized photographs.", highlight: "is" },
      { text: "Every citizen has the fundamental right to seek justice.", highlight: "has" },
      { text: "Each weapon in the armoury was inspected before the parade.", highlight: "was" },
      { text: "Every officer and soldier was awarded a medal for gallantry.", highlight: "was" },
      { text: "Each page of the confidential report contains crucial evidence.", highlight: "contains" }
    ]
  },
  {
    id: "rule-003",
    number: "Rule 03",
    title: "Each of + Plural Noun + Singular Verb",
    category: "Subject-Verb Agreement",
    explanation:
      "**Each of** + plural noun takes a **singular verb**.",
    triggerWords: ["Each of"],
    incorrect: { text: "Each of the students are ready.", highlight: "are" },
    correct: { text: "Each of the students is ready.", highlight: "is" },
    tip: "The verb agrees with 'Each', not the plural noun that follows.",
    examples: [
      { text: "Each of the selected recruits has to undergo rigorous physical training.", highlight: "has" },
      { text: "Each of these ancient monuments is protected by the Archaeological Survey of India.", highlight: "is" },
      { text: "Each of the committee members was asked to submit a written recommendation.", highlight: "was" },
      { text: "Each of the participating teams deserves appreciation for its sportsmanship.", highlight: "deserves" },
      { text: "Each of the newly launched satellites is functioning smoothly in orbit.", highlight: "is" }
    ]
  },
  {
    id: "rule-004",
    number: "Rule 04",
    title: "Every cannot be used as a Pronoun",
    category: "Subject-Verb Agreement",
    explanation:
      "**Every** cannot be used as a pronoun — use **Each of** or **Every one of**.",
    triggerWords: ["Every"],
    incorrect: { text: "Every of the students is intelligent.", highlight: "Every" },
    correct: { text: "Each of the students is intelligent.", highlight: "Each of" },
    tip: "Say 'Each of the students', not 'Every of the students'.",
    examples: [
      { text: "Each of the applicants fulfilled the eligibility criteria.", highlight: "fulfilled" },
      { text: "Every one of the witnesses testified against the accused in court.", highlight: "testified" },
      { text: "Each of the aircraft in the squadron was checked before takeoff.", highlight: "was" },
      { text: "Every one of the answers given by the finalist was accurate.", highlight: "was" },
      { text: "Each of the four suspects was interrogated separately by the agency.", highlight: "was" }
    ]
  },
  {
    id: "rule-005",
    number: "Rule 05",
    title: "Each vs Every",
    category: "Subject-Verb Agreement",
    explanation:
      "**Each** → two or more | **Every** → more than two.",
    triggerWords: ["Each", "Every"],
    incorrect: { text: "Every hand had a book.", highlight: "Every" },
    correct: { text: "Each hand had a book.", highlight: "Each" },
    tip: "For two items, prefer 'Each'; for more than two, 'Every' works.",
    examples: [
      { text: "The boxer wore a heavy red glove on each hand.", highlight: "each" },
      { text: "There are tall watchtowers on each side of the border gate.", highlight: "each" },
      { text: "Every state in the country participated in the Republic Day parade.", highlight: "Every" },
      { text: "The referee checked the boots of each of the two captains before the toss.", highlight: "each" },
      { text: "Every passenger on the flight was evacuated safely after the emergency landing.", highlight: "was" }
    ]
  },
  {
    id: "rule-006",
    number: "Rule 06",
    title: "Every with Abstract Nouns",
    category: "Subject-Verb Agreement",
    explanation:
      "**Every** is used with abstract nouns (**reason**, **possibility**, **chance**).",
    triggerWords: ["Every reason", "Every possibility", "Every chance"],
    incorrect: { text: "Each reason is strong.", highlight: "Each" },
    correct: { text: "Every reason is strong.", highlight: "Every" },
    tip: "'Every' is preferred with abstract nouns in positive contexts.",
    examples: [
      { text: "The defense team has every confidence in the integrity of its intelligence network.", highlight: "confidence" },
      { text: "You have every right to appeal against an unfair administrative order.", highlight: "right" },
      { text: "There is every likelihood that the monsoon will arrive ahead of schedule.", highlight: "likelihood" },
      { text: "The athlete made every effort to break the national record.", highlight: "effort" },
      { text: "The management gave every assurance that no employee would be laid off.", highlight: "assurance" }
    ]
  },
  {
    id: "rule-007",
    number: "Rule 07",
    title: "Both + Not is Incorrect",
    category: "Correlative Conjunctions",
    explanation:
      "**Both + Not** is incorrect — use **Neither...Nor** instead.",
    triggerWords: ["Both", "Neither", "Nor"],
    incorrect: { text: "Both Ram and Shyam are not coming.", highlight: "Both" },
    correct: { text: "Neither Ram nor Shyam is coming.", highlight: "Neither...Nor" },
    tip: "Never use 'Both + Not'. Use 'Neither...Nor' for negative contexts.",
    examples: [
      { text: "Neither the captain nor the vice-captain was available for the press conference.", highlight: "was" },
      { text: "Neither of the two proposals was accepted by the finance ministry.", highlight: "was" },
      { text: "Neither India nor its neighbour wants an escalation along the border.", highlight: "wants" },
      { text: "Neither of the witnesses could identify the culprit in the dark.", highlight: "could" },
      { text: "Neither the manager nor his assistant has signed the clearance form.", highlight: "has" }
    ]
  },
  {
    id: "rule-008",
    number: "Rule 08",
    title: "Neither / Either take a Singular Verb",
    category: "Correlative Conjunctions",
    explanation:
      "**Neither** and **Either** always take a **singular verb**.",
    triggerWords: ["Neither", "Either"],
    incorrect: { text: "Neither boy are ready.", highlight: "are" },
    correct: { text: "Neither boy is ready.", highlight: "is" },
    tip: "Singular verb after Neither/Either, even when plural follows.",
    examples: [
      { text: "Neither of the two routes is safe during heavy landslides.", highlight: "is" },
      { text: "Either of the two candidates is suitable for the post of general manager.", highlight: "is" },
      { text: "Neither statement gives a complete picture of the economic crisis.", highlight: "gives" },
      { text: "Either road leads directly to the cantonment area.", highlight: "leads" },
      { text: "Neither of the accused has confessed to the crime yet.", highlight: "has" }
    ]
  },
  {
    id: "rule-009",
    number: "Rule 09",
    title: "None — Plural with Countable, Singular with Uncountable",
    category: "Subject-Verb Agreement",
    explanation:
      "**None** takes plural verb with countable nouns, singular with uncountable nouns.",
    triggerWords: ["None of"],
    incorrect: { text: "None of the information are useful.", highlight: "are" },
    correct: { text: "None of the information is useful.", highlight: "is" },
    tip: "Plural verb with countable nouns, singular with uncountable nouns.",
    examples: [
      { text: "None of the soldiers were injured during the night ambush.", highlight: "were" },
      { text: "None of the ammunition was wasted during the firing drill.", highlight: "was" },
      { text: "None of the invited dignitaries have arrived at the venue yet.", highlight: "have" },
      { text: "None of the advice given by the consultant was practical.", highlight: "was" },
      { text: "None of the rescued miners are in critical condition now.", highlight: "are" }
    ]
  },
  {
    id: "rule-010",
    number: "Rule 10",
    title: "Main Subject Determines the Verb, Not the Qualifier",
    category: "Subject-Verb Agreement",
    explanation:
      "The **main subject** determines the verb — not the qualifier phrase.",
    triggerWords: ["box of chocolates", "decoration of rooms", "quality of products"],
    incorrect: { text: "The box of chocolates are missing.", highlight: "are" },
    correct: { text: "The box of chocolates is missing.", highlight: "is" },
    tip: "Ignore intervening phrases — verb agrees with subject ('box').",
    examples: [
      { text: "The cost of all essential commodities has risen sharply this quarter.", highlight: "has" },
      { text: "A fleet of naval warships was deployed in the Indian Ocean.", highlight: "was" },
      { text: "The behaviour of these newly inducted trainees is commendable.", highlight: "is" },
      { text: "The introduction of modern radar systems has strengthened air defense.", highlight: "has" },
      { text: "A bunch of confidential keys was found lying near the vault.", highlight: "was" }
    ]
  },
  {
    id: "rule-011",
    number: "Rule 11",
    title: "Either...Or – Verb Nearest Subject",
    category: "Correlative Conjunctions",
    explanation:
      "With **Either...Or**, the verb agrees with the **subject nearest to it**.",
    triggerWords: ["Either...Or"],
    incorrect: { text: "Either the teachers or the principal are present.", highlight: "are" },
    correct: { text: "Either the teachers or the principal is present.", highlight: "is" },
    tip: "Who is closer to the verb? That one decides the number.",
    examples: [
      { text: "Either the chief minister or his cabinet colleagues are attending the summit.", highlight: "are" },
      { text: "Either the subordinates or the commanding officer is responsible for the lapse.", highlight: "is" },
      { text: "Either you or he has to take responsibility for the financial discrepancy.", highlight: "has" },
      { text: "Either the director or the board members have approved the merger.", highlight: "have" },
      { text: "Either the heavy rains or a technical snag was the cause of the crash.", highlight: "was" }
    ]
  },
  {
    id: "rule-012",
    number: "Rule 12",
    title: "Neither...Nor – Verb Nearest Subject",
    category: "Correlative Conjunctions",
    explanation:
      "With **Neither...Nor**, the verb agrees with the **subject nearest to it**.",
    triggerWords: ["Neither...Nor"],
    incorrect: { text: "Neither Ram nor his friends is ready.", highlight: "is" },
    correct: { text: "Neither Ram nor his friends are ready.", highlight: "are" },
    tip: "Same rule as Either...Or – nearest subject wins.",
    examples: [
      { text: "Neither the captain nor the players were available for the match.", highlight: "were" },
      { text: "Neither the teacher nor the students were present in the class.", highlight: "were" },
      { text: "Neither the employees nor the manager approved the new policy.", highlight: "approved" },
      { text: "Neither he nor I am willing to compromise on ethical standards.", highlight: "am" },
      { text: "Neither the prosecutors nor the judge was convinced by the alibi.", highlight: "was" }
    ]
  },
  {
    id: "rule-013",
    number: "Rule 13",
    title: "Not Only...But Also – Verb Nearest Subject",
    category: "Correlative Conjunctions",
    explanation:
      "With **Not Only...But Also**, the verb agrees with the **subject nearest to it**.",
    triggerWords: ["Not Only...But Also"],
    incorrect: { text: "Not only Ram but also his friends is present.", highlight: "is" },
    correct: { text: "Not only Ram but also his friends are present.", highlight: "are" },
    tip: "Verb agrees with the closer subject – watch out for placement.",
    examples: [
      { text: "Not only the captain but also the crew members were honoured for their bravery.", highlight: "were" },
      { text: "Not only the workers but also the supervisor was held accountable for the delay.", highlight: "was" },
      { text: "Not only India but also several European nations are investing in green hydrogen.", highlight: "are" },
      { text: "Not only the opposition leaders but also the speaker was upset over the chaos.", highlight: "was" },
      { text: "Not only the batsman but also the bowlers have contributed to this historic win.", highlight: "have" }
    ]
  },
  {
    id: "rule-014",
    number: "Rule 14",
    title: "Definite Numeral + Hundred / Thousand / Million / Dozen",
    category: "Number Rules",
    explanation:
      "Definite numeral + **Hundred/Thousand/Million/Dozen** → singular form.",
    triggerWords: ["Five hundred", "Two dozen", "Ten thousand"],
    incorrect: { text: "Five hundreds students", highlight: "hundreds" },
    correct: { text: "Five hundred students", highlight: "hundred" },
    tip: "Numeral + singular unit only. No 's' after numbers.",
    examples: [
      { text: "The government sanctioned five hundred crore rupees for rural infrastructure.", highlight: "five hundred" },
      { text: "The relief camp distributed three thousand blankets to the flood victims.", highlight: "three thousand" },
      { text: "She bought two dozen bananas for the orphanage children.", highlight: "two dozen" },
      { text: "Nearly two million candidates applied for the civil services examination this year.", highlight: "two million" },
      { text: "The battalion marched twenty mile stretches without taking a break.", highlight: "twenty mile" }
    ]
  },
  {
    id: "rule-015",
    number: "Rule 15",
    title: "Without Definite Numeral → Plural Form",
    category: "Number Rules",
    explanation:
      "Without a numeral → **plural form** + of.",
    triggerWords: ["Hundreds of", "Thousands of", "Dozens of"],
    incorrect: { text: "Hundreds of people after numeral", highlight: "numeral" },
    correct: { text: "Hundreds of people", highlight: "Hundreds" },
    tip: "Without numeral → plural. With numeral → singular.",
    examples: [
      { text: "Thousands of aspirants gather in Delhi every year to prepare for competitive exams.", highlight: "Thousands of" },
      { text: "Hundreds of acres of fertile land were submerged due to the dam breach.", highlight: "Hundreds of" },
      { text: "Dozens of flights were cancelled due to dense winter fog.", highlight: "Dozens of" },
      { text: "Millions of migratory birds visit Chilika Lake every winter.", highlight: "Millions of" },
      { text: "Scores of protesters were detained outside the secretariat building.", highlight: "Scores of" }
    ]
  },
  {
    id: "rule-016",
    number: "Rule 16",
    title: "No Double Comparative",
    category: "Comparison Rules",
    explanation:
      "No **double comparative** — avoid 'more + comparative'.",
    triggerWords: ["More wiser", "More better", "More stronger"],
    incorrect: { text: "More wiser", highlight: "More wiser" },
    correct: { text: "Wiser", highlight: "Wiser" },
    tip: "Comparatives do not take 'more'. Say 'wiser', not 'more wiser'.",
    examples: [
      { text: "This new encryption algorithm is safer than the previous version.", highlight: "safer" },
      { text: "Travelling by metro is much faster than taking a cab during peak hours.", highlight: "faster" },
      { text: "The second half of the match proved to be tougher than the first.", highlight: "tougher" },
      { text: "Her analytical approach is far clearer than that of her peers.", highlight: "clearer" },
      { text: "The revised draft is simpler and easier to implement.", highlight: "simpler" }
    ]
  },
  {
    id: "rule-017",
    number: "Rule 17",
    title: "No Double Superlative",
    category: "Comparison Rules",
    explanation:
      "No **double superlative** — avoid 'most + superlative'.",
    triggerWords: ["Most smartest", "Most tallest"],
    incorrect: { text: "Most smartest", highlight: "Most smartest" },
    correct: { text: "Smartest", highlight: "Smartest" },
    tip: "Superlatives do not take 'most'. Say 'smartest', not 'most smartest'.",
    examples: [
      { text: "Siachen is the highest battleground in the world.", highlight: "highest" },
      { text: "This is the finest piece of investigative journalism I have ever read.", highlight: "finest" },
      { text: "Corruption remains the biggest hurdle in the path of rapid development.", highlight: "biggest" },
      { text: "He is the bravest officer in the entire regiment.", highlight: "bravest" },
      { text: "That was the worst economic downturn in recent history.", highlight: "worst" }
    ]
  },
  {
    id: "rule-018",
    number: "Rule 18",
    title: "Comparatively / Relatively + Positive Degree",
    category: "Comparison Rules",
    explanation:
      "**Comparatively/Relatively** + **positive degree** (not comparative).",
    triggerWords: ["Comparatively", "Relatively"],
    incorrect: { text: "Comparatively hotter", highlight: "hotter" },
    correct: { text: "Comparatively hot", highlight: "hot" },
    tip: "Use positive degree after comparatively/relatively, not comparative.",
    examples: [
      { text: "The weather in Bengaluru is comparatively cool even during peak summer.", highlight: "cool" },
      { text: "The quantitative aptitude section was relatively easy in the morning shift.", highlight: "easy" },
      { text: "Living in a tier-two city is comparatively cheap nowadays.", highlight: "cheap" },
      { text: "The new fighter jet is relatively light and highly agile.", highlight: "light" },
      { text: "Security arrangements at the airport were comparatively tight today.", highlight: "tight" }
    ]
  },
  {
    id: "rule-019",
    number: "Rule 19",
    title: "Two Times / Twice + As...As",
    category: "Comparison Rules",
    explanation:
      "**Two times / Twice as...as** (positive degree).",
    triggerWords: ["Two times as", "Twice as"],
    incorrect: { text: "He is twice taller than his brother.", highlight: "taller" },
    correct: { text: "He is two times as tall as his brother.", highlight: "as tall as" },
    tip: "Structure: 'as + adjective + as'. 'Twice as' is also acceptable.",
    examples: [
      { text: "This supersonic missile is three times as fast as the older model.", highlight: "as fast as" },
      { text: "The new stadium is twice as large as the old municipal ground.", highlight: "as large as" },
      { text: "Petrol in this state is two times as expensive as it was a decade ago.", highlight: "as expensive as" },
      { text: "He earns four times as much as he did in his previous job.", highlight: "as much as" },
      { text: "This alloy is five times as strong as ordinary structural steel.", highlight: "as strong as" }
    ]
  },
  {
    id: "rule-020",
    number: "Rule 20",
    title: "Two Qualities of Same Person → More + Adjective",
    category: "Comparison Rules",
    explanation:
      "Two qualities of same person → **More + positive adjective** (not -er).",
    triggerWords: ["More intelligent", "More beautiful"],
    incorrect: { text: "She is intelligenter than beautiful.", highlight: "intelligenter" },
    correct: { text: "She is more intelligent than beautiful.", highlight: "more intelligent" },
    tip: "Never use '-er' for comparing two different qualities of same person.",
    examples: [
      { text: "The general was more shrewd than brave during the tactical negotiations.", highlight: "more shrewd" },
      { text: "This smartphone is more durable than sleek.", highlight: "more durable" },
      { text: "His speech was more diplomatic than honest.", highlight: "more diplomatic" },
      { text: "The new tax policy is more complex than effective.", highlight: "more complex" },
      { text: "She is more hardworking than intelligent, which explains her consistent success.", highlight: "more hardworking" }
    ]
  },

  /* ===== BATCH 2 ===== */
  {
    id: "rule-021",
    number: "Rule 21",
    title: "Who → Subject Form for Persons",
    category: "Relative Pronouns",
    explanation:
      "'Who' is used only for **persons**. Never use 'who' for things or animals.",
    triggerWords: ["Who"],
    incorrect: { text: "The book who is on the table.", highlight: "who" },
    correct: { text: "The boy who won the race is my friend.", highlight: "who" },
    tip: "'Who' = persons only. For things/animals, use 'which' or 'that'.",
    examples: [
      { text: "The scientist who discovered this vaccine was awarded the Nobel Prize.", highlight: "who" },
      { text: "Police have arrested the hacker who breached the banking server.", highlight: "who" },
      { text: "Candidates who fail to produce original documents will be disqualified.", highlight: "who" },
      { text: "The pilot who averted the mid-air collision was praised by the ministry.", highlight: "who" },
      { text: "Only those who persevere through setbacks achieve lasting success.", highlight: "who" }
    ]
  },
  {
    id: "rule-022",
    number: "Rule 22",
    title: "Whom → Object Form for Persons",
    category: "Relative Pronouns",
    explanation:
      "'Whom' is the **object** form for persons — if 'him/her/them' fits → whom.",
    triggerWords: ["Whom", "him", "her", "them"],
    incorrect: { text: "The man who I met was honest.", highlight: "who" },
    correct: { text: "The man whom I met was honest.", highlight: "whom" },
    tip: "If 'him/her/them' fits → use 'whom'.",
    examples: [
      { text: "The diplomat whom the government appointed as envoy has vast experience.", highlight: "whom" },
      { text: "The witness whom the defense lawyer cross-examined turned hostile.", highlight: "whom" },
      { text: "He is the very mentor whom I owe my entire career to.", highlight: "whom" },
      { text: "The candidates whom the board interviewed yesterday will receive offer letters soon.", highlight: "whom" },
      { text: "The officer whom everyone admired for his honesty was transferred abruptly.", highlight: "whom" }
    ]
  },
  {
    id: "rule-023",
    number: "Rule 23",
    title: "Which → Animals and Things",
    category: "Relative Pronouns",
    explanation:
      "'Which' is used for **animals and things**. Never use 'which' for persons.",
    triggerWords: ["Which"],
    incorrect: { text: "The boy which won the race.", highlight: "which" },
    correct: { text: "The book which I bought is useful.", highlight: "which" },
    tip: "'Which' = animals/things only. For persons, use 'who', 'whom', or 'that'.",
    examples: [
      { text: "The submarine which was indigenously built passed all deep-sea trials.", highlight: "which" },
      { text: "The stray dog which alerted the guards saved the warehouse from a fire.", highlight: "which" },
      { text: "The treaty which was signed in Geneva aims to curb carbon emissions.", highlight: "which" },
      { text: "The evidence which the prosecution presented was dismissed by the court.", highlight: "which" },
      { text: "The bridge which connects the two islands took five years to construct.", highlight: "which" }
    ]
  },
  {
    id: "rule-024",
    number: "Rule 24",
    title: "That → Persons, Animals, Things",
    category: "Relative Pronouns",
    explanation:
      "'That' can be used for persons, animals, and things — almost everywhere in SSC exams.",
    triggerWords: ["That"],
    incorrect: { text: "", highlight: "" },
    correct: { text: "The boy that won the race.", highlight: "that" },
    tip: "'That' is the safest relative pronoun when unsure.",
    examples: [
      { text: "The student that topped the class received a scholarship.", highlight: "that" },
      { text: "The dog that guarded the house was loyal.", highlight: "that" },
      { text: "The book that I borrowed from the library was interesting.", highlight: "that" },
      { text: "The woman that lives next door is a doctor.", highlight: "that" },
      { text: "The watch that I gifted him stopped working.", highlight: "that" }
    ]
  },
  {
    id: "rule-025",
    number: "Rule 25",
    title: "After Certain Words → Use ONLY 'That'",
    category: "Relative Pronouns",
    explanation:
      "After All, Any, Only, Same, Superlative → use **only 'That'** (never 'which').",
    triggerWords: ["All", "Only", "Same", "Superlative"],
    incorrect: { text: "This is the same book which I bought.", highlight: "which" },
    correct: { text: "This is the same book that I bought.", highlight: "that" },
    tip: "After All, Any, Only, Same, etc. — use ONLY 'That' (not 'which').",
    examples: [
      { text: "All the funds that were allocated for flood relief have been utilized.", highlight: "that" },
      { text: "This is the same cyber-attack pattern that crippled the power grid last year.", highlight: "that" },
      { text: "He donated the little savings that he had accumulated over twenty years.", highlight: "that" },
      { text: "Dr. Kalam was the most inspiring leader that India has ever seen.", highlight: "that" },
      { text: "There is nothing that can deter a determined soldier from his duty.", highlight: "that" }
    ]
  },
  {
    id: "rule-026",
    number: "Rule 26",
    title: "Whoever vs Whomever",
    category: "Relative Pronouns",
    explanation:
      "**Whoever** = subject | **Whomever** = object.",
    triggerWords: ["Whoever", "Whomever"],
    incorrect: { text: "Give it to whoever you choose.", highlight: "whoever" },
    correct: { text: "Give it to whomever you choose.", highlight: "whomever" },
    tip: "Whoever = subject (he/she) | Whomever = object (him/her).",
    examples: [
      { text: "Whoever leaks confidential cabinet notes will face strict legal action.", highlight: "Whoever" },
      { text: "The award will be given to whomever the jury selects unanimously.", highlight: "whomever" },
      { text: "Whoever crosses the restricted perimeter without authorization will be detained.", highlight: "Whoever" },
      { text: "You may assign this sensitive investigation to whomever you trust the most.", highlight: "whomever" },
      { text: "Whoever finishes the obstacle course first will lead the platoon.", highlight: "Whoever" }
    ]
  },
  {
    id: "rule-027",
    number: "Rule 27",
    title: "Type 1 Conditional – Real Possibility",
    category: "Conditional Sentences",
    explanation:
      "**Type 1 Conditional**: If + Present Simple → Will + V1.",
    triggerWords: ["If", "will"],
    incorrect: { text: "If I will study, I will pass.", highlight: "will" },
    correct: { text: "If I study, I will pass.", highlight: "will" },
    tip: "Never use 'will' in the 'if' clause of Type 1 conditional.",
    examples: [
      { text: "If the inflation rate drops, the central bank will reduce interest rates.", highlight: "will" },
      { text: "If you submit the application after the deadline, the system will reject it.", highlight: "will" },
      { text: "If the weather clears up by noon, the helicopter will take off.", highlight: "will" },
      { text: "If he passes the medical examination, he will join the academy next month.", highlight: "will" },
      { text: "If we do not conserve groundwater today, future generations will face severe scarcity.", highlight: "will" }
    ]
  },
  {
    id: "rule-028",
    number: "Rule 28",
    title: "Type 2 Conditional – Unreal Present",
    category: "Conditional Sentences",
    explanation:
      "**Type 2 Conditional**: If + Past Simple → Would + V1.",
    triggerWords: ["were", "would"],
    incorrect: { text: "If I was rich, I will travel.", highlight: "was" },
    correct: { text: "If I were rich, I would travel.", highlight: "were" },
    tip: "Use 'were' for all persons in Type 2 conditional (even with 'I').",
    examples: [
      { text: "If I were you, I would accept the offer.", highlight: "were" },
      { text: "If he knew French, he would work in Paris.", highlight: "would" },
      { text: "If she studied harder, she would pass the exam.", highlight: "would" },
      { text: "If they had money, they would buy a house.", highlight: "would" },
      { text: "If I won the lottery, I would travel the world.", highlight: "would" }
    ]
  },
  {
    id: "rule-029",
    number: "Rule 29",
    title: "Type 3 Conditional – Unreal Past",
    category: "Conditional Sentences",
    explanation:
      "**Type 3 Conditional**: If + Had + V3 → Would Have + V3.",
    triggerWords: ["had", "would have"],
    incorrect: { text: "If I studied, I would have passed.", highlight: "studied" },
    correct: { text: "If I had studied, I would have passed.", highlight: "had" },
    tip: "Most SSC conditional questions come from this rule.",
    examples: [
      { text: "If the intelligence agency had acted on time, the attack would have been averted.", highlight: "had acted" },
      { text: "If the driver had not applied the emergency brakes, the train would have derailed.", highlight: "had not applied" },
      { text: "If you had informed me earlier, I would have arranged the necessary permits.", highlight: "had informed" },
      { text: "If the batsman had played sensibly, India would have won the match comfortably.", highlight: "had played" },
      { text: "If the patient had been brought to the hospital ten minutes earlier, doctors could have saved him.", highlight: "had been brought" }
    ]
  },
  {
    id: "rule-030",
    number: "Rule 30",
    title: "Universal Truth – Present in Both Clauses",
    category: "Conditional Sentences",
    explanation:
      "**Universal Truth**: If + Present → Present (no future tense).",
    triggerWords: ["water boils", "ice melts"],
    incorrect: { text: "If water reaches 100°C, it will boil.", highlight: "will" },
    correct: { text: "If water reaches 100°C, it boils.", highlight: "boils" },
    tip: "Universal truths use Present in both clauses.",
    examples: [
      { text: "If you expose phosphorus to air, it catches fire spontaneously.", highlight: "catches" },
      { text: "If demand exceeds supply in a free market, prices rise.", highlight: "rise" },
      { text: "If an object travels faster than the speed of sound, it creates a sonic boom.", highlight: "creates" },
      { text: "If plants do not get sunlight, photosynthesis stops.", highlight: "stops" },
      { text: "If you mix an acid with a base, it produces salt and water.", highlight: "produces" }
    ]
  },
  {
    id: "rule-031",
    number: "Rule 31",
    title: "One of the + Plural Noun",
    category: "One of the",
    explanation:
      "**One of the** + **plural noun**.",
    triggerWords: ["One of the boys", "One of the books"],
    incorrect: { text: "One of the boy", highlight: "boy" },
    correct: { text: "One of the boys", highlight: "boys" },
    tip: "Always use a plural noun after 'One of the'.",
    examples: [
      { text: "One of the major challenges facing urban planners is waste management.", highlight: "challenges" },
      { text: "She was selected as one of the top finalists in the national debate.", highlight: "finalists" },
      { text: "One of the primary reasons for his dismissal was gross negligence.", highlight: "reasons" },
      { text: "Bengaluru is one of the fastest-growing cities in Asia.", highlight: "cities" },
      { text: "One of the key witnesses refused to appear before the tribunal.", highlight: "witnesses" }
    ]
  },
  {
    id: "rule-032",
    number: "Rule 32",
    title: "One of the + Plural Noun + Singular Verb",
    category: "One of the",
    explanation:
      "**One of the** + plural noun → **singular verb** (subject = One).",
    triggerWords: ["One of the students is"],
    incorrect: { text: "One of the students are absent.", highlight: "are" },
    correct: { text: "One of the students is absent.", highlight: "is" },
    tip: "Subject = ONE, so verb is singular.",
    examples: [
      { text: "One of the newly inducted submarines has developed a minor technical snag.", highlight: "has" },
      { text: "One of the most crucial aspects of leadership is accountability.", highlight: "is" },
      { text: "One of the accused officers was suspended pending a departmental inquiry.", highlight: "was" },
      { text: "One of the ancient manuscripts contains detailed astronomical calculations.", highlight: "contains" },
      { text: "One of the main objectives of this mission is to map lunar minerals.", highlight: "is" }
    ]
  },
  {
    id: "rule-033",
    number: "Rule 33",
    title: "One of the + Plural Noun + Who/That + Plural Verb",
    category: "One of the",
    explanation:
      "**One of the** + plural noun + **Who/That** → plural verb.",
    triggerWords: ["boys who work", "students who are"],
    incorrect: { text: "He is one of the boys who works hard.", highlight: "works" },
    correct: { text: "He is one of the boys who work hard.", highlight: "work" },
    tip: "'Who' refers to the plural noun → plural verb.",
    examples: [
      { text: "Dr. Vikram Sarabhai is one of the visionaries who have shaped modern India.", highlight: "have" },
      { text: "This is one of the few policies that address grassroots agricultural distress.", highlight: "address" },
      { text: "He is one of those rare officers who lead from the front during crises.", highlight: "lead" },
      { text: "Malaria is one of the diseases that are transmitted by mosquitoes.", highlight: "are" },
      { text: "She is one of the candidates who were shortlisted for the final round.", highlight: "were" }
    ]
  },
  {
    id: "rule-034",
    number: "Rule 34",
    title: "The Only One Of + Plural Noun + Who/That + Singular Verb",
    category: "One of the",
    explanation:
      "**The only one of** + plural noun + **Who/That** → singular verb.",
    triggerWords: ["only one of the boys who works"],
    incorrect: { text: "He is the only one of the boys who work hard.", highlight: "work" },
    correct: { text: "He is the only one of the boys who works hard.", highlight: "works" },
    tip: "'Only one' = singular subject → singular verb.",
    examples: [
      { text: "He is the only one of the applicants who possesses fluency in Mandarin.", highlight: "possesses" },
      { text: "This is the only one of the old bridges that has withstood every flood.", highlight: "has" },
      { text: "Captain Batra was the only one of the officers who was awarded the Param Vir Chakra in that sector.", highlight: "was" },
      { text: "She is the only one of my colleagues who understands this legacy software.", highlight: "understands" },
      { text: "That is the only one of the proposals that meets all environmental norms.", highlight: "meets" }
    ]
  },
  {
    id: "rule-035",
    number: "Rule 35",
    title: "No Present Perfect with Definite Past Time",
    category: "Tense Errors",
    explanation:
      "No **Present Perfect** with definite past time (yesterday, ago, last week).",
    triggerWords: ["yesterday", "last week", "ago"],
    incorrect: { text: "He has left yesterday.", highlight: "has left" },
    correct: { text: "He left yesterday.", highlight: "left" },
    tip: "Definite past time → Simple Past, not Present Perfect.",
    examples: [
      { text: "The committee submitted its final report last Friday.", highlight: "submitted" },
      { text: "India conducted its second nuclear test in May 1998.", highlight: "conducted" },
      { text: "The suspect fled the country two days ago.", highlight: "fled" },
      { text: "We received the official notification yesterday evening.", highlight: "received" },
      { text: "The parliament passed this landmark legislation in 2023.", highlight: "passed" }
    ]
  },
  {
    id: "rule-036",
    number: "Rule 36",
    title: "Present Perfect = Time Not Mentioned",
    category: "Tense Errors",
    explanation:
      "**Present Perfect** — time unspecified / impact continues.",
    triggerWords: ["has gone", "have completed"],
    incorrect: { text: "", highlight: "" },
    correct: { text: "He has gone to London.", highlight: "has gone" },
    tip: "No time word → Present Perfect.",
    examples: [
      { text: "ISRO has successfully launched multiple communication satellites into geostationary orbit.", highlight: "has launched" },
      { text: "The Ministry of Finance has released fresh guidelines for digital banking.", highlight: "has released" },
      { text: "Several startups have emerged in the defense manufacturing sector recently.", highlight: "have emerged" },
      { text: "I have already verified all the documents attached to the file.", highlight: "have verified" },
      { text: "The court has stayed the execution of the order until further notice.", highlight: "has stayed" }
    ]
  },
  {
    id: "rule-037",
    number: "Rule 37",
    title: "Past Perfect Requires Two Past Events",
    category: "Tense Errors",
    explanation:
      "**Past Perfect** needs two past events — earlier one gets Past Perfect.",
    triggerWords: ["had left", "before I arrived"],
    incorrect: { text: "He had left yesterday.", highlight: "had left" },
    correct: { text: "The train had left before I arrived.", highlight: "had left" },
    tip: "One past event alone → Simple Past. Two past events → Past Perfect for the earlier one.",
    examples: [
      { text: "The terrorists had fled across the border before the reinforcement arrived.", highlight: "had fled" },
      { text: "By the time the fire brigade reached the spot, the blaze had gutted three floors.", highlight: "had gutted" },
      { text: "The match had already started when we entered the stadium.", highlight: "had started" },
      { text: "She realized that she had left her admit card at home only after reaching the centre.", highlight: "had left" },
      { text: "The patient had died before the ambulance could reach the trauma centre.", highlight: "had died" }
    ]
  },
  {
    id: "rule-038",
    number: "Rule 38",
    title: "Past Continuous for Ongoing Past Action",
    category: "Tense Errors",
    explanation:
      "**Past Continuous**: Was/Were + V1+ing for ongoing past action.",
    triggerWords: ["was reading", "were playing"],
    incorrect: { text: "I was read when he came.", highlight: "read" },
    correct: { text: "I was reading when he came.", highlight: "reading" },
    tip: "Past Continuous describes ongoing action interrupted by a simple past action.",
    examples: [
      { text: "The radar operator was monitoring the airspace when the unidentified aircraft appeared.", highlight: "was monitoring" },
      { text: "While the ministers were debating the bill, protesters gathered outside Parliament.", highlight: "were debating" },
      { text: "Heavy snow was falling when the convoy crossed the mountain pass.", highlight: "was falling" },
      { text: "The technician was repairing the high-voltage line when the power was accidentally restored.", highlight: "was repairing" },
      { text: "They were conducting a routine patrol when they spotted the suspicious package.", highlight: "were conducting" }
    ]
  },
  {
    id: "rule-039",
    number: "Rule 39",
    title: "Wish + Past Subjunctive",
    category: "Wish / As If / As Though",
    explanation:
      "**Wish** + past subjunctive (**were** / **had** / V2).",
    triggerWords: ["wish I were", "wish I knew"],
    incorrect: { text: "I wish I am rich.", highlight: "am" },
    correct: { text: "I wish I were rich.", highlight: "were" },
    tip: "'Wish' takes past tense form — 'were' for all persons.",
    examples: [
      { text: "I wish I knew how to play the guitar.", highlight: "knew" },
      { text: "The villagers wish they had uninterrupted electricity supply during summer.", highlight: "had" },
      { text: "He wishes he knew how to operate the new diagnostic equipment.", highlight: "knew" },
      { text: "Many aspirants wish they could attempt the exam one more time.", highlight: "could" },
      { text: "I wish the authorities took stricter action against noise pollution.", highlight: "took" }
    ]
  },
  {
    id: "rule-040",
    number: "Rule 40",
    title: "As If / As Though + Past Form (Imaginary)",
    category: "Wish / As If / As Though",
    explanation:
      "**As If / As Though** + past form for imaginary situations.",
    triggerWords: ["as if he knew", "as though she were"],
    incorrect: { text: "He behaves as if he knows everything.", highlight: "knows" },
    correct: { text: "He behaves as if he knew everything.", highlight: "knew" },
    tip: "Exam grammar prefers past form after 'as if/as though' for imaginary situations.",
    examples: [
      { text: "The rookie speaks as if he were the commanding general of the entire division.", highlight: "were" },
      { text: "He gave orders to the staff as though he owned the entire organization.", highlight: "owned" },
      { text: "She reacted as if she had seen a ghost inside the abandoned bungalow.", highlight: "had seen" },
      { text: "The accused acted as though he knew nothing about the missing funds.", highlight: "knew" },
      { text: "He walks around the campus as if he were the principal of the college.", highlight: "were" }
    ]
  },

  /* ===== BATCH 3 ===== */
  {
    id: "rule-041",
    number: "Rule 41",
    title: "It's Time + Subject + Simple Past (V2)",
    category: "It's Time / High Time",
    explanation:
      "**It's Time** + subject takes a **simple past verb (V2)** — expresses something that should have been done already.",
    incorrect: { text: "It is time the government takes action.", highlight: "takes" },
    correct: { text: "It is time the government took action.", highlight: "took" },
    tip: "Never use present tense after 'It's time'.",
    examples: [
      { text: "It is time the government took concrete steps to curb urban air pollution.", highlight: "took" },
      { text: "It is time we revised our preparation strategy for the Tier-2 examination.", highlight: "revised" },
      { text: "It is time the judiciary cleared the backlog of pending constitutional cases.", highlight: "cleared" },
      { text: "It is time you realized the gravity of the financial crisis.", highlight: "realized" },
      { text: "It is time the management addressed the grievances of the factory workers.", highlight: "addressed" }
    ]
  },
  {
    id: "rule-042",
    number: "Rule 42",
    title: "It's High Time + Subject + Simple Past (V2)",
    category: "It's Time / High Time",
    explanation:
      "**It's High Time** + subject takes a **simple past verb (V2)** — expresses urgent necessity.",
    incorrect: { text: "It is high time the authorities enforce strict penalties.", highlight: "enforce" },
    correct: { text: "It is high time the authorities enforced strict penalties.", highlight: "enforced" },
    tip: "'High Time' adds urgency — still uses simple past.",
    examples: [
      { text: "It is high time the authorities enforced strict penalties against cybercriminals.", highlight: "enforced" },
      { text: "It is high time India invested heavily in indigenous semiconductor manufacturing.", highlight: "invested" },
      { text: "It is high time the board appointed a full-time chief vigilance officer.", highlight: "appointed" },
      { text: "It is high time you stopped procrastinating and started taking mock tests.", highlight: "stopped" },
      { text: "It is high time the municipal corporation repaired the dilapidated bridges.", highlight: "repaired" }
    ]
  },
  {
    id: "rule-043",
    number: "Rule 43",
    title: "It's About Time + Subject + Simple Past (V2)",
    category: "It's Time / High Time",
    explanation:
      "**It's About Time** + subject takes a **simple past verb (V2)** — expresses delayed action.",
    incorrect: { text: "It is about time the committee submits its report.", highlight: "submits" },
    correct: { text: "It is about time the committee submitted its report.", highlight: "submitted" },
    tip: "'About Time' — still uses simple past verb.",
    examples: [
      { text: "It is about time the committee submitted its inquiry report on the train mishap.", highlight: "submitted" },
      { text: "It is about time the team adapted to the changing pitch conditions.", highlight: "adapted" },
      { text: "It is about time we left for the cantonment before the fog thickens.", highlight: "left" },
      { text: "It is about time the ministry released the official recruitment calendar.", highlight: "released" },
      { text: "It is about time he acknowledged his mistake before the disciplinary panel.", highlight: "acknowledged" }
    ]
  },
  {
    id: "rule-044",
    number: "Rule 44",
    title: "Singular Noun + Preposition + Same Singular Noun",
    category: "Nouns Joined by Prepositions",
    explanation:
      "**Singular noun + preposition + same singular noun** → **singular verb**.",
    triggerWords: ["Row upon row", "Ship after ship", "Word for word"],
    incorrect: { text: "Row upon row were visible across the valley.", highlight: "were" },
    correct: { text: "Row upon row was visible across the valley.", highlight: "was" },
    tip: "The first noun is the subject — keep it singular.",
    examples: [
      { text: "Row upon row of lush green tea bushes was visible across the valley.", highlight: "was" },
      { text: "Ship after ship was inspected by the coast guard at the harbour.", highlight: "was" },
      { text: "Word for word was transcribed accurately by the court stenographer.", highlight: "was" },
      { text: "Village after village was submerged when the river breached its embankment.", highlight: "was" },
      { text: "Letter after letter was dispatched to the headquarters without receiving a reply.", highlight: "was" }
    ]
  },
  {
    id: "rule-045",
    number: "Rule 45",
    title: "Plural Noun + Preposition + Plural Noun",
    category: "Nouns Joined by Prepositions",
    explanation:
      "**Plural noun + preposition + same plural noun** → **plural verb**.",
    triggerWords: ["Piles on piles", "Rows upon rows", "Heaps upon heaps"],
    incorrect: { text: "Piles on piles was destroyed.", highlight: "was" },
    correct: { text: "Piles on piles were destroyed.", highlight: "were" },
    tip: "The first noun is plural — verb must agree.",
    examples: [
      { text: "Piles on piles of seized contraband were destroyed in the presence of magistrates.", highlight: "were" },
      { text: "Rows upon rows of newly manufactured artillery guns were displayed at the expo.", highlight: "were" },
      { text: "Heaps upon heaps of uncollected garbage were lying along the highway.", highlight: "were" },
      { text: "Stacks on stacks of unclassified files were recovered during the raid.", highlight: "were" },
      { text: "Waves after waves of protesters were surging toward the barricades.", highlight: "were" }
    ]
  },
  {
    id: "rule-046",
    number: "Rule 46",
    title: "Indefinite Pronoun + Else → 's on 'Else'",
    category: "Possessives",
    explanation:
      "**Indefinite pronoun + else** → add **apostrophe-s ('s)** to **'else'** (not the pronoun).",
    incorrect: { text: "someone's else dossier", highlight: "someone's else" },
    correct: { text: "someone else's dossier", highlight: "else's" },
    tip: "The possessive marker goes on 'else', not on the indefinite pronoun.",
    examples: [
      { text: "The intelligence officer mistakenly picked up someone else's classified dossier.", highlight: "else's" },
      { text: "You must not take credit for anybody else's research work.", highlight: "else's" },
      { text: "The verdict was influenced by nobody else's testimony except the eyewitness.", highlight: "else's" },
      { text: "In a crisis, a leader relies on his own judgment rather than everyone else's advice.", highlight: "else's" },
      { text: "The biometric scanner rejected the entry because the card belonged to somebody else's account.", highlight: "else's" }
    ]
  },
  {
    id: "rule-047",
    number: "Rule 47",
    title: "Joint Possession → 's on Last Noun Only",
    category: "Possessives",
    explanation:
      "**Joint possession** (two people own together) → add **'s** only to the **last noun**.",
    incorrect: { text: "India's and France's joint naval exercise", highlight: "India's and France's" },
    correct: { text: "India and France's joint naval exercise", highlight: "France's" },
    tip: "When possession is joint, only the last noun takes 's.",
    examples: [
      { text: "India and France's joint naval exercise in the Arabian Sea concluded yesterday.", highlight: "France's" },
      { text: "Rohit and Virat's partnership rescued the team from an early collapse.", highlight: "Virat's" },
      { text: "Tata and Airbus's collaborative manufacturing facility will produce military transport aircraft.", highlight: "Airbus's" },
      { text: "My brother and sister-in-law's ancestral property is located in Dehradun.", highlight: "sister-in-law's" },
      { text: "Sharma and Verma's law firm handles high-profile corporate mergers.", highlight: "Verma's" }
    ]
  },
  {
    id: "rule-048",
    number: "Rule 48",
    title: "Separate Possession → 's on Both Nouns",
    category: "Possessives",
    explanation:
      "**Separate possession** (each owns separately) → add **'s** to **both nouns**.",
    incorrect: { text: "America's and Russia's space agencies", highlight: "America's and Russia's" },
    correct: { text: "America's and Russia's space agencies", highlight: "America's and Russia's" },
    tip: "When each person owns separately, both nouns take 's — they are different things.",
    examples: [
      { text: "America's and Russia's space agencies are cooperating on the orbital station project.", highlight: "America's and Russia's" },
      { text: "Tagore's and Premchand's literary works reflect the social realities of their eras.", highlight: "Tagore's and Premchand's" },
      { text: "The army's and the air force's communication protocols are being integrated.", highlight: "army's and the air force's" },
      { text: "Neha's and Priya's scores in the written examination were identical.", highlight: "Neha's and Priya's" },
      { text: "The plaintiff's and the defendant's statements contradicted each other completely.", highlight: "plaintiff's and the defendant's" }
    ]
  },
  {
    id: "rule-049",
    number: "Rule 49",
    title: "Chain / Double Possession → 'of' Construction",
    category: "Possessives",
    explanation:
      "**Chain possession** (A of B's C) → use **'of' construction** in formal exam English instead of stacking 's.",
    incorrect: { text: "My friend's father's car", highlight: "My friend's father's car" },
    correct: { text: "The car of my friend's father", highlight: "of my friend's father" },
    tip: "Avoid multiple 's in a row — use 'of' for the outer possession.",
    examples: [
      { text: "The car of my friend's father was stolen from outside the secretariat.", highlight: "of my friend's father" },
      { text: "The resignation of the minister's private secretary triggered a political storm.", highlight: "of the minister's private secretary" },
      { text: "The testimony of the accused's brother proved crucial for the prosecution.", highlight: "of the accused's brother" },
      { text: "The orders of the commander's deputy were relayed to all forward posts.", highlight: "of the commander's deputy" },
      { text: "The residence of the governor's legal advisor was placed under heavy security.", highlight: "of the governor's legal advisor" }
    ]
  },
  {
    id: "rule-050",
    number: "Rule 50",
    title: "Plural of Hyphenated Compound Nouns",
    category: "Compound Nouns",
    explanation:
      "**Hyphenated compound nouns** → pluralize the **principal word** (not the last word).",
    triggerWords: ["commanders-in-chief", "passers-by", "lookers-on"],
    incorrect: { text: "commander-in-chiefs", highlight: "commander-in-chiefs" },
    correct: { text: "commanders-in-chief", highlight: "commanders-in-chief" },
    tip: "Pluralize the main word, not the preposition/article at the end.",
    examples: [
      { text: "All commanders-in-chief of the armed forces attended the strategic security briefing.", highlight: "commanders-in-chief" },
      { text: "Several passers-by helped rescue the injured passengers from the overturned bus.", highlight: "passers-by" },
      { text: "Two lookers-on were summoned by the police to record their statements.", highlight: "lookers-on" },
      { text: "The new tax exemption applies to sons-in-law and daughters-in-law alike.", highlight: "sons-in-law" },
      { text: "All editors-in-chief of national dailies were invited to the press summit.", highlight: "editors-in-chief" }
    ]
  },
  {
    id: "rule-051",
    number: "Rule 51",
    title: "Compound Nouns Ending in '-ful' or Man/Woman",
    category: "Compound Nouns",
    explanation:
      "**Compound nouns ending in '-ful'** → pluralize the first part (**spoonfuls**, not **spoonsful**). **Man/Woman** compounds pluralize both parts.",
    triggerWords: ["spoonfuls", "men-servants", "women-officers"],
    incorrect: { text: "two spoonsful of syrup", highlight: "spoonsful" },
    correct: { text: "two spoonfuls of syrup", highlight: "spoonfuls" },
    tip: "'-ful' compounds pluralize the first word; 'man/woman' compounds pluralize both.",
    examples: [
      { text: "The doctor advised the patient to take two spoonfuls of the syrup twice daily.", highlight: "spoonfuls" },
      { text: "Both men-servants were questioned regarding the missing silverware.", highlight: "men-servants" },
      { text: "Several women-officers have been inducted into combat support roles recently.", highlight: "women-officers" },
      { text: "The contractor ordered ten truckloads of gravel for the runway repair.", highlight: "truckloads" },
      { text: "We need at least three handfuls of soil samples from different depths.", highlight: "handfuls" }
    ]
  },
  {
    id: "rule-052",
    number: "Rule 52",
    title: "One and a Half + Plural Noun",
    category: "One and a Half",
    explanation:
      "**One and a half** always takes a **plural noun** — never singular.",
    triggerWords: ["one and a half hours", "one and a half years"],
    incorrect: { text: "one and a half hour", highlight: "hour" },
    correct: { text: "one and a half hours", highlight: "hours" },
    tip: "Always plural noun after 'one and a half'.",
    examples: [
      { text: "The rescue operation lasted for one and a half hours amidst heavy rainfall.", highlight: "hours" },
      { text: "He took one and a half years to complete his master's dissertation.", highlight: "years" },
      { text: "The express train was delayed by one and a half days due to track maintenance.", highlight: "days" },
      { text: "The tailor asked for one and a half metres of fabric to stitch the uniform.", highlight: "metres" },
      { text: "The truce held for barely one and a half weeks before skirmishes resumed.", highlight: "weeks" }
    ]
  },
  {
    id: "rule-053",
    number: "Rule 53",
    title: "One and a Half + Plural Noun + Singular Verb",
    category: "One and a Half",
    explanation:
      "**One and a half** + plural noun → treated as a **single unit** → **singular verb**.",
    triggerWords: ["one and a half hours is", "one and a half years was"],
    incorrect: { text: "One and a half hours are sufficient.", highlight: "are" },
    correct: { text: "One and a half hours is sufficient.", highlight: "is" },
    tip: "Treated as one unit → singular verb.",
    examples: [
      { text: "One and a half hours is sufficient to solve the reasoning section of this paper.", highlight: "is" },
      { text: "One and a half years was spent in conducting clinical trials for the new drug.", highlight: "was" },
      { text: "One and a half kilometres is not a long distance for an army recruit to sprint.", highlight: "is" },
      { text: "One and a half months has elapsed since the tender notice was published.", highlight: "has" },
      { text: "One and a half lakh rupees was sanctioned for upgrading the laboratory.", highlight: "was" }
    ]
  },
  {
    id: "rule-054",
    number: "Rule 54",
    title: "Fraction + Of + Singular / Uncountable Noun",
    category: "Fractions",
    explanation:
      "**Fraction + of + singular/uncountable noun** → **singular verb**.",
    triggerWords: ["Two-thirds of", "Half of", "Three-fourths of"],
    incorrect: { text: "Two-thirds of the territory are under surveillance.", highlight: "are" },
    correct: { text: "Two-thirds of the territory is under surveillance.", highlight: "is" },
    tip: "Singular/uncountable noun after 'of' → singular verb.",
    examples: [
      { text: "Two-thirds of the disputed territory is still under military surveillance.", highlight: "is" },
      { text: "Half of the consignment was damaged due to improper packaging.", highlight: "was" },
      { text: "Three-fourths of the earth's surface is covered with water.", highlight: "is" },
      { text: "One-fifth of the annual defense budget has been earmarked for modernization.", highlight: "has" },
      { text: "One-third of the syllabus remains to be covered before the prelims.", highlight: "remains" }
    ]
  },
  {
    id: "rule-055",
    number: "Rule 55",
    title: "Fraction + Of + Plural Countable Noun",
    category: "Fractions",
    explanation:
      "**Fraction + of + plural countable noun** → **plural verb**.",
    triggerWords: ["Two-thirds of the members", "Half of the trainees"],
    incorrect: { text: "Two-thirds of the members has voted.", highlight: "has" },
    correct: { text: "Two-thirds of the members have voted.", highlight: "have" },
    tip: "Plural countable noun after 'of' → plural verb.",
    examples: [
      { text: "Two-thirds of the members present have voted in favour of the amendment.", highlight: "have" },
      { text: "Half of the newly recruited trainees were posted to forward areas.", highlight: "were" },
      { text: "Three-fourths of the heritage buildings in the old city need urgent restoration.", highlight: "need" },
      { text: "One-fourth of the applicants were disqualified during document verification.", highlight: "were" },
      { text: "Two-fifths of the villages in the district have been connected by all-weather roads.", highlight: "have" }
    ]
  },
  {
    id: "rule-056",
    number: "Rule 56",
    title: "Percentage + Of + Noun → Verb Agrees with Noun After 'Of'",
    category: "Fractions",
    explanation:
      "**Percentage + of + noun** → verb agrees with the **noun after 'of'** (singular/uncountable → singular; plural → plural).",
    triggerWords: ["Sixty percent of", "Seventy percent of"],
    incorrect: { text: "Seventy percent of the voters has cast their ballots.", highlight: "has" },
    correct: { text: "Seventy percent of the voters have cast their ballots.", highlight: "have" },
    tip: "Look at the noun after 'of' to decide singular/plural verb.",
    examples: [
      { text: "Sixty percent of the drinking water in this region is contaminated with fluoride.", highlight: "is" },
      { text: "Seventy percent of the registered voters have cast their ballots so far.", highlight: "have" },
      { text: "Twenty-five percent of the total revenue goes toward debt servicing.", highlight: "goes" },
      { text: "Eighty percent of the migrated birds return to their breeding grounds by April.", highlight: "return" },
      { text: "Forty percent of the work on the expressway has already been completed.", highlight: "has" }
    ]
  },
  {
    id: "rule-057",
    number: "Rule 57",
    title: "Many + Plural Noun + Plural Verb",
    category: "Many / Many A / More Than",
    explanation:
      "**Many + plural noun** → always takes a **plural verb**.",
    triggerWords: ["Many aspiring officers", "Many ancient inscriptions"],
    incorrect: { text: "Many aspiring officers prepares for the exam.", highlight: "prepares" },
    correct: { text: "Many aspiring officers prepare for the exam.", highlight: "prepare" },
    tip: "Many always takes plural verb.",
    examples: [
      { text: "Many aspiring officers prepare for the CDS exam alongside their graduation.", highlight: "prepare" },
      { text: "Many ancient inscriptions have been deciphered by epigraphists recently.", highlight: "have" },
      { text: "Many coastal districts were evacuated ahead of the cyclone's landfall.", highlight: "were" },
      { text: "Many economists believe that inflation will moderate in the next quarter.", highlight: "believe" },
      { text: "Many soldiers lay down their lives to safeguard the sovereignty of the nation.", highlight: "lay" }
    ]
  },
  {
    id: "rule-058",
    number: "Rule 58",
    title: "Many a / Many an + Singular Noun + Singular Verb",
    category: "Many / Many A / More Than",
    explanation:
      "**Many a / Many an + singular noun** → **singular verb**.",
    triggerWords: ["Many a brave soldier", "Many an experienced diplomat"],
    incorrect: { text: "Many a brave soldier have sacrificed his life.", highlight: "have" },
    correct: { text: "Many a brave soldier has sacrificed his life.", highlight: "has" },
    tip: "Singular noun → singular verb.",
    examples: [
      { text: "Many a brave soldier has sacrificed his life in the treacherous terrain of Kargil.", highlight: "has" },
      { text: "Many an experienced diplomat was consulted before drafting the bilateral accord.", highlight: "was" },
      { text: "Many a promising startup fails due to poor cash-flow management.", highlight: "fails" },
      { text: "Many a candidate commits silly mistakes under examination pressure.", highlight: "commits" },
      { text: "Many an opportunity was lost because of bureaucratic red tape.", highlight: "was" }
    ]
  },
  {
    id: "rule-059",
    number: "Rule 59",
    title: "More Than One + Singular Noun + Singular Verb",
    category: "Many / Many A / More Than",
    explanation:
      "**More than one + singular noun** → **singular verb**.",
    triggerWords: ["More than one suspect", "More than one bridge"],
    incorrect: { text: "More than one suspect were detained.", highlight: "were" },
    correct: { text: "More than one suspect was detained.", highlight: "was" },
    tip: "Singular noun → singular verb.",
    examples: [
      { text: "More than one suspect was detained for questioning in the espionage case.", highlight: "was" },
      { text: "More than one bridge has collapsed in this flood-prone belt over the past decade.", highlight: "has" },
      { text: "More than one witness has corroborated the victim's version of events.", highlight: "has" },
      { text: "More than one attempt is required to master complex data interpretation sets.", highlight: "is" },
      { text: "More than one minister was absent from the crucial cabinet meeting.", highlight: "was" }
    ]
  },
  {
    id: "rule-060",
    number: "Rule 60",
    title: "More Than Two / Three / Four + Plural Noun + Plural Verb",
    category: "Many / Many A / More Than",
    explanation:
      "**More than two/three/four + plural noun** → **plural verb**.",
    triggerWords: ["More than two dozen", "More than three hundred"],
    incorrect: { text: "More than two dozen flights was diverted.", highlight: "was" },
    correct: { text: "More than two dozen flights were diverted.", highlight: "were" },
    tip: "Plural noun → plural verb.",
    examples: [
      { text: "More than two dozen flights were diverted due to poor visibility at the airport.", highlight: "were" },
      { text: "More than three hundred villages have benefited from the solar micro-grid project.", highlight: "have" },
      { text: "More than five members of the committee oppose the proposed tariff hike.", highlight: "oppose" },
      { text: "More than ten years have passed since the treaty was ratified.", highlight: "have" },
      { text: "More than four battalions were deployed to restore normalcy in the disturbed area.", highlight: "were" }
    ]
  },

  /* ===== BATCH 4 ===== */
  {
    id: "rule-061",
    number: "Rule 61",
    title: "A Number Of + Plural Noun + Plural Verb",
    category: "A Number Of / The Number Of",
    explanation:
      "**A number of + plural noun** → **plural verb** (means 'several').",
    triggerWords: ["A number of reforms", "A number of intelligence inputs"],
    incorrect: { text: "A number of reforms has been introduced.", highlight: "has" },
    correct: { text: "A number of reforms have been introduced.", highlight: "have" },
    tip: "'A number of' = several → plural verb.",
    examples: [
      { text: "A number of reforms have been introduced to streamline the recruitment process.", highlight: "have" },
      { text: "A number of intelligence inputs indicate an imminent cyber threat.", highlight: "indicate" },
      { text: "A number of senior bureaucrats were transferred in the administrative reshuffle.", highlight: "were" },
      { text: "A number of rare manuscripts are preserved in the national archives.", highlight: "are" },
      { text: "A number of discrepancies were detected during the audit of the accounts.", highlight: "were" }
    ]
  },
  {
    id: "rule-062",
    number: "Rule 62",
    title: "The Number Of + Plural Noun + Singular Verb",
    category: "A Number Of / The Number Of",
    explanation:
      "**The number of + plural noun** → **singular verb** (refers to the count itself).",
    triggerWords: ["The number of aspirants", "The number of cyber-fraud cases"],
    incorrect: { text: "The number of aspirants are rising every year.", highlight: "are" },
    correct: { text: "The number of aspirants is rising every year.", highlight: "is" },
    tip: "'The number of' = the count → singular verb.",
    examples: [
      { text: "The number of aspirants appearing for the CGL exam is rising every year.", highlight: "is" },
      { text: "The number of cyber-fraud cases reported in metro cities has doubled since last year.", highlight: "has" },
      { text: "The number of vacancies notified by the commission was unexpectedly low.", highlight: "was" },
      { text: "The number of endangered tigers in the reserve has increased steadily.", highlight: "has" },
      { text: "The number of road accidents on this highway is a matter of grave concern.", highlight: "is" }
    ]
  },
  {
    id: "rule-063",
    number: "Rule 63",
    title: "A Good Many / A Great Many + Plural Noun + Plural Verb",
    category: "A Number Of / The Number Of",
    explanation:
      "**A good many / A great many + plural noun** → **plural verb** (means 'a large number').",
    triggerWords: ["A good many cadets", "A great many historical monuments"],
    incorrect: { text: "A good many cadets was commended.", highlight: "was" },
    correct: { text: "A good many cadets were commended.", highlight: "were" },
    tip: "Plural verb — these phrases mean 'many'.",
    examples: [
      { text: "A good many cadets were commended for their exceptional performance during the camp.", highlight: "were" },
      { text: "A great many historical monuments have suffered damage due to acid rain.", highlight: "have" },
      { text: "A good many questions in the general awareness section were based on current affairs.", highlight: "were" },
      { text: "A great many investors have shifted their capital to renewable energy bonds.", highlight: "have" },
      { text: "A good many soldiers are proficient in handling advanced night-vision gear.", highlight: "are" }
    ]
  },
  {
    id: "rule-064",
    number: "Rule 64",
    title: "Few = Almost None (Negative; Plural Countable)",
    category: "Few / A Few / Little / A Little",
    explanation:
      "**Few** (without 'a') → **almost none** → negative meaning with plural countable nouns.",
    triggerWords: ["Few officers", "Few people"],
    incorrect: { text: "A few officers possess the tactical acumen.", highlight: "A few" },
    correct: { text: "Few officers possess the tactical acumen.", highlight: "Few" },
    tip: "'Few' = almost none (negative). 'A few' = some (positive).",
    examples: [
      { text: "Few officers possess the tactical acumen required to command a mountain division.", highlight: "Few" },
      { text: "Because the terrain was inaccessible, few journalists could reach the blast site.", highlight: "few" },
      { text: "Few people realize how much discipline is required to clear national-level exams.", highlight: "Few" },
      { text: "Few remedies exist for a disease once it reaches the terminal stage.", highlight: "Few" },
      { text: "Despite strict warnings, few defaulters came forward to settle their dues.", highlight: "few" }
    ]
  },
  {
    id: "rule-065",
    number: "Rule 65",
    title: "A Few = Some, At Least a Small Number (Positive; Plural Countable)",
    category: "Few / A Few / Little / A Little",
    explanation:
      "**A few** → **some, at least a small number** → positive meaning with plural countable nouns.",
    triggerWords: ["A few candidates", "A few precautionary measures"],
    incorrect: { text: "Few candidates managed to solve the puzzle.", highlight: "Few" },
    correct: { text: "A few candidates managed to solve the puzzle.", highlight: "A few" },
    tip: "'A few' = some (positive). 'Few' = almost none (negative).",
    examples: [
      { text: "Only a few candidates managed to solve the final puzzle within the allotted time.", highlight: "a few" },
      { text: "A few precautionary measures can prevent major electrical fires in factories.", highlight: "A few" },
      { text: "We still have a few days left to revise all the important vocabulary lists.", highlight: "a few" },
      { text: "A few prominent scientists dissented from the majority view in the report.", highlight: "A few" },
      { text: "A few modifications in the engine design significantly improved fuel efficiency.", highlight: "A few" }
    ]
  },
  {
    id: "rule-066",
    number: "Rule 66",
    title: "Little = Almost None (Negative; Uncountable)",
    category: "Few / A Few / Little / A Little",
    explanation:
      "**Little** (without 'a') → **almost none** → negative meaning with uncountable nouns.",
    triggerWords: ["little hope", "little remorse"],
    incorrect: { text: "A little hope of finding survivors.", highlight: "A little" },
    correct: { text: "Little hope of finding survivors.", highlight: "Little" },
    tip: "'Little' = almost none (negative). 'A little' = some quantity (positive).",
    examples: [
      { text: "There is little hope of finding survivors beneath the rubble after seventy-two hours.", highlight: "little" },
      { text: "The accused showed little remorse for the financial loss caused to small investors.", highlight: "little" },
      { text: "Little progress has been made in resolving the prolonged border deadlock.", highlight: "Little" },
      { text: "With little intelligence available, launching a night raid would be reckless.", highlight: "little" },
      { text: "He paid little attention to the safety protocols while handling the chemicals.", highlight: "little" }
    ]
  },
  {
    id: "rule-067",
    number: "Rule 67",
    title: "A Little = Some Quantity (Positive; Uncountable)",
    category: "Few / A Few / Little / A Little",
    explanation:
      "**A little** → **some quantity** → positive meaning with uncountable nouns.",
    triggerWords: ["A little presence of mind", "A little guidance"],
    incorrect: { text: "Little presence of mind averted the crash.", highlight: "Little" },
    correct: { text: "A little presence of mind averted the crash.", highlight: "A little" },
    tip: "'A little' = some quantity (positive). 'Little' = almost none (negative).",
    examples: [
      { text: "A little presence of mind on the pilot's part averted a catastrophic crash.", highlight: "A little" },
      { text: "With a little guidance, she can easily secure a top rank in the merit list.", highlight: "a little" },
      { text: "Add a little reagent to the solution to observe the colour change.", highlight: "a little" },
      { text: "There is still a little scope for improvement in the team's fielding standards.", highlight: "a little" },
      { text: "A little knowledge of basic accounting is essential for every entrepreneur.", highlight: "A little" }
    ]
  },
  {
    id: "rule-068",
    number: "Rule 68",
    title: "Very Few / Quite a Few",
    category: "Few / A Few / Little / A Little",
    explanation:
      "**Very few** → almost none (emphatic negative) | **Quite a few** → a considerable number (positive).",
    triggerWords: ["Very few democracies", "Quite a few errors"],
    incorrect: { text: "Quite a few democracies have maintained uninterrupted rule.", highlight: "Quite a few" },
    correct: { text: "Very few democracies have maintained uninterrupted constitutional rule.", highlight: "Very few" },
    tip: "Very few = almost none; Quite a few = many.",
    examples: [
      { text: "Very few democracies have maintained uninterrupted constitutional rule since independence.", highlight: "Very few" },
      { text: "Quite a few errors were spotted in the preliminary answer key released by the board.", highlight: "Quite a few" },
      { text: "Very few submarines can operate silently at such extreme ocean depths.", highlight: "Very few" },
      { text: "Quite a few foreign delegates attended the defense exhibition in Bengaluru.", highlight: "Quite a few" },
      { text: "Very few trainees managed to complete the twenty-kilometre endurance run.", highlight: "Very few" }
    ]
  },
  {
    id: "rule-069",
    number: "Rule 69",
    title: "Each / Every / Either / Neither → Singular Pronoun",
    category: "Pronoun Agreement",
    explanation:
      "**Each / Every / Either / Neither** → always take **singular pronoun** (his/her/its).",
    triggerWords: ["Every soldier", "Each of the nations"],
    incorrect: { text: "Every soldier must clean their rifle.", highlight: "their" },
    correct: { text: "Every soldier must clean his rifle.", highlight: "his" },
    tip: "Use his/her/its — not 'their' — with these singular pronouns.",
    examples: [
      { text: "Every soldier in the platoon must clean his rifle before the morning inspection.", highlight: "his" },
      { text: "Each of the participating nations presented its proposal at the climate summit.", highlight: "its" },
      { text: "Neither of the two brothers has submitted his income tax return yet.", highlight: "his" },
      { text: "Either of the female athletes can win a medal if she maintains this pace.", highlight: "she" },
      { text: "Every citizen should exercise his franchise responsibly during general elections.", highlight: "his" }
    ]
  },
  {
    id: "rule-070",
    number: "Rule 70",
    title: "One → One's / Oneself",
    category: "Pronoun Agreement",
    explanation:
      "**One** (indefinite pronoun) → reflexive is **oneself**, possessive is **one's** — never 'his/her'.",
    triggerWords: ["One must", "One should"],
    incorrect: { text: "One must never compromise his integrity.", highlight: "his" },
    correct: { text: "One must never compromise one's integrity.", highlight: "one's" },
    tip: "One → one's / oneself — consistent throughout.",
    examples: [
      { text: "One must never compromise one's integrity for temporary material gains.", highlight: "one's" },
      { text: "One should always keep oneself updated with national and international developments.", highlight: "oneself" },
      { text: "One cannot achieve excellence unless one dedicates oneself completely to the craft.", highlight: "oneself" },
      { text: "One ought to be loyal to one's country under all circumstances.", highlight: "one's" },
      { text: "One must verify all facts before forming one's opinion on sensitive matters.", highlight: "one's" }
    ]
  },
  {
    id: "rule-071",
    number: "Rule 71",
    title: "Two Singular Nouns + And (Different Persons) → Plural Pronoun",
    category: "Pronoun Agreement",
    explanation:
      "Two singular nouns joined by **'and'** referring to **different persons/things** → **plural pronoun** (their).",
    triggerWords: ["The captain and the coach", "India and Japan"],
    incorrect: { text: "The captain and the coach expressed his dissatisfaction.", highlight: "his" },
    correct: { text: "The captain and the coach expressed their dissatisfaction.", highlight: "their" },
    tip: "Different persons → plural pronoun 'their'.",
    examples: [
      { text: "The captain and the coach expressed their dissatisfaction with the pitch conditions.", highlight: "their" },
      { text: "India and Japan have strengthened their bilateral defense cooperation in the Indo-Pacific.", highlight: "their" },
      { text: "The principal and the secretary submitted their respective audit reports.", highlight: "their" },
      { text: "Rohan and Deepak lost their admit cards on the way to the examination centre.", highlight: "their" },
      { text: "The prosecutor and the defense counsel presented their final arguments before the bench.", highlight: "their" }
    ]
  },
  {
    id: "rule-072",
    number: "Rule 72",
    title: "Two Singular Nouns + And (Same Person) → Singular Pronoun",
    category: "Pronoun Agreement",
    explanation:
      "Two singular nouns joined by **'and'** referring to the **same person** (article only before first noun) → **singular pronoun** (his).",
    triggerWords: ["The director and producer", "The chief strategist and advisor"],
    incorrect: { text: "The director and producer defended their creative choices.", highlight: "their" },
    correct: { text: "The director and producer defended his creative choices.", highlight: "his" },
    tip: "Same person (one article before first noun) → singular pronoun.",
    examples: [
      { text: "The director and producer of the documentary defended his creative choices.", highlight: "his" },
      { text: "The chief strategist and advisor to the prime minister tendered his resignation today.", highlight: "his" },
      { text: "My friend and benefactor has extended his unwavering support during my tough times.", highlight: "his" },
      { text: "The founder and CEO of the aerospace firm unveiled his vision for reusable rockets.", highlight: "his" },
      { text: "The chairman and managing director addressed the shareholders in his annual speech.", highlight: "his" }
    ]
  },
  {
    id: "rule-073",
    number: "Rule 73",
    title: "Positive Statement → Negative Question Tag",
    category: "Question Tags",
    explanation:
      "**Positive statement** → **negative question tag** (don't/doesn't/didn't/won't/etc.).",
    triggerWords: ["didn't he", "haven't you", "won't it"],
    incorrect: { text: "The defense minister inaugurated the base yesterday, did he?", highlight: "did he" },
    correct: { text: "The defense minister inaugurated the new naval base yesterday, didn't he?", highlight: "didn't he" },
    tip: "Positive statement → negative tag.",
    examples: [
      { text: "The defense minister inaugurated the new naval base yesterday, didn't he?", highlight: "didn't he" },
      { text: "You have already verified the candidate's credentials, haven't you?", highlight: "haven't you" },
      { text: "India will host the next international summit, won't it?", highlight: "won't it" },
      { text: "She speaks fluent French and German, doesn't she?", highlight: "doesn't she" },
      { text: "The troops were deployed along the ridge before dawn, weren't they?", highlight: "weren't they" }
    ]
  },
  {
    id: "rule-074",
    number: "Rule 74",
    title: "Negative Statement → Positive Question Tag",
    category: "Question Tags",
    explanation:
      "**Negative statement** (including seldom, hardly, scarcely, rarely, barely) → **positive question tag**.",
    triggerWords: ["seldom", "hardly", "scarcely"],
    incorrect: { text: "He seldom misses his training, doesn't he?", highlight: "doesn't he" },
    correct: { text: "He seldom misses his morning physical training session, does he?", highlight: "does he" },
    tip: "Negative words (seldom/hardly/scarcely/rarely/barely/never/few) → positive tag.",
    examples: [
      { text: "He seldom misses his morning physical training session, does he?", highlight: "does he" },
      { text: "They hardly had any ammunition left when reinforcements arrived, did they?", highlight: "did they" },
      { text: "She has never compromised on journalistic ethics, has she?", highlight: "has she" },
      { text: "Few people knew about the covert operation, did they?", highlight: "did they" },
      { text: "The witness could scarcely recognize the assailant in the dim light, could he?", highlight: "could he" }
    ]
  },
  {
    id: "rule-075",
    number: "Rule 75",
    title: "Indefinite Pronouns → Question Tag Uses 'They'",
    category: "Question Tags",
    explanation:
      "**Indefinite pronouns** (everyone, someone, nobody, anybody, no one) → question tag uses **they/them** (singular they).",
    triggerWords: ["Everyone", "Nobody", "Somebody"],
    incorrect: { text: "Everyone was briefed, wasn't he?", highlight: "wasn't he" },
    correct: { text: "Everyone in the battalion was briefed about the mission, weren't they?", highlight: "weren't they" },
    tip: "Indefinite pronouns → 'they' in question tags.",
    examples: [
      { text: "Everyone in the battalion was briefed about the mission, weren't they?", highlight: "weren't they" },
      { text: "Nobody has objected to the new selection criteria, have they?", highlight: "have they" },
      { text: "Somebody leaked the question paper before the exam began, didn't they?", highlight: "didn't they" },
      { text: "Anyone can apply for this scholarship if they meet the criteria, can't they?", highlight: "can't they" },
      { text: "No one was injured in the minor explosion at the chemical plant, were they?", highlight: "were they" }
    ]
  },
  {
    id: "rule-076",
    number: "Rule 76",
    title: "Let's / Let us → Question Tag 'Shall we?'",
    category: "Question Tags",
    explanation:
      "**Imperative starting with 'Let's / Let us'** → question tag is **'shall we?'**.",
    triggerWords: ["Let's", "Let us"],
    incorrect: { text: "Let's analyze the trends, will we?", highlight: "will we" },
    correct: { text: "Let's analyze the previous year's cutoff trends before setting our target, shall we?", highlight: "shall we" },
    tip: "Let's → 'shall we?' in the tag.",
    examples: [
      { text: "Let's analyze the previous year's cutoff trends before setting our target, shall we?", highlight: "shall we" },
      { text: "Let us proceed to the conference room for the tactical briefing, shall we?", highlight: "shall we" },
      { text: "Let's not jump to conclusions without examining the forensic evidence, shall we?", highlight: "shall we" },
      { text: "Let's review the constitutional amendments one more time, shall we?", highlight: "shall we" },
      { text: "Let us honour the supreme sacrifice of our fallen heroes, shall we?", highlight: "shall we" }
    ]
  },
  {
    id: "rule-077",
    number: "Rule 77",
    title: "I am → Question Tag 'Aren't I?'",
    category: "Question Tags",
    explanation:
      "**'I am'** in a positive statement → question tag is **'aren't I?'** (not 'amn't I').",
    triggerWords: ["I am eligible", "I am next"],
    incorrect: { text: "I am eligible, amn't I?", highlight: "amn't I" },
    correct: { text: "I am eligible to apply for the CDS exam this year, aren't I?", highlight: "aren't I" },
    tip: "I am → 'aren't I?' — fixed exception in English grammar.",
    examples: [
      { text: "I am eligible to apply for the combined defense services exam this year, aren't I?", highlight: "aren't I" },
      { text: "I am next in line for the medical fitness evaluation, aren't I?", highlight: "aren't I" },
      { text: "I am responsible for maintaining the confidentiality of these records, aren't I?", highlight: "aren't I" },
      { text: "I am audible to the candidates sitting in the last row, aren't I?", highlight: "aren't I" },
      { text: "I am included in the final shortlist for the SSB interview, aren't I?", highlight: "aren't I" }
    ]
  },
  {
    id: "rule-078",
    number: "Rule 78",
    title: "Until → Denotes Time (Up to a Point)",
    category: "Until / Unless / If",
    explanation:
      "**Until** → denotes **time** (up to a specific point in time).",
    triggerWords: ["until the final bell", "until both nations"],
    incorrect: { text: "No candidate is permitted to leave till the final bell rings.", highlight: "till" },
    correct: { text: "No candidate is permitted to leave the examination hall until the final bell rings.", highlight: "until" },
    tip: "Until = up to that point in time.",
    examples: [
      { text: "No candidate is permitted to leave the examination hall until the final bell rings.", highlight: "until" },
      { text: "The ceasefire will remain in effect until both nations sign a permanent peace treaty.", highlight: "until" },
      { text: "The suspect will be held in judicial custody until the investigation is completed.", highlight: "until" },
      { text: "Keep monitoring the radar screen until the relieving officer arrives.", highlight: "until" },
      { text: "The missile test has been deferred until weather conditions improve over the bay.", highlight: "until" }
    ]
  },
  {
    id: "rule-079",
    number: "Rule 79",
    title: "Unless → Denotes Condition (If...Not)",
    category: "Until / Unless / If",
    explanation:
      "**Unless** → denotes **condition** (means 'if...not').",
    triggerWords: ["Unless you secure", "Unless it receives"],
    incorrect: { text: "If you do not secure the minimum marks, your paper will not be evaluated.", highlight: "If you do not" },
    correct: { text: "Unless you secure the minimum qualifying marks in English, your paper will not be evaluated.", highlight: "Unless" },
    tip: "Unless = if not — no additional 'not' needed in the clause.",
    examples: [
      { text: "Unless you secure the minimum qualifying marks in English, your paper will not be evaluated.", highlight: "Unless" },
      { text: "The bill cannot become an act unless it receives the assent of the President.", highlight: "unless" },
      { text: "Unless strict fiscal discipline is maintained, the fiscal deficit will widen further.", highlight: "Unless" },
      { text: "You will not be allowed to enter the cantonment unless you possess a valid security pass.", highlight: "unless" },
      { text: "Unless we transition to clean energy rapidly, climate targets will remain unachievable.", highlight: "Unless" }
    ]
  },
  {
    id: "rule-080",
    number: "Rule 80",
    title: "Never Use 'Not' in Clause Containing 'Unless' or 'Until'",
    category: "Until / Unless / If",
    explanation:
      "**Never use 'not'** in the clause containing 'unless' or 'until' — double negative.",
    triggerWords: ["Unless the accused cooperates", "Until the fog clears"],
    incorrect: { text: "Unless the accused does not cooperate, he will not be granted bail.", highlight: "does not" },
    correct: { text: "Unless the accused cooperates with the investigators, he will not be granted bail.", highlight: "cooperates" },
    tip: "Unless/Until already carry negative meaning — don't add 'not'.",
    examples: [
      { text: "Unless the accused cooperates with the investigators, he will not be granted bail.", highlight: "cooperates" },
      { text: "Until the fog clears, flight operations at the airport will remain suspended.", highlight: "clears" },
      { text: "Unless you practice mock tests regularly, you cannot improve your speed.", highlight: "practice" },
      { text: "Do not open the sealed question booklet until the invigilator instructs you to do so.", highlight: "instructs" },
      { text: "Unless the root cause of corruption is eradicated, welfare schemes will not succeed.", highlight: "is" }
    ]
  },
  {
    id: "rule-081",
    number: "Rule 81",
    title: "Whether → Expresses Doubt or Choice Between Alternatives",
    category: "If / Whether / That",
    explanation:
      "**Whether** expresses doubt or choice between alternatives.",
    triggerWords: ["Whether"],
    incorrect: { text: "", highlight: "" },
    correct: { text: "The selection board has not yet decided whether the written test will be conducted online.", highlight: "whether" },
    tip: "Whether introduces doubt or choice between alternatives.",
    examples: [
      { text: "The selection board has not yet decided whether the written test will be conducted online.", highlight: "whether" },
      { text: "Intelligence agencies are investigating whether the cyberattack originated from a foreign server.", highlight: "whether" },
      { text: "The commander asked the reconnaissance team whether the mountain pass was clear of snow.", highlight: "whether" },
      { text: "It remains uncertain whether the central bank will revise the repo rate next quarter.", highlight: "whether" },
      { text: "The tribunal will examine whether the environmental clearance was granted lawfully.", highlight: "whether" }
    ]
  },
  {
    id: "rule-082",
    number: "Rule 82",
    title: "Whether...Or Not → Always Use 'Whether'",
    category: "If / Whether / That",
    explanation:
      "**Whether...Or Not** always use **Whether** — never 'If'.",
    triggerWords: ["Whether", "or not"],
    incorrect: { text: "The operation will proceed if the air support arrives or not.", highlight: "if" },
    correct: { text: "The operation will proceed at dawn whether the air support arrives on time or not.", highlight: "whether" },
    tip: "Always use Whether...Or Not, never If...Or Not.",
    examples: [
      { text: "The operation will proceed at dawn whether the air support arrives on time or not.", highlight: "whether" },
      { text: "Every citizen must abide by the constitution whether they agree with a specific policy or not.", highlight: "whether" },
      { text: "The committee must submit its findings by Friday whether the audit is complete or not.", highlight: "whether" },
      { text: "We need to verify whether the suspect had an accomplice or not.", highlight: "whether" },
      { text: "A true leader takes accountability whether the mission succeeds or not.", highlight: "whether" }
    ]
  },
  {
    id: "rule-083",
    number: "Rule 83",
    title: "If → Expresses a Condition",
    category: "If / Whether / That",
    explanation:
      "**If** expresses a condition.",
    triggerWords: ["If"],
    incorrect: { text: "", highlight: "" },
    correct: { text: "If the ceasefire is violated, the armed forces are authorized to retaliate immediately.", highlight: "If" },
    tip: "If introduces a conditional clause.",
    examples: [
      { text: "If the ceasefire is violated, the armed forces are authorized to retaliate immediately.", highlight: "If" },
      { text: "If you fail to produce a valid identity proof, you will be barred from entering the hall.", highlight: "If" },
      { text: "If fiscal discipline is compromised, inflation will spiral out of control.", highlight: "If" },
      { text: "If the monsoon weakens further, agricultural output will decline sharply.", highlight: "If" },
      { text: "If the evidence proves insufficient, the court will acquit the defendant.", highlight: "If" }
    ]
  },
  {
    id: "rule-084",
    number: "Rule 84",
    title: "That → Expresses Certainty / Established Fact",
    category: "If / Whether / That",
    explanation:
      "**That** expresses certainty or established fact.",
    triggerWords: ["that"],
    incorrect: { text: "The forensic report confirmed whether the signature on the agreement had been forged.", highlight: "whether" },
    correct: { text: "The forensic report confirmed that the signature on the agreement had been forged.", highlight: "that" },
    tip: "Use That for facts, Whether for doubts.",
    examples: [
      { text: "The forensic report confirmed that the signature on the agreement had been forged.", highlight: "that" },
      { text: "Every economist knows that sustained infrastructure spending boosts long-term GDP growth.", highlight: "that" },
      { text: "The defense ministry announced that the indigenous fighter jet had completed all trials.", highlight: "that" },
      { text: "We are confident that our contingency plan will withstand any supply-chain disruption.", highlight: "that" },
      { text: "Historical records prove that ancient Indian universities attracted scholars from across Asia.", highlight: "that" }
    ]
  },
  {
    id: "rule-085",
    number: "Rule 85",
    title: "That + Conditional Clause Can Coexist",
    category: "If / Whether / That",
    explanation:
      "**That** + conditional clause can coexist in the same sentence.",
    triggerWords: ["that if"],
    incorrect: { text: "", highlight: "" },
    correct: { text: "The governor warned that if law and order deteriorated further, central forces would be deployed.", highlight: "that if" },
    tip: "That can introduce a clause that itself contains an If condition.",
    examples: [
      { text: "The governor warned that if law and order deteriorated further, central forces would be deployed.", highlight: "that if" },
      { text: "The finance secretary stated that if tax compliance improved, corporate rates could be lowered.", highlight: "that if" },
      { text: "Scientists predict that if global temperatures rise by two degrees, coastal cities will face severe flooding.", highlight: "that if" },
      { text: "The coach emphasized that if the players maintained discipline, they would win the championship.", highlight: "that if" },
      { text: "The court ruled that if the contractor delayed the project again, the bank guarantee would be forfeited.", highlight: "that if" }
    ]
  },
  {
    id: "rule-086",
    number: "Rule 86",
    title: "Avoid Double Negatives in a Single Clause",
    category: "Double Negatives",
    explanation:
      "Avoid **double negatives** in a single clause.",
    triggerWords: ["nothing", "any", "hardly"],
    incorrect: { text: "The accused didn't know nothing about the missing classified files.", highlight: "didn't know nothing" },
    correct: { text: "The accused claimed that he knew nothing about the missing classified files.", highlight: "nothing" },
    tip: "Two negatives cancel each other — avoid them.",
    examples: [
      { text: "The accused claimed that he knew nothing about the missing classified files.", highlight: "nothing" },
      { text: "Neither the witness nor the investigating officer found any trace of forced entry.", highlight: "any" },
      { text: "The committee could hardly find any justification for the massive budget overrun.", highlight: "any" },
      { text: "She never made any derogatory remarks against her colleagues during the inquiry.", highlight: "any" },
      { text: "There was nobody in the control room when the alarm went off.", highlight: "nobody" }
    ]
  },
  {
    id: "rule-087",
    number: "Rule 87",
    title: "Hardly / Scarcely / Barely → Negative + 'When'",
    category: "Double Negatives",
    explanation:
      "**Hardly / Scarcely / Barely** are already negative — pair with **when** (not than/and).",
    triggerWords: ["Hardly", "Scarcely", "Barely", "when"],
    incorrect: { text: "Hardly had the convoy crossed the bridge than an improvised explosive device detonated.", highlight: "than" },
    correct: { text: "Hardly had the convoy crossed the bridge when an improvised explosive device detonated.", highlight: "when" },
    tip: "Hardly/Scarcely/Barely → when, not than.",
    examples: [
      { text: "Hardly had the convoy crossed the bridge when an improvised explosive device detonated.", highlight: "when" },
      { text: "Scarcely had the finance minister finished her speech when the stock market rallied.", highlight: "when" },
      { text: "Barely had the rescue helicopter taken off when a severe blizzard struck the valley.", highlight: "when" },
      { text: "Hardly had the new policy been implemented when protests erupted across the state.", highlight: "when" },
      { text: "Scarcely had the goalkeeper recovered his position when the striker scored the winning goal.", highlight: "when" }
    ]
  },
  {
    id: "rule-088",
    number: "Rule 88",
    title: "No Sooner...Than → Always Pair with 'Than'",
    category: "Double Negatives",
    explanation:
      "**No Sooner** must always pair with **than** — never with when.",
    triggerWords: ["No sooner", "than"],
    incorrect: { text: "No sooner had the radar detected the intruder when interceptor jets were scrambled.", highlight: "when" },
    correct: { text: "No sooner had the radar detected the intruder than interceptor jets were scrambled.", highlight: "than" },
    tip: "No Sooner...Than is a fixed pair.",
    examples: [
      { text: "No sooner had the radar detected the intruder than interceptor jets were scrambled.", highlight: "than" },
      { text: "No sooner did the siren sound than the soldiers rushed to their battle stations.", highlight: "than" },
      { text: "No sooner had the verdict been pronounced than the defense counsel filed an appeal.", highlight: "than" },
      { text: "No sooner did the monsoon arrive than the reservoirs began filling rapidly.", highlight: "than" },
      { text: "No sooner had the train pulled into the platform than passengers scrambled to board.", highlight: "than" }
    ]
  },
  {
    id: "rule-089",
    number: "Rule 89",
    title: "Use 'A' Before a Consonant Sound",
    category: "Articles",
    explanation:
      "Use **a** before a consonant sound (regardless of spelling).",
    triggerWords: ["a university", "A European", "a unanimous"],
    incorrect: { text: "an university", highlight: "an" },
    correct: { text: "Establishing a university of international standards requires substantial autonomous funding.", highlight: "a" },
    tip: "Sound matters, not spelling.",
    examples: [
      { text: "Establishing a university of international standards requires substantial autonomous funding.", highlight: "a" },
      { text: "A European delegation visited New Delhi to negotiate the bilateral trade pact.", highlight: "A" },
      { text: "Passing this resolution requires a unanimous vote from all permanent members.", highlight: "a" },
      { text: "The defense forces drafted a one-year modernization roadmap for artillery units.", highlight: "a" },
      { text: "He was appointed as a union cabinet minister following the parliamentary reshuffle.", highlight: "a" }
    ]
  },
  {
    id: "rule-090",
    number: "Rule 90",
    title: "Use 'An' Before a Vowel Sound",
    category: "Articles",
    explanation:
      "Use **an** before a vowel sound (regardless of spelling).",
    triggerWords: ["an hour-long", "an honest", "an IAS"],
    incorrect: { text: "a hour-long hearing", highlight: "a" },
    correct: { text: "The tribunal conducted an hour-long hearing before granting interim relief.", highlight: "an" },
    tip: "Silent 'h' words take an.",
    examples: [
      { text: "The tribunal conducted an hour-long hearing before granting interim relief.", highlight: "an" },
      { text: "It is a matter of pride to serve as an honest civil servant in a developing nation.", highlight: "an" },
      { text: "She cleared the written examination and became an IAS officer on her first attempt.", highlight: "an" },
      { text: "Filing an FIR immediately after a cyber theft helps banks freeze fraudulent transactions.", highlight: "an" },
      { text: "The heir to the estate appointed an honourable retired judge as the sole arbitrator.", highlight: "an" }
    ]
  },
  {
    id: "rule-091",
    number: "Rule 91",
    title: "Use 'The' Before Unique Celestial Bodies, Mountain Ranges, Oceans, Monuments",
    category: "Articles",
    explanation:
      "Use **the** before unique celestial bodies, mountain ranges, oceans, and monuments.",
    triggerWords: ["The Himalayas", "The Indian Ocean", "the Sun"],
    incorrect: { text: "Himalayas act as a natural climatic barrier.", highlight: "Himalayas" },
    correct: { text: "The Himalayas act as a natural climatic barrier protecting the Indian subcontinent from frigid winds.", highlight: "The Himalayas" },
    tip: "Unique geographical features take the.",
    examples: [
      { text: "The Himalayas act as a natural climatic barrier protecting the Indian subcontinent from frigid winds.", highlight: "The Himalayas" },
      { text: "The Indian Ocean region has become the focal point of global maritime security.", highlight: "The Indian Ocean" },
      { text: "Solar flares erupting from the Sun can disrupt satellite communications on the Earth.", highlight: "the Sun" },
      { text: "Conservationists have launched a special drive to protect the Taj Mahal from industrial pollution.", highlight: "the Taj Mahal" },
      { text: "The Andaman and Nicobar Islands hold immense strategic significance for naval operations.", highlight: "The Andaman" }
    ]
  },
  {
    id: "rule-092",
    number: "Rule 92",
    title: "Use 'The' Before Superlative Degree",
    category: "Articles",
    explanation:
      "Use **the** before superlative degree.",
    triggerWords: ["the highest", "the most essential", "the biggest"],
    incorrect: { text: "Siachen Glacier is highest militarized zone on the planet.", highlight: "highest" },
    correct: { text: "Siachen Glacier is the highest and the coldest militarized zone on the planet.", highlight: "the highest" },
    tip: "Superlatives always take the.",
    examples: [
      { text: "Siachen Glacier is the highest and the coldest militarized zone on the planet.", highlight: "the highest" },
      { text: "Integrity is the most essential quality expected of an armed forces officer.", highlight: "the most essential" },
      { text: "This constitutional amendment represents the biggest tax reform since independence.", highlight: "the biggest" },
      { text: "He delivered the finest performance of his career in the World Cup final.", highlight: "the finest" },
      { text: "Corruption poses the gravest threat to the institutional credibility of any democracy.", highlight: "the gravest" }
    ]
  },
  {
    id: "rule-093",
    number: "Rule 93",
    title: "Always Use 'The' Before 'Same' When Comparing Identity",
    category: "Articles",
    explanation:
      "Always use **the** before **same** when comparing identity.",
    triggerWords: ["the same account", "the same radar frequency"],
    incorrect: { text: "Both witnesses gave same account of the incident during cross-examination.", highlight: "same account" },
    correct: { text: "Both witnesses gave the same account of the incident during cross-examination.", highlight: "the same" },
    tip: "Same → the same.",
    examples: [
      { text: "Both witnesses gave the same account of the incident during cross-examination.", highlight: "the same" },
      { text: "The newly inducted aircraft operates on the same radar frequency as the naval fleet.", highlight: "the same" },
      { text: "Applying the same monetary policy to diverse regional economies often yields uneven results.", highlight: "the same" },
      { text: "We reached the same conclusion after analyzing the macroeconomic indicators independently.", highlight: "the same" },
      { text: "He committed the same calculation error twice in the quantitative aptitude section.", highlight: "the same" }
    ]
  },
  {
    id: "rule-094",
    number: "Rule 94",
    title: "Use 'The' Before Musical Instruments (When Played)",
    category: "Articles",
    explanation:
      "Use **the** before musical instruments when played.",
    triggerWords: ["the tabla", "the sitar", "the flute"],
    incorrect: { text: "Ustad Zakir Hussain mastered tabla at a remarkably young age.", highlight: "tabla" },
    correct: { text: "Ustad Zakir Hussain mastered the tabla at a remarkably young age.", highlight: "the tabla" },
    tip: "Instruments take the when played.",
    examples: [
      { text: "Ustad Zakir Hussain mastered the tabla at a remarkably young age.", highlight: "the tabla" },
      { text: "Pandit Ravi Shankar popularized the sitar among Western audiences worldwide.", highlight: "the sitar" },
      { text: "Playing the flute requires precise breath control and sustained focus.", highlight: "the flute" },
      { text: "She has been learning to play the violin at the national academy of music for six years.", highlight: "the violin" },
      { text: "The regimental band played the bugle during the solemn wreath-laying ceremony.", highlight: "the bugle" }
    ]
  },
  {
    id: "rule-095",
    number: "Rule 95",
    title: "Omit Articles Before Names of Languages",
    category: "Articles",
    explanation:
      "Omit articles before names of languages (unless referring to people).",
    triggerWords: ["English", "Sanskrit", "French"],
    incorrect: { text: "Proficiency in the English and at least one regional language is advantageous.", highlight: "the English" },
    correct: { text: "Proficiency in English and at least one regional language is advantageous for administrative roles.", highlight: "English" },
    tip: "Languages → no article. People → the.",
    examples: [
      { text: "Proficiency in English and at least one regional language is advantageous for administrative roles.", highlight: "English" },
      { text: "Scholars translated ancient treatises from Sanskrit into Persian during the medieval period.", highlight: "Sanskrit" },
      { text: "Many Indian diplomats learn French or Russian to serve effectively in foreign missions.", highlight: "French" },
      { text: "The French are renowned globally for their contributions to art, philosophy, and cuisine.", highlight: "The French" },
      { text: "Hindi is widely spoken across northern and central India.", highlight: "Hindi" }
    ]
  },
  {
    id: "rule-096",
    number: "Rule 96",
    title: "Many → Used with Plural Countable Nouns",
    category: "Much / Many / Fewer / Less",
    explanation:
      "**Many** is used with plural countable nouns.",
    triggerWords: ["Many candidates", "Many strategic thinkers"],
    incorrect: { text: "Much candidates lose valuable marks due to negative marking in objective tests.", highlight: "Much" },
    correct: { text: "Many aspiring officers prepare for the CDS exam alongside their graduation.", highlight: "Many" },
    tip: "Many → plural countable nouns.",
    examples: [
      { text: "Many aspiring officers prepare for the CDS exam alongside their graduation.", highlight: "Many" },
      { text: "Many strategic thinkers advocate self-reliance in defense manufacturing.", highlight: "Many" },
      { text: "Many coastal villages were inundated when the cyclone made landfall.", highlight: "Many" },
      { text: "How many amendments have been made to the Indian Constitution so far?", highlight: "many" },
      { text: "Many startups are collaborating with ISRO to develop small satellite launch vehicles.", highlight: "Many" }
    ]
  },
  {
    id: "rule-097",
    number: "Rule 97",
    title: "Much → Used with Singular Uncountable Nouns",
    category: "Much / Many / Fewer / Less",
    explanation:
      "**Much** is used with singular uncountable nouns.",
    triggerWords: ["Much research", "Much cooperation"],
    incorrect: { text: "Many research is still required to harness nuclear fusion for commercial power generation.", highlight: "Many" },
    correct: { text: "Much research is still required to harness nuclear fusion for commercial power generation.", highlight: "Much" },
    tip: "Much → singular uncountable nouns.",
    examples: [
      { text: "Much research is still required to harness nuclear fusion for commercial power generation.", highlight: "Much" },
      { text: "The investigating agency did not receive much cooperation from the local authorities.", highlight: "much" },
      { text: "Too much bureaucratic interference often delays critical infrastructure projects.", highlight: "much" },
      { text: "How much ammunition was recovered during the search operation in the forest?", highlight: "much" },
      { text: "There is not much time left before the commission closes the application portal.", highlight: "much" }
    ]
  },
  {
    id: "rule-098",
    number: "Rule 98",
    title: "Fewer → Used with Plural Countable Nouns",
    category: "Much / Many / Fewer / Less",
    explanation:
      "**Fewer** is used with plural countable nouns.",
    triggerWords: ["fewer candidates", "fewer pollutants"],
    incorrect: { text: "Less candidates qualified for the interview stage compared to last year.", highlight: "Less" },
    correct: { text: "This year, fewer candidates qualified for the interview stage compared to last year.", highlight: "fewer" },
    tip: "Fewer → plural countable nouns.",
    examples: [
      { text: "This year, fewer candidates qualified for the interview stage compared to last year.", highlight: "fewer" },
      { text: "Modern fuel-efficient engines emit fewer pollutants into the atmosphere.", highlight: "fewer" },
      { text: "There were fewer errors in the revised edition of the statistical report.", highlight: "fewer" },
      { text: "Fewer than fifty soldiers defended the outpost against an overwhelming enemy assault.", highlight: "Fewer" },
      { text: "With automated signaling, fewer railway accidents occur due to human error.", highlight: "fewer" }
    ]
  },
  {
    id: "rule-099",
    number: "Rule 99",
    title: "Less → Used with Uncountable Nouns",
    category: "Much / Many / Fewer / Less",
    explanation:
      "**Less** is used with uncountable nouns.",
    triggerWords: ["less energy", "less time"],
    incorrect: { text: "Fewer energy is consumed by the new desalination plant.", highlight: "Fewer" },
    correct: { text: "The new desalination plant consumes less energy than conventional thermal facilities.", highlight: "less" },
    tip: "Less → uncountable nouns.",
    examples: [
      { text: "The new desalination plant consumes less energy than conventional thermal facilities.", highlight: "less" },
      { text: "Candidates should spend less time on ambiguous questions and focus on high-scoring sections.", highlight: "less" },
      { text: "Due to deficit rainfall, the state received less water from the interstate river project.", highlight: "less" },
      { text: "A lighter aircraft requires less fuel to cover the same operational range.", highlight: "less" },
      { text: "The revised scheme involves less paperwork and faster disbursement of funds.", highlight: "less" }
    ]
  },
  {
    id: "rule-100",
    number: "Rule 100",
    title: "Amount (Uncountable Nouns) vs. Number (Plural Countable Nouns)",
    category: "Much / Many / Fewer / Less",
    explanation:
      "**Amount** for uncountable nouns | **Number** for plural countable nouns.",
    triggerWords: ["amount of black money", "number of defense aspirants"],
    incorrect: { text: "A massive number of black money was unearthed during the nationwide tax raids.", highlight: "number of black money" },
    correct: { text: "A massive amount of black money was unearthed during the nationwide tax raids.", highlight: "amount" },
    tip: "Amount = uncountable, Number = countable.",
    examples: [
      { text: "A massive amount of black money was unearthed during the nationwide tax raids.", highlight: "amount" },
      { text: "A large number of defense aspirants appear for the AFCAT examination twice every year.", highlight: "number" },
      { text: "The dam stores an enormous amount of water to irrigate arid districts during summer.", highlight: "amount" },
      { text: "The number of cybercrime complaints registered on the national portal has surged.", highlight: "number" },
      { text: "A considerable amount of courage is needed to blow the whistle on systemic corruption.", highlight: "amount" }
    ]
  },
  {
    id: "rule-101",
    number: "Rule 101",
    title: "Cases of Personal Pronouns (Subjective vs. Objective)",
    category: "Pronouns",
    explanation:
      "Use **Objective Case** after prepositions, 'let', 'between', and transitive verbs. Use **Subjective Case** after 'than' or 'as' when comparing subjects.",
    triggerWords: ["between you and me", "He and I", "you and him", "except her", "than I"],
    incorrect: { text: "between you and I", highlight: "I" },
    correct: { text: "between you and me", highlight: "me" },
    tip: "Objective case after prepositions; subjective case after 'than/as' when comparing subjects.",
    examples: [
      { text: "He and I were deputed to supervise the border infrastructure project.", highlight: "He and I" },
      { text: "Let you and him resolve the administrative dispute amicably before the audit.", highlight: "you and him" },
      { text: "Nobody except her knew the exact password to the encrypted database.", highlight: "her" },
      { text: "My colleague is more experienced than I am.", highlight: "than I" },
      { text: "The report was shared strictly between you and me.", highlight: "between you and me" }
    ]
  },
  {
    id: "rule-102",
    number: "Rule 102",
    title: "Each Other (Two) vs. One Another (More Than Two)",
    category: "Pronouns",
    explanation:
      "**Each other** → for two persons/things. **One another** → for more than two.",
    triggerWords: ["each other", "one another"],
    incorrect: { text: "All twelve members consulted each other.", highlight: "each other" },
    correct: { text: "All twelve members consulted one another.", highlight: "one another" },
    tip: "Each other = two; One another = more than two.",
    examples: [
      { text: "India and Nepal share deep cultural ties and cooperate closely with each other.", highlight: "each other" },
      { text: "All twelve members of the jury consulted one another before delivering the verdict.", highlight: "one another" },
      { text: "The two rival factions agreed to negotiate with each other.", highlight: "each other" },
      { text: "Citizens must stand united and support one another during a natural disaster.", highlight: "one another" },
      { text: "Both wings of the armed forces coordinated with each other during the joint exercise.", highlight: "each other" }
    ]
  },
  {
    id: "rule-103",
    number: "Rule 103",
    title: "Use of One, Ones, and One's",
    category: "Pronouns",
    explanation:
      "**One** → indefinite pronoun. **Ones** → plural substitute. **One's** → possessive.",
    triggerWords: ["One must", "one's findings", "modern ones", "stronger ones"],
    incorrect: { text: "One must verify his findings.", highlight: "his" },
    correct: { text: "One must verify one's findings.", highlight: "one's" },
    tip: "One → one's / oneself — never his/her.",
    examples: [
      { text: "These outdated cameras must be replaced with modern high-definition ones.", highlight: "ones" },
      { text: "One should never neglect one's physical fitness while preparing for defense services.", highlight: "one's" },
      { text: "Out of all drafts submitted, the ministry approved the one proposed by the panel.", highlight: "one" },
      { text: "Old bridges are being dismantled to construct stronger ones.", highlight: "ones" },
      { text: "One ought to be loyal to one's country under all circumstances.", highlight: "one's" }
    ]
  },
  {
    id: "rule-104",
    number: "Rule 104",
    title: "Pronoun–Subject Agreement (Number, Gender, Person)",
    category: "Pronouns",
    explanation:
      "Pronoun must agree with its antecedent in number, gender, and person.",
    triggerWords: ["Every officer", "his rifle", "Neither", "their duty"],
    incorrect: { text: "Every officer must carry their rifle.", highlight: "their" },
    correct: { text: "Every officer must carry his rifle.", highlight: "his" },
    tip: "Singular antecedent → singular pronoun (his/her/its).",
    examples: [
      { text: "Every soldier in the platoon must clean his rifle before inspection.", highlight: "his" },
      { text: "Neither of the brothers has submitted his income tax return.", highlight: "his" },
      { text: "The Reserve Bank has revised its monetary policy stance.", highlight: "its" },
      { text: "One of the cadets forgot to bring her medical certificate.", highlight: "her" },
      { text: "All state governments have submitted their action plans.", highlight: "their" }
    ]
  },
  {
    id: "rule-105",
    number: "Rule 105",
    title: "Arrangement of Personal Pronouns (231 vs. 123 Rule)",
    category: "Pronouns",
    explanation:
      "Positive sense → 2nd person first (You, he, I). Guilt/confession → 1st person first (I, you, he).",
    triggerWords: ["You, he, and I", "I, you, and he"],
    incorrect: { text: "Him and me were deputed.", highlight: "Him and me" },
    correct: { text: "He and I were deputed.", highlight: "He and I" },
    tip: "Positive: You, he, I (2-3-1). Guilt: I, you, he (1-2-3).",
    examples: [
      { text: "You, he, and I will represent the academy at the debate.", highlight: "You, he, and I" },
      { text: "I, you, and he must accept responsibility for the delay.", highlight: "I, you, and he" },
      { text: "We, you, and they should collaborate for the relief drive.", highlight: "We, you, and they" },
      { text: "You and I have been shortlisted for the final round.", highlight: "You and I" },
      { text: "I and my team apologize for the inadvertent error.", highlight: "I and my team" }
    ]
  },
  {
    id: "rule-106",
    number: "Rule 106",
    title: "Position of 'Enough' (After Adjective/Adverb, Before Noun)",
    category: "Adjectives and Adverbs",
    explanation:
      "**Enough** goes **after** adjective/adverb and **before** noun.",
    triggerWords: ["enough ammunition", "sensitive enough", "fast enough"],
    incorrect: { text: "enough sensitive", highlight: "enough sensitive" },
    correct: { text: "sensitive enough", highlight: "sensitive enough" },
    tip: "Adjective/adverb + enough | enough + noun.",
    examples: [
      { text: "The defense forces possess enough ammunition for operations.", highlight: "enough ammunition" },
      { text: "The radar is sensitive enough to detect stealth drones.", highlight: "sensitive enough" },
      { text: "He did not run fast enough to qualify.", highlight: "fast enough" },
      { text: "Do we have enough evidence to prosecute?", highlight: "enough evidence" },
      { text: "The explanation was plausible enough to convince the magistrate.", highlight: "plausible enough" }
    ]
  },
  {
    id: "rule-107",
    number: "Rule 107",
    title: "Use of 'Very' vs. 'Much'",
    category: "Adjectives and Adverbs",
    explanation:
      "**Very** → positive degree / present participle. **Much** → comparative degree / past participle.",
    triggerWords: ["very treacherous", "much higher", "much pleased"],
    incorrect: { text: "much treacherous", highlight: "much" },
    correct: { text: "very treacherous", highlight: "very" },
    tip: "Very = positive/present participle; Much = comparative/past participle.",
    examples: [
      { text: "The Himalayan terrain is very treacherous in winter.", highlight: "very" },
      { text: "The revised estimate is much higher than before.", highlight: "much higher" },
      { text: "The general was much pleased with the cadets.", highlight: "much pleased" },
      { text: "The documentary was very inspiring for students.", highlight: "very inspiring" },
      { text: "Conditions are much better now than a decade ago.", highlight: "much better" }
    ]
  },
  {
    id: "rule-108",
    number: "Rule 108",
    title: "'Too Much' (+ Noun) vs. 'Much Too' (+ Adjective)",
    category: "Adjectives and Adverbs",
    explanation:
      "**Too much** + noun. **Much too** + adjective.",
    triggerWords: ["too much reliance", "much too cumbersome"],
    incorrect: { text: "too much cumbersome", highlight: "too much cumbersome" },
    correct: { text: "much too cumbersome", highlight: "much too cumbersome" },
    tip: "Too much = noun; Much too = adjective.",
    examples: [
      { text: "Too much reliance on imported hardware compromises autonomy.", highlight: "Too much reliance" },
      { text: "The procedure is much too cumbersome for traders.", highlight: "much too cumbersome" },
      { text: "Too much exposure causes respiratory ailments.", highlight: "Too much exposure" },
      { text: "The altitude was much too high for troops.", highlight: "much too high" },
      { text: "Spending too much time ruins exam management.", highlight: "too much time" }
    ]
  },
  {
    id: "rule-109",
    number: "Rule 109",
    title: "'So' (+ Adj/Adv) vs. 'Such' (+ A/An + Adj + Noun)",
    category: "Adjectives and Adverbs",
    explanation:
      "**So** + adjective/adverb. **Such** + a/an + adjective + noun.",
    triggerWords: ["so complex", "such ferocious intensity", "such an astute strategist"],
    incorrect: { text: "such complex", highlight: "such complex" },
    correct: { text: "so complex", highlight: "so complex" },
    tip: "So + adj/adv; Such + a/an + adj + noun.",
    examples: [
      { text: "The cyclone struck with such ferocious intensity.", highlight: "such ferocious intensity" },
      { text: "The code was so complex no one could crack it.", highlight: "so complex" },
      { text: "He is such an astute strategist.", highlight: "such an astute strategist" },
      { text: "The witness spoke so softly.", highlight: "so softly" },
      { text: "It was such a landmark judgment.", highlight: "such a landmark judgment" }
    ]
  },
  {
    id: "rule-110",
    number: "Rule 110",
    title: "Position of Adverbs (Frequency Before Verb; Manner→Place→Time)",
    category: "Adjectives and Adverbs",
    explanation:
      "Frequency adverbs go **before** the main verb. Order: **Manner → Place → Time**.",
    triggerWords: ["never skips", "brilliantly at the airbase yesterday", "rarely disclose"],
    incorrect: { text: "skips daily revision never", highlight: "skips daily revision never" },
    correct: { text: "never skips daily revision", highlight: "never skips daily revision" },
    tip: "Frequency before verb; Manner → Place → Time.",
    examples: [
      { text: "A disciplined aspirant never skips daily revision.", highlight: "never skips" },
      { text: "The squadron performed brilliantly at the airbase yesterday.", highlight: "brilliantly at the airbase yesterday" },
      { text: "Intelligence officers rarely disclose informant identities.", highlight: "rarely disclose" },
      { text: "The delegation arrived safely in Geneva last night.", highlight: "safely in Geneva last night" },
      { text: "The committee frequently meets to review progress.", highlight: "frequently meets" }
    ]
  },
  {
    id: "rule-111",
    number: "Rule 111",
    title: "Position of 'Only' (Before the Word It Modifies)",
    category: "Adjectives and Adverbs",
    explanation:
      "Place **only** immediately before the word or phrase it modifies.",
    triggerWords: ["Only authorized personnel", "only forty questions", "only to soldiers"],
    incorrect: { text: "answered forty questions accurately only", highlight: "answered forty questions accurately only" },
    correct: { text: "answered only forty questions accurately", highlight: "answered only forty questions accurately" },
    tip: "Only goes right before the word it limits.",
    examples: [
      { text: "Only authorized personnel may enter the facility.", highlight: "Only" },
      { text: "The candidate answered only forty questions accurately.", highlight: "only" },
      { text: "This allowance is granted only to field soldiers.", highlight: "only" },
      { text: "The team evacuated only twenty villagers.", highlight: "only" },
      { text: "You can access only by biometric key.", highlight: "only" }
    ]
  },
  {
    id: "rule-112",
    number: "Rule 112",
    title: "Adverbs and Subject–Auxiliary Inversion",
    category: "Adjectives and Adverbs",
    explanation:
      "Negative/restrictive adverbs at start trigger inversion: **Adverb + Auxiliary + Subject + Verb**.",
    triggerWords: ["Seldom has", "Never before have", "Rarely does"],
    incorrect: { text: "Seldom the nation has witnessed", highlight: "Seldom the nation has" },
    correct: { text: "Seldom has the nation witnessed", highlight: "Seldom has" },
    tip: "Negative adverb first → invert subject and auxiliary.",
    examples: [
      { text: "Seldom has the nation witnessed such unity.", highlight: "Seldom has" },
      { text: "Never before have trade volumes reached such heights.", highlight: "Never before have" },
      { text: "Rarely does an opportunity arise like this.", highlight: "Rarely does" },
      { text: "Hardly had the treaty been signed when skirmishes broke out.", highlight: "Hardly had" },
      { text: "Not only did he top the exam, but he also excelled physically.", highlight: "Not only did he top" }
    ]
  },
  {
    id: "rule-113",
    number: "Rule 113",
    title: "Articles with Proper Names (Omit 'The' Unless Comparing)",
    category: "Articles",
    explanation:
      "Omit article before proper names. Use **the** before a proper name only when comparing with a famous figure.",
    triggerWords: ["Dr. Rajendra Prasad", "the Machiavelli", "the Napoleon"],
    incorrect: { text: "the Dr. Rajendra Prasad served", highlight: "the" },
    correct: { text: "Dr. Rajendra Prasad served", highlight: "Dr. Rajendra Prasad" },
    tip: "Proper name → no article. Comparison with famous person → 'the + name'.",
    examples: [
      { text: "Dr. Rajendra Prasad was the first President of India.", highlight: "Dr. Rajendra Prasad" },
      { text: "Chanakya is the Machiavelli of ancient India.", highlight: "the Machiavelli" },
      { text: "Samudragupta is the Napoleon of India.", highlight: "the Napoleon" },
      { text: "Kashmir is the Switzerland of Asia.", highlight: "the Switzerland" },
      { text: "Subhas Chandra Bose organized the Indian National Army.", highlight: "Subhas Chandra Bose" }
    ]
  },
  {
    id: "rule-114",
    number: "Rule 114",
    title: "'The' with Superlatives, Ordinals, Comparatives",
    category: "Articles",
    explanation:
      "Use **the** before superlative, ordinal, and double comparative structures.",
    triggerWords: ["the highest", "the third", "the more"],
    incorrect: { text: "Siachen Glacier is highest militarized zone", highlight: "highest" },
    correct: { text: "Siachen Glacier is the highest militarized zone", highlight: "the highest" },
    tip: "Superlative/ordinal/comparative of two → 'the'.",
    examples: [
      { text: "Siachen Glacier is the highest militarized zone.", highlight: "the highest" },
      { text: "Integrity is the most essential quality.", highlight: "the most essential" },
      { text: "The third phase connects the airport to the corridor.", highlight: "The third" },
      { text: "The faster you analyze, the more time you save.", highlight: "the more" },
      { text: "The deeper the dive, the greater the pressure.", highlight: "The deeper" }
    ]
  },
  {
    id: "rule-115",
    number: "Rule 115",
    title: "Articles with Two Nouns (One Unit vs. Two Entities)",
    category: "Articles",
    explanation:
      "One unit → one 'the'. Two separate persons/things → 'the' before each.",
    triggerWords: ["a rifle and bayonet", "the secretary and treasurer", "the secretary and the treasurer"],
    incorrect: { text: "The secretary and treasurer have differing views.", highlight: "The secretary and treasurer" },
    correct: { text: "The secretary and the treasurer have differing views.", highlight: "the secretary and the treasurer" },
    tip: "Same person → one 'the'. Two persons → 'the' before each.",
    examples: [
      { text: "Every soldier was issued a rifle and bayonet.", highlight: "a rifle and bayonet" },
      { text: "The secretary and the treasurer signed the balance sheet.", highlight: "the secretary and the treasurer" },
      { text: "Bread and butter is a wholesome breakfast.", highlight: "Bread and butter" },
      { text: "A black and white photograph hangs in the museum.", highlight: "A black and white" },
      { text: "The singer and the actor are friends.", highlight: "the singer and the actor" }
    ]
  },
  {
    id: "rule-116",
    number: "Rule 116",
    title: "Articles — General vs. Particular Sense",
    category: "Articles",
    explanation:
      "General sense → no article. Particular/specific sense → **the**.",
    triggerWords: ["Gold is precious", "The gold mined", "Honesty and integrity"],
    incorrect: { text: "The gold is a precious metal.", highlight: "The gold" },
    correct: { text: "Gold is a precious metal.", highlight: "Gold" },
    tip: "General → no article; Specific → the.",
    examples: [
      { text: "Gold is a precious metal.", highlight: "Gold" },
      { text: "The gold mined from Kolar was pure.", highlight: "The gold" },
      { text: "Honesty and integrity are non-negotiable.", highlight: "Honesty and integrity" },
      { text: "The honesty displayed earned him a commendation.", highlight: "The honesty" },
      { text: "Wisdom comes from experience.", highlight: "Wisdom" }
    ]
  },
  {
    id: "rule-117",
    number: "Rule 117",
    title: "No Article in Fixed Idiomatic Expressions",
    category: "Articles",
    explanation:
      "No article before fixed expressions: by air/train, on foot, in danger, on fire, at night, under arrest.",
    triggerWords: ["by helicopter", "on foot", "under arrest", "in danger"],
    incorrect: { text: "by a helicopter", highlight: "by a" },
    correct: { text: "by helicopter", highlight: "by helicopter" },
    tip: "Fixed expressions → no article.",
    examples: [
      { text: "Supplies were airlifted by helicopter.", highlight: "by helicopter" },
      { text: "The warehouse was on fire.", highlight: "on fire" },
      { text: "Pilgrims travel on foot to the shrine.", highlight: "on foot" },
      { text: "The suspect was placed under arrest.", highlight: "under arrest" },
      { text: "Ecosystems are in danger due to rising seas.", highlight: "in danger" }
    ]
  },
  {
    id: "rule-118",
    number: "Rule 118",
    title: "No Article Before Language Names",
    category: "Articles",
    explanation:
      "Omit article before language names. Use **the** only when referring to the people.",
    triggerWords: ["English grammar", "Sanskrit", "The French", "Hindi"],
    incorrect: { text: "the English grammar", highlight: "the English" },
    correct: { text: "English grammar", highlight: "English" },
    tip: "Language → no article. People → the + language name.",
    examples: [
      { text: "Mastery of English grammar is essential.", highlight: "English grammar" },
      { text: "The English ruled India for centuries.", highlight: "The English" },
      { text: "Sanskrit is the root of Indo-Aryan languages.", highlight: "Sanskrit" },
      { text: "The Japanese are admired for technology.", highlight: "The Japanese" },
      { text: "Write in Hindi or English.", highlight: "Hindi" }
    ]
  },
  {
    id: "rule-119",
    number: "Rule 119",
    title: "'Since' (Point of Time) vs. 'For' (Duration)",
    category: "Time and Prepositions",
    explanation:
      "**Since** → definite point of time. **For** → duration/period.",
    triggerWords: ["since 2014", "for six months", "since last October"],
    incorrect: { text: "for 2014", highlight: "for" },
    correct: { text: "since 2014", highlight: "since" },
    tip: "Since = point; For = duration.",
    examples: [
      { text: "India has pursued self-reliance since 2014.", highlight: "since 2014" },
      { text: "The battalion has been stationed for six months.", highlight: "for six months" },
      { text: "Negotiations have been stalled since last October.", highlight: "since last October" },
      { text: "He has prepared for two years.", highlight: "for two years" },
      { text: "The lighthouse has guided ships since the 19th century.", highlight: "since the nineteenth century" }
    ]
  },
  {
    id: "rule-120",
    number: "Rule 120",
    title: "Verbs Without Direct Prepositions",
    category: "Time and Prepositions",
    explanation:
      "Verbs like attack, discuss, emphasize, resemble, comprise, discuss, enter, investigate, await, violate → no preposition after them.",
    triggerWords: ["attacked", "discuss", "investigate", "despite", "violates"],
    incorrect: { text: "attacked on", highlight: "attacked on" },
    correct: { text: "attacked", highlight: "attacked" },
    tip: "Transitive verbs take direct object — no preposition.",
    examples: [
      { text: "Commandos attacked the outpost under cover of fog.", highlight: "attacked" },
      { text: "A team will investigate the recruitment scam.", highlight: "investigate" },
      { text: "Despite hurdles, engineers completed the road.", highlight: "Despite" },
      { text: "The committee will discuss amendments tomorrow.", highlight: "discuss" },
      { text: "Officers who violate the code face proceedings.", highlight: "violate" }
    ]
  }
];
