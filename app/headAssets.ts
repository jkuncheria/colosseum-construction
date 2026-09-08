/** Lifted verbatim from the old index.html.
 *  TAILWIND_CONFIG defines the Montserrat/Playfair fonts and the custom orange
 *  and slate shades the whole design depends on. Dropping it breaks the site. */
export const TAILWIND_CONFIG = `tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Montserrat', 'sans-serif'],
              serif: ['Playfair Display', 'serif'],
            },
            colors: {
              orange: {
                400: '#F9A85A',
                500: '#F68E31',
                600: '#E67D1F',
              },
              slate: {
                850: '#1e293b',
                900: '#0f172a',
                950: '#020617',
              }
            }
          }
        }
      }`;

export const GLOBAL_STYLES = `
      /* Smooth scrolling for anchor links */
      html {
        scroll-behavior: smooth;
      }
      .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
        transform: translateY(20px);
      }
      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
