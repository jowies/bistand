import React from 'react';
import Meteor from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import Info from '../../ui/layouts/info.jsx';
import Admin from '../../ui/layouts/admin.jsx';
import InfoContainer from '../../ui/containers/info_container.jsx';
import Products from '../../ui/pages/products.jsx';
import DonationsPage from '../../ui/pages/donationsPage.jsx';
import Auctions from '../../ui/pages/auctions.jsx';
import Stretch from '../../ui/pages/stretch.jsx';
import AuctionList from '../../ui/pages/auctionlist.jsx';
import Login from '../../ui/pages/login.jsx';

FlowRouter.route('/', {
  action() {
    mount(Info, { content: <InfoContainer /> });
  },
});

FlowRouter.route('/admin', {
  action() {
    mount(Login);
  },
});

FlowRouter.route('/admin/products', {
  action() {
    mount(Admin, { content: <Products /> });
  },
});

FlowRouter.route('/admin/donationspage', {
  action() {
    console.log('1');
    mount(Admin, { content: <DonationsPage /> });
  },
});

FlowRouter.route('/admin/auctions', {
  action() {
    mount(Admin, { content: <Auctions /> });
  },
});

FlowRouter.route('/admin/stretch', {
  action() {
    mount(Admin, { content: <Stretch /> });
  },
});


FlowRouter.route('/admin/auctionlist', {
  action() {
    mount(Admin, { content: <AuctionList /> });
  },
});
