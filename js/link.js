
// 随机排列
function shuffle(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
}

// 渲染友情链接数据
function renderlink(data) {
  var name, avatar, site, li = "";
  shuffle(data);
  for (var i = 0; i < data.length; i++) {
    name = data[i].name;
    avatar = data[i].avatar;
    site = data[i].site;
    li += '<div class="card">' + '<a href="' + site + '" target="_blank">' + '<div class="thumb" style="background: url( ' + avatar + ');">' + '</div>' + '</a>' + '<div class="card-header">' + '<div><a href="' + site + '" target="_blank">' + name + '</a></div>' + '</div>' + '</div>';
  }
  document.querySelector(".link-navigation").innerHTML = li;
}

// 获取 友情链接json 文件
fetch('/links/linklist.json')
  .then(response => response.json())
  .then(res => renderlink(res));

// 渲染大佬链接数据
function dalaorenderlink(data) {
  var name, avatar, site, li = "";
  for (var i = 0; i < data.length; i++) {
    name = data[i].name;
    avatar = data[i].avatar;
    site = data[i].site;
    li += '<div class="card">' + '<a href="' + site + '" target="_blank">' + '<div class="thumb" style="background: url( ' + avatar + ');">' + '</div>' + '</a>' + '<div class="card-header">' + '<div><a href="' + site + '" target="_blank">' + name + '</a></div>' + '</div>' + '</div>';
  }
  document.querySelector(".link-navigation2").innerHTML = li;
}

// 获取 友情链接json 文件
fetch('/links/dalaolinklist.json')
  .then(response => response.json())
  .then(res => dalaorenderlink(res));
