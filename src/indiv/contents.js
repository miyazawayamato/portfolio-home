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

const site3 = {
    img1:'rpg1.png',
    text1:'簡単なRPGを制作しました。矢印キーで移動して、右上から右下にあるゴール（黄土色パネル）を目指します。通路にいる敵のパネルに当たると、バトルが発生します。バトルのテキストが右側に表示され、味方パーティー全員のHPが0になるとゲームオーバーです。味方パーティーは４体で、敵のパーティーは3体です。',
    img2:'rpg2.png',
    text2:'バトルの処理はphpで行っています。オブジェクト指向の勉強のために製作したものを、javascriptでhtmlに表示するようにしました。抽象クラスを作成し、それを継承してそれぞれキャラのインスタンスをバトル毎に生成します。攻撃メソッドなどは、オーバーライドしてキャラに合わせた攻撃にしてます。',
    img3:'rpg3.png',
    text3:'javascriptでは、特にfetchとcanvasを利用を重点に製作しました。fetchを利用してサーバー側と通信して、現在の味方のHPを送り、テキストとバトル後のhpを取得し表示するようにしています。canvasでマップを表示しています。次に進む方向のパネルが何かによって、進めるか壁か、バトルイベントか判断しています。参考サイト「」をコピペして手直ししたものでより理解を深めるため、コメントで何を行っているか記述をしてあります',
};

const site4 = {
    img1:'apitop.png',
    text1:'laravelで製作したサイトの一部をapiとして利用しています。具体的には、そこに登録してある資格一覧、個別の情報の取得とお問い合わせ確認メール送信です。laravelでapiサーバー、メール機能、reactでの非同期処理(axios、async/await)、リアルタイムバリデーションをアピールするためのものなので簡素です。',
    img2:'api1.png',
    text2:'サイト自体「」は、資格取得の体験談を投稿するサービスとして作成しましたが、初めてlaravelで制作したもので完成度が低いためトップページのリストで表示はしてません。そのため機能だけを利用し、外部からapiを叩いて再利用できるようにしました。',
    img3:'api2.png',
    text3:'お問い合わせフォームは実際に送信内容の確認メールが入力したメールアドレス宛てに届きます。リアルタイムのバリデーションも実装済み。またその内容は登録してある、ロリポップのメールアドレスにも届くようになっています。ポートフォリオなのでその内容に対して返信はしないです。',
};

const site5 = {
    img1:'noimage.jpg',
    text1:'開発中',
    img2:'noimage.jpg',
    text2:'開発中',
    img3:'noimage.jpg',
    text3:'開発中',
};

const objs = [site0,site1,site2,site3,site4,site5];

export default objs;

