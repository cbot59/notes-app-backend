const mapDBToModel = ({
  // eslint-disable-next-line camelcase
  id, title, body, tags, created_at, updated_at,
}) => ({
  id,
  title,
  body,
  tags,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel };
