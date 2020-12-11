/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import Link from "@frontity/components/link";
import { connect } from "frontity";
import PostEntryInfo from "../post/postEntryInfo";
import { formatPostData } from "../../helpers";
import PostEntryMedia from "../post/postEntryMedia";
import featuredStyles from "../../styles/featuredStyles";

const ArchiveItem = ({ item, state, type }) => {
  const { postInfo, postMeta, featured } = state.theme;

  const {
    id,
    author,
    publishDate,
    title,
    link,
  
    featured_media,
 
  } = formatPostData(state, item);
  const date = new Date(publishDate);

  return (

      <article className="entry" sx={{ variant: "card.default", mb: "xl", padding: [ 0, 0, 0 ] }}>
        <Link link={link}>
          {featured.showOnArchive && (
            <PostEntryMedia
              className="entryMedia"
              id={featured_media.id}
              ratio={4 /5}
              sx={{ ...featuredStyles }}
            />
          )}
          <div sx={{ padding: 10 }}>
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            sx={{
              textTransform: "uppercase",
              fontSize: 20,
              textAlign: "center"
            }}
          />
          </div>
        </Link>
        <div sx={{ display: "none"  }}>
        {postInfo.showOnArchive && type !== "projects" && (
          <PostEntryInfo author={author} date={date} />
        )}
        </div>
      </article>
  );
};

export default connect(ArchiveItem);
