import React from 'react';
import {
  ApplicationGrid,
  ApplicationIcon,
  FeaturedApplication,
  Logo,
  SidebarContainer,
  SidebarIcon,
  SidebarIconBg,
  SidebarIconContainer,
  SidebarIconText,
  SidebarLink,
  SidebarWrapper,
  TextSpan
} from './SidebarElements';
import feat from './SidebarImg/feaaturedSidebar.png';
import github from './SidebarImg/githubBit.svg';
import iconBg from './SidebarImg/iconBg.svg';
import linkdin from './SidebarImg/linkdinBit.svg';
import resume from './SidebarImg/resumeBit.svg';
import img1 from './SidebarImg/sidebar1.png';
import img2 from './SidebarImg/sidebar2.png';
import img3 from './SidebarImg/sidebar3.png';
import img4 from './SidebarImg/sidebar4.png';
import img5 from './SidebarImg/sidebar5.png';
import img8 from './SidebarImg/sidebar8.png';
const logo = 'https://racho-devs.s3.us-east-2.amazonaws.com/Images/RachoDevsLogo.png';
const Sidebar = ({isOpen, toggle}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      };
      const imageVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
            delay: 0.2, // Adjust as needed
          }
        },
      };
      
      const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
          },
        },
      };
      const handleClick1 = () => {
        window.open("https://discord.gg/swwnG3kpz5");
      };
      const handleClick2 = () => {
        window.open("https://github.com/kferacho3");
      };
      const handleClick3 = () => {
        window.open("https://linkedin.com/in/kamal-feracho-075a5a1aa");
      };

      
    return (
        <SidebarContainer  isOpen={isOpen}
         initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={containerVariants}
   > 
          
            <SidebarWrapper>
            <Logo src={logo} variants={imageVariants} initial="hidden" animate="visible" />
            <ApplicationGrid>
          <FeaturedApplication bgImage={feat}  variants={itemVariants} initial="hidden" animate="visible">
            <SidebarLink to='/portfolio' onClick={toggle}><TextSpan>Portfolio</TextSpan></SidebarLink>
          </FeaturedApplication>
          {/* List of applications */}

          
          <ApplicationIcon to='/' onClick={toggle} bgImage={img1} variants={itemVariants}>
            <SidebarLink ><TextSpan>intro()</TextSpan></SidebarLink>
          </ApplicationIcon>
         
          <ApplicationIcon to='/about' onClick={toggle} bgImage={img2} variants={itemVariants}>
            <SidebarLink ><TextSpan>about()</TextSpan></SidebarLink>
          </ApplicationIcon>
          <ApplicationIcon to='/services' onClick={toggle} bgImage={img3} variants={itemVariants}>
            <SidebarLink ><TextSpan>services()</TextSpan></SidebarLink>
          </ApplicationIcon>

          <ApplicationIcon to='/connect' onClick={toggle} bgImage={img5} variants={itemVariants}>
            <SidebarLink ><TextSpan>connect()</TextSpan></SidebarLink>
          </ApplicationIcon>
          <ApplicationIcon  to='/fun' onClick={toggle} bgImage={img8} variants={itemVariants}>
            <SidebarLink ><TextSpan>funArcade()</TextSpan></SidebarLink>
          </ApplicationIcon>
          <ApplicationIcon to='/museum' onClick={toggle} bgImage={img4} variants={itemVariants}>
            <SidebarLink ><TextSpan>museum3D()</TextSpan></SidebarLink>
          </ApplicationIcon>
    
          {/* Add more ApplicationIcon components for each application */}
          
        </ApplicationGrid>
        <SidebarIconContainer>
    <SidebarIconBg style={{ backgroundImage: `url(${iconBg})` }}>
        <SidebarIcon style={{ backgroundImage: `url(${resume})` }} onClick={handleClick1} target='_blank'/>
        <SidebarIconText>Resume</SidebarIconText>
    </SidebarIconBg>

    <SidebarIconBg style={{ top: `80px`, backgroundImage: `url(${iconBg})` }}>
        <SidebarIcon style={{ backgroundImage: `url(${github})` }} onClick={handleClick2} target='_blank'/>
        <SidebarIconText>Github</SidebarIconText>
    </SidebarIconBg>

    <SidebarIconBg style={{ backgroundImage: `url(${iconBg})` }}>
        <SidebarIcon style={{ backgroundImage: `url(${linkdin})` }} onClick={handleClick3} target='_blank'/>
        <SidebarIconText>LinkedIn</SidebarIconText>
    </SidebarIconBg>
</SidebarIconContainer>

        {/*
                <SideBtnWrap variants={itemVariants}>
                    <SidebarRoute >
                    fun()
                    </SidebarRoute>
                </SideBtnWrap>
       */ }
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
