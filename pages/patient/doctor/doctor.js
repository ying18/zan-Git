
// 导入数据
var doctorData = require('../../data/doctor-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    UseDoctorData: ''
  },


  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 打印获取到的ID的数据
    // console.log(doctorData.doctorData[options.doctorid]);

    // this.setData将数据发送到date，让view重绘
    // 不需要遍历，直接使用对象
    var UseDoctorData = doctorData.doctorData[options.doctorid];
    this.setData(UseDoctorData)

    // 定义导航条页面标题
    this.setData({
      title: UseDoctorData.doctorName + '工作室'
    })
    wx.setNavigationBarTitle({
      title: this.data.title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  gotoTw: function (event) {
    // console.log(event);
    wx.navigateTo({
      url: '../twzx/twzx?doctorid=' + event.currentTarget.dataset.doctorid,
    })
  },
  gotoDh: function (event) {
    // console.log(event);
    wx.navigateTo({
      url: '../dhzx/dhzx?doctorid=' + event.currentTarget.dataset.doctorid,
    })
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: doctorData.doctorData[this.data.doctorid].doctorName + '工作室',
      path: '/pages/patient/patient?doctorid=' + doctorData.doctorData[this.data.doctorid].doctorid // 路径，传递参数到指定页面。
    }
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

  }
})