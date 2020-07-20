// Function taken from Chapter 7
function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map((r) => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
// Exporting the function as a method of the exports object
exports.buildGraph = buildGraph;
