// let data = [
//   {id: 0, parentID: null},
//   {id: 4, parentID: 0},
//   {id: 5, parentID: 0},
//   {id: 6, parentID: 4},
//   {id: 7, parentID: 5},
//   {id: 8, parentID: 5},
//   {id: 1, parentID: null},
//   {id: 9, parentID: 1},
//   {id: 10, parentID: 9},
//   {id: 11, parentID: 10},
//   {id: 12, parentID: 10},
//   {id: 13, parentID: 10},
//   {id: 2, parentID: null},
//   {id: 14, parentID: 2},
//   {id: 15, parentID: 2},
//   {id: 16, parentID: 14},
//   {id: 17, parentID: 15},
//   {id: 18, parentID: 16},
//   {id: 19, parentID: 17},
//   {id: 20, parentID: 17},
//   {id: 21, parentID: 17},
// ];

let data = [
  // {id: 0, parentID: null},
  {id: 4, parentID: 0},
  {id: 5, parentID: 0},
  {id: 6, parentID: 4},
  {id: 7, parentID: 5},
  {id: 8, parentID: 5},
];

let jsonData = [
 {
   id: 0,
   parentID: null,
   replies: [
    {
      id: 4, 
      parentID: 0,
      replies: [
        {
          id: 6, 
          parentID: 4
        },
      ]
    },
    {
      id: 5, 
      parentID: 0,
      replies: [
        {
          id: 7, 
          parentID: 5
        },
        {
          id: 8, 
          parentID: 5
        },
      ]
    },
   ]
 },
 {
   id: 1, 
   parentID: null,
   replies: [
    {
      id: 9, 
      parentID: 1,
      replies: [
        {
          id: 10, 
          parentID: 9,
          replies: [
            {
              id: 11, 
              parentID: 10,
              replies: []
            },
            {
              id: 12, 
              parentID: 10,
              replies: []
            },
            {
              id: 13, 
              parentID: 10,
              replies: []
            },
          ]
        },
      ]
    },
   ]
 },
 {
   id: 2, 
   parentID: null,
   replies: [
    {
      id: 14, 
      parentID: 2,
      replies: [
        {
          id: 16, 
          parentID: 14,
          replies: [
            {
              id: 18, 
              parentID: 16,
              replies: []
            },
          ]
        },
      ]
    },
    {
      id: 15, 
      parentID: 2,
      replies: [
        {
          id: 17, 
          parentID: 15,
          replies: [
            {
              id: 19, 
              parentID: 17,
              replies: []
            },
            {
              id: 20, 
              parentID: 17,
              replies: []
            },
            {
              id: 21, 
              parentID: 17,
              replies: []
            },
          ]
        },
      ]
    },
   ]
  },
  
];

// step 1: sort by parentID
// step 2: make trees using objects with parentID as null as root
// step 3: 

roots = (data) => {
  let roots = data.filter( d => {
    return d.parentID === null
  })
 
  let r = roots.map(root => {
    root.replies = []
  })
  console.log(roots, r)
  return r
}


// gets all the objects with parentID equal to the id paramenter
// and creates a new data set without those objects
getChildren = (id, data) => {
  let children = []
  let newData = []

  for (let i=0; i<data.length;i++) {
    if (data[i].parentID === id) {
      children.push(data[i])
    } else {
      newData.push(data[i])
    }
  }
  return children, newData
}

// {id: 0, parentID: null},
// {id: 4, parentID: 0},
// {id: 5, parentID: 0},
// {id: 6, parentID: 4},
// {id: 7, parentID: 5},
// {id: 8, parentID: 5},
buildThread = (data) => {
  // list of all nodes not yet visited
  let queue = [];

  let root, data = getChildren(null, data)

  let currentNode = root
  let currentChildren, data = getChildren(currentNode.id, data)
  currentNode.replies = currentChildren
  
  while (currentChildren.length > 0) {
    currentNode = currentChildren.pop()
    currentChildren = getChildren(currentNode.id, data)

  }
}

// buildThread = (posts, thread = []) => {
//   if (posts.length === 0) {
//     return thread;
//   }
// };

let r = roots(data)
console.log(r)