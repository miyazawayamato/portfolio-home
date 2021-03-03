const site0 = {
    img1:'noimage.jpg',
    text1:'reactでspaのサイトを作成しました。使ったライブラリは、「react-bootstrap」「react-router」「」です。ご覧になって頂いている通り「詳しい説明」をクリックすると、各サイトの詳しい説明が書かれているページに遷移します。',
    img2:'noimage.jpg',
    text2:'サイトは「github pages」でデプロイをしています。',
    img3:'noimage.jpg',
    text3:'デザインに関して',
};

const site1 = {
    img1:'qiita1.png',
    text1:'qiita風のサイトを作成しました。一番時間をかけ気合ををいれた制作物です。CRUD、会員登録、Markdownのパース、ajaxでいいねやタグ追加、テストなどの機能を実装しました。',
    img2:'qiita2.png',
    text2:'デプロイはAWSのEC2にしました。コードをリポジトリにpushすると、circleciにより自動テストされて、成功するとpullされる仕組みになっています。aws,circleci共に無料枠内で完了するように行いました。',
    img3:'qiita3.png',
    text3:'jqueryを用いてajaxで一部ページを遷移しなくても処理が行えるようになっています。具体例をあげると、マイページ・他ユーザーページの、投稿やいいねした記事と単語の取得。いいねボタン。未登録のタグ追加。現在のタグの取得。投稿のMarkdown表記のプレビュー機能です。',
};

const site2 = {
    img1:'blog1.png',
    text1:'php・javascript共に理解を深める学習目的で、フレームワークやライブラリを用いずに作成しました。管理者側と閲覧者側で分かれています。ログイン機能も作成はしましたが、あくまで見せる用の制作物なので実装はしていません。コードはコメントアウトやサイト間の接続がないようにしてあります。',
    img2:'blog2.png',
    text2:'実装にこだわった・難しかったのは、記事の編集ページと投稿前の確認ページです。特に記事の編集ページの画像をどうするか、なしからあり、ありからなし、ありから別のものに・・・等々のパターンを、javascriptでボタンによって選択してもらい、phpでswith文で現在画像の削除、追加を実装しました。',
    img3:'noimage.jpg',
    text3:'laravelを用いると簡単に実装できてしまう、csrfやxss対策もできるかぎり行いました。',
};

const objs = [site0,site1,site2];

export default objs;

