declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    'data-active'?: "true";
  }

  // Add a CSS custom property to the style object
  interface CSSProperties {
    '--theme-color'?: 'black' | 'white';
  }
}