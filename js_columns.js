// javaScript nima uchun kerak ? :

/// javaScript bizga ("html" , "css")larimizni "DINAMIK" tarzda xarakatlantirish uchun kerak ;

// javaScript nima ? :

/// javaScript bu yana bir katta dasturlash tili ;

// information :

/// javaScript 1995-yilda Brendan Each tomonidan o'ylab topilgan ;
/// va Netscape 2 uchun yozib chiqildi ;
/// 1997 yilda ECMA ga aylandi ;
/// Nega aynan 'Java'Script ;
/// JavaScript yaratilganda uning boshqa nomi LiveScript edi ; Biroq, o'sha paytda Java tili mashhur edi ;

/// JavaScript-ni noyob qiladigan narsalar :

//// HTML , CSS bilan toliq intigratsiyasi(????????-ligi) bor ;
//// Codlari boshqalara nisbatan oson ;
//// Xamma brauzerlarda o'zining defolt enjoni (ECMA)  bilan yuradi ;

// nimalar bilan compile bo'ladi :

/// HTML orqali ;
//// <script></script> - tegi ichiga yozib => brauzerga o'tib => inspekt qilib : "console" da ko'rishimiz mumkun ;
/// node consol orqali ;
/// onlayn js compilerlar orqali ;

// Single strak ?

/// bu nom javaScript ikkita ishni bir vaqtda bajara-olaolmasligi uchun berilgan ;

// Data types :

/// Data type..............=> malumot turlari ;
/// 8 ta data type bor.....=> 2 ga bolinadi ==> primitive vs non-primitive ;

//// primitive :

///// number...............=> bu son ;
///// string...............=> "" , '' , `` , ichidagi hamma narsa string xissoblanadi ;
///// boolean..............=> true, false ;
///// null.................=> e'lon qilingan qiymat biriktirilgan o'zgaruvchi kk bolmay qolsa ochirib qoyish uchun ;
///// undefined............=> o'zgaruvchi e'lon qilingan ammo qiymat berilmagan ;
///// bigInt...............=> on olti xonaligdan katta bo'lgan sonlar ;

//// non-primitive :

///// object(array, function,object);


// variables :

/// variables..............=> java-scriptda malumot saqlash uchun ishlaydi ;
/// variabllar nimaga kk...=> malumotlarimizni xafsizroq qilish uchun ;
//// Js uzgaruvchi yaratish uchun  3 ta keyword mavjud ;
//// 1- var,  2- let, 3-const ES-(EcmaScript) ;
//// va variabllarda cheklangan arifmetik amallar bajarsa bo'ladi ;
////// var................=> qiymatni uzgartira olamiz va usha bir xil uzgaruvchi nomi bilan qaytadan elon qilolamiz,housting qilsag hatolik ko'rsatmaydi ;
////// let................=> qiymatni uzgartirolamiz va bir xil nom bilan qayta uzgaruvchi yarata olmaymiz,housting qilsag hatolik ko'rsatadi ;
////// const(uzgarmas)....=> qiymatniyam uzgartirolmimiz va qaytadan bir xil nom bilan elon qilolmaymiz housting qilsag hatolik ko'rsatadi ;


// Number

/// Number................=> JavaScript-dagi qiymat har doim ma'lum bir turdagi ma'lumotlarga ishora qiladi. Masalan, bu satr yoki raqam bo'lishi mumkin ;

//// Qiymatlar :

///// NaN..................=> not a number ;
///// Infinity.............=> avaScript-dagi eng katta son ;
///// -Infinity............=> avaScript-dagi eng kichkina son ;

//// Amallar :

////// +..................=> qoshish ;
////// -..................=> ayirish ;
////// /..................=> bulish ;
////// *..................=> kopaytirish ;
////// **.................=> darajaga kotarib beradi ;
////// %..................=> bo'lib qoldiq beradi;
////// ++.................=> bir qoshib beradi ;
////// --.................=> bir ayrib ;
////// +=.................=> qiymat1 = qiymat1 + qiymat2 ;

// Metods :

//// toString()...........=> ichiga son (2-32) yozamiz , u xuddi osha sanoq sistemasiga o'tkazib beradi , Qiymat bermasak Stringga o'tkazib beradi ;
//// Number.isInteger.....=> soni butunlikka tekshirib beradi ;
//// Number.parseInt......=> sonni butun qismini qaytaradi yaxlitlamaydi, bundan tashqari data type ni numberga ugirib beradi , 5 ga qaramaydi ;
//// Number.parseFloat....=> sonni butun qismini xam qoldiq qismini xam chiqarib beradi ;
//// toFixed()...........=> sonni kasr qismidan nechtasini qaytarishni belgilaydi, yaxlitlab beradi , 5 ga qaraydi ;
//// isNaN................=> NaN qaytishiga tekshiradi ;

// Math qiymatlari :

//// Math.random()........=> tasodifiy raqam chiqarib beradi ;
//// Math.round().........=> yaxlitlab beradi 5dan katta bolsa 1 qoshadi kichik bolsa ozini qaytaradi ;
//// Math.floor().........=> son o'qida chapga qarab yuradi ;
//// Math.sqrt()..........=> Ildiz ostidan chiqaradi ;
//// Math.cbrt()..........=> sonni 3 daraja ildiz ostidan chiqarish ;
//// Math.pow(x, y).......=> darajaga oshirib beradi, ikta qiymat oladi: 1 - son, 2 - nechi darajaga oshirish ;
//// Math.min(0,1,2,4)....=> eng kichkig qiymatni aniqlab beradi ;
//// Math.max(0,1,2,4)....=> eng katta sonlarni aniqlab beradi ;
//// Math.abs(x)..........=> musbat qiymat qaytaradi ;
//// Math.hypot().........=> Funktsiya Math.hypot()o'z argumentlari kvadratlari yig'indisining kvadrat ildizini qaytaradi ;
//// Math.ceil()..........=> son o'qida o'ngga qarab yuradi ;


// String :

/// String : JavaScript-dagi qiymat har doim ma'lum bir turdagi ma'lumotlarga ishora qiladi. Masalan, bu satr yoki raqam bo'lishi mumkin ;

/// ular ("" , '' , ``)-ichida yoziladi ;

/// ularning farqi :

// &&.....................=> ikkila tomon ham true bolsa shunda true boladi ;
// Birinchi qiymat true bolsagina keyin ikkinchi tomonga o 'tadi. va operatori mantiqiy bo'lmagan qiymatlarni saqlaydi va ularni o 'z holicha qaytaradi ;
// ||.....................=> ikki tomondan biri true bolsa true qaytaradi ;
// ==.....................=>   faqat qiymatni tekshiradi ;
// ===....................=> ham qiymat ham data type ni tekshiradi ;
// !......................=> inkor ;

// va yoki operatoridan ustunlik qiladi ;
// false && false.........=> true ;
// returns true birinchi && bajarilib keyin  bajariladi ;

/// Method

///index 0-dan length 1-dan ;

/// change

/// toLowerCase()........=> kichkina harf qiladi ;
/// toUpperCase()........=> katta harf qiladi ;
/// replace()............=> 2ta qiymat , 1 - qaysi sozligi, 2 - qaysi sozga almashtirishligi, almashtirish ;
/// repeat().............=> 1ta qiymat , sozni nechi marta takrorlab berish ;
/// trim()...............=> 2 tomondagi boshligni olib tashlab beradi ;

/// add :

//// concat().............=> bir biriga qoshish ;
//// padEnd().............=> 2ta qiymat , number, qoshiladiganHarf, ohirgiga length yetmaguncha harf qoshish ;
//// padStart()...........=> 2ta qiymat , number, qoshiladiganHarf, boshigagiga length yetmaguncha harf qoshish ;

/// search :

//// startWith()..........=> 2ta , 1 - string, 2 - index, boolean, boshidagi belgi teng ekanligini tekshiradi ;
//// endWith()............=> 2ta , 1 - string, 2 - index, boolean, ohirigisi ;
//// includes()...........=> bor yoqligini tekshirish, boolean , 1qiymat oladi , 1- searchLetter ;
//// search()..............=> bor yoqligini tekshiradi. index qaytaradi. bir nechta bolsa ham birinchisining indexisi qaytaradi ;
//// indexOf()............=> 2ta qiymat , 1 - harf,  2 - position, harf qirgizsak indexini chiqarib beradi ;
//// lastindexOf()........=> 2ta qiymat , 1 - harf,  2 - position, harf qirgizsak indexini chiqarib beradi, ohiridan tekshiradi ;

/// qirqish :

//// substring(), slice().=> 2ta qiymat, 1 - index, 2 - length , oraligidagi stringlarni qirqib beradi,slice minus qiymat qabul qiladi ;
//// substr().............=> 2ta qiymat , 1 - index, 2 - nechta harf ,  stringlarni qirqib beradi ;

/// Delete :

//// match() ;
//// regex() ;
//// join() ;
//// siplit() ;
//// str.charCodeAt().....=> qiymatlari stringning indexlariga teng.berilgan indexdagi ASCII codeni chiqazadi.yoq index berilsa NaN qaytaradi 0 - 65535 ta element ;
//// str.codePointAt() charCodeAr bn bir xil ishlaydi farqi yoq index berilsa undefined qaytaradi ;
//// String.fromCharCode() charcodeat ni teskarisi raqam qabul qiladi.belgilar qaytaradi ;


// Boolean

/// boolean - bu data tur bizga faqat ikkita qiymat qaytaradi ;

//// true .
//// fales .

/// Xayotda xamma savollarga "booleanni" ishlatib javob bersa bo'ladi


// Function .

/// Function-bu JavaScript-dagi dastur kodi bloki

/// Default :

//// Agar biz call-da qiymat bermasag defoultdagi qiymat ishlaydi ;

//                           default                 default
//                              \                        \
//                               \                        \
//                                \                        \
// function functionName(name="Dilmurod" , surname = "Xabibullaev"){}

//// defoult qachonki "call"-da qiymat berilmasa shu yerdagi qiymatmi olib ketadi ;

/// call :

//// call - bu Functionimizni chaqirish ;
//// call - agar Functionimizni chaqirmasak u ishlamaydi ;

/// return :

//// returnni yonida nima turgan bo'lsa osha functionni qiymati bo'ladi ;
//// return function-ni eng oxirida yoziladi va undan kegin yozilgan xar qanday kod ishlamaydi ;

// {
/// scope :
//// block :
// }

// array :

/// ARRAY [] bu o'z ichiga xar xil data typelarni ola oladigan data type ;

/// array js da juda ko'p ishlatiladi misol uchun :

//// function highAndLow(numbers) {
////     var arr = numbers.split(' ');
////     var max = arr[0],
////         min = arr[0];
////     for  (var i = 0; i < arr.length; i++) {
////         if (parseInt(arr[i]) > max) {
////             max = arr[i];
////         }
////         if (parseInt(arr[i]) < min) {
////             min = arr[i]
////         }
////     }
////     var result = max + ' ' + min;
////     return result;
//// }


// if , else :

/// if else nima vazifa bajaradi ?

//// if else - to'g'ri yoki noto'g'riligiini tekshirib , unga qarab bergan xodisamizbi bajaradi ;

/// Sytax of if else ?

///          shart   qo'nlanma
//            /         /
//           /         /
//          /         /
//// if(condition){manual}

///// shart - aynan shu shartimiz to'g'ri yoki noto'g'ri bo'ladi ;

///// qo'nlanma - qo'nlanmaga yozgan ko'dlarimiz ishlaydi . Agar to'g'ri bo'lsa ;


// swich case

/// swich deyarli if else bilan vazifasi bir xil

//// ularning farqi :

///// swich faqat o'zgaruvchilar o'zgaruvchilar bilan ishlay oladi .

///// switch faqat tenglikni tekshirishga imkon beradi, if / else esa ko'proq / kamroq munosabatlarni va boshqalarni tekshirishi mumkin

/// Syntax of swich :

//   keyword  o'zgaruvchi              xodisas
//      /        /                       |
//     /        /       case keywordi    |
//// switch(malumot) {        |          |
////    case "valeu" {________|          |
////          biz xoxlagan xodisa________|
////    }
//// }

/// case

/// Syntax of case :

//     case "valeu":
//         {
//             console.log("text");
//         }

//// break :

///// break - caseni oxirida yoziladi ;
///// break - bu xamma caseda bo'lishi shart bo'ladigan code ;
///// agar ma'lum-bir case to'g'ri chiqib qolsa va unda break bo'lmasa keyingi caselarni ishlatib ketaveradi . Xatto false chiqsaxam ;
///// ammo to'g'ri chiqganida break bo'lmasa , keyingisida bo'lsa : keyingisida to'xtaydi ;

//// lekigin to'xtatish uchun break-dan boshqa codelarxam bor :
//// bu "return":
//// va returnga qiymat berish shart emas

/// default :

//// default - bu xuddi (if , else)dagi else ga o'xshaydi ;


// for loop

/// for loop - iterator xissoplanadi . Yaniy aylaantirib beruvchi ;

/// Syntax of for loop

//        keyword
//  _________|
//  |             boslang'ich qiymat
//  |          ____________|         qancha qo'shilib borishi
//  |          |                                 |
//  |          |           qachon tugashi        |
//  |          |                 |               |    biz xoxlagan amallar
//  |   _______|______ __________|_________  ____|___          |
// for (let index = 0; index < array.length; index++) {        |
//                                 ____________________________|
// }

//// dumaloq qavs ichida parametrlar yoziladi .
//// jingalak qavsda esa amallar .

/// continue

// let str = "dninlnmnunrnondn";          |
// for (let i = 0; i < str.length; i++) { |
//     if (str[i] == "n") continue;       |__________buerda javod Dilmurod chiqadi .
//     str + "";                          |
//     console.log(str[i]);               |
// }

/// chunki bu erda continue metodi ishlatilgan .
//// continue - ga biror-bir qiymat bersak u o'sha qiymarni tashlab ketadi

/// break
//// for loop daxam break tushunchaasi bor xuddi switchdagiday
//// u xuddi functiondagi returnga o'xshaydi .
/// ancha qo'shilib borishni yozmasak for loopimiz infiniti bo'lib qolladi .


// while

/// while (if-ga o'xshab ketadi) uni if-dan farqi false chiqgunicha aylanaveradi .

/// Syntax of while :

//         keyword
//            |        shart
//   _________|          |
//   |        ___________|     amal
//   |        |                 |
// while (condition) {          |
//    __________________________|
// }


// do while

/// do while bilan whilening farqi do while birinchi amal bajariladi :
//// bu degani sart xato bo'lsaxam bir martta ishlaydi .

/// Syntax of do while :

//    keyword
//  ____|                shart
// |                       |
// |        amal           |
// |         |             |
// do {      |    _________|
//      _____|    |
// } while (condition);


// array

/// array bu turli xil malumotlarni o'zida saqlovchi malumot turi xisoblanadi .

/// verry simple sytax of array

//// [...]

//// xuddi tepaba ayganimizdak array o'z ichida ko'p malumot turini saqlay oladi .
///// shu jumladan o'zinixam ;
///// va ularni orasini vergul (--,--) bilan ajratiladi ;

/// real example

//// misoluchun biz proektlarda userni malumotini saqlashimiz mumkun :

// let name = "Dilmurod";       |
// let surname = "Xabibullaev"; |__________ biz xozirgacha
// let year = 14;               |
// let group = "g8";            |

// let fulDetales = ["Dilmurod", "Xabibullaev", 14, "g8"]; |------------- biz xozir;

/// chaqirish .

//// index-orqali chaqiramiz :

//// console.log(fulDetales[1]);|---------consolda "Xabibullaev" chiqadi ;

/// Metods :

//// add

///// push()...............=> bitta qiymat : nima qo'shish (oxisiga q'shadi) ;
///// unshift()............=> bitta qiymat : nima qo'shish (boshidan qo'shadi) ;
///// concat()..............=> ikkita qiymatni bir-biriga qo'shib beradi ;
///// [...arr1, ...arr2]......=> qancha yonmayon qo'ysagxam tugamaydi ;
////// uchta nuqta nima desag

//// delate

///// pop()................ => qiymat yozilmaydi: eng oxiridagi qiymat olib tashlaydi ;
///// shift().............. => qiymat yozilmaydi: eng boshidan bitta qiymat ;
///// agar biz lengizini 0 - ga tenglab qo 'ysag qiymatlarini xammasini olib tashlayd ;

//// change

///// JSON.stringify().....=> bitta qiymat : qaysi arrayni stringga o'tkazish ;
///// JSON.parse().........=> bitta qiymat : qaysi arrayni o'z xolatiga o'tkazish ;
//// join()................=> malumotni stringga o'tkazadi , agar parametr yozsak xar bir index orasiga malumot qo'yani ;

//// slice()...............=> kopy qilish ikkita qiymat : nechinchi index-dan nechinchi index-gacha ;
//// splice()..............=> kesib olish ikkita qiymat : nechinchi index-dan nechta index ;

// shu joyida qo'shimch primetive va non-primetiveni farqi :
/// agar biz primetive-nan :
//// var name1 = "Dilmurod";
//// var name2 = name1;
//// var name2 = "Muxammad"
//// console.log(name1);
//// shunday qilsag "name1" o'zgarmaydi . non-primetiveda esa "name1"xam o'zgaradi .


// Functionning turlari

/// Regular function :

//// Regular fuction javascriptda deyarli eng ko'p ishlati bo'ladi chunki uning sytaxi - juda oson :

///// Sytax of regular funcyion :

// 
//        function name
//           |
//           |  parametr
// keyword   |     |
//    |      |     |              amallar
// ___|____ _|__ __|___              |
// function name(params) {           |
//        ___________________________|
// }

////// P/s deyarli codwarsdagi xamma misollar regular funcyionda yozilgan .


/// arrow function :

//// arrow eng qisqa syntaxsga ega desaxam bo'ladi .

///// Sytax of arrow funcyion :

//
// ma'lum bir verable          parmetrlar
//       |                  ______|
//       |  function name  |
//       |        |        |    ma'lum bir amallar
//       |        |        |            |
// ______|______ _|__   ___|____    ____|____
// var/let/const name = (params) => {amallar};

//// arrow functionning nomi syntaxidagi (=>)-belgisidan kelib chiqgan
//// agar codimiz bir qator bo'ladigon bo'lsa return yozishimiz shart emas ;

//// va arrow functionni expression function xam deyiladi ;

///// expression function deb : ma'lum bir verablelarga biriktirib ketilgan functionlarni aytiladi ;


/// IIF function

//// kengaytmasi : Immediately Invoked Function .
//// va uni "o'dno'razo'viy function" deb xam ataladi :
///// chunki uni bir martta ishlatamith xolos .

//// Syntax of IIF :

///// (function(){})()


/// Anonimus function

//// Anonimus functiondeb nomsiz functionni aytiladi .

//// Syntax of Anonimus function :

//      o'zgaruvchi
//           |              keyword
//           |                 |
//           | function name   |
//           |       |         |
//           |       |         |      parametrlar
//           |       |         |         |         amallar
//    _______|_____ _|__   ____|___  ____|___         |
///// let/var/const name = function  (params) {       |
//           _________________________________________|
// }

//// Anonimus functionni keywordi bo'lsaxam nomi faqat verablega biriktirilgn bo'ladi .
//// ammo functionni biror  bir narsaga "bog'lab" qo'ymasag .


/// callback

//// bitta functionni argumentlarida keladigan functionni callback function deb aytiladi .
//// va u xoxlagan turida kela oladi . Lekigin ko'pinch arrow xolatida keladi :
///// chunki uni sintaxi oson , xamda tuhunarli ;

//// Sytax of callback :

// function callMe(a, b) {
//     console.log(a + b);
// }
// callMe("this is", " not callback", function callback(c = "this collback") {
//     console.log(c);
// });

///// bu yerda callback finction "call" da kelayapti . shuning uchun uning nomini ("call"back) deyilgan .

//// oddiy functionda return qilmasakxam callbackda return qila olamiz .

//// va uni xoxlagan turimizda yozishimiz mumkun (regular , arrow , IIF ...)
//// lekigin odatda arrow function ishlatiladi .


/// scope
//// scope bu javascript chegaralari ;


/// clausure
//// clausure bu "qoshisi"desagxam bo'laadi ;


/// recursive

//// recursive function - bir function ichida o'sha functionni chaqirish ;

//// Syntax of recursive function :

// keyword
//     | function name
//     |      |  parametrs
//     |      |    |
// ____|___ __|_ __|___          amallar
// function name(params) {           |  shuni ichida chaqiramiz
//                         |         |  (function name orqali)
//     console.log("call");|_________|_______|
//     call();             |
// }

//// recursive functionlarni chaqirishda doimo shart bilan chaqiradi .
///// agar biz functionlarni shart berib chaqirmasag :
////// Infinity bo'lib ketib qoladi

//// recursive functionning yana bir ustunligi for loop vazifasinixam bajaradi .
///// uning for loop-dan farqi tugashini bermaymiz , for loop-da o'zgaruvchi yaratib ketamiz bunda esa shart emas


/// Curry

//// Curry function bu - bir-biriga to'ldirib keladigan function

//// Curry functionda doimo return bo'lishi kerak .

//// Syntax of Curry :

// let parent = (a) => {
//     console.log(a);
//     return (b) => {
//         console.log(b);
//     };
// };
// parent(1)(2);

///// biz buni cheksiz davom etishimiz mumkun ;

// array advensed +

/// Metods :

//// filter................=> filter o'z nomi bilan filtr qilib beradi . Misol uchun :

// let numbers = [1, 4, 5, 2, 3, 6, 7]

// function filterDoSegodnya(params) {            |
//     let res = []                               |
//     for (let i = 0; i < numbers.length; i++) { |
//         if (numbers[i] !== params) {           |
//             res.push(numbers[i])               |______bu biz xozirgacha bilgan 
//         }                                      |      metodlar orqali qilinga 
//     }                                          |
//     console.log(res);                          |
// }                                              | 
// filterDoSegodnya(4)                            |

///// ana endi buni filterda qilingan varianti :

// console.log(numbers.filter((i) => i !== 4)); |  bu esa filter bilan qilingani .


//// filter doimo collback fnction oladi .

//// filterning javobi buleanda bo'ladi :
///// yani filter bizga boolean qaytradi .

//// ammo filterda faqat "teng bo'lmasa" danxam boshqa amallarni bajarsa bo'ladi :
///// <=
///// >=
///// ===
///// ==
///// <
///// >

//// sort.................=> ssortxam o'z nomi bilan ma'liumotlarimizni so'rtlab beradi ;

///// Sntax of sort :

////// console.log(numbers.sort());

/////// biz (sort)-ni o'zini yozib qo'ysagb faqat bir xonalig sonlarni saralash beradi xolos .

////// console.log(numbers.sort((a, b) => a - b));

//////// shuning uchun biz ichiga callback funtion yozamiz , va unda ikkita parametr keladi :
//////// kegin biz birinchi parametrdan ikkinchi parametrni ayrishimiz kerak :
///////// shunda bizga sonlarni kichigdan kattaga qarab chiqarib beradi .
///////// agar teskari qiladigan bo'lsag kattadan kichigga qarab chiqarib beradi .

//// reduse................=> reduse biza arraylarni ichida matematik amallar bajarish uchun ishlatiladi ;

///// biz xozirgacha reduseni o'rniga :

// let res = 0
// for (let i = 0; i < numbers.length; i++) {
//     res += numbers[i]   |
//     res *= numbers[i]   |______bu erda xoxlaganimizni yozishimiz mumkun .
//     res -= numbers[i]   |
//     res /= numbers[i]   |
// }
// console.log(res);

///// bu esa reduse yordamida :

// console.log(numbers.reduce((a, b) => {
//     console.log(a);
// }, 0));

////// bizda (a) boshlang'ich qiymat
////// bizda (b) esa arraydagi qiymatlarimiz .
////// biz endi ularni yig'indisini chiqarishimiz uchun (a)-ni (a+b)-ga tenglab qo'yishiz kerak

///// ikkinchi qiymat esa redusening boshlang'ich qiymati - xuddi (a)-ga o'xshab ;

//// flat..................=> flat bizga arrayni shaffoflab beradi . yani :

// let arr = [1, 2, 3, [2, 41, 1], 3, 25, [9, 8, 2]]
// console.log(arr.flat());

///// agar biz unga qiymat bermasag u bitta arrayga kiradi xolos :
///// bu degani uni qiymati nechchi karra ichiga kirish ;

// let arr = [1, 2, 3, [2, [3, 2, 7, 8, 5], 41, 1], 3, 25, [9, 8, 2]]
// console.log(arr.flat(2));

///// lekin ko'pincha unga Infinity beriladi chunki ma'lumotlar backentdan keladi va nehta array bo'lishi bilmaymiz ;


// Object..................=> bu o'z ichida xamma data tipe saqlash mumkun bo'lgan data tipe ;

/// Syntax of object :

// varable
//  |
//  |o'zgaruvchi
//  | nomi (qiymat nomi)
//  |  |
//  |  |        key  qiymat        key       qiymat
//  |  |         |      |           |           |
//  |  |         |      |           |           |
// let obj = { name: "Dilmurod", surname: "Xabibullaev" };

/// key....................=> object ichidagi exes qilish uchun bo'lgan ma'lumot nomi .

//// objectlarda index degantushunch yo'q shuning uchun biz ularga "key" beramiz .
//// biz keyga qanday nom bersag xuddi shunday chaqirishimiz kerak :


// biz objektlarga (--.--) orqali exes :
// console.log(objekt.name);

/// biz objectni for loop bilan iterate qila olmaymiz . Uning uchun bizga (--for-in loop--)

//// Syntax of for-in loop


//     keyword
//   ____|
//  |      key name
//  |          |     object
//  |          |      name
//  |          |       |       amall
//  |          |       |         |
// for (const key in object) {   |
//              _________________|
// }

/// Add information :
//// obj.age = 14;

/// Update information :

//// agar ma'lumot bor bo'lsa uni update qiladi ;
//// obj.name = "Muxammad";

/// Delete information :

//// uning uchun maxsus keyword bor (--delete--) ;
///// delete obj.age;

// object advensed +

/// Metods :

//// freese................=> objectni muzlatib qo'yani . va xech nimani o'zgartiribxam bo'lmaydi .

// let obj = { name: "Dilmurod", age: 14 };       |
// Object.freeze(obj);                            |_________bu xodisa ishlamaydi chunki freeze ishlatildi .
// obj.age = 15;                                  |
// console.log(obj);                              |

//// seal..................=> bu xam objectni muzlatadi . faqat uni chanje qilsa bo'ladi ;


// let obj = { name: "Dilmurod", age: 14 };       |
// Object.seal(obj);                              |_________bu xodisa ishlaydi .
// obj.age = 15;                                  |
// console.log(obj);                              |

///// shundan boshqalari ishlamaydi ;

//// this.................. => this bu functionni o'rab turuvchi object .

///// agar functionni object o'rab turmasa u global objektga qaraydi .
////// demak thisni xar qanday xolatdaxam object o'rab turadi .

///// u arrow functiondan ishlamaydi . boshqa xammasida ishlaydi ;

///// agar uni objectda ishlatmassag "global scobe"-ni chiqarib beradi .
////// chunki "this"-degan tushuncha arrow functionni o'zida yo'q .

// collback advensed

/// Metods :

//// setTimeout............=> setTimeoutning vazifasi suniy kutish yaratish :
///// setTimeout ikkita qqiymat qabul qiladi :

////// 1. collback function ;
/////// uni ichida xoxlagan narsani yozish mumkun ;

////// 2. qancha vaqt kutish ;
/////// biz uni milli-sekundlarda belgilaymiz ;
/////// agar berilmasa qiymati 0-milli-sekund bo'lib qoladi ;

///// u console-da nechta element bolishidan qatiy nazar oxirgi bo'lib chiqadi :
////// agar ikkita setTimeout bo'lsa vaqtiga qaraydi .

///// uni toxtatish uchun : clearTimeout() ishlatiladi .

//// setInterval...........=> setTimeout bilan birqil :

///// farqi setInterval cheksiz ishlaydi :
////// yani agar 1000-millisekund bersag xar 1000-millisekundda chiqadi

///// uni toxtatish uchun : clearInterval() ishlatiladi .

// DOM - Document Object Module

/// defer VS async

//// defer birinchi html ni o'qib kegin js ga o'tadi                  |_______bundan kelib chiqadiki async yaxshiroq
//// async esa js-ni o'qib html-dan topib kegin yana js-ni o'qiydi .  |

/// calling

//// getElementBy..........=> bu eski metod xozir uncha ko'p ishlatilmaydi :

///// document.getElementById...........=> elementni ID-si orqali olish
////// agar ID ikkita bilsa birinchisini oladi

///// document.getElementsByClassName...=> elementni ClassName-si orqali olish

///// document.getElementsByTagName.....=> elementni TagName-si orqali olish

///// document.getElementsByName........=> elementni name-si (name atributesi orqali) orqali olish

//// querySelector.........=> 1-qiymat nimani chaqirish

///// querySelector xuddi css kabi ID-ni # bilan ;
/////                              class-ni . bilan ;
/////                              tagname-ni ozini yozish kerak ;