/**
 * Created by Administrator on 2017/3/27.
 */

var SocketLayer = cc.Layer.extend({
    ctor : function(){

    },
    loadSocketIO : function () {
        var SocketIO = SocketIO || window.io;
        var socketIO = SocketIO.connect('127.0.0.1:4747',{'connect timeout': 10000});
        this.socketIO = socketIO;
        var self = this;
    },

});



