/**
 * Created by Administrator on 2017/4/2.
 */
var Player = function (n) {
    var self = this;
    //玩家姓名
    self.name = n ? n :'Player';
    //玩家是否为一队
    self.isTeam =false;
    //牌组
    self.carlList = [];
    //下一家
    self.nextPlayer = null;

    self.uid = null;
    self.deskNo = null;
    self.seatNo = null;
    //是否已经准备
    self.isReady = false;
    //是否已经离开
    self.isLeave = false;
};
