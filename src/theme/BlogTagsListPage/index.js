/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import BlogLayout from '@theme/BlogLayout';
import TagsListByLetter from '@theme/TagsListByLetter';
import {
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import { Link } from '@docusaurus/router';

function BlogTagsListPage(props) {
  const {tags, sidebar} = props;
  const title = translateTagsPageTitle();
  return (
    <BlogLayout
      title={title}
      wrapperClassName={ThemeClassNames.wrapper.blogPages}
      pageClassName={ThemeClassNames.page.blogTagsListPage}
      searchMetadatas={{
        // assign unique search tag to exclude this page from search results!
        tag: 'blog_tags_list',
      }}
      sidebar={sidebar}>
      <div className="margin-bottom--lg">
      <h1>文档类文章标签</h1>
      <div><Link to="/docs/tags">点击这里查看文档类文章(书籍阅读)tags</Link></div>     
      </div>
      <h1>Blog类文章标签</h1>
      <TagsListByLetter tags={Object.values(tags)} />
    </BlogLayout>
  );
}

export default BlogTagsListPage;
