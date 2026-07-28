/* global MENU_DATA */
// =====================================================
// TROPICAL CAFÉ — Menu Data
// =====================================================
const MENU_DATA = {
  categories: [
    {
      id: "smoothiebowls",
      de: "Smoothie Bowls",
      en: "Smoothie Bowls",
      items: [
        { id:"acai",   de:"Acai Bowl",   en:"Acai Bowl",   vegan:true,  image:"images/food/Smoothiebowl (vegan) Acai.png" },
        { id:"mango",  de:"Mango Bowl",  en:"Mango Bowl",  vegan:true,  image:"images/food/Smoothiebowl (vegan) Mango.png" },
        { id:"matcha", de:"Matcha Bowl", en:"Matcha Bowl", vegan:true,  image:"images/food/Smoothiebowl (vegan) Matcha.png" },
        { id:"ocean",  de:"Ocean Bowl",  en:"Ocean Bowl",  vegan:true,  image:"images/food/Smoothiebowl (vegan) Ocean.png" },
        { id:"browny", de:"Browny Bowl", en:"Browny Bowl", vegan:false, image:"images/food/Smoothiebowl Browny.png" },
      ]
    },
    {
      id: "bowls",
      de: "Bowls",
      en: "Bowls",
      items: [
        { id:"avorella", de:"Avorella Bowl", en:"Avorella Bowl", vegan:false, image:"images/food/Bowl Avorellabowl.png" },
        { id:"chicka",   de:"Chicka Bowl",   en:"Chicka Bowl",   vegan:false, image:"images/food/Bowl Chickabowl.png" },
        { id:"potato",   de:"Potato Bowl",   en:"Potato Bowl",   vegan:true,  image:"images/food/Bowl Potatobowl (vegan).png" },
        { id:"shala",    de:"Shala Bowl",    en:"Shala Bowl",    vegan:true,  image:"images/food/Bowl Shalabowl (vegan).png" },
        { id:"suyang",   de:"Suyang Bowl",   en:"Suyang Bowl",   vegan:false, image:"images/food/Bowl Suyangbowl.png" },
        { id:"thunion",  de:"Thunion Bowl",  en:"Thunion Bowl",  vegan:false, image:"images/food/Bowl Thunionbowl.png" },
      ]
    },
    {
      id: "pancakes",
      de: "Pancakes",
      en: "Pancakes",
      items: [
        { id:"classic",   de:"Classic",   en:"Classic",   vegan:false, image:"images/food/Pancakes Classic.png" },
        { id:"nutella",   de:"Nutella",   en:"Nutella",   vegan:false, image:"images/food/Pancakes Nutella.png" },
        { id:"pistachio", de:"Pistachio", en:"Pistachio", vegan:false, image:"images/food/Pancakes Pistachio.png" },
        { id:"tropical",  de:"Tropical",  en:"Tropical",  vegan:false, image:"images/food/Pancakes Tropical.png" },
      ]
    },
    {
      id: "wraps",
      de: "Wraps",
      en: "Wraps",
      items: [
        { id:"chicken",  de:"Chicken Wrap",  en:"Chicken Wrap",  vegan:false, image:"images/food/Wraps Chickenwraps.png" },
        { id:"cigkofte", de:"Çiğköfte Wrap", en:"Çiğköfte Wrap", vegan:true,  image:"images/food/Wraps Cigköftewraps.png" },
        { id:"fresh",    de:"Fresh Wrap",    en:"Fresh Wrap",    vegan:false, image:"images/food/Wraps Freshwraps.png" },
        { id:"garnelen", de:"Garnelen Wrap", en:"Shrimp Wrap",   vegan:false, image:"images/food/Wraps Garnelenwraps.png" },
        { id:"oriental", de:"Oriental Wrap", en:"Oriental Wrap", vegan:false, image:"images/food/Wraps Orientalwraps.png" },
        { id:"sucuk",    de:"Sucuk Wrap",    en:"Sucuk Wrap",    vegan:false, image:"images/food/Wraps Sucukwraps.png" },
      ]
    },
    {
      id: "breads",
      de: "Brote",
      en: "Breads",
      items: [
        { id:"avocadobrot",    de:"Avocado",        en:"Avocado",        vegan:true,  image:"images/food/Breads Avocadobrot.png" },
        { id:"burratabrot",    de:"Burrata",         en:"Burrata",        vegan:false, image:"images/food/Breads Burratabrot.png" },
        { id:"hummusavocado",  de:"Hummus Avocado",  en:"Hummus Avocado", vegan:true,  image:"images/food/Breads Hummusavocadobrot.png" },
        { id:"lachsbrot",      de:"Lachs",           en:"Salmon",         vegan:false, image:"images/food/Breads Lachsbrot.png" },
        { id:"menemenbrot",    de:"Menemen",         en:"Menemen",        vegan:false, image:"images/food/Breads Menemenbrot.png" },
        { id:"mozarellabrot",  de:"Mozzarella",      en:"Mozzarella",     vegan:false, image:"images/food/Breads Mozarellabrot.png" },
        { id:"pastirmabrot",   de:"Pastirma",        en:"Pastirma",       vegan:false, image:"images/food/Breads Pastirmabrot.png" },
        { id:"pestobrot",      de:"Pesto",           en:"Pesto",          vegan:true,  image:"images/food/Breads Pestobrot.png" },
        { id:"spiegeleibrot",  de:"Spiegelei",       en:"Fried Egg",      vegan:false, image:"images/food/Breads Spiegeleibrot.png" },
      ]
    },
    {
      id: "eggs",
      de: "Eier",
      en: "Eggs",
      items: [
        { id:"kavurma",     de:"Kavurma",       en:"Kavurma",          vegan:false, image:"images/food/Eggs Kavurma.png" },
        { id:"lachsruhrei", de:"Lachs Rührei",  en:"Salmon Scrambled", vegan:false, image:"images/food/Eggs Lachsrührei.png" },
        { id:"menemen",     de:"Menemen",       en:"Menemen",          vegan:false, image:"images/food/Eggs Menemen.png" },
        { id:"ruhrei",      de:"Rührei",        en:"Scrambled Eggs",   vegan:false, image:"images/food/Eggs Rührei.png" },
        { id:"shakshuka",   de:"Shakshuka",     en:"Shakshuka",        vegan:false, image:"images/food/Eggs Shakshuka.png" },
        { id:"spiegelei",   de:"Spiegelei",     en:"Fried Egg",        vegan:false, image:"images/food/Eggs Spiegelei.png" },
        { id:"sucukei",     de:"Sucuk Ei",      en:"Sucuk Egg",        vegan:false, image:"images/food/Eggs Sucukei.png" },
        { id:"supersimitei",de:"Supersimit Ei", en:"Supersimit Egg",   vegan:false, image:"images/food/Eggs Supersimitei.png" },
      ]
    },
    {
      id: "salate",
      de: "Salate",
      en: "Salads",
      items: [
        { id:"avocadosalat",  de:"Avocado Salat",  en:"Avocado Salad",  vegan:true,  image:"images/food/Salat Avocadosalat (vegan).png" },
        { id:"chickensalat",  de:"Chicken Salat",  en:"Chicken Salad",  vegan:false, image:"images/food/Salat Chickensalat.png" },
        { id:"falafelsalat",  de:"Falafel Salat",  en:"Falafel Salad",  vegan:true,  image:"images/food/Salat Falafelsalat (vegan).png" },
        { id:"garnelensalat", de:"Garnelen Salat", en:"Shrimp Salad",   vegan:false, image:"images/food/Salat Garnelensalat.png" },
        { id:"schakasalat",   de:"Schaka Salat",   en:"Schaka Salad",   vegan:false, image:"images/food/Salat Schakasalat.png" },
        { id:"thunasalat",    de:"Thuna Salat",    en:"Tuna Salad",     vegan:false, image:"images/food/Salat Thunasalat.png" },
      ]
    },
    {
      id: "platten",
      de: "Platten",
      en: "Platters",
      items: [
        { id:"platte-oriental", de:"Oriental Platte",  en:"Oriental Platter",  vegan:false, image:"images/food/Platte Oriental.png" },
        { id:"platte-tropical", de:"Tropical Platte",  en:"Tropical Platter",  vegan:false, image:"images/food/Platte Tropical.png" },
      ]
    },
    {
      id: "yoghurt",
      de: "Yoghurt",
      en: "Yoghurt",
      items: [
        { id:"greek",       de:"Greek Yoghurt",   en:"Greek Yoghurt",   vegan:false, image:"images/food/Yoghurt Greek.png" },
        { id:"vegan-yogh",  de:"Vegan Yoghurt",   en:"Vegan Yoghurt",   vegan:true,  image:"images/food/Yoghurt vegan.png" },
      ]
    },
  ]
};
