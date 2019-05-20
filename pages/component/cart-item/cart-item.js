// pages/component/cart-item/cart-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
       type:Number,
       value:-1
    },
    imgUrl:{
      type:String,
      value:''
    }, tittle: {
      type: String,
      value: ''
    }, price: {
      type: Number,
      value: 0
    }, unit: {
      type: String,
      value: ''
    }, goodsCount: {
      type: Number,
      value: ''
    },check:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCk(e){
      console.log('changeCk', e.currentTarget);
      this.changeSelectItem();
    },
    changeSelectItem() {
      let flag = !this.properties.check
      this.triggerEvent('changeSelectItem', {
        index: this.properties.index,
        flag: flag
    });
      this.setData({
        check: flag
      });
    },
    addGoodsCount: function () {
      let goodsCount = ++this.data.goodsCount;
      this.setData({
        goodsCount: goodsCount
      });
      this.triggerEvent('addGoodsCount', {
        index: this.properties.index,
        goodsCount: goodsCount
      });
    },
    delGoodsCount() {
      if (this.data.goodsCount > 1) {
        let goodsCount = --this.data.goodsCount;
        this.setData({
          goodsCount: goodsCount
        });
      }
    },
  }
})
