import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29 15V16.1881C29 23.92 22.732 30.1881 15 30.1881C7.26801 30.1881 1 23.92 1 16.1881V15C1 7.26802 7.26801 1 15 1C22.732 1 29 7.26802 29 15Z" stroke="black" stroke-width="2"/>
<path d="M16.2059 12.9567C16.8178 13.5802 17.4172 14.1912 18.0291 14.8142C18.0129 14.832 17.9722 14.8824 17.9265 14.9275C16.2534 16.5937 14.5812 18.2608 12.9041 19.923C12.8131 20.013 12.6926 20.0898 12.5717 20.1308C11.7295 20.4162 10.8838 20.6909 10 20.9817C10.0224 20.8841 10.0314 20.823 10.0506 20.7654C10.318 19.9649 10.585 19.1639 10.8578 18.3651C10.8878 18.2777 10.9402 18.189 11.0056 18.1238C12.698 16.4349 14.393 14.7486 16.0881 13.0624C16.1195 13.0311 16.1539 13.003 16.2059 12.9567V12.9567Z" fill="black"/>
<path d="M18.7054 14.1368C18.0978 13.5207 17.4866 12.9004 16.8483 12.2526C17.2164 11.8986 17.5815 11.5314 17.9659 11.1857C18.1466 11.0234 18.4999 11.0312 18.6783 11.1986C19.0474 11.5452 19.4106 11.9009 19.7517 12.2755C19.9807 12.5272 19.9717 12.8751 19.7359 13.1259C19.4043 13.4785 19.046 13.8054 18.7059 14.1368H18.7054Z" fill="black"/>
</svg>


`;

const IconEdit = () => {
    return <SvgXml xml={xml} width={40} height={40} />;
};

export default IconEdit;