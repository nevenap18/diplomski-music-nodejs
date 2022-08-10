export const getPasswordHash = (password: string): string => {
  const crypto = require('crypto')

  const hash = crypto.createHash('sha512')
  hash.update(password)

  return hash.digest('hex').toUpperCase()
}