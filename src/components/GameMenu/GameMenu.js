import React from 'react';
import { BlurredBackground } from '../GlobalStyles/GlobalStyles';
import { GameAppContainer, GameGrid, GameImage, GameSquare, GameText } from './GameMenuElements';

const gamesInfo = [
  {
    name: "Shape Shift",
    creator: "Racho",
    controls: "Use mouse to navigate",
    howToPlay: "Avoid obstacles and reach HOME",
    textureURL: "https://racho-devs.s3.us-east-2.amazonaws.com/fun/arcadePoster/ShapeShift.png",
    gameState: 1,
  },
  {
    name: "SkyBlitz",
    creator: "Racho",
    controls: "Use mouse to navigate",
    howToPlay: "Avoid obstacles and reach HOME",
    textureURL: "https://racho-devs.s3.us-east-2.amazonaws.com/fun/arcadePoster/SkyBlitz.png",
    gameState: 2,
  },
  {
    name: "Dropper",
    creator: "Stacks Clone with Twist",
    controls: "Mouse to navigate",
    howToPlay: "Avoid obstacles and reach the bottom",
    textureURL: "https://racho-devs.s3.us-east-2.amazonaws.com/fun/arcadePoster/Dropper.png",
    gameState: 3,
  },
  {
    name: "Stackrz",
    creator: "Stacks Clone with Twist",
    controls: "Space to place the block",
    howToPlay: "Stack blocks as high as you can without toppling",
    textureURL: "https://racho-devs.s3.us-east-2.amazonaws.com/fun/arcadePoster/Stackz.png",
    gameState: 4,
  },
  {
    name: "Pinball 3D",
    creator: "Pmndrs.docs Examples",
    controls: "Arrow keys to control flippers",
    howToPlay: "Use flippers to keep the ball in play and hit targets",
    textureURL: "https://racho-devs.s3.us-east-2.amazonaws.com/fun/arcadePoster/Pinball+3D.png",
    gameState: 5,
  },
  {
    name: "Rollette",
    creator: "Racho",
    controls: "Guide with mouse navigation",
    howToPlay: "Control the pinball and hit targets to score",
    textureURL: "https://racho-devs.s3.us-east-2.amazonaws.com/fun/arcadePoster/Rollette.png",
    gameState: 6,
  },
  {
    name: "Cosmic Flappy Bird",
    creator: "Iphone App store Clone",
    controls: "Space or click to flap",
    howToPlay: "Navigate the bird through the pipes without touching them",
    textureURL: "https://racho-devs.s3.us-east-2.amazonaws.com/fun/arcadePoster/flappyBird.png",
    gameState: 7,
  },
  {
    name: "React Pong",
    creator: "Pmndrs.docs Examples",
    controls: "Mouse to place bets",
    howToPlay: "Normal Ping Pong with reaction testing",
    textureURL: "https://racho-devs.s3.us-east-2.amazonaws.com/fun/arcadePoster/ReactPong.png",
    gameState: 8,
  },
  {
    name: "Spin Block",
    creator: "Racho",
    controls: "Space or click to flap",
    howToPlay: "Navigate the bird through the pipes without touching them",
    textureURL: "https://racho-devs.s3.us-east-2.amazonaws.com/fun/arcadePoster/SpinBlock.png",
    gameState: 9,
  },
  {
    name: "GeoChrome",
    creator: "Racho",
    controls: "Space or click to flap",
    howToPlay: "Navigate the bird through the pipes without touching them",
    textureURL: "https://racho-devs.s3.us-east-2.amazonaws.com/fun/arcadePoster/GeoChrome.png",
    gameState: 0,
  },
  {
    name: "Racho's Project Museum",
    creator: "Flap Studios",
    controls: "Space or click to flap",
    howToPlay: "Navigate the bird through the pipes without touching them",
    textureURL: "https://racho-devs.s3.us-east-2.amazonaws.com/fun/arcadePoster/RachoMuseum.png",
    gameState: 11,
  },
];


const GameAppMenu = ({ isOpen2, setIsOpen2, setGameState }) => {
  const boxVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <GameAppContainer>
        <GameGrid>
          {gamesInfo.map((game, index) => (
            <GameSquare
              key={index}
          
              onClick={() => {
                setGameState(index);
                setIsOpen2(false);
              }}
            >
              <GameImage style={{ backgroundImage: `url(${game.textureURL})` }} />
              <GameText>{game.name}</GameText>
            </GameSquare>
          ))}
        </GameGrid>
      </GameAppContainer>
      <BlurredBackground initial="hidden" animate="visible" variants={containerVariants} />
    </>
  );
};

// Export the component
export default GameAppMenu;
