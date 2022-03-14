import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const False = () => {
    const toast = useToast();
    const router = useRouter();
    useEffect(() => {
        toast({
            title: 'Error Logging In',
            status: 'error',
            duration: 5000,
            isClosable: true,
        });
        router.push(router.query.path);
    }, []);
    return <></>;
};

export default False;
