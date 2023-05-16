import React from 'react';
import { Bracket, Text, Desc, Sub } from './style';

export const Skill = ({ children, type, mb }) => {
    if (type === "subtitle") {
        return <Bracket mb={mb}><Sub>{children}</Sub></Bracket>
    }

    return <Bracket>[ <Text>{children}</Text> ]</Bracket>
}