export const lightColors = {
    // Surface & Layout
    surface: '#faf9f6',           // Main app background (Warm Paper White)
    surfaceDim: '#dbdad7',        // Subtle background variation / search bars
    surfaceBright: '#faf9f6',     // High-elevation surfaces
    containerLowest: '#ffffff',   // Pure white for card interiors
    containerLow: '#f4f3f0',      // Secondary surface for inset groups/settings

    // Typography & Content
    inkPrimary: '#0c0c0d',        // Main headings and primary body text (Near-Black)
    inkSecondary: '#3a3a3c',      // Subheadings, secondary UI labels, and meta-data
    inkMuted: '#8e8e93',         // Captions, time-stamps, and disabled states
    
    // Brand & Functional Accents
    accentRed: '#e63946',        // Breaking news tags, primary CTAs, active tab dots
    accentBlue: '#457b9d',       // AI category branding / "Upgrade to Pro" highlights
    accentGreen: '#2d6a4f',      // Climate & Tech category branding
    
    // UI Elements
    tagBackground: '#eeeae3',     // Background for category chips and topic tags
    border: 'rgba(0, 0, 0, 0.08)', // Standard hairline dividers and card outlines
};
  
export const darkColors = {
    // Surface & Layout
    surface: '#131314',           // Primary app background (Nocturnal Black)
    surfaceDim: '#131314',        // Deepest layer background
    surfaceBright: '#39393a',     // Active/Hover states on dark surfaces
    containerLowest: '#0e0e0f',   // Darkest card interiors
    containerLow: '#1c1b1c',      // Secondary surface containers/settings groups

    // Typography & Content
    inkPrimary: '#ffffff',        // High-contrast headings (Pure White)
    inkSecondary: '#e3e2de',     // Off-white for high-readability body text
    inkMuted: '#91908d',         // Muted gray for meta-info and placeholders
    
    // Brand & Functional Accents
    accentRed: '#ff3b30',        // Brightened red for visibility on dark backgrounds
    accentBlue: '#457b9d',       // Consistent AI branding
    accentGreen: '#2d6a4f',      // Consistent Climate/Tech branding
    
    // UI Elements
    tagBackground: '#2c2c2e',     // Dark gray background for tags and category chips
    border: 'rgba(255, 255, 255, 0.08)', // Light-alpha dividers for dark mode depth
};

export const themes = {
    light: lightColors,
    dark: darkColors
};

export default themes;