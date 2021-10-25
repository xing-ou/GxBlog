import React from "react";
import Layout from "@theme/Layout";
export default function AboutMePage() {
  return (
    <Layout title="关于我">
      <div
        className="card shadow--md padding--lg"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30px",
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // backgroundColor: "red",
        }}
      >
        <img
          src="img/avator.jpg"
          alt="avator"
          style={{
            width: "200px",
            borderRadius: "50%",
          }}
        />
        <div className="card__header margin-top--md">
          <h3>Gou Xin</h3>
        </div>
        <div className="card__body margin-top--md">
          <p>一个iOS开发者</p>          
        </div>
        <div className="card__body margin-top--md">
          <p>联系方式: xingou177@icloud.com</p>          
        </div>     
      </div>
    </Layout>
  );
}
