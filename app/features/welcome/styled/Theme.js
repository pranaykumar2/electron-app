// @flow

// Color palette theme for the application
export const colors = {
    darkBlue: '#070F2B',
    navy: '#1B1A55',
    periwinkle: '#535C91',
    lavender: '#9290C3',
    white: '#FFFFFF',
    lightGray: '#F4F5F7',
    black: '#000000',
    darkGray: '#333333',
    gray: '#A7A9BE',
    inputBg: 'rgba(255, 255, 255, 0.9)',
    cardBg: 'rgba(255, 255, 255, 0.95)',
    accent: '#7B78ED'
};

// Typography settings
export const typography = {
    fontFamily: {
        heading: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        body: "'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    },
    heading: {
        fontWeight: 600,
        lineHeight: 1.2
    },
    body: {
        fontWeight: 400,
        lineHeight: 1.5
    }
};

// Shadows
export const shadows = {
    small: '0 2px 4px rgba(7, 15, 43, 0.1)',
    medium: '0 4px 8px rgba(7, 15, 43, 0.12)',
    large: '0 8px 16px rgba(7, 15, 43, 0.14)'
};

// Spacing system (8-point grid)
export const spacing = {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
};

// Border radius
export const borderRadius = {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%'
};
