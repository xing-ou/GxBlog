import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import BookItem, {BookItemType} from "../components/BookItem";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function ReadingPage() {
  let { siteConfig } = useDocusaurusContext();
  let books = siteConfig.customFields.booksInfo as [BookItemType];
  let rowCount = 3;
  let getPage = (values: BookItemType[]) => {
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
                <div className="row margin-bottom--lg margin-top--lg">
                  {items.map((value, idx) => {
                    return (
                      <>
                        <div
                          className={clsx(
                            "col",
                            "col--3",
                            idx == 0 ? 0 : "col--offset-1"
                          )}                          
                        >
                          <BookItem item={value}></BookItem>
                        </div>
                      </>
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
