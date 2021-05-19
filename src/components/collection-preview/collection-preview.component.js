import React from "react";
import {Link} from 'react-router-dom'
import CollectionItem from '../collection-item/collection-item.component.js'

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title"><Link to={title}>{title.toUpperCase()} </Link></h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4) // the chain of modification to ur array happen every time the component is rendered. 
        .map((item) => (
          <CollectionItem key={item.id} item={item}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
