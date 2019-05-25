// pages/component/model-self/model-self.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type:Boolean,
      value:false
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    clientName:'',
    clientPhone:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindSureMessage(){
      let result = { clientName: this.data.clientName, 
      clientPhone:this.data.clientPhone,flag:true};
      this.triggerEvent("bindSureMessage", result);
      this.bindShutDown();
      
    },
    bindClientPhone(e) {
      let clientPhone = e.detail.value;
      this.setData({
        clientPhone: clientPhone
      });
    },
    bindClientName(e){
      let clientName = e.detail.value;
      this.setData({
        clientName: clientName
      });
    },
    bindShutDown(){
      this.setData({
        isShow: false
      })
    }
  }
})
