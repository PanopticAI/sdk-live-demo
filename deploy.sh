#!/bin/bash
rm -rf docs/1.0.9
cp -a ../test/vue-vital-sign-app-1.0.9/dist ./docs/1.0.9
rm -rf docs/2.4.0
cp -a ../test/vue-vital-sign-app-2.4.0/dist ./docs/2.4.0
git add docs
git commit -m "Update."
git push