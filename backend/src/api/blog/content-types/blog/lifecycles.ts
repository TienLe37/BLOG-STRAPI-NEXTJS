// src/api/post/content-types/post/lifecycles.ts
import slugify from "slugify";

export default {
  beforeCreate(event) {
    const { data } = event;
    if (data.title) {
      data.slug = slugify(data.title, { lower: true, strict: true, locale: 'vi' });
    }
  },
  beforeUpdate(event) {
    const { data } = event;
    if (data.title) {
      data.slug = slugify(data.title, { lower: true, strict: true, locale: 'vi' });
    }
  },
};
