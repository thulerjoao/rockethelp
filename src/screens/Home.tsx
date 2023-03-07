import React, { useState } from 'react';
import { HStack, IconButton, VStack, useTheme, Text, Heading, FlatList, Center } from 'native-base';
import { SignOut } from 'phosphor-react-native';
import Logo from '../assets/logo_secondary.svg'
import { Filter } from '../components/filter';
import { Order, OrderProp } from '../components/order';
import { Button } from '../components/button';
import { ChatTeardropText} from 'phosphor-react-native' 
import { useNavigation } from '@react-navigation/native';

export function Home() {

    const { colors } = useTheme()

    const [ statusSelected, setStatusSelected ] = useState<'open' | 'close'>('open');
    const [ orders, setOrders ] = useState<OrderProp[]>([
        {
        id:'123',
        patrimony: '789654',
        when: '18/07/2022 as 10:00hr',
        status: 'open'
        },
        {
            id:'12',
            patrimony: '789654',
            when: '18/07/2022 as 10:00hr',
            status: 'open'
        },
        {
            id:'13',
            patrimony: '789654',
            when: '18/07/2022 as 10:00hr',
            status: 'open'
        },
        {
            id:'23',
            patrimony: '789654',
            when: '18/07/2022 as 10:00hr',
            status: 'open'
        },
        {
            id:'3',
            patrimony: '789654',
            when: '18/07/2022 as 10:00hr',
            status: 'open'
        },
        {
            id:'1',
            patrimony: '789654',
            when: '18/07/2022 as 10:00hr',
            status: 'open'
        },
        {
            id:'2',
            patrimony: '789654',
            when: '18/07/2022 as 10:00hr',
            status: 'open'
        }
    ])

    const navigation = useNavigation()

    const handleNewOrder = () =>{
        navigation.navigate('new')
    }

    const handleOpenDetails = (orderId: string) =>{
        navigation.navigate('details',{ orderId })
    }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
        <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            bg="gray.700"
            pt={12}
            pb={5}
            px={6}
        >
            <Logo />
            <IconButton
                icon={<SignOut size={26} color={colors.gray[300]}/>}
            />
        </HStack>
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center'>
                <Heading color='gray.100'>
                    Solicitações
                </Heading>
                <Text color='gray.200' >3</Text>
            </HStack>
            <HStack space={3} mb={8}>
                <Filter
                    type={statusSelected}
                    title='em andamento'
                    isActive={statusSelected === 'open'}
                    onPress={() => setStatusSelected('open')}
                     
                />
                <Filter
                    type='close'
                    title='finalizados'
                    isActive={statusSelected === 'close'}
                    onPress={() => setStatusSelected('close')} 

                />
            </HStack>
            <FlatList
                data={orders}
                keyExtractor={item => item.id}
                renderItem={({ item })=> <Order data={item} onPress={()=>handleOpenDetails(item.id)}/>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 100}}
                ListEmptyComponent={()=> (
                    <Center pt={20}>
                        <ChatTeardropText color={colors.gray[300]} size={40} />
                        <Text color={colors.gray[300]} fontSize='xl' mt={6} textAlign='center'>
                            Você ainda não possui {`\n`}
                            solicitações { statusSelected === 'open'? 'em andamento':'finalizadas'}
                        </Text>
                    </Center>
                )}
            />
        </VStack>
        <Button element='Nova solicitção' mx={6} onPress={handleNewOrder}/>
    </VStack>
  );
}