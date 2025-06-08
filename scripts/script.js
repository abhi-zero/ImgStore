const tl = gsap.timeline({ repeat: -1 });

tl.to(
  ".heading.one",
  {
    opacity: 1,
    duration: 1.5,
    x: 0,
  },
  "one"
)
  .to(
    ".description.one",
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
    },
    "one"
  )
  .to(
    ".image.one",
    {
      opacity: 1,
      duration: 1.5,
      x: "0%",
    },
    "one"
  )
  .to(
    ".indicator.one",
    {
      duration: 1.5,
      backgroundColor: "black",
    },
    "one"
  )
  .to(
    ".heading.one",
    {
      delay: 3,
      opacity: 0,
      duration: 1.5,
      y: "-100%",
    },
    "endone"
  )
  .to(
    ".description.one",
    {
      delay: 3,
      opacity: 0,
      duration: 1.5,
      x: "20%",
    },
    "endone"
  )
  .to(
    ".image.one",
    {
      delay: 3,
      opacity: 0,
      duration: 1.5,
      x: "100%",
    },
    "endone"
  )
  .to(
    ".indicator.one",
    {
      delay: 3,
      duration: 1.5,
      backgroundColor: "grey",
    },
    "endone"
  )

  .to(
    ".heading.second",
    {
      opacity: 1,
      duration: 1.5,
      x: 0,
    },
    "second"
  )
  .to(
    ".description.second",
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
    },
    "second"
  )
  .to(
    ".image.second",
    {
      opacity: 1,
      duration: 1.5,
      x: "0%",
    },
    "second"
  )
  .to(
    ".indicator.second",
    {
      duration: 1.5,
      backgroundColor: "black",
    },
    "second"
  )
  .to(
    ".heading.second",
    {
      delay: 3,
      opacity: 0,
      duration: 1.5,
      y: "-100%",
    },
    "endsecond"
  )
  .to(
    ".description.second",
    {
      delay: 3,
      opacity: 0,
      duration: 1.5,
      x: "20%",
    },
    "endsecond"
  )
  .to(
    ".image.second",
    {
      delay: 3,
      opacity: 0,
      duration: 1.5,
      x: "100%",
    },
    "endsecond"
  )
  .to(
    ".indicator.second",
    {
      delay: 3,
      duration: 1.5,
      backgroundColor: "grey",
    },
    "endsecond"
  )

  .to(
    ".heading.third",
    {
      opacity: 1,
      duration: 1.5,
      x: 0,
    },
    "third"
  )
  .to(
    ".description.third",
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
    },
    "third"
  )
  .to(
    ".image.third",
    {
      opacity: 1,
      duration: 1.5,
      x: "0%",
    },
    "third"
  )
  .to(
    ".indicator.third",
    {
      duration: 1.5,
      backgroundColor: "black",
    },
    "third"
  )
  .to(
    ".heading.third",
    {
      delay: 3,
      opacity: 0,
      duration: 1.5,
      y: "-100%",
    },
    "endthird"
  )
  .to(
    ".description.third",
    {
      delay: 3,
      opacity: 0,
      duration: 1.5,
      x: "20%",
    },
    "endthird"
  )
  .to(
    ".image.third",
    {
      delay: 3,
      opacity: 0,
      duration: 1.5,
      x: "100%",
    },
    "endthird"
  )
  .to(
    ".indicator.third",
    {
      delay: 3,
      duration: 1.5,
      backgroundColor: "grey",
    },
    "endthird"
  );

gsap.to(".more-learn-section i", {
  x: 10,
  duration: 0.6,
  repeat: -1,
  yoyo: true,
});
