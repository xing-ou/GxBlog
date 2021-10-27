import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import BookItem, { BookItemType } from "../components/BookItem";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function ReadingPage() {
  const { siteConfig } = useDocusaurusContext();
  const books = siteConfig.customFields.booksInfo as [BookItemType];
  const rowCount = 3;
  const getPage = (values: BookItemType[]) => {
    let final: Array<BookItemType[]> = [];
    let tempContainer: Array<BookItemType> = [];
    values.forEach((value, index) => {
      if (index % rowCount == rowCount - 1) {
        tempContainer.push(value);
        final.push(tempContainer);
        tempContainer = [];
      } else {
        tempContainer.push(value);
      }
    });
    if (tempContainer.length > 0) {
      final.push(tempContainer);
    }
    return final;
  };

  return (
    <Layout
      children={
        <div>
          <div className="container">
            {getPage(books).map((items) => {
              return (
                <div key={items.map((value) => value.bookLink).join()} className="row margin-bottom--lg margin-top--lg">
                  {items.map((value, idx) => {
                    return (
                      <div
                        className={clsx(
                          "col",
                          "col--3",
                          idx == 0 ? 0 : "col--offset-1"
                        )}
                        key={value.bookLink}
                      >
                        <BookItem item={value}></BookItem>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      }
      title="书籍阅读"
    ></Layout>
  );
}
