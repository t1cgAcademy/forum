let data = [
  {id: 0, parentID: null},
  {id: 4, parentID: 0},
  {id: 5, parentID: 0},
  {id: 6, parentID: 4},
  {id: 7, parentID: 5},
  {id: 8, parentID: 5},
  {id: 1, parentID: null},
  {id: 9, parentID: 1},
  {id: 10, parentID: 9},
  {id: 11, parentID: 10},
  {id: 12, parentID: 10},
  {id: 13, parentID: 10},
  {id: 2, parentID: null},
  {id: 14, parentID: 2},
  {id: 15, parentID: 2},
  {id: 16, parentID: 14},
  {id: 17, parentID: 15},
  {id: 18, parentID: 16},
  {id: 19, parentID: 17},
  {id: 20, parentID: 17},
  {id: 21, parentID: 17},
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
          parentID: 4,
          replies: []
        },
      ]
    },
    {
      id: 5, 
      parentID: 0,
      replies: [
        {
          id: 7, 
          parentID: 5,
          replies: []
        },
        {
          id: 8, 
          parentID: 5,
          replies: []
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


roots = (data) => {
  let roots = [];
  let newData = [];
  for (let i=0; i<data.length; i++) {
    if (data[i].parentID === null) {
      roots.push(data[i])
    } else {
      newData.push(data[i])
    }
  }
  return {
    roots: roots, 
    data: newData
  }
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
  return {
    children, 
    data: newData
  }
}

buildThread = (root, data) => {
  if (data.length === 0) {
    return thread;
  }
  let c = getChildren(root.id, data);

  let thread = {
    id: root.id,
    parentID: root.parentID,
    replies: c.children.map(child => {
      return buildThread(child, c.data)
    })
  }
  return thread
};

// the functionality is seperated this way in the hopes
// of leveraging mongo indicies to improve runtime
buildForum = (data) => {
  let forum = []
  let r = roots(data)
  for (index in r.roots) {
    forum.push(buildThread(r.roots[index], r.data))
  }
  return forum
}

let f = buildForum(data)
console.log(JSON.stringify(f))
console.log(JSON.stringify(data))