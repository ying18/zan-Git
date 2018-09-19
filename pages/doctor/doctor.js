// pages/doctor/doctor.js
// 导入数据
var doctorData = require('../data/doctor-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    UseDoctorData: "",
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
          "iconPath": "../../images/home.png",
          "selectedIconPath": "../../images/home-fill.png",
          "selectedColor": "#E55400",
          active: true
        },
        {
          "pagePath": "/pages/doctor/myServe/myServe?doctorid=0",
          "text": "我的患者",
          "iconPath": "../../images/message.png",
          "selectedIconPath": "../../images/message-fill.png",
          "selectedColor": "#E55400",
          active: false
        },
        {
          "pagePath": "/pages/doctor/mine/mine?doctorid=0",
          "text": "我的",
          "iconPath": "../../images/my.png",
          "selectedIconPath": "../../images/my-fill.png",
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
    // 打印获取到的ID的数据
    console.log(doctorData.doctorData[options.doctorid]);

    // this.setData将数据发送到date，让view重绘
    // 不需要遍历，直接使用对象
    var UseDoctorData = doctorData.doctorData[options.doctorid];
    this.setData(UseDoctorData)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '吴焱医生工作室'
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
  //右上角分享功能
  onShareAppMessage: function (res) {
    var that = this;
    return {
      title: '吴焱医生工作室',
      path: '/pages/doctor/doctor?doctorid=0',
      success: function (res) {
        // 转发成功

        that.shareClick();
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})