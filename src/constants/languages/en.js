export default {
  code: "en",
  name: "English",
  alfaType: "Latin",
  auth: {
    alert: {
      desc: "OTP code has been sent to your email",
      btn: "Close"
    },
    tabs: ["Login", "Register"],
    button: [
      "Forgot Password?",
      "Login",
      "Register",
      "Send",
      "Verify",
      "Change"
    ],
    title: [
      "Forgot Password",
      "Verification",
      "Change Password",
      "Enter your OTP Code"
    ],
    textInput: {
      username: "Username",
      password: "Password",
      repassword: "Re-type Password",
      email: "Email",
      otpCode: "OTP Code"
    },
    error: {
      require: text => `${text} must be filled in`,
      min: (text, limit) => `minimum ${limit} characters required`,
      validEmail: () => "incorrect email format",
      sameValue: text => `${text} is not the same`,
      incorrect: text => `incorrect ${text}`,
      network: () => `failed to connect to the internet`,
      taken: text => `The ${text} has already been taken`,
      notFound: text => `${text} not found`,
      server: () => `sorry, something went wrong`
    }
  },
  home: {
    button: ["Play Video!", "Learn", "Quiz", "Read Al-Qur'an", "Hija'iyah"]
  },
  setPopUp: {
    title: ["Settings", "Language"],
    button: [
      "Edit Profile",
      "About Us",
      "Developer",
      "Our Supporters",
      "Support Us",
      "Log Out"
    ]
  },
  langPopUp: "Select Language",
  editProfile: {
    title: "Edit Profile",
    subTitle: ["Username", "Email"],
    popUpTitle: ["Full Name", "Change Password"],
    fullName: "Full Name",
    password: "Password",
    textInput: {
      firstName: "First Name",
      lastName: "Last Name",
      newPassword: "New Password",
      confirmPassword: "Confirm Password"
    },
    submitBtn: "Done"
  },
  changeImgPopUp: {
    title: "Options",
    button: ["Take a Photo", "Choose from library"]
  },
  learn: {
    title: "Coming Up Next",
    button: ["Play Video!", "Download", "Favorite", "Quiz"]
  },
  practice: {
    button: ["Submit", "Next", "Try Again", "Done"],
    error: "The answer is more then one",
    options: ["a.", "b.", "c.", "d."],
    alert: [
      {
        title: "Quiz is not available!",
        desc: "This subject does not have any quizzes"
      },
      {
        title: "Warning!",
        desc: "Your answer will not be saved, are you sure want to quit?"
      },
      {
        title: "Video is not available!",
        desc: "This subject does not have video"
      }
    ],
    result: {
      title: status => (status ? "Better Luck Next Time" : "Congratulations!"),
      content: (correct, total) =>
        `You got ${correct} out of ${total} correct answers`
    }
  },
  hijaiyahPlay: {
    alert: [
      {
        title: "Warning!",
        desc: "Your score will not be saved, are you sure want to quit?",
        cancleBtn: "No",
        confirmBtn: "Yes"
      }
    ]
  },
  surah: {
    tabs: ["Full Surah", "By Word"],
    alert: {
      title: "Warning!",
      desc: "The audio will stop, are you sure want to quit?",
      btn: ["Yes", "No"]
    }
  },
  other: ["Select Level", "Search Level", "Select Surah", "Search Surah", "Search Subjects"],
  iqra: {
    help: {
      hijaiyah: `Hijaiyah or Arabic abjab is the Arabic script as It is codified for writing the Arabic language. It is written from right to left, in a cursive style, and includes 28 letters. `,
      harakat: [
        `The harakat, which literally means\n'motions', are the sort vowel marks.`,
        `Small diagonal line placed above\na letter to represent short "a".`,
        `A similiar diagonal line below a letter\nto represent short "i".`,
        `Small curl-like diacritic placed above\na letter to represent short "u".`
      ],
      tanwin: [
        `Tanwin is the addition of final\n"nun" sound to a noun or adjective\nto indicate that it is fully declinable\nand syntactically unmarked of\ndefiniteness.`,
        `represent a short "-an".`,
        `represent a short "-in".`,
        `represent a short "-un".`
      ]
    }
  },  
  play: {
    score: "Score",
    highScore: "High Score",
    help: {
      hijaiyah1: `Choose Hijaiyah from bottom\npanel which is similiar to above.`,
      hijaiyah2: `Choose Hijaiyah which according\nto sound you heard.`,
      harokat1: `Choose the correct Harokat\naccording to sound you heard.`,
      harokat2: `Choose the correct Hijaiyah\nand Harokat according to sound\nyou heard.`,
      tanwin1: `Choose the correct Tanwin\naccording to sound you heard.`,
      tanwin2: `Choose the correct Hijaiyah\nand tanwin according to sound\nyou heard.`
    }
  },
  errorNetwork: {
    title: "Warning!",
    btn: "Reload",
    desc: `Failed to connect to the internet.\nPlease check your connection`
  },
  darjahName: ["Kindergarden", "Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6"],
  downloadVideo: {
    addToFav: {
      title: "Add to favorite",
      btn: "Close",
      desc: `Successfully added to favorites list`
    },
    errAddToFav: {
      title: "Warning !",
      btn: "Close",
      desc: `You have added to the favorites list`
    },
    downloading: {
      title: "Downloading",
      btn: "Cancle"
    },
    downloadExist: {
      title: "Warning!",
      btn: "OK",
      desc: `You have downloaded this video`
    }
  }
}
