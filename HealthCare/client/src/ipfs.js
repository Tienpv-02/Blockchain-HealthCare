const ipfsClient = require('ipfs-http-client')

const projectId = '2OxBTfezxwyb83rdPyC5YCBTROi'
const projectSecret = '5e9011651cd0a045eb759f46e59cc3aa'
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

const ipfs = ipfsClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
})

export default ipfs
