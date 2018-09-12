// pages/patient/dhzx/dhzx.js
// 导入数据
var doctorData = require('../../data/doctor-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    UseDoctorData: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 打印获取到的ID的数据
    //  console.log(doctorData.doctorData[options.doctorid]);

    // this.setData将数据发送到date，让view重绘
    // 不需要遍历，直接使用对象
    var UseDoctorData = doctorData.doctorData[options.doctorid];
    this.setData(UseDoctorData)

    wx.setNavigationBarTitle({
      title: '电话咨询'
    })
  },

  goToWaitPage: function(){
    wx.navigateTo({
      url: '/pages/patient/dhzx/wait/wait',
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