const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    // tells mongoose to use these funtions
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // id is set to false because Mongoose returns a virtuals not needing an id
    id: false,
  }
);

// friendCount virtual that returns the length of the user's friends array
UserSchema.virtual(friendCount).get(function () {
  return this.friends.reduce(
    (total, friend) => total + friend.friends.length + 1,
    0
  );
});
