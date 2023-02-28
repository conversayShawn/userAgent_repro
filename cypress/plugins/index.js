// ***********************************************************
// https://on.cypress.io/plugins-guide
// ***********************************************************

const configOverride = {};

function setUserAgent(defaultConfig) {
    const ua = defaultConfig.env.userAgent

    switch (ua) {
        case 'desktop':
            configOverride.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36';
            configOverride.specPattern = 'cypress/e2e/desktop/**.cy.js';
            configOverride.viewportWidth = 1920;
            configOverride.viewportHeight = 1080;
            break;

        case 'mobile':
            configOverride.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';
            configOverride.specPattern = 'cypress/e2e/mobile/**.cy.js';
            configOverride.viewportWidth = 375;
            configOverride.viewportHeight = 812;
            break;

        // case 'tablet': 

        default:
            configOverride.userAgent = null;
    }
}


module.exports = (on, config) => {

    setUserAgent(config)

    return Object.assign({}, config, configOverride);
}