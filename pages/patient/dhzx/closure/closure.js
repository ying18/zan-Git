// pages/patient/dhzx/closure/closure.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
  },

  /**
   * 弹出层函数
   */
  //出现
  modal_show: function () {

    this.setData({ flag: false })

  },
  //消失

  modal_hide: function () {

    this.setData({ flag: true })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  goToEvaluatePage: function () {
    wx.navigateTo({
      url: '/pages/patient/evaluate/evaluate',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '电话咨询'
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