var img_src = ["1-1","1-2","1-3","2-0"];
var web_src = ["page1-0","page1-1","page1-2","page2-0"];
var d_src = ["初中语法汇总 （词法）","初中语法汇总（句法+语态）","初中语法汇总（时态）","组成细胞的分子"];

var code = ``;

window.onload = function() {
    for (let index = 0; index < web_src.length; index++) {
        code += `<div class="col" style="margin-bottom: 2rem;">
        <div class="card" style="width: 18rem">
          <img src="./images/${img_src[index]}.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${d_src[index]}</h5>
            <p class="card-text">我不想写这个简介。。。</p>
            <a href="./mindmap/${web_src[index]}.html" class="btn btn-primary"
              >查看思维导图</a
            >
            <a
              href="./mindmap/${d_src[index]}.zip"
              download="${d_src[index]}.zip"
              class="btn btn-primary"
              >下载源文件</a
            >
          </div>
        </div>
      </div>`
    }
    console.log("code: ", code);
    document.getElementById("items").innerHTML = "";
    document.getElementById("items").innerHTML = code;
}