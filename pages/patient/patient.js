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
          "pagePath": "/pages/patient/patient?patientid=0",
          "text": "我的医生",
          "iconPath": "../../images/home.png",
          "selectedIconPath": "../../images/home-fill.png",
          "selectedColor": "#E55400",
          active: true
        },
        {
          "pagePath": "",
          "text": "我的咨询",
          "iconPath": "../../images/message.png",
          "selectedIconPath": "../../images/message-fill.png",
          "selectedColor": "#E55400",
          active: false
        },
        {
          "pagePath": "",
          "text": "我的",
          "iconPath": "../../images/wallet.png",
          "selectedIconPath": "../../images/wallet-fill.png",
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
    // this.setData将数据发送到date，让view重绘
    // 将对象转换为数组，遍历数组
    this.setData({
      UseDoctorData: doctorData.doctorData
    })

    wx.setNavigationBarTitle({
      title: '我的医生'
    })
  },
  // 跳转到医生的主页
  // event.currentTarget.dataset.doctorid 获取点击数据的ID
  gotoPatient: function (event) {
    // console.log(event);
    wx.navigateTo({
      url: '../patient/doctor/doctor?doctorid=' + event.currentTarget.dataset.doctorid
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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