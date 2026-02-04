module.exports = {
  branches: [
    { name: 'main', channel: 'latest' },
    { name: 'next', channel: 'next', prerelease: true },
  ],
  repositoryUrl: 'https://github.com/OS-pedrogustavobilro/test-semantic-release.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    [
      '@semantic-release/github',
      {
        successComment: false,
        failComment: false,
        releasedLabels: false,
        addReleases: 'bottom',
        releaseNotes: {
          changelogFile: 'CHANGELOG.md'
        }
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ]
};
