import './App.css';

var photos = { 
  Cats: [
    { 
        img: "https://c2.staticflickr.com/2/1966/44789058322_42370010d8.jpg",
        name: "Oscar"
    },
    { 
        img: "https://c2.staticflickr.com/2/1946/44808918982_0c16a76212.jpg",
        name: "SDQH8638"
    },
    { 
        img: "https://c1.staticflickr.com/1/970/28429547018_c459ee762f_b.jpg",
        name: "cat3"
    },
    { 
        img: "https://c2.staticflickr.com/2/1848/29428776277_0f7856a7cc.jpg",
        name: "Kitty"
    },
    { 
        img: "https://c2.staticflickr.com/2/1903/29923501127_c2fc197ab5.jpg",
        name: "IMG_1107"
    },
    { 
        img: "https://c2.staticflickr.com/2/1926/43015921350_a3bc6c7e4d.jpg",
        name: "The night cat"
    },
    { 
        img: "https://c2.staticflickr.com/2/1979/44789058982_1b60ee9af8.jpg",
        name: "Cat in the sun"
    },
    
    { 
        img: "https://c2.staticflickr.com/2/1949/44490804214_1de6778e0a_z.jpg",
        name: "Pippysue"
    },
    { 
        img: "https://c2.staticflickr.com/2/1889/42970013570_71ace50b46.jpg",
        name: "Black cat"
    },
    { 
        img: "https://c2.staticflickr.com/2/1929/43942254905_5a67635b3d.jpg",
        name: "Animalitos"
    },
    { 
        img: "https://c2.staticflickr.com/2/1918/44819288201_76d4ae592f.jpg",
        name: "JPG_8568"
    },
    { 
        img: "https://c2.staticflickr.com/2/1853/30875888678_a02045d696.jpg",
        name: "Cat and mouse"
    },
    { 
        img: "https://c2.staticflickr.com/2/1893/44064508014_3969b2443c.jpg",
        name: "Kitten 2"
    },
    { 
        img: "https://c2.staticflickr.com/2/1861/43981350914_8dc34a4fc0.jpg",
        name: "Sunshine"
    },
    { 
        img: "https://c2.staticflickr.com/2/1872/44733922992_90cf861e65.jpg",
        name: "猫"
    },
    { 
        img: "https://c2.staticflickr.com/2/1896/42903359160_90f30ccfcf.jpg",
        name: "Girl in Neko-Chigura"
    },
    { 
        img: "https://c2.staticflickr.com/2/1856/42915355420_54816c1555.jpg",
        name: "猫"
    },
    { 
        img: "https://c2.staticflickr.com/2/1944/43961607615_6612b700b9.jpg",
        name: "Pleasure"
    },
    { 
        img: "https://c2.staticflickr.com/2/1967/43066585020_de9c6cfc80.jpg",
        name: "Walk"
    },
    { 
        img: "https://c2.staticflickr.com/2/1880/29785055447_3803d891a7.jpg",
        name: "Edie"
    }
  ],
  Cities: [
    { 
      img: "https://c1.staticflickr.com/1/468/31723782403_5f58ca9379.jpg",
      name: "India: Agra (Taj Mahal)"
    },
    { 
      img: "https://c1.staticflickr.com/1/697/32519397345_12979605d3.jpg",
      name: "England: London"
    },
    { 
      img: "https://c1.staticflickr.com/1/658/31313378913_dd2e99b491.jpg",
      name: "India: New-Delhi"
    },
    { 
      img: "https://c2.staticflickr.com/8/7562/15888842567_72fc89397e.jpg",
      name: "France: Paris"
    },
    { 
      img: "https://c1.staticflickr.com/1/539/18494876499_011764713f.jpg",
      name: "New York"
    },
    { 
      img: "https://c1.staticflickr.com/3/2950/15298489799_ea134935bb.jpg",
      name: "Italy: Rome"
    },
    { 
      img: "https://c2.staticflickr.com/4/3954/15432052410_f52e4e6e49.jpg",
      name: "Vatican"
    },
    { 
      img: "https://c2.staticflickr.com/8/7437/13942461230_d1bef708ce.jpg",
      name: "Morocco: Marrakesh"
    },
    { 
      img: "https://c2.staticflickr.com/4/3913/14554913107_bbe899a7e6.jpg",
      name: "Denmark: Copenhagen"
    },
    { 
      img: "https://c1.staticflickr.com/9/8851/18613053695_11e37b961c.jpg",
      name: "Belgium: Bruges"
    },
    { 
      img: "https://c2.staticflickr.com/6/5614/14981378234_b285d23fd8.jpg",
      name: "Greece: Santorini"
    },
    { 
      img: "https://c2.staticflickr.com/4/3843/15209033280_a8a9707be7.jpg",
      name: "Mexico: Chichen Itza"
    },
    { 
      img: "https://c1.staticflickr.com/9/8245/8471089650_39610ffbc7.jpg",
      name: "Germany: Berlin(Brandenburger Tor)"
    },
    { 
      img: "https://c1.staticflickr.com/5/4704/26189123768_6dfbfb59bd.jpg",
      name: "Spain: Barcelona"
    },
    { 
      img: "https://c1.staticflickr.com/1/790/39148922640_df6565704f.jpg",
      name: "Azerbaijan: Baku"
    },
    { 
      img: "https://c1.staticflickr.com/9/8656/16212808207_39956ef333.jpg",
      name: "UAE: Dubai"
    },
    { 
      img: "https://c2.staticflickr.com/6/5541/12106588063_d80222f647.jpg",
      name: "Ukraine: Kiev"
    },
    { 
      img: "https://c1.staticflickr.com/9/8469/29021406395_cd6884f6aa.jpg",
      name: "Russia: Moscow"
    },
    { 
      img: "https://c1.staticflickr.com/9/8248/8640616126_5d05a6ed7b.jpg",
      name: "Portugal: Lisbon"
    },
    { 
      img: "https://c1.staticflickr.com/3/2240/2196404359_9e16c96174.jpg",
      name: "USA : California"
    }
  ],
  Sports: [
    { 
      img: "https://c2.staticflickr.com/2/1978/44158445774_b90fc7e5fe_z.jpg",
      name: "Polo Club de Chantilly"
    },
    { 
      img: "https://c2.staticflickr.com/2/1902/45011487361_8ca749a52d_c.jpg",
      name: "Golden Gate Race"
    },
    { 
      img: "https://c2.staticflickr.com/2/1737/42316570572_5e4261be04_z.jpg",
      name: "rythmique par Christian Renardier"
    },
    { 
      img: "https://c2.staticflickr.com/2/1968/44161820734_e2451f796a_z.jpg",
      name: "MotoCross"
    },
    { 
      img: "https://c2.staticflickr.com/2/1931/44176340514_ffcd6a724d_z.jpg",
      name: "Robinho"
    },
    { 
      img: "https://c2.staticflickr.com/2/1923/43070961370_728e0923c2_z.jpg",
      name: "UFC Fight Night 22set"
    },
    { 
      img: "https://c2.staticflickr.com/2/1938/44860224791_1fb0ff7931_z.jpg",
      name: "Pantin Classic"
    },
    { 
      img: "https://c2.staticflickr.com/2/1862/43036402340_9ae9c5118d_z.jpg",
      name: "Swiming"
    },
    { 
      img: "https://c2.staticflickr.com/2/1931/44980398992_c02865cb9a_z.jpg",
      name: "Championnat drift 2018"
    },
    { 
      img: "https://c2.staticflickr.com/2/1886/44622924961_6ac730e325_z.jpg",
      name: "Can Can"
    },
    { 
      img: "https://c2.staticflickr.com/4/3916/14212811020_ed9ec2326c_z.jpg",
      name: "Sumo Turnier Ryōgoku Kokugikan"
    },
    { 
      img: "https://c2.staticflickr.com/2/1858/43916672495_84a5895cf4_z.jpg",
      name: "Perranporth golf"
    },
    { 
      img: "https://c1.staticflickr.com/5/4609/39882558282_b5ab8605af_z.jpg",
      name: "Championnat du Monde IBO"
    },
    { 
      img: "https://c1.staticflickr.com/3/2488/3775825809_bae0339293_z.jpg",
      name: "Sport action"
    },
    { 
      img: "https://c2.staticflickr.com/2/1923/44987874371_a61b7932df_z.jpg",
      name: "DSC_5533-2"
    },
    { 
      img: "https://c2.staticflickr.com/2/1884/44800925151_bf28d98d06_z.jpg",
      name: "Crosscountry"
    },
    { 
      img: "https://c2.staticflickr.com/2/1949/29982767807_cee45a456c_z.jpg",
      name: "JSneedPhotos"
    },
    { 
      img: "https://c2.staticflickr.com/2/1936/44836460322_ffb6769ab2_z.jpg",
      name: "Basile Danet"
    },
    { 
      img: "https://c2.staticflickr.com/2/1907/31028969948_3a180e958f_z.jpg",
      name: "Runners"
    },
    { 
      img: "https://c2.staticflickr.com/2/1873/44682655002_4122051ebc_z.jpg",
      name: "Envol dans les airs!"
    }
  ],
  Mountains: [
    { 
      img: "https://c2.staticflickr.com/2/1903/29995642157_ccdf9f94d7_z.jpg",
      name: "Autumn at Vistasvaggi"
    },
    { 
      img: "https://c2.staticflickr.com/2/1937/44190518905_01f3e77306_z.jpg",
      name: "Safe from harms"
    },
    { 
      img: "https://c2.staticflickr.com/2/1951/30162377037_c4b8a11bb6_z.jpg",
      name: "Lac de la Fous"
    },
    { 
      img: "https://c2.staticflickr.com/2/1906/45049985442_e31dc3ffbf_z.jpg",
      name: "Burning sky"
    },
    { 
      img: "https://c2.staticflickr.com/2/1873/29579606247_217aa3d772_z.jpg",
      name: "Dawn in the Alps"
    },
    { 
      img: "https://c2.staticflickr.com/2/1960/44351209604_9d87e0e411_z.jpg",
      name: "Alpine hike"
    },
    { 
      img: "https://c2.staticflickr.com/2/1910/44088531165_f98c488c4d_z.jpg",
      name: "France, Pyrénées, Béarn"
    },
    { 
      img: "https://c2.staticflickr.com/2/1924/43229134020_bd8281055a_z.jpg",
      name: "france2018"
    },
    { 
      img: "https://c2.staticflickr.com/2/1930/43145822410_d92caa09d0_z.jpg",
      name: "Sentiero dei fiori"
    },
    { 
      img: "https://c2.staticflickr.com/8/7457/8991328288_57b5f2a652_z.jpg",
      name: "Mountains"
    },
    { 
      img: "https://c2.staticflickr.com/4/3953/15613249585_d1e45f2ee5_z.jpg",
      name: "Road to the mountain"
    },
    { 
      img: "https://c2.staticflickr.com/2/1938/45029139981_c4fac1a3ec_z.jpg",
      name: "created by dji camera"
    },
    { 
      img: "https://c2.staticflickr.com/2/1950/30094769097_3bcc2e7b3d_z.jpg",
      name: "drifting"
    },
    { 
      img: "https://c2.staticflickr.com/2/1913/45015908291_7e11bbc260_z.jpg",
      name: "Rocks and Mountain reflections"
    },
    { 
      img: "https://c2.staticflickr.com/2/1947/44926721742_32a8e56494_z.jpg",
      name: "Parque Nacional de los Picos de Europa"
    },
    { 
      img: "https://c2.staticflickr.com/2/1954/44963211642_6f06b5d4da_z.jpg",
      name: "DSC_6061"
    },
    { 
      img: "https://c2.staticflickr.com/2/1944/31138249588_104c4c9568_z.jpg",
      name: "Dolomiti Sunset"
    },
    { 
      img: "https://c2.staticflickr.com/2/1954/45092146902_20f9846363_z.jpg",
      name: "Green bumps"
    },
    { 
      img: "https://c2.staticflickr.com/2/1924/31111316848_acf5c31976_z.jpg",
      name: "Wurtenspeicher"
    },
    { 
      img: "https://c1.staticflickr.com/1/413/19525301330_3dd9487fa2_z.jpg",
      name: "Matterhorn"
    }
  ],
  Food: [
    { 
      img: "https://c1.staticflickr.com/5/4682/27634933059_27ddc50556_z.jpg",
      name: "xxDSC00062"
    },
    { 
      img: "https://c1.staticflickr.com/5/4389/35965236273_b0949512df_z.jpg",
      name: "Macarons"
    },
    { 
      img: "https://c2.staticflickr.com/2/1907/45095071791_50f84c535a_z.jpg",
      name: "Nusskuchen mit Schokolade"
    },
    { 
      img: "https://c2.staticflickr.com/2/1919/45043965592_da9d0df40a_z.jpg",
      name: "Aufsicht von Zutaten"
    },
    { 
      img: "https://c2.staticflickr.com/2/1908/44019343895_b32430eb95_z.jpg",
      name: "Süssigkeiten und Gebäck"
    },
    { 
      img: "https://c2.staticflickr.com/2/1950/45043915162_122460b5f7_z.jpg",
      name: "Geröstete Rote Erdnüsse"
    },
    { 
      img: "https://c2.staticflickr.com/2/1914/30234912217_833c57cfe0_z.jpg",
      name: "Cendrat del Montsec"
    },
    { 
      img: "https://c2.staticflickr.com/2/1942/45160547801_54bfac3c45_z.jpg",
      name: "Kleine Gebäck"
    },
    { 
      img: "https://c2.staticflickr.com/8/7596/26245692964_2f0d2705dc_z.jpg",
      name: "IMG_2160_0"
    },
    { 
      img: "https://c1.staticflickr.com/9/8214/28785596674_23a7347979_z.jpg",
      name: "IMG_6241_0"
    },
    { 
      img: "https://c1.staticflickr.com/9/8187/28676050753_cd1e99ca39_z.jpg",
      name: "Dessert"
    },
    { 
      img: "https://c1.staticflickr.com/9/8145/29143969010_c77ea5544b_z.jpg",
      name: "Sausages"
    },
    { 
      img: "https://c1.staticflickr.com/9/8432/7752865928_e5a9e144dc_z.jpg",
      name: "Meat"
    },
    { 
      img: "https://c2.staticflickr.com/8/7403/9616307843_162f56e9f4_z.jpg",
      name: "Fruit, vegetables"
    },
    { 
      img: "https://c1.staticflickr.com/5/4491/37617173366_c8dcc422cb_z.jpg",
      name: "Seoul Food Markets"
    },
    { 
      img: "https://c2.staticflickr.com/8/7510/15813196336_79952c79ec_z.jpg",
      name: "Marrakesh market"
    },
    { 
      img: "https://c1.staticflickr.com/5/4357/37053731101_d5b2c594fb_z.jpg",
      name: "Fish Market San Tropez"
    },
    { 
      img: "https://c1.staticflickr.com/9/8090/8599054245_02d549173b_z.jpg",
      name: "Street Food"
    },
    { 
      img: "https://c1.staticflickr.com/5/4721/24886228977_ae87578c04_z.jpg",
      name: "Chinatown Food "
    },
    { 
      img: "https://c2.staticflickr.com/6/5098/5487558361_8208034884_z.jpg",
      name: "Barbecue skewers"
    }
  ],
  Cars: [
    { 
      img: "https://c1.staticflickr.com/5/4440/36495449713_865b46ef1b_z.jpg",
      name: "Street"
    },
    { 
      img: "https://c2.staticflickr.com/4/3800/8912385472_70c5154b74_z.jpg",
      name: "Rest area"
    },
    { 
      img: "https://c1.staticflickr.com/9/8080/8300218896_fcbe41a29a_z.jpg",
      name: "R4 Winter edition"
    },
    { 
      img: "https://c1.staticflickr.com/5/4464/26258581309_ba89e963fb_z.jpg",
      name: "Rain"
    },
    { 
      img: "https://c1.staticflickr.com/5/4029/4648334713_6c613411a3_z.jpg",
      name: "Cars from Varadero Cuba"
    },
    { 
      img: "https://c1.staticflickr.com/7/6051/5909468580_e2b9426699_z.jpg",
      name: "Bugatti Veyron Super Sport"
    },
    { 
      img: "https://c1.staticflickr.com/5/4605/39854343801_22134c1ba1_z.jpg",
      name: "Police"
    },
    { 
      img: "https://c2.staticflickr.com/2/1903/43370364650_bb594ced09_z.jpg",
      name: "Lamborghini Huracan"
    },
    { 
      img: "https://c1.staticflickr.com/1/735/32045236090_80e9982a67_z.jpg",
      name: "In Tokio"
    },
    { 
      img: "https://c1.staticflickr.com/1/411/31224661320_0ec6295a67_z.jpg",
      name: "Evening"
    },
    { 
      img: "https://c2.staticflickr.com/2/1919/45217001851_81dacf61a6_z.jpg",
      name: "McLaren F1 GTR"
    },
    { 
      img: "https://c2.staticflickr.com/2/1943/45211131311_d75a401f40_z.jpg",
      name: "Atlantis Blue M3"
    },
    { 
      img: "https://c2.staticflickr.com/2/1934/44270809865_da5ae518b7_z.jpg",
      name: "urban mimicry"
    },
    { 
      img: "https://c2.staticflickr.com/2/1938/44492180654_1725c624af_z.jpg",
      name: "wrx"
    },
    { 
      img: "https://c1.staticflickr.com/9/8734/17037919807_d55858014d_z.jpg",
      name: "Austin Martin"
    },
    { 
      img: "https://c2.staticflickr.com/2/1973/43387979630_a274ac765d_z.jpg",
      name: "Sebastien Ogier cutting it tight"
    },
    { 
      img: "https://c2.staticflickr.com/2/1941/43378408000_d1fba5c373_z.jpg",
      name: "BMW"
    },
    { 
      img: "https://c2.staticflickr.com/2/1960/45133896132_3a427cca7e_z.jpg",
      name: "VW Golf GTI mk6"
    },
    { 
      img: "https://c2.staticflickr.com/2/1968/45183265141_0fa3ee8987_z.jpg",
      name: "Blue S 63 Convertible"
    }
  ],
  Ocean: [
    { 
      img: "https://c2.staticflickr.com/6/5484/11593551313_3a2722e3d4_z.jpg",
      name: "Underwater World"
    },
    { 
      img: "https://c1.staticflickr.com/9/8121/8635688520_2eae12b958_z.jpg",
      name: "Coral Reefs Live"
    },
    { 
      img: "https://c2.staticflickr.com/6/5159/5882885763_92ecdd66e5_z.jpg",
      name: "Ocean gold"
    },
    { 
      img: "https://c2.staticflickr.com/8/7352/27611143620_e7856512cd_z.jpg",
      name: "The deep"
    },
    { 
      img: "https://c2.staticflickr.com/8/7321/12313421695_ce28ec1135_z.jpg",
      name: "Drifting"
    },
    { 
      img: "https://c1.staticflickr.com/1/935/42808900925_26f667081f_z.jpg",
      name: "whale shark"
    },
    { 
      img: "https://c2.staticflickr.com/2/1788/28053823647_2c96b5854b_z.jpg",
      name: "The arch - Sgarbhstac"
    },
    { 
      img: "https://c2.staticflickr.com/2/1782/42204856814_2944b69b0b_z.jpg",
      name: "St Kilda, Scotland"
    },
    { 
      img: "https://c2.staticflickr.com/2/1842/29558379077_cdd0b0ecbb_z.jpg",
      name: "Kato Koufonisi"
    },
    { 
      img: "https://c1.staticflickr.com/5/4606/38995747184_0a046ee067_z.jpg",
      name: "xxDSC08760"
    },
    { 
      img: "https://c1.staticflickr.com/5/4063/4226147311_a05a65dc5b_z.jpg",
      name: "Underwater Landscape"
    },
    { 
      img: "https://c2.staticflickr.com/6/5117/14332066470_965ff48fc7_z.jpg",
      name: "Ocean"
    },
    { 
      img: "https://c1.staticflickr.com/1/903/40226650690_7b53e55754_z.jpg",
      name: "Napoleon wrasse, Peleliu, Palau"
    },
    { 
      img: "https://c1.staticflickr.com/5/4670/25776426738_9a2e63fa46_z.jpg",
      name: "Chile Coast"
    },
    { 
      img: "https://c2.staticflickr.com/2/1923/43379778810_35381fe60a_z.jpg",
      name: "Drift Wood"
    },
    { 
      img: "https://c2.staticflickr.com/2/1919/43379781830_3ac95a4bfa_z.jpg",
      name: "Hanging"
    },
    { 
      img: "https://c2.staticflickr.com/2/1960/31251110238_c5c7aab32a_z.jpg",
      name: "Еhe waves"
    },
    { 
      img: "https://c2.staticflickr.com/2/1923/30278300567_e30452f969_z.jpg",
      name: "Sunrise Seascape"
    },
    { 
      img: "https://c2.staticflickr.com/4/3785/32805738615_e718ac04eb_z.jpg",
      name: "COCONUT PALM"
    },
    { 
      img: "https://c1.staticflickr.com/5/4483/37633196796_514148b541_z.jpg",
      name: "011_adj_DSC_5846"
    }
  ]
  
}





export default photos;