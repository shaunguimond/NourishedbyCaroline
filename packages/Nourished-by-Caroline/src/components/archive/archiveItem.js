/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import Link from "../link";
import { connect } from "frontity";
import PostEntryInfo from "../post/postEntryInfo";
import Taxonomies from "../post/taxonomies";
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
    categories,
    tags,
    featured_media,
    excerpt,
    acf
  } = formatPostData(state, item);
  const date = new Date(publishDate);

  return (

      <article className="entry" sx={{ variant: "card.default", maxWidth: "l", mb: "xl" }}>
        <Link link={link}>
          {featured.showOnArchive && (
            <PostEntryMedia
              id={featured_media.id}
              sx={{ ...featuredStyles }}
            />
          )}
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            sx={{
              textTransform: "uppercase"
            }}
          />
        </Link>
        {postInfo.showOnArchive && type !== "projects" && (
          <PostEntryInfo author={author} date={date} />
        )}
      </article>
  );
};

export default connect(ArchiveItem);
