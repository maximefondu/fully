module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ed87f714eb25f749e49420bfea49d4d1'),
  },
});
