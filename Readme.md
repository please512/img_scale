### 参数详情
| 参数值  |  是否必填  | 参数类型 | 举例 | 备注 |
| ---------|---- | -----| ------- | ------- |
| width   | 必填   |  Number | 500 | 不需要px |
| height | 必填 | Number |  500 | 不需要px |
| url | 必填    |  String  | './demo.png' |  |
| scaleId   | 必填   |  String | 'scale_1' | 不需要# |
| container | 必填     |  DomString | document.getElementsByClassName('abc')[0] | 放大镜容器 |
| scale  | 必填    |  Number | 2.5 | 放大倍数，1以上的数值 |

### 用法如下
##### 执行命令：`npm i zy-scale-img`

##### 引入方法：`import { scaleImg } from "zy-scale-img"`
##### html部分
```html
略
```
##### javascript部分
```javascript
    let options = {
        width: 500,
        height: 500,
        url: './demo.png',
        scaleId: 'scale_1',
        container:document.body || document.getElementsByClassName('abc')[0],
        scale:2
    }
    scaleImg(options)

```
###### 效果预览
![Image text](https://raw.githubusercontent.com/please512/img_scale/master/pic1.png)
![Image text](https://raw.githubusercontent.com/please512/img_scale/master/pic2.png)
![Image text](https://raw.githubusercontent.com/please512/img_scale/master/pic3.png)