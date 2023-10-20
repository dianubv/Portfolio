This folder contains files which collectively enhance the Nuxt.js application's user experience by providing smooth scrolling, handling reduced motion preferences, and enabling hover interactions for specific elements using custom directives.

`hover-directive.client.js`:
    This file defines a custom Vue directive called hoverable.
    It sets the cursor style to 'none' for elements with this directive.
    It adds event listeners for mouse enter and leave, emitting custom events on these actions.

`locomotive-scroll.js`:
    This file configures and sets up the Locomotive Scroll library for smooth scrolling.
    It establishes connections with GSAP (GreenSock Animation Platform) for animation effects tied to scrolling.
    Defines various functions and injects them into your Nuxt.js application, facilitating smooth scrolling, scroll trigger management, and scroll position handling.

`prefers-reduced-motion.js`:
    This file checks the user's system settings to determine if "reduce motion" is enabled.
    It provides a function to check if the user prefers reduced motion and injects it into your Nuxt.js application.
