document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('contentOverlay');
  const content = document.getElementById('contentDisplay');
  const closeBtn = document.getElementById('closeButton');
  const buttons = document.querySelectorAll('.main-button');

  const htmlBlocks = {
    website: `
      <h2 id="dialogTitle" class="text-3xl font-bold mb-4">Website Under Construction</h2>
      <p class="text-lg mb-2">Our official CONCORDIA CASH website is currently under development.</p>
      <p class="text-lg mb-4">Please check back regularly for updates!</p>
      <p class="text-lg"><a href="https://concordia.cash/" target="_blank" rel="noopener noreferrer" class="text-[var(--concordia-green)] hover:text-[var(--concordia-red)] font-semibold underline">https://concordia.cash/</a></p>
    `,
    whitepaper: `
      <h1>Concordia Cash</h1>
<h2>Subtitle: Burning the Past by Forging a New Autonomous Future</h2>
<p><strong>Authors:</strong> Concordia Curators – concordia.curators@gmail.com<br/>
<strong>Status:</strong> Draft v0.1 – Open for Review<br/>
<strong>Last Updated:</strong> 2025-06-14  </p>
<h2>Abstract</h2>
<h1>Introduction</h1>
<h1>Problem Statement</h1>
<p>The DECENOMY ecosystem began as a loosely coordinated collection of independent blockchains. Over time, however, its centralization around a single leadership figure led to its collapse. Decisions were made unilaterally, with a small inner circle controlling infrastructure, and there were no formal governance processes through which communities could intervene or redirect the project. When that leadership became inactive, the ecosystem stalled. Development stopped, community members lost access to exchange infrastructure, and no one had the authority or tools to restore momentum. What could have become a thriving federated system deteriorated into fragmented, stagnant chains with diminishing relevance.</p>
<p>This kind of failure is not unique to DECENOMY. Governance remains one of the most unresolved challenges in blockchain architecture. Even prominent Layer 1 projects struggle with this. Ethereum, for example, relies on informal social consensus shaped by core developers and the Ethereum Foundation. ETH holders do not have formal voting rights. Instead, decisions are made in meetings and chats among developers and then implemented through hard forks. Vitalik Buterin, although he is not officially in charge, still holds considerable influence, especially within the Ethereum Foundation. This centralized leadership focused on a single person and lacking a token holder voting mechanism continues to raise concerns about the project’s decentralization and legitimacy.</p>
<p>Bitcoin, on the other hand, has a radically minimalist governance model, where its protocol is famously resistant to change, and BTC holders have no way to vote, propose updates, or express collective intent. Protocol changes are often chosen to be included by a small, selected, elite group of developers that must be adopted by a critical mass of miners and node operators through consensus in practice, not by design. While this has helped preserve Bitcoin’s resilience and neutrality, it has also led to protocol stagnation and a lack of innovation, as well as internal conflicts over controversial upgrades. Coin holders are spectators rather than participants.</p>
<p>Tezos provides an entirely different example. As one of the first chains to implement formal on-chain governance, it empowers its XTZ holders to propose and vote directly on upgrades. Its self-amending protocol allows it to evolve without hard forks. Every successful proposal can include funding mechanisms for contributors, ensuring a sustainable development cycle. Tezos proves that it is possible to design a Layer 1 chain where decisions are made transparently, collectively, and without dependence on off-chain authority.</p>
<p>Concordia Cash takes inspiration from this more democratic model. It transitions from a failed governance system, or the lack thereof, to a 180-degree turn where it is being rebuilt with a clear commitment to coin-holder sovereignty. Its DAO-first structure ensures that the community decides everything, from technical upgrades and protocol rules to budget allocation and team roles. Concordia is not just another chain. It is a response to the governance failures of the past and a demonstration of what community-led cryptocurrency can look like.</p>
<h2>The Concordia Proposal</h2>
<p>TEST
TEST</p>
<h3>The Curators' Role</h3>
<h3>The Burn Process</h3>
<h3>Use Cases</h3>
<h3>Tokenomics</h3>
<h3>Governance</h3>
<h4>Proposals</h4>
<h4>Protocol Change Proposals</h4>
<h4>Development Proposal</h4>
<h4>Budget Proposal</h4>
<h3>Development Process</h3>
<h2>Final Remarks</h2>
    `,
    branding: `
      <p><img height="200" src="images/branding/concordia_logo.svg" width="200"/></p>
<h1>CONCORDIA CASH</h1>
<h3>Brand Guidelines</h3>
<p>Welcome to the official brand guidelines for CONCORDIA CASH. </p>
<p>This document is your comprehensive guide to understanding and correctly applying our brand identity, reflecting our bold and revolutionary mission in the blockchain landscape.</p>
<p>Born from the merge of 17 abandoned blockchains, CONCORDIA is not just a new platform, it's a new philosophy of decentralized governance. </p>
<p>Consistent use of these guidelines will ensure that <strong>CONCORDIA CASH</strong> is always presented clearly and powerfully, reinforcing our vision to unify and revitalize forgotten projects, and empower users through complete transparency and participation. </p>
<p>These guidelines are intended for all members, partners, developers, and anyone creating communications for or about <strong>CONCORDIA CAS</strong>H.</p>
<h2>1. Logo Guidelines</h2>
<p>The <strong>CONCORDIA CASH</strong> logo is the most recognizable element of our brand. </p>
<p>This section outlines its correct usage, variations, and restrictions. Consistent application of the logo is essential for maintaining brand recognition and integrity across all platforms and materials. It visually embodies our commitment to precision, reliability, and innovation.</p>
<h3>1.1 Primary Logo</h3>
<p>The primary logo features a stylized 'C' within a green circle. The 'C' is inspired by the Montserrat Bold typeface, reflecting strength and modernity. </p>
<p>The circular enclosure symbolizes unity, the decentralized nature of our DAO, and the collective power derived from our community. </p>
<p>It represents the unification of diverse projects into a cohesive, secure ecosystem.</p>
<p><img height="200" src="images/branding/concordia_logo.svg" width="200"/></p>
<h3>1.2 Logo Variations</h3>
<p>To ensure versatility across platforms and applications, the following logo variations are officially approved. </p>
<p>Each variation maintains brand integrity while allowing flexibility for different backgrounds, use cases, and design requirements.</p>
<table>
<thead>
<tr>
<th>Variation</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Icon / Favicon</td>
<td>For all kind of applications</td>
<td><img height="200" src="images/branding/concordia_logo_box.svg" width="200"/></td>
</tr>
<tr>
<td>Monochrome Reverse</td>
<td>For dark backgrounds</td>
<td><img height="200" src="images/branding/concordia_logo_box_monochrome.svg" width="200"/></td>
</tr>
<tr>
<td>Black &amp; White Negative</td>
<td>For specific applications</td>
<td><img height="200" src="images/branding/concordia_logo_box_b&amp;w.svg" width="200"/></td>
</tr>
</tbody>
</table>
<h3>1.3 Combined Logo and Logotype</h3>
<p>The logo can be combined with the "<strong>CONCORDIA CASH</strong>" logotype to form the complete brand mark. </p>
<p>This lockup ensures consistent presentation of the full brand name alongside the iconic symbol, reinforcing brand recognition and professionalism across all applications.</p>
<h4>Vertical Layouts</h4>
<table>
<thead>
<tr>
<th>Variation</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Vertical (Full Color)</td>
<td>Combined Logo &amp; Text</td>
<td><img height="200" src="images/branding/concordia_logo_text_vert.svg" width="200"/></td>
</tr>
<tr>
<td>Vertical (Monochrome Reverse)</td>
<td>Combined Logo &amp; Text</td>
<td><img height="200" src="images/branding/concordia_logo_text_vert_monochrome.svg" width="200"/></td>
</tr>
<tr>
<td>Vertical (Black and White)</td>
<td>Combined Logo &amp; Text</td>
<td><img height="200" src="images/branding/concordia_logo_text_vert_b&amp;w.svg" width="200"/></td>
</tr>
</tbody>
</table>
<h4>Horizontal Layouts</h4>
<table>
<thead>
<tr>
<th>Variation</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Horizontal (Full Color)</td>
<td>Combined Logo &amp; Text</td>
<td><img height="200" src="images/branding/concordia_logo_text_hor.svg" width="200"/></td>
</tr>
<tr>
<td>Horizontal (Monochrome Reverse)</td>
<td>Combined Logo &amp; Text</td>
<td><img height="200" src="images/branding/concordia_logo_text_hor_monochrome.svg" width="200"/></td>
</tr>
<tr>
<td>Horizontal (Black and White)</td>
<td>Combined Logo &amp; Text</td>
<td><img height="200" src="images/branding/concordia_logo_text_hor_b&amp;w.svg" width="200"/></td>
</tr>
</tbody>
</table>
<h3>1.4 Minimum Size &amp; Clear Space</h3>
<p>To maintain legibility and visual impact, please adhere to the following guidelines: 
- <strong>Clear Space:</strong> A protective clear space must surround the logo at all times, free from text, graphics, or any distracting elements. This space should be proportionate to the size of the logo itself to preserve its integrity and visibility.
- <strong>Minimum Size:</strong>  The logo must never be used below the specified minimum dimensions. Using it at a smaller scale can compromise legibility and negatively impact brand perception.</p>
<pre><code>| Application | Minimum Width/Height |
|-------------|----------------------|
| Digital (Web, Apps) | 32 pixels |
| Print (Small items) | 1 cm / 0.4 inches |
| Favicon / App Icon | 16 pixels (full logo) |
| Black and White (Negative) | 32 pixels |
</code></pre>
<h3>1.5 Incorrect Usage</h3>
<p>To maintain brand integrity, the <strong>CONCORDIA CASH</strong> logo must not be altered in any way. The following are examples of misuse that are strictly prohibited.</p>
<p>Adhering to these restrictions ensures the logo is always presented as intended, reinforcing a consistent, recognizable, and professional brand image across all platforms and materials.</p>
<table>
<thead>
<tr>
<th>DO NOT</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Stretch or Distort</td>
<td>Do not alter the logo’s aspect ratio under any circumstances.</td>
</tr>
<tr>
<td>Use unauthorized colors</td>
<td>Only approved brand colors should be used</td>
</tr>
<tr>
<td>Add Effects (Shadows, etc.)</td>
<td>Avoid applying shadows, glows, or other stylized effects such as 3D rendering</td>
</tr>
<tr>
<td>Place on Busy Backgrounds</td>
<td>Ensure sufficient contrast and maintain clear space around the logo</td>
</tr>
<tr>
<td>Rotate</td>
<td>Keep the logo upright at all times. It must never be rotated or tilted</td>
</tr>
<tr>
<td>Outline</td>
<td>Do not add outlines, strokes, or borders that are not part of the original design</td>
</tr>
</tbody>
</table>
<h2>2. Color Palette</h2>
<p>The <strong>CONCORDIA CASH</strong> color palette is integral to our brand identity. It evokes trust, innovation, and financial stability. </p>
<p>This section details our primary, secondary, and accent colors, along with their specific codes for digital and print applications. Consistent use of these colors is key to a unified brand presence.</p>
<h3>2.1 Primary Brand Colors</h3>
<p>These colors form the foundation of the <strong>CONCORDIA CASH</strong> brand identity and are derived directly from the logo. As cornerstone colors, they should be used most prominently across all brand materials.</p>
<table>
<thead>
<tr>
<th>Color Name</th>
<th>HEX</th>
<th>RGB</th>
<th>Usage</th>
<th>Color</th>
</tr>
</thead>
<tbody>
<tr>
<td>Concordia Green</td>
<td><code>#016001</code></td>
<td>1, 96, 1</td>
<td>Primary branding, logo, calls-to-action</td>
<td><img height="50" src="images/branding/concordia_color_fix_green.svg" width="50"/></td>
</tr>
<tr>
<td>Concordia White</td>
<td><code>#FEFEFE</code></td>
<td>254, 254, 254</td>
<td>Backgrounds, text on dark backgrounds</td>
<td><img height="50" src="images/branding/concordia_color_fix_white.svg" width="50"/></td>
</tr>
</tbody>
</table>
<h3>2.2 Secondary &amp; Accent Colors</h3>
<p>These colors complement the primary palette and should be used to enhance design elements such as UI components, illustrations, icons, or data visualizations.</p>
<p>Use them thoughtfully to reinforce brand harmony while ensuring Concordia Green and White remain dominant in all applications</p>
<table>
<thead>
<tr>
<th>Color Name</th>
<th>HEX</th>
<th>RGB</th>
<th>Usage</th>
<th>Color</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tech Blue</td>
<td><code>#2A80B9</code></td>
<td>42, 128, 185</td>
<td>Secondary actions, tech graphics</td>
<td><img height="50" src="images/branding/concordia_color_fix_tech_blue.svg" width="50"/></td>
</tr>
<tr>
<td>Dark Neutral Grey</td>
<td><code>#4B5563</code></td>
<td>75, 85, 99</td>
<td>Body text, secondary information</td>
<td><img height="50" src="images/branding/concordia_color_fix_dark_neutral_grey.svg" width="50"/></td>
</tr>
<tr>
<td>Light Neutral Grey</td>
<td><code>#D1D5DB</code></td>
<td>209, 213, 219</td>
<td>Borders, dividers</td>
<td><img height="50" src="images/branding/concordia_color_fix_light_neutral_grey.svg" width="50"/></td>
</tr>
<tr>
<td>Accent Gold</td>
<td><code>#FFD700</code></td>
<td>255, 215, 0</td>
<td>Highlights, premium features</td>
<td><img height="50" src="images/branding/concordia_color_fix_accent_gold.svg" width="50"/></td>
</tr>
</tbody>
</table>
<h3>2.3 Color Usage &amp; Accessibility</h3>
<ul>
<li>Strive for high contrast between text and background colors to meet WCAG AA accessibility standards. For example, Concordia White <code>#FEFEFE</code> text on Concordia Green <code>#016001</code> provides excellent contrast.</li>
<li>Use Concordia Green as the primary call-to-action color across digital interfaces.</li>
<li>Secondary colors should support, not overpower, the primary palette, ensuring brand hierarchy remains clear.</li>
<li>Always test color combinations for legibility, especially considering users with color vision deficiencies.</li>
</ul>
<h3>2.4 Gradient Colors</h3>
<p>Gradients can add depth and a modern aesthetic when used thoughtfully. Approved gradients are derived from our core brand colors to ensure visual consistency and alignment with our identity.</p>
<p>They are primarily recommended for backgrounds, large graphical elements, or subtle UI accentsm, always supporting the brand’s visual hierarchy without overshadowing key messaging or elements.</p>
<table>
<thead>
<tr>
<th>Color Name</th>
<th>HEX</th>
<th>Usage</th>
<th>Color</th>
</tr>
</thead>
<tbody>
<tr>
<td>Concordia Green Gradient (Darker)</td>
<td><code>linear-gradient (to right, #016001, #004000)</code></td>
<td>Primary backgrounds, hero sections, large graphical elements.</td>
<td><img height="50" src="images/branding/concordia_color_gradient_green.svg" width="50"/></td>
</tr>
<tr>
<td>Concordia Green to Tech Blue Gradient</td>
<td><code>linear-gradient (to right, #016001, #2A80B9)</code></td>
<td>Dynamic UI elements, data visualization backgrounds, subtle transitions.</td>
<td><img height="50" src="images/branding/concordia_color_gradient_green_to_tech_blue.svg" width="50"/></td>
</tr>
<tr>
<td>Light Neutral Gradient</td>
<td><code>linear-gradient (to bottom, #FEFEFE, #D1D5DB)</code></td>
<td>Subtle background textures, card elements, containers.</td>
<td><img height="50" src="images/branding/concordia_color_gradient_light_neutral.svg" width="50"/></td>
</tr>
</tbody>
</table>
<p>Always ensure text placed on gradients has sufficient contrast and readability. </p>
<p>Avoid using gradients for small text or intricate details.</p>
<h2>3. Typography</h2>
<p>Typography plays a crucial role in communicating the personality and values of <strong>CONCORDIA CASH</strong>. This section defines the official fonts, their recommended usage, and typographic hierarchy.</p>
<p>Consistent typography ensures readability and a cohesive visual language that aligns with our modern, trustworthy identity.</p>
<h3>3.1 Primary Font: Montserrat</h3>
<p>Montserrat is our primary font. Its geometric forms and clean lines reflect modernity and stability, aligning with the 'C' in our logo (which was inspired by Montserrat Bold). It is highly versatile and should be used for headlines, subheadings, and prominent text elements.</p>
<p>Available via https://fonts.google.com/specimen/Montserrat</p>
<p><strong>Key Weights:</strong>
- <strong>Montserrat Black (900)</strong> - For major headlines.
- <strong>Montserrat Bold (700)</strong> - For H2, H3, key calls-to-action.
- Montserrat SemiBold (600) - For H4, emphasis.
- Montserrat Medium (500) - For navigation elements and certain UI components.
- Montserrat Regular (400) - For short descriptive text where Montserrat is preferred over body copy.</p>
<h3>3.2 Secondary Font: Open Sans</h3>
<p>For body copy and longer text passages, Open Sans serves as our recommended secondary font. This highly legible humanist sans-serif complements Montserrat beautifully, offering excellent readability both on screen and in print.</p>
<p>Available via https://fonts.google.com/specimen/Open+Sans</p>
<p><strong>Key Weights:</strong>
- <strong>Open Sans Bold (700)</strong> - For emphasis within body copy.
- Open Sans Regular (400) - For all main body text.
- Open Sans Light (300) - For captions or tertiary information.</p>
<h3>3.3 Typographic Hierarchy</h3>
<p>A clear typographic hierarchy enhances readability and guides the reader through content effectively. Follow this typographic scale for optimal consistency:</p>
<h3>Typography Hierarchy</h3>
<table>
<thead>
<tr>
<th>Type Element</th>
<th>Font Family</th>
<th>Weight</th>
<th>Size (Desktop / Mobile)</th>
<th>Line Height</th>
<th>Color</th>
</tr>
</thead>
<tbody>
<tr>
<td>H1 / Page Title</td>
<td>Montserrat</td>
<td>Black (900)</td>
<td>2.5rem (40px) / 2rem (32px)</td>
<td>1.2</td>
<td><code>#016001</code></td>
</tr>
<tr>
<td>H2 / Section Title</td>
<td>Montserrat</td>
<td>Bold (700)</td>
<td>2rem (32px) / 1.75rem (28px)</td>
<td>1.3</td>
<td><code>#016001</code></td>
</tr>
<tr>
<td>H3 / Subsection Title</td>
<td>Montserrat</td>
<td>SemiBold (600)</td>
<td>1.5rem (24px) / 1.25rem (20px)</td>
<td>1.4</td>
<td><code>#016001</code></td>
</tr>
<tr>
<td>H4 / Sub-subsection</td>
<td>Montserrat</td>
<td>SemiBold (600)</td>
<td>1.25rem (20px) / 1.125rem (18px)</td>
<td>1.5</td>
<td><code>#1f2937</code></td>
</tr>
<tr>
<td>Body / Paragraph</td>
<td>Open Sans</td>
<td>Regular (400)</td>
<td>1rem (16px) / 0.9375rem (15px)</td>
<td>1.6</td>
<td><code>#4b5563</code></td>
</tr>
<tr>
<td>Lead Paragraph</td>
<td>Open Sans</td>
<td>Regular (400)</td>
<td>1.125rem (18px) / 1rem (16px)</td>
<td>1.7</td>
<td><code>#4b5563</code></td>
</tr>
<tr>
<td>Links / Buttons</td>
<td>Montserrat</td>
<td>Medium (500)</td>
<td>1rem (16px) / 0.9375rem (15px)</td>
<td>1.5</td>
<td><code>#016001</code></td>
</tr>
<tr>
<td>Small Text / Caption</td>
<td>Open Sans</td>
<td>Regular (400)</td>
<td>0.875rem (14px) / 0.8125rem (13px)</td>
<td>1.5</td>
<td><code>#6b7280</code></td>
</tr>
</tbody>
</table>
<h3>3.4 Web Font Implementation</h3>
<p>EEnsure fonts are loaded efficiently to maintain optimal performance across platforms. </p>
<p>Use Google Fonts CDN links in HTML for reliable delivery and ease of implementation. </p>
<p>Always specify fallback fonts (e.g., <code>sans-serif</code>) in your CSS to ensure readability even if fonts fail to load.</p>
<p><code>&lt;link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&amp;family=Open+Sans:wght@300;400;600;700&amp;display=swap" rel="stylesheet"&gt;</code></p>
<h2>4. Imagery &amp; Visual Style</h2>
<p>Imagery and visual assets should consistently reinforce the <strong>CONCORDIA CASH</strong> brand values, conveying professionalism, innovation, clarity, and approachability.</p>
<h3>4.1 Photography Principles</h3>
<ul>
<li><strong>Style:</strong> Authentic, modern, and optimistic. Avoid overly staged or generic stock photos. Focus on natural lighting and clean compositions.</li>
<li><strong>Subject Matter:</strong> Depict concepts like secure transactions, global connectivity, community interaction, and the positive impact of financial technology. Images of people interacting with technology or abstract representations of secure networks are preferred.</li>
<li><strong>Color Tone:</strong> Photography should generally align with the brand's primary and secondary color palette, featuring natural lighting and clear compositions to maintain visual harmony.</li>
</ul>
<h3>4.2 Illustration &amp; Iconography</h3>
<ul>
<li><strong>Style:</strong> Clean, geometric, and minimalist. Line art or flat design illustrations are preferred. Icons should be simple, intuitive, and instantly recognizable. The style should echo the precision of the logo and Montserrat typeface.</li>
<li><strong>Color:</strong> Primarily use Concordia Green and Concordia White. Limited and intentional use of secondary colors (Concordia Blue, Grey, Accent Gold) is permissible for emphasis or categorization, ensuring they do not overpower the primary palette.</li>
<li><strong>Consistency:</strong> All icons and illustrations should belong to a unified set, maintaining consistent stroke weights, corner radii, and overall visual language to ensure a cohesive visual system.</li>
</ul>
<h2>5. Conclusion</h2>
<p>These <strong>CONCORDIA CASH</strong> Brand Guidelines are designed to be a living document, evolving as our revolutionary project grows and adapts. Adherence to these principles is not merely about aesthetics; it is about building a consistent, trustworthy, and recognizable brand that stands out as a unifying movement in the blockchain landscape.</p>
<p>By consistently applying these guidelines, <strong>CONCORDIA CASH</strong> ensures that every interaction reinforces its commitment to decentralized governance, transparency, user participation, and the revitalization of forgotten projects, creating a legacy of collective power.</p>
<h3>5.1 Maintaining Brand Consistency</h3>
<p>Consistency across all touchpoints strengthens brand recognition and credibility. Every application of the logo, colors, typography, imagery, tone of voice, and messaging contributes to shaping perceptions of <strong>CONCORDIA CASH</strong>. </p>
<p>A unified brand presence fosters trust and familiarity, which are critical for establishing a strong foothold in the competitive and rapidly evolving blockchain sector. Deviations, however minor, can lead to brand dilution and confusion in the market.</p>
<h3>5.2 Contact Information</h3>
<p>For questions regarding these brand guidelines, please contact:<br/>
<strong>The CONCORDIA CASH curators</strong><br/>
<a href="mailto:concordia.curators@gmail.com">concordia.curators@gmail.com</a></p>
<p>© 2025 CONCORDIA CASH. All Rights Reserved.</p>
    `
  };

  function showOverlay(type) {
    content.innerHTML = htmlBlocks[type] || '';
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function hideOverlay() {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    content.innerHTML = '';
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => showOverlay(btn.dataset.content));
  });

  closeBtn.addEventListener('click', hideOverlay);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) hideOverlay();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') hideOverlay();
  });
});
