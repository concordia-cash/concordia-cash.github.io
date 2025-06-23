document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const overlay = document.getElementById('contentOverlay');
    const closeOverlayLink = document.getElementById('closeOverlayLink');
    const actionButtons = document.querySelectorAll('.main-button');
    const tocContainer = document.getElementById('tocContainer');
    const tocContentWrapper = tocContainer.querySelector('.toc-content-wrapper');
    const tocToggleButton = document.getElementById('tocToggleButton');
    const mainContentScrollArea = document.getElementById('mainContentScrollArea');

    // Content blocks mapping
    const contentBlocks = {
        whitepaper: document.getElementById('whitepaperContent'),
        branding: document.getElementById('brandingContent'),
        social_media: document.getElementById('socialContent'),
    };

    let currentVisibleContent = null;
    let tocLinks = [];
    let sectionHeadings = [];

    /**
     * Generates the Table of Contents (TOC) for the given content block.
     * Only generates TOC for 'whitepaper' and 'branding' content.
     * @param {HTMLElement} contentBlock - The content block element to generate TOC for.
     */
    function generateTOC(contentBlock) {
        tocContentWrapper.innerHTML = ''; // Clear previous TOC content
        tocLinks = []; // Reset TOC links
        sectionHeadings = []; // Reset section headings

        // TOC is only relevant for whitepaper and branding content
        const needsTOC = contentBlock.id === 'whitepaperContent' || contentBlock.id === 'brandingContent';

        if (needsTOC) {
            const headings = contentBlock.querySelectorAll('h2, h3');
            if (headings.length > 0) {
                const tocList = document.createElement('ul');
                tocList.classList.add('space-y-2');

                tocContainer.classList.remove('hidden', 'toc-collapsed');
                tocToggleButton.classList.remove('hidden');

                headings.forEach((heading, index) => {
                    // Ensure each heading has a unique ID for linking
                    let id = heading.id;
                    if (!id) {
                        id = `section-${index}-${Math.random().toString(36).substr(2, 9)}`;
                        heading.id = id;
                    }
                    sectionHeadings.push(heading);

                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = `#${id}`;
                    link.textContent = heading.textContent;
                    link.classList.add('block', 'text-sm', 'py-1', 'px-2', 'rounded', 'hover:bg-gray-200', 'transition-colors', 'duration-200', 'text-gray-700');

                    // Apply specific styling based on heading level
                    if (heading.tagName === 'H2') {
                        link.classList.add('font-semibold', 'text-base', 'text-[var(--concordia-green)]');
                    } else if (heading.tagName === 'H3') {
                        link.classList.add('ml-4', 'text-sm', 'text-[var(--dark-neutral-grey)]');
                    }

                    // Smooth scroll to section on click
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    });

                    listItem.appendChild(link);
                    tocList.appendChild(listItem);
                    tocLinks.push(link);
                });
                tocContentWrapper.appendChild(tocList);
                // Ensure toggle button icon is 'left' when TOC is visible
                tocToggleButton.querySelector('i').classList.replace('fa-chevron-right', 'fa-chevron-left');
            } else {
                // Hide TOC if no headings are found in a TOC-enabled content block
                tocContainer.classList.add('hidden', 'toc-collapsed');
                tocToggleButton.classList.add('hidden');
            }
        } else {
            // Hide TOC for content that doesn't need it (e.g., social media)
            tocContainer.classList.add('hidden', 'toc-collapsed');
            tocToggleButton.classList.add('hidden');
        }
    }

    /**
     * Updates the active state of TOC links based on scroll position (Scroll Spy).
     */
    function updateScrollSpy() {
        if (!mainContentScrollArea || sectionHeadings.length === 0) return;

        const containerOffsetTop = mainContentScrollArea.getBoundingClientRect().top;
        let activeSectionId = null;

        // Iterate backwards to find the topmost visible heading
        for (let i = sectionHeadings.length - 1; i >= 0; i--) {
            const heading = sectionHeadings[i];
            const headingRect = heading.getBoundingClientRect();
            // Offset helps highlight the link slightly before the section reaches the very top
            if (headingRect.top - containerOffsetTop <= 50) {
                activeSectionId = heading.id;
                break;
            }
        }

        // Apply/remove 'active-toc-item' class and scroll TOC to make active link visible
        tocLinks.forEach(link => {
            if (link.getAttribute('href').substring(1) === activeSectionId) {
                if (!link.classList.contains('active-toc-item')) {
                    link.classList.add('active-toc-item');
                    scrollTocIntoView(link);
                }
            } else {
                link.classList.remove('active-toc-item');
            }
        });
    }

    /**
     * Scrolls the Table of Contents to make the active link visible within its scrollable wrapper.
     * @param {HTMLElement} activeLink - The currently active TOC link element.
     */
    function scrollTocIntoView(activeLink) {
        if (!tocContentWrapper || !activeLink) return;

        const tocRect = tocContentWrapper.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        // If the link is outside the visible area of the TOC wrapper, scroll it into view
        if (linkRect.top < tocRect.top || linkRect.bottom > tocRect.bottom) {
            activeLink.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest' // Ensures the element is visible without excessive scrolling
            });
        }
    }

    // Debounce scroll spy updates for performance
    let scrollSpyTimeout;
    mainContentScrollArea.addEventListener('scroll', () => {
        clearTimeout(scrollSpyTimeout);
        scrollSpyTimeout = setTimeout(updateScrollSpy, 50);
    });

    // TOC Toggle Logic
    tocToggleButton.addEventListener('click', () => {
        const icon = tocToggleButton.querySelector('i');
        tocContainer.classList.toggle('toc-collapsed');

        // Toggle icon direction based on TOC state
        if (tocContainer.classList.contains('toc-collapsed')) {
            icon.classList.replace('fa-chevron-left', 'fa-chevron-right');
        } else {
            icon.classList.replace('fa-chevron-right', 'fa-chevron-left');
        }
        // Force a scroll spy update after toggle to ensure active item is correct
        setTimeout(updateScrollSpy, 100);
    });

    /**
     * Shows the overlay with the specified content type.
     * @param {string} type - The type of content to display ('whitepaper', 'branding', 'social_media').
     */
    function showOverlay(type) {
        // Hide previously visible content
        if (currentVisibleContent) {
            currentVisibleContent.classList.add('hidden');
        }

        const targetBlock = contentBlocks[type];
        if (targetBlock) {
            targetBlock.classList.remove('hidden');
            currentVisibleContent = targetBlock;
            overlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling

            // Generate TOC and reset scroll position after content is visible
            setTimeout(() => {
                generateTOC(currentVisibleContent);
                mainContentScrollArea.scrollTop = 0; // Scroll content to top
                updateScrollSpy(); // Update scroll spy for initial state
            }, 50); // Small delay to allow content to render before TOC generation
        }
    }

    /**
     * Hides the overlay and resets its state.
     */
    function hideOverlay() {
        overlay.classList.add('hidden');
        document.body.style.overflow = ''; // Restore background scrolling

        if (currentVisibleContent) {
            currentVisibleContent.classList.add('hidden');
        }
        currentVisibleContent = null;

        // Hide and reset TOC elements
        tocContainer.classList.add('hidden', 'toc-collapsed');
        tocToggleButton.classList.add('hidden');
        tocContentWrapper.innerHTML = ''; // Clear TOC links
        tocLinks = [];
        sectionHeadings = [];
        mainContentScrollArea.scrollTop = 0; // Reset content scroll position
    }

    // Event Listeners for action buttons
    actionButtons.forEach(btn => {
        btn.addEventListener('click', () => showOverlay(btn.dataset.content));
    });

    // Event Listener for closing the overlay
    closeOverlayLink.addEventListener('click', (e) => {
        e.preventDefault();
        hideOverlay();
    });

    // Close overlay when clicking outside the content area
    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            hideOverlay();
        }
    });

    // Close overlay with Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
            hideOverlay();
        }
    });
});