function updateUserRoute({ body: { name, email, password }, params: { id } }) {
  updateUserController({ data: { name, email, password }, params: { id } });
}

function updateUserController({
  data: { name, email, password },
  params: { id },
}) {
  userRepository.update({ data: { name, email, password }, params: { id } });
}

const userRepository = {
  update: ({ data: { name, email, password }, params: { id } }) => {},
};
