/**
 * Created by vcernomschi on 5/16/16.
 */

'use strict'

import path from 'path';
import fs from 'fs';
import os from 'os';
import fsExtra from 'fs-extra';
import syncExec from 'sync-exec';
import GitHubApi from 'github';


var github = new GitHubApi({
  debug: true,
  protocol: "https",
  host: "api.github.com",
  timeout: 5000,
  headers: {
    "user-agent": "Code-Coverage-GitHub-App"
  },
  followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
  includePreview: true // default: false; includes accept headers to allow use of stuff under preview period
});

//@todo - encrypt token here OAuth2
// git log --pretty=format:"%h" -n 1
//github.authenticate({
//  type: "oauth",
//  token: ""
//});

github.issues.getCommentsForRepo({
  user: "vcernomschi",
  repo: "test-node-github-api",
  sort: "created",
  direction: "desc",
}, function(err, res) {
  console.log('GOING TO ADD COMMENT TO: ', res);
  console.log('ID: ', res[0].id);
  github.issues.createComment({
    user: "vcernomschi",
    repo: "test-node-github-api",
    number: 1,
    body: "TEST :white_check_mark: coverage increased, :x: coverage decreased",
  }, function (err, res) { console.log("done: ", res)})

});
