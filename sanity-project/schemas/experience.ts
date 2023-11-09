export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',
  fields: [
    {
      title: 'Sort Order Position',
      name: 'sortOrder',
      type: 'number',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Role / Position',
    },
    {
      name: 'employer',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'currentPosition',
      type: 'boolean',
      title: 'Current Position',
      initialValue: false,
    },
    {
      name: 'startDate',
      title: 'Start date',
      type: 'date',
      dateFormat: 'MMM-YYYY',
      options: {
        dateFormat: 'MMM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'endDate',
      title: 'End date',
      type: 'date',
      dateFormat: 'MMM-YYYY',
      options: {
        dateFormat: 'MMM-YYYY',
        calendarTodayLabel: 'Today',
      },
      readOnly: ({parent, value}: any) => !value && parent?.currentPosition,
    },
    {
      title: 'Technologies',
      name: 'technologies',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
