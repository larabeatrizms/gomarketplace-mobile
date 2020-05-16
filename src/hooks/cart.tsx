import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const STORAGE_KEY = '@GoMarketplace:products';

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // console.log(products);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      // TODO LOAD ITEMS FROM ASYNC STORAGE
      const productsInCart = await AsyncStorage.getItem(STORAGE_KEY);

      if (productsInCart) {
        setProducts(JSON.parse(productsInCart));
      }
    }

    loadProducts();
  }, []);

  const increment = useCallback(
    async id => {
      // TODO INCREMENTS A PRODUCT QUANTITY IN THE CART
      const productsInCartNew = products.map(item => {
        const newItem =
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
        return newItem;
      });

      setProducts(productsInCartNew);
      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(productsInCartNew),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      // TODO DECREMENTS A PRODUCT QUANTITY IN THE CART
      const filterProducts = products.filter(product => product.id !== id);

      const newProduct = products.find(product => product.id === id);

      if (newProduct && newProduct.quantity > 1) {
        setProducts(state => {
          const listProductsUpdated = state.map(element =>
            element.id === id
              ? { ...element, quantity: element.quantity - 1 }
              : element,
          );

          AsyncStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(listProductsUpdated),
          );

          return listProductsUpdated;
        });
      } else {
        await AsyncStorage.setItem(
          STORAGE_KEY,
          JSON.stringify([...filterProducts]),
        );
        setProducts([...filterProducts]);
      }
    },
    [products],
  );

  const addToCart = useCallback(
    async product => {
      // TODO ADD A NEW ITEM TO THE CART
      const productExists = products.find(item => item.id === product.id);

      if (productExists) {
        increment(product.id);
        return;
      }

      const productWithQuantity = { ...product, quantity: 1 };

      setProducts(prevState => [...prevState, productWithQuantity]);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    },
    [products, increment],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
