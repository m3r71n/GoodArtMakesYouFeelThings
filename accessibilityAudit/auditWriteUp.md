# GoodArtMakesYouFeelThings Accessibility Write Up

A WAVE audit was performed on this website.

Overall, only 2 errors were discovered. One was a form label that was improperly connected to the form textarea (the id was missing on the textarea causing them to not link correctly). The second was a missing alt text on the blank image for the modals on the gallery page (this was fixed by simply adding that the image doesn't exist since when the modal pops up, the alt text comes from the image placed that is part of the grid).

Contrast is found to be excellent. The ratio is 10.25:1 and passes both the small text and the large text.

Overall, this site makes use of header sizes, alt text on all images, and fallbacks that keeps all content displayed in case CSS or Javascript are turned off. This keeps all content accessible no matter what the user needs.

Screen captures of the WAVE audit are available within the same folder as this audit.
