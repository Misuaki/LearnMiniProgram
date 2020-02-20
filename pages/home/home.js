// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'hello world',
    students: [
      { id: 110, name: 'kobe', age: 30},
      { id: 1, name: 'james', age: 30 },
      { id: 120, name: 'curry', age: 20 },
      { id: 140, name: 'durant', age: 25 },
    ],
    count: 10
  },
  click(){
    console.log('按钮发生了点击'),
    this.setData({
      count: this.data.count + 1
    })
  },

  click2() {
    console.log('按钮发生了点击'),
      this.setData({
        count: this.data.count - 1
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