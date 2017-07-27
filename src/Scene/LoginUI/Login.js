/**
 * Created by Administrator on 2017-07-14.
 */
var winSize;
var LoginLayer = cc.Layer.extend({
    
    ctor : function () {
        this._super();
        winSize = cc.director.getWinSize();

        var bg = new cc.Sprite(res.MMBackground_jpg);
        bg.setScaleX(winSize.width / bg.getTextureRect().width);
        bg.setScaleY(winSize.height / bg.getTextureRect().height);
        bg.x = winSize.width / 2;
        bg.y = winSize.height / 2;
        this.addChild(bg);

        //登陆按钮
        var login_nomal = new cc.Sprite(res.button_nomal_png);
        var login_pressed = new cc.Sprite(res.button_pressed_png);
        var loginItem = new cc.MenuItemSprite(
            login_nomal,
            login_pressed,
            function () {
                cc.log("lgoin is clicked!");
                cc.director.runScene(new MainScene());
            }, this);

        //注册按钮
        var signup_nomal = new cc.Sprite(res.button_nomal_png);
        var signup_pressed = new cc.Sprite(res.button_pressed_png);
        var signupItem =  new cc.MenuItemSprite(
            signup_nomal,
            signup_pressed,
            function () {
                cc.log("signup is clicked!");
            }, this);

        var mu = new cc.Menu(loginItem,signupItem);
        mu.x = winSize.width / 2 ;
        mu.y = winSize.height / 3 ;
        mu.alignItemsHorizontallyWithPadding(50);
        this.addChild(mu);

        return true;
    }

});

var LoginScene = cc.Scene.extend({
    onEnter: function(){
        this._super();
        var layer = new LoginLayer();
        this.addChild(layer);
    }
});