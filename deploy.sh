#!/bin/bash
rm -rf docs
cp -a ../test/vue-vital-sign-app/dist ./docs
git add docs
git commit -m "Update."
git push