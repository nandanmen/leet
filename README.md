# @narendras/leet

Collection of solutions for various algorithmic challenges, with explanations and playground.

## What's in the box?

The `src` folder contains all of the algorithm problems sorted by its leetcode number:

```
[src]
└── [number]
    ├── index.ts
    └── [problem-name].test.ts
```

Inside a problem's folder:

- `index.ts` &mdash; The file containing the solution itself.
- `[problem name].test.ts` &mdash; Tests for the problem.

## Creating Your Own Solutions

Running `yarn alg new <name> -n [number]` creates a new solutions folder with the given number (or generated if not passed).