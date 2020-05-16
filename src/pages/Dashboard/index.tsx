import React, { useState, useEffect, useContext } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { ThemeContext } from 'styled-components';

import { View } from 'react-native';

import formatValue from '../../utils/formatValue';

import { useTheme } from '../../hooks/theme';
import { useCart } from '../../hooks/cart';

import api from '../../services/api';

import FloatingCart from '../../components/FloatingCart';
import Header from '../../components/Header';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
} from './styles';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

const Dashboard: React.FC = () => {
  const { addToCart } = useCart();
  const { toggleTheme } = useTheme();
  const { colors } = useContext(ThemeContext);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  function handleAddToCart(item: Product): void {
    addToCart(item);
  }

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitle>{item.title}</ProductTitle>
              <PriceContainer>
                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                <ProductButton
                  testID={`add-to-cart-${item.id}`}
                  onPress={() => handleAddToCart(item)}
                >
                  <FeatherIcon
                    size={20}
                    name="plus"
                    color={`${colors.addCardIcon}`}
                  />
                </ProductButton>
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Dashboard;
