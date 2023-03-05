import { VStack, Heading, Icon } from "native-base"
import Logo from '../assets/logo_primary.svg'
import { Input } from "../components/input";
import {Envelope} from 'phosphor-react-native'
import { Button } from "../components/button";

const SignIn = () => {
    return(
        <VStack flex={1} alignItems="center" bg='gray.600' px={8} pt={24}>
            <Logo/>
            <Heading color='gray.100' fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>
            <Input 
                placeholder='E-mail'
                mb={4}
                // InputLeftElement={<Icon as={<Envelope/>}/>}
                // InputLeftElement={<Icon as={<Envelope/>} />}
                />
            <Input 
                placeholder="Senha" 
                mb={8}
                secureTextEntry
                />
            <Button element="Entrar" w="full"/>
        </VStack>
    )
}

export default SignIn;

