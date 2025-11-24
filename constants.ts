

import { Achievement, Exercise } from './types';

export const URDU_CONCEPTS = [
  {
    "urdu": "خشوع",
    "english": "Khushu' (Humility in Prayer)",
    "description": "Daily Focus: Ensure every movement and word in Salah is done with deep concentration and awareness of Allah."
  },
  {
    "urdu": "توکل",
    "english": "Tawakkul (Reliance on Allah)",
    "description": "Daily Focus: Do your part, then trust Allah with the outcome. Anxiety ends where belief begins."
  },
  {
    "urdu": "صبر",
    "english": "Sabr (Patience)",
    "description": "Daily Focus: Respond to challenges with grace. Patience is not just waiting, but how you behave while waiting."
  },
  {
    "urdu": "شکر",
    "english": "Shukr (Gratitude)",
    "description": "Daily Focus: Count your blessings, not your problems. Gratitude increases what you have."
  },
  {
    "urdu": "اخلاص",
    "english": "Ikhlas (Sincerity)",
    "description": "Daily Focus: Check your intentions. Do good deeds solely for Allah's pleasure, not for praise."
  },
  {
    "urdu": "احساس",
    "english": "Ihsas (Awareness/Feeling)",
    "description": "Daily Focus: Be fully conscious of your speech and actions, avoiding wasted time and vain talk."
  },
  {
    "urdu": "انفاق",
    "english": "Infaq (Spending in Charity)",
    "description": "Daily Focus: Give a small, regular charity (Sadaqah) today, even a smile or a kind word, with sincere intention."
  }
];

export const DUAS = [
  {
    "arabic": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    "english": "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire."
  },
  {
    "arabic": "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
    "english": "My Lord, make me an establisher of prayer, and [many] from my descendants. Our Lord, and accept my supplication."
  },
  {
    "arabic": "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    "english": "O Allah, You are Forgiving and love forgiveness, so forgive me."
  },
  {
    "arabic": "رَبِّ زِدْنِي عِلْمًا",
    "english": "My Lord, increase me in knowledge."
  },
  {
    "arabic": "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
    "english": "My Lord, expand for me my breast [with assurance] and ease for me my task."
  }
];

export const DAILY_QUOTES =[
  "The best among you is the one who does not harm others with his tongue and hands.",
  "When you see a person who has been given more than you in money and beauty, look to those who have been given less.",
  "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.",
  "The world is a prison for the believer and a paradise for the disbeliever.",
  "Good character is half of faith.",
  "Do not lose hope, nor be sad.",
  "Allah does not burden a soul beyond that it can bear.",
  "Speak good or remain silent.",
  "The most beloved deeds to Allah are those that are consistent, even if they are small.",
  "Cleanliness is half of faith."
];

export const CONGRATS_MESSAGES: Record<string, string[]> = {
  SALAH: ["MashaAllah! A step closer to Jannah.", "Your Salah is your light.", "Keep it up, Allah loves consistency.", "Perfect! The angels are recording this.", "Allah is proud of you."],
  DHIKR: ["The hearts find rest in this.", "A tongue moist with Dhikr is a treasure.", "SubhanAllah, excellent progress.", "You are remembered in the Heavens."],
  FITNESS: ["Strong believer, strong body!", "Excellent discipline.", "Your body is an Amanah, well kept.", "Powering through! MashaAllah."],
  HYGIENE: ["Cleanliness is half of Iman.", "Pure body, pure soul.", "Refreshing! Keep shining.", "Spotless and spiritual."],
  HABITS: ["Breaking chains, building freedom.", "Discipline is freedom.", "You are stronger than your desires.", "A victory for your soul."],
  QURAN: ["The Quran is witnessing for you.", "Light upon light.", "Every letter is 10 rewards.", "Beautiful recitation.", "The Book of Allah is your companion."],
  MDF: ["Purity is power!", "Stay strong, you are doing amazing.", "Every clean day is a victory.", "Guard your heart."],
  HADEES: ["Knowledge is light.", "You have learned a wisdom of the Prophet (SAW).", "Apply this wisdom to your life.", "May Allah increase your knowledge."],
  NIGHT: ["Sleep like a believer.", "Angels protect you tonight.", "Sunnah before sleep is peace.", "Rest well, warrior."],
  MEMORIZE: ["Quran in the heart is a shield.", "MashaAllah, memory of a scholar!", "Keep preserving the words of Allah.", "Another Ayah, another rank in Jannah."],
  RAMADAN: ["May Allah accept your fast.", "Rayyan is calling.", "Patience in hunger, reward in Hereafter.", "Blessed month, blessed you."],
  KNOWLEDGE: ["Knowledge is the path to Paradise.", "May Allah increase you in beneficial knowledge.", "You are walking in the footsteps of scholars.", "Light upon Light.", "The angels lower their wings for the seeker of knowledge."],
  DEFAULT: ["Fantastic job!", "Keep going, Zohaib!", "Alhamdulillah for this success.", "Proud of your progress.", "Every step counts."]
};

export const TAB_MESSAGES: Record<string, string[]> = {
  SALAH: ["Prayer is the pillar of religion.", "Sujud is where the heart finds rest.", "Delaying prayer delays success.", "Fajr is your victory over sleep.", "Make your Salah your refuge."],
  DHIKR: ["Keep your tongue moist with remembrance.", "Dhikr is the polish of the heart.", "Remember Me, I will remember you.", "In the remembrance of Allah do hearts find rest.", "The best wealth is a tongue that remembers Allah."],
  QURAN: ["Recite Quran, for it will come as an intercessor.", "The Quran is a cure for the heart.", "Do not abandon the Book of Allah.", "Recite beautifully, it is the word of the King.", "Reflect on the verses."],
  FITNESS: ["A strong believer is better than a weak believer.", "Your body has a right over you.", "Health is a crown on the heads of the healthy.", "Take care of the vessel of your soul.", "Strength comes from discipline."],
  HYGIENE: ["Allah is Pure and loves purity.", "Cleanliness invites the angels.", "Miswak is pleasing to the Lord.", "Wudu is the weapon of the believer.", "Purify yourself for Allah."],
  MDF: ["Lower your gaze to guard your heart.", "Patience in avoiding sin is easier than the pain of regret.", "The eyes are the window to the soul, keep them clean.", "You are a warrior against your nafs.", "Seek refuge in Allah from Shaytan."],
  HABITS: ["Change your habits, change your life.", "Small consistent deeds are loved by Allah.", "You are the master of your nafs.", "Break the chains of addiction.", "Freedom is in discipline."],
  HADEES: ["Revive a Sunnah.", "The Prophet (SAW) is our best role model.", "Follow the footsteps of the Beloved.", "Wisdom is the lost property of the believer.", "Act upon what you learn."],
  NIGHT: ["Sleep with Wudu.", "Recite Ayatul Kursi for protection.", "Forgive everyone before you sleep.", "Tahajjud is the honor of the believer.", "The night is for rest and worship."],
  MEMORIZE: ["Preserve the Quran in your chest.", "The one who recites and is difficult gets double reward.", "Elevate your rank in Jannah.", "Knowledge is power.", "The Quran will be your companion in the grave."],
  RAMADAN: ["The month of mercy.", "Fast with your eyes, ears, and tongue.", "Feed a fasting person.", "Seek Laylatul Qadr.", "Quran was revealed in this month."],
  NAMES99: ["Call upon Him by His Names.", "Knowing Allah is loving Allah.", "He is closer to you than your jugular vein.", "Reflect on His Attributes.", "The keys to accepted Dua."]
};

export const PREDEFINED_DHIKR = [
    { label: "سُبْحَانَ اللَّهِ", arabic: "سُبْحَانَ اللَّهِ" },
    { label: "الْحَمْدُ لِلَّهِ", arabic: "الْحَمْدُ لِلَّهِ" },
    { label: "اللَّهُ أَكْبَرُ", arabic: "اللَّهُ أَكْبَرُ" },
    { label: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ", arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ" },
    { label: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ" },
    { label: "أَسْتَغْفِرُ اللَّهَ", arabic: "أَسْتَغْفِرُ اللَّهَ" },
    { label: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ", arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ" },
    { label: "حَسْبُنَا اللَّهُ", arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ" },
    { label: "لَا حَوْلَ وَلَا قُوَّةَ", arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ" },
    { label: "يَا حَيُّ يَا قَيُّومُ", arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ" }
];

export const PREDEFINED_WORKOUTS = [
    { name: "Biceps Curls", target: 30 },
    { name: "Triceps Dips", target: 20 },
    { name: "Chest Press", target: 25 },
    { name: "Situps", target: 50 },
    { name: "Squats", target: 40 },
    { name: "Plank (sec)", target: 60 },
    { name: "Cobra Stretch", target: 1 },
    { name: "Burpees", target: 15 },
    { name: "Lunges", target: 20 },
    { name: "Mountain Climbers", target: 30 }
];

export const PARAH_NAMES_ARABIC = [
  "الم", "سيقول", "تلك الرسل", "لن تنالوا", "والمحصنات", "لا يحب الله", "وإذا سمعوا", "ولو أننا", "قال الملأ", "واعلموا",
  "يعتذرون", "وما من دابة", "وما أبرئ", "ربما", "سبحان الذي", "قال ألم", "اقترب", "قد أفلح", "وقال الذين", "أمن خلق",
  "اتل ما أوحي", "ومن يقنت", "وما لي", "فمن أظلم", "إليه يرد", "حم", "قال فما خطبكم", "قد سمع الله", "تبارك الذي", "عم يتساءلون"
];

export const QURAN_PART_LABELS = {
    rub: "Rub'",
    nisf: "Nisf",
    thalatha: "Thalatha",
    kamil: "Kamil (Parah)"
};

export const HADEES_COLLECTION = [
  { "Hadith": "اعمال کا دارومدار نیتوں پر ہے۔ (بخاری)", "Explanation": "کسی بھی عمل (عبادت یا دنیاوی) کی قبولیت اور اجر کا انحصار اس کے پیچھے موجود خالص ارادے اور نیت پر ہوتا ہے۔" },
  { "Hadith": "تم میں سے بہتر وہ ہے جو قرآن سیکھے اور سکھائے۔ (بخاری)", "Explanation": "قرآن کا علم حاصل کرنا اور اسے دوسروں تک پہنچانا ایک مسلمان کی بہترین صفت ہے۔" },
  { "Hadith": "صفائی نصف ایمان ہے۔ (مسلم)", "Explanation": "ظاہری اور باطنی پاکیزگی ایمان کا ایک اہم حصہ ہے۔" },
  { "Hadith": "مومن ایک سوراخ سے دو بار نہیں ڈسا جاتا۔ (بخاری)", "Explanation": "مومن کو ہوشیار رہنا چاہیے اور اپنی غلطیوں سے سیکھنا چاہیے۔" },
  { "Hadith": "جو چھوٹوں پر رحم نہ کرے اور بڑوں کی عزت نہ کرے وہ ہم میں سے نہیں۔ (ترمذی)", "Explanation": "اسلامی معاشرے میں باہمی احترام اور شفقت بنیادی اقدار ہیں۔" },
  { "Hadith": "دعا مومن کا ہتھیار ہے۔ (المستدرک)", "Explanation": "اللہ سے دعا کرنا مشکل وقت میں مومن کا سب سے بڑا سہارا ہے۔" },
  { "Hadith": "مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں۔ (بخاری)", "Explanation": "اچھے اخلاق اور دوسروں کو تکلیف نہ دینا اسلام کی بنیادی تعلیم ہے۔" }
];

export const MEMORIZE_CONTENT = [
  { "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا", "english": "O Allah, I ask You for beneficial knowledge." },
  { "arabic": "رَبِّ زِدْنِي عِلْمًا", "english": "My Lord, increase me in knowledge." },
  { "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", "english": "Glory is to Allah and all praise is to Him." },
  { "arabic": "لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ", "english": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers." },
  { "arabic": "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", "english": "O Allah, You are Forgiving and love forgiveness, so forgive me." }
];

export const JANAZAH_STEPS = [
    { 
        step: 1, 
        title: "Niyyah & 1st Takbeer", 
        desc: "Make intention to pray for the deceased/Allah. Raise hands to ears saying 'Allahu Akbar', then fold them. Recite Thana (Subhanaka).", 
        arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَجَلَّ ثَنَاؤُكَ وَلَا إِلَهَ غَيْرُكَ" 
    },
    { 
        step: 2, 
        title: "2nd Takbeer & Durood", 
        desc: "Say 'Allahu Akbar' (without raising hands). Recite Durood-e-Ibrahim (same as in Salah).", 
        arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ..." 
    },
    { 
        step: 3, 
        title: "3rd Takbeer & Dua", 
        desc: "Say 'Allahu Akbar'. Recite the dua for the deceased (adult or child).", 
        arabic: "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا" 
    },
    { 
        step: 4, 
        title: "4th Takbeer & Salam", 
        desc: "Say 'Allahu Akbar'. Then say Salam to the right, then to the left. Prayer concludes.", 
        arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ" 
    }
];

export const NAMES_OF_ALLAH = [
  { name: "الرَّحْمَنُ", meaning: "بڑا مہربان", desc: "جو اپنی مخلوق کے لیے بھلائی اور رحمت چاہتا ہے۔" },
  { name: "الرَّحِيمُ", meaning: "نہایت رحم والا", desc: "جو اپنے بندوں پر خاص رحمت فرماتا ہے۔" },
  { name: "الْمَلِكُ", meaning: "بادشاہ", desc: "حقیقی بادشاہ، جس کی بادشاہت کامل ہے۔" },
  { name: "الْقُدُّوسُ", meaning: "پاک", desc: "ہر عیب اور نقص سے پاک ذات۔" },
  { name: "السَّلَامُ", meaning: "سلامتی والا", desc: "وہ ذات جو ہر آفت اور کمزوری سے محفوظ ہے۔" },
  { name: "الْمُؤْمِنُ", meaning: "امن دینے والا", desc: "جو اپنے بندوں کو خوف سے امان دیتا ہے۔" },
  { name: "الْمُهَيْمِنُ", meaning: "نگہبان", desc: "جو ہر چیز کا محافظ اور نگہبان ہے۔" },
  { name: "الْعَزِيزُ", meaning: "غالب", desc: "سب پر غالب، جسے کوئی شکست نہیں دے سکتا۔" },
  { name: "الْجَبَّارُ", meaning: "زبردست", desc: "جو اپنی مرضی کو نافذ کرنے کی طاقت رکھتا ہے۔" },
  { name: "الْمُتَكَبِّرُ", meaning: "بڑائی والا", desc: "عظمت اور کبریائی صرف اسی کے لیے ہے۔" },
  { name: "الْخَالِقُ", meaning: "پیدا کرنے والا", desc: "جو ہر چیز کو عدم سے وجود میں لاتا ہے۔" },
  { name: "الْبَارِئُ", meaning: "ٹھیک بنانے والا", desc: "جو مخلوق کو مناسب انداز میں تخلیق کرتا ہے۔" },
  { name: "الْمُصَوِّرُ", meaning: "صورت دینے والا", desc: "جو ہر مخلوق کو اس کی خاص صورت عطا کرتا ہے۔" },
  { name: "الْغَفَّارُ", meaning: "بڑا بخشنے والا", desc: "جو بار بار گناہوں کو معاف فرماتا ہے۔" },
  { name: "الْقَهَّارُ", meaning: "قہر والا", desc: "جو ہر چیز پر مکمل قابو اور غلبہ رکھتا ہے۔" },
  { name: "الْوَهَّابُ", meaning: "بہت دینے والا", desc: "جو بغیر کسی غرض کے بے حساب عطا کرتا ہے۔" },
  { name: "الرَّزَّاقُ", meaning: "رزق دینے والا", desc: "جو تمام مخلوق کو رزق پہنچاتا ہے۔" },
  { name: "الْفَتَّاحُ", meaning: "کھولنے والا", desc: "جو رحمت اور رزق کے دروازے کھولتا ہے۔" },
  { name: "الْعَلِيمُ", meaning: "سب جاننے والا", desc: "جس کے علم سے کوئی چیز پوشیدہ نہیں۔" },
  { name: "الْقَابِضُ", meaning: "تنگ کرنے والا", desc: "جو حکمت کے تحت رزق یا حالات کو تنگ کرتا ہے۔" },
  { name: "الْبَاسِطُ", meaning: "کشادگی دینے والا", desc: "جو رزق اور خوشی کو وسیع کرتا ہے۔" },
  { name: "الْخَافِضُ", meaning: "پست کرنے والا", desc: "جو سرکشوں کو ذلیل اور پست کرتا ہے۔" },
  { name: "الرَّافِعُ", meaning: "بلند کرنے والا", desc: "جو ایمان والوں کے درجات بلند کرتا ہے۔" },
  { name: "الْمُعِزُّ", meaning: "عزت دینے والا", desc: "جسے چاہے عزت عطا فرماتا ہے۔" },
  { name: "الْمُذِلُّ", meaning: "ذلت دینے والا", desc: "جسے چاہے ذلت سے دوچار کرتا ہے۔" },
  { name: "السَّمِيعُ", meaning: "سب سننے والا", desc: "جو ہر دھیمی اور اونچی آواز کو سنتا ہے۔" },
  { name: "الْبَصِيرُ", meaning: "سب دیکھنے والا", desc: "جو ہر ظاہر اور پوشیدہ چیز کو دیکھتا ہے۔" },
  { name: "الْحَكَمُ", meaning: "فیصلہ کرنے والا", desc: "جس کا فیصلہ اٹل اور انصاف پر مبنی ہے۔" },
  { name: "الْعَدْلُ", meaning: "سراپا انصاف", desc: "جو کبھی کسی پر ظلم نہیں کرتا۔" },
  { name: "اللَّطِيفُ", meaning: "لطف کرنے والا", desc: "جو بندوں کی باریک ترین ضروریات کو جانتا ہے۔" },
  { name: "الْخَبِيرُ", meaning: "باخبر", desc: "جو ہر چیز کی حقیقت سے آگاہ ہے۔" },
  { name: "الْحَلِيمُ", meaning: "بردبار", desc: "جو گناہ گاروں کو فوراً سزا نہیں دیتا۔" },
  { name: "الْعَظِيمُ", meaning: "عظمت والا", desc: "جس کی عظمت کی کوئی انتہا نہیں۔" },
  { name: "الْغَفُورُ", meaning: "معاف کرنے والا", desc: "جو گناہوں کو چھپاتا اور معاف کرتا ہے۔" },
  { name: "الشَّكُورُ", meaning: "قدر دان", desc: "جو تھوڑے عمل پر بھی بڑا اجر دیتا ہے۔" },
  { name: "الْعَلِيُّ", meaning: "بلند مرتبہ", desc: "جس کا مقام سب سے بلند ہے۔" },
  { name: "الْكَبِيرُ", meaning: "بڑا", desc: "جو ہر لحاظ سے سب سے بڑا ہے۔" },
  { name: "الْحَفِيظُ", meaning: "حفاظت کرنے والا", desc: "جو ہر چیز کی حفاظت فرماتا ہے۔" },
  { name: "الْمُقِيتُ", meaning: "روزی پہنچانے والا", desc: "جو ہر جاندار کو قوت اور خوراک دیتا ہے۔" },
  { name: "الْحَسِيبُ", meaning: "کفایت کرنے والا", desc: "جو اپنے بندوں کے لیے کافی ہے۔" },
  { name: "الْجَلِيلُ", meaning: "جلال والا", desc: "جو جلال اور بزرگی کا مالک ہے۔" },
  { name: "الْكَرِيمُ", meaning: "کرم کرنے والا", desc: "جو بے حد سخی اور مہربان ہے۔" },
  { name: "الرَّقِيبُ", meaning: "نگران", desc: "جو ہر وقت ہر چیز پر نظر رکھتا ہے۔" },
  { name: "الْمُجِيبُ", meaning: "قبول کرنے والا", desc: "جو دعا مانگنے والوں کی دعا قبول کرتا ہے۔" },
  { name: "الْوَاسِعُ", meaning: "وسعت والا", desc: "جس کی رحمت اور علم وسیع ہے۔" },
  { name: "الْحَكِيمُ", meaning: "حکمت والا", desc: "جس کا ہر کام حکمت سے بھرا ہوتا ہے۔" },
  { name: "الْوَدُودُ", meaning: "محبت کرنے والا", desc: "جو اپنے نیک بندوں سے محبت کرتا ہے۔" },
  { name: "الْمَجِيدُ", meaning: "بزرگی والا", desc: "جس کی شان بہت بلند ہے۔" },
  { name: "الْبَاعِثُ", meaning: "اٹھانے والا", desc: "جو مرنے کے بعد دوبارہ زندہ کرے گا۔" },
  { name: "الشَّهِيدُ", meaning: "گواہ", desc: "جو ہر جگہ موجود اور ہر چیز پر گواہ ہے۔" },
  { name: "الْحَقُّ", meaning: "برحق", desc: "جس کا وجود اور قول سچا ہے۔" },
  { name: "الْوَكِيلُ", meaning: "کارساز", desc: "جو کام بنانے والا اور بھروسے کے لائق ہے۔" },
  { name: "الْقَوِيُّ", meaning: "قوت والا", desc: "جس کی طاقت لا زوال ہے۔" },
  { name: "الْمَتِينُ", meaning: "مضبوط", desc: "جس کی قوت میں کبھی کمی نہیں آتی۔" },
  { name: "الْوَلِيُّ", meaning: "مددگار", desc: "جو مومنوں کا دوست اور مددگار ہے۔" },
  { name: "الْحَمِيدُ", meaning: "قابل تعریف", desc: "جو ہر حال میں تعریف کے لائق ہے۔" },
  { name: "الْمُحْصِي", meaning: "شمار کرنے والا", desc: "جو ہر چیز کا احاطہ اور شمار رکھتا ہے۔" },
  { name: "الْمُبْدِئُ", meaning: "پہلی بار پیدا کرنے والا", desc: "جس نے کائنات کو پہلی بار تخلیق کیا۔" },
  { name: "الْمُعِيدُ", meaning: "دوبارہ پیدا کرنے والا", desc: "جو قیامت کے دن دوبارہ زندگی دے گا۔" },
  { name: "الْمُحْيِي", meaning: "زندہ کرنے والا", desc: "جو زندگی عطا کرتا ہے۔" },
  { name: "الْمُمِيتُ", meaning: "مارنے والا", desc: "جو موت طاری کرتا ہے۔" },
  { name: "الْحَيُّ", meaning: "زندہ", desc: "جو ہمیشہ سے زندہ ہے اور ہمیشہ رہے گا۔" },
  { name: "الْقَيُّومُ", meaning: "قائم رکھنے والا", desc: "جو خود قائم ہے اور کائنات کو سنبھالے ہوئے ہے۔" },
  { name: "الْوَاجِدُ", meaning: "پانے والا", desc: "جو ہر چیز کو پا سکتا ہے، کوئی چیز اس سے گم نہیں۔" },
  { name: "الْمَاجِدُ", meaning: "بزرگی والا", desc: "جو عزت اور شرف والا ہے۔" },
  { name: "الْوَاحِدُ", meaning: "اکیلا", desc: "جو اپنی ذات اور صفات میں یکتا ہے۔" },
  { name: "الصَّمَدُ", meaning: "بے نیاز", desc: "جسے کسی کی حاجت نہیں، سب اس کے محتاج ہیں۔" },
  { name: "الْقَادِرُ", meaning: "قدرت والا", desc: "جو ہر چیز پر قدرت رکھتا ہے۔" },
  { name: "الْمُقْتَدِرُ", meaning: "مقتدر", desc: "جس کا اقتدار کامل ہے۔" },
  { name: "الْمُقَدِّمُ", meaning: "آگے کرنے والا", desc: "جسے چاہے عزت اور رتبے میں آگے کر دے۔" },
  { name: "الْمُؤَخِّرُ", meaning: "پیچھے کرنے والا", desc: "جسے چاہے پیچھے کر دے۔" },
  { name: "الْأَوَّلُ", meaning: "سب سے پہلے", desc: "جس سے پہلے کچھ نہ تھا۔" },
  { name: "الْآخِرُ", meaning: "سب سے آخر", desc: "جس کے بعد کچھ نہ ہو گا۔" },
  { name: "الظَّاهِرُ", meaning: "ظاہر", desc: "جو اپنی نشانیوں سے عیاں ہے۔" },
  { name: "الْبَاطِنُ", meaning: "پوشیدہ", desc: "جو نظروں سے اوجھل ہے مگر ہر چیز کو جانتا ہے۔" },
  { name: "الْوَالِي", meaning: "مالک", desc: "جو کائنات کے تمام امور کا نگران ہے۔" },
  { name: "الْمُتَعَالِي", meaning: "سب سے بلند", desc: "جو ہر نقص اور عیب سے بلند ہے۔" },
  { name: "الْبَرُّ", meaning: "نیکی کرنے والا", desc: "جو اپنے بندوں پر احسان کرتا ہے۔" },
  { name: "التَّوَّابُ", meaning: "توبہ قبول کرنے والا", desc: "جو بار بار توبہ قبول کرتا ہے۔" },
  { name: "الْمُنْتَقِمُ", meaning: "بدلہ لینے والا", desc: "جو نافرمانوں کو سزا دیتا ہے۔" },
  { name: "الْعَفُوُّ", meaning: "معاف کرنے والا", desc: "جو گناہوں کو مٹا دیتا ہے۔" },
  { name: "الرَّءُوفُ", meaning: "نرم خو", desc: "جو بہت شفیق اور مہربان ہے۔" },
  { name: "مَالِكُ الْمُلْكِ", meaning: "مُلک کا مالک", desc: "جس کے پاس حقیقی بادشاہت ہے۔" },
  { name: "ذُو الْجَلَالِ وَالْإِكْرَامِ", meaning: "جلال اور اکرام والا", desc: "جو عظمت اور بخشش کا مالک ہے۔" },
  { name: "الْمُقْسِطُ", meaning: "انصاف کرنے والا", desc: "جو عدل و انصاف قائم کرتا ہے۔" },
  { name: "الْجَامِعُ", meaning: "جمع کرنے والا", desc: "جو قیامت کے دن سب کو جمع کرے گا۔" },
  { name: "الْغَنِيُّ", meaning: "بے پروا", desc: "جسے کسی کی کوئی ضرورت نہیں۔" },
  { name: "الْمُغْنِي", meaning: "غنی کرنے والا", desc: "جو جسے چاہے مالدار بنا دے۔" },
  { name: "الْمَانِعُ", meaning: "روکنے والا", desc: "جو مصیبت یا رزق کو روکنے پر قادر ہے۔" },
  { name: "الضَّارُّ", meaning: "نقصان کا مالک", desc: "جس کے حکم کے بغیر کوئی نقصان نہیں پہنچا سکتا۔" },
  { name: "النَّافِعُ", meaning: "نفع دینے والا", desc: "جو خیر اور بھلائی کا مالک ہے۔" },
  { name: "النُّورُ", meaning: "نور", desc: "جو آسمانوں اور زمین کا نور ہے۔" },
  { name: "الْهَادِي", meaning: "ہدایت دینے والا", desc: "جو سیدھا راستہ دکھاتا ہے۔" },
  { name: "الْبَدِيعُ", meaning: "نئی طرح پیدا کرنے والا", desc: "جو بغیر کسی نمونے کے کائنات بنانے والا ہے۔" },
  { name: "الْبَاقِي", meaning: "ہمیشہ رہنے والا", desc: "جسے کبھی فنا نہیں۔" },
  { name: "الْوَارِثُ", meaning: "وارث", desc: "جو سب کے فنا ہونے کے بعد باقی رہے گا۔" },
  { name: "الرَّشِيدُ", meaning: "نیک راہ دکھانے والا", desc: "جو صحیح تدبیر اور ہدایت والا ہے۔" },
  { name: "الصَّبُورُ", meaning: "صبر کرنے والا", desc: "جو گناہ گاروں کو سزا دینے میں جلدی نہیں کرتا۔" }
];

export const TIBB_REMEDIES = [
    { name: "Black Seed (Kalwanji)", desc: "Cure for everything except death.", usage: "Eat 7 seeds daily or use oil." },
    { name: "Honey", desc: "Healing for mankind.", usage: "Drink with warm water in the morning." },
    { name: "Olive Oil", desc: "From a blessed tree.", usage: "Consume or apply to skin/hair." },
    { name: "Dates (Ajwa)", desc: "Protection from poison and magic.", usage: "Eat 7 Ajwa dates in the morning." },
    { name: "Cupping (Hijama)", desc: "Best of remedies.", usage: "Perform on specific days (17, 19, 21 of lunar month)." }
];

export const OFFLINE_AI_RESPONSES = [
    "Stay patient, for Allah is with the patient.",
    "Verily, with hardship comes ease. (Quran 94:6)",
    "Remember Allah, and He will remember you.",
    "Trust in Allah's plan, it is better than your dreams.",
    "Your sins are not greater than Allah's mercy.",
    "Pray as if it is your last prayer.",
    "Kindness is a mark of faith, and whoever has not kindness has not faith.",
    "The strong believer is better and more beloved to Allah than the weak believer.",
    "Take advantage of five before five: your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before your busyness, and your life before your death.",
    "Do good deeds properly, sincerely and moderately."
];

export const RECOMMENDATIONS = [
  "Sleep on your right side to follow Sunnah.",
  "Drink water in 3 breaths while sitting.",
  "Smile, it's Sunnah and charity.",
  "Use Miswak before every prayer.",
  "Enter the house with the right foot and say Salam.",
  "Dust your bed before sleeping.",
  "Say Bismillah before eating.",
  "Eat with your right hand.",
  "Remove harmful things from the path.",
  "Visit the sick.",
  "Say Alhamdulillah in all situations.",
  "Make Dua for others in their absence.",
  "Keep your tongue moist with Dhikr.",
  "Recite Surah Mulk before sleep.",
  "Do not get angry.",
  "Speak good or remain silent.",
  "Give charity, even if it is a date.",
  "Perform Wudu before sleeping.",
  "Recite Ayatul Kursi after every prayer.",
  "Wake up early for Barakah.",
  "Say Salam to children."
];

// --- SPECIFIC GROWTH MILESTONES ---
const GROWTH_MILESTONES: Record<string, { label: string, threshold: number, icon: string }[]> = {
    SALAH: [
        { label: "Believer", threshold: 0, icon: "🤲" },
        { label: "Devout", threshold: 7, icon: "🕌" },
        { label: "Guardian", threshold: 30, icon: "🛡️" },
        { label: "Saint", threshold: 100, icon: "✨" },
        { label: "Awliya", threshold: 365, icon: "👑" }
    ],
    DHIKR: [
        { label: "Rememberer", threshold: 0, icon: "📿" },
        { label: "Focused", threshold: 7, icon: "🕯️" },
        { label: "Connected", threshold: 30, icon: "🔗" },
        { label: "Enlightened", threshold: 100, icon: "💡" },
        { label: "Sufi", threshold: 365, icon: "🕊️" }
    ],
    FITNESS: [
        { label: "Starter", threshold: 0, icon: "🌱" },
        { label: "Active", threshold: 7, icon: "🏃" },
        { label: "Strong", threshold: 30, icon: "💪" },
        { label: "Athlete", threshold: 100, icon: "🏋️" },
        { label: "Warrior", threshold: 365, icon: "⚔️" }
    ],
    MDF: [
        { label: "Awake", threshold: 0, icon: "👀" },
        { label: "Clean", threshold: 7, icon: "💧" },
        { label: "Pure", threshold: 30, icon: "🛡️" },
        { label: "Iron Will", threshold: 90, icon: "⛓️" },
        { label: "Unbreakable", threshold: 365, icon: "💎" }
    ]
};

export const getGrowthStage = (category: string, streak: number) => {
    const c = category.toUpperCase();
    const milestones = GROWTH_MILESTONES[c] || GROWTH_MILESTONES['SALAH']; 
    
    for (let i = milestones.length - 1; i >= 0; i--) {
        if (streak >= milestones[i].threshold) {
            return {
                current: milestones[i],
                next: i < milestones.length - 1 ? milestones[i+1] : undefined
            };
        }
    }
    return { current: milestones[0], next: milestones[1] };
};

// --- ALGORITHMIC ACHIEVEMENT GENERATOR ---
const generateTieredAchievements = (
    category: Achievement['category'], 
    baseId: string, 
    metric: Achievement['metric'],
    tiers: number[],
    icon: string,
    titlePrefix: string,
    descSuffix: string
): Achievement[] => {
    const tierNames: Achievement['tier'][] = ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND', 'MYTHIC', 'TITAN', 'LEGEND', 'ETERNAL', 'DIVINE'];
    
    return tiers.map((val, idx) => {
        const tierName = tierNames[Math.min(idx, tierNames.length - 1)];
        return {
            id: `${baseId}_${val}`,
            title: `${titlePrefix} ${romanize(idx + 1)}`,
            description: `${metric === 'STREAK' ? 'Reach a streak of' : 'Complete'} ${val.toLocaleString()} ${descSuffix}`,
            tier: tierName,
            icon: icon,
            category: category,
            metric: metric,
            value: val
        };
    });
};

function romanize(num: number): string {
    const lookup: any = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = '', i;
    for (i in lookup) {
        while (num >= lookup[i]) { roman += i; num -= lookup[i]; }
    }
    return roman;
}

const STREAK_TIERS = [3, 7, 14, 21, 30, 40, 60, 90, 100, 200, 365, 500, 1000, 2000, 5000, 10000];
const COUNT_TIERS = [50, 100, 500, 1000, 5000, 10000, 50000, 100000, 250000, 500000, 999999];
const REP_TIERS = [100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 999999];

const createTaskAchievements = () => {
  let ach: Achievement[] = [];
  // ... Keep existing achievement logic ...
  ach = [...ach, ...generateTieredAchievements('SALAH', 'salah_streak', 'STREAK', STREAK_TIERS, '🕌', 'Salah Guardian', 'days of consecutive Salah.')];
  ach = [...ach, ...generateTieredAchievements('SALAH', 'salah_total', 'COUNT', COUNT_TIERS, '🤲', 'Devout Servant', 'total prayers.')];
  ach = [...ach, ...generateTieredAchievements('SALAH', 'salah_jamaah', 'COUNT', COUNT_TIERS, '👥', 'Community Pillar', 'prayers in Jamaah.')];
  ach = [...ach, ...generateTieredAchievements('SALAH', 'salah_fajr', 'COUNT', STREAK_TIERS, '🌅', 'Dawn Warrior', 'Fajr prayers.')];
  ach = [...ach, ...generateTieredAchievements('SALAH', 'salah_isha', 'COUNT', STREAK_TIERS, '🌌', 'Night Watchman', 'Isha prayers.')];
  ach = [...ach, ...generateTieredAchievements('SALAH', 'salah_tahajjud', 'COUNT', STREAK_TIERS, '🌠', 'The Vigilant', 'Tahajjud prayers.')];
  ach = [...ach, ...generateTieredAchievements('MDF', 'mdf_streak', 'STREAK', STREAK_TIERS, '🛡️', 'Purity Warrior', 'days free from relapse.')];
  ach = [...ach, ...generateTieredAchievements('DHIKR', 'dhikr_total', 'COUNT', [1000, 5000, 10000, 50000, 100000, 500000, 999999, 5000000, 10000000], '📿', 'Remembrance', 'total dhikr recitations.')];
  ach = [...ach, ...generateTieredAchievements('QURAN', 'quran_streak', 'STREAK', STREAK_TIERS, '📖', 'Quran Companion', 'days reading Quran.')];
  ach = [...ach, ...generateTieredAchievements('QURAN', 'quran_juz', 'VALUE', [1, 2, 5, 10, 15, 20, 25, 30], '📚', 'Juz Master', 'Juz completed.')];
  ach = [...ach, ...generateTieredAchievements('QURAN', 'quran_khatam', 'VALUE', [1, 5, 10, 20, 50, 100, 200, 500], '🏅', 'Khatam Master', 'Qurans completed.')];
  ach = [...ach, ...generateTieredAchievements('FITNESS', 'fitness_total', 'COUNT', REP_TIERS, '💪', 'Iron Body', 'total reps/pushups.')];
  ach = [...ach, ...generateTieredAchievements('FITNESS', 'fitness_streak', 'STREAK', STREAK_TIERS, '⚡', 'Discipline', 'days of working out.')];
  ach = [...ach, ...generateTieredAchievements('HYGIENE', 'hygiene_streak', 'STREAK', STREAK_TIERS, '🧼', 'Pure Soul', 'days of perfect hygiene.')];
  ach = [...ach, ...generateTieredAchievements('HYGIENE', 'hygiene_water', 'COUNT', COUNT_TIERS, '💧', 'Hydrated', 'days hitting water goal.')];
  ach = [...ach, ...generateTieredAchievements('HYGIENE', 'hygiene_total', 'COUNT', REP_TIERS, '✨', 'Cleanliness Master', 'hygiene tasks.')];
  ach = [...ach, ...generateTieredAchievements('HABITS', 'habits_streak', 'STREAK', STREAK_TIERS, '🚭', 'Chain Breaker', 'days habit free.')];
  ach = [...ach, ...generateTieredAchievements('HABITS', 'nosmoking_streak', 'STREAK', STREAK_TIERS, '🌬️', 'Clean Air', 'days without smoking.')];
  ach = [...ach, ...generateTieredAchievements('HABITS', 'nonicotine_streak', 'STREAK', STREAK_TIERS, '🧠', 'Clear Mind', 'days without nicotine.')];
  ach = [...ach, ...generateTieredAchievements('HADEES', 'hadees_total', 'COUNT', [10, 50, 100, 500, 1000, 5000, 10000], '📜', 'Seeker of Wisdom', 'Hadith read.')];
  ach = [...ach, ...generateTieredAchievements('NIGHT', 'night_total', 'COUNT', STREAK_TIERS, '🌙', 'Night Guardian', 'nights completing routine.')];
  ach = [...ach, ...generateTieredAchievements('NAMES99', 'names99_total', 'COUNT', [10, 25, 50, 75, 99], '✨', 'Knower of Allah', 'Names learned.')];
  ach = [...ach, ...generateTieredAchievements('RAMADAN', 'ramadan_fast', 'COUNT', [1, 5, 10, 15, 20, 25, 30, 60, 90, 150, 300], '🚪', 'Rayyan', 'fasts completed.')];
  ach = [...ach, ...generateTieredAchievements('RAMADAN', 'ramadan_taraweeh', 'COUNT', [1, 5, 10, 20, 30, 100, 200], '🕌', 'Night Prayer', 'Taraweeh prayers.')];
  ach = [...ach, ...generateTieredAchievements('MEMORIZE', 'memorize_total', 'VALUE', [1, 5, 10, 20, 50, 100], '🧠', 'Hafiz', 'Duas memorized.')];
  ach.push({ id: 'knowledge_janazah', title: 'Funeral Guide', description: 'Learn the Janazah prayer steps', tier: 'SILVER', icon: '⚰️', category: 'KNOWLEDGE', metric: 'VALUE', value: 1 });
  ach.push({ id: 'knowledge_tibb', title: 'Prophetic Healer', description: 'Study Tibb-e-Nabawi remedies', tier: 'SILVER', icon: '🌿', category: 'KNOWLEDGE', metric: 'VALUE', value: 1 });
  ach = [...ach, ...generateTieredAchievements('KNOWLEDGE', 'knowledge_word', 'VALUE', [1, 5, 10, 20, 25], '📖', 'Linguist', 'Surahs studied word-by-word.')];

  return ach;
};

export const MASTER_ACHIEVEMENTS: Achievement[] = createTaskAchievements();

