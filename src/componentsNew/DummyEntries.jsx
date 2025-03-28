import { saveEntry } from "./Storage";

const DummyEntry = () => {
  const dummy = [
    {
      title: "Morgenlauf im Nebel",
      date: "2025-03-18",
      image: "https://picsum.photos/400/300?random=1",
      content:
        "Heute früh bin ich durch den dichten Morgennebel gelaufen. Die Stille war fast magisch, nur meine Schritte auf dem feuchten Boden waren zu hören.",
    },
    {
      title: "Kaffee & Kreativität",
      date: "2025-03-19",
      image: "https://picsum.photos/400/300?random=2",
      content:
        "Habe den Nachmittag in meinem Lieblingscafé verbracht, einfach nur geschrieben und Menschen beobachtet. Kreativität fließt mit gutem Kaffee!",
    },
    {
      title: "Spontaner Filmabend",
      date: "2025-03-20",
      image: "https://picsum.photos/400/300?random=3",
      content:
        "Eigentlich wollte ich früh schlafen, aber dann wurde es ein spontaner Filmabend mit Popcorn und einer alten Lieblingskomödie.",
    },
    {
      title: "Sonnenuntergang am See",
      date: "2025-03-21",
      image: "https://picsum.photos/400/300?random=4",
      content:
        "Nach der Arbeit bin ich zum See gefahren und habe einen wunderschönen Sonnenuntergang erlebt. Das Wasser leuchtete in allen Farben!",
    },
    {
      title: "Gartenarbeit & frische Luft",
      date: "2025-03-22",
      image: "https://picsum.photos/400/300?random=5",
      content:
        "Habe den ganzen Vormittag im Garten verbracht – Unkraut gejätet, neue Blumen gepflanzt und dabei richtig abschalten können.",
    },
  ];

  dummy.forEach((element) => {
    saveEntry(element);
  });
};

export default DummyEntry;
