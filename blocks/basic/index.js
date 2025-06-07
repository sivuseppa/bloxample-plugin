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
  registerBlockType('bloxample/basic', {
    edit: function ({ attributes, setAttributes }) {
      return createElement(
        Card,
        {
          ...useBlockProps(),
          className: 'bloxample-basic-card',
        },
        createElement(CardHeader, null, 'Basic Block'),
        createElement(
          CardBody,
          {
            className: 'bloxample-basic-card-body',
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
    save: function ({ attributes }) {
      return createElement(
        'div',
        {
          ...useBlockProps.save(),
          className: 'bloxample-basic-card-saved',
        },
        createElement('h2', null, 'Basic Block'),
        createElement('p', null, attributes.content)
      );
    },
  });
})();
