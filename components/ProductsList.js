import React from 'react';
import { FlatList, Text } from 'react-native';
import { products } from '../products';
import ProductCard from './ProductsCard';

export default function ProductsList () {
    return(
        <FlatList
        data={products}
        keyExtractor={(products) => products.id}
        renderItem={({item}) => <ProductCard {...item}/>}
        contentContainerStyle={{paddingHorizontal:15}}
        />
    )
}