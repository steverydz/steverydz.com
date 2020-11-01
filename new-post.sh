#/bin/bash

POST_TITLE=$1
POST_SLUG=$(echo "$POST_TITLE" | tr " " "-" | tr "[:upper:]" "[:lower:]")
POSTS_PATH="src/posts/$POST_SLUG.md"

touch $POSTS_PATH

echo "---" >> $POSTS_PATH
echo "date: Created" >> $POSTS_PATH
echo "layout: default" >> $POSTS_PATH
echo "tags: post" >> $POSTS_PATH
echo "permalink: \"/{{ page.date | date: '%Y/%m/%d' }}/$POST_SLUG/index.html\"" >> $POSTS_PATH
echo "title": $POST_TITLE >> $POSTS_PATH
echo "---" >> $POSTS_PATH
