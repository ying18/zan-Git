// pages/test/test.js
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    gameData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var gameList = app.globalURL._testURL + '/RoomApi/game';
    this.http(gameList, this.callback);
    wx.showNavigationBarLoading();
  },

  http: function (url,callback){
    wx.request({
      url: url, 
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        callback(res.data)
      }
    })
  },

  callback: function (res){
    console.log(res);

    // 处理数据，数据过滤+存储
    // ID
    // 图
    // 名字
    var gameData=[];
    for(var idx in res.data){
      var datas=res.data[idx];
      var gameName = datas.game_name;
      //名字太长，截取
      if (gameName.length >= 6){
        gameName = gameName.substring(0,6) + "...";
      }
      var temp={
        gameID : datas.cate_id,
        gameIcon : datas.game_icon,
        gameName: gameName
      }
      gameData.push(temp);
    }
    console.log(gameData);
    this.setData({ gameData })
    wx.hideNavigationBarLoading();
  }

})