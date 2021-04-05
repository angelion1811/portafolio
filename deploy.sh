# build

git checkout -b gh-pages

npm run build

# navigate into the build output directory
# cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add dist 

git commit -m "subiendo"

git subtree push --prefix dist origin gh-pages
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

git checkout master

git branch -D gh-pages

cd -