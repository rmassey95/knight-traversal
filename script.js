const NodeFactory = (move, edge = [], prevNode = null, distance = null) => {
  this.move = move;
  this.edge = edge;
  this.prevNode = prevNode;
  this.distance = distance;

  return { move, edge, prevNode, distance };
};

const Tree = () => {
  const possibleMoves = [
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
  ];

  let graph = [];

  for (let i = 0; i < 8; i++) {
    for (let x = 0; x < 8; x++) {
      let node = NodeFactory([i, x]);

      let moves = [];

      for (let e = 0; e < possibleMoves.length; e++) {
        let arr = [];
        arr.push(node.move[0] + possibleMoves[e][0]);
        arr.push(node.move[1] + possibleMoves[e][1]);

        if (arr[0] >= 0 && arr[0] <= 7 && arr[1] >= 0 && arr[1] <= 7) {
          moves.push(arr);
        }
      }

      node.edge = moves;

      graph.push(node);
    }
  }

  const find = (pos) => {
    for (let i = 0; i < graph.length; i++) {
      if (pos[0] == graph[i].move[0] && pos[1] == graph[i].move[1]) {
        return graph[i];
      }
    }
  };

  const knightMoves = (pos, end, queue = [], first = true) => {
    let node = find(pos);

    if (first) {
      node.distance = 0;
      first = false;
    }

    if (node.move[0] === end[0] && node.move[1] === end[1]) {
      return node;
    }

    let prevNode = node;
    node.edge.forEach((edge) => {
      if (find(edge).distance === null) {
        queue.push(edge);
        find(edge).prevNode = prevNode;
        find(edge).distance = prevNode.distance + 1;
      }
    });

    return knightMoves(queue.shift(), end, queue, first);
  };

  return { knightMoves };
};

const bst = Tree();

const printMoves = (node) => {
  if (node === null) {
    return;
  }

  printMoves(node.prevNode);

  console.log(`[${node.move[0]},${node.move[1]}]`);
};

const convertToInt = (arr) => {
  return arr.map((ele) => parseInt(ele));
};

const getInput = (e) => {
  e.preventDefault();
  const bst = Tree();
  console.log(e.target[0].value);
  let start = e.target[0].value.split(",");
  let end = e.target[1].value.split(",");
  start = convertToInt(start);
  end = convertToInt(end);

  let endNode = bst.knightMoves(start, end);
  console.log(`You made it in ${endNode.distance} moves! Here's your path:`);
  printMoves(endNode);
};

const form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", getInput);
