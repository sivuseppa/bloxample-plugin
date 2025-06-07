(function () {
  /**
   * Load WordPress dependencies
   * This is the same as importing the dependencies in an ES2015+ environment
   */
  const { createElement } = window.wp.element;
  const { RichText, useBlockProps } = window.wp.blockEditor;
  const { registerBlockType } = window.wp.blocks;
  const { Flex, Card, CardBody, CardHeader } = window.wp.components;
  const { useEntityProp } = window.wp.coreData;

  /**
   * Register the block
   */
  registerBlockType('bloxample/dynamic-meta', {
    edit: function ({ context: { postType, postId } }) {
      const [meta, updateMeta] = useEntityProp('postType', postType, 'meta', postId);
      const { bloxample_dynamic_meta } = meta || {};
      return createElement(
        Card,
        {
          ...useBlockProps(),
          className: 'bloxample-dynamic-meta-card',
        },
        createElement(CardHeader, null, 'Dynamic Block'),
        createElement(
          CardBody,
          {
            className: 'bloxample-dynamic-meta-card-body',
          },
          createElement(
            Flex,
            { direction: 'column', gap: '10px' },
            createElement(RichText, {
              tagName: 'p',
              value: bloxample_dynamic_meta || '',
              onChange: (value) => updateMeta({ bloxample_dynamic_meta: value }),
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
