
const egg4 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/services/Egg1.2.png';
const egg3 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/services/Egg2.png';
const egg5 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/services/Egg3.png';
const egg2 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/services/Egg4.png';
const egg1 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/services/Egg5.png';

const artGif = "https://racho-devs.s3.us-east-2.amazonaws.com/services/images/webMBirds/BArt.webm";
const desGif = "https://racho-devs.s3.us-east-2.amazonaws.com/services/images/webMBirds/BDesign.webm";
const devGif = "https://racho-devs.s3.us-east-2.amazonaws.com/services/images/webMBirds/BDevelop.webm";
const musGif = "https://racho-devs.s3.us-east-2.amazonaws.com/services/images/webMBirds/BMusic.webm";
const modGif = "https://racho-devs.s3.us-east-2.amazonaws.com/services/images/webMBirds/BMusic.webm";




export const homeobjOne = {
    id: 'paraItems',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'JavaScript + react.js + Webpack + more!',
    headline: 'DEVELOP',
    description: 'Bring to life designs created for websites and mobile applications!',
    description2: 'Can make a variety of website types such as static, e-commerce, landing pages, portfolios, NFT start ups, etc.)',
    description3: 'Can develop reusable components and easy to read code conventions ',
    buttonLabel: 'Discover',
    imgStart: true,
    shadow: true,
    img: devGif,
    bg: egg1,
    dark: false,
    primary: true,
    darkText: true,
    topLineS: false

};

export const homeobjTwo = {
    id: 'paraItems',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: 'figma',
    headline: 'DESIGN',
    description: 'Utilize user research to discover target users and create UX Audits along with Competitive Analysis',
    description2: 'Design components, pages, and domain models for websites.',
    description3: 'Other UML Diagrams can be made such as Wireframes, Sequence Diagrams, Class Diagrams, and more!)',
    buttonLabel: 'Learn More',
    imgStart: false,
    shadow: false,
    img: desGif,
    bg: egg2,
    alt: 'Founders',
    too: 'theArts',
    dark: true,
    primary: true,
    darkText: false,
    topLineS: true

};

export const homeobjThree = {
    id: 'paraItems',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Adobe Photoshop + Illustrator',
    headline: 'ART',
    description: 'Create and edit images and objects to match websites aesthetic and design.',
    description2: 'Can make .svg images along with aesthetic graphics for websites, applications, or posters.',
    description3: 'Can create short GIFs using created graphics',
    buttonLabel1: '',
    imgStart: true,
    shadow: true,
    img: artGif,
    bg: egg3,
    alt: 'theArtꙮ',
    tooo: '/artWork',
    dark: false,
    primary: true,
    darkText: true,
    topLineS: false


};


export const homeobjFour = {
    id: 'paraItems',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Logic Pro X + Unreal Engine',
    headline: 'MUSIC',
    description: 'Engineer audio sounds and vocals for musical purposes or Audio-Video Synchronization)',
    description2: 'Translate sound into data via use of FFT or other sonification strategies)',
    description3: 'Aesthetically visualize music and audio into art',
   
    buttonLabel: 'TRAVEL THE ROADS...',
    imgStart: false,
    shadow: false,
    img: musGif,
    bg: egg4,
    alt: 'theWorks',
    too: 'roadmap',
    dark: true,
    primary: true,
    darkText: false,
    topLineS: true

};

export const homeobjFive = {
    id: 'paraItems',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Blender + three.js + WebGL + UnrealEngine',
    headline: '3D MODELING',
    description: 'Convert 2D pictures into 3D models that can be used for websites, applications, video games, or any graphic!',
    description2: 'Can make 3D models, animations, and scenes!',
    description3: 'Can add all into website with use of three.js!',
    imgStart: true,
    shadow: true,
    img: modGif,
    bg: egg5,
    alt: 'theArt',
    tooo: '',
    dark: false,
    primary: true,
    darkText: true,
    topLineS: false

};





export const webDevelopmentPackages = [
    {
      id: "bronze",
      className: "animation1",
      imageBackgroundUrl: "${p1}",
      headerBackgroundUrl: "${c1}",
      title: "Bronze",
      pagesRange: "1-3 Pages",
      price: "$2000",
      features: [
        "5 Interior Pages",
        "Unlimited Revisions",
        "Original Designs",
        "SEO",
        "Image Gallery",
        "Forms"
      ],
      buttonLabel: "Inquire"
    },
    {
      id: "silver",
      className: "animation2",
      imageBackgroundUrl: "${p2}",
      headerBackgroundUrl: "${c2}",
      title: "Silver",
      pagesRange: "4-9 Pages",
      price: "$3000",
      features: [
        "5+ Interior Pages",
        "Unlimited Revisions",
        "Original Designs",
        "SEO",
        "Image Gallery",
        "Forms",
        "Backend Support"
      ],
      buttonLabel: "Inquire"
    },
    {
      id: "premium",
      className: "animation3",
      imageBackgroundUrl: "${p3}",
      headerBackgroundUrl: "${c3}",
      title: "Premium",
      pagesRange: "10-15 Pages",
      price: "$4000",
      features: [
        "5 Interior Pages",
        "Unlimited Revisions",
        "Original Designs",
        "SEO",
        "Image Gallery",
        "Forms",
        "Backend Support",
        "User Authentication"
      ],
      buttonLabel: "Inquire"
    }
  ];

  


  export const designPackages = [
    {
      id: "bronzeDesign",
      className: "animation1",
      imageBackgroundUrl: "${b1}",
      headerBackgroundUrl: "${d1}",
      title: "Bronze Design",
      pagesRange: "1-3 Pages",
      price: "$1000",
      features: [
        "5 Interior Pages",
        "2 Revisions",
        "Original Designs"
      ],
      buttonLabel: "Inquire"
    },
    {
      id: "silverDesign",
      className: "animation2",
      imageBackgroundUrl: "${b2}",
      headerBackgroundUrl: "${d2}",
      title: "Silver Design",
      pagesRange: "4-9 Pages",
      price: "$1800",
      features: [
        "5+ Interior Pages",
        "3 Revisions",
        "Original Designs"
      ],
      buttonLabel: "Inquire"
    },
    {
      id: "premiumDesign",
      className: "animation3",
      imageBackgroundUrl: "${b3}",
      headerBackgroundUrl: "${d3}",
      title: "Premium Design",
      pagesRange: "10-15 Pages",
      price: "$2250",
      features: [
        "5 Interior Pages",
        "3 Revisions",
        "Original Designs"
      ],
      buttonLabel: "Inquire"
    }
  ];
  
  export const additionalServices = [
    {
      id: "3dModeling",
      className: "animation4",
      imageBackgroundUrl: "${b11}",
      headerBackgroundUrl: "${d4}",
      title: "3D Modeling",
      serviceDetail: "1 Model",
      price: "$50",
      features: [
        "Blender",
        "2 Revisions",
        "Original Designs"
      ],
      buttonLabel: "Inquire"
    },
    {
      id: "audioEngineering",
      className: "animation5",
      imageBackgroundUrl: "${b11}",
      headerBackgroundUrl: "${d5}",
      title: "Audio Engineering",
      serviceDetail: "1 Audio Track",
      price: "$50",
      features: [
        "Logic Pro X",
        "Antares Autotune",
        "Waves Plugins",
        "1 Revision",
        "AV Synchronization"
      ],
      buttonLabel: "Inquire"
    }
  ];
  
  