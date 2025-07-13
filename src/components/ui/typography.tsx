
export const TypographyShowcase = () => {
  return (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="space-y-4">
        <h2 className="display-medium">Typography System</h2>
        <p className="body-text">
          A comprehensive typography scale that ensures consistent hierarchy and readability across all components.
        </p>
      </div>

      {/* Display Styles */}
      <section className="space-y-4">
        <h3 className="h3">Display Styles</h3>
        <div className="space-y-2">
          <div className="display-large">Display Large - Hero Headlines</div>
          <div className="display-medium">Display Medium - Page Headlines</div>
          <div className="display-small">Display Small - Section Headlines</div>
        </div>
      </section>

      {/* Heading Styles */}
      <section className="space-y-4">
        <h3 className="h3">Heading Hierarchy</h3>
        <div className="space-y-2">
          <h1 className="h1">Heading 1 - Main Page Title</h1>
          <h2 className="h2">Heading 2 - Major Sections</h2>
          <h3 className="h3">Heading 3 - Subsections</h3>
          <h4 className="h4">Heading 4 - Content Groups</h4>
          <h5 className="h5">Heading 5 - Minor Sections</h5>
          <h6 className="h6">Heading 6 - Smallest Headings</h6>
        </div>
      </section>

      {/* Body Text */}
      <section className="space-y-4">
        <h3 className="h3">Body Text</h3>
        <div className="space-y-4">
          <div className="body-large">
            Body Large - Used for introductory paragraphs and important content that needs emphasis.
          </div>
          <div className="body-text">
            Body Text - Standard paragraph text for most content. This is the default reading size.
          </div>
          <div className="body-small">
            Body Small - Used for secondary information, captions, and metadata.
          </div>
        </div>
      </section>

      {/* Interactive Text */}
      <section className="space-y-4">
        <h3 className="h3">Interactive Text</h3>
        <div className="space-y-2">
          <a href="#" className="link-text">Link Text - Standard links</a>
          <div className="navigation-text">Navigation Text - Menu items</div>
        </div>
      </section>

      {/* Utility Text */}
      <section className="space-y-4">
        <h3 className="h3">Utility Text</h3>
        <div className="space-y-2">
          <div className="caption-text">Caption Text - Image captions and metadata</div>
          <div className="overline-text">Overline Text - Labels and categories</div>
        </div>
      </section>

      {/* Content Examples */}
      <section className="space-y-4">
        <h3 className="h3">Content Example</h3>
        <article className="space-y-4">
          <h1 className="h1">The Future of Web Typography</h1>
          <p className="body-large">
            Modern web typography has evolved significantly, offering designers unprecedented control over text rendering and hierarchy.
          </p>
          <h2 className="h2">Design Systems</h2>
          <p className="body-text">
            A well-structured typography system forms the foundation of any robust design system. It ensures consistency across all touchpoints while maintaining accessibility and readability.
          </p>
          <h3 className="h3">Implementation</h3>
          <p className="body-text">
            Typography scales should be implemented with semantic HTML elements and CSS classes that reflect the content hierarchy, not visual appearance.
          </p>
          <ul className="space-y-2 ml-6 list-disc">
            <li className="body-text !mb-2">Use semantic HTML headings (h1-h6)</li>
            <li className="body-text !mb-2">Maintain consistent spacing</li>
            <li className="body-text !mb-2">Ensure proper contrast ratios</li>
          </ul>
        </article>
      </section>
    </div>
  )
}

export default TypographyShowcase 