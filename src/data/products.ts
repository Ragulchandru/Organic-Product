import { Product } from '../types';

export const products: Product[] = [
  // --- TRADITIONAL RICE VARIETIES ---
  {
    id: 'karuppu-kavuni',
    slug: 'karuppu-kavuni-black-rice',
    name: 'Karuppu Kavuni Rice',
    tamilName: 'கருப்பு கவுனி அரிசி',
    category: 'rice',
    badge: 'Unpolished • Heirloom',
    shortDescription: 'Rich in natural anthocyanins, minerals, and deep earthy aroma. Aged to perfection.',
    description: 'Karuppu Kavuni is a traditional South Indian black rice variety known for its distinctive dark purple bran layer and firm texture. Suitable for preparing sweet payasam, idli/dosa batter, kanji, and steamed rice.',
    imageUrl: '/assets/karuppu_kavuni.jpg',
    secondaryImageUrl: '/assets/hero_pantry.jpg',
    variants: [
      { id: 'kk-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 140, inStock: true },
      { id: 'kk-10kg', weight: '10 KG', packaging: 'Traditional Bag', price: 1300, inStock: true },
      { id: 'kk-26kg', weight: '26 KG Gunny', packaging: 'Bag', price: 3000, inStock: true },
    ],
    details: {
      culinaryUses: ['Sweet Payasam', 'Traditional Idli / Dosa Batter', 'Wholesome Kanji'],
      cookingMethod: 'Soak for 6-8 hours before cooking. Use 1:3 water ratio for pressure cooking.',
      storageInfo: 'Store in a cool dry place in an airtight container.',
    }
  },
  {
    id: 'kadala-ennai',
    slug: 'wood-pressed-groundnut-oil',
    name: 'Kadala Ennai (Groundnut Oil)',
    tamilName: 'மரச்செக்கு கடலை எண்ணெய்',
    category: 'oils',
    badge: 'Wood-Pressed (Marachekku)',
    shortDescription: 'Single-origin native peanuts churned slowly in Vaagai wood press. Unrefined.',
    description: 'Extracted slowly from groundnuts using wooden cold presses. Suitable for everyday sautéing and traditional frying.',
    imageUrl: '/assets/groundnut_oil.jpg',
    secondaryImageUrl: '/assets/wood_pressed_oils.jpg',
    variants: [
      { id: 'go-1L', weight: '1 Litre', packaging: 'Bottle', price: 339, inStock: true },
    ],
    details: {
      culinaryUses: ['Everyday Sautéing', 'Frying', 'Curry Cooking'],
      storageInfo: 'Keep sealed in a cool place.',
    }
  },
  {
    id: 'thooyamalli',
    slug: 'thooyamalli-rice',
    name: 'Thooyamalli Traditional Rice',
    tamilName: 'தூயமல்லி அரிசி',
    category: 'rice',
    badge: 'Pest Resistant Native',
    shortDescription: 'Delicate pearl-white heirloom rice resembling pure jasmine buds. Light on digestion.',
    description: 'Thooyamalli is a traditional South Indian rice variety featuring small, fragrant grains. Ideal for everyday meals, biryani, and variety rice dishes.',
    imageUrl: '/assets/thooyamalli_rice.jpg',
    secondaryImageUrl: '/assets/thooyamalli_rice.jpg',
    variants: [
      { id: 'tm-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 85, inStock: true },
      { id: 'tm-10kg', weight: '10 KG', packaging: 'Traditional Bag', price: 800, inStock: true },
      { id: 'tm-26kg', weight: '26 KG', packaging: 'Bag', price: 1900, inStock: true },
    ],
    details: {
      culinaryUses: ['Everyday Steamed Rice', 'Variety Rice', 'Biryani'],
      cookingMethod: 'Soak for 30 minutes. Cook with 1:2 water ratio.',
      storageInfo: 'Store in an airtight container away from moisture.',
    }
  },
  {
    id: 'aathur-kichadi-samba',
    slug: 'aathur-kichadi-samba',
    name: 'Aathur Kichadi Samba Rice',
    tamilName: 'ஆத்தூர் கிச்சடி சம்பா',
    category: 'rice',
    badge: 'Traditional Grain',
    shortDescription: 'Fine-grained traditional raw rice popular for daily meals.',
    description: 'Aathur Kichadi Samba is a fine traditional rice variety from Tamil Nadu with a soft texture and pleasant aroma after cooking.',
    imageUrl: '/assets/aathur_kichadi.jpg',
    secondaryImageUrl: '/assets/thooyamalli_rice.jpg',
    variants: [
      { id: 'aks-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 85, inStock: true },
      { id: 'aks-10kg', weight: '10 KG', packaging: 'Traditional Bag', price: 800, inStock: true },
      { id: 'aks-26kg', weight: '26 KG', packaging: 'Bag', price: 1900, inStock: true },
    ],
    details: {
      culinaryUses: ['Daily Meals', 'Sambar Rice', 'Curd Rice'],
      cookingMethod: 'Cook with 1:2 water ratio.',
      storageInfo: 'Keep sealed in a cool dry container.',
    }
  },
  {
    id: 'sivan-samba',
    slug: 'sivan-samba-rice',
    name: 'Sivan Samba Rice',
    tamilName: 'சிவன் சம்பா அரிசி',
    category: 'rice',
    badge: 'Traditional Strain',
    shortDescription: 'Robust native red rice strain valued for traditional preparations.',
    description: 'Sivan Samba is an authentic red rice grain cultivated using traditional farming practices in Tamil Nadu.',
    imageUrl: '/assets/sivan_samba.jpg',
    secondaryImageUrl: '/assets/kattuyanam_samba.jpg',
    variants: [
      { id: 'ss-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 90, inStock: true },
      { id: 'ss-10kg', weight: '10 KG', packaging: 'Traditional Bag', price: 860, inStock: true },
      { id: 'ss-26kg', weight: '26 KG', packaging: 'Bag', price: 2100, inStock: true },
    ],
    details: {
      culinaryUses: ['Steamed Red Rice', 'Kanji', 'Traditional Tiffin'],
      cookingMethod: 'Soak for 2-3 hours before cooking.',
      storageInfo: 'Store in a dry location.',
    }
  },
  {
    id: 'thanga-samba',
    slug: 'thanga-samba-rice',
    name: 'Thanga Samba Rice',
    tamilName: 'தங்க சம்பா அரிசி',
    category: 'rice',
    badge: 'Traditional Grain',
    shortDescription: 'Golden-hued traditional rice variety with a soft cooked texture.',
    description: 'Thanga Samba is a native rice strain known for its pale golden bran and pleasant taste.',
    imageUrl: '/assets/thanga_samba.jpg',
    secondaryImageUrl: '/assets/aathur_kichadi.jpg',
    variants: [
      { id: 'ths-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 95, inStock: true },
      { id: 'ths-10kg', weight: '10 KG', packaging: 'Traditional Bag', price: 880, inStock: true },
      { id: 'ths-26kg', weight: '26 KG', packaging: 'Bag', price: 2150, inStock: true },
    ],
    details: {
      culinaryUses: ['Steamed Rice', 'Tiffin Items'],
      cookingMethod: 'Cook with 1:2.5 water ratio.',
      storageInfo: 'Keep in an airtight box.',
    }
  },
  {
    id: 'kattuyanam-samba',
    slug: 'kattuyanam-samba-rice',
    name: 'Kattuyanam Samba Red Rice',
    tamilName: 'காட்டுயானம் சம்பா',
    category: 'rice',
    badge: 'Traditional Strain',
    shortDescription: 'Traditional tall-crop coarse red rice with hearty grain body.',
    description: 'Kattuyanam Samba is a historic coarse red rice variety grown in South India, excellent for porridge and traditional tiffin batter.',
    imageUrl: '/assets/kattuyanam_samba.jpg',
    secondaryImageUrl: '/assets/red_samba_rice.jpg',
    variants: [
      { id: 'kys-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 95, inStock: true },
      { id: 'kys-10kg', weight: '10 KG', packaging: 'Traditional Bag', price: 900, inStock: true },
      { id: 'kys-26kg', weight: '26 KG', packaging: 'Bag', price: 2250, inStock: true },
    ],
    details: {
      culinaryUses: ['Red Rice Dosa/Idli', 'Nutritious Kanji'],
      cookingMethod: 'Soak for 4 hours. Pressure cook with 1:3 water ratio.',
      storageInfo: 'Store in a cool dry container.',
    }
  },
  {
    id: 'seeraga-samba',
    slug: 'seeraga-samba-rice',
    name: 'Seeraga Samba Rice',
    tamilName: 'சீரக சம்பா அரிசி',
    category: 'rice',
    badge: 'Aromatic Grain',
    shortDescription: 'Tiny aromatic rice grains traditional for South Indian Biryani.',
    description: 'Seeraga Samba is a famous small aromatic rice variety named for its resemblance to cumin seeds (Seeragam). Renowned for imparting authentic flavor to biryani and pulao.',
    imageUrl: '/assets/seeraga_samba.jpg',
    secondaryImageUrl: '/assets/thooyamalli_rice.jpg',
    variants: [
      { id: 'srs-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 90, inStock: true },
      { id: 'srs-10kg', weight: '10 KG', packaging: 'Traditional Bag', price: 850, inStock: true },
      { id: 'srs-26kg', weight: '26 KG', packaging: 'Bag', price: 2100, inStock: true },
    ],
    details: {
      culinaryUses: ['Traditional South Indian Biryani', 'Ghee Rice', 'Pulao'],
      cookingMethod: 'Cook with 1:2 water ratio.',
      storageInfo: 'Keep sealed to preserve natural aroma.',
    }
  },
  {
    id: 'kaikuthal-arisi',
    slug: 'kaikuthal-arisi',
    name: 'Kaikuthal Arisi (Hand-Pounded Rice)',
    tamilName: 'ரெட் கைக்குத்தல் அரிசி',
    category: 'rice',
    badge: 'Hand-Pounded',
    shortDescription: 'Traditional hand-pounded unpolished rice with intact bran layer.',
    description: 'Kaikuthal Arisi is hand-pounded rice prepared using traditional de-husking techniques that preserve natural bran layer color and texture.',
    imageUrl: '/assets/kaikuthal_arisi.jpg',
    secondaryImageUrl: '/assets/kattuyanam_samba.jpg',
    variants: [
      { id: 'ka-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 85, inStock: true },
      { id: 'ka-10kg', weight: '10 KG', packaging: 'Traditional Bag', price: 800, inStock: true },
      { id: 'ka-26kg', weight: '26 KG', packaging: 'Bag', price: 1900, inStock: true },
    ],
    details: {
      culinaryUses: ['Daily Meals', 'Wholesome Porridge'],
      cookingMethod: 'Soak for 2 hours. Pressure cook with 1:3 water ratio.',
      storageInfo: 'Store in an airtight container.',
    }
  },
  {
    id: 'vellai-ponni',
    slug: 'vellai-ponni-rice',
    name: 'Vellai Ponni Rice',
    tamilName: 'வெள்ளை பொன்னி அரிசி',
    category: 'rice',
    badge: 'Daily Grain',
    shortDescription: 'Premium white Ponni rice suitable for everyday cooking.',
    description: 'Vellai Ponni is a popular South Indian white rice grain preferred for daily lunches, curries, and variety rice items.',
    imageUrl: '/assets/vellai_ponni.jpg',
    secondaryImageUrl: '/assets/aathur_kichadi.jpg',
    variants: [
      { id: 'vp-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 85, inStock: true },
      { id: 'vp-10kg', weight: '10 KG', packaging: 'Traditional Bag', price: 800, inStock: true },
      { id: 'vp-26kg', weight: '26 KG', packaging: 'Bag', price: 1900, inStock: true },
    ],
    details: {
      culinaryUses: ['Daily Meals', 'Curd Rice'],
      cookingMethod: 'Cook with 1:2 water ratio.',
      storageInfo: 'Keep in a cool dry container.',
    }
  },
  {
    id: 'ponmani-idli-arisi',
    slug: 'ponmani-idli-arisi',
    name: 'Ponmani Idli Arisi',
    tamilName: 'பொன்மணி இட்லி அரிசி',
    category: 'rice',
    badge: 'Tiffin Rice',
    shortDescription: 'Parboiled short-grain rice ideal for fluffy Idlis and crispy Dosas.',
    description: 'Ponmani Idli Arisi is a specialized short-grain parboiled rice variety ideal for grinding smooth batter for soft idlis and golden dosas.',
    imageUrl: '/assets/ponmani_idli.jpg',
    secondaryImageUrl: '/assets/thooyamalli_rice.jpg',
    variants: [
      { id: 'pi-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 65, inStock: true },
      { id: 'pi-10kg', weight: '10 KG', packaging: 'Traditional Bag', price: 600, inStock: true },
      { id: 'pi-26kg', weight: '26 KG', packaging: 'Bag', price: 1450, inStock: true },
    ],
    details: {
      culinaryUses: ['Idli Batter', 'Dosa Batter'],
      cookingMethod: 'Soak with Urad Dal for batter grinding.',
      storageInfo: 'Keep in a dry container.',
    }
  },
  {
    id: 'moongil-arisi',
    slug: 'moongil-arisi-bamboo-rice',
    name: 'Moongil Arisi (Bamboo Rice)',
    tamilName: 'மூங்கில் அரிசி',
    category: 'rice',
    badge: 'Rare Grain',
    shortDescription: 'Rare traditional grain harvested from flowering bamboo shoots.',
    description: 'Moongil Arisi is a rare wild grain collected when bamboo plants flower. It has a chewy texture similar to wheat berries, suitable for payasam and specialty rice preparations.',
    imageUrl: '/assets/bamboo_rice.jpg',
    secondaryImageUrl: '/assets/hero_pantry.jpg',
    variants: [
      { id: 'ma-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 580, inStock: true },
    ],
    details: {
      culinaryUses: ['Specialty Payasam', 'Kheer', 'Health Porridge'],
      cookingMethod: 'Soak overnight (8-10 hours). Pressure cook with 1:4 water ratio.',
      storageInfo: 'Store sealed in a dry container.',
    }
  },
  {
    id: 'karunguruvai-samba',
    slug: 'karunguruvai-samba-rice',
    name: 'Karunguruvai Samba Red Rice',
    tamilName: 'கருங்குறுவை சம்பா',
    category: 'rice',
    badge: 'Traditional Strain',
    shortDescription: 'Traditional dark red rice strain valued in native South Indian agriculture.',
    description: 'Karunguruvai Samba is a dark red heirloom rice variety cultivated traditionally in Tamil Nadu for Kanji and tiffin batter.',
    imageUrl: '/assets/karunguruvai_samba.jpg',
    secondaryImageUrl: '/assets/red_samba_rice.jpg',
    variants: [
      { id: 'kgs-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 135, inStock: true },
      { id: 'kgs-10kg', weight: '10 KG', packaging: 'Traditional Bag', price: 1250, inStock: true },
      { id: 'kgs-26kg', weight: '26 KG', packaging: 'Bag', price: 2850, inStock: true },
    ],
    details: {
      culinaryUses: ['Steamed Red Rice', 'Nutritious Kanji', 'Traditional Dosa Batter'],
      cookingMethod: 'Soak for 4 hours. Pressure cook with 1:3 water ratio.',
      storageInfo: 'Store in an airtight container.',
    }
  },
  {
    id: 'karuppu-kavuni-kurunai',
    slug: 'karuppu-kavuni-kurunai',
    name: 'Karuppu Kavuni Kurunai',
    tamilName: 'கருப்பு கவுனி குருணை',
    category: 'rice',
    badge: 'Broken Grain',
    shortDescription: 'Broken Karuppu Kavuni black rice ideal for quick porridge.',
    description: 'Broken Karuppu Kavuni grains that cook quickly into smooth porridge, kanji, or payasam.',
    imageUrl: '/assets/karuppu_kavuni_kurunai.jpg',
    secondaryImageUrl: '/assets/hero_pantry.jpg',
    variants: [
      { id: 'kkk-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 90, inStock: true },
      { id: 'kkk-10kg', weight: '10 KG', packaging: 'Traditional Bag', price: 850, inStock: true },
    ],
    details: {
      culinaryUses: ['Quick Kanji', 'Porridge', 'Payasam'],
      cookingMethod: 'Cook with 1:3 water ratio for 15 minutes.',
      storageInfo: 'Keep in a cool dry container.',
    }
  },

  // --- NATIVE MILLETS & GRAINS ---
  {
    id: 'varagu',
    slug: 'varagu-kodo-millet',
    name: 'Varagu (Kodo Millet)',
    tamilName: 'வரகு தினை',
    category: 'millets',
    badge: 'Native Millet',
    shortDescription: 'Unpolished native Kodo millet grains.',
    description: 'Varagu (Kodo Millet) is a traditional small grain harvested in South India. Ideal for preparing upma, kichadi, and variety rice.',
    imageUrl: '/assets/varagu_millet.jpg',
    secondaryImageUrl: '/assets/ragi_millet.jpg',
    variants: [
      { id: 'var-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 110, inStock: true },
    ],
    details: {
      culinaryUses: ['Varagu Upma', 'Millet Kichadi', 'Variety Rice'],
      cookingMethod: 'Rinse well. Cook with 1:2.5 water ratio.',
      storageInfo: 'Store in an airtight container.',
    }
  },
  {
    id: 'samai',
    slug: 'samai-little-millet',
    name: 'Samai (Little Millet)',
    tamilName: 'சாமை தினை',
    category: 'millets',
    badge: 'Native Millet',
    shortDescription: 'Unpolished little millet grains for easy everyday cooking.',
    description: 'Samai (Little Millet) is a lightweight small grain suitable for replacing rice in daily meals, Pongal, and Upma.',
    imageUrl: '/assets/samai_millet.jpg',
    secondaryImageUrl: '/assets/ragi_millet.jpg',
    variants: [
      { id: 'sam-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 150, inStock: true },
    ],
    details: {
      culinaryUses: ['Millet Pongal', 'Samai Upma', 'Curd Rice'],
      cookingMethod: 'Cook with 1:2.5 water ratio on gentle heat.',
      storageInfo: 'Keep in a cool dry container.',
    }
  },
  {
    id: 'thinai',
    slug: 'thinai-foxtail-millet',
    name: 'Thinai (Foxtail Millet)',
    tamilName: 'தினை அரிசி',
    category: 'millets',
    badge: 'Native Millet',
    shortDescription: 'Golden foxtail millet grains traditional to Tamil Nadu.',
    description: 'Thinai (Foxtail Millet) is an ancient small grain traditionally paired with honey or cooked into sweet and savory dishes.',
    imageUrl: '/assets/thinai_millet.jpg',
    secondaryImageUrl: '/assets/ragi_millet.jpg',
    variants: [
      { id: 'thi-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 110, inStock: true },
    ],
    details: {
      culinaryUses: ['Thinai Payasam', 'Millet Upma', 'Sweet Pongal'],
      cookingMethod: 'Cook with 1:2.5 water ratio.',
      storageInfo: 'Store in an airtight jar.',
    }
  },
  {
    id: 'kuthiraivali',
    slug: 'kuthiraivali-barnyard-millet',
    name: 'Kuthiraivali (Barnyard Millet)',
    tamilName: 'குதிரைவாலி தினை',
    category: 'millets',
    badge: 'Native Millet',
    shortDescription: 'Unpolished barnyard millet grains.',
    description: 'Kuthiraivali (Barnyard Millet) is a light, fast-cooking small grain ideal for Upma, Kichadi, and Dosa batter.',
    imageUrl: '/assets/kuthiraivali_millet.jpg',
    secondaryImageUrl: '/assets/ragi_millet.jpg',
    variants: [
      { id: 'kut-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 150, inStock: true },
    ],
    details: {
      culinaryUses: ['Kuthiraivali Kichadi', 'Upma', 'Millet Idli'],
      cookingMethod: 'Cook with 1:2.5 water ratio.',
      storageInfo: 'Store in a dry location.',
    }
  },
  {
    id: 'kambu',
    slug: 'kambu-pearl-millet',
    name: 'Kambu (Pearl Millet)',
    tamilName: 'கம்பு தானியம்',
    category: 'millets',
    badge: 'Native Grain',
    shortDescription: 'Traditional pearl millet grains for Kambu Koozh and Roti.',
    description: 'Kambu (Pearl Millet) is a traditional South Indian grain popular for preparing refreshing Kambu Koozh (porridge), flatbreads, and dosa.',
    imageUrl: '/assets/kambu_millet.jpg',
    secondaryImageUrl: '/assets/ragi_millet.jpg',
    variants: [
      { id: 'kam-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 60, inStock: true },
    ],
    details: {
      culinaryUses: ['Kambu Koozh', 'Pearl Millet Roti', 'Kambu Dosa'],
      cookingMethod: 'Coarsely grind for Koozh or soak and grind for batter.',
      storageInfo: 'Store in an airtight container.',
    }
  },
  {
    id: 'kelvaragu',
    slug: 'kelvaragu-finger-millet-ragi',
    name: 'Kelvaragu (Ragi / Finger Millet)',
    tamilName: 'கேழ்வரகு (ராகி)',
    category: 'millets',
    badge: 'Native Grain',
    shortDescription: 'Whole finger millet (Ragi) grains.',
    description: 'Kelvaragu (Ragi / Finger Millet) is a staple South Indian grain used for making Ragi Kali, porridge, and rotis.',
    imageUrl: '/assets/ragi_millet.jpg',
    secondaryImageUrl: '/assets/native_millets.jpg',
    variants: [
      { id: 'kel-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 70, inStock: true },
    ],
    details: {
      culinaryUses: ['Ragi Kali', 'Ragi Kanji', 'Ragi Roti'],
      cookingMethod: 'Grind to flour or soak and cook for porridge.',
      storageInfo: 'Store in a dry container.',
    }
  },
  {
    id: 'naatu-sarkarai',
    slug: 'naatu-sarkarai-organic-jaggery-powder',
    name: 'Naatu Sarkarai (Country Jaggery)',
    tamilName: 'நாட்டு சர்க்கரை',
    category: 'millets',
    badge: 'Natural Sweetener',
    shortDescription: 'Unrefined traditional sugarcane jaggery powder.',
    description: 'Naatu Sarkarai is traditional unrefined jaggery powder made from sugarcane juice, perfect for sweetening tea, coffee, and traditional desserts.',
    imageUrl: '/assets/jaggery_powder.jpg',
    secondaryImageUrl: '/assets/hero_pantry.jpg',
    variants: [
      { id: 'ns-1kg', weight: '1 KG', packaging: 'Eco Pack', price: 80, inStock: true },
    ],
    details: {
      culinaryUses: ['Tea & Coffee Sweetener', 'Traditional Sweets', 'Payasam'],
      storageInfo: 'Store in a dry airtight container away from moisture.',
    }
  },

  // --- COLD-PRESSED OILS & GHEE ---
  {
    id: 'sesame-oil',
    slug: 'wood-pressed-sesame-oil',
    name: 'Cold-Pressed Sesame Oil (Nallennai)',
    tamilName: 'மரச்செக்கு நல்லெண்ணெய்',
    category: 'oils',
    badge: 'Wood-Pressed',
    shortDescription: 'Cold-extracted unrefined sesame oil.',
    description: 'Pure cold-extracted sesame oil pressed using traditional wooden Chekku presses without artificial heat processing.',
    imageUrl: '/assets/sesame_oil.jpg',
    secondaryImageUrl: '/assets/wood_pressed_oils.jpg',
    variants: [
      { id: 'so-1L', weight: '1 Litre', packaging: 'Bottle', price: 389, inStock: true },
    ],
    details: {
      culinaryUses: ['South Indian Tadka', 'Pickles', 'Traditional Cooking'],
      storageInfo: 'Store away from direct sunlight.',
    }
  },
  {
    id: 'coconut-oil',
    slug: 'wood-pressed-coconut-oil',
    name: 'Cold-Pressed Coconut Oil',
    tamilName: 'மரச்செக்கு தேங்காய் எண்ணெய்',
    category: 'oils',
    badge: 'Wood-Pressed',
    shortDescription: 'Pure aromatic cold-pressed coconut oil.',
    description: 'Cold-extracted coconut oil made from dried coconut copra using traditional wooden presses.',
    imageUrl: '/assets/coconut_oil.jpg',
    secondaryImageUrl: '/assets/wood_pressed_oils.jpg',
    variants: [
      { id: 'co-1L', weight: '1 Litre', packaging: 'Bottle', price: 429, inStock: true },
    ],
    details: {
      culinaryUses: ['South Indian Cooking', 'Seasoning', 'Traditional Applications'],
      storageInfo: 'Store in a cool dry place.',
    }
  },
  {
    id: 'country-cow-ghee',
    slug: 'country-cow-ghee',
    name: 'Naatu Pasu Nei (Country Cow Ghee)',
    tamilName: 'நாட்டுப் பசு நெய்',
    category: 'oils',
    badge: 'Traditional Ghee',
    shortDescription: 'Pure traditional country cow butter ghee.',
    description: 'Aromatic traditional ghee prepared from pure country cow butter, ideal for drizzling on rice, sweet dishes, and tiffin.',
    imageUrl: '/assets/cow_ghee.jpg',
    secondaryImageUrl: '/assets/wood_pressed_oils.jpg',
    variants: [
      { id: 'ccg-1L', weight: '1 Litre', packaging: 'Jar', price: 799, inStock: true },
    ],
    details: {
      culinaryUses: ['Drizzling on Steamed Rice & Paruppu', 'Sweets & Payasam', 'Dosa Topping'],
      storageInfo: 'Store at room temperature in a clean glass jar.',
    }
  },
];
