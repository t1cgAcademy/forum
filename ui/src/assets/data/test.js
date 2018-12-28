export const testData = [
  {
    date: 0,
    type: "post",
    name: "Kruskal",
    summary: "Final exam grades are posted",
    content: "We've released the final exam grade on grades server. We will submit the grades to school system as soon as possible. If you have grading questions, email Prof. Kruskal.",
    replies: [
      {
        date: 1,
        type: "comment",
        name: "Phil",
        content: "What is the cutoff",
        replies: [
          {
            date: 2,
            type: "comment",
            name: "Kruskal",
            content: "Not posted yet",
            replies: [],
          }
        ]
      },
      {
        date: 15,
        type: "comment",
        name: "Anon",
        content: "Are the letter grades on Elms our submitted grades?",
        replies: [],
      }
    ],
  },
  {
    date: 20,
    type: "post",
    name: "Anon",
    summary: "How to see the final?",
    content: "Is there any way I can get a copy of my final and see what I got wrong?",
    replies: [
      {
        date: 22,
        type: "comment",
        name: "Kruskal",
        content: "We can let you take a look at your final. Send me an email.",
        replies: [],
      }
    ]
  },
  {
    date: 100,
    type: "post",
    name: "Phil",
    summary: "Is email a good method to get in contact with the professor?",
    content: "I have some grading concerns I'd like to discuss, I just want to know the best way of getting in contact with the professor.",
    replies: [
      {
        date: 101,
        type: "comment",
        name: "Bob",
        content: "What is the cutoff",
        replies: [
          {
            date: 102,
            type: "comment",
            name: "Bob",
            content: "Blah, nm. ",
            replies: [
              {
                date: 169,
                type: "comment",
                name: "Bob",
                content: "Testing depth",
                replies: [
                  {
                    date: 696,
                    type: "comment",
                    name: "Bob",
                    content: "still going ",
                    replies: [],
                  }
                ],
              }
            ],
          },
          {
            date: 700,
            type: "comment",
            name: "Bob",
            content: "what about here ",
            replies: [],
          }
        ]
      },
      {
        date: 105,
        type: "comment",
        name: "Kruskal",
        content: "In some way, yes.",
        replies: [],
      }
    ],
  },
]
