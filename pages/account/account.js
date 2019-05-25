// pages/account/account.js
let res = require("../detail/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getType:'byDelivery',
    isShowModel:false,
    deliver_time:'请选择配送时间',
    multiArray: [
    ['2019-05-25 今天'], 
    ['12：00 -- 14：00', '14：00 -- 16：00', '16：00 -- 18：00']
    ],
    multiIndex: [0, 0],
    myself_message: {clientName: '', clientPhone:'',flag:false},
    goodsList:[]
  },

  /**
   * 生命周期函数--监听页面加载 cartList
   */
  onLoad: function (options) {
    let list = res.cartList;
     this.setData({
       goodsList: list
     });
  },
  bindByDeliveryTap(){
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  bindSureMessage(data){
    this.setData({
      myself_message: data.detail
    });
  },
  bindDeliverTimeChange(e){
    let list = e.detail.value;
    let result = this.data.multiArray[0][list[0]] 
    + " " + this.data.multiArray[1][list[1]];
    this.setData({
      deliver_time: result
    });
  },
  bindByYourselfTap(){
    this.setData({
      isShowModel:true
    })
  },
  selectType(e){
    let temp = e.target.dataset.name;
    this.setData({
      getType: temp
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})