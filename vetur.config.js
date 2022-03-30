module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
  },
  projects: [
    {
      root: './hosting/app',
      package: './package.json',
      tsconfig: './tsconfig.json',
    },
    {
      root: './hosting/backyard',
      package: './package.json',
      tsconfig: './tsconfig.json',
    },
  ],
}
