import Theme from "./components";
import image from "@frontity/html2react/processors/image";

const NourishedbyCaroline = {
  name: "Nourished-by-Caroline",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: [],
      /**
       * The logo can be a text or an image url
       */
     //  logo: "Nourished by Caroline",
     logo: "https://www.nourishedbycaroline.ca/wp-content/uploads/2020/03/Artboard-1SIcon.png",
      // logo: Logo,
      showSocialLinks: {
        header: false,
        footer: true
      },
      socialLinks: [
        [ "pinterest", "https://www.pinterest.ca/okraidersrule/" ],
        [ "facebook", "https://www.facebook.com/shaun.guimond/" ],
        [ "instagram" , "https://www.instagram.com/shagui88/" ],
        [ "twitter" , "https://twitter.com/home" ]
      ],
      isMobileMenuOpen: false,
      autoPreFetch: "hover",
      featured: {
        showOnArchive: true,
        showOnPost: true
      },
      postInfo: {
        showOnArchive: true,
        showOnPost: true
      },
      postMeta: {
        showOnArchive: true,
        showOnPost: true
      }
    }
  },
  actions: {
    theme: {
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      }
    }
  },
  libraries: {
    html2react: {
      processors: [image]
    }
  }
};

export default NourishedbyCaroline;
