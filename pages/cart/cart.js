// pages/cart/cart.js
let cartList = require("../detail/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartGoods: [],
    selectedNum: -1,
    xsjeSum:-1,
    isEdit:false,
    isSelectAll: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let res = cartList.cartList;
    this.setData({
      cartGoods: res,
      selectedNum: res.length
    });
    this.calSelectedNum(); 
  },
  changeEdit(){
    let flag = this.data.isEdit;
    this.setData({
      isEdit: !flag,      
    });
  },
  addGoodsCount(data){
    //let goodsCount = this.data.cartGoods[]
    let index = data.detail.index;
    let goodsCount = data.detail.goodsCount;
    let res = this.data.cartGoods;

    res[index].goodsCount = goodsCount;
   this.setData({
     cartGoods: res
   });
    this.calSelectedNum();
  },
  calSelectedNum() {
    let res = this.data.cartGoods;
    let count = 0;
    let xsjeSum = 0;
    let flag = false;
    res.forEach((item, index) => {
      if (item.check) {
        count++;
        xsjeSum = xsjeSum + parseFloat(item.price) * parseInt(item.goodsCount);
      }
    });
    if (res.length == count){
      flag = true;
    }
    this.setData({
      selectedNum: count,
      xsjeSum: xsjeSum.toFixed(2),
      isSelectAll: flag
    });
  },
  changeSelectItem(data) {
    console.log('changeSelectItem', data.detail);
    let index = data.detail.index;
    let flag = data.detail.flag;
    this.data.cartGoods[index].check = flag;
    this.calSelectedNum();
  },
  selectAll() {
    let temp = this.data.cartGoods;
    if (this.data.isSelectAll) {
      temp.forEach((item, index) => {
        item.check = false;
      });
    } else {
      temp.forEach((item, index) => {
        item.check = true;
      });
    }

    this.setData({
      cartGoods: temp,
      isSelectAll: !this.data.isSelectAll
    });

    this.calSelectedNum();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})