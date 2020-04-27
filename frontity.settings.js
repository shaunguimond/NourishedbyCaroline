const settings = {
  "name": "unsweetened-caroline",
  "state": {
    "frontity": {
      "url": "https://unsweetenedcaroline.com",
      "title": "Unsweetened Caroline",
      "description": "Where no recipe is sugar-coated."
    }
  },
  "packages": [
    {
      "name": "Unsweetened-Caroline",
      "state": {
        "theme": {
          "menu": [
            [
              "About",
              "/my-story/"
            ],
            [
              "Recipes",
              "/category/all-recipes/"
            ],
            [
              "Life",
              "/category/life/"
            ],
            [
              "Contact",
              "/contact/"
            ],
            [
              "Subscribe",
              "/subscribe/"
            ],
            [
              "Shop",
              "/shop/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://www.nourishedbycaroline.ca/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
