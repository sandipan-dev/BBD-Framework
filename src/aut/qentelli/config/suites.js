export const specConfig = {
    // define all tests
    specs: ['src/aut/qentelli/features/**/*.feature'],
    exclude: [],
    // define specific suites
    suites: {
        "test": [
            'src/aut/qentelli/features/test.feature',
        ],
        "shadow-test": [
            'src/aut/qentelli/features/shadow-test.feature',
        ],
        "sample": [
            'src/aut/qentelli/features/sample.feature',
        ],
        "assesment": [
            'src/aut/qentelli/features/assesment.feature',
        ],
        otherFeature: [

        ]
    },
}