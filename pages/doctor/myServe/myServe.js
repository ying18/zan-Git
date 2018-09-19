// pages/doctor/myServe/myServe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gankData: {},
    loadingHidden: false,
    curSelClassifyIndex: 0,

    //配置tabBar  
    tabBar: {
      "color": "#999999",
      "selectedColor": "#E55400",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/doctor/doctor?doctorid=0",
          "text": "我的主页",
          "iconPath": "../../../images/home.png",
          "selectedIconPath": "../../../images/home-fill.png",
          "selectedColor": "#E55400",
          active: false
        },
        {
          "pagePath": "/pages/doctor/myServe/myServe?doctorid=0",
          "text": "我的患者",
          "iconPath": "../../../images/message.png",
          "selectedIconPath": "../../../images/message-fill.png",
          "selectedColor": "#E55400",
          active: true
        },
        {
          "pagePath": "/pages/doctor/mine/mine?doctorid=0",
          "text": "我的",
          "iconPath": "../../../images/my.png",
          "selectedIconPath": "../../../images/my-fill.png",
          "selectedColor": "#E55400",
          active: false
        }
      ],
      "position": "bottom"
    }  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '我的患者'
    })
  },
  
  // 分类点击监听（正在咨询）
  onTitleBarsClick0: function () {
    this.setData({
      curSelClassifyIndex: 0
    })
  },
  // 分类点击监听（已结束）
  onTitleBarsClick1: function () {
    this.setData({
      curSelClassifyIndex: 1
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})