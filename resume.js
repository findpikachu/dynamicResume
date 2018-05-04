
let result = `/*
     *面试官你好,我是高磊.
     *我将以动画的形式展示我自己.
     *只用文字介绍太单调了,
     *我将以代码的形式展示.
     *首先准备一些样式.
     */
     *{
       transition: all 1s;
       box-sizing: border-box;
       margin: 0;
       padding: 0;
     }
     html{
         background: rgb(222,222,222);
         font-size: 16px;
     }
     
     #code{
         border: 1px solid #aaa;
         padding: 16px;
         overflow: auto;
         height: 100vh;
     }
     /*我需要一点代码高亮*/
     .token.selector{
        color: #690;
     }
     .token.punctuation{
        color: #999;
     }
     .token.property{
        color: #905;
     }   
     .token.function{
        color: #DD4A68;
     }
     /*现在正式开始*/
     
     /*我需要一张白纸*/
     
     #code {
        width: 50%;
        float: left;
     }
     #paper {
        width: 50%;
        float: right;
        background-color: white;
        height:100vh;
        overflow: auto;
     }
     #paper {
        border: 16px solid black;
        padding: 16px;
     }
     `;
function writeCode(callback) {

    let offset = 0
    let code = document.querySelector("#code")
    let style = document.querySelector("#style")
    var id = setInterval(() => {
        offset += 1;
        code.innerHTML = Prism.highlight(result.substring(0, offset), Prism.languages.css);
        style.innerHTML = result.substring(0,offset);
        code.scrollTop = code.scrollHeight
        if (offset >= result.length){
            clearInterval(id);
            callback(markdownToHtml)
        }
    },10)


}
var md = `
# 自我介绍

我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉 JavaScript CSS

# 项目介绍

- XXX 轮播
- XXX 简历
- XXX 画板

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx`
let css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`
function writePaper(callback) {

    let paper = document.querySelector("#paper")
    let offset = 0
    let id = setInterval(() => {
        offset += 1
        paper.innerHTML = md.substring(0,offset)
        if (offset >= md.length){
            clearInterval(id)
            callback()
        }


    },10)
}

function markdownToHtml(){
    var css2 = `
        /* 接下来用一个优秀的库 marked.js
         * 把 Markdown 变成 HTML
         */
    `
    let code = document.querySelector("#code")
    let paper = document.querySelector("#paper")
    let offset = 0
    let id = setInterval(() => {
        offset += 1
        code.innerHTML  =  Prism.highlight(result+  css2.substring(0,offset), Prism.languages.css)
        if (offset >= css2.length){
            clearInterval(id)
            console.log(marked(md))
            paper.innerHTML = marked(md)
        }


    },10)

}

writeCode(writePaper)
