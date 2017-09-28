
$(function() {

    // Populate using an object literal

    WTF.init({

        heading: [
            "Prepare your velums for my conlang",
            "Your hard palate isn't ready for my conlang",
            "My conlang brings all the wugs to the yard",
            "When colorless green ideas sleep furiously, they dream of my conlang",
            "Syntacticians do it with trees; I do it with my conlang",
            "He had in his possession a bunchberry plant; I have in my possession a conlang "
        ],

        response: [
            "Bah, A natlang's already done it, except worse"
        ],

        template: [
            "@langadj @lang with @reasonable and @unreasonable",
            "@twolang @lang and @lang with @reasonable and @unreasonable"
        ],

        twolang: [
            "a fusion of",
            "the unholy lovechild of",
            "a mix of",
            "a combination of",
            "mostly",
            "a creole of",
            "the descendent of a contact language between",
            "Chomsky's worst nightmare of"
        ],

        langadj: [
            "archaic",
            "backwards",
            "garbled",
            "lexically conservative",
            "your friendly neighborhood",
            "not your mama's",
            "run-of-the-mill",
            "a divergent branch of",
            "bored-sounding",
            "melodic",
            "angry-sounding",
            "staccato",
            "standard",
            "a peripheral variety of",
            "an innovative branch of",
            "a daughter language of",
            "a dialect of",
            "a sister language of",
            "whispered",
            "syllable-timed",
            "stress-timed",
            "comparatively reconstructed",
            "head-final",
            "head-initial",
            "head-marking",
            "dependent-marking",
            "spiced-up",
            "watered-down",
            "simplified",
            "relexified",
            "mostly",
            "sugar-free",
            "regularized",
            "a future version of",
            "bowdlerized",
            "radical pro-drop",
            "mora-timed",
            "diphthong-heavy"
        ],
        lang: [
            "Koine Greek",
            "Vulgar Latin",
            "Klingon",
            "Dyirbal",
            "Basque",
            "Proto-Indo-European",
            "Japanese",
            "Old Chinese",
            "Finnish",
            "Old Japanese",
            "Dutch",
            "Danish",
            "English",
            "Navajo",
            "Proto-Uto-Aztecan",
            "Old Irish",
            "Old Norse",
            "Sumerian",
            "Akkadian",
            "Elamite",
            "Guarani",
            "Quechua",
            "Igbo",
            "Modern Standard Arabic",
            "Somali",
            "Hindi-Urdu",
            "Skolt Sami",
            "Russian",
            "Latvian",
            "Swiss German",
            "Gujarati",
            "Malayalam",
            "Tamil",
            "Telugu",
            "Sanskrit",
            "Biblical Hebrew",
            "Tocharian",
            "Quenya",
            "Sindarin",
            "Burmese",
            "Tagalog",
            "Thai",
            "Malagasy",
            "Warlpiri",
            "Samoan",
            "Fijian",
            "Hawaiian",
            "Cherokee",
            "Berber",
            "Ojibwe",
            "Lakhota",
            "Parisian French",
            "Swahili",
            "Xhosa",
            "Zulu",
            "Welsh",
            "Mandarin",
            "Cantonese",
            "Shanghainese",
            "Hungarian",
            "Korean",
            "Okinawan",
            "Cantonese",
            "Mongolian",
            "Proto-Turkic",
            "Proto-Germanic",
            "Australian English",
            "Brazilian Portuguese",
            "Aymara",
            "Polish",
            "rGyalrong",
            "Icelandic",
            "Homeric Greek",
            "Canadian French",
            "Swedish",
            "Nuxalk",
            "Tuvan",
            "Piraha",
            "Basque-Icelandic Pidgin",
            "Haitian Creole",
            "Algonquian-Basque Pidgin",
            "Coptic",
            "Tok Pisin",
            "Bislama"
        ],

    reasonable: [
        "a five-vowel system",
        "a three-vowel system",
        "seven vowel phonemes",
        "free word order",
        "OSV word order",
        "OVS word order",
        "ergative alignment",
        "a laminal-apical distinction",
        "polypersonal agreement",
        "postpositions",
        "ejectives",
        "ejective fricatives",
        "three rhotics",
        "three trills",
        "emotive particles",
        "extensive case-marking",
        "entirely regular inflectional paradigms",
        "unstressed vowel elision",
        "triconsonantal roots",
        "split ergativity",
        "V2 word order",
        "consonant mutation",
        "ablaut",
        "vestiges of vowel harmony",
        "noun incorporation",
        "too many glottal stops",
        "clitics everywhere",
        "aspect-marking particles",
        "tense-marking particles",
        "case-marking particles",
        "pitch accent",
        "a zero-marked ergative case",
        "a zero-marked accusative",
        "rhotic harmony",
        "uvular africates",
        "null copula",
        "voiceless nasals",
        "quadral number marking",
        "metric vowel lengthening",
        "metric vowel deletion",
        "extensive onomatopoeia",
        "nasal harmony",
        "aspirated fricatives",
        "implosives",
        "voiceless implosives",
        "labio-velar harmony",
        "syllable-final devoicing",
        "a back-vowel shift",
        "a front-vowel shift",
        "a high-vowel shift",
        "a low-vowel shift",
        "tongue-root harmony",
        "Canadian-raising"
    ],

    unreasonable: [
        "base-two numerals",
        "base-eleven numerals",
        "an evidential for taste",
        "six level tones",
        "no contrastive vowel height",
        "no back vowels",
        "no front vowels",
        "a vertical vowel system",
        "four degrees of vowel length",
        "four degrees of consonant length",
        "a special measure word for memes",
        "no velars",
        "no labials",
        "no rounded vowels",
        "no unround vowels",
        "no color terms",
        "no kinship terms",
        "an evidential for smell",
        "explicit marking for singular number",
        "weather verbs derived from bodily functions",
        "definite articles derived from verbs of motion",
        "no subordination",
        "no open syllables",
        "all person marking done through circumfixes",
        "politeness affixes derived from adjectives for height",
        "three different obviative suffixes",
        "an obviative first-person marker",
        "politeness derived from valence-changing operations",
        "evidentials derived from nouns",
        "six sets of personal pronouns used during different times of day",
        "four hundred noun classes",
        "a special numeral system for garlic bread",
        "suppletive roots for common verbs if the agent is feline",
        "an animacy hierarchy with cats at the top",
        "demonstratives that inflect for whether the referent is on fire",
        "a base-four counting system used only for yams",
        "irrealis markers used only by decapitated persons"
    ],

    });

    // Populate using a JSON file
     //WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    //WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});