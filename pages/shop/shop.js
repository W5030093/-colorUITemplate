// pages/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picresource: '../../images/1.jpg',
    appreciate_class: 'text-gray',
    focus:false,
    input_show:true
  },
  previewPic: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.src;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      urls: [index],
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  appreciate:function(e){
    this.setData({
      appreciate_class:'text-green'
    })
  },
  commentfill:function(){

      this.setData({
        focus:true,
        input_show:false
      })
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