export const searchSpotsQuery = `
   query SearchSpots($filter: SearchableSpotFilterInput, $sort: [SearchableSpotSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableSpotAggregationInput]) {
     searchSpots(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
     ) {
       items {
         id
         value
         i18n {
           locale
           value
         }
       }
       nextToken
       total
     }
   }
   `;

export const filterObjects = `query filterLandingObjects($filter: FacetLandingObjectFilterInput) {
  filterLandingObjects(
    filter: $filter
  ) {
    aggregations {
      googleRatings {
        doc_count
        facets {
          buckets {
            from
            key
          }
        }
      }
      categories {
        facets {
          buckets {
            doc_count
            key
          }
        }
     }
     regions {
       facets {
         buckets {
           doc_count
           key
         }
       }
     }
    }
    total
  }
}
`;

export const getFiltersCategoriesQuery = `query MyQuery(
  $filter: SearchableCategoryFilterInput = {},
) {
  searchCategories(limit: 200, filter: $filter) {
    items {
      name
      id
      index
      i18n {
        name
        locale
      }
   }
  }
}
`;
