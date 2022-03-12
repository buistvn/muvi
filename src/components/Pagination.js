import React from 'react';
import { useRouter } from 'next/router';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ page, totalPages }) => {
    const router = useRouter();

    const handleClick = (newPage) => {
        router.push(`${router.asPath.split('?')[0]}?page=${newPage}`);
    };

    return (
        <Flex justify="space-between" align="center">
            <IconButton
                icon={<FaChevronLeft />}
                style={page <= 1 ? { visibility: 'hidden' } : null}
                onClick={() => handleClick(parseInt(page) - 1)}
            />
            <Text>
                Page {page} of {totalPages}
            </Text>
            <IconButton
                icon={<FaChevronRight />}
                style={page >= totalPages ? { visibility: 'hidden' } : null}
                onClick={() => handleClick(parseInt(page) + 1)}
            />
        </Flex>
    );
};

export default Pagination;
