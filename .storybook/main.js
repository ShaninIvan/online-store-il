module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/preset-create-react-app',
            options: {
                craOverrides: {
                    fileLoaderExcludes: ['less'],
                },
            },
        },
        {
            name: 'storybook-preset-less',
            options: {
                cssLoaderOptions: {
                    modules: true,
                },
                lessLoaderOptions: {
                    lessOptions: {
                        strictMath: false,
                        noIeCompat: true,
                        relativeUrls: false,
                    },
                },
            },
        },
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
}
