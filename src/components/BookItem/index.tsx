import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

export type BookItemType = {
    "cover": string,
    "desc": string,
    "bookLink": string,
    "readStartTime": string,
    "readEndTime": string,
    "isReading": boolean
  }

type BookItemProps = {
    item: BookItemType
}

export default function BookItem(props: BookItemProps) {
    const { item } = props;
    const { withBaseUrl } = useBaseUrlUtils();  
    return <div className={clsx(styles.bookitem, "card", "shadow--md")}>
        <img src={withBaseUrl(item.cover)} alt="cover"/>                
        <p className="hero__subtitle margin-horiz--md margin-vert--md" style={{fontSize: "1rem"}}>
            {item.desc}    
            <br></br>
            {item.readStartTime}
            <br></br>
            {item.readEndTime}
        </p>                
        <Link className="button button--primary margin-horiz--md margin-bottom--md" to={item.bookLink}>{item.isReading ? "正在学习ing..." : "开始阅读"}</Link>      
    </div>
}
