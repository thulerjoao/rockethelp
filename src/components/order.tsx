import React from 'react';
import { Box, Circle, HStack, Text, useTheme, VStack, Pressable, IPressableProps } from 'native-base';
import { ClockAfternoon, CircleWavyCheck, Hourglass } from 'phosphor-react-native'

export type OrderProp = {
    id: string,
    patrimony: string,
    when: string,
    status: 'open'|'close'
}

type Props = IPressableProps &{
    data:OrderProp
}

export function Order({ data, ...rest}:Props) {

    const { colors } = useTheme()
    const statusColor = data.status === 'open'? colors.secondary[700]: colors.green[300]


  return (
    <Pressable {...rest}>
        <HStack
            bg="gray.600"
            mb={4}
            alignItems="center"
            justifyContent="space-between"
            rounded='sm'
            overflow='hidden'
        >
            <Box w={2} h='full' bg={statusColor}/>
            <VStack flex={1} w={2} my={5} ml={2}>
                <Text color='white' fontSize='md'>Patrimônio {data.patrimony}</Text>
                <HStack alignItems='center'>
                    <ClockAfternoon size={15} color={colors.gray[300]}/>
                    <Text color='white' fontSize='md'>
                        {data.when}
                    </Text>
                </HStack>
            </VStack>
            <Circle bg='gray.500' w={12} h={12} mr={5}>
                {data.status === 'close'? 
                <CircleWavyCheck size={24} color={statusColor}/>: 
                <Hourglass size={24} color={statusColor}/>}
            </Circle>
        </HStack>
    </Pressable>
  );
}