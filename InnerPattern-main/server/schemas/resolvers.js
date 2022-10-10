const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const Entry = require('../models/Entry');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    // this queries me - the logged in user
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .select('-__v -password')
        .populate('entries');
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    entries: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Entry.find(params).sort({ createdAt: -1 });
    },
  },
  entry: async (parent, { _id }) => {
    return Entry.findOne({ _id });
  },
    // mutations start here
    Mutation: {
    // This is the login user mutation with authentication and returns a token and User
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("User not found");
      }

      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Password is incorrect");
      }
      const token = signToken(user);

      return { token, user };
    },
    // this is the addUser muatation that returns a token and a user - used in the signup form
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addEntry: async (parent, args, context) => {
      if (context.user) {
        const entry = await Entry.create({ ...args, email: context.user.email });
        await User.findByIdAndUpdate(
          {
            _id: context.user._id
          },
          {
            $push: { entries: entry._id }
          },
          {
            new: true
          }
        );

        return entry;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;
