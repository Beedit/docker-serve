import express from 'express';
import { simpleGit, type SimpleGit } from 'simple-git';


const app = express();
const port = 8800;

const git: SimpleGit = simpleGit();
const gitPath = './static'
const repo = String(process.env.GIT_URL)


const init = async () => {
    try {
        await git
            .clone(repo, gitPath)
            .then (() => console.log(`Cloned ${repo} into ${gitPath}`))
            .catch((err) => { throw err })
    } catch (err) {
        throw err
    }
}

const main = async () => {
    await init()

    app.use("/static", express.static(gitPath));

    app.listen(port, () => {
        console.log(`Serving files on ${port}`)
    });
}

main()