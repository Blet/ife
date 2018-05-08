/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

var city = document.getElementById("aqi-city-input");
var value = document.getElementById("aqi-value-input");
var aqiTable = document.getElementById("aqi-table");
var addBtn = document.getElementById("add-btn");
var delBtn =document.getElementById("delBtn");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

function addAqiData() {
     let cityValue = city.value;
     let valueValue =value.value;
   if (!cityValue.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
        return alert("城市名必须为中英文字符！")
    }

    if(! valueValue.match(/^\d+$/)){
        return alert("请输入数字")
    }

    aqiData[cityValue] = valueValue;
}


/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  let value = "";
   if( ! Object.keys(aqiData).length ){
        return   aqiTable.innerHTML = value;
   }
  value = "  <tr><td>城市</td><td>空气质量</td><td>操作</td></tr>"
    for(var item in aqiData ){
      value += ` <tr>
                            <td>${item}</td>
                            <td>${aqiData[item]}</td>
                            <td><button data-city=${item}>删除</button></td>
                        </tr>`
   }
   aqiTable.innerHTML = value;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
 console.log(city);
 delete aqiData[city];
 console.log(aqiData);
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  addBtn.addEventListener("click",addBtnHandle);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  // aqiTable.addEventListener("click",delBtnHandle)
  aqiTable.addEventListener("click", function(event){
        if(event.target.nodeName.toLowerCase() === 'button') {
          delBtnHandle.call(null, event.target.dataset.city);
        }
    })
}

init();
