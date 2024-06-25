export const listCategoriesQuery = `query MyQuery($filter: ModelCategoryFilterInput = {}) {
  listCategories(limit: 200, filter: $filter) {
    items {
      name
      parent
      index
      id
      cover
      i18n {
        name
        locale
      }
    }
  }
}
`;

export const listObjectsShortQuery = `query MyQuery($limit: Int = 10, $filter: SearchableObjectFilterInput = {}) {
  searchObjects(limit: $limit, filter: $filter) {
    items {
      cover
      category {
        name
      }
      i18n {
        name
        locale
      }
      name
      categoryId
      id
    }
  }
}
`;
