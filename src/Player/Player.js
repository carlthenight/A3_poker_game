/**
 * Created by Administrator on 2017/4/2.
 */
var Player = cc.Class({
   ctor:function (data) {
       var self = this;
       self.name = null;
       self.id = null;
       self.deskNum = null;
       self.seatNum = null;
       self.isReady = false;
       self.isLeave = false;
   }
});