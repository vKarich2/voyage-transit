"use client";

import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="max-w-[1280px] mx-auto px-5 my-10">
            {children}
        </div>
    );
};

export default Container;
