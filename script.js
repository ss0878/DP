// Some songs may be faulty due to broken links. Please replace another link so that it can be played

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      image : 'https://lq.djjohal.com/covers/728873/The%20Lion.jpg',
      name : 'The Lion',
      singer : 'Varinder Brar',
album : 'Varinder Brar Music',
      path : 'https://hd1.djjohal.com/320/514772/The%20Lion%20-%20Varinder%20Brar%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728839/DONT%20YOU%20KNOW.jpg',
      name : 'SUPREME',
      singer : 'Amrit Maan',
album : 'XPENSIVE',
      path : 'https://hd1.djjohal.com/320/514725/SUPREME%20-%20Amrit%20Maan%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728843/Lalkaare.jpg',
      name : 'Lalkaare',
      singer : 'Harjot , Deepak Dhillon',
album : 'True Music',
      path : 'https://hd1.djjohal.com/320/514729/Lalkaare%20-%20Harjot%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728845/Landlord.jpg',
      name : 'Landlord',
      singer : 'Geeta Zaildar',
album : 'T-Series',
      path : 'https://hd1.djjohal.com/320/514731/Landlord%20-%20Geeta%20Zaildar%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728833/Amsterdam.jpg',
      name : 'Amsterdam',
      singer : 'Jaz Dhami',
album : 'Jaz Dhami Music',
      path : 'https://hd1.djjohal.com/320/514701/Amsterdam%20-%20Jaz%20Dhami%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728839/DONT%20YOU%20KNOW.jpg',
      name : 'DONT YOU KNOW',
      singer : 'Amrit Maan',
album : 'XPENSIVE',
      path : 'https://hd1.djjohal.com/320/514722/DONT%20YOU%20KNOW%20-%20Amrit%20Maan%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728802/Slang.jpg',
      name : 'Slang',
      singer : 'Mani Longia',
album : 'Single Track Studios',
      path : 'https://hd1.djjohal.com/320/514655/Slang%20-%20Mani%20Longia%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728793/2NI.jpg',
      name : '2NI',
      singer : 'Garry Sandhu',
album : 'Fresh Media Records',
      path : 'https://hd1.djjohal.com/320/514643/2NI%20-%20Garry%20Sandhu%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728796/3%20-%204%20Yaar.jpg',
      name : '3 - 4 Yaar',
      singer : 'Karaj Randhawa',
album : 'Karaj Randhawa Music',
      path : 'https://hd1.djjohal.com/320/514646/3%20%204%20Yaar%20-%20Karaj%20Randhawa%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728780/Her.jpg',
      name : 'Her',
      singer : 'Shubh',
album : 'Shubh Music',
      path : 'https://hd1.djjohal.com/320/514625/Her%20-%20Shubh%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728781/Tu%20He%20Dass.jpg',
      name : 'Tu He Dass',
      singer : 'Harvi',
album : 'Bang Music',
      path : 'https://hd1.djjohal.com/320/514626/Tu%20He%20Dass%20-%20Harvi%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728776/Taur%20Tappa.jpg',
      name : 'Taur Tappa',
      singer : 'Shooter Kahlon',
      path : 'https://hd1.djjohal.com/320/514621/Taur%20Tappa%20-%20Shooter%20Kahlon%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728772/Best%20Friends.jpg',
      name : 'Best Friends',
      singer : 'The Landers & Guri Singh',
      path : 'https://hd1.djjohal.com/320/514617/Best%20Friends%20-%20The%20Landers%20%20Guri%20Singh%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728761/Jatt%20Life%20Zone.jpg',
      name : 'Jatt Life Zone',
      singer : 'Varinder Brar',
      path : 'https://hd1.djjohal.com/320/514606/Jatt%20Life%20Zone%20-%20Varinder%20Brar%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728765/Rude%20Boy.jpg',
      name : 'Rude Boy',
      singer : 'Jazzy B',
      path : 'https://hd1.djjohal.com/320/514610/Rude%20Boy%20-%20Jazzy%20B%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://i.imgur.com/b7k4od1.jpg',
      name : 'On Top',
      singer : 'Karan Aujla',
      path : 'https://hd1.djjohal.com/320/514579/On%20Top%20-%20Karan%20Aujla%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://i.imgur.com/2AyYePC.jpg',
      name : '10 Outta 10',
      singer : 'Amrit Maan & Shipra Goyal',
      path : 'https://hd1.djjohal.com/320/514582/10%20Outta%2010%20-%20Amrit%20Maan%20%20Shipra%20Goyal%20(DJJOhAL.Com).mp3'
  },
     {
      image : 'https://lq.djjohal.com/covers/728730/Enigma.jpg',
      name : 'Enigma',
      singer : 'Tarsem Jassar',
      path : 'https://hd1.djjohal.com/320/514552/Enigma%20-%20Tarsem%20Jassar%20(DJJOhAL.Com).mp3'
  },
     {
      image : 'https://lq.djjohal.com/covers/728750/WYTB.jpg',
      name : 'WYTB',
      singer : 'Karan Aujla & Gurlez Akhtar',
      path : 'https://hd1.djjohal.com/320/514580/WYTB%20-%20Karan%20Aujla%20%20Gurlez%20Akhtar%20(DJJOhAL.Com).mp3'
  },
     {
      image : 'https://lq.djjohal.com/covers/728751/Blast.jpg',
      name : 'Blast',
      singer : 'R. Nait & Gurlez Akhtar',
      path : 'https://hd1.djjohal.com/320/514581/Blast%20-%20R%20Nait%20%20Gurlez%20Akhtar%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728738/So%20Mean.jpg',
      name : 'So Mean',
      singer : 'Navaan Sandhu',
      path : 'https://hd1.djjohal.com/320/514568/So%20Mean%20-%20Navaan%20Sandhu%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728739/Sifat.jpg',
      name : 'Sifat',
      singer : 'Nirvair Pannu',
      path : 'https://hd1.djjohal.com/320/514569/Sifat%20-%20Nirvair%20Pannu%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728741/Aho%20Aho.jpg',
      name : 'Aho Aho',
      singer : 'Gur Sidhu & Sultaan',
      path : 'https://hd1.djjohal.com/320/514571/Aho%20Aho%20-%20Gur%20Sidhu%20%20Sultaan%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728716/Ailaan.jpg',
      name : 'Ailaan',
      singer : 'Gulab Sidhu , Gur Sidhu',
      path : 'https://hd1.djjohal.com/320/514529/Ailaan%20-%20Gulab%20Sidhu%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728715/Blona%20Shad%20Ta.jpg',
      name : 'Blona Shad Ta',
      singer : 'Guntaj Dandiwal, Korala Maan & Desi Crew',
      path : 'https://hd1.djjohal.com/320/514528/Blona%20Shad%20Ta%20-%20Guntaj%20Dandiwal%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728712/Same%20Same.jpg',
      name : 'Same Same',
      singer : 'Singga',
      path : 'https://hd1.djjohal.com/320/514525/Same%20Same%20-%20Singga%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728705/Jagga%20Daaku.jpg',
      name : 'Jagga Daaku',
      singer : 'Varinder Brar',
      path : 'https://hd1.djjohal.com/320/514518/Jagga%20Daaku%20-%20Varinder%20Brar%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728692/Gal%20Ban%20Jae.jpg',
      name : 'Gal Ban Jae',
      singer : 'Ammy Virk',
      path : 'https://hd1.djjohal.com/320/514489/Gal%20Ban%20Jae%20-%20Ammy%20Virk%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728688/Geet%20Banuga.jpg',
      name : 'Geet Banuga',
      singer : 'Kaka',
      path : 'https://hd1.djjohal.com/320/514485/Geet%20Banuga%20-%20Kaka%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728673/Hustler.jpg',
      name : 'Hustler',
      singer : 'Sukh Lotey',
      path : 'https://hd1.djjohal.com/320/514470/Hustler%20-%20Sukh%20Lotey%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728672/Mehfilan.jpg',
      name : 'Mehfilan',
      singer : 'Shooter Kahlon',
      path : 'https://hd1.djjohal.com/320/514469/Mehfilan%20-%20Shooter%20Kahlon%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728662/Boss%20Walk.jpg',
      name : 'Boss Walk',
      singer : 'Nirvair Pannu',
      path : 'https://hd1.djjohal.com/320/514454/Boss%20Walk%20-%20Nirvair%20Pannu%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728653/Jhumka.jpg',
      name : 'Jhumka',
      singer : 'Ekam Chanoli',
      path : 'https://hd1.djjohal.com/320/514445/Jhumka%20-%20Ekam%20Chanoli%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728659/Wangan.jpg',
      name : 'Wangan',
      singer : 'Shivjot',
      path : 'https://hd1.djjohal.com/320/514451/Wangan%20-%20Shivjot%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728656/Jatt%20Bolde.jpg',
      name : 'Jatt Bolde',
      singer : 'Gippy Grewal, Jazzy B',
      path : 'https://hd1.djjohal.com/320/514448/Jatt%20Bolde%20-%20Gippy%20Grewal%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728651/Pariyan%20De%20Desh.jpg',
      name : 'Pariyan De Desh',
      singer : 'Gurnam Bhullar',
      path : 'https://hd1.djjohal.com/320/514443/Pariyan%20De%20Desh%20-%20Gurnam%20Bhullar%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728279/Ainak.jpg',
      name : 'Anak',
      singer : 'Gulab Sidhu',
      path : 'https://hd1.djjohal.com/320/513936/Ainak%20-%20Gulab%20Sidhu%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/726955/Colt.jpg',
      name : 'Colt',
      singer : 'Pavitar Lassoi',
      path : 'https://hd1.djjohal.com/320/512214/Colt%20-%20Pavitar%20Lassoi%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728609/Wanted.jpg',
      name : 'Wanted',
      singer : 'Ninja & Korala Maan',
      path : 'https://hd1.djjohal.com/320/514386/Wanted%20-%20Ninja%20%20Korala%20Maan%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728606/Vaar.jpg',
      name : 'Vaar',
      singer : 'Sidhu Moose Wala',
      path : 'https://hd1.djjohal.com/320/514382/Vaar%20-%20Sidhu%20Moose%20Wala%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728600/Jee%20Jeha%20Karda.jpg',
      name : 'Jee Jeha Karda',
      singer : 'Jasmine Sandlas',
      path : 'https://hd1.djjohal.com/320/514375/Jee%20Jeha%20Karda%20-%20Jasmine%20Sandlas%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728423/Dekhya%20Kite.jpg',
      name : 'Dekhya Kite',
      singer : 'Davy',
      path : 'https://hd1.djjohal.com/320/514113/Dekhya%20Kite%20-%20Davy%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728597/BBBB.jpg',
      name : 'BBBB',
      singer : 'Khan Bhaini',
      path : 'https://hd1.djjohal.com/320/514372/BBBB%20-%20Khan%20Bhaini%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728590/Chobbar.jpg',
      name : 'Chobbar',
      singer : 'Jordan Sandhu',
      path : 'https://hd1.djjohal.com/320/514362/Chobbar%20-%20Jordan%20Sandhu%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728580/Tutta%20Dil.jpg',
      name : 'Tutta Dil',
      singer : 'Sharry Maan',
      path : 'https://hd1.djjohal.com/320/514352/Tutta%20Dil%20-%20Sharry%20Maan%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728579/Zara%20Faasley%20Te.jpg',
      name : 'Zara Faasley Te',
      singer : 'Satinder Sartaaj',
      path : 'https://hd1.djjohal.com/320/514351/Zara%20Faasley%20Te%20-%20Satinder%20Sartaaj%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728561/13%20Pind.jpg',
      name : '13 Pind',
      singer : 'Rajvir Jawanda',
      path : 'https://hd1.djjohal.com/320/514324/13%20Pind%20-%20Rajvir%20Jawanda%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728560/Letter%20to%20Sidhu.jpg',
      name : 'Letter to Sidhu',
      singer : 'Sunny Malton',
      path : 'https://hd1.djjohal.com/320/514323/Letter%20to%20Sidhu%20-%20Sunny%20Malton%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728542/Ak%2047.jpg',
      name : 'Ak 47',
      singer : 'Ninja & Deep Jandu',
      path : 'https://hd1.djjohal.com/320/514296/Ak%2047%20-%20Ninja%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728517/AK%20Di%20Barrel.jpg',
      name : 'AK Di Barrel',
      singer : 'Himmat Sandhu',
      path : 'https://hd1.djjohal.com/320/514255/AK%20Di%20Barrel%20-%20Himmat%20Sandhu%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728541/Mera%20Jee%20Karda.jpg',
      name : 'Mera Jee Karda (Remix)',
      singer : 'Byg Byrd',
      path : 'https://hd1.djjohal.com/320/514295/Mera%20Jee%20Karda%20-%20Byg%20Byrd%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728538/2%20Bloodas.jpg',
      name : '2 Bloodas',
      singer : 'Varinder Brar',
      path : 'https://hd1.djjohal.com/320/514292/2%20Bloodas%20-%20Varinder%20Brar%20(DJJOhAL.Com).mp3'
  },
{
      image : 'https://lq.djjohal.com/covers/728529/Hello%20Hello%20Hola.jpg',
      name : 'Hello Hello Hola',
      singer : 'Garry Sandhu Ft. Las Villa ',
      path : 'https://hd1.djjohal.com/320/514271/Hello%20Hello%20Hola%20-%20Garry%20Sandhu%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728506/Trust.jpg',
      name : 'Trust',
      singer : 'Nseeb',
      path : 'https://hd1.djjohal.com/320/514241/Trust%20-%20Nseeb%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728500/Balle%20Jatta.jpg',
      name : 'Balle Jatta',
      singer : 'Diljit Dosanjh',
      path : 'https://hd1.djjohal.com/320/514225/Balle%20Jatta%20-%20Diljit%20Dosanjh%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728483/Mehflan.jpg',
      name : 'Mehflan',
      singer : 'Kulbir Jhinjer',
      path : 'https://hd1.djjohal.com/320/514208/Mehflan%20-%20Kulbir%20Jhinjer%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728480/25-25.jpg',
      name : '25-25',
      singer : 'Arjan Dhillon',
      path : 'https://hd1.djjohal.com/320/514194/2525%20-%20Arjan%20Dhillon%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728717/Gall%20Mukk%20Gyi.jpg',
      name : 'Gall Mukk Gyi',
      singer : 'Nimrat Khaira',
      path : 'https://hd1.djjohal.com/320/514530/Gall%20Mukk%20Gyi%20-%20Nimrat%20Khaira%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728713/Jaane%20Meriye.jpg',
      name : 'Jaane Meriye',
      singer : 'Akhil',
      path : 'https://hd1.djjohal.com/320/514526/Jaane%20Meriye%20-%20Akhil%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728619/Kam%20Lout.jpg',
      name : 'Kam Lout',
      singer : 'A Kay',
      path : 'https://hd1.djjohal.com/320/514401/Kam%20Lout%20-%20A%20Kay%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728612/High%20Life.jpg',
      name : 'High Life',
      singer : 'Jass Bajwa',
      path : 'https://hd1.djjohal.com/320/514390/High%20Life%20-%20Jass%20Bajwa%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728492/Mehrma.jpg',
      name : 'Mehrma',
      singer : 'The PropheC',
      path : 'https://hd1.djjohal.com/320/514217/Mehrma%20-%20The%20PropheC%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728489/Detail.jpg',
      name : 'Detail',
      singer : 'Amrit Maan',
      path : 'https://hd1.djjohal.com/320/514214/Detail%20-%20Amrit%20Maan%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728468/Snowfall.jpg',
      name : 'Snowfall',
      singer : 'Jordan Sandhu',
      path : 'https://hd1.djjohal.com/320/514180/Snowfall%20-%20Jordan%20Sandhu%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728363/Ferozi%20Koka.jpg',
      name : 'Ferozi Koka',
      singer : 'Ranjit Bawa',
album : 'Cocktail Music',
      path : 'https://hd1.djjohal.com/320/514037/Ferozi%20Koka%20-%20Ranjit%20Bawa%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728459/6%20L.jpg',
      name : '6 L',
      singer : 'Tarsem Jassar & Kulbir Jhinjer',
      path : 'https://hd1.djjohal.com/320/514151/6%20L%20-%20Tarsem%20Jassar%20%20Kulbir%20Jhinjer%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728421/Trouble%20Maker.jpg',
      name : 'Trouble Maker',
      singer : 'Jassa',
      path : 'https://hd1.djjohal.com/320/514111/Trouble%20Maker%20-%20Jassa%20Dhillon%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728398/Blood%20Talks.jpg',
      name : 'Blood Talks',
      singer : 'Jordan Sandhu & Zikar Sandhu',
      path : 'https://hd1.djjohal.com/320/514078/Blood%20Talks%20-%20Jordan%20Sandhu%20%20Zikar%20Sandhu%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728375/Jugni.jpg',
      name : 'Jugni',
      singer : 'Diljit Dosanjh & Diamond Platnumz',
      path : 'https://hd1.djjohal.com/320/514054/Jugni%20-%20Diljit%20Dosanjh%20%20Diamond%20Platnumz%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728305/DOABA.jpg',
      name : 'DOABA',
      singer : 'Garry Sandhu',
      path : 'https://hd1.djjohal.com/320/513974/DOABA%20-%20Garry%20Sandhu%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728292/Mobster.jpg',
      name : 'Mobster',
      singer : 'Singga Ft. Deep Jandu',
      path : 'https://hd1.djjohal.com/320/513961/Mobster%20-%20Singga%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728280/Grace.jpg',
      name : 'Grace',
      singer : 'Gurnam Bhullar',
      path : 'https://hd1.djjohal.com/320/513937/Grace%20-%20Gurnam%20Bhullar%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728276/Dont%20You.jpg',
      name : 'Dont You',
      singer : 'Jassa Dhillon',
      path : 'https://hd1.djjohal.com/320/513933/Dont%20You%20-%20Jassa%20Dhillon%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728273/Koka.jpg',
      name : 'Koka',
      singer : 'Diljit Dosanjh',
      path : 'https://hd1.djjohal.com/320/513929/Koka%20-%20Diljit%20Dosanjh%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728257/Jionda%20Reh.jpg',
      name : 'Jionda Reh',
      singer : 'Prabh Gill',
      path : 'https://hd1.djjohal.com/320/513904/Jionda%20Reh%20-%20Prabh%20Gill%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728244/Yaad.jpg',
      name : 'Yaad',
      singer : 'Jassa Dhillon',
      path : 'https://hd1.djjohal.com/320/513883/Yaad%20-%20Jassa%20Dhillon%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728233/Wrong%20Report.jpg',
      name : 'Wrong Report',
      singer : 'Korala Maan',
      path : 'https://hd1.djjohal.com/320/513865/Wrong%20Report%20-%20Korala%20Maan%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728216/Hanji%20Hanji.jpg',
      name : 'Hanji Hanji',
      singer : 'Amrit Maan',
      path : 'https://hd1.djjohal.com/320/513848/Hanji%20Hanji%20-%20Amrit%20Maan%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728207/Swag.jpg',
      name : 'Swag',
      singer : 'Tarsem Jassar',
      path : 'https://hd1.djjohal.com/320/513838/Swag%20-%20Tarsem%20Jassar%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/724892/Mashup.jpg',
      name : 'Mashup',
      singer : 'Amantej Hundal',
      path : 'https://hd1.djjohal.com/320/509586/Mashup%20-%20Amantej%20Hundal%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/727349/The%20Last%20Ride.jpg',
      name : 'The Last Ride',
      singer : 'Sidhu Moose Wala',
      path : 'https://hd1.djjohal.com/320/512702/The%20Last%20Ride%20-%20Sidhu%20Moose%20Wala%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/725500/Offshore.jpg',
      name : 'Offshore',
      singer : 'Shubh',
      path : 'https://hd1.djjohal.com/320/510383/Offshore%20-%20Shubh%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/727181/Sunburn.jpg',
      name : 'Sunburn',
      singer : 'Pavitar Lassoi',
      path : 'https://hd1.djjohal.com/320/512482/Sunburn%20-%20Pavitar%20Lassoi%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/727699/Call.jpg',
      name : 'Call',
      singer : 'Nirvair Pannu',
      path : 'https://hd1.djjohal.com/320/513130/Call%20-%20Nirvair%20Pannu%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728001/Plug%20Talk.jpg',
      name : 'Plug Talk',
      singer : 'Navaan Sandhu',
      path : 'https://hd1.djjohal.com/320/513558/Plug%20Talk%20-%20Navaan%20Sandhu%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728164/Baller.jpg',
      name : 'Baller',
      singer : 'Shubh',
      path : 'https://hd1.djjohal.com/320/513781/Baller%20-%20Shubh%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728727/Its%20a%20Good%20Day.jpg',
      name : 'Its a Good Day',
      singer : 'Amantej Hundal',
      path : 'https://hd1.djjohal.com/320/514546/Its%20a%20Good%20Day%20-%20Amantej%20Hundal%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/725501/Elevated.jpg',
      name : 'Elevated',
      singer : 'Shubh',
      path : 'https://hd1.djjohal.com/320/510384/Elevated%20-%20Shubh%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728269/Gun%20n%20Mic.jpg',
      name : 'Gun n Mic',
      singer : 'Amantej Hundal',
      path : 'https://hd1.djjohal.com/320/513925/Gun%20n%20Mic%20-%20Amantej%20Hundal%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728871/Gaddi%20Red%20Challenger.jpg',
      name : 'Gaddi Red Challenger',
      singer : 'Babbu',
      path : 'https://hd1.djjohal.com/320/514770/Gaddi%20Red%20Challenger%20-%20Babbulicious%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/723322/Koka.jpg',
      name : 'Koka',
      singer : 'Ranjit Bawa',
album : 'Brand B',
      path : 'https://hd1.djjohal.com/320/507450/Koka%20-%20Ranjit%20Bawa%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728191/Gaddi%20Vich.jpg',
      name : 'Gaddi Vich',
      singer : 'Dilpreet Dhillon & Kuar B',
album : 'Times Music',
      path : 'https://hd1.djjohal.com/320/513819/Gaddi%20Vich%20-%20Dilpreet%20Dhillon%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728117/Band%20Theke.jpg',
      name : 'Band Theke',
      singer : 'Jordan Sandhu',
album : 'Times Music',
      path : 'https://hd1.djjohal.com/320/513723/Band%20Theke%20-%20Jordan%20Sandhu%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/728113/Just%20Round.jpg',
      name : 'Just Round',
      singer : 'Jass Bajwa',
album : 'Mee Muzic',
      path : 'https://hd1.djjohal.com/320/513708/Just%20Round%20-%20Jass%20Bajwa%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/727948/Right%20Left.jpg',
      name : 'Right Left',
      singer : 'Kulwinder Billa',
album : 'Times Music',
      path : 'https://hd1.djjohal.com/320/513475/Right%20Left%20-%20Kulwinder%20Billa%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/727800/Patake.jpg',
      name : 'Patake',
      singer : 'Khan Bhaini & Gurlez Akhtar',
album : 'Single Track Studio',
      path : 'https://hd1.djjohal.com/320/513275/Patake%20-%20Khan%20Bhaini%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/727286/Kuwait%20Wala%20Koka.jpg',
      name : 'Kuwait Wala Koka',
      singer : 'Gurman Sandhu & Baani Sandhue',
album : 'Desi Junction',
      path : 'https://hd1.djjohal.com/320/512621/Kuwait%20Wala%20Koka%20-%20Gurman%20Sandhu%20%20Baani%20Sandhu%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/727060/Nain.jpg',
      name : 'Nain',
      singer : 'Dilpreet Dhillon Ft. Mehar Vaani',
album : 'White Hill Music',
      path : 'https://hd1.djjohal.com/320/512335/Nain%20-%20Dilpreet%20Dhillon%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/727012/Tej%20Mitha.jpg',
      name : 'Tej Mitha',
      singer : 'Deep Bajwa',
album : 'Team 7 Picture',
      path : 'https://hd1.djjohal.com/320/512275/Tej%20Mitha%20-%20Deep%20Bajwa%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/726849/Dil%20Mangeya.jpg',
      name : 'Dil Mangeya',
      singer : 'Sajjan Adeeb',
album : 'Sajjan Adeeb Music',
      path : 'https://hd1.djjohal.com/320/512080/Dil%20Mangeya%20-%20Sajjan%20Adeeb%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/726830/Shehar%20Vichon%20Geda.jpg',
      name : 'Shehar Vichon Geda',
      singer : 'Jordan Sandhu',
album : 'Times Music',
      path : 'https://hd1.djjohal.com/320/512061/Shehar%20Vichon%20Geda%20-%20Jordan%20Sandhu%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/726106/Jatt%20Flex.jpg',
      name : 'Jatt Flex',
      singer : 'Amrit Maan',
album : 'Cocktail Music',
      path : 'https://hd1.djjohal.com/320/511151/Jatt%20Flex%20-%20Amrit%20Maan%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/725994/Black%20Effect.jpg',
      name : 'Black Effect',
      singer : 'Jordan Sandhu',
album : 'Times Music',
      path : 'https://hd1.djjohal.com/320/510999/Black%20Effect%20-%20Jordan%20Sandhu%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/725816/Kul%20Milake%20Jatt.jpg',
      name : 'Kul Milake Jatt',
      singer : 'Gurnam Bhullar',
album : 'Desi Junction',
      path : 'https://hd1.djjohal.com/320/510776/Kul%20Milake%20Jatt%20-%20Gurnam%20Bhullar%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/725561/Sira%20Ft.%20Shipra%20Goyal.jpg',
      name : 'Sira',
      singer : 'Dilpreet Dhillon, Shipra Goyal',
album : 'Times Music',
      path : 'https://hd1.djjohal.com/320/510473/Sira%20Ft%20Shipra%20Goyal%20-%20Dilpreet%20Dhillon%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/725551/Teri%20Life%20Meri%20Life%20Ft.%20Kaur%20B.jpg',
      name : 'Teri Life Meri Life',
      singer : 'R Nait & Kaur B',
album : 'Times Music',
      path : 'https://hd1.djjohal.com/320/510450/Teri%20Life%20Meri%20Life%20Ft%20Kaur%20B%20-%20R%20Nait%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/725502/What%20Ve.jpg',
      name : 'What Ve',
      singer : 'Diljit Dosanjh & Nimrat Khaira',
album : 'Diljit Dosanjh Music',
      path : 'https://hd1.djjohal.com/320/510385/What%20Ve%20-%20Diljit%20Dosanjh%20%20Nimrat%20Khaira%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/724582/Loud.jpg',
      name : 'Loud',
      singer : 'Ranjit Bawa',
album : 'Loud',
      path : 'https://hd1.djjohal.com/320/509156/Loud%20-%20Ranjit%20Bawa%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/723626/Be%20Ready%20Ft.%20Desi%20Crew.jpg',
      name : 'Be Ready',
      singer : 'Ninja Ft. Desi Crew',
album : 'Happy Raikoti Music',
      path : 'https://hd1.djjohal.com/320/507830/Be%20Ready%20Ft%20Desi%20Crew%20-%20Ninja%20(DJJOhAL.Com).mp3'
  },
  {
      image : 'https://lq.djjohal.com/covers/723058/Jatt%20Te%20Jawani.jpg',
      name : 'Jatt Te Jawani',
      singer : 'Dilpreet Dhillon & Karan Aujla',
album : 'Times Music',
      path : 'https://hd1.djjohal.com/320/507096/Jatt%20Te%20Jawani%20-%20Dilpreet%20Dhillon%20%20Karan%20Aujla%20(DJJOhAL.Com).mp3'
  }
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimate.pause();

    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - 10;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 400);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};

app.start();
