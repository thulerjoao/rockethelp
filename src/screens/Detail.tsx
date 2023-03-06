import React from 'react';
import { VStack } from 'native-base';
import { Header } from '../components/header';

export function Detail() {
  return (
    <VStack flex={1} bg='gray.700'>
        <Header title='solicitação'/>
    </VStack>
  );
}