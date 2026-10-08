import express from "express";
import { simpleGit } from "simple-git";

import env from "./env.js";

const app = express();
const gitPath = "./static";

const urlPath = env.LOCATION;
const port = 8800;

const init = async () => {
    const repo = ((env.USER && env.PASSWORD) ? `https://${env.USER}:${env.PASSWORD}@${env.GIT_URL}` : `https://${env.GIT_URL}`);
    const git = simpleGit();

    await git
        .clone(repo, gitPath)
        .then (() => console.log(`Cloned ${repo} into ${gitPath}`))
        .catch((err) => {
            throw err;
        });
};

const main = async () => {
    await init();

    app.use(`/${urlPath}`, express.static(gitPath));

    app.listen(port, () => {
        console.log(`Serving files on port ${port} at /${urlPath}`);
    });
};

main();
