/*
    export const fretboardSnapshot = {
    noteColor: "rgba(255,0,0,1)", // default noteColor
    fretColor: "rgba(255,0,0,.2)", // default fretColor
    string: {
        // stringPosition - [1:6]
        6: {
        noteColor: "rgba(0,0,255,1)", // precedence hover .noteColor
        fretColor: "rgba(255,0,0,.2)", // precedence hover .fretColor
        fret: {
            // fretPosition - [1:n]
            3: {
            note: true,
            left: false,
            right: true,
            noteColor: "rgba(0,0,255,1)", // precedence hover .noteColor and .string[stringPosition].noteColor
            fretColor: "rgba(255,0,0,.2)", // precedence hover .fretColor and .string[stringPosition].fretColor
            },
        },
        },
    },
    };
*/

// Scales

export const gMajor = {
  name: "G Major Scale - G Ionian - 1st position",
  noteColor: "rgba(255,0,0,1)",
  fretColor: "rgba(0,0,255,.2)",
  string: {
    6: {
      fret: {
        3: {
          note: true,
          left: false,
          right: true,
        },
        4: {
          note: false,
          left: true,
          right: true,
        },
        5: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    5: {
      //   noteColor: "rgba(0,0,255,1)",
      fret: {
        2: {
          note: true,
          left: false,
          right: true,
          //   noteColor: "rgba(0,255,0,1)",
        },
        3: {
          note: true,
          left: true,
          right: true,
        },
        4: {
          note: false,
          left: true,
          right: true,
        },
        5: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    4: {
      fret: {
        2: {
          note: true,
          left: false,
          right: true,
        },
        3: {
          note: false,
          left: true,
          right: true,
        },
        4: {
          note: true,
          left: true,
          right: true,
        },
        5: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    3: {
      fret: {
        2: {
          note: true,
          left: false,
          right: true,
        },
        3: {
          note: false,
          left: true,
          right: true,
        },
        4: {
          note: true,
          left: true,
          right: true,
        },
        5: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    2: {
      fret: {
        3: {
          note: true,
          left: false,
          right: true,
        },
        4: {
          note: false,
          left: true,
          right: true,
        },
        5: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    1: {
      fret: {
        2: {
          note: true,
          left: false,
          right: true,
        },
        3: {
          note: true,
          left: true,
          right: true,
        },
        4: {
          note: false,
          left: true,
          right: true,
        },
        5: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
  },
};

export const amMajor = {
  name: "G Major Scale - A Dorian - 2nd position",
  noteColor: "rgba(255,0,0,1)",
  fretColor: "rgba(0,0,255,.2)",
  string: {
    6: {
      fret: {
        5: {
          note: true,
          left: false,
          right: true,
        },
        6: {
          note: false,
          left: true,
          right: true,
        },
        7: {
          note: true,
          left: true,
          right: true,
        },
        8: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    5: {
      fret: {
        5: {
          note: true,
          left: false,
          right: true,
        },
        6: {
          note: false,
          left: true,
          right: true,
        },
        7: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    4: {
      fret: {
        4: {
          note: true,
          left: false,
          right: true,
        },
        5: {
          note: true,
          left: true,
          right: true,
        },
        6: {
          note: false,
          left: true,
          right: true,
        },
        7: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    3: {
      fret: {
        4: {
          note: true,
          left: false,
          right: true,
        },
        5: {
          note: true,
          left: true,
          right: true,
        },
        6: {
          note: false,
          left: true,
          right: true,
        },
        7: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    2: {
      fret: {
        5: {
          note: true,
          left: false,
          right: true,
        },
        6: {
          note: false,
          left: true,
          right: true,
        },
        7: {
          note: true,
          left: true,
          right: true,
        },
        8: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    1: {
      fret: {
        5: {
          note: true,
          left: false,
          right: true,
        },
        6: {
          note: false,
          left: true,
          right: true,
        },
        7: {
          note: true,
          left: true,
          right: true,
        },
        8: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
  },
};

export const bMajor = {
  name: "G Major Scale - B Phrygian - 3rd position",
  noteColor: "rgba(255,0,0,1)",
  fretColor: "rgba(0,0,255,.2)",
  string: {
    6: {
      fret: {
        7: {
          note: true,
          left: false,
          right: true,
        },
        8: {
          note: true,
          left: true,
          right: true,
        },
        9: {
          note: false,
          left: true,
          right: true,
        },
        10: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    5: {
      fret: {
        7: {
          note: true,
          left: false,
          right: true,
        },
        8: {
          note: false,
          left: true,
          right: true,
        },
        9: {
          note: true,
          left: true,
          right: true,
        },
        10: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    4: {
      fret: {
        7: {
          note: true,
          left: false,
          right: true,
        },
        8: {
          note: false,
          left: true,
          right: true,
        },
        9: {
          note: true,
          left: true,
          right: true,
        },
        10: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    3: {
      fret: {
        7: {
          note: true,
          left: false,
          right: true,
        },
        8: {
          note: false,
          left: true,
          right: true,
        },
        9: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    2: {
      fret: {
        7: {
          note: true,
          left: false,
          right: true,
        },
        8: {
          note: true,
          left: true,
          right: true,
        },
        9: {
          note: false,
          left: true,
          right: true,
        },
        10: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    1: {
      fret: {
        7: {
          note: true,
          left: false,
          right: true,
        },
        8: {
          note: true,
          left: true,
          right: true,
        },
        9: {
          note: false,
          left: true,
          right: true,
        },
        10: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
  },
};

export const dMajor = {
  name: "G Major Scale - D Mixolyd - 4th position",
  noteColor: "rgba(255,0,0,1)",
  fretColor: "rgba(0,0,255,.2)",
  string: {
    6: {
      fret: {
        10: {
          note: true,
          left: false,
          right: true,
        },
        11: {
          note: false,
          left: true,
          right: true,
        },
        12: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    5: {
      fret: {
        9: {
          note: true,
          left: false,
          right: true,
        },
        10: {
          note: true,
          left: true,
          right: true,
        },
        11: {
          note: false,
          left: true,
          right: true,
        },
        12: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    4: {
      fret: {
        9: {
          note: true,
          left: false,
          right: true,
        },
        10: {
          note: true,
          left: true,
          right: true,
        },
        11: {
          note: false,
          left: true,
          right: true,
        },
        12: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    3: {
      fret: {
        9: {
          note: true,
          left: false,
          right: true,
        },
        10: {
          note: false,
          left: true,
          right: true,
        },
        11: {
          note: true,
          left: true,
          right: true,
        },
        12: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    2: {
      fret: {
        10: {
          note: true,
          left: true,
          right: true,
        },
        11: {
          note: false,
          left: true,
          right: true,
        },
        12: {
          note: true,
          left: true,
          right: true,
        },
        13: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    1: {
      fret: {
        10: {
          note: true,
          left: true,
          right: true,
        },
        11: {
          note: false,
          left: true,
          right: true,
        },
        12: {
          note: true,
          left: true,
          right: true,
        },
        13: {
          note: false,
          left: true,
          right: true,
        },
        14: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
  },
};

export const eMajor = {
  name: "G Major Scale - E Aeolian - 5th position",
  noteColor: "rgba(255,0,0,1)",
  fretColor: "rgba(0,0,255,.2)",
  string: {
    6: {
      fret: {
        12: {
          note: true,
          left: false,
          right: true,
        },
        13: {
          note: false,
          left: true,
          right: true,
        },
        14: {
          note: true,
          left: true,
          right: true,
        },
        15: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    5: {
      fret: {
        12: {
          note: true,
          left: false,
          right: true,
        },
        13: {
          note: false,
          left: true,
          right: true,
        },
        14: {
          note: true,
          left: true,
          right: true,
        },
        15: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    4: {
      fret: {
        12: {
          note: true,
          left: false,
          right: true,
        },
        13: {
          note: false,
          left: true,
          right: true,
        },
        14: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    3: {
      fret: {
        11: {
          note: true,
          left: false,
          right: true,
        },
        12: {
          note: true,
          left: true,
          right: true,
        },
        13: {
          note: false,
          left: true,
          right: true,
        },
        14: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    2: {
      fret: {
        12: {
          note: true,
          left: false,
          right: true,
        },
        13: {
          note: true,
          left: true,
          right: true,
        },
        14: {
          note: false,
          left: true,
          right: true,
        },
        15: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
    1: {
      fret: {
        12: {
          note: true,
          left: false,
          right: true,
        },
        13: {
          note: false,
          left: true,
          right: true,
        },
        14: {
          note: true,
          left: true,
          right: true,
        },
        15: {
          note: true,
          left: true,
          right: false,
        },
      },
    },
  },
};

// chords

export const aChord = {
  name: "A major",
  noteColor: "rgba(255,0,0,1)",
  fretColor: "rgba(0,0,255,.2)",
  string: {
    4: {
      fret: {
        2: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
    3: {
      fret: {
        2: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
    2: {
      fret: {
        2: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
  },
};

export const eChord = {
  name: "E major",
  noteColor: "rgba(255,0,0,1)",
  fretColor: "rgba(0,0,255,.2)",
  string: {
    5: {
      fret: {
        2: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
    4: {
      fret: {
        2: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
    3: {
      fret: {
        1: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
  },
};

export const cChord = {
  name: "C major",
  noteColor: "rgba(255,0,0,1)",
  fretColor: "rgba(0,0,255,.2)",
  string: {
    5: {
      fret: {
        3: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
    4: {
      fret: {
        2: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
    2: {
      fret: {
        1: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
  },
};

export const dChord = {
  name: "D major",
  noteColor: "rgba(255,0,0,1)",
  fretColor: "rgba(0,0,255,.2)",
  string: {
    3: {
      fret: {
        2: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
    2: {
      fret: {
        3: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
    1: {
      fret: {
        2: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
  },
};

export const gChord = {
  name: "G major",
  noteColor: "rgba(255,0,0,1)",
  fretColor: "rgba(0,0,255,.2)",
  string: {
    6: {
      fret: {
        3: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
    5: {
      fret: {
        2: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
    2: {
      fret: {
        3: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
    1: {
      fret: {
        3: {
          note: true,
          left: false,
          right: false,
        },
      },
    },
  },
};
