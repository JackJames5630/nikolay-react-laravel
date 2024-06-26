import mixins from "./mixins";

const mobileWidth = {
  bp: {
    mobileS: `max-width:330px`,
    mobileM: `max-width:400px`,
    mobileL: `max-width:480px`,
    tabletS: `max-width:600px`,
    tabletL: `max-width:768px`,
    desktopXS: `max-width:900px`,
    desktopS: `max-width:1080px`,
    desktopM: `max-width:1200px`,
    desktopL: `max-width:1400px`,
    desktopXL: `max-width:1600px`,
  },

  mixins,
};

export default mobileWidth;