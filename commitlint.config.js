module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        ['fix', 'feat', 'docs', 'chore', 'refactor', 'style', 'test', 'revert'],
      ],
    },
  };