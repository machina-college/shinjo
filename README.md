シンジョーまちなカレッジ
------

GitHub Pageの作業
----

  GitHub側で「shinjo」リポジトリ作成
  $ git init
  $ git add .
  $ git commit -m "Add a Iinit project"
  $ git branch -m master gh-pages
  $ git remote add origin https://github.com/machina-college/shinjo.git
  $ git push -u origin gh-pages

  DNS設定
    shinjo.machina-college.org
    CNAME
    300
    machina-college.github.io

  $ dig shinjo.machina-college.org +nostats +nocomments +nocmd
