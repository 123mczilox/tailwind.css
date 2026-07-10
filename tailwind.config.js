/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./public/**/*.html",
      "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F26522",       // Main brand orange
        "primary-dark": "#A63B00",  // Hover states
        "primary-light": "#FFB38A", // Soft orange backgrounds
        "primary-container": "#FFE3D0",
        "on-primary": "#FFFFFF",
        "primary-fixed-white": "#FFFFFF",

        // page background, cards and alternating sections
        "background": "#FFFFFF",
        "surface": "#F8FAFC",
        "surface-alt": "#EDF2F7",
        "surface-bright": "#F1F5F9",
        "surface-variant": "#E2E8F0",
        "surface-container": "#F8FAFC",
        "surface-container-highest": "#F1F5F9",
        "surface-container-low": "#F7FAFC",
        "inverse-surface": "#1F2937",

        // text colors
        "text": "#131D21",
        "text-muted": "#586062",
        "text-secondary": "#586062",
        "text-white": "#FFFFFF",
        "on-background": "#131D21",
        "on-surface": "#131D21",

        // borders 
        "border": "#E2E8F0",

        // navbar footer and why choose us sections 
        "dark": "#1F2937",

        // whatsup
        "success": "#25D366"
      },
      borderRadius: {
          "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"

      },
      spacing: {
        "section-padding": "80px",
                "stack-sm": "8px",
                "stack-lg": "32px",
                "margin-mobile": "16px",
                "gutter": "24px",
                "stack-md": "16px",
                "container-max": "1280px"


      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
        "label-caps": ["Inter", "sans-serif"],
        "headline-sm": ["Montserrat", "sans-serif"],
      },
    fontSize: {
       "headline-sm": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                "display-lg-mobile": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                "headline-md": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
                "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}]

    }

    },
  },
  plugins: [],
}

