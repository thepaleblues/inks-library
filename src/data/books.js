import { createBook } from "../utils/createBook";


const books  = [
   createBook({
      id: "the-aeneid",
      title: "The Aeneid",
      author: [
         "Virgil",
      ],
      description:  "After the destruction of Troy, Aeneas escapes with a group of survivors and journeys across the Mediterranean, facing wars, prophecies, and divine forces on his path to establish a new homeland.",
      mood: [
         "Wrong Era", 
         "Needed a Caption"
      ]
   }),
   createBook({
      id: "the-analects",
      title: "The Analects",
      author: [
         "Confucius",
      ],
      description: "Conversations and teachings attributed to Confucius present lessons on personal conduct, family relationships, education, government, and the cultivation of virtue.",
      mood: [
         "Soul Maintenance", 
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "the-arabian-nights",
      title: "The Arabian Nights: Tales from a Thousand and One Nights",
      description: "Scheherazade tells a series of interconnected stories to delay her execution, weaving together tales of kings, merchants, adventurers, lovers, and magical beings.",
      mood: [
         "Wanderlust", 
         "Escapism"
      ]
   }),
   createBook({
      id: "the-art-of-war",
      title: "The Art of War",
      author: [
         "Sun Tzu",
      ],
      description: "A collection of strategic teachings explaining how commanders should plan battles, understand opponents, and achieve victory through preparation and intelligence.",
      mood: [
         "Existential Crisis", 
         "Wrong Era"
      ]
   }),
   createBook({
      id: "the-bhagavad-gita",
      title: "The Bhagavad Gita",
      description: "Prince Arjuna struggles with whether he should fight in an approaching war, receiving guidance from Krishna about duty, morality, and spiritual purpose.",
      mood: [
         "Soul Maintenance", 
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "beowulf",
      title: "Beowulf",
      description: "The warrior Beowulf travels to Denmark to defeat the monster Grendel, later facing further battles that test his strength, leadership, and legacy.",
      mood: [
         "Needed a Caption", 
         "Wanderlust"
      ]
   }),
   createBook({
      id: "beyond-good-and-evil",
      title: "Beyond Good and Evil",
      author: [
         "Friedrich Nietzsche",
      ],
      description:"A series of philosophical reflections challenging traditional beliefs about morality, truth, religion, and the ideas people use to define good and evil.",
      mood: [
         "Existential Crisis",
         "I Have No Idea"
      ]
   }),
   createBook({
      id: "the-brothers-karamazov",
      title: "The Brothers Karamazov",
      author: [
         "Fyodor Dostoevsky",
      ],
      description: "Three brothers with very different beliefs become entangled in family conflict when their father is murdered, forcing them to confront guilt, faith, and responsibility.",
      mood: [
         "Too Happy", 
         "Existential Crisis", 
         "Trust Issues"
      ]
   }),
   createBook({
      id: "candide",
      title: "Candide",
      author: [
         "Voltaire"
      ],
      description:"Candide is expelled from his sheltered life and travels through wars, disasters, and societies around the world while questioning the optimistic philosophy he was taught.",
      mood: [
         "Sad", 
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "the-canterbury-tales",
      title: "The Canterbury Tales",
      author: [
         "Geoffrey Chaucer",
      ],
      description: "A group of pilgrims traveling to Canterbury entertain one another by telling stories about love, deception, morality, religion, and everyday life.",
      mood: [
         "Sad",
         "Needed a Caption"
      ]
   }),
   createBook({
      id: "the-castle",
      title: "The Castle",
      author: [
         "Franz Kafka",
      ],
      description: "A land surveyor arrives in a village hoping to work for the mysterious Castle authorities but becomes trapped in endless attempts to gain access and recognition.",
      mood: [
         "Existential Crisis", 
         "Trust Issues"
      ]
   }),
   createBook({
      id: "the-communist-manifesto",
      title: "The Communist Manifesto",
      author: [
         "Karl Marx",
         "Friedrich Engels",
      ],
      description: "Marx and Engels present an argument about class struggle, describing the conflict between workers and ruling classes and calling for revolutionary change.",
      mood: ["Wrong Era", "Existential Crisis"]
   }),
   createBook({
      id: "confessions",
      title: "Confessions" ,
      author: [
         "Augustine of Hippo",
      ],
      description: "Augustine recounts his early life, personal struggles, search for truth, and eventual conversion to Christianity through prayer and reflection.",
      mood: [
         "Soul Maintenance",
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "the-count-of-monte-cristo",
      title: "The Count of Monte Cristo",
      author: [
         "Alexandre Dumas",
      ],
      description: "Edmond Dantès is falsely imprisoned by those who betray him, escapes years later with a new identity, and plans a carefully executed revenge.",
      mood: [
         "Wanderlust", 
         "Trust Issues"
      ]
   }),
   createBook({
      id: "crime-and-punishment",
      title: "Crime and Punishment",
      author: [
         "Fyodor Dostoevsky",
      ],
      description: "Raskolnikov, a struggling former student in St. Petersburg, commits murder and becomes consumed by guilt, fear, and the search for redemption.",
      mood: [
         "Trust Issues",
         "Existential Crisis"
      ]
   }),
   createBook({ // ?
      id: "the-death-of-ivan-ilyich",
      title: "The Death of Ivan Ilyich",
      author: [
         "Leo Tolstoy",
      ],
      description: "Ivan Ilyich, a successful government official, faces a painful illness that forces him to reconsider his career, relationships, and the meaning of his life.",
      mood: [
         "Too Happy", 
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "the-divine-comedy",
      title: "The Divine Comedy",
      author: [
         "Dante Alighieri"
      ],
      description: "Dante journeys through Hell, Purgatory, and Paradise with the guidance of Virgil and Beatrice, encountering souls who reveal the consequences of human choices.",
      mood: [
         "Needed a Caption", 
         "Soul Maintenance",
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "don-quixote",
      title: "Don Quixote",
      author: [
         "Miguel de Cervantes",
      ],
      description: "Don Quixote becomes convinced that he is a knight from a world of chivalry and sets out with Sancho Panza on a series of humorous and often misguided adventures.",
      mood: [
         "Escapism", 
         "Wanderlust"
      ]
   }),
   createBook({
      id: "dracula",
      title: "Dracula",
      author: [
         "Bram Stoker",
      ],
      description: "Count Dracula travels from Transylvania to England, where a group of people uncover his supernatural nature and attempt to stop his terrifying plans.",
      mood: [
         "Life TOO Peaceful",
         "Hopelessly Romantic",
      ]
   }),
   createBook({
      id: "emma",
      title: "Emma",
      author: [
         "Jane Austen",
      ],
      description: "Emma Woodhouse, a wealthy young woman who enjoys arranging romances for others, gradually learns that her assumptions about love and relationships are often mistaken.",
      mood: [
         "Hopelessly Romantic",
         "Sad"
      ]
   }),
   createBook({
      id: "the-epic-of-gilgamesh",
      title: "The Epic of Gilgamesh",
      description: "King Gilgamesh seeks power and adventure until the death of his closest companion leads him on a quest to understand friendship, loss, and immortality.",
      mood: [
         "Wanderlust",
         "Needed a Caption",
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "the-federalist-papers",
      title: "The Federalist Papers",
      author: [
         "Alexander Hamilton",
         "James Madison",
         "John Jay"
      ],
      description: "A series of essays arguing for the adoption of the United States Constitution, explaining the structure and purpose of the proposed government.",
      mood: [
         "Wrong Era",
         "Existential Crisis",
      ]
   }),
   createBook({
      id: "frankenstein",
      title: "Frankenstein",
      author: [
	      "Mary Shelley"
	   ],
      description: "Victor Frankenstein creates a living creature through scientific experimentation but abandons it, leading to a tragic conflict between creator and creation.",
      mood: [
         "Life TOO Peaceful",
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "moll-flanders",
      title: "Moll Flanders",
      author: [
	      "Daniel Defoe"
	   ],
      description: "Moll Flanders recounts her adventurous life of poverty, crime, marriage, and survival while navigating the social realities of eighteenth-century England.",
      mood: [
         "Wanderlust",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "the-gambler",
      title: "The Gambler",
      author: [
	      "Fyodor Dostoevsky"
	   ],
      description: "Alexei, a young tutor employed by a wealthy Russian family, becomes consumed by gambling while navigating obsession, love, and financial desperation.",
      mood: [
         "Too Happy",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "the-garden-party",
      title: "The Garden Party and Other Stories",
      author: [
	      "Katherine Mansfield"
	   ],
      description: "A collection of short stories portraying ordinary moments, social divisions, personal discoveries, and emotional changes in early twentieth-century life.",
      mood: [
         "Too Happy",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "the-georgics",
      title: "The Georgics",
      author: [
	      "Virgil"
	   ],
      description: "Virgil’s agricultural poem explores farming, nature, labor, and humanity’s relationship with the land through myth and philosophical reflection.",
      mood: [
         "Needed a Caption",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "the-golden-ass",
      title: "The Golden Ass",
      author: [
	      "Apuleius"
	   ],
      description: "Lucius is transformed into a donkey after experimenting with magic and experiences a series of comic, dangerous, and unusual adventures before seeking restoration.",
      mood: [
         "Sad",
         "Escapism"
      ]
   }),
   createBook({
      id: "the-good-soldier",
      title: "The Good Soldier",
      author: [
	      "Ford Madox Ford"
	   ],
      description: "A narrator recounts the complicated relationships between two couples, gradually revealing betrayal, deception, and hidden emotional conflicts.",
      mood: [
         "Hopelessly Romantic",
         "Too Happy"
      ]
   }),
   createBook({
      id: "the-grapes-of-wrath",
      title: "The Grapes of Wrath",
      author: [
	      "John Steinbeck"
	   ],
      description: "The Joad family leaves their drought-stricken Oklahoma farm and travels west toward California, facing poverty, exploitation, and hardship during the Great Depression.",
      mood: [
         "Wrong Era",
         "Too Happy"
      ]
   }),
   createBook({
      id: "gullivers-travels",
      title: `Gulliver’s Travels`,
      author: [
	      "Jonathan Swift"
	   ],
      description: "Lemuel Gulliver travels to strange lands inhabited by unusual societies, using his adventures to satirize politics, science, and human behavior.",
      mood: [
         "Sad",
         "Wanderlust"
      ]
   }),
   createBook({
      id: "notre-dame-de-paris",
      title: "Notre Dame de Paris / The Hunchback of Notre-Dame",
      author: [
	      "Victor Hugo"
	   ],
      description: "In medieval Paris, the lives of Quasimodo, Esmeralda, and Archdeacon Frollo become connected through love, obsession, and tragedy.",
      mood: [
         "Hopelessly Romantic",
         "Too Happy"
      ]
   }),
   createBook({
      id: "the-idiot",
      title: "The Idiot",
      author: [
	      "Fyodor Dostoevsky"
	   ],
      description: "Prince Myshkin returns to Russian society with compassion and innocence but struggles against greed, jealousy, and social corruption.",
      mood: [
         "Hopelessly Romantic",
         "Too Happy"
      ]
   }),
   createBook({
      id: "the-iliad",
      title: "The Iliad",
      author: [
	      "Homer"
	   ],
      description: "During the Trojan War, the conflict between Achilles and Agamemnon leads to devastating battles that explore honor, rage, heroism, and mortality.",
      mood: [
         "Needed a Caption",
         "Too Happy"
      ]
   }),
   createBook({
      id: "jane-eyre",
      title: "Jane Eyre",
      author: [
	      "Charlotte Bronte"
	   ],
      description: "Jane Eyre grows from an isolated childhood into an independent woman while facing hardship, love, and the secrets surrounding Thornfield Hall.",
      mood: [
         "Hopelessly Romantic",
         "Too Happy"
      ]
   }),
   createBook({
      id: "the-journey-to-the-west",
      title: "The Journey to the West",
      description: "The monk Xuanzang travels to India to obtain sacred Buddhist scriptures, accompanied by companions including the rebellious Monkey King Sun Wukong.",
      mood: [
         "Escapism",
         "Wanderlust"
      ]
   }),
   createBook({
      id: "the-jungle-books",
      title: "The Jungle Books",
      author: [
	      "Rudyard Kipling"
	   ],
      description: "Mowgli, a boy raised by wolves in the Indian jungle, encounters animals such as Baloo, Bagheera, and Shere Khan while learning the laws and dangers of the jungle.",
      mood: [
         "Wrong Era",
         "Too Happy"
      ]
   }),
   createBook({
      id: "madame-bovary",
      title: "Madame Bovary",
      author: [
	      "Gustave Flaubert"
	   ],
      description: "Emma Bovary searches for excitement beyond her provincial life through romance, luxury, and fantasy, but her desires lead to debt, disappointment, and tragedy.",
      mood: [
         "Hopelessly Romantic",
         "Too Happy"
      ],
   }),
   createBook({
      id: "meditations",
      title: "Meditations",
      author: [
	      "Marcus Aurelius"
	   ],
      description: "Private reflections written by the Roman emperor explore discipline, self-control, duty, and the practice of accepting life’s challenges.",
      mood: [
         "Existential Crisis",
         "I Have No Idea"
      ]
   }),
   createBook({
      id: "metamorphosis",
      title: "Metamorphosis and Other Stories",
      author: [
	      "Franz Kafka"
	   ],
      description: "Gregor Samsa wakes one morning transformed into a strange insect-like creature, forcing him and his family to confront isolation, responsibility, and identity.",
      mood: [
         "Escapism",
         "Too Happy"
      ]
   }),
   createBook({
      id: "middlemarch",
      title: "Middlemarch",
      author: [
	      "George Eliot"
	   ],
      description: "Set in a provincial English town, the novel intertwines the lives of several characters as they navigate marriage, ambition, politics, and personal growth.",
      mood: [
         "Hopelessly Romantic",
         "Too Happy"
      ]
   }),
   createBook({
      id: "the-mill-on-the-floss",
      title: "The Mill on the Floss",
      author: [
	      "George Eliot"
	   ],
      description: "Maggie Tulliver grows up in rural England struggling between personal desires, family expectations, and the limitations placed on women of her time.",
      mood: [
         "Hopelessly Romantic",
         "Too Happy"
      ]
   }),
   createBook({
      id: "moby-dick",
      title: "Moby-Dick",
      author: [
	      "Herman Melville"
	   ],
      description: "Ishmael joins Captain Ahab’s whaling voyage, where the pursuit of the great white whale becomes an exploration of obsession, fate, and humanity’s struggle against nature.",
      mood: [
         "Wanderlust",
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "the-odyssey",
      title: "The Odyssey",
      author: [
	      "Homer"
	   ],
      description: "Odysseus attempts to return home after the Trojan War, facing mythical creatures, divine interference, and years of hardship before reaching Ithaca.",
      mood: [
         "Needed a Caption",
         "Wanderlust"
      ]
   }),
   createBook({
      id: "on-the-origin-of-species",
      title: "On the Origin of Species",
      author: [
	      "Charles Darwin"
	   ],
      description: "Darwin presents his theory of evolution by natural selection, explaining how species change over time through adaptation and survival.",
      mood: [
         "Wrong Era",
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "the-picture-of-dorian-gray",
      title: "The Picture of Dorian Gray",
      author: [
	      "Oscar Wilde"
	   ],
      description: "Dorian Gray remains physically youthful while a hidden portrait reflects the corruption caused by his pursuit of pleasure and selfish desires.",
      mood: [
         "Trust Issues",
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "the-prince",
      title: "The Prince",
      author: [
	      "Niccolo Machiavelli"
	   ],
      description: "Machiavelli presents advice to rulers on gaining and maintaining political power through strategy, reputation, and practical decision-making.",
      mood: [
         "Existential Crisis",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "pride-and-prejudice",
      title: "Pride and Prejudice",
      author: [
         "Jane Austen"
	   ],
      description: "Elizabeth Bennet navigates family pressures, social expectations, and her changing relationship with the wealthy and reserved Mr. Darcy.",
      mood: [
         "Hopelessly Romantic",
         "Sad"
      ]
   }),
   createBook({
      id: "the-republic",
      title: "The Republic",
      author: [
	      "Plato"
	   ],
      description: "Through conversations led by Socrates, the dialogue examines justice, politics, education, and the nature of an ideal society.",
      mood: [
         "Existential Crisis",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "sense-and-sensibility",
      title: "Sense and Sensibility",
      author: [
	      "Jane Austen"
	   ],
      description: "Elinor and Marianne Dashwood experience contrasting approaches to love, relationships, and social expectations while facing financial uncertainty after their family’s loss of fortune.",
      mood: [
         "Hopelessly Romantic",
         "Sad"
      ]
   }),
   createBook({
      id: "the-symposium",
      title: "The Symposium",
      author: [
	      "Plato"
	   ],
      description: "Guests at a banquet discuss the meaning of love, beauty, desire, and the pursuit of wisdom through philosophical speeches.",
      mood: [
         "Existential Crisis",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "the-taming-of-the-shrew",
      title: "The Taming of the Shrew",
      author: [
	      "William Shakespeare"
	   ],
      description: "Petruchio attempts to marry and “tame” the strong-willed Katharina in a comedy about courtship, gender roles, and social expectations.",
      mood: [
         "Sad",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "thus-spoke-zarathustra",
      title: "Thus Spoke Zarathustra",
      author: [
	      "Friedrich Nietzsche"
	   ],
      description: "Zarathustra travels among humanity sharing philosophical teachings about self-overcoming, morality, and the transformation of human values.",
      mood: [
         "Existential Crisis",
         "Needed a Caption"
      ]
   }),
   createBook({
      id: "to-the-lighthouse",
      title: "To the Lighthouse",
      author: [
	      "Virginia Woolf"
	   ],
      description: "The Ramsay family’s visits to a Scottish island reveal changing relationships, personal memories, and the passage of time across generations.",
      mood: [  
         "Too Happy",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "tristram-shandy",
      title: "The Life and Opinions of Tristram Shandy, Gentleman",
      author: [
	      "Laurence Sterne"
	   ],
      description: "Tristram attempts to tell the story of his life but becomes distracted by countless digressions, creating a playful and unconventional comic narrative.",
      mood: [
         "Sad",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "the-turn-of-the-screw",
      title: "The Turn of the Screw",
      author: [
	      "Henry James"
	   ],
      description: "A governess caring for two children at a remote estate encounters disturbing events that blur the boundary between supernatural forces and psychological fear.",
      mood: [
         "Life TOO Peaceful",
         "Trust Issues"
      ]
   }),
   createBook({
      id: "walden-and-civil-disobedience",
      title: "Walden and Civil Disobedience",
      author: [
	      "Henry David Thoreau"
	   ],
      description: "Thoreau describes his experiment living simply in nature while reflecting on society, independence, work, and personal fulfillment.",
      mood: [
         "I Have No Idea",
         "Existential Crisis"
      ],
   }),
   createBook({
      id: "war-and-peace",
      title: "War and Peace",
      author: [
	      "Leo Tolstoy"
	   ],
      description: "Several aristocratic families experience love, ambition, and personal transformation during the Napoleonic invasion of Russia.",
      mood: [
         "Wrong Era",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "wuthering-heights",
      title: "Wuthering Heights",
      author: [
	      "Emily Bronte"
	   ],
      description: "The turbulent relationship between Heathcliff and Catherine shapes generations of families through passion, revenge, and emotional destruction.",
      mood: [
         "Hopelessly Romantic",
         "Too Happy"
      ]
   }),
   createBook({
      id: "the-oresteia",
      title: "The Oresteia",
      author: [
	      "Aeschylus"
	   ],
      description: "Three connected Greek tragedies follow Agamemnon's family through murder, revenge, and the transformation of justice from personal vengeance to civic law.",
      mood: [
         "Too Happy",
         "Needed a Caption"
      ]
   }),
   createBook({
      id: "medea",
      title: "Medea and Other Plays",
      author: [
	      "Euripides"
	   ],
      description: "Betrayed by her husband, Medea seeks a terrible revenge while other tragedies examine war, suffering, and the power of the gods.",
      mood: [
         "Too Happy",
         "Needed a Caption"
      ]
   }),
   createBook({
      id: "the-histories",
      title: "The Histories",
      author: [
	      "Herodotus"
	   ],
      description: "A sweeping account of the Greco-Persian Wars combines historical events with stories about cultures, rulers, and legendary figures.",
      mood: [
         "Wrong Era",
         "Wanderlust"
      ]
   }),
   createBook({
      id: "letters-from-a-stoic",
      title: "Letters from a Stoic",
      author: [
	      "Seneca"
	   ],
      description: "A series of personal letters in which Seneca gives practical advice on handling life’s challenges with wisdom and composure.",
      mood: [
         "Existential Crisis",
         "I Have No Idea"
      ]
   }),
   createBook({
      id: "dialogues-and-letters",
      title: "Dialogues and Letters",
      author: [
	      "Seneca"
	   ],
      description: "A collection of philosophical essays and conversations in which Seneca examines morality, human behavior, and the nature of a good life.",
      mood: [
         "Existential Crisis",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "the-nature-of-things",
      title: "The Nature of Things",
      author: [
	      "Lucretius"
	   ],
      description: "An epic poem explains Epicurean philosophy, the natural world, and humanity's place in the universe.",
      mood: [
         "Existential Crisis",
         "Needed a Caption"
      ]
   }),
   createBook({
      id: "the-twelve-caesars",
      title: "The Twelve Caesars",
      author: [
	      "Suetonius"
	   ],
      description: "Biographical portraits of Rome's first emperors reveal their achievements, scandals, and personalities.",
      mood: [
         "Wrong Era"
      ]
   }),
   createBook({
      id: "hamlet",
      title: "Hamlet",
      author: [
	      "William Shakespeare"
	   ],
      description: "Prince Hamlet seeks revenge after discovering that his father was murdered, leading to tragedy, betrayal, and philosophical reflection.",
      mood: [
         "Trust Issues",
         "Too Happy"
      ]
   }),
   createBook({
      id: "macbeth",
      title: "Macbeth",
      author: [
	      "William Shakespeare"
	   ],
      description: "A Scottish nobleman's ambition and belief in prophecy lead him toward tyranny, guilt, and destruction.",
      mood: [
         "Too Happy",
         "Life TOO Peaceful",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "king-lear",
      title: "King Lear",
      author: [
	      "William Shakespeare"
	   ],
      description: "An aging king divides his kingdom among his daughters, unleashing betrayal, madness, and family tragedy.",
      mood: [
         "Too Happy"
      ]
   }),
   createBook({
      id: "romeo-and-juliet",
      title: "Romeo and Juliet",
      author: [
	      "William Shakespeare"
	   ],
      description: "Two young lovers from feuding families pursue a forbidden romance with tragic consequences.",
      mood: [
         "Hopelessly Romantic",
         "Too Happy"
      ]
   }),
   createBook({
      id: "the-tempest",
      title: "The Tempest",
      author: [
	      "William Shakespeare"
	   ],
      description: "A magician uses his powers to confront betrayal while exploring forgiveness, justice, and reconciliation.",
      mood: [
         "Escapism",
         "Too Happy"
      ],
   }),
   createBook({
      id: "a-midsummer-nights-dream",
      title: "A Midsummer Night's Dream",
      author: [
	      "William Shakespeare"
	   ],
      description: "Lovers, fairies, and mistaken identities create a magical comedy about love and imagination.",
      mood: [
         "Sad",
         "Escapism"
      ]
   }),
   createBook({
      id: "much-ado-about-nothing",
      title: "Much Ado About Nothing",
      author: [
	      "William Shakespeare"
	   ],
      description: "Two couples navigate deception, misunderstandings, and romance in one of Shakespeare's most celebrated comedies.",
      mood: [
         "Sad",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "the-decameron",
      title: "The Decameron",
      author: [
	      "Giovanni Boccaccio"
	   ],
      description: "Ten young people escaping the plague tell one hundred stories about love, fortune, deception, and human nature.",
      mood: [
         "Sad",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "a-modest-proposal",
      title: "A Modest Proposal and Other Writings",
      author: [
	      "Jonathan Swift"
	   ],
      description: "Satirical essays expose social inequality, political corruption, and human foolishness through wit and irony.",
      mood: [
         "Wrong Era",
         "Sad"
      ]
   }),
   createBook({
      id: "leviathan",
      title: "Leviathan",
      author: [
	      "Thomas Hobbes"
	   ],
      description: "Hobbes argues that strong government is necessary to prevent conflict and maintain social order.",
      mood: [
         "Existential Crisis",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "the-social-contract",
      title: "The Social Contract",
      author: [
	      "Jean-Jacques Rousseau"
	   ],
      description: "Rousseau explores political freedom and argues that legitimate governments derive authority from the consent of the governed.",
      mood: [
         "Existential Crisis",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "a-discourse-on-inequality",
      title: "A Discourse on Inequality",
      author: [
	      "Jean-Jacques Rousseau"
	   ],
      description: "Rousseau examines the origins of inequality and the effects of civilization on human society.",
      mood: [
         "Existential Crisis",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "the-politics",
      title: "The Politics",
      author: [
	      "Aristotle"
	   ],
      description: "Aristotle analyzes different forms of government and the role of citizens in an ideal society.",
      mood: [
         "Existential Crisis",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "discourses",
      title: "Discourses",
      author: [
	      "Epictetus"
	   ],
      description: "Practical lessons teach resilience, self-discipline, and focusing only on what lies within one's control.",
      mood: [
         "Existential Crisis",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "phaedrus",
      title: "Phaedrus",
      author: [
	      "Plato"
	   ],
      description: "Socrates explores love, rhetoric, beauty, and the nature of the soul through philosophical dialogue.",
      mood: [
         "Existential Crisis",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "north-and-south",
      title: "North and South",
      author: [
	      "Elizabeth Gaskell"
	   ],
      description: "A young woman navigates class divisions, industrial conflict, and romance in Victorian England.",
      mood: [
         "Hopelessly Romantic",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "cranford",
      title: "Cranford / Cousin Phillis",
      author: [
	      "Elizabeth Gaskell"
	   ],
      description: "A quiet English village is portrayed through humorous and affectionate stories of its people.",
      mood: [
         "Hopelessly Romantic",
         "Sad"
      ]
   }),
   createBook({
      id: "noli-me-tangere",
      title: "Noli Me Tangere",
      author: [
	      "Jose Rizal"
	   ],
      description: "Crisóstomo Ibarra returns to the Philippines hoping to reform society but encounters corruption, injustice, and the abuses of Spanish colonial rule.",
      mood: [
         "Wrong Era",
         "Hopelessly Romantic",
      ]
   }),
   createBook({
      id: "el-filibusterismo",
      title: "El Filibusterismo",
      author: [
	      "Jose Rizal"
	   ],
      description: "Years after the events of Noli Me Tangere, Simoun secretly pursues revenge while exposing the failures of colonial society.",
      mood: [
         "Wrong Era",
         "Trust Issues",
      ]
   }),
   createBook({
      id: "the-woman-who-had-two-navels",
      title: "The Woman Who Had Two Navels and Tales of the Tropical Gothic",
      author: [
	      "Nick Joaquin"
	   ],
      description: "Stories blending history, memory, identity, and myth explore the complexities of Filipino culture.",
      mood: [
         "Too Happy",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "america-is-in-the-heart",
      title: "America is in the Heart",
      author: [
	      "Carlos Bulosan"
	   ],
      description: "A Filipino immigrant recounts his experiences with poverty, racism, labor activism, and hope in the United States.",
      mood: [
         "Wrong Era",
         "Too Happy"
      ]
   }),
   createBook({
      id: "anna-karenina",
      title: "Anna Karenina",
      author: [
	      "Leo Tolstoy"
	   ],
      description: "Anna Karenina enters a passionate relationship that challenges the expectations of Russian society while the lives of several families explore love, marriage, faith, and personal fulfillment.",
      mood: [
         "Hopelessly Romantic",
         "Too Happy"
      ]
   }),
   createBook({
      id: "bleak-house",
      title: "Bleak House",
      author: [
	      "Charles Dickens"
	   ],
      description: "Multiple lives become connected through a lengthy legal dispute while hidden family secrets, social inequality, and corruption gradually come to light.",
      mood: [
         "Trust Issues",
         "Too Happy"
      ]
   }),
   createBook({
      id: "cousin-bette",
      title: "Cousin Bette",
      author: [
	      "Honore de Balzac"
	   ],
      description: "Resentful of her wealthy relatives, Cousin Bette quietly sets in motion a series of schemes that threaten the lives and fortunes of an entire family.",
      mood: [
         "Hopelessly Romantic",
         "Too Happy"
      ]
   }),
   createBook({
      id: "dangerous-liaisons",
      title: "Dangerous Liaisons",
      author: [
	      "Pierre Choderlos de Laclos"
	   ],
      description: "Two aristocrats manipulate friends and lovers through deception and seduction, turning their private games into destructive consequences.",
      mood: [
         "Hopelessly Romantic",
         "Trust Issues"
      ]
   }),
   createBook({
      id: "david-copperfield",
      title: "David Copperfield",
      author: [
	      "Charles Dickens"
	   ],
      description: "David Copperfield recounts his journey from a difficult childhood to adulthood while discovering friendship, ambition, and his place in the world.",
      mood: [
         "Hopelessly Romantic",
         "Wanderlust"
      ]
   }),
   createBook({
      id: "dead-souls",
      title: "Dead Souls",
      author: [
	      "Nikolai Gogol"
	   ],
      description: "Chichikov travels across Russia purchasing the legal ownership of deceased serfs as part of an unusual scheme that exposes greed and social corruption.",
      mood: [
         "Sad",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "demons",
      title: "Demons",
      author: [
	      "Fyodor Dostoevsky"
	   ],
      description: "A provincial Russian town is shaken by political radicals whose beliefs and ambitions lead to violence, chaos, and moral conflict.",
      mood: [
         "Trust Issues",
         "Too Happy"
      ]
   }),
   createBook({
      id: "eugene-onegin",
      title: "Eugene Onegin",
      author: [
	      "Alexander Pushkin"
	   ],
      description: "A disillusioned nobleman and a thoughtful young woman experience missed opportunities, love, and regret across the changing seasons of their lives.",
      mood: [
         "Needed a Caption",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "fathers-and-sons",
      title: "Fathers and Sons",
      author: [
	      "Ivan Turgenev"
	   ],
      description: "A young nihilist returns home with his friend, bringing generational conflict and debates about politics, tradition, and love.",
      mood: [
         "Too Happy",
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "great-expectations",
      title: "Great Expectations",
      author: [
	      "Charles Dickens"
	   ],
      description: "Pip, an orphan raised in humble circumstances, unexpectedly gains the opportunity to become a gentleman while discovering the true meaning of wealth, loyalty, and love.",
      mood: [
         "Hopelessly Romantic",
         "Wanderlust"
      ]
   }),
   createBook({
      id: "hard-times",
      title: "Hard Times",
      author: [
	      "Charles Dickens"
	   ],
      description: "The lives of factory workers, teachers, and families reveal the consequences of an education and society built entirely on reason and industry.",
      mood: [
         "Wrong Era",
         "Too Happy"
      ]
   }),
   createBook({
      id: "heart-of-darkness",
      title: "Heart of Darkness",
      author: [
	      "Joseph Conrad"
	   ],
      description: "Charles Marlow travels deep into central Africa in search of a mysterious ivory trader, confronting imperialism, morality, and the darkness within humanity.",
      mood: [
         "Wanderlust",
         "Too Happy"
      ]
   }),
   createBook({
      id: "adventures-of-huckleberry-finn",
      title: "Adventures of Huckleberry Finn",
      author: [
	      "Mark Twain"
	   ],
      description: "Huck Finn escapes down the Mississippi River with an escaped slave, encountering adventure while questioning freedom, friendship, and society's values.",
      mood: [
         "Wanderlust",
         "Sad"
      ]
   }),
   createBook({
      id: "journey-to-the-centre-of-the-earth",
      title: "Journey to the Centre of the Earth",
      author: [
	      "Jules Verne"
	   ],
      description: "A professor and his companions follow an ancient clue leading them beneath the Earth's surface, discovering extraordinary worlds along the way.",
      mood: [
         "Wanderlust",
         "Escapism"
      ]
   }),
   createBook({
      id: "les-miserables",
      title: "Les Miserables",
      author: [
	      "Victor Hugo"
	   ],
      description: "Former prisoner Jean Valjean seeks redemption while being relentlessly pursued by a determined police inspector during a time of social unrest in France.",
      mood: [
         "Wrong Era",
         "Too Happy"
      ]
   }),
   createBook({
      id: "lost-illusions",
      title: "Lost Illusions",
      author: [
	      "Honore de Balzac"
	   ],
      description: "An ambitious young poet leaves his provincial home for Paris, where success, journalism, and society test his ideals and integrity.",
      mood: [
         "Hopelessly Romantic",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "notes-from-the-underground",
      title: "Notes from the Underground",
      author: [
         "Fyodor Dostoevsky"
	   ],
      description: "An isolated former civil servant reflects on his life, challenging ideas about reason, free will, and human nature through a series of personal confessions.",
      mood: [
         "Existential Crisis",
         "Too Happy"
      ]
   }),
   createBook({
      id: "oliver-twist",
      title: "Oliver Twist",
      author: [
	      "Charles Dickens"
	   ],
      description: "An orphan boy escapes the hardships of the workhouse only to become entangled with criminals while searching for belonging and a better life.",
      mood: [
         "Wanderlust",
         "Trust Issues"
      ]
   }),
   createBook({
      id: "the-adventures-of-tom-sawyer",
      title: "The Adventures of Tom Sawyer",
      author: [
	      "Mark Twain"
	   ],
      description: "Tom Sawyer fills his childhood with mischievous adventures, friendships, and unexpected dangers along the Mississippi River.",
      mood: [
         "Wanderlust",
         "Sad"
      ]
   }),
   createBook({
      id: "the-age-of-innocence",
      title: "The Age of Innocence",
      author: [
	      "Edith Wharton"
	   ],
      description: "A respected New York lawyer finds his engagement challenged when an unconventional woman forces him to question duty, love, and social expectations.",
      mood: [
         "Hopelessly Romantic",
         "Too Happy"
      ]
   }),
   createBook({
      id: "the-house-of-mirth",
      title: "The House of Mirth",
      author: [
	      "Edith Wharton"
	   ],
      description: "Lily Bart struggles to maintain her place within New York's wealthy society while balancing love, ambition, and financial insecurity.",
      mood: [
         "Hopelessly Romantic",
         "Too Happy"
      ]
   }),
   createBook({
      id: "the-island-of-dr-moreau",
      title: "The Island of Dr Moreau",
      author: [
	      "H. G. Wells"
	   ],
      description: "A shipwrecked traveler arrives on a remote island where unsettling scientific experiments raise disturbing questions about humanity and ethics.",
      mood: [
         "Life TOO Peaceful",
         "Escapism"
      ]
   }),
   createBook({
      id: "the-moonstone",
      title: "The Moonstone",
      author: [
	      "Wilkie Collins"
	   ],
      description: "The disappearance of a priceless diamond draws family members, detectives, and servants into one of literature's earliest detective mysteries.",
      mood: [
         "Trust Issues",
         "Wanderlust"
      ]
   }),
   createBook({
      id: "the-phantom-of-the-opera",
      title: "The Phantom of the Opera",
      author: [
	      "Gaston Leroux"
	   ],
      description: "A mysterious masked figure haunting the Paris Opera House becomes obsessed with a talented young singer, leading to love, jealousy, and suspense.",
      mood: [
         "Life TOO Peaceful",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "the-red-and-the-black",
      title: "The Red and the Black",
      author: [
	      "Stendhal"
	   ],
      description: "Julien Sorel attempts to rise above his humble origins through ambition, romance, and calculated social advancement in post-Napoleonic France.",
      mood: [
         "Hopelessly Romantic",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "the-three-musketeers",
      title: "The Three Musketeers",
      author: [
	      "Alexandre Dumas"
	   ],
      description: "A young swordsman joins three legendary musketeers in adventures involving loyalty, political intrigue, and daring exploits across France.",
      mood: [
         "Wanderlust",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "the-time-machine",
      title: "The Time Machine",
      author: [
	      "H. G. Wells"
	   ],
      description: "An inventor travels far into Earth's future, encountering distant civilizations that reshape his understanding of humanity's destiny.",
      mood: [
         "Wanderlust",
         "Escapism"
      ]
   }),
   createBook({
      id: "the-woman-in-white",
      title: "The Woman in White",
      author: [
	      "Wilkie Collins"
	   ],
      description: "A chance encounter with a mysterious woman draws a young art teacher into a web of secrets, mistaken identities, and conspiracy.",
      mood: [
         "Trust Issues",
         "Hopelessly Romantic"
      ]
   }),
   createBook({
      id: "the-imitation-of-christ",
      title: "The Imitation of Christ",
      author: [
	      "Thomas a Kempis"
	   ],
      description: "A collection of reflections encourages readers to pursue humility, prayer, self-denial, and a closer relationship with Christ through everyday life.",
      mood: [
         "Soul Maintenance",
         "I Have No Idea"
      ]
   }),
   createBook({
      id: "dark-night",
      title: "Dark Night",
      author: [
	      "John of the Cross"
	   ],
      description: "John of the Cross reflects on the spiritual struggles believers experience as they grow closer to God.",
      mood: [
         "Soul Maintenance",
         "Needed a Caption"
      ]
   }),
   createBook({
      id: "sayings-of-the-early-christian-monks",
      title: "Sayings of the Early Christian Monks",
      description: "A collection of stories and sayings from the Desert Fathers offers wisdom on prayer, humility, repentance, and spiritual discipline.",
      mood: [
         "Soul Maintenance",
         "I Have No Idea"
      ]
   }),
   createBook({
      id: "the-rule-of-benedict",
      title: "The Rule of Benedict",
      author: [
	      "Benedict of Nursia"
	   ],
      description: "Benedict sets out guidelines for monastic life centered on prayer, work, obedience, humility, and community.",
      mood: [
         "Soul Maintenance",
         "I Have No Idea"
      ]
   }),
   createBook({
      id: "the-philokalia",
      title: "The Philokalia (A Selection)",
      description: "A collection of writings by Eastern Christian spiritual teachers offers guidance on prayer, virtue, and the pursuit of holiness.",
      mood: [
         "Soul Maintenance",
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "the-cloud-of-unknowing",
      title: "The Cloud of Unknowing and Other Works",
      description: "An anonymous writer presents teachings on contemplative prayer and seeking God through love rather than intellectual understanding.",
      mood: [
         "Soul Maintenance",
         "I Have No Idea"
      ]
   }),
   createBook({
      id: "revelations-of-divine-love",
      title: "Revelations of Divine Love",
      author: [
	      "Julian of Norwich"
	   ],
      description: "Julian of Norwich recounts a series of visions reflecting on God's love, mercy, and hope in the midst of suffering.",
      mood: [
         "Soul Maintenance",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "early-christian-writings",
      title: "Early Christian Writings",
      description: "Letters, sermons, and other early Christian writings offer instruction on faith, worship, Church leadership, and Christian living.",
      mood: [
         "Soul Maintenance",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "city-of-god",
      title: "City of God",
      author: [
	      "Augustine of Hippo"
	   ],
      description: "Augustine contrasts the earthly city with the City of God while examining history, politics, human nature, and the Christian hope.",
      mood: [
         "Soul Maintenance",
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "alices-adventures-in-wonderland",
      title: "Alice's Adventures in Wonderland",
      author: [
         "Lewis Carroll"
      ],
      description: "Alice falls down a rabbit hole into a strange world where logic shifts, creatures speak in riddles, and every encounter challenges her understanding of reality.",
      mood: [
         "Escapism",
         "Wanderlust",
         "Sad"
      ]
   }),
   createBook({
      id: "fear-and-trembling",
      title: "Fear and Trembling",
      author: [
         "Soren Kierkegaard"
      ],
      description: "Kierkegaard reflects on faith, sacrifice, and the terrifying uncertainty of Abraham's willingness to obey a divine command.",
      mood: [
         "Existential Crisis",
         "Soul Maintenance"
      ]
   }),
   createBook({
      id: "le-morte-d-arthur-1",
      title: "Le Morte d'Arthur, Volume I",
      author: [
         "Thomas Malory"
      ],
      description: "A cycle of legends follows King Arthur, Merlin, and the knights of the Round Table through quests, rivalries, honor, and the founding of a legendary kingdom.",
      mood: [
         "Wrong Era",
         "Wanderlust",
         "Escapism"
      ]
   }),
   createBook({
      id: "le-morte-d-arthur-2",
      title: "Le Morte d'Arthur, Volume II",
      author: [
         "Thomas Malory"
      ],
      description: "The Arthurian story moves toward its tragic conclusion as loyalties fracture, the Round Table falls into conflict, and the age of Camelot comes to an end.",
      mood: [
         "Wrong Era",
         "Too Happy",
         "Escapism"
      ]
   }),
   createBook({
      id: "melmoth-the-wanderer",
      title: "Melmoth the Wanderer",
      author: [
         "Charles Maturin"
      ],
      description: "A man who has traded his soul for extended life searches for someone willing to take his place, encountering stories of despair, temptation, and supernatural terror.",
      mood: [
         "Life TOO Peaceful",
         "Escapism"
      ]
   }),
   createBook({
      id: "tao-te-ching",
      title: "Tao Te Ching",
      author: [
         "Laozi"
      ],
      description: "A collection of concise verses explores simplicity, humility, non-action, and living in harmony with the natural way of things.",
      mood: [
         "Soul Maintenance",
         "I Have No Idea"
      ]
   }),
   createBook({
      id: "the-adventures-of-pinocchio",
      title: "The Adventures of Pinocchio",
      author: [
         "Carlo Collodi"
      ],
      description: "A wooden puppet longs to become a real boy but must learn honesty, responsibility, and courage through a series of perilous adventures.",
      mood: [
         "Escapism",
         "Wanderlust"
      ]
   }),
   createBook({
      id: "the-consolation-of-philosophy",
      title: "The Consolation of Philosophy",
      author: [
         "Boethius"
      ],
      description: "While imprisoned and awaiting execution, Boethius debates Fortune, happiness, free will, and the nature of true wisdom with Lady Philosophy.",
      mood: [
         "Existential Crisis",
         "I Have No Idea"
      ]
   }),
   createBook({
      id: "the-dark-eidolon",
      title: "The Dark Eidolon and Other Poems",
      author: [
         "Clark Ashton Smith"
      ],
      description: "Darkly imaginative poems evoke doomed kingdoms, ancient sorcery, death, and strange worlds shaped by beauty and horror.",
      mood: [
         "Life TOO Peaceful",
         "Escapism",
         "Needed a Caption"
      ]
   }),
   createBook({
      id: "the-dhammapada",
      title: "The Dhammapada",
      description: "A collection of Buddhist verses teaches mindfulness, compassion, self-mastery, and the path toward freedom from suffering.",
      mood: [
         "Soul Maintenance",
         "I Have No Idea",
         "Existential Crisis"
      ]
   }),
   createBook({
      id: "the-mabinogion",
      title: "The Mabinogion",
      description: "A collection of medieval Welsh tales brings together enchanted kingdoms, heroic quests, transformations, and stories of love and revenge.",
      mood: [
         "Escapism",
         "Wanderlust"
      ]
   }),
   createBook({
      id: "the-nicomachean-ethics",
      title: "The Nicomachean Ethics",
      author: [
         "Aristotle"
      ],
      description: "Aristotle examines happiness, virtue, friendship, and practical wisdom in an inquiry into what it means to live a flourishing human life.",
      mood: [
         "Existential Crisis",
         "Soul Maintenance",
         "I Have No Idea"
      ]
   }),
   createBook({
      id: "the-prose-edda",
      title: "The Prose Edda",
      author: [
         "Snorri Sturluson"
      ],
      description: "Norse myths tell of gods, giants, cosmic creation, heroic deeds, and the prophesied destruction and renewal of the world.",
      mood: [
         "Escapism",
         "Needed a Caption"
      ]
   }),
   createBook({
      id: "the-saga-of-the-volsungs",
      title: "The Saga of the Volsungs",
      author: [
         "Anonymous"
      ],
      description: "This Icelandic saga follows the Volsung family through heroic quests, cursed treasure, doomed love, and cycles of revenge.",
      mood: [
         "Wanderlust",
         "Trust Issues",
         "Too Happy"
      ]
   }),
   createBook({
      id: "the-strange-case-of-dr-jekyll-and-mr-hyde",
      title: "The Strange Case of Dr Jekyll and Mr Hyde",
      author: [
         "Robert Louis Stevenson"
      ],
      description: "A respected doctor creates a potion that separates his darker impulses from his public identity, unleashing a transformation he can no longer control.",
      mood: [
         "Life TOO Peaceful",
         "Trust Issues"
      ]
   }),
   createBook({
      id: "the-tale-of-tales",
      title: "The Tale of Tales",
      author: [
         "Giambattista Basile"
      ],
      description: "A richly comic collection of early European fairy tales presents enchanted kingdoms, impossible bargains, clever tricksters, and darkly playful transformations.",
      mood: [
         "Escapism",
         "Wanderlust"
      ]
   }),
   createBook({
      id: "the-wonderful-world-of-oz",
      title: "The Wonderful Wizard of Oz",
      author: [
         "L. Frank Baum"
      ],
      description: "Swept away to the magical land of Oz, Dorothy travels along the yellow brick road with three companions who hope the Wizard can grant their deepest wishes.",
      mood: [
         "Escapism",
         "Wanderlust"
      ]
   }),
   createBook({
      id: "utopia",
      title: "Utopia",
      author: [
         "Thomas More"
      ],
      description: "A fictional account of an imagined island society questions private property, political authority, work, education, and the meaning of a well-ordered life.",
      mood: [
         "Existential Crisis",
         "Wrong Era"
      ]
   }),
   createBook({
      id: "vathek",
      title: "Vathek",
      author: [
         "William Beckford"
      ],
      description: "The ambitious caliph Vathek pursues forbidden knowledge and supernatural power, descending into a world of temptation, excess, and damnation.",
      mood: [
         "Life TOO Peaceful",
         "Escapism"
      ]
   })
]


export default books