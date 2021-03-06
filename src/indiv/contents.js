const site0 = {
    img1:'qiita1.png',
    text1:'qiita風のサイトを作成しました。一番時間をかけ気合ををいれた制作物です。CRUD、会員登録、Markdownのパース、ajaxでいいねやタグ追加、テストなどの機能を実装しました。また、dockerで開発し、cicleciで自動テスト、成功したらAWSにデプロイするようにしています。',
    img2:'qiita2.png',
    text2:'デプロイはAWSのEC2にしました。コードをリポジトリにpushすると、circleciにより自動テストされて、成功するとpullされる仕組みになっています。他にもAWSの機能で、セッション管理はElastiCacheのRedisを利用し、画像の保存はS3を使用しています。aws,circleci共に無料枠内で完了するように行いました。',
    img3:'qiita3.png',
    text3:'jqueryを用いてajaxで一部ページを遷移しなくても処理が行えるようになっています。具体例をあげると、マイページ・他ユーザーページの、投稿やいいねした記事と単語の取得。いいねボタン。未登録のタグ追加。現在のタグの取得。投稿のMarkdown表記のプレビュー機能です。',
};
// const site0 = {
    //     img1:'hometop.png',
    //     text1:'reactでspaのサイトを作成しました。使ったライブラリは、「react-bootstrap」「react-router」「react-spring」です。ご覧になって頂いている通り「詳しい説明」をクリックすると、各サイトの詳しい説明が書かれているページに遷移します。',
    //     img2:'home1.png',
    //     text2:'サイトは「github pages」でデプロイをしています。',
    //     img3:'noimage.jpg',
    //     text3:'「react-spring」はまだ実装・学習の途中なので、順次ページを更新していく予定です。',
    // };
const site1 = {
    img1:'spring1.png',
    text1:'springbootとreactで制作した在庫管理システムです。納品、納品履歴の確認、在庫・納品先の編集ができます。商品の種類と納品数・納品先を選んで登録することで、現在の在庫数から個数が引かれ履歴として登録されます。',
    img2:'spring2.png',
    text2:'springbootでapiを作成してあります。在庫と顧客とcrud処理や納品登録の処理があります。デプロイはherokuにしており、freedynoを使用しているのでしばらく使用しないと起動するのに時間がかかります。junit5やmockitoなどspringbootに組み込んであるテスト機能を利用してテストもしてあります。',
    img3:'spring3.png',
    text3:'reactとtypesciptとscssを利用しています。axiosを利用してバックエンドと通信をしています。納品履歴詳細のアコーディンメニューや削除時の確認モーダルを実装してあります。',
};
const site2 = {
    img1:'todo1.png',
    text1:'Vue.jsを利用して予定の登録や削除ができるカレンダーを作成しました。SPAです。バックエンドのにはAWSのlambdaを用いてサーバレスで機能を実装しており、API化してデータのやり取りを行うようにしています。またデータベースもdynamodbを使用してnosqlで作成しました。',
    img2:'todo2.jpg',
    text2:'AWSのlambdaにpythonでデータベース（dyanamodb）との処理を書いています。それらをAPIGatawayを利用してAPIを作成しました。',
    img3:'todo3.png',
    text3:'サイトは「github pages」でデプロイをしています。',
};
const site3 = {
    img1:'covid1.png',
    text1:'コロナウイルスの情報が分かるサイトとそれをTwitterで自動でつぶやくBOTです。laravelとreactを用いて、政府CIOポータルが公開しているオープンAPIからデータを取得して表示しています。ツイッターアカウントは「@test66130109」。',
    img2:'covid3.png',
    text2:'laravelとreactで簡単なSPAのサイトを製作しました。フロント側のみでも実装はできますが、バックエンド側でapiに接続して情報を取得して、axiosを利用してフロント側にデータを持ってくるようにしてあります。デプロイはherokuにしてあります。',
    img3:'covid2.png',
    text3:'ある時間にコロナウイルスの最新情報を自動ツイートするタスクスケジュールを登録してあります。そして、Heroku Scheduler でphp artisan schedule:run　コマンドを実行するようにしてあります。実行時間帯は使用上やや不定期気味なので、ツイートも時間はやや不定期です。',
};
const site4 = {
    img1:'rpg1.png',
    text1:'簡単なRPGを制作しました。矢印キーで移動して、右上から右下にあるゴール（黄土色パネル）を目指します。通路にいる敵のパネルに当たると、バトルが発生します。バトルのテキストが右側に表示され、味方パーティー全員のHPが0になるとゲームオーバーです。味方パーティーは４体で、敵のパーティーは3体です。',
    img2:'rpg2.png',
    text2:'バトルの処理はphpで行っています。オブジェクト指向の勉強のために製作したものを、javascriptで表示するようにしました。抽象クラスを作成し、それを継承してそれぞれキャラのインスタンスをバトル毎に生成します。攻撃メソッドなどは、オーバーライドしてキャラに合わせた攻撃にしてます。',
    img3:'rpg3.png',
    text3:'javascriptでは、特にfetchとcanvasを利用を重点に製作しました。fetchを利用してサーバー側と通信して、現在の味方のHPを送り、テキストとバトル後のhpを取得し表示するようにしています。canvasでマップを表示しています。次に進む方向のパネルが何かによって、進めるか壁か、バトルイベントか判断しています。',
};
const site5 = {
    img1:'blog1.png',
        text1:'php・javascript共に理解を深める学習目的で、フレームワークやライブラリを用いずに作成しました。管理者側と閲覧者側で分かれています。ログイン機能も作成はしましたが、あくまで見せる用の制作物なので実装はしていません。コードはコメントアウトやサイト間の接続がないようにしてあります。',
    img2:'blog2.png',
    text2:'実装にこだわった・難しかったのは、記事の編集ページと投稿前の確認ページです。特に記事の編集ページの画像をどうするか、なしからあり、ありからなし、ありから別のものに・・・等々のパターンを、javascriptでボタンによって選択してもらい、phpでswith文で現在画像の削除、追加を実装しました。',
    img3:'noimage.jpg',
    text3:'laravelを用いると簡単に実装できてしまう、csrfやxss対策もできるかぎり行いました。',
};




const objs = [site0,site1,site2,site3,site4,site5];

export default objs;

