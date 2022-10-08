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
          const userData = await User.findOne({ _id: context.user._id }).select(
            "-__v -password"
          );
          return userData;
        }
        throw new AuthenticationError("Not logged in");
      },
    },
    Query: {
      // this queries me - the logged in user
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select(
            "-__v -password"
          );
          return userData;
        }
        throw new AuthenticationError("Not logged in");
      },
    },
    // mutations start here
    Mutation: {
      // This is the login user mutation with authentication and returns a token and User
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError("Invalid credentials");
        }
  
        const correctPassword = await user.isCorrectPassword(password);
        if (!correctPassword) {
          throw new AuthenticationError("Invalid credentials");
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
    // updateUser: async (parent, args, context) => {
    //   if (context.user) {
    //     return await User.findByIdAndUpdate(context.user._id, args, { new: true });
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },
    // login: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw new AuthenticationError("Invalid credentials");
    //   }

    //   const correctPassword = await user.isCorrectPassword(password);
    //   if (!correctPassword) {
    //     throw new AuthenticationError("Invalid credentials");
    //   }
    //   const token = signToken(user);

    //   return { token, user };
    // },
    // addEntry: async (parent, args, context) => {
    //   if (context.user) {
    //     const entry = await Entry.create({...args, username: context.user.username });
    //     await User.findByIdAndUpdate(
    //       {
    //         _id: context.user._id
    //       },
    //       {
    //         $push: { entries: entry._id}
    //       },
    //       {
    //         new: true
    //       }
    //     );

    //     return entry;
    //   }
    //   throw new AuthenticationError('You need to be looged in!');
    // }
  }
};

module.exports = resolvers;
