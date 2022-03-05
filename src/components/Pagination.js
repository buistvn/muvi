import React from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ page, setPage, totalPages }) => {
    const handleClick = (newPage) => {
        setPage(newPage);
    };

    return (
        <Flex justify="space-between" align="center">
            <IconButton
                icon={<FaChevronLeft />}
                style={page <= 1 ? { visibility: 'hidden' } : null}
                onClick={() => handleClick(page - 1)}
            />
            <Text>
                Page {page} of {totalPages}
            </Text>
            <IconButton
                icon={<FaChevronRight />}
                style={page >= totalPages ? { visibility: 'hidden' } : null}
                onClick={() => handleClick(page + 1)}
            />
        </Flex>
    );
};

export default Pagination;
