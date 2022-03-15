import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

const False = () => {
    const router = useRouter();

    const toast = useToast();

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
