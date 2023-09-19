// Algorithm Challenges
// The Dojo Collection
// Chapter_17_Graphs

//  Edge List Exercise 1
// Create edge lists for the following graphs A, B and C.
// Graph A
// Graph B
// Graph C

//  Edge List Exercise 2
// Draw graphs for the following edge lists:
// [[A,C],[B,D],[C,E],[D,A],[E,B]]
// [[A,C],[A,D],[B,C],[B,D],[C,B],[D,A],[D,C]]
// [[A,A],[A,B],[B,C],[C,B],[C,D],[D,E],[D,A]]

//  Adjacency Map Exercise 1
// Build adjacency maps for the following graphs. As above, treat vertex A as [0], B as [1], C as [2]. As is a default for adjacency maps, in these maps represent “source == destination” with a weight of 0.

// Graph A
// Graph B
// Graph C

//  Adjacency Map Exercise 2
// Draw graphs for the following maps:
// [[ 0,-1, 1, 1],
// [-1, 0, 1, 1],
// [ 1,-1, 0,-1],
// [-1, 1, 1, 0]]

// [[ 1, 1,-1,-1,-1],
// [-1, 0, 1,-1,-1],
// [-1, 1, 0, 1,-1],
// [ 1,-1,-1, 0, 1],
// [-1,-1, 1,-1, 0]]

// [[ 0,-1, 1,-1,-1],
// [-1, 0,-1, 1,-1],
// [-1,-1, 0,-1, 1],
// [ 1,-1,-1, 0,-1],
// [-1, 1,-1,-1, 0]]

//  Adjacency List Exercise 1
// Create adjacency lists for the following graphs. As earlier, make vertex A [0], make B [1], C [2], etc.
// Graph A
// Graph B
// Graph C

//  Adjacency List Exercise 2
// Draw graphs for these adjacency lists:
// [[C,D],[C,D],[B],[A,C]]
// [[C,E],[A,D],[B,E],[A,C],[B,D]]
// [[A,B],[C],[B,D],[A,E],[]]
// [[B,C,H],[D,E],[D,H],[E],[],[E],[B,F],[F,G]]

//  Edge List Implementation
// Now you build them! Using the descriptions that we have given you, create a class that uses the Edge List paradigm to represent a graph. Your ELGraph class should have the following methods:

// addVertex(value) // return vertID
// removeVertex(vertID) // true:removed. false:unfound
// getVertexValue(vertID) // return value
// setVertexValue(vertID, value) // true:set. false:unfound
// addEdge(vertID1, vertID2, value) // true:added. false:unfound
// removeEdges(vertID) // delete all edges to/from vert
// removeEdge(vertID1, vertID2) // true:removed. false:unfound
// getEdgeValue(vertID1, vertID2) // return value
// setEdgeValue(vertID1, vertID2, value) // true:set. false:unfound
// adjacent(vertID1, vertID2) // true:vert1->vert2. false:not
// neighbors(vertID) // return [adjacent vertIDs]

//  Adjacency Map Implementation
// Using the descriptions that we have given you, create a class that uses the Adjacency Map paradigm to represent a graph. Your AMGraph class should have the same methods that your ELGraph class does.

//  Adjacency List Implementation
// Using the descriptions that we have given you, create a class that uses the Adjacency List paradigm to represent a graph. ALGraph should have the same methods as ELGraph and AMGraph.

//  Someone on the Inside
// Everybody knows that it is easier to get a job at a company when you know someone that already works there – you can learn the culture, what technologies they use, what teams are hiring, etc. – all before making official contact! Using graph operations, determine whether you know someone “on the inside” at your target company, and if so, who. You are given an undirected graph (representing your social network), your own vertex ID, and an array of vertex IDs for those working at the company.

// Second: often you won’t know anyone “on the inside” at your target. If so, find one of your contacts that does, returning vertex IDs for contact and insider. Can you optimize the performance of your solution?

//  Vertex Is Reachable
// Given a generalized graph and two vertex IDs, return whether a path exists from first to second vertex.

// Second: on success, return array of vertex IDs representing one possible path. If none exist, return [].

//  All Paths
// Given a graph, as well as IDs for source and destination vertices, return an array of all possible paths from source to destination. A path cannot revisit a vertex. If no path exists, return an empty array.

//  Shortest Path
// Given an unweighted graph as well as IDs for source and destination vertices, find a path that requires minimal fewest edges. Return this path as an array of vertex IDs, or [] if no path exists.

//  Gimme Three Steps
// Given undirected graph and ID for start vertex, return IDs for vertices three or fewer edges away.

//  Easy to Get There
// Given directed graph, return [vertID] for vertices with more incoming edges than outgoing edges.

//  Graph: Is DAG
// Given a graph, determine whether it is a Directed Acyclic Graph.

//  DAG to Array
// Given a DAG, TopoSort its vertices (create array of vertex IDs so each edge moves forward in array). Combine with previous solution to return the vertex array if graph is DAG, or [] if not.

//  Weekend Challenge: Word Ladder
// Given two words, list intermediate words that change a letter at a time, transforming one into other. Use www-01.sil.org/linguistics/wordlists/english/wordlist/wordsEn.txt. Return a chain of valid intermediate words that connect the two given words.

// Second: Return only the minimal-length chain. If there is more than one, return the first.

// Third: Return all the minimal-length word chains found (not just the first one).

// Fourth: return the minimal-length chain with the highest Scrabble letter score!

