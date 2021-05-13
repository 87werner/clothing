import React from 'react';
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component.js'


class ShopPage extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            collections: SHOP_DATA // stored in shop.data.js is the array
        }
    }

    render() {
        const {collections} = this.state;
       return (<div className='shop-page'>
           {
               collections.map(({id, ...otherCollectionProps})=> (
                   <CollectionPreview key={id} {...otherCollectionProps}/>
               ))
           }

       </div>)
    }
      
}

export default ShopPage