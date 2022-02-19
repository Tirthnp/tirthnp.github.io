// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import pythonIcon from "./images/python.svg"
import neo4jIcon from "./images/neo4j.svg"
import reduxLogo from "./images/redux.png"
import javaLogo from "./images/java.png"
import gitLogo from "./images/git.png"
import linkedinLogo from "./images/linkedIn.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

// Profile Pic
import tirth from "./images/tirth.jpg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Tirth",
  headerTagline: [
    //Line 1 For Header
    "Building web,",
    //Line 2 For Header
    "Forever learning,",
    //Line 3 For Header
    "Creating experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "I am a full stack web developer",

  //Contact Email
  contactEmail: "tnpatel@mun.ca",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "RSI(Relative Strength Index) on Live Etherum Price", //Project Title - Add Your Project Title Here
      para:
        "Calulated RSI for 1 minute candle stick data, used websockets in Python from Binance API", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Tirthnp/etherum_auto_trading_binance",
    },
    {
      title: "Live Crypto Price", //Project Title - Add Your Project Title Here
      para:
        "Made using ReactJS with minified unpkg. Used react hooks and Binance API", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://tirthnp.github.io/CryptoLivePrice/",
    },
    {
      title: "Multiplayer Game", //Project Title - Add Your Project Title Here
      para:
        "Multiplayer game with user authentication, using HTML, CSS and Javascript", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Tirthnp/Multiplyer-Game-in-Javascript-with-User-Authentication",
    },
    {
      title: "Fast Feast Game", //Project Title - Add Your Project Title Here
      para:
        "A 2D Platformer, self scrolling game made in C++", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1521484358791-8c8504da415e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Tirthnp/Fast-Feast",
    },
    {
      title: "Solving Travelling Salesman Problem (TSP) using Evolutionary Algorithm", //Project Title - Add Your Project Title Here
      para:
        "Solving TSP using python with smart initialization and local search, the program dynamically switchs between Mutation and Cross Over", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Tirthnp/Solving-TSP-Using-Evolutionary-Algorithm",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am a Full Stack Software Developer. I am currently learning about Web3 and Cryptography.",
  aboutParaTwo:
    "My aim is to challenge myself everyday with new problems so I can craft myself into a better engineer everyday.",
  aboutParaThree:
    "Learning about new technology, discoveries, inventions, philosophy or just introducing myself to something new fills most of my schedule when I am not working. I am a curious learner and a deep thinker who likes to get acquainted with new piece of knowledge as it is very enriching and fullfilling for me.",
  aboutImage: tirth,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:"HTML",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "Javascript",
    },
    {
      img: reactIcon,
      para:
        "ReactJS",
    },
    {
      img: pythonIcon,
      para:
        "Python",
    },
    {
      img: neo4jIcon,
      para: "Neo4j"
    },
    {
      img: reduxLogo,
      para:
        "Redux",
    },
    {
      img: javaLogo,
      para: "Java"
    },
    {
      img: gitLogo,
      para: "Git"
    }
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  experienceHeading: "Experience",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  jobs:[
    {
      start:"Jan 2020",
      end:"Present",
      title:"Software Developer",
      organization:"Radient360 Inc",
      description:[
        "Participate in the design and technical choicesthat build a SaaS cloud-based product",
        "Work with the software development team todevelop and implement web and mobile software applications",
        "Maintain and improve the performance of existing software applications and utilize JIRA to track issues and tasks throughout the development process and provide solutions by demonstrating problem solving skills",
        "Clearly and regularly communicate with management and technical support colleagues"
      ]
    },
    {
      start:"Jul 2019",
      end:"Oct 2019",
      title:"Web Developer",
      organization:"qualiTeas Inc",
      description:[
        "Front-End and Back-End (FullStack) software building",
        "Making software for chemical analysis"
      ]
    },
    {
      start:"Apr 2019",
      end:"Aug 2019",
      title:"IT Infrastructure Review / Support",
      organization:"SafetyNL",
      description:[
        "Developing a traffic simulator using Unity",
        "Assisting with automation of office tasks",
        "Completing Microsoft Excel work using Python script",
        "Participating in staff information sessions and learning about not-for-profits",
        "General administration tasks"
      ]
    },
    {
      start:"Sep 2017",
      end:"Apr 2018",
      title:"Research Assistant in Education Department",
      organization:"Memorial University",
      description:[
        "Understanding Ethical Compliance bycompleting online simulations/modules orsurveys (CORE 2 Certificate Received)",
        "Conducting effective research and literature analysis related to various educational techniques",
        "Reporting to supervising professor withwork progress sheet every week"
      ]
    },
    {
      start:"Dec 2017",
      end:"Jan 2020",
      title:"Supervisor",
      organization:"Subway",
      description:[
        "Managing Subway outlet and supervising staff",
        "Making sandwiches, baking cookies and completing other kitchen tasks",
        "Customer Servicing and Cash Handling"
      ]
    }
  ],
  // End Promotion Section -----------------

  // Education Section -----------------

  educationHeading:"Education",

  education:[
    {
      organization:"Memorial University of Newfoundland",
      start:"Jan 2017",
      end:"Dec 2019",
      credentials:"Bachelor of Science in Computer Science and Minor in Economics"
    },
    {
      organization:"JG International School",
      start:"Jun 2014",
      end:"May 2016",
      credentials:"International Baccalaureate Diploma (IB)"
    }
  ],

  // Education Section End --------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/tirthnp" },
    { img: linkedinLogo, url: "https://www.linkedin.com/in/tirth18/" }
  ],

  // End Contact Section ---------------
}
