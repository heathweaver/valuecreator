// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'company',
      type: 'document',
      title: 'Company',
      description: 'Enter competitor details',
      fields: [
        {
          name: 'name',
          title: 'Company Name',
          type: 'string',
        },
        {
          name: 'website',
          title: 'Company Website',
          type: 'url',
        },
        {
          name: 'page_title',
          title: 'Website\'s Page Title',
          type: 'string',
        },
        {
          name: 'location',
          title: 'HQ Location',
          type: 'geopoint',
        },
        {
          name: 'incorporation_year',
          title: 'Founded Date (Year)',
          type: 'number',
          description: 'Check Crunchbase',
        },
        {
          name: 'num_employees',
          title: 'Number of Employees',
          type: 'number',
          description: 'From LinkedIn',
        },
        {
          name: 'arr',
          title: 'Annual Recurring Revenue',
          type: 'string',
        },
        {
          name: 'mrr',
          title: 'Monthly Recurring Revenue',
          type: 'number',
        },
        {
          name: 'market_share',
          title: 'Estimated Market Share',
          type: 'number',
        },
        {
          name: 'purpose',
          title: 'Company Purpose Statement',
          type: 'text',
          description: 'Check company blurb from Crunchbase, Hoovers, or other',
        },
        {
          name: 'value_props',
          title: 'Value Propositions',
          type: 'array',
          of: [{
            name: 'usp',
            title: 'Unique Selling Points',
            type: 'string',
          },
          {
            name: 'ksp',
            title: 'Key Selling Points',
            type: 'string',
          }]
        },
        {
          name: 'pricing',
          title: 'Price Structure',
          type: 'number',
        },
        {
          name: 'scores',
          title: '',
          type: 'object',
          fields: [{
              name: 'score_marketing',
              title: 'Rate the competitor\'s Marekting effectiveness from 1-10',
              type: 'number',
            },
            {
              name: 'score_sales',
              title: 'Rate the competitors Sales effectiveness from 1-10',
              type: 'number'
            },
            {
              name: 'score_support',
              title: 'Rate the competitor\'s Support effectivenss from 1-10',
              type: 'number',
            }
          ]
        }
      ]
    }
  ])
})
