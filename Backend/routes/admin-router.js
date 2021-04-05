
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')

const User = require('../models/user-model')
const Order = require('../models/order-model')
const Movie = require('../models/movie-model')


const mongo = require('mongoose')

AdminBro.registerAdapter(AdminBroMongoose)


const locale = {
  translations: {
    labels: {
      // change Heading for Login
      loginWelcome: '',
    },
    messages: {
      loginWelcome: '',
    },
  },
};

const adminBro = new AdminBro({
  databases: [mongo],
  resources: [User, Order, Movie],
  rootPath: '/admin',
  locale,
  branding: {
    companyName: 'Net Film',
    softwareBrothers: false,
    logo: '',
  },

})



const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'admin@example.com',
  password: process.env.ADMIN_PASSWORD || 'lovefilms',
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword: process.env.ADMIN_COOKIE_PASS || 'supersecret-and-long-password-for-a-cookie-in-the-browser',
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN
    }
    return null
  }
})

module.exports = router
