export const animationOne = {
  in: {
    opacity: 1,
    x: -200,
    y: 0
  },
  
  out: {
    opacity: 0,
    x: 300,
    y: '-50vh'
  },

  end: {
    x: 0,
    y: 0,
    opacity: 1
  }
  };

  export const cardVariants = {
    offscreen: {
      x: 300
    },
    onscreen: {
      x: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.9,
        duration: 0.8
      }
    }
  };


  export const BirdEgg = {
  offscreen:{
    zoom: 1,
  x:0,
  y:0,
  opacity:1,
  transition: {type:"spring",
  duration: .8},
  
    onscreen:{ y:'-100vh', zoom: 0.3, opacity:0}
  }
  
};

export const RightToLeft = {
  offscreen: {
    opacity: 1,
    zoom:1,
    y: 0,
    x:0
  },
  onscreen: {
    opacity: 0,
    zoom: 0.3,
    x: '100vw',
    transition: {
      type: "spring",
     
      duration: 0.8
    }
  }
};

export const LeftToRight = {
  offscreen: {
    opacity: 1,
    zoom:1,
    y: 0,
    x:0
  },
  onscreen: {
    opacity: 0,
    zoom: 0.3,
    x: '-100vw',
    transition: {
      type: "spring",
    
      duration: 0.8
    }
  }
};

export const TopToBottom = {
  offscreen: {
    opacity: 1,
    zoom:1,
    y: 0,
    x:0
  },
  onscreen: {
    opacity: 0,
    zoom: 0.3,
    y: '-100vh',
    transition: {
      type: "spring",
      
      duration: 0.8
    }
  }
};

export const BottomToTop = {
  offscreen: {
    opacity: 1,
    zoom:1,
    y: 0,
    x:0
  },
  onscreen: {
    opacity: 0,
    zoom: 0.3,
    y: '100vh',
    transition: {
      type: "spring",
      
      duration: 0.8
    }
  }
};

export const PopIn = {
  offscreen: {
    opacity: 1,
    zoom:1,
    y: 0,
    x:0
  },
  onscreen: {
    opacity: 0,
    zoom: 0.3,

    transition: {
      type: "spring",
     
      duration: 0.8
    }
  }
};

export const mouse = {
  offscreen:{y: 300},
    onscreen:{
      zoom: 1,
    y:0,
    opacity:1,
    rotate:[0,30,0],
    transition: {type:"spring",
    bounce:0.5,
    duration:1}
  }
  
};

  export const animationTwo = {
    in: {
      opacity: 1,
      y: 0,
      zoom: 1
    },
    out: {
      opacity: 0,
      y: '-100vh',
      zoom: 0.3
    },
    end: {
      y: 0,
      opacity: 1
    }
  };
  
  export const animationThree = {
    in: {
      opacity: 1,
      x: -300
    },
    out: {
      opacity: 0,
      x: 300
    },
    end: {
      x: 0,
      opacity: 1
    }
  };
  export const animationText = {
    initial: {
      opacity: 0,
      x: 100
    },
    animate: {
      opacity: 1,
      x: 0
    },
    eixt: {
      x: -100,
      opacity: 0
    }
  };

  export const animationFive = {
    in: {
      opacity: 1,
      x: -300
    },
    out: {
      opacity: 0,
      x: 300
    },
    end: {
      x: 0,
      opacity: 1
    }
  };
  
  export const transition = {
    duration: 0.4
  };