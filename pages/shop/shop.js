// pages/shop/shop.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
food_info:'https://cdn.img.wenhairu.com/images/2019/06/23/2Q5h.png',
    sum_money:0.00,
    order_info_show:true,
    quality:0,
    showOrderInfo: true,
    order_infos:[],
    foods: [{
      name: '锅底类',
      icon: 'Bitmap',
      quantity: '1',
      hideHidden: true,
      food_info: 'foods_info_off',
      foods_info: [{
        id: '1',
        name: '火锅丸子',
        money: 15
      }, {
          id: '2',
          name: '红烧鱼',
          money: 16
        }]
    },
    {
      name: '丸滑类',
      icon: 'Bitmap1',
      quantity: '1',
      hideHidden: true,
      food_info: 'foods_info_off'
    },
    {
      name: '锅底类',
      icon: 'Bitmap',
      quantity: '1',
      hideHidden: true,
      food_info: 'foods_info_off'
    },
    {
      name: '特色菜类',
      icon: 'Bitmap',
      quantity: '1',
      hideHidden: true,
      food_info: 'foods_info_off'
    },
    {
      name: '经典火锅菜',
      icon: 'Bitmap',
      quantity: '1',
      hideHidden: true,
      food_info: 'foods_info_off'
    },
    {
      name: '牛肉羊肉类',
      icon: 'Bitmap',
      quantity: '1',
      hideHidden: true,
      food_info: 'foods_info_off'
    },
    {
      name: '海鲜河鲜类',
      icon: 'Bitmap',
      quantity: '1',
      hideHidden: true,
      food_info: 'foods_info_off'
    },
    {
      name: '豆面制品',
      icon: 'Bitmap',
      quantity: '1',
      hideHidden: true,
      food_info: 'foods_info_off'
    }
    ],
    foods_info: [{
      id: '1',
      name: '火锅丸子',
      money: 15
    }, {
      id: '2',
      name: '红烧鱼',
      money: 16
    }]
  },
  clickMenu: function (e) {
    var index = e.currentTarget.dataset.index;
    var staues = this.data.foods[index].hideHidden;
    var stauesval = "foods[" + index + "].hideHidden";
    var food_info = "foods[" + index + "].food_info";
    if (staues == true) {
      this.setData({
        [stauesval]: false,
        [food_info]: 'foods_info_on'
      })
    } else {
      this.setData({
        [stauesval]: true,
        [food_info]: 'foods_info_off'
      })
    }
  },
  show_orderinfo:function(e){
      this.setData({
        showOrderInfo:!this.data.showOrderInfo
      });
  },
  addFood: function (e) {
    var index = e.currentTarget.dataset.index;
    var cellindex = e.currentTarget.dataset.senindex;
    var page = getCurrentPages();
    var sum_money = this.data.sum_money;
    var money = this.data.foods[index].foods_info[cellindex].money;
    var quality = this.data.quality;
    money += sum_money;
    app.globalData.shopping_car.total_money=money;
    app.globalData.shopping_car.total_quality=quality+1;
    app.globalData.shopping_car.order_infos.push({
      id: '1',
      name: '火锅丸子',
      money: 15
    });
    this.setData({
      sum_money:money,
      quality:quality+1
    });
    this.setData({
      order_infos: app.globalData.shopping_car.order_infos
    });
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
    this.setData({
      order_infos: app.globalData.shopping_car.order_infos,
      sum_money: app.globalData.shopping_car.total_money,
      quality: app.globalData.shopping_car.total_quality
    });
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