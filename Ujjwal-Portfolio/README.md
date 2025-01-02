# What I did to host this ReactJs app on Github (how to use gh-pages)

1. Install and save the 'gh-pages' dependency in directory using
   - npm install gh-pages --save-dev
2. Create a new branch with name "gh-page" _(Automatic)_

3. Add **"homepage": "https://{myusername}.github.io/{repo-name}"**
   - userName: ujjwalpandeyjava
   - repo-name: Portfolio0\
     In project’s 'package.json' above "name" as 1st line.
4. Add 1. **"predeploy": "npm run build",** 2. **"deploy": "gh-pages -d build",** in package.json's "scripts" first line.
5. Change the branch to gh-pages and upload all the files.
6. Run **"npm run deploy"** in terminal/cmd of local pc 1st time while uploading.
7. Done.
