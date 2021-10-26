/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import {MDXProvider} from '@mdx-js/react';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import {usePluralForm} from '@docusaurus/theme-common';
import MDXComponents from '@theme/MDXComponents';
import EditThisPage from '@theme/EditThisPage';
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from './styles.module.css';
import TagsListInline from '@theme/TagsListInline';
import { Utterances } from 'utterances-react-component';

function useReadingTimePlural() {
  const {selectMessage} = usePluralForm();
  return (readingTimeFloat) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        {
          readingTime,
        },
      ),
    );
  };
}

function updateUtterancesTheme (isDarkTheme) {
  let iframe = document.querySelector('.utterances-frame');
  if (iframe) {
    const theme = isDarkTheme ? 'github-dark' : 'github-light'
    const message = {
      type: 'set-theme',
      theme: theme
    }; 
    iframe.contentWindow.postMessage(message, 'https://utteranc.es');
  }
}

function BlogPostItem(props) {
  const readingTimePlural = useReadingTimePlural();
  const {withBaseUrl} = useBaseUrlUtils();
  const {isDarkTheme} = useThemeContext();
  updateUtterancesTheme(isDarkTheme);
  const {
    children,
    frontMatter,
    assets,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const {
    date,
    formattedDate,
    permalink,
    tags,
    readingTime,
    title,
    editUrl,
    authors,
  } = metadata;
  const image = assets.image ?? frontMatter.image;

  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
    return (
      <header>
        <TitleHeading className={styles.blogPostTitle} itemProp="headline">
          {isBlogPostPage ? (
            title
          ) : (
            <Link itemProp="url" to={permalink}>
              {title}
            </Link>
          )}
        </TitleHeading>
        <div className={clsx(styles.blogPostData, 'margin-vert--md')}>
          <time dateTime={date} itemProp="datePublished">
            {formattedDate}
          </time>

          {typeof readingTime !== 'undefined' && (
            <>
              {' · '}
              {readingTimePlural(readingTime)}
            </>
          )}          
        </div>
        {/* <BlogPostAuthors authors={authors} assets={assets} /> */}
      </header>
    );
  };

  return (
    <article
      className={clsx(!isBlogPostPage ? 'margin-bottom--xl card padding--lg shadow--md' : undefined)}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting">
      {renderPostHeader()}

      {image && (
        <meta
          itemProp="image"
          content={withBaseUrl(image, {
            absolute: true,
          })}
        />
      )}

      <div className="markdown" itemProp="articleBody">
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </div>

      {(tags.length > 0 || truncated) && (
        <footer
          className={clsx('row docusaurus-mt-lg', {
            [styles.blogPostDetailsFull]: isBlogPostPage,
          })}>
          {tags.length > 0 && (
            <div
              className={clsx('col', {
                'col--9': !isBlogPostPage,
              })}>
              <TagsListInline tags={tags} />
            </div>
          )}

          {/* {isBlogPostPage && editUrl && (
            <div className="col margin-top--sm">
              <EditThisPage editUrl={editUrl} />
            </div>
          )} */}

          {!isBlogPostPage && truncated && (
            <div className="col col--3 text--right">
              <Link
                to={metadata.permalink}
                aria-label={`Read more about ${title}`}>
                <b>
                  <Translate
                    id="theme.blog.post.readMore"
                    description="The label used in blog post item excerpts to link to full blog posts">
                    Read More
                  </Translate>
                </b>
              </Link>
            </div>
          )}

          {isBlogPostPage && (
            <Utterances
            repo="xing-ou/GxBlog"
            theme={isDarkTheme ? "github-dark" : "github-light"}
            issueTerm="pathname"
            />
          )}
        </footer>
      )}
    </article>
  );
}

export default BlogPostItem;
