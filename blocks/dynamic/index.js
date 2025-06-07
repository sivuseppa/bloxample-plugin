(function () {
  /**
   * Load WordPress dependencies
   * This is the same as importing the dependencies in an ES2015+ environment
   */
  const { createElement } = window.wp.element;
  const { RichText, useBlockProps } = window.wp.blockEditor;
  const { registerBlockType } = window.wp.blocks;
  const { Flex, Card, CardBody, CardHeader } = window.wp.components;

  /**
   * Register the block
   */
  registerBlockType('bloxample/dynamic', {
    edit: function ({ attributes, setAttributes }) {
      return createElement(
        Card,
        {
          ...useBlockProps(),
          className: 'bloxample-dynamic-card',
        },
        createElement(CardHeader, null, 'Dynamic Block'),
        createElement(
          CardBody,
          {
            className: 'bloxample-dynamic-card-body',
          },
          createElement(
            Flex,
            { direction: 'column', gap: '10px' },
            createElement(RichText, {
              tagName: 'p',
              value: attributes.content,
              onChange: (value) => setAttributes({ content: value }),
              placeholder: 'Add your content here...',
            })
          )
        )
      );
    },
    save: function () {
      return null; // This block is dynamic, so it does not save any static content.
    },
  });
})();
