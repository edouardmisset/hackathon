const Joi = require('joi');
const argon2 = require('argon2');
const db = require('../db');
const { API_BASE_URL } = require('../env');

const emailAlreadyExists = (email) =>
  db.user.findFirst({ where: { email } }).then((user) => !!user);

const findByEmail = (email) => db.user.findFirst({ where: { email } });

const hashingOptions = {
  memoryCost: 2 ** 16,
  timeCost: 5,
  type: argon2.argon2id,
};

const findOne = (id) => db.user.findUnique({ where: { id: parseInt(id, 10) } });

const { findMany } = db.user;

const hashPassword = (plainPassword) =>
  argon2.hash(plainPassword, hashingOptions);

const verifyPassword = (plainPassword, hashedPassword) =>
  argon2.verify(hashedPassword, plainPassword, hashingOptions);

const create = async ({ email, password, firstName, lastName, avatar }) => {
  const hashedPassword = await hashPassword(password);
  return db.user.create({
    data: { email, hashedPassword, firstName, lastName, avatar },
  });
};

const update = async (id, data) =>
  db.user.update({
    where: { id: parseInt(id, 10) },
    data: {
      ...data,
      avatar:
        typeof data.avatar === 'string'
          ? data.avatar.replace(`${API_BASE_URL}/`, '')
          : data.avatar,
    },
  });

const validate = (data, forUpdate = false) =>
  Joi.object({
    email: Joi.string()
      .email()
      .max(255)
      .presence(forUpdate ? 'optional' : 'required'),
    password: Joi.string()
      .min(8)
      .max(100)
      .presence(forUpdate ? 'optional' : 'required'),
    firstName: Joi.string()
      .max(255)
      .presence(forUpdate ? 'optional' : 'required'),
    lastName: Joi.string()
      .max(255)
      .presence(forUpdate ? 'optional' : 'required'),
    avatar: Joi.string()
      .max(255).allow(null, '')
      .optional(),
  }).validate(data, { abortEarly: false }).error;

const getSafeAttributes = (user) => {
  let { avatar } = user;
  if (
    avatar &&
    !avatar.startsWith('http://') &&
    !avatar.startsWith('https://')
  ) {
    avatar = `${API_BASE_URL}/${avatar}`;
  }
  return {
    ...user,
    avatar,
    hashedPassword: undefined,
    resetPasswordToken: undefined,
  };
};

module.exports = {
  emailAlreadyExists,
  hashPassword,
  create,
  findByEmail,
  verifyPassword,
  validate,
  findOne,
  findMany,
  update,
  getSafeAttributes,
  upsert: db.user.upsert,
};
