const gData = {
  nodes: [
    // Core Skills
    { id: 'Swift', group: 1, size: 15 },
    { id: 'Kotlin', group: 1, size: 15 },
    { id: 'Python', group: 1, size: 15 },
    { id: 'Django', group: 1, size: 15 },
    { id: 'AI/LLM', group: 1, size: 15 },

    // Technologies
    { id: 'SwiftUI', group: 2, size: 10 },
    { id: 'Jetpack Compose', group: 2, size: 10 },
    { id: 'DRF', group: 2, size: 10 },
    { id: 'Celery', group: 2, size: 10 },
    { id: 'Docker', group: 2, size: 10 },
    { id: 'PostgreSQL', group: 2, size: 10 },
    { id: 'LangChain', group: 2, size: 10 },
    { id: 'Ollama', group: 2, size: 10 },
    { id: 'DeepSeek', group: 2, size: 10 },


    // Projects
    { id: 'iOsSig', group: 3, size: 20 },
    { id: 'DigiPromo', group: 3, size: 20 },
    { id: 'SIG Platform', group: 3, size: 20 },
  ],
  links: [
    // Swift
    { source: 'Swift', target: 'SwiftUI' },
    { source: 'Swift', target: 'iOsSig' },
    { source: 'SwiftUI', target: 'iOsSig' },

    // Kotlin
    { source: 'Kotlin', target: 'Jetpack Compose' },
    { source: 'Kotlin', target: 'SIG Platform' },
    { source: 'Jetpack Compose', target: 'SIG Platform' },

    // Python
    { source: 'Python', target: 'Django' },
    { source: 'Python', target: 'DRF' },
    { source: 'Python', target: 'Celery' },
    { source: 'Python', target: 'AI/LLM' },

    // Django
    { source: 'Django', target: 'DigiPromo' },
    { source: 'Django', target: 'SIG Platform' },
    { source: 'DRF', target: 'DigiPromo' },
    { source: 'DRF', target: 'SIG Platform' },
    { source: 'Celery', target: 'SIG Platform' },

    // Data
    { source: 'PostgreSQL', target: 'DigiPromo' },
    { source: 'PostgreSQL', target: 'SIG Platform' },
    { source: 'Docker', target: 'DigiPromo' },
    { source: 'Docker', target: 'SIG Platform' },

    // AI/LLM
    { source: 'AI/LLM', target: 'LangChain' },
    { source: 'AI/LLM', target: 'Ollama' },
    { source: 'AI/LLM', target: 'DeepSeek' },
    { source: 'LangChain', target: 'SIG Platform' },
  ]
};

const Graph = ForceGraph()(document.getElementById('graph'))
    .graphData(gData)
    .numDimensions(3) // Enable 3D
    .nodeId('id')
    .nodeVal('size')
    .nodeLabel('id')
    .nodeAutoColorBy('group') // Color nodes by their group
    .linkSource('source')
    .linkTarget('target')
    .linkDirectionalParticles(1) // Add particles to links for motion
    .linkDirectionalParticleSpeed(0.005)
    .width(document.getElementById('graph').clientWidth)
    .height(600)
    .backgroundColor('rgba(0,0,0,0)')
    .linkColor(() => 'rgba(255,255,255,0.2)')
    .d3AlphaDecay(0.001) // Keep simulation "hot"
    .d3VelocityDecay(0.1) // Reduce velocity decay
    .onNodeHover(node => {
      const graphElem = document.getElementById('graph');
      graphElem.style.cursor = node ? 'pointer' : null;
    })
    .onNodeClick(node => {
        // Center/zoom on node
        Graph.centerAt(node.x, node.y, 1000);
        Graph.zoom(8, 2000);
    });

Graph.d3Force('charge').strength(-200); // Increase repulsion
Graph.d3Force('link').distance(l => 40);
// Removed the setInterval for center movement, as alphaDecay should handle continuous motion