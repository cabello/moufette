const mongoose = require('mongoose');
// const bcrypt = require('bcrypt')
// const SALT_WORK_FACTOR = 10;

const teamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      // required: true,
    },
    members: {
      type: [String],
      required: true,
    },
    integrations: {
      type: JSON,
    },
    widgetConfig: {
      header: {
        type: String,
        default: 'Help us improve Moufette'
      },
      theme: {
        colors: {
          primary: {
            type: String,
            default: '#1890ff'
          }
        }
      },
      mode: {
        style: {
          type: String,
          enum: ['fab', 'tab'],
          default: 'fab'
        },
        text: {
          type: String,
          default: 'We Love Feedback'
        }
      },
      tabs: {
        feedback: { type: Boolean, default: true },
        features: { type: Boolean, default: true },
      }
    }
  },
  { timestamps: {} },
);



// index ======================
teamSchema.index({ name: 'text' });

// // methods ======================
teamSchema.methods.isMember = function (userId) {
  return this.members.includes(userId)
};

// teamSchema.pre('save', function (next) {
//   var team = this;

//   // only hash the password if it has been modified (or is new)
//   if (!team.isModified('password')) return next();

//   // generate a salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
//     if (err) return next(err);

//     // hash the password using our new salt
//     bcrypt.hash(team.password, salt, function (err, hash) {
//       if (err) return next(err);

//       // override the cleartext password with the hashed one
//       team.password = hash;
//       next();
//     });
//   });
// });

// create the model for teams and expose it to our app
module.exports = mongoose.model('Team', teamSchema);
