const settings = {
  "name": "Nourished-by-Caroline",
  "state": {
    "frontity": {
      "url": "https://nourishedbycaroline.ca",
      "title": "Nourished by Caroline",
      "description": "Where no recipe is sugar-coated."
    }
  },
  "packages": [
    {
      "name": "Nourished-by-Caroline",
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
          "api": "https://www.nourishedbycaroline.ca/wp-json",
          "homepage": "/nourished-by-caroline",
          "postsPage": "/blog"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
