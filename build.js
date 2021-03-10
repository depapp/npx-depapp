'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Depa Panjie Purnama'),
  handle: chalk.white('depapp'),
  work: chalk.white('Quality Engineer'),
  github: chalk.gray('https://github.com/') + chalk.green('depapp'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('depapp'),
  instagram: chalk.gray('https://instagram.com/') + chalk.cyan('depapp'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('depapp'),
  web: chalk.cyan('https://depapp.github.io'),
  labelWork: chalk.white.bold('       Work:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelInstagram: chalk.white.bold('     Instagram:'),
  labelTwitter: chalk.white.bold('     Twitter:'),
  labelWeb: chalk.white.bold('        Web:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const instagraming = `${data.labelInstagram}  ${data.instagram}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const webing = `${data.labelWeb}  ${data.web}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + newline + // data.labelWork + data.work
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               instagraming + newline + // data.labelInstagram + data.instagram
               twittering + newline + // data.labelTwitter + data.twitter
               webing // data.labelWeb + data.web

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))