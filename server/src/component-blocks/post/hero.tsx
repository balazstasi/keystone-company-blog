/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core';
import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';

export const hero = component({
  label: 'Hero',
  schema: {
    imageSrc: fields.text({
      label: 'Image URL',
      defaultValue:
        'https://quartzdevs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fglow.min.bb1e8fe7.png&w=1920&q=75',
    }),
    caption: fields.conditional(fields.checkbox({ label: 'Show caption' }), {
      false: fields.empty(),
      true: fields.child({
        kind: 'block',
        placeholder: 'Write a caption...',
        formatting: 'inherit',
        links: 'inherit',
      }),
    }),
  },
  preview: function Hero(props) {
    return (
      <div>
        <NotEditable>
          <div
            css={{
              backgroundImage: `url(${props.fields.imageSrc.value})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              paddingTop: '56.25%',
              height: 0,
              width: '100%',
            }}
          />
        </NotEditable>
        {props.fields.caption.discriminant ? (
          <div css={{ textAlign: 'center' }}>{props.fields.caption.value.element}</div>
        ) : null}
      </div>
    );
  },
});
