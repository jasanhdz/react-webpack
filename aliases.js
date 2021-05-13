const path = require('path')

module.exports = {
  components: path.resolve(__dirname, './src/components/'),
  config: path.resolve(__dirname, './src/config/'),
  hooks: path.resolve(__dirname, './src/hooks/'),
  models: path.resolve(__dirname, './src/models/'),
  pages: path.resolve(__dirname, './src/pages/'),
  reducers: path.resolve(__dirname, './src/redux/reducers/'),
  store: path.resolve(__dirname, './src/redux/store/'),
  actions: path.resolve(__dirname, './src/redux/actions/'),
  styles: path.resolve(__dirname, './src/styles/'),
}