import {
    Box,
    FormControl,
    Center,
    FormLabel,
    Input,
    Text,
} from '@chakra-ui/react'
import { ethers } from 'ethers';
import { useState } from 'react';

export default function FunctionBox() {
const [input, setInput] = useState("");
  const handleInputChanged = (e: any) => setInput(e.target.value)
  
  function generateInterfaceIfValid(input: string) : ethers.utils.Interface|null{
    try {
      let iFace = new ethers.utils.Interface([input]);
      return iFace;
    } catch (e) {
      return null;
    }
    return null;
  }
  const iFace = generateInterfaceIfValid(input);
    return (
        <Box fluid >
          
          <FormControl mt='6'>
            
            <FormLabel mx='3' alignSelf='flex-start'>
              Enter a function signature to see its selector
            </FormLabel>
            <Input  
              placeholder='function mint(uint256) returns (bool)'
              size='lg'
              onChange={handleInputChanged}
            />
            
          </FormControl>
          <Center>
          <Text my='3' fontSize='xl'>
            {
            iFace && iFace.fragments && iFace.fragments[0] 
              ? iFace.getSighash(iFace.fragments[0]) 
              : "..."}
          </Text>
          </Center>
        </Box>
    )
}