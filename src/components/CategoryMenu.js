import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChartLine, FaChevronDown, FaPlay, FaStar } from 'react-icons/fa';

const CategoryMenu = ({ categories, setCategory }) => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                Category
            </MenuButton>
            <MenuList>
                <MenuItem
                    icon={<FaPlay />}
                    onClick={() => setCategory(categories.NOW_PLAYING)}
                >
                    Now Playing
                </MenuItem>
                <MenuItem
                    icon={<FaChartLine />}
                    onClick={() => setCategory(categories.POPULAR)}
                >
                    Popular
                </MenuItem>
                <MenuItem
                    icon={<FaStar />}
                    onClick={() => setCategory(categories.TOP_RATED)}
                >
                    Top Rated
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default CategoryMenu;
