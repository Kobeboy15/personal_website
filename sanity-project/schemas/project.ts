export default {
  name: 'project',
  type: 'document',
  title: 'projects',
  fields: [
    {
      title: 'Sort Order Position',
      name: 'sortOrder',
      type: 'number',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Project name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link to project',
    },
    {
      name: 'imageLink',
      type: 'string',
      title: 'Link to project image',
    },
  ],
}
