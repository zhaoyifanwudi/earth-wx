Page({
  data:{
    // bar:[
    //   {
    //     id:1,
    //     name:"哺乳类"
    //   },
    //   {
    //     id:2,
    //     name:"鸟类"
    //   },
    //   {
    //     id:3,
    //     name:"鱼类"
    //   },
    //   {
    //     id:4,
    //     name:"两栖类"
    //   },
    //   {
    //     id:5,
    //     name:"爬行动物"
    //   },
    //   {
    //     id:6,
    //     name:"其他"
    //   },
    // ],
    isBar:1,
    barList:[true,false,false,false,false,false],
    vis:[false,false,false,false,false,false],
    ani:[
      [
        {
          name:"华南虎",
          imgUrl:"../../res/huanan.webp",
          ename:"South China tiger",
          class:"世界自然保护联盟列为：野外灭绝"
        },{
          name:"华南虎",
          imgUrl:"../../res/huanan.webp",
          ename:"South China tiger",
          class:"世界自然保护联盟列为：野外灭绝"
        }
      ],
      [
        {
          name:"华南虎",
          imgUrl:"../../res/huanan.webp",
          ename:"South China tiger",
          class:"世界自然保护联盟列为：野外灭绝"
        },{
          name:"华南虎",
          imgUrl:"../../res/huanan.webp",
          ename:"South China tiger",
          class:"世界自然保护联盟列为：野外灭绝"
        }
      ],
      [
        {
          name:"华南虎",
          imgUrl:"../../res/huanan.webp",
          ename:"South China tiger",
          class:"世界自然保护联盟列为：野外灭绝"
        },{
          name:"华南虎",
          imgUrl:"../../res/huanan.webp",
          ename:"South China tiger",
          class:"世界自然保护联盟列为：野外灭绝"
        }
      ],
    ],
    aniBird:[
      [
        {
          name:"菲律宾凤头鹦鹉",
          imgUrl:"../../res/yingwu.webp",
          ename:"Philippine cockatoo",
          class:"世界自然保护联盟列为：极危"
        },{
          name:"菲律宾凤头鹦鹉",
          imgUrl:"../../res/yingwu.webp",
          ename:"Philippine cockatoo",
          class:"世界自然保护联盟列为：极危"
        }
      ],
      [
        {
          name:"菲律宾凤头鹦鹉",
          imgUrl:"../../res/yingwu.webp",
          ename:"Philippine cockatoo",
          class:"世界自然保护联盟列为：极危"
        },{
          name:"菲律宾凤头鹦鹉",
          imgUrl:"../../res/yingwu.webp",
          ename:"Philippine cockatoo",
          class:"世界自然保护联盟列为：极危"
        }
      ],
      [
        {
          name:"菲律宾凤头鹦鹉",
          imgUrl:"../../res/yingwu.webp",
          ename:"Philippine cockatoo",
          class:"世界自然保护联盟列为：极危"
        },{
          name:"菲律宾凤头鹦鹉",
          imgUrl:"../../res/yingwu.webp",
          ename:"Philippine cockatoo",
          class:"世界自然保护联盟列为：极危"
        }
      ],
    ]
  },
  switchs:function(e){
    this.setData({
      isBar: e.currentTarget.dataset.uid
    });
    // let vis = new Array([false,false,false,false,false,false]);
    // this.setData({
    //   barList:this.data.vis
    // })
    // this.setData({
    //   barList[e.currentTarget.dataset.uid]: true
    // })
    // for(let i = 0;i < this.data.barList.length;i++){
    //   let vis = barList[i];
    //   // this.setData({
    //   //   barList[i]:false
    //   // })
    // }
    // this.data.barList.array.foreach(element => {
    //   this.setData({
    //     element:false
    //   })
    // });
    // console.log(this.data.barList);
  }

},
)