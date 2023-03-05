import React from 'react';
import { Button as ReatNativeButton, IButtonProps, Heading} from "native-base"

type ButtonProps = IButtonProps & {
    element:string
}

export function Button({element, ...rest}:ButtonProps) {
  return (
    <ReatNativeButton
    bg="green.700"
    h={14}
    rounded="sm"
    fontSize="sm"
    _pressed={{bg:"green.500"}}
    {...rest}
    >
        <Heading fontSize='sm' color="white">
            {element}
        </Heading>
    </ReatNativeButton>
  );
}