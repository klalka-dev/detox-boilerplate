const landing = require('../test-ids/routes/landing')

module.exports = {
    title: {
        strategy: "id",
        matcher: landing.title
    },
    helloButton: {
        strategy: "id",
        matcher: landing.helloButton,
        options: {
            tappable: true
        }
    },
    worldButton: {
        strategy: "id",
        matcher: landing.worldButton,
        options: {
            tappable: true
        }
    }
};
