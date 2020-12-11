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
              "/welcome-to-nourished-by-caroline/"
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
          },
          autoPrefetch: "in-view"
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
    "@frontity/html2react",
    "frontity-contact-form-7"
  ]
};

export default settings;
