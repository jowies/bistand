import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
  const superAdmin = Meteor.users.findOne({
    username: 'arrkom',
  });
  console.log(superAdmin);
  if (!superAdmin) {
    Accounts.createUser({
      username: 'arrkom',
      password: 'hestErBest',
      adminLevel: 1,
    });
  }
  console.log("woopie");
});
