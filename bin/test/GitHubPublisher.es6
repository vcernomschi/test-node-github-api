/**
 * Created by vcernomschi on 5/16/16.
 */

'use strict'

import path from 'path';
import fs from 'fs';
import os from 'os';
import fsExtra from 'fs-extra';
import syncExec from 'sync-exec';
import GitHubAPI from 'github';
import github from 'octonode';

var client = github.client('***');

client.get('/user', {}, function (err, status, body, headers) {
  console.log(body); //json object
});

var ghme   = client.me();
var ghrepo = client.repo('vcernomschi/test-node-github-api');