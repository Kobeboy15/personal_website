export default {
  name: 'designs',
  type: 'document',
  title: 'Design Images',
  fields: [
    {
      title: 'Image',
      name: 'design_image',
      type: 'image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
  ],
}
