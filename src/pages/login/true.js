import { Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { UserContext } from '../_app';

const True = ({ user }) => {
    const {
        user,
        setUser,
        sessionID,
        setSessionID,
        accountID,
        setAccountID,
        name,
        setName,
    } = useContext(UserContext);
    console.log(sessionID);
    return <Text>Logged in Successfully</Text>;
};

export default True;
