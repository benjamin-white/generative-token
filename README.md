# _*Recursive Scatter*_

A generative art project that scatters points in a 2D space using Poisson Disk sampling and uses a Voronoi graph to connect them. The scattering density is driven by an image displacement map.

**To run the project in a local server:**

```sh
npm i && npm run dev
```

**Each render of the `<canvas />` will produce a random iteration:**

<img src="docs/render-001.png" width="800px"/>
<img src="docs/render-002.png" width="800px"/>
<img src="docs/render-003.png" width="800px"/>
<img src="docs/render-004.png" width="800px"/>
<img src="docs/render-005.png" width="800px"/>
<img src="docs/render-006.png" width="800px"/>

**To build the project to `/dist`:**

```sh
npm run build
```
