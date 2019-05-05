module.exports = {
  extends: [
    'airbnb',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  rules: {
    // 禁止使用commonjs规范
    'import/no-unresolved': "off",
    'import/no-extraneous-dependencies': ['warn', {
      devDependencies: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'spec/**', // mocha, rspec-like pattern
        '**/__tests__/**', // jest pattern
        'test.{js,jsx}', // repos with a single test file
        'test-*.{js,jsx}', // repos with multiple top-level test files
        '**/*.{test,spec}.{js,jsx}', // tests where the extension denotes that it is a test
        '**/jest.config.js', // jest config
        '**/webpack.config.js', // webpack config
        '**/webpack.config.*.js', // webpack config
        '**/rollup.config.js', // rollup config
        '**/rollup.config.*.js', // rollup config
        '**/gulpfile.js', // gulp config
        '**/gulpfile.*.js', // gulp config
        '**/Gruntfile{,.js}', // grunt config
        '**/protractor.conf.js', // protractor config
        '**/protractor.conf.*.js', // protractor config
      ],
      optionalDependencies: false,
    }],
    // jsx 使用 4 空格缩进
    // 使用 jsx-indent 限制即可
    'react/jsx-closing-tag-location': 'off',
    // 优化显示
    'react/jsx-max-props-per-line': [2, { "maximum": 1 }],
    // propTypes 不需要限制的这么严格
    'react/forbid-prop-types': 'off',
    // 考虑到可读性、跨工程协作开发效率，最终开启为 airbnb 标准规范
    // 'react/sort-comp': 'off',
    // 存在部分数据确实没有 key，只能使用 索引 作为key，故调整为 warn，提示开发者注意
    'react/no-array-index-key': 'warn',
    // 部分场景下，需要进行参数绑定
    'react/jsx-no-bind': 'warn',
    // 考虑到版本兼容性 -> 兼容问题在工程中处理
    'react/prefer-stateless-function': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    // 根据实际情况判断使用即可
    'react/jsx-no-target-blank': 'off',
    // 在某些组件化方案中，id的设置可能是无效的，具体看情况使用即可（此规则即将被废弃）
    'jsx-a11y/label-has-for': 'off',
    // 集合内的标签都需要有alt属性，对aria很有意义，但是实践上，暂时不太会用到
    'jsx-a11y/alt-text': 'off',
    // 所有静态标签都不能添加事件，语义上很有意义，但是实践中一般为了减少标签数量，还是会添加事件
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'indent': ['error', 2],
    'react/jsx-filename-extension': ['js', 'jsx'],
    'react/destructuring-assignment': ['warn'],
    'no-shadow': ['warn'],
    'comma-dangle': ['error', 'always-multiline', {'functions': 'never'}],
    'prefer-destructuring': 'off',
    'camelcase': 'off',
    'no-param-reassign': 'off',
    'global-require': 'off',
    'radix': 'off',
    'react/no-unused-state': ['warn']
  }
};