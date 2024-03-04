module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest" : true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "2018",
        "sourceType": "module"
    },
    "rules": {
    }
}
