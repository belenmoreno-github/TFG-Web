
const images = [
    "fotos/foto2.jpg",
  ];

  const texts = [
    ["Azul Turquesa", "\"¡Bienvenido a Azul Turquesa!\""],
];
  
  rgbKineticSlider = new rgbKineticSlider({
    slideImages: images,
    itemsTitles: texts,
  
    backgroundDisplacementSprite: "https://i.ibb.co/N246LxD/map-9.jpg", 
    cursorDisplacementSprite: "https://i.ibb.co/KrVr51f/displace-circle.png",
    cursorImgEffect: true,
    cursorTextEffect: true,
    cursorScaleIntensity: 0.65,
    cursorMomentum: 0.14,
  
    swipe: true,
    swipeDistance: window.innerWidth * 0.4,
    swipeScaleIntensity: 2,
  
    slideTransitionDuration: 1, // transition duration
    transitionScaleIntensity: 30, // scale intensity during transition
    transitionScaleAmplitude: 160, // scale amplitude during transition
  
   
    nav: true, // enable navigation
    navElement: ".main-nav", // set nav class
  
  
    imagesRgbEffect: true,
    imagesRgbIntensity: 0.9,
    navImagesRgbIntensity: 80,
  
    textsDisplay: true, 
    textsSubTitleDisplay: true, 
    textsTiltEffect: true,
    googleFonts: ["Playfair Display:700", "Roboto:400"],
    buttonMode: false,
    textsRgbEffect: true,
    textsRgbIntensity: 0.03,
    navTextsRgbIntensity: 15,
  
    textTitleColor: "white",
    textTitleSize: 80,
    mobileTextTitleSize: 80,
    textSubTitleColor: "white",
    textSubTitleSize: 21,
    mobileTextSubTitleSize: 16,
    textSubTitleLetterspacing: 2,
    textSubTitleOffsetTop: 90, 
    mobileTextSubTitleOffsetTop: 90
  });
  
  