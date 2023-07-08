import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 15.6187C0 7.04932 6.9469 0 15.5163 0V0C24.0858 0 31.0327 7.04932 31.0327 15.6187V15.6187C31.0327 24.1882 24.0858 31.2375 15.5163 31.2375V31.2375C6.9469 31.2375 0 24.1882 0 15.6187V15.6187Z" fill="#01A0C7" fill-opacity="0.8"/>
<path d="M12.488 13.014L18.516 13.014L18.516 18.821" fill="#01A0C7" fill-opacity="0.8"/>
<path d="M12.488 13.014L18.516 13.014L18.516 18.821" stroke="#050134" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M17.9644 13.8009L12.488 18.821Z" fill="#01A0C7" fill-opacity="0.8"/>
<path d="M17.9644 13.8009L12.488 18.821" stroke="#050134" stroke-width="1.5" stroke-linecap="square"/>
</svg>

`;

const IconView = () => {
    return <SvgXml xml={xml} width={40} height={40} />;
};

export default IconView;
