import { VStack, Heading, Icon, useTheme } from "native-base"
import Logo from '../assets/logo_primary.svg'
import { Input } from "../components/input";
import {Envelope, Key} from 'phosphor-react-native'
import { Button } from "../components/button";
import { useState } from "react";

const SignIn = () => {

    const { colors } = useTheme();

    const [ name, setName ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")
    

    return(
        <VStack flex={1} alignItems="center" bg='gray.600' px={8} pt={24}>
            <Logo/>
            <Heading color='gray.100' fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>
            <Input 
                placeholder='E-mail'
                mb={4}
                onChangeText={setName}
                // InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
                />
            <Input 
                placeholder="Senha" 
                mb={8}
                secureTextEntry
                onChangeText={setPassword}
                // InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
                />
            <Button element="Entrar" w="full"/>
        </VStack>
    )
}

export default SignIn;

