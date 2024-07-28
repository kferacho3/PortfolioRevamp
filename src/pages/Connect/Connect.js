import { Environment, Html, Lightformer, OrbitControls, useTexture } from '@react-three/drei';
import { Canvas, useFrame } from "@react-three/fiber";
import emailjs from 'emailjs-com';
import { easing } from 'maath';
import React, { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import Preloader from '../../components/LoadingAnimation/Loading';
import "./Connect.scss";
import {
  CanvasContainer,
  ConnectButton,
  ConnectError,
  ConnectFieldSet,
  ConnectForm,
  ConnectInput,
  ConnectTextArea,
  initalState
} from "./ConnectElements";
import Cthulhus from './Cthulu';
import bg from './resources/bg2.jpg';

const cthuluFast = "https://racho-devs.s3.us-east-2.amazonaws.com/connect/cthulu.gif"; // Adjust path as necessary
const cthuluSlow = "https://racho-devs.s3.us-east-2.amazonaws.com/connect/cthuluMain.gif"; // Adjust path as necessary

function SubmitButton({ onClick }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh position={[0, -1, 0]} onClick={onClick} ref={ref}>
      <boxGeometry args={[2, 0.5, 0.1]} />
      <meshStandardMaterial color="orange" />
      <Html position={[0, 0, 0.6]}>
        <button style={{ width: 200, height: 50, fontSize: '1.5rem' }}>SUBMIT</button>
      </Html>
    </mesh>
  );
}

function ToggleCthulhuButton({ onToggle, showCthulhu }) {
  // Use state to handle which GIF to display
  const [gifSrc, setGifSrc] = useState(cthuluSlow);

  const handleClick = () => {
    // Toggle visibility
    onToggle();
    // Change GIF based on the visibility state
    setGifSrc(showCthulhu ? cthuluSlow : cthuluFast);
  };

  return (
    <div style={{
      cursor: 'pointer',
      position: 'fixed',
      left: '2.5%',
      bottom: '5%',
      width: '50px',
      height: '50px',
      zIndex: 99999999999
    }}>
      <button onClick={handleClick} style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0
      }}>
        <img src={gifSrc} alt="Cthulhu" style={{ width: '50px', height: '50px' }} />
      </button>
    </div>
  );
}





function Bg() {
  const texture = useTexture(bg)
  return (
    <mesh rotation={[0, Math.PI / 1.25, 0]} scale={8}>
      <sphereGeometry />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  )
}

function Env({ perfSucks }) {
  const ref = useRef()
  useFrame((state, delta) => {
    // Animate the environment as well as the camera
    if (!perfSucks) {
      easing.damp3(ref.current.rotation, [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x], 0.2, delta)
      easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 9, 1.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 0.5, delta)
      state.camera.lookAt(0, 0, 0)
    }
  })
  // Runtime environments can be too slow on some systems, better safe than sorry with PerfMon
  return (
    <Environment frames={perfSucks ? 1 : Infinity} preset="city" resolution={256} background blur={100}>
      <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer key={i} intensity={1} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
        ))}
        <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
        <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
        <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
      </group>
      <group ref={ref}>
        <Lightformer intensity={5} form="ring" color="red" rotation-y={Math.PI / 2} position={[-5, 2, -1]} scale={[10, 10, 1]} />
      </group>
      <Bg />
    </Environment>
  )
}


// Function to handle form input changes
function useFormData(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return [formData, handleInput];
}

function Connect({ speed = 1, count = 80, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
// This function validates emails
const [perfSucks, degrade] = useState(false)
const [cursorStyle, setCursorStyle] = useState('default');
const [showCthulhu, setShowCthulhu] = useState(false);

const toggleCthulhu = () => setShowCthulhu(!showCthulhu);

const handleMouseEnter = () => {
  setCursorStyle('default');
};

const handleMouseLeave = () => {
  setCursorStyle('custom');
};
const initialValues = { name: "", email: "", message: "", error: "" };
const [formValues, setFormValues] = useState(initialValues);
const [state, setState] = useState(initalState);
const [error, setError] = useState('');
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
const [name, setName] = useState("");

const handleInput = (e) => {
  const { name, value } = e.target;
 
  
  setState({ ...state, [name]: value });
};

const form = useRef();



    const sendEmail = (e) => {
   
      e.preventDefault();
      setFormErrors(validate(state));
      if (Object.keys(validate(state)).length === 0) {
  
     
      emailjs.sendForm('gmail', 'RachoDevs', form.current, 'asi1IXWXVQKV4AGlS')
        .then((result) => {
            console.log(result.text);
            
       
        }, (error) => {
            console.log(error.text);
         });
        
        }
      
        setState("")
        setIsSubmit(true);
        e.target.reset();
      }

      const validate = (v) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!v.email) {
          errors.email = "Refresh to send another message";
        } else if (!regex.test(v.email)) {
          errors.email = "Refresh to send another message";
        }
        if (!v.name) {
          errors.name = "Name field can't be empty";
        }
    
        if (!v.message) {
          errors.message = "Message field can't be empty";
        }
    
        return errors;
      };
  

  return (
    <CanvasContainer>
      <ToggleCthulhuButton onToggle={toggleCthulhu} isActive={showCthulhu} />
   <Canvas flat gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 20], fov: 50, near: 0.1, far: depth + 30 }}>
   <Suspense fallback={<Preloader/>} >
   {showCthulhu && <Cthulhus/>}

 <OrbitControls maxDistance={8} minDistance={-10} />
<ambientLight intensity={0.5} />
  <pointLight position={[10, 10, 10]} />


<Html html transform scale={0.7} style={{transform: 'translate(-50%, -50%)', position: 'absolute', left: '50%', top:'50%'}} occlude> 

<ConnectForm onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ cursor: 'auto' }} ref={form} onSubmit={sendEmail}>
              <h2>CONTACT FORM</h2>
              <label htmlFor="name">NAME</label>
              <ConnectInput
                type="text"
                id='name'
                name="name"
                value={state.name}
                onChange={handleInput}
                required={true}
              />
              <label htmlFor="email">EMAIL</label>
              <ConnectInput
                type="email"
                id='email'
                name="email"
                value={state.email}
                onChange={handleInput}
                required={true}
              />
              <ConnectFieldSet>
                <legend>WHAT KIND OF SERVICE DO YOU NEED?</legend>
                <label>
                  <input
                    type="radio"
                    value="Website Development"
                    name="service"
                    id='service'
                    checked={state.service === 'Website Development'}
                    onChange={handleInput}
                  />
                  WEBSITE DEVELOPMENT
                </label>
                <label>
                  <input
                    type="radio"
                    value="Web/App Design"
                    name="service"
                    id='service'
                    checked={state.service === 'Web/App Design'}
                    onChange={handleInput}
                  />
                  WEBSITE/APPLICATION DESIGN
                </label>
                <label>
                  <input
                    type="radio"
                    value="3D Model"
                    name="service"
                    id='service'
                    checked={state.service === '3D Model'}
                    onChange={handleInput}
                  />
                  3D MODEL
                </label>
                <label>
                  <input
                    type="radio"
                    value="Svg Graphics"
                    name="service"
                    id='service'
                    checked={state.service === 'Svg Graphics'}
                    onChange={handleInput}
                  />
                  SVG GRAPHICS
                </label>
                <label>
                  <input
                    type="radio"
                    value="Audio Engineering"
                    name="service"
                    id='service'
                    checked={state.service === 'Audio Engineering'}
                    onChange={handleInput}
                  />
                  AUDIO ENGINEERING
                </label>
                <label>
                  <input
                    type="radio"
                    value="AV Synchronization"
                    name="service"
                    id='service'
                    checked={state.service === 'AV Synchronization'}
                    onChange={handleInput}
                  />
                  AV SYNCHRONIZATION
                </label>
              </ConnectFieldSet>
              <ConnectFieldSet>
                <legend>WHAT KIND OF WEBSITE DO YOU NEED?</legend>
                <label>
                  <input
                    type="radio"
                    value="Personal"
                    name="website"
                    id='website'
                    checked={state.website === 'Personal'}
                    onChange={handleInput}
                  />
                  PERSONAL
                </label>
                <label>
                  <input
                    type="radio"
                    value="NFT"
                    name="website"
                    id='website'
                    checked={state.website === 'NFT'}
                    onChange={handleInput}
                  />
                  NFT
                </label>
                <label>
                  <input
                    type="radio"
                    value="Landing Page"
                    name="website"
                    id='website'
                    checked={state.website === 'Landing Page'}
                    onChange={handleInput}
                  />
                  LANDING PAGE
                </label>
                <label>
                  <input
                    type="radio"
                    value="Other"
                    name="website"
                    id='website'
                    checked={state.website === 'Other'}
                    onChange={handleInput}
                  />
                  OTHER (SPECIFY)
                </label>
                <label>
                  <input
                    type="radio"
                    value="None"
                    name="website"
                    id='website'
                    checked={state.website === 'None'}
                    onChange={handleInput}
                  />
                  NONE
                </label>
              </ConnectFieldSet>
              <label htmlFor="message">MESSAGE</label>
              <ConnectTextArea
                id='message'
                name="message"
                value={state.message}
                onChange={handleInput}
                required={true}
              />
              {error && (
                <ConnectError>
                  <p>{error}</p>
                </ConnectError>
              )}
              <ConnectButton type="submit">SEND MESSAGE</ConnectButton>
            </ConnectForm>


        </Html>
 
        <Bg />

</Suspense>
</Canvas>
</CanvasContainer>
  );
}

export default Connect;
