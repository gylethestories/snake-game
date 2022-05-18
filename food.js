import { getRandom } from "./util.js";

// 食物类
class Food {
  // 构造器 => 数据初始化
  constructor({ x = 0, y = 0, width = 20, height = 20, color = "green" } = {}) {
    // let { x, y, width } = options || {};

    // 存储器
    this.elements = [];

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // 渲染函数
  render(map) {
    this.remove(); // 删除之前创建的食物
    // x y 的坐标
    this.x = getRandom(0, map.offsetWidth / this.width - 10) * this.width;
    this.y = getRandom(0, map.offsetHeight / this.height - 10) * this.height;

    let div = document.createElement("div");
    map.appendChild(div);

    this.elements.push(div);

    // 设置div的样式

    div.style.position = "absolute";
    div.style.left = this.x + "px";
    div.style.top = this.y + "px";
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    div.style.backgroundColor = this.color;
  }

  remove() {
    // 从大到小
    for (let i = this.elements.length - 1; i >= 0; i--) {
      // 删除真实dom
      this.elements[i].parentNode.removeChild(this.elements[i]);
      // 删除数组中的元素
      this.elements.splice(i, 1);
    }
  }
}

export default Food;
