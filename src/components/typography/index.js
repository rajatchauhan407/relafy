import React from 'react';
import { useTheme } from '../../contexts/themeContext';
const Typography = ({ variant = 'default', weight = 'normal',component='p', children, styles ,fontFamily='body', color='white'  }) => {
    
    const { theme } = useTheme();

    const { font, size, weights, lineHeights } = theme.typography;

    const textStyle = {
        fontFamily: font[fontFamily],
        fontSize: size[variant],
        fontWeight: weights[weight],
        lineHeight: lineHeights[variant === 'heading' ? 'heading' : 'normal'],
        color: theme.colors[color],
        ...styles
    };

    const Component = ({
        heading: 'h1',
        h2: 'h2',
        subtitle: 'h3',
        body: 'p',
        h1:'h1'
    })[component] || 'p';

    return (
        <Component style={textStyle}>
            {children}
        </Component>
    );
}

export default Typography;
