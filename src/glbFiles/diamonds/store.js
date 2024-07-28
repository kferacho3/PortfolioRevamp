import { createRef } from "react";
import { Vector3 } from "three";
import cover from './Personal2Dmedia/ph7.jpg';

const state = {
  sections: 6,
  pages: 6,
  zoom: 70,
  mouse: [0, 0],
  paragraphs: [
    {
      offset: 0.65,
      factor: 1.75,
      length: 1,
      videoUrls: [],
      header: [""],
      imageUrls: ['https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Desktop/Personal2DIntroDesk.png'],
      imageUrlsMobile: ['https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Mobile/Personal2DIntroLQ.png'],
      mobileImage: "",
      aspect: 1.51,
      text:
        [""]
    },    
 
    {
      offset: 1.25,
      factor: 1.75,
      //header: "Published Websites",
      //image: "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Desktop/PublishedWebsites.png",
      //mobileImage: "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Mobile/PublishedWebsites.png",
      aspect: 1.51,
      videoUrls: [],
    //  text:
    //  "Using the buttons below the floating monitor,, you can browse through previews of websites I've independently developed in the past few years. Clicking on the screen will redirect you to the hosted page, allowing you to delve into and fully explore my design and development skills. I specialize in React JavaScript, particularly in React Three Fiber and the creation of 3D-based websites.",
      length: 6,
      header: ["Published Websites", "MetaTunes", "K & M Renovation and Restoration", "Get Relocate", "Web³ Outfitters", "Feracho Brand"],
      text: [
        "Using the buttons below the floating monitor,, you can browse through previews of websites I've independently developed in the past few years. Clicking on the screen will redirect you to the hosted page, allowing you to delve into and fully explore my design and development skills. I specialize in React JavaScript, particularly in React Three Fiber and the creation of 3D-based websites.",
        "",
        "",
        "",
        "",
        "",
      ],
      websiteUrls: [
        "https://metatunes.com/",
        "https://kandmrenovation.com",
        "https://www.getrelocate.com",
        "https://www.web3outfitters.io/",
        "https://www.feracho.com/",
      ],
      imageUrls: [
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Desktop/PublishedWebsites.png",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PublishedWebsites/MetaTunesScreen.png",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PublishedWebsites/KandMScreen.png",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PublishedWebsites/RelocateScreen.png",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PublishedWebsites/Web3outfittersScreen.png",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PublishedWebsites/FerachoScreen.png",
      ],
      imageUrlsMobile: [
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Mobile/PublishedWebsites.png",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PublishedWebsites/MetaTunesScreen.png",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PublishedWebsites/KandMScreen.png",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PublishedWebsites/RelocateScreen.png",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PublishedWebsites/Web3outfittersScreen.png",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PublishedWebsites/FerachoScreen.png",
      ],
    },  




    {
      offset: 1.85,
      factor: 1.75,
     // header: "School Projects & Github",
     // image: "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Desktop/SchoolProjects.png",
      //mobileImage: "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Mobile/SchoolProjects.png",
      aspect: 1.5,
     // text:
        //"At Georgia Tech, I earned a bachelor's in Computer Science, specializing in Media & Artificial Intelligence threads. Despite losing interest in A.I., I pivoted to become a front-end developer. Here are key projects from my college experience, covering my junior design capstone, coursework in Computer Graphics and Computational Aesthetics, and projects from my A.I. thread, including Machine Learning and Deep Learning.",
        length: 7,
        videoUrls: [],
        header: ["School Projects & Github", "Junior Capstone Project", "Computer Graphics", "Computer Audio", "Computational Aesthetics", "Machine Learning", "Deep Learning"],
        text: [
        "At Georgia Tech, I earned a bachelor's in Computer Science, specializing in Media & Artificial Intelligence threads. Despite losing interest in A.I., I pivoted to become a front-end developer. Here are key projects from my college experience, covering my junior design capstone, coursework in Computer Graphics and Computational Aesthetics, and projects from my A.I. thread, including Machine Learning and Deep Learning.",
          "In this two-semester course, Georgia Tech students collaborated to transform a 2nd Grade Literacy Web Application into a mobile app using the Corona 2D game engine and Solar2DLabs. Emphasis was on meticulous documentation, including iteration plans, visual prototypes, design, UML diagrams, and detailed design documents. The Vertically Integrated Projects (VIP) Program promoted interdisciplinary collaboration, offering undergraduates academic credits and providing faculty and graduate students with design and research opportunities.",
          "This introductory course for the Media Thread at Georgia Tech lays the foundation for syntax-related knowledge in p5.js, processing, and GPU programming (GLSL). Notable for its 3D creative animation project within a p5.js environment, the course assumes no prior graphics experience. Covering fundamental topics like output devices, transformations, and hidden surfaces, it requires only basic linear algebra and computer programming skills. The syllabus extends to GPU programming, ray tracing, polyhedral models, and student-chosen topics toward the course's conclusion.",
          "This course integrates design and HCI evaluation, exploring topics such as perception, sound physics, filters, synthesis, and HCI. Students engage in requirements gathering, participatory design, prototyping, and design refinement based on user feedback. The curriculum delves into the significance of audio in human-computer interaction, its appropriateness across applications, and effective integration into interfaces. Tailored for frontend developers incorporating audio aspects, the course addresses critical questions, including the importance of audio in HCI and strategies for its effective use in interfaces.",
          "In this course, I applied knowledge from previous courses to diverse projects, representing the culmination of my academic journey. Unfortunately, this marks the final year of the course at Georgia Tech, potentially leaving no records. Computational aesthetics, vital in societal and economic contexts, prompts students to devise and test beautification algorithms for colors, music, animations, and more.",
          "This course provides a concise introduction to essential machine learning techniques, emphasizing practical algorithms and their real-world applications. It covers foundational mathematical concepts, including linear algebra, probability, statistics, information theory, and optimization. The exploration spans unsupervised machine learning (clustering, dimensionality reduction, kernel density estimation) and supervised learning (tree-based models, support vector machines, linear classification and regression, neural networks). The structured approach equips students with a solid foundation for applying machine learning effectively to real-world datasets.",
          "Deep Learning is a rapidly advancing set of techniques with broad applications in vision, language, speech, reasoning, and robotics. This course introduces Neural Networks (NNs) basics and explores cutting-edge research in modules covering background, Convolutional NNs, Recurrent NNs, Deep Reinforcement Learning, and Deep Structured Prediction. Instructor lectures and practical homework reinforce theoretical concepts. A final project allows in-depth exploration of a specific Deep Learning area. For instance, my notable project involved optimizing a GANS (Generative Adversarial Model) model for colorizing grayscale images.          ",
        ],
        githubUrls: [
          "https://github.com/rdupre1168/AndroidLiteracyApp",
          "https://github.com/kferacho3/CS-3451-Spring-2021",
          "https://github.com/kferacho3/CS-4590-Computer-Audio",
          "https://github.com/kferacho3/CS-4497-Spring-2022",
          "https://github.com/kferacho3/CS-4641-Sumer-2021",
          "https://github.com/kferacho3/CS-4644-Spring-2022",
        ],
        imageUrls: [
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Desktop/SchoolProjects.png",
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/SchoolProjects/Desktop/JuniorDesign.png",
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/SchoolProjects/Desktop/ComputerGraphics.png",
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/SchoolProjects/Desktop/ComputerAudio.png",
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/SchoolProjects/Desktop/ComputationalAesthetics.png",
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/SchoolProjects/Desktop/MachineLearning.png",
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/SchoolProjects/Desktop/DeepLearning.png",
        ],
        imageUrlsMobile: [
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Mobile/SchoolProjects.png",
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/SchoolProjects/Mobile/JuniorDesign.png",
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/SchoolProjects/Mobile/ComputerGraphics.png",
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/SchoolProjects/Mobile/ComputerAudio.png",
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/SchoolProjects/Mobile/ComputationalAesthetics.png",
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/SchoolProjects/Mobile/MachineLearning.png",
          "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/SchoolProjects/Mobile/DeepLearning.png",
        ],
      },



    {
      offset: 2.45,
      factor: 1.75,
      //header: "Personal Creative Coding Projects",
      //image: "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Desktop/PersonalProjects.png",
     // mobileImage: "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Mobile/PersonalProjects.png",
      aspect: 1.5037,
     // text:
     //   "This is the creative space where I bring my visions to life. Since my junior year of college, I've explored creative coding as a side passion, specializing in music, Fast Fourier Transform (FFT), and geometry. I find joy in sound mapping, painting canvases with music, synchronizing a 3D environment with rhythm, and experimenting with randomized geometries and algorithms, such as supershapes. Below, you'll find snapshots of my creative coding projects in action.",
      length: 7,
      header: ["Personal Creative Coding Projects", "MetaTunes", "MetaTunes Compilation","Geometric Vessel", "Geometric Vessel Compilation", "3D FFT World", "Portrait Planets", "Geometric Supershape World"],
      text: [
        "This is the creative space where I bring my visions to life. Since my junior year of college, I've explored creative coding as a side passion, specializing in music, Fast Fourier Transform (FFT), and geometry. I find joy in sound mapping, painting canvases with music, synchronizing a 3D environment with rhythm, and experimenting with randomized geometries and algorithms, such as supershapes. Below, you'll find snapshots of my creative coding projects in action.",
        "MetaTunes, initiated in early 2022, stands as a venture into the NFT realm that utilized p5.js and FFT for a sound mapping effect. This unique project translates media audio input into a canvas, strategically mapping sounds to create aesthetically appealing and visually stimulating artistic representations of songs. Controlled by FFT manipulation, the resulting coloring and shapes form a dynamic representation of the song input.",
        "The MetaTunes code offers 15+ modes and diverse styles for canvas drawings. Remarkably, no two drawings are alike, ensuring each instance is a distinct visual representation of the same song. The algorithm's complexity guarantees that even with identical inputs, the images generated will always differ.",
        "Taking MetaTunes to the next level, Geometry World presents a 3D representation of music, where the world dynamically responds to the input rhythms. This real-time component introduces color changes and intricate patterns in a 3D field, illuminating the screen with captivating colors as the music plays. Unlike its predecessor, nothing is painted or stored officially; it's a real-time, ephemeral experience.",
        "Here lies a compilation of various popular songs and tracks with different demonstrations of the complexity the Geometric Vessel Visual Aesthetic has t offer ",
        "Portrait Planets, a foundational creative coding project, features a geometric field of elegantly simple shapes orbiting a central planet with a portrait surface. Each rendering of the code is unique, ensuring no two portraits will ever be the same. This project marks one of my initial forays into creative coding.",
        "Elevating the concept of Portrait Planets, this project introduces rainbow super shapes generated through a coded algorithm. Super shapes, briefly defined as (describe briefly), create a diverse visual experience with no two renders ever being identical. This project represents an advanced exploration of geometric aesthetics within the creative coding realm.",
      ],
 

      videoUrls: [
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Desktop/PersonalProjects.mp4",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PersonalProjects/MetaTunes/Desktop/MetaTunes+Main+-+Flatbush+Zombies%2C+SmokeBreak+Interlude.mp4",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PersonalProjects/MetaTunes/Desktop/MetaTunes+Compilation+HQ.mp4",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PersonalProjects/GeometryVessel/Desktop/Geometry+Vessel+Main+-+Stolen+Jars+Folded+Out.mp4",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PersonalProjects/GeometryVessel/Desktop/Geometry+Vessel+Compilation+1.mp4",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PersonalProjects/PortraitPlanets/Desktop/Portrait+Planets+-+Desktop+HQ.mp4",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PersonalProjects/GeometryWorld/Desktop/Geometry+World+-+HQ+Desktop.mp4",
      ],
      videoUrlsMobile: [
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/Projects+2D+Desktop/PersonalProjects.mp4",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PersonalProjects/MetaTunes/Mobile/MetaTunes+Main+-+Flatbush+Zombies%2C+SmokeBreak+Interlude+Mobile+LQ.mp4",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PersonalProjects/MetaTunes/Mobile/MetaTunes+Compilation+Cropped.mp4",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PersonalProjects/GeometryVessel/Mobile/Geometry+Vessel+Main+-+Stolen+Jars+Folded+Out.mp4",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PersonalProjects/GeometryVessel/Mobile/Geometry+Vessel+Compilation+1.mp4",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PersonalProjects/PortraitPlanets/Mobile/Portrait+Planets.mp4",
        "https://racho-devs.s3.us-east-2.amazonaws.com/myProjects/PersonalProjects/GeometryWorld/Mobile/Geometry+World.mp4",
      ],
      
      
    },

  ],
  cover: [
    {   image: cover,},
  ],
  stripes: [
    { offset: 2.5, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: -1.5, offset: 0.1, pos: new Vector3(), scale: 2, factor: 4 },
    { x: -0.5, offset: 0.8, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: 2, offset: 2, pos: new Vector3(), scale: .5, factor: 2.5 },
    { x: -1, offset: 3.5, pos: new Vector3(), scale: 0.35, factor: 0.85 },
    { x: 2, offset: 3, pos: new Vector3(), scale: 0.25, factor: 2 },
        { x: 2, offset: 4, pos: new Vector3(), scale: 1.8, factor: 2 },
    { x: -1.5, offset: 5, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: -2, offset: 5, pos: new Vector3(), scale: .5, factor: 2.5 },

  ],

  ufo: [
    { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 }

  ],
  depthbox: [
    {
      depth: 0,
      color: '#cccccc',
      textColor: '#ffffff',
      text: 'In a void,\nno one could say\nwhy a thing\nonce set in motion\nshould stop anywhere.',
      image: '/images/cAKwexj.jpg',
    },
    {
      depth: -5,
      textColor: '#272727',
      text: 'For why should it stop\nhere rather than here?\nSo that a thing\nwill either be at rest\nor must be moved\nad infinitum.',
      image: '/images/04zTfWB.jpg',
    },
  ],
  lines: [
    { points: [[-20, 0, 0], [-9, 0, 0]], color: "black", lineWidth: 0.5 },
    { points: [[20, 0, 0], [9, 0, 0]], color: "black", lineWidth: 0.5 },
  ],
  top: createRef()
}

export default state

{
  /*

  const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  mouse: [0, 0],
  paragraphs: [
    {
      offset: 0,
      factor: 1.75,
      header: "Intro",
      image: p1,
      aspect: 2.51,
      text: "Two thousand pharmacologists and bio-chemists were subsidized. Six years later it was being produced commercially."
    },
    {
      offset: 1,
      factor: 1.75,
      header: "District 4",
      image: p2,
      aspect: 1.51,
      text: "Two thousand pharmacologists and bio-chemists were subsidized. Six years later it was being produced commercially."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Diamond Road",
      image: p3,
      aspect: 1.5,
      text:
        "The man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less sure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable mystery which it tries, forever vainly, to comprehend."
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Catalina",
      image: p4,
      aspect: 1.5037,
      text:
        "The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from — back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different."
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Building 21",
      image: p5,
      aspect: 0.665,
      text:
        "We’ve found that the people whose EEG doesn’t show any alpha-wave activity when they’re relaxed aren’t likely to respond significantly to the substance. That means that, for about fifteen percent of the population, we have to find other approaches to liberation."
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Sector 8",
      image: p6,
      aspect: 1.55,
      text:
        "By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won’t be compelled by one’s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing."
    },
    { offset: 7, factor: 1.05, header: "The Factory", image: p7, aspect: 1.77, text: "Education and enlightenment." }
  ],
  cover: [
    {   image: cover,},
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 8, factor: 4 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 1.8, factor: 2 },
    //{ x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 }
  ],

  ufo: [
    { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 }

  ],
  depthbox: [
    {
      depth: 0,
      color: '#cccccc',
      textColor: '#ffffff',
      text: 'In a void,\nno one could say\nwhy a thing\nonce set in motion\nshould stop anywhere.',
      image: '/images/cAKwexj.jpg',
    },
    {
      depth: -5,
      textColor: '#272727',
      text: 'For why should it stop\nhere rather than here?\nSo that a thing\nwill either be at rest\nor must be moved\nad infinitum.',
      image: '/images/04zTfWB.jpg',
    },
  ],
  lines: [
    { points: [[-20, 0, 0], [-9, 0, 0]], color: "black", lineWidth: 0.5 },
    { points: [[20, 0, 0], [9, 0, 0]], color: "black", lineWidth: 0.5 },
  ],
  top: createRef()
}
  */
}