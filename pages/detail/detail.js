// pages/detail/detail.js
let imgs = require("./data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    main_img_list:[],
    goodsCount:1
  },
  toCartPage(){
    wx.navigateTo({
      url: '/pages/cart/cart',
    })
  },
  addGoodsCount: function(){
     let goodsCount = ++this.data.goodsCount;
     this.setData({
       goodsCount: goodsCount
     });
  },
  delGoodsCount(){
    if(this.data.goodsCount > 1){
      let goodsCount = --this.data.goodsCount;
      this.setData({
        goodsCount: goodsCount
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      main_img_list: imgs.main_img_list
    });
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
     wx.switchTab({
       url: '/pages/detail2/detail2',
     })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})