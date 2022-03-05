import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChartLine, FaChevronDown, FaPlay, FaStar } from 'react-icons/fa';

const CategoryMenu = ({ categories, setCategory, setPage }) => {
    const handleClick = (newCategory) => {
        setCategory(newCategory);
        setPage(1);
    };

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                Category
            </MenuButton>
            <MenuList>
                <MenuItem
                    icon={<FaChartLine />}
                    onClick={() => handleClick(categories.POPULAR)}
                >
                    Popular
                </MenuItem>
                <MenuItem
                    icon={<FaStar />}
                    onClick={() => handleClick(categories.TOP_RATED)}
                >
                    Top Rated
                </MenuItem>
                <MenuItem
                    icon={<FaPlay />}
                    onClick={() => handleClick(categories.NOW_PLAYING)}
                >
                    Now Playing
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default CategoryMenu;
